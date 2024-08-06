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
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
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
    const state = interaction.options.get("state")?.value;
    if (state === "start" || state === "end" || state === "pause") {
      updateState(state);
      return interaction.reply(updateState(state));
    } else {
      return interaction.reply("Unknown state.");
    }
  },
};
