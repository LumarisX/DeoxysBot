import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftData, getDivisionByName, guildCheck, skipUser } from "..";
import { Command } from "../..";

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
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    skipUser(interaction.channel!, division);
  },
};
