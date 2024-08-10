import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Command } from "..";

export const SpeakCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("speak")
    .setDescription("Deoxys has spoken."),
  execute: (interaction: ChatInputCommandInteraction) => {
    let quotes = [
      "Prepare yourself for my unmatched power!",
      "Witness the true force of my attacks!",
      "Your defenses are futile against my might.",
      "Feel the intensity of my cosmic energy!",
      "You cannot withstand my onslaught!",
      "I am the apex of power and precision!",
      "Your defeat is inevitable.",
      "My strength knows no bounds!",
      "Bow before the ultimate force of destruction!",
    ];
    interaction.reply(quotes[Math.floor(Math.random() * quotes.length)]);
  },
};
