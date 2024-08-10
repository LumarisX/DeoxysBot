import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftData, getDivisionByName, guildCheck, skipUser } from "..";
import { Command } from "../..";
import { sendError } from "../../..";

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
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return sendError(interaction, "Server does not have a registered draft.");
    let division = getDivisionByName(interaction.options.getString("division"));
    skipUser(interaction.channel!, division);
  },
};
