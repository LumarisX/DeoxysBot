import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { getDraftData, tradeRandom } from "..";
import { Command } from "../..";

export const DraftTradeRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("trade-random")
    .setDescription("Admin only: Trade for a new random pokemon.")
    .addStringOption((option) =>
      option.setName("pokemon").setDescription("pokemon").setRequired(true)
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
    if (!oldPokemonString?.value) {
      return interaction.reply("Pokemon not selected.");
    }
    const oldPokemon = getDraftData(oldPokemonString.value as string);
    if (!oldPokemon) {
      return interaction.reply("Pokemon does not exist.");
    }
    const baseReply = `${interaction.user}'s ${oldPokemon.name} has been traded away.`;
    let pokemon = tradeRandom(oldPokemon, user);
    console.log(pokemon);

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
