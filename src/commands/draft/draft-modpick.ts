import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { draftPokemon } from ".";
import { Command } from "..";

export const DraftModPickCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-modpick")
    .setDescription("Admin only: Choose a draft pick a user.")
    .addStringOption((option) =>
      option
      .setName("tier")
      .setDescription("Tier")
      .setRequired(true)
      .addChoices(
        tierChoices.map((choice) => ({ name: choice, value: choice }))
      )
    )
    .addStringOption((option) =>
      option
      .setName("category")
      .setDescription("Category")
      .setRequired(true)
      .addChoices(
        categoryChoices.map((choice) => ({ name: choice, value: choice }))
      )
    )
    .addUserOption(option =>
      option
      .setName("user")
      .setDescription("The user draft for.")
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
    const user: User = interaction.options.getUser("user", true);
    const tier = interaction.options.get("tier");
    const category = interaction.options.get("category");
    if (!tier) {
      return interaction.reply("Tier not selected");
    }
    if (!category) {
      return interaction.reply("Category not selected");
    }

    const baseReply = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon for ${user}`;

    let pokemon = draftPokemon(user, tier, category);
    if (!pokemon)
      return interaction.editReply(
        baseReply + "\nNo pokemon are left! Please choose again."
      );

    const attachment = new AttachmentBuilder(
      `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`, { name: `${pokemon.png}.png` }
    );
    interaction.editReply({
      content: baseReply + `\nI have drafted you ${pokemon.name}!`,
      files: [attachment],
    });
  },
};