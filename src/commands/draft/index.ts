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
  pid: string;
  tier: string;
  category: string;
  coach?: string;
  order?: number;
};

let orderCount = getDraftData().reduce(
  (max, pokemon) =>
    (max = pokemon.order && pokemon.order > max ? pokemon.order : max),
  0
);

export function draftPokemon(
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption
):
  | {
      name: string;
      pid: string;
      tier: string;
      category: string;
      coach?: string;
      order?: number;
    }
  | undefined {
  const draftData: DraftData[] = getDraftData();
  let undrafted = draftData.filter(
    (pokemon) =>
      pokemon.category === category.value &&
      pokemon.tier === tier.value &&
      !pokemon.coach
  );
  if (undrafted.length > 0) {
    const randomMon = undrafted[Math.floor(Math.random() * undrafted.length)];
    randomMon.coach = user.username;
    randomMon.order = ++orderCount;
    console.log(`${user.username} drafted ${randomMon.name}`);
    writeDraft(draftData);
    return randomMon;
  } else {
    return;
  }
}

export function draftUndo() {
  const draftData = getDraftData();
  let data = draftData.find((pokemon) => pokemon.order === orderCount);
  if (!data) return;
  delete data.coach;
  delete data.order;
  writeDraft(draftData);
  return data;
}

export function getDraftData(): DraftData[] {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getUndrafted(
  options: { tier?: string; category?: string } = {}
) {
  let undraftedData = getDraftData().filter(
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

export function resetDraft() {
  const draftData: DraftData[] = getDraftData();
  for (let pokemon of draftData) {
    delete pokemon.coach;
  }
  writeDraft(draftData);
}

function writeDraft(draftData: DraftData[]) {
  fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
}

function getDraftedMons() {
  let draftData: DraftData[] = getDraftData();
  let draftedMons = draftData.filter((mon) => mon.coach);
  return draftedMons;
}
