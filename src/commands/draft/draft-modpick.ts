import {
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  draftData,
  draftRandom,
  getDivisionByChannel,
  getDivisionByName,
  notifyNext,
} from ".";
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
          draftData.tiers.map((tier) => ({ name: tier.name, value: tier.name }))
        )
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .setRequired(true)
        .addChoices(
          draftData.categories.map((category) => ({
            name: category,
            value: category,
          }))
        )
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to draft for.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("division")
        .setDescription("Division")
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
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) {
      division = getDivisionByChannel(interaction.channelId);
      if (!division)
        return interaction.reply("Division not selected and unknown channel.");
    }
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) return interaction.reply("User not found");
    const tier = interaction.options.get("tier");
    if (!tier) return interaction.reply("Tier not selected");
    const category = interaction.options.get("category");
    if (!category) return interaction.reply("Category not selected");
    const baseReply = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon for ${user}`;
    let pokemon = draftRandom(division, user, tier, category, {
      validate: true,
    });
    if (typeof pokemon === "string")
      return interaction.reply(baseReply + `\n${pokemon}`);
    // const attachment = new AttachmentBuilder(
    //   `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`,
    //   { name: `${pokemon.png}.png` }
    // );
    interaction.reply({
      content: baseReply + `\nI have drafted you ${pokemon.name}!`,
      // files: [attachment],
    });
    notifyNext(interaction);
  },
};
