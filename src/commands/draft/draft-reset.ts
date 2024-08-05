import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  CommandInteraction,
  ComponentType,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { resetDraft } from ".";
import { Command } from "..";

export const DraftResetCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-reset")
    .setDescription("Admin Only: Reset the draft."),
  execute: async (interaction: CommandInteraction) => {
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return interaction.reply(
        "You do not have permission to use this command."
      );
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
