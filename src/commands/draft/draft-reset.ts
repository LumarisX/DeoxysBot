import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
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

    // Create the confirmation buttons
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

    // Send the confirmation message
    const reply = await interaction.reply({
      content: "Are you sure you want to reset the draft?",
      components: [row],
      fetchReply: true,
    });

    // Create a collector to handle button interactions
    const filter = (i: any) => i.user.id === interaction.user.id;
    const collector = reply.createMessageComponentCollector({
      filter,
      componentType: ComponentType.Button,
      time: 15000, // 15 seconds timeout
    });

    collector.on("collect", async (i: any) => {
      if (i.customId === "confirm-reset") {
        resetDraft();
        await i.update({
          content: "**The draft was reset successfully.**",
          components: [],
        });
      } else if (i.customId === "cancel-reset") {
        await i.update({
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
