import {
  AttachmentBuilder,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import {
  advanceDraft,
  canDraft,
  draftData,
  draftPokemon,
  draftRandom,
  getDivisionByChannel,
  guildCheck,
  isNextPick,
} from ".";
import { Command } from "..";

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
          draftData.tiers.map((tier) => ({ name: tier.name, value: tier.name }))
        )
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .setRequired(true)
        .addChoices(
          draftData.categories.map((category) => ({
            name: category,
            value: category,
          }))
        )
    ),
  execute: (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByChannel(interaction.channelId);
    if (!division)
      return interaction.reply({
        content: "Unknown channel. Please try again in your draft channel.",
        ephemeral: true,
      });
    if (draftData.state != "started")
      return interaction.reply({
        content: "The draft has not started yet.",
        ephemeral: true,
      });
    if (!canDraft(division, interaction.user.id)) {
      return interaction.reply({
        content: "Not allowed to draft.",
        ephemeral: true,
      });
    }
    const tier = interaction.options.get("tier");
    const category = interaction.options.get("category");
    if (!tier) {
      return interaction.reply({
        content: "Tier not selected",
        ephemeral: true,
      });
    }
    if (!category) {
      return interaction.reply({
        content: "Category not selected",
        ephemeral: true,
      });
    }
    draftRandom(division, interaction.user, tier, category, interaction, {
      validate: true,
    });
    if (!interaction.replied) {
      interaction.reply({
        content: `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon.`,
        ephemeral: true,
      });
    }
  },
};
