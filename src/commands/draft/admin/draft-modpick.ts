import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  advanceDraft,
  draftData,
  draftRandom,
  getDivisionByChannel,
  getDivisionByName,
  guildCheck,
  isNextPick,
  notifyNext,
} from "..";
import { Command } from "../..";

export const DraftModPickCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-modpick")
    .setDescription("Admin only: Choose a draft pick a user.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
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
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) {
      division = getDivisionByChannel(interaction.channelId);
      if (!division)
        return interaction.reply({
          content: "Division not selected and unknown channel.",
          ephemeral: true,
        });
    }
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user)
      return interaction.reply({
        content: "User not found",
        ephemeral: true,
      });
    const tier = interaction.options.get("tier");
    if (!tier)
      return interaction.reply({
        content: "Tier not selected",
        ephemeral: true,
      });
    const category = interaction.options.get("category");
    if (!category)
      return interaction.reply({
        content: "Category not selected",
        ephemeral: true,
      });

    draftRandom(division, user, tier, category, interaction, {
      validate: true,
    });
    if (!interaction.replied) {
      interaction.reply({
        content: `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon for ${user}`,
        ephemeral: true,
      });
    }
  },
};
