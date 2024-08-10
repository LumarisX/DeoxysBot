import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  ChatInputCommandInteraction,
  ComponentType,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftData, guildCheck, resetDraft } from "..";
import { Command } from "../..";
import { sendError } from "../../..";

export const DraftResetCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-reset")
    .setDescription("Admin Only: Reset the draft.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addStringOption((option) =>
      option
        .setName("division")
        .setDescription("Division")
        .addChoices(
          draftData.divisions.map((division) => ({
            name: division.name,
            value: division.name,
          }))
        )
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      sendError(interaction, "Server does not have a registered draft.");
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("confirm-reset")
        .setLabel("Yes")
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId("cancel-reset")
        .setLabel("No")
        .setStyle(ButtonStyle.Secondary)
    );
    const reply = await interaction.reply({
      content: "Are you sure you want to reset the draft?",
      components: [row],
      fetchReply: true,
      ephemeral: true,
    });
    const filter = (interaction: ButtonInteraction) =>
      interaction.user.id === interaction.user.id;
    const collector = reply.createMessageComponentCollector({
      filter,
      componentType: ComponentType.Button,
      time: 15000,
    });
    collector.on("collect", async (interaction: ButtonInteraction) => {
      if (interaction.customId === "confirm-reset") {
        resetDraft();
        await interaction.update({
          content: "**The draft was reset successfully.**",
          components: [],
        });
      } else if (interaction.customId === "cancel-reset") {
        await interaction.update({
          content: "**Draft reset cancelled.**",
          components: [],
        });
      }
    });
    collector.on("end", (collected) => {
      if (collected.size === 0) {
        interaction.editReply({
          content: "No response received. Draft reset cancelled.",
          components: [],
        });
      }
    });
  },
};
