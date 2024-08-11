import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import {
  draftData,
  undoDraft,
  getDivisionByName,
  notifyNext,
  guildCheck,
} from "..";
import { Command } from "../..";

export const DraftUndoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-undo")
    .setDescription("Admin Only: Undo the previous draft pick.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addStringOption((option) =>
      option
        .setName("division")
        .setDescription("Division")
        .setRequired(true)
        .addChoices(
          draftData.divisions.map((division) => ({
            name: division.name,
            value: division.name,
          }))
        )
    ),
  execute: (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
    return sendError(interaction, "Server does not have a registered draft.");
    let division = getDivisionByName(
      interaction.options.getString("division", true)
    );
    if (undoDraft(division)) {
      interaction.reply({ content: "Draft pick undone.", ephemeral: true });
      notifyNext(interaction.channel);
    } else {
      return sendError(interaction, "No draft picks to be undone.")
    }
  },
};
