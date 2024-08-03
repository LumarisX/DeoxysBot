import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import fs from "fs";
import { DraftData, filePath, getDraftData } from ".";
import { Command } from "..";

export const DraftTeamCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-team")
    .setDescription("See your current drafted team."),
  execute: (interaction: CommandInteraction) => {
    const draftData: DraftData[] = getDraftData();
    const draftedList = draftData
      .filter((pokemon) => pokemon.coach === interaction.user.username)
      .splice(0, 25)
      .map(
        (pokemon) =>
          `**${pokemon.name}**: ${pokemon.tier}-tier ${pokemon.category}`
      ); 

    if (draftedList.length > 0) {
      return interaction.reply(
        `${interaction.user}'s current team:\n> ${draftedList.join("\n> ")}`
      );
    } else {
      return interaction.reply(`${interaction.user} has no drafted pokemon.`);
    }
  },
};
