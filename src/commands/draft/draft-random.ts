import {
  AttachmentBuilder,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "..";
import { categoryChoices, draftPokemon, tierChoices } from ".";

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
    let replyString = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon.`;
    interaction.reply(replyString).then(() =>
      new Promise((f) => setTimeout(f, 2000)).then(() => {
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
      })
    );
  },
};
