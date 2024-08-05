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
  coach?: string;
  order?: number;
};

export type UserData = { username: string; id: string };
export type DraftData = {
  categories: string[];
  tiers: { name: string; max: number }[];
  draftOrder: UserData[];
  state: "" | "started" | "paused" | "ended";
  timerMinutes: number;
  pokemon: PokemonData[];
  draftCount: number;
};
export let draftData: DraftData = readDraftData();

function getRandomPokemon(
  tier: string,
  category: string
): PokemonData | string {
  let undrafted = getUndrafted({
    tier: tier,
    category: category,
  });
  if (undrafted.length > 0) {
    return undrafted[Math.floor(Math.random() * undrafted.length)];
  }
  return `No pokemon are left! Please choose again.`;
}

export function draftPokemon(
  user: User,
  pokemon: PokemonData,
  validate: boolean = false,
  order: number | undefined = undefined
): PokemonData | string {
  if (pokemon.coach) return "Invalid coach username.";
  if (validate && !validDraftPick(user, pokemon))
    return "Illegal pick. Please choose again.";
  draftData.draftCount++;
  pokemon.order = order ? order : draftData.draftCount;
  pokemon.coach = user.username;
  console.log(`${user.username} drafted ${pokemon.name}`);
  writeDraft();
  return pokemon;
}

export function draftRandom(
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption,
  validate: boolean = false
): PokemonData | string {
  const randomMon = getRandomPokemon(
    tier.value as string,
    category.value as string
  );
  if (typeof randomMon === "string") return randomMon;
  return draftPokemon(user, randomMon, validate);
}

export function draftUndo() {
  let data = draftData.pokemon.find(
    (pokemon) => pokemon.order === draftData.draftCount
  );
  if (!data) return;
  delete data.coach;
  delete data.order;
  draftData.draftCount--;
  writeDraft();
  return data;
}

export function getNextUser(): UserData {
  let reverse =
    Math.floor(draftData.draftCount / draftData.draftOrder.length) % 2;
  if (reverse) {
    return draftData.draftOrder[
      draftData.draftOrder.length -
        (draftData.draftCount % draftData.draftOrder.length) -
        1
    ];
  }
  return draftData.draftOrder[
    draftData.draftCount % draftData.draftOrder.length
  ];
}

export function readDraftData(): DraftData {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getUndrafted(
  options: { tier?: string; category?: string } = {}
) {
  let undraftedData = draftData.pokemon.filter(
    (pokemon) =>
      pokemon.coach === undefined &&
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
  options: { tier?: string; category?: string; user?: string } = {}
) {
  let draftedData = draftData.pokemon.filter(
    (pokemon) =>
      (!options.user || pokemon.coach === options.user) &&
      pokemon.coach !== undefined
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
    delete pokemon.coach;
  }
  draftData.draftCount = 0;
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
  oldPokemon: PokemonData,
  user: User,
  validate: boolean = false
): PokemonData | string {
  let newPokemon = getRandomPokemon(oldPokemon.tier, oldPokemon.category);
  if (typeof newPokemon === "string") return newPokemon;
  return trade(oldPokemon, newPokemon, user, validate);
}

export function trade(
  oldPokemon: PokemonData,
  newPokemon: PokemonData,
  user: User,
  validate: boolean = false
): PokemonData | string {
  if (!oldPokemon || !newPokemon) return `Invalid Pokemon.`;
  if (oldPokemon.coach != user.username)
    return `Coach does not have ${oldPokemon} drafted.`;
  let pokemon = draftPokemon(user, newPokemon, validate, oldPokemon.order);
  if (typeof pokemon === "string") return pokemon;
  delete oldPokemon.coach;
  delete oldPokemon.order;
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

export function canDraft(userId: string): boolean {
  let user = draftData.draftOrder.find((user) => user.id === userId);
  if (!user) return false;
  let userIndex = draftData.draftOrder.indexOf(user);
  let orderLength = draftData.draftOrder.length;
  if (userIndex < 0) return false;
  let draftTotal = Math.floor(draftData.draftCount / orderLength);
  let reverse = draftTotal % 2;
  if (reverse) {
    if (userIndex <= orderLength - (draftData.draftCount % orderLength))
      return false;
  } else {
    if (userIndex > draftData.draftCount % orderLength) return false;
  }
  draftTotal++;
  return getDrafted({ user: user.username }).length < draftTotal;
}

export function validDraftPick(user: User, pokemonData: PokemonData): boolean {
  let max = draftData.tiers.find(
    (tierData) => tierData.name === pokemonData.tier
  )?.max;
  if (!max) return false;
  return (
    getDrafted({ tier: pokemonData.tier, user: user.username }).length < max
  );
}

export function notifyNext(interaction: BaseInteraction) {
  setTimeout(async () => {
    let nextUser = await interaction.client.users.fetch(getNextUser().id);
    interaction.channel?.send(`${nextUser} you're up next!`);
  }, 1000);
}

export function skipUser(user: User) {
  draftData.draftCount++;
}
