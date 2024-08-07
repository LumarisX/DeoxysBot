import {
  CommandInteraction,
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
  execute: (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply("Server does not have a registered draft.");
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division not selected.");
    if (undoDraft(division)) {
      interaction.reply("Draft pick undone.");
      notifyNext(interaction);
    } else {
      return interaction.reply("No draft picks to be undone.");
    }
  },
};
