import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftData, skipUser } from ".";
import { Command } from "..";

export const DraftSkipCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-skip")
    .setDescription("Admin only: Skip to the next pick.")
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
  execute: async (interaction: CommandInteraction) => {
    skipUser(interaction);
  },
};
