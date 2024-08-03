import path from "path";
import fs from "fs";
import { DraftData } from "..";

export const filePath = path.resolve(__dirname, "./draft.json");

function resetDraft() {
  let draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  for (let pokemon of draftData) {
    delete pokemon.coach;
  }
}

function getDraftedMons() {
  let draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let draftedMons = draftData.filter((mon) => mon.coach);
  return draftedMons;
}

function getMonsInCategory(category: string) {
  let draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let categoryMons = draftData.filter((mon) => mon.category === category);
  return categoryMons;
}

function getMonsInCategoryAndTier(category: string, tier: string) {
  let categoryMons = getMonsInCategory(category);
  let categoryTierMons = categoryMons.filter((mon) => mon.tier === tier);
  return categoryTierMons;
}
