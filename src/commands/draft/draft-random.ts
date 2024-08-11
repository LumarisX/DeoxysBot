import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { draftData, draftRandom, getDivisionByChannel, guildCheck } from ".";
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
  execute: (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      throw new Error("Server does not have a registered draft.");
    let division = getDivisionByChannel(interaction.channelId);
    if (!division)
      throw new Error(
        "Unknown channel. Please try again in your draft channel."
      );
    if (draftData.state != "started")
      throw new Error("The draft has not started yet.");
    // if (!canDraft(division, interaction.user.id))
    //   throw new Error("Not allowed to draft.")
    const tier = interaction.options.getString("tier", true);
    const category = interaction.options.getString("category", true);
    draftRandom(division, interaction.user, tier, category, interaction, {
      validate: true,
    }).then((drafted) => {
      if (drafted) {
        interaction.reply({
          content: `Pokemon was sucessfully drafted.`,
          ephemeral: true,
        });
      }
    });
  },
};
