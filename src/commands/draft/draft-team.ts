import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { DraftData, getDraftData } from ".";
import { Command } from "..";

export const DraftTeamCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-team")
    .setDescription("See a current drafted team.")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user's team. Yours by default.")
    ),
  execute: (interaction: CommandInteraction) => {
    const draftData: DraftData[] = getDraftData();
    const user: User =
      interaction.options.get("user")?.user || interaction.user;
    const draftedList = draftData
      .filter((pokemon) => pokemon.coach === user.username)
      .splice(0, 25)
      .map(
        (pokemon) =>
          `**${pokemon.name}**: ${pokemon.tier}-tier ${pokemon.category}`
      );

    if (draftedList.length > 0) {
      return interaction.reply(
        `${user}'s current team:\n> ${draftedList.join("\n> ")}`
      );
    } else {
      return interaction.reply(`${user} has no drafted pokemon.`);
    }
  },
};
