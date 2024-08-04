import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  tierChoices,
  categoryChoices,
  draftPokemon,
  getDraftData,
  tradeRandom,
} from "..";
import { Command } from "../..";

export const DraftModPickCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("trade-random")
    .setDescription("Admin only: Trade for a new random pokemon.")
    .addStringOption((option) =>
      option
        .setName("pokemon")
        .setDescription("pokemon")
        .setRequired(true)
        .addChoices(
          getDraftData().map((choice) => ({
            name: choice.name,
            value: choice.pid,
          }))
        )
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to trade for.")
        .setRequired(true)
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
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) {
      return interaction.reply("User not found");
    }
    const oldPokemonString = interaction.options.get("pokemon");
    if (!oldPokemonString) {
      return interaction.reply("Pokemon not selected.");
    }

    const baseReply = `${interaction.user} has been traded`;

    let pokemon = tradeRandom(oldPokemonString.value as string, user);
    if (!pokemon)
      return interaction.reply(
        baseReply + "\nNo pokemon are left! Please choose again."
      );

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
