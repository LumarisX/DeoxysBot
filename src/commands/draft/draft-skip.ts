import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { notifyNext, skipUser } from ".";
import { Command } from "..";

export const DraftSkipCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-skip")
    .setDescription("Admin only: Skip a user.")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to skip.")
        .setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply(
        "You do not have permission to use this command."
      );
    }
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) return interaction.reply("User not found");
    skipUser(user);
    interaction.reply(`${user} was skipped!`);
    notifyNext(interaction);
  },
};
