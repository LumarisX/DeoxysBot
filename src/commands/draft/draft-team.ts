import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { getDrafted } from ".";
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
    const user: User =
      interaction.options.get("user")?.user || interaction.user;
    const draftedList = getDrafted({ user: user })
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
