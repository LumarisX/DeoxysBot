import {
  BaseInteraction,
  CommandInteraction,
  CommandInteractionOption,
  User,
} from "discord.js";
import fs from "fs";
import path from "path";
import { Timer } from "./timer";
import { DexData, getDexData } from "./data/draftdex";

export const filePath = path.resolve(__dirname, "./draft.json");

export type PokemonData = {
  pid: string;
  tier: string;
  category: string;
  note?: string;
};
export type CoachData = {
  username: string;
  id: string;
  order: number;
  leftPicks: PokemonData[];
  team: ({ pokemon: PokemonData; order: number } | null)[];
};
export type DivisionData = {
  channels: string[];
  coaches: CoachData[];
  name: string;
  draftCount: number;
  timer: undefined | Timer;
};
export type Draft = {
  categories: string[];
  tiers: { name: string; max: number }[];
  divisions: DivisionData[];
  state: "" | "started" | "paused" | "ended";
  timerMinutes: number;
  reminders: number[];
  pokemon: PokemonData[];
};

export let draftData: Draft = readDraftData();

function getRandomPokemon(
  division: DivisionData,
  tier: string,
  category: string
): PokemonData | string {
  let undrafted = getUndrafted(division, {
    tier: tier,
    category: category,
  });
  if (undrafted.length > 0) {
    return undrafted[Math.floor(Math.random() * undrafted.length)];
  }
  return `No pokemon are left! Please choose again.`;
}

export function isDrafted(pid: string, division: DivisionData) {
  return division.coaches.find((coach) =>
    coach.team.some((pick) => pick && pick.pokemon.pid === pid)
  );
}

export function draftPokemon(
  division: DivisionData,
  user: User,
  pokemon: PokemonData,
  options: { validate?: true; order?: number } = {}
): (DexData & PokemonData) | string {
  if (isDrafted(pokemon.pid, division)) return "Already drafted.";
  if (options.validate && !validDraftPick(division, user, pokemon))
    return "Illegal pick. Please choose again.";
  let coach = division.coaches.find((coach) => coach.id === user.id);
  if (!coach) return "You are not a coach in this division.";
  division.timer = undefined;
  coach.team.push({
    order: options.order ? options.order : division.draftCount,
    pokemon: pokemon,
  });
  let dex = getDexData(pokemon.pid)!;
  writeDraft();
  return {
    pid: pokemon.pid,
    png: dex.png,
    note: pokemon.note,
    name: dex.name,
    tier: pokemon.tier,
    category: pokemon.category,
  };
}

export function draftRandom(
  division: DivisionData,
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption,
  options: { validate?: true }
): (DexData & PokemonData) | string {
  const randomMon = getRandomPokemon(
    division,
    tier.value as string,
    category.value as string
  );
  if (typeof randomMon === "string") return randomMon;
  return draftPokemon(division, user, randomMon, {
    validate: options.validate,
  });
}

export function undoDraft(division: DivisionData) {
  let coach = division.coaches.find((coach) =>
    coach.team.some((pick) => pick?.order === division.draftCount)
  );
  if (!coach) return;
  for (let i in coach.team) {
    if (coach.team[i] && coach.team[i].order === division.draftCount) {
      coach.team[i] = null;
    }
  }
  division.draftCount--;
  division.timer = undefined;
  writeDraft();
  return coach;
}

export function getNextCoach(division: DivisionData): CoachData {
  let reverse = Math.floor(division.draftCount / division.coaches.length) % 2;
  if (reverse) {
    return division.coaches[
      division.coaches.length -
        (division.draftCount % division.coaches.length) -
        1
    ];
  }
  return division.coaches[division.draftCount % division.coaches.length];
}

export function readDraftData(): Draft {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getUndrafted(
  division: DivisionData,
  options: { tier?: string; category?: string } = {}
) {
  let undraftedData = draftData.pokemon.filter(
    (pokemon) =>
      !isDrafted(pokemon.pid, division) &&
      options.tier &&
      pokemon.tier.toLowerCase() === options.tier.toLowerCase() &&
      options.category &&
      pokemon.category.toLowerCase() === options.category.toLowerCase()
  );
  return undraftedData;
}

export function getDrafted(
  division: DivisionData,
  options: { tier?: string; category?: string; user?: string } = {}
): (DexData & PokemonData)[] {
  let draftedData = division.coaches
    .filter((coach) => !options.user || options.user === coach.username)
    .flatMap((coach) => coach.team)
    .filter((pick) => pick != null)
    .map((pick) => pick.pokemon);

  if (options.tier) {
    draftedData = draftedData.filter(
      (pokemon) => pokemon.tier === options.tier
    );
  }
  if (options.category) {
    draftedData = draftedData.filter(
      (pokemon) => pokemon.category === options.category
    );
  }

  return draftedData.map((pokemon) => {
    let dex = getDexData(pokemon.pid)!;
    return {
      pid: pokemon.pid,
      png: dex.png,
      note: pokemon.note,
      name: dex.name,
      tier: pokemon.tier,
      category: pokemon.category,
    };
  });
}

export function resetDraft() {
  draftData.divisions.forEach((division) => {
    division.draftCount = 0;
    division.coaches.forEach((coach) => (coach.team = []));
  });
  draftData.state = "";
  writeDraft();
}

function writeDraft() {
  fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
}

export function getDraftData(query: string): PokemonData | undefined {
  return draftData.pokemon.find((pokemon) => pokemon.pid === query);
}

export function tradeRandom(
  division: DivisionData,
  oldPokemon: DexData,
  coach: CoachData,
  options: { validate?: true }
): DexData | string {
  let oldPokemonDraft = getDraftData(oldPokemon.pid);
  if (!oldPokemonDraft) return `Unknown pokemon ${oldPokemon.pid}.`;
  let newPokemon = getRandomPokemon(
    division,
    oldPokemonDraft.tier,
    oldPokemonDraft.category
  );
  if (typeof newPokemon === "string") return newPokemon;
  return trade(division, oldPokemon, newPokemon, coach, {
    validate: options.validate,
  });
}

export function trade(
  division: DivisionData,
  oldPokemonDex: DexData,
  newPokemon: PokemonData,
  coach: CoachData,
  options: { validate?: true }
): DexData | string {
  if (!oldPokemonDex || !newPokemon) return `Invalid Pokemon.`;
  let tradeIndex = coach.team.findIndex(
    (pick) => pick && pick.pokemon.pid === oldPokemonDex.pid
  );
  if (tradeIndex < 0)
    return `${coach.username} does not have ${oldPokemonDex.name} drafted.`;
  if (isDrafted(newPokemon.pid, division)) return `Already drafted.`;
  if (
    options.validate &&
    newPokemon.tier !== coach.team[tradeIndex]!.pokemon.tier
  )
    return `Trades must be the same tier.`;
  coach.team[tradeIndex]!.pokemon = newPokemon;
  writeDraft();
  return getDexData(newPokemon.pid)!;
}

export function updateState(
  state: "start" | "end" | "pause" | "resume",
  interaction: CommandInteraction
) {
  if (state === "start") {
    if (draftData.state === "") {
      draftData.state = "started";
      interaction.reply("The draft has been started!");
    } else {
      interaction.reply("Draft has already been started.");
    }
  } else if (state === "end") {
    draftData.state = "ended";
    interaction.reply("Draft has ended.");
  } else if (state === "pause") {
    draftData.state = "paused";
    draftData.divisions.forEach((division) => division.timer?.pause());
    interaction.reply("Draft has been paused.");
  } else if (state === "resume") {
    if (draftData.state === "paused") {
      draftData.state = "started";
      interaction.reply("Draft has been resumed.");
      notifyNext(interaction);
      draftData.divisions.forEach((division) => division.timer?.start());
    } else {
      interaction.reply("Draft has already been resumed.");
    }
  }
  writeDraft();
}

export function getCoach(division: DivisionData, userId: string) {
  return division.coaches.find((user) => user.id === userId);
}

export function canDraft(division: DivisionData, userId: string): boolean {
  let user = division.coaches.find((user) => user.id === userId);
  if (!user) return false;
  let userIndex = division.coaches.indexOf(user);
  let orderLength = division.coaches.length;
  if (userIndex < 0) return false;
  let draftTotal = Math.floor(division.draftCount / orderLength);
  let reverse = draftTotal % 2;
  if (reverse) {
    if (userIndex <= orderLength - (division.draftCount % orderLength))
      return false;
  } else {
    if (userIndex > division.draftCount % orderLength) return false;
  }
  draftTotal++;
  return getDrafted(division, { user: user.username }).length < draftTotal;
}

export function validDraftPick(
  division: DivisionData,
  user: User,
  pokemonData: PokemonData
): boolean {
  let max = draftData.tiers.find(
    (tierData) => tierData.name === pokemonData.tier
  )?.max;
  if (!max) return false;
  return (
    getDrafted(division, { tier: pokemonData.tier, user: user.username })
      .length < max
  );
}

export function notifyNext(interaction: BaseInteraction) {
  setTimeout(async () => {
    let division = getDivisionByChannel(interaction.channelId);
    if (!division) return;
    let nextUser = await interaction.client.users.fetch(
      getNextCoach(division).id
    );
    if (!division.timer) {
      division.timer = new Timer(
        draftData.timerMinutes,
        draftData.reminders,
        (remainingMinutes: number) => {
          interaction.channel?.send(
            `${nextUser} ${remainingMinutes} minutes left!`
          );
        },
        () => {
          skipUser(interaction);
        }
      );
      if (nextUser.username === "h8oj") {
        division.timer.reminders = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
          55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
          72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
          89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
          105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
          119,
        ];
      }
      division.timer.start();
    }
    interaction.channel?.send(
      `${nextUser} you're up next! You have ${division.timer.remainingMinutes} minutes to make your pick.`
    );
  }, 1000);
}

export async function skipUser(
  interaction: BaseInteraction,
  division?: DivisionData
) {
  if (!division) division = getDivisionByChannel(interaction.channelId);
  if (!division) return;
  let skippedUser = await interaction.client.users.fetch(
    getNextCoach(division).id
  );
  interaction.channel?.send(`${skippedUser} was skipped.`);
  advanceDraft(interaction);
}

export function getDivisionByChannel(
  channelID: string | null
): DivisionData | undefined {
  if (!channelID) return;
  let division = draftData.divisions.find((division) =>
    division.channels.includes(channelID)
  );
  return division;
}

export function getDivisionByName(
  name: string | null
): DivisionData | undefined {
  if (!name) return;
  let division = draftData.divisions.find((division) => division.name === name);
  return division;
}

export function isNextPick(user: User, division: DivisionData): boolean {
  if (user.username !== getNextCoach(division).username) return false;
  let drafted = getDrafted(division, { user: user.username });
  if (
    Math.floor(division.draftCount / division.coaches.length) > drafted.length
  )
    return false;
  return true;
}

export function advanceDraft(interaction: BaseInteraction) {
  let division = getDivisionByChannel(interaction.channelId);
  if (!division) return;
  division.timer = undefined;
  division.draftCount++;
  notifyNext(interaction);
}

export function guildCheck(guildId: string | null) {
  return guildId === `917801941034229800` || guildId === `963884409252118609`;
}

export function addPicks(coach: CoachData, picks: string[]) {
  coach.leftPicks = picks
    .map((pid) => getDraftData(pid))
    .filter((pid) => pid != undefined);
  writeDraft();
  return;
}
