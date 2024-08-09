import {
  CommandInteraction,
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
  execute: async (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    const state = interaction.options.get("state")?.value;
    if (
      state === "start" ||
      state === "end" ||
      state === "pause" ||
      state === "resume"
    ) {
      updateState(state, interaction);
      if (!interaction.replied) {
      }
    } else {
      return interaction.reply({ content: "Unknown state.", ephemeral: true });
    }
  },
};
