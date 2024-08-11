import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import {
  draftData,
  getCoach,
  getDivisionByName,
  guildCheck,
  tradeRandom,
} from ".";
import { Command } from "..";
import { getDexData } from "./data/draftdex";

export const DraftTradeRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("trade-random")
    .setDescription("Admin only: Trade for a new random pokemon.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addStringOption((option) =>
      option.setName("pokemon").setDescription("pokemon").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .setRequired(true)
        .addChoices(
          draftData.categories.map((choice) => ({
            name: choice,
            value: choice,
          }))
        )
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to trade for.")
        .setRequired(true)
    )
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
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      throw new Error("Server does not have a registered draft.");
    const division = getDivisionByName(
      interaction.options.getString("division", true)
    );
    if (!division) throw new Error("Unknown division.");
    const user = interaction.options.getUser("user", true);
    let coach = getCoach(division, user.id);
    if (!coach) throw new Error(`${user} is not a coach in this division.`);
    const category = interaction.options.getString("category", true);
    const oldPokemonDex = getDexData(
      interaction.options.getString("pokemon", true)
    );
    if (!oldPokemonDex) throw new Error("Pokemon does not exist.");
    tradeRandom(division, oldPokemonDex, coach, {
      validate: true,
    });
    interaction.reply({
      content: `${interaction.user}'s ${oldPokemonDex.name} has been traded away.`,
      ephemeral: true,
    });
  },
};
