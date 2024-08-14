import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import {
  draftData,
  getCoach,
  getDivisionByChannel,
  getDivisionByName,
  guildCheck,
  tradeRandom,
} from ".";
import { Command } from "..";
import { getDexData } from "./data/draftdex";

export const DraftRerollCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-reroll")
    .setDescription("Reroll for a new pokemon.")
    .addStringOption((option) =>
      option.setName("pokemon").setDescription("pokemon").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category for new pokemon.")
        .setRequired(true)
        .addChoices(
          draftData.categories.map((choice) => ({
            name: choice,
            value: choice,
          }))
        )
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
    let division = getDivisionByChannel(interaction.channelId);
    if (!division) {
      division = getDivisionByName(
        interaction.options.getString("division", true)
      );
      if (!division) throw new Error("Unknown division.");
    }
    const user = interaction.user;
    let coach = getCoach(division, user.id);
    if (!coach)
      throw new Error(`${user.displayName} is not a coach in this division.`);
    const category = interaction.options.getString("category", true);
    let oldPokemonString = interaction.options.getString("pokemon", true);
    const oldPokemonDex = getDexData(oldPokemonString);
    if (!oldPokemonDex) throw new Error(`${oldPokemonString} does not exist.`);
    let channel = await interaction.client.channels.fetch(division.channels[0]);
    if (!channel?.isTextBased()) throw new Error("Channel error.");
    tradeRandom(
      division,
      oldPokemonDex,
      category,
      coach,
      interaction.user,
      channel,
      {
        validate: false,
      }
    );
    interaction.reply({
      content: `Trade was completed successfully.`,
      ephemeral: true,
      allowedMentions: { repliedUser: false },
    });
  },
};
