import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftData, draftUndo, getDivisionByName, notifyNext } from ".";
import { Command } from "..";

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
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division not selected.");
    if (draftUndo(division)) {
      interaction.reply("Draft pick undone.");
      notifyNext(interaction);
    } else {
      return interaction.reply("No draft picks to be undone.");
    }
  },
};
