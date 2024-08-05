import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { draftData, getDivisionByName, getDrafted } from ".";
import { Command } from "..";

export const DraftTeamCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-team")
    .setDescription("See a current drafted team.")
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
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user's team. Yours by default.")
    ),

  execute: (interaction: CommandInteraction) => {
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division not selected.");
    const user: User =
      interaction.options.get("user")?.user || interaction.user;
    const draftedList = getDrafted(division, { user: user.username })
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
