import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  draftData,
  getDivisionByName,
  getDraftData,
  tradeRandom,
  validateUser,
} from "..";
import { Command } from "../..";

export const DraftTradeRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("trade-random")
    .setDescription("Admin only: Trade for a new random pokemon.")
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
    if (
      !interaction.memberPermissions?.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply(
        "You do not have permission to use this command."
      );
    }
    const division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division not found.");
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) return interaction.reply("User not found.");
    if (!validateUser(division, user.id))
      return interaction.reply("User is not in the chosen divison.");
    const category = interaction.options.get("category")?.value;
    if (!category) return interaction.reply("Category not found.");
    const oldPokemonString = interaction.options.get("pokemon");
    if (!oldPokemonString?.value)
      return interaction.reply("Pokemon not selected.");
    const oldPokemon = getDraftData(oldPokemonString.value as string);
    if (!oldPokemon) return interaction.reply("Pokemon does not exist.");
    const baseReply = `${interaction.user}'s ${oldPokemon.name} has been traded away.`;
    let pokemon = tradeRandom(division, oldPokemon, user, { validate: true });
    if (typeof pokemon === "string")
      return interaction.reply(baseReply + `\n${pokemon}`);
    const attachment = new AttachmentBuilder(
      `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`,
      { name: `${pokemon.png}.png` }
    );
    interaction.reply({
      content: baseReply + `\nI have drafted you ${pokemon.name}!`,
      files: [attachment],
    });
  },
};
