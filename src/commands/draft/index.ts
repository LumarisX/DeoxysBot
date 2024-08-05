import { BaseInteraction, CommandInteractionOption, User } from "discord.js";
import fs from "fs";
import path from "path";

export const filePath = path.resolve(__dirname, "./draft.json");

export type PokemonData = {
  name: string;
  png: string;
  pid: string;
  tier: string;
  category: string;
  draft: { [key: string]: { coach: string; order: number } };
};

export type UserData = { username: string; id: string };
export type DivisionData = {
  channels: string[];
  order: UserData[];
  name: string;
  draftCount: number;
};
export type DraftData = {
  categories: string[];
  tiers: { name: string; max: number }[];
  divisions: DivisionData[];
  state: "" | "started" | "paused" | "ended";
  timerMinutes: number;
  pokemon: PokemonData[];
};
export let draftData: DraftData = readDraftData();

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

export function draftPokemon(
  division: DivisionData,
  user: User,
  pokemon: PokemonData,
  options: { validate?: true; order?: number } = {}
): PokemonData | string {
  if (pokemon.draft[division.name]) return "Already drafted.";
  if (options.validate && !validDraftPick(division, user, pokemon))
    return "Illegal pick. Please choose again.";
  division.draftCount++;
  pokemon.draft[division.name] = {
    order: options.order ? options.order : division.draftCount,
    coach: user.username,
  };
  writeDraft();
  return pokemon;
}

export function draftRandom(
  division: DivisionData,
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption,
  options: { validate?: true }
): PokemonData | string {
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

export function draftUndo(division: DivisionData) {
  let data = draftData.pokemon.find(
    (pokemon) =>
      pokemon.draft[division.name] &&
      pokemon.draft[division.name].order === division.draftCount
  );
  if (!data) return;
  delete data.draft[division.name];
  division.draftCount--;
  writeDraft();
  return data;
}

export function getNextUser(division: DivisionData): UserData {
  let reverse = Math.floor(division.draftCount / division.order.length) % 2;
  if (reverse) {
    return division.order[
      division.order.length - (division.draftCount % division.order.length) - 1
    ];
  }
  return division.order[division.draftCount % division.order.length];
}

export function readDraftData(): DraftData {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getUndrafted(
  division: DivisionData,
  options: { tier?: string; category?: string } = {}
) {
  let undraftedData = draftData.pokemon.filter(
    (pokemon) =>
      pokemon.draft[division.name] === undefined &&
      options.tier &&
      pokemon.tier &&
      pokemon.tier.toLowerCase() === options.tier.toLowerCase() &&
      options.category &&
      pokemon.category &&
      pokemon.category.toLowerCase() === options.category.toLowerCase()
  );
  return undraftedData;
}

export function getDrafted(
  division: DivisionData,
  options: { tier?: string; category?: string; user?: string } = {}
) {
  let draftedData = draftData.pokemon.filter(
    (pokemon) =>
      !options.user ||
      (pokemon.draft[division.name] &&
        pokemon.draft[division.name].coach === options.user &&
        pokemon.draft[division.name].coach !== undefined)
  );
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
  return draftedData;
}

export function resetDraft() {
  for (let pokemon of draftData.pokemon) {
    pokemon.draft = {};
  }
  for (let divison of draftData.divisions) {
    divison.draftCount = 0;
  }
  draftData.state = "";
  writeDraft();
}

function writeDraft() {
  fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
}

export function getDraftData(
  query: string,
  search: "pid" | "name" = "pid"
): PokemonData | undefined {
  return draftData.pokemon.find(
    (pokemon) => pokemon[search].toLowerCase() === query.toLowerCase()
  );
}

export function tradeRandom(
  division: DivisionData,
  oldPokemon: PokemonData,
  user: User,
  options: { validate?: true }
): PokemonData | string {
  let newPokemon = getRandomPokemon(
    division,
    oldPokemon.tier,
    oldPokemon.category
  );
  if (typeof newPokemon === "string") return newPokemon;
  return trade(division, oldPokemon, newPokemon, user, {
    validate: options.validate,
  });
}

export function trade(
  division: DivisionData,
  oldPokemon: PokemonData,
  newPokemon: PokemonData,
  user: User,
  options: { validate?: true }
): PokemonData | string {
  if (!oldPokemon || !newPokemon) return `Invalid Pokemon.`;
  if (oldPokemon.draft[division.name].coach != user.username)
    return `Coach does not have ${oldPokemon} drafted.`;
  let pokemon = draftPokemon(division, user, newPokemon, {
    validate: options.validate,
    order: oldPokemon.draft[division.name].order,
  });
  if (typeof pokemon === "string") return pokemon;
  delete oldPokemon.draft[division.name];
  writeDraft();
  return newPokemon;
}

export function updateState(state: "start" | "end" | "pause") {
  let replyString = "";
  if (state === "start") {
    draftData.state = "started";
    replyString = "Draft has been started";
  } else if (state === "end") {
    draftData.state = "ended";
    replyString = "Draft has ended";
  } else if (state === "pause") {
    draftData.state = "paused";
    replyString = "Draft has been paused";
  }
  writeDraft();
  return replyString;
}

export function validateUser(division: DivisionData, userId: string): boolean {
  let user = division.order.find((user) => user.id === userId);
  return user ? true : false;
}

export function canDraft(division: DivisionData, userId: string): boolean {
  let user = division.order.find((user) => user.id === userId);
  if (!user) return false;
  let userIndex = division.order.indexOf(user);
  let orderLength = division.order.length;
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
      getNextUser(division).id
    );
    interaction.channel?.send(`${nextUser} you're up next!`);
  }, 1000);
}

export function skipUser(division: DivisionData, user: User) {
  division.draftCount++;
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
