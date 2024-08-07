import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { updateState } from ".";
import { Command } from "..";

export const DraftStateCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-state")
    .setDescription("Admin only: Start, pause, resume, or end the draft.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addStringOption((option) =>
      option
        .setName("state")
        .setDescription("State")
        .setRequired(true)
        .addChoices(
          { name: "Start", value: "start" },
          { name: "Pause", value: "pause" },
          { name: "Resume", value: "resume" },
          { name: "End", value: "end" }
        )
    ),
  execute: async (interaction: CommandInteraction) => {
    const state = interaction.options.get("state")?.value;
    if (
      state === "start" ||
      state === "end" ||
      state === "pause" ||
      state === "resume"
    ) {
      return updateState(state, interaction);
    } else {
      return interaction.reply("Unknown state.");
    }
  },
};
