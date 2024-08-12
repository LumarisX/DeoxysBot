import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../..";
import { analyzeReplay } from ".";

export const AnalyzeReplayCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("analyze-replay")
    .setDescription("Analyzes a pokemon showdown replay.")
    .addStringOption((option) =>
      option
        .setName("replay-url")
        .setDescription("Replay Url")
        .setRequired(true)
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    const replayUrl = interaction.options.getString("relay-url", true);
    let replayData = await analyzeReplay(replayUrl);
    // console.log(replayData.stats.forEach((user) => user.username));
  },
};
