import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import fs from "fs";
import { filePath } from ".";
import { Command, DraftData } from "..";

export const DraftMyTeamCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-team")
    .setDescription("See your current drafted team."),
  execute: (interaction: CommandInteraction) => {
    const draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const draftedList = draftData
      .filter((pokemon) => pokemon.coach === interaction.user.username)
      .map(
        (pokemon) => `${pokemon.name}: ${pokemon.tier} tier ${pokemon.category}`
      );

    interaction.reply(`${interaction.user}'s current team:
      \`${draftedList.join("\n")}\``);
  },
};
