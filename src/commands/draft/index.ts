import path from "path";
import fs from "fs";
import { User, CommandInteractionOption } from "discord.js";

export const filePath = path.resolve(__dirname, "./draft.json");

export const categoryChoices = [
  "Utility",
  "Sweeper",
  "Stall",
  "Wall",
  "Field Manipulation",
  "Bulky Defense",
  "Bulky Offense",
  "NFE",
];

export const tierChoices = ["S", "A", "B", "C", "D"];

export type DraftData = {
  name: string;
  png: string;
  pid: string;
  tier: string;
  category: string;
  coach?: string;
  order?: number;
};

export let draftData: DraftData[] = readDraftData();

let orderCount = draftData.reduce(
  (max, pokemon) =>
    (max = pokemon.order && pokemon.order > max ? pokemon.order : max),
  0
);

function getRandomPokemon(
  tier: string,
  category: string
): DraftData | undefined {
  let undrafted = getUndrafted({
    tier: tier,
    category: category,
  });
  if (undrafted.length > 0) {
    return undrafted[Math.floor(Math.random() * undrafted.length)];
  }
  return;
}

export function draftPokemon(
  user: User,
  pokemon: DraftData,
  order = ++orderCount
): DraftData | undefined {
  if (pokemon.coach) return;
  pokemon.order = order;
  pokemon.coach = user.username;
  console.log(`${user.username} drafted ${pokemon.name}`);
  writeDraft();
  return pokemon;
}

export function draftRandom(
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption
): DraftData | undefined {
  const randomMon = getRandomPokemon(
    tier.value as string,
    category.value as string
  );
  if (!randomMon) return;
  return draftPokemon(user, randomMon);
}

export function draftUndo() {
  let data = draftData.find((pokemon) => pokemon.order === orderCount);
  if (!data) return;
  delete data.coach;
  delete data.order;
  writeDraft();
  return data;
}

export function readDraftData(): DraftData[] {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getUndrafted(
  options: { tier?: string; category?: string } = {}
) {
  let undraftedData = draftData.filter(
    (pokemon) => pokemon.coach === undefined
  );
  if (options.tier) {
    undraftedData = undraftedData.filter(
      (pokemon) => pokemon.tier === options.tier
    );
  }
  if (options.category) {
    undraftedData = undraftedData.filter(
      (pokemon) => pokemon.category === options.category
    );
  }
  return undraftedData;
}

export function getDrafted(
  options: { tier?: string; category?: string; user?: User } = {}
) {
  let draftedData = draftData.filter(
    (pokemon) =>
      (!options.user || pokemon.coach === options.user.username) &&
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
  for (let pokemon of draftData) {
    delete pokemon.coach;
  }
  writeDraft();
}

function writeDraft() {
  fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
}

export function getDraftData(
  query: string,
  search: "pid" | "name" = "pid"
): DraftData | undefined {
  return draftData.find(
    (pokemon) => pokemon[search].toLowerCase() === query.toLowerCase()
  );
}

export function tradeRandom(
  oldPokemon: DraftData,
  user: User
): DraftData | undefined {
  let newPokemon = getRandomPokemon(oldPokemon.tier, oldPokemon.category);
  if (!newPokemon) return;
  return trade(oldPokemon, newPokemon, user);
}

export function trade(
  oldPokemon: DraftData,
  newPokemon: DraftData,
  user: User
): DraftData | undefined {
  if (!oldPokemon || oldPokemon.coach != user.username || !newPokemon) return;
  if (draftPokemon(user, newPokemon, oldPokemon.order)) {
    delete oldPokemon.coach;
    delete oldPokemon.order;
    writeDraft();
    return newPokemon;
  }
  return;
}
