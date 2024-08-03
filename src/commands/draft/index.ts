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
};

export let transactions: { user: User; draft: DraftData }[] = [];

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
    transactions.push({ user: user, draft: randomMon });
    console.log(`${user.username} drafted ${randomMon.name}`);
    writeDraft(draftData);
    return randomMon;
  } else {
    return;
  }
}

export function draftUndo() {
  const transaction = transactions.pop();
  if (transaction) {
    delete transaction.draft.coach;
  }
  return transaction;
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

function writeDraft(draftData = getDraftData()) {
  fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
}

function getDraftedMons() {
  let draftData: DraftData[] = getDraftData();
  let draftedMons = draftData.filter((mon) => mon.coach);
  return draftedMons;
}
