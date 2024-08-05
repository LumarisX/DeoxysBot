import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { draftUndo, notifyNext } from ".";
import { Command } from "..";

export const DraftUndoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-undo")
    .setDescription("Admin Only: Undo the previous draft pick."),
  execute: (interaction: CommandInteraction) => {
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply(
        "You do not have permission to use this command."
      );
    }
    if (draftUndo()) {
      interaction.reply("Draft pick undone.");
      notifyNext(interaction);
    } else {
      return interaction.reply("No draft picks to be undone.");
    }
  },
};
