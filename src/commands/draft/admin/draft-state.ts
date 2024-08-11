import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { guildCheck, updateState } from "..";
import { Command } from "../..";

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
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      throw new Error("Server does not have a registered draft.");
    const state = interaction.options.get("state")?.value;
    if (
      state === "start" ||
      state === "end" ||
      state === "pause" ||
      state === "resume"
    ) {
      updateState(state, interaction);
    } else {
      throw new Error("Unknown state.");
    }
  },
};
