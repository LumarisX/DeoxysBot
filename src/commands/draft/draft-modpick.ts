import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import { categoryChoices, draftPokemon, tierChoices } from ".";
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
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to draft for.")
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
    const tier = interaction.options.get("tier");
    if (!tier) {
      return interaction.reply("Tier not selected");
    }
    const category = interaction.options.get("category");

    if (!category) {
      return interaction.reply("Category not selected");
    }

    const baseReply = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon for ${user}`;

    let pokemon = draftPokemon(user, tier, category);
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
