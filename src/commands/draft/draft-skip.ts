import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  draftData,
  getDivisionByChannel,
  getDivisionByName,
  notifyNext,
  skipUser,
} from ".";
import { Command } from "..";

export const DraftSkipCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-skip")
    .setDescription("Admin only: Skip a user.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to skip.")
        .setRequired(true)
    )
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
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) {
      division = getDivisionByChannel(interaction.channelId);
      if (!division) return interaction.reply("Division not selected.");
    }
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) return interaction.reply("User not found");
    skipUser(division, user);
    interaction.reply(`${user} was skipped!`);
    notifyNext(interaction);
  },
};
