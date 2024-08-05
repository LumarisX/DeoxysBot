import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "..";
import { updateState } from ".";

export const DraftStateCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-state")
    .setDescription("Admin only: Start, pause, or end the draft.")
    .addStringOption((option) =>
      option
        .setName("state")
        .setDescription("State")
        .setRequired(true)
        .addChoices(
          { name: "Start", value: "start" },
          { name: "Pause", value: "pause" },
          { name: "End", value: "end" }
        )
    ),
  execute: async (interaction: CommandInteraction) => {
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply(
        "You do not have permission to use this command."
      );
    }
    const state = interaction.options.get("state")?.value;
    if (state === "start" || state === "end" || state === "pause") {
      updateState(state);
      return interaction.reply(updateState(state));
    } else {
      return interaction.reply("Unknown state.");
    }
  },
};
