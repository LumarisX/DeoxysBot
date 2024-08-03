import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { resetDraft } from ".";
import { Command } from "..";

export const DraftResetCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-reset")
    .setDescription("Admin Only: Reset the draft."),
  execute: (interaction: CommandInteraction) => {
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return interaction.reply(
        "You do not have permission to use this command."
      );
    resetDraft();
    interaction.reply(`The draft was reset successfully.`);
  },
};
