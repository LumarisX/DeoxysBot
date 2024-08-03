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
    const baseReply = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon.`;
    interaction.reply(baseReply + `\nSearching...`).then(() =>
      setTimeout(() => {
        let pokemon = draftPokemon(interaction.user, tier, category);
        if (!pokemon)
          return interaction.editReply(
            baseReply + "\nNo pokemon are left! Please choose again."
          );

        const attachment = new AttachmentBuilder(
          `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`,
          { name: `${pokemon.png}.png` }
        );
        interaction.editReply({
          content: baseReply + `\nI have drafted you ${pokemon.name}!`,
          files: [attachment],
        });
      }, 2000)
    );
  },
};
