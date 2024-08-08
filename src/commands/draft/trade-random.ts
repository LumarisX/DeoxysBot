import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
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
  execute: async (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    const division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division)
      return interaction.reply({
        content: "Division not found.",
        ephemeral: true,
      });
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user)
      return interaction.reply({ content: "User not found.", ephemeral: true });
    let coach = getCoach(division, user.id);
    if (!coach)
      return interaction.reply({
        content: `${user} is not a coach in this division.`,
        ephemeral: true,
      });
    const category = interaction.options.get("category")?.value;
    if (!category)
      return interaction.reply({
        content: "Category not found.",
        ephemeral: true,
      });
    const oldPokemonString = interaction.options.get("pokemon");
    if (!oldPokemonString?.value)
      return interaction.reply({
        content: "Pokemon not selected.",
        ephemeral: true,
      });
    const oldPokemonDex = getDexData(oldPokemonString.value as string);
    if (!oldPokemonDex)
      return interaction.reply({
        content: "Pokemon does not exist.",
        ephemeral: true,
      });
    tradeRandom(division, oldPokemonDex, coach, interaction, {
      validate: true,
    });
    interaction.reply({
      content: `${interaction.user}'s ${oldPokemonDex.name} has been traded away.`,
      ephemeral: true,
    });
  },
};
