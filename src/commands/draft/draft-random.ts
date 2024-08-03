import {
  SlashCommandBuilder,
  CommandInteraction,
  AttachmentBuilder,
  CommandInteractionOption,
  User,
} from "discord.js";
import { Command, DraftData } from "..";
import path from "path";
import fs from "fs";
import { filePath } from ".";

const categoryChoices = [
  "Utility",
  "Sweeper",
  "Stall",
  "Wall",
  "Field Manipulation",
  "Bulky Defense",
  "Bulky Offense",
  "NFE",
];

const tierChoices = ["S", "A", "B", "C", "D"];

export const DraftRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-random")
    .setDescription("Draft a random pokemon.")
    .addStringOption((option) =>
      option
        .setName("tier")
        .setDescription("Tier")
        .setRequired(true)
        .addChoices(
          tierChoices.map((choice) => ({ name: choice, value: choice }))
        )
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .setRequired(true)
        .addChoices(
          categoryChoices.map((choice) => ({ name: choice, value: choice }))
        )
    ),
  execute: (interaction: CommandInteraction) => {
    const tier = interaction.options.get("tier");
    const category = interaction.options.get("category");
    if (!tier) {
      return interaction.reply("Tier not selected");
    }
    if (!category) {
      return interaction.reply("Category not selected");
    }
    const tierString: string | undefined = tierChoices.find(
      (choice) => choice === tier.value
    );
    const categoryString: string | undefined = categoryChoices.find(
      (choice) => choice === category.value
    );
    let replyString = `${interaction.user} has selected a ${
      tierString || tier.value
    } tier ${categoryString || category.value} pokemon.`;
    interaction.reply(replyString).then(() =>
      new Promise((f) => setTimeout(f, 2000)).then(() => {
        if (interaction.isRepliable()) {
          let pokemon = draftPokemon(interaction.user, tier, category);
          if (pokemon) {
            const attachment = new AttachmentBuilder(
              `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.pid}.png`,
              { name: `${pokemon.pid}.png` }
            );
            interaction.editReply({
              content: replyString + `\nI have drafted you ${pokemon.name}!`,
              files: [attachment],
            });
          } else {
            interaction.editReply(
              replyString + "\nNo pokemon are left! Please choose again."
            );
          }
        }
      })
    );
  },
};

function draftPokemon(
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
  const draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let undrafted = draftData.filter(
    (pokemon) =>
      pokemon.category === category.value &&
      pokemon.tier === tier.value &&
      !pokemon.coach
  );
  if (undrafted.length > 0) {
    const randomMon = undrafted[Math.floor(Math.random() * undrafted.length)];
    randomMon.coach = user.username;
    fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
    return randomMon;
  } else {
    return;
  }
}
