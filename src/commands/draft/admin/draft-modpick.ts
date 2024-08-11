import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import {
  DivisionData,
  draftData,
  draftRandom,
  getDivisionByChannel,
  getDivisionByName,
  guildCheck,
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
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      throw new Error("Server does not have a registered draft.");
    let divisionString = interaction.options.getString("division");
    let division: DivisionData | undefined;
    if (!divisionString) {
      division = getDivisionByChannel(interaction.channelId);
      if (!division)
        throw new Error("Division not selected and unknown channel.");
    } else {
      division = getDivisionByName(divisionString);
      if (!division)
        throw new Error("Division not selected and unknown channel.");
    }
    const user = interaction.options.getUser("user", true);
    const tier = interaction.options.getString("tier", true);
    const category = interaction.options.getString("category", true);
    draftRandom(division, user, tier, category, interaction, {
      validate: true,
    }).then((drafted) => {
      if (drafted) {
        interaction.reply({
          content: `${interaction.user} has selected a ${tier}-tier ${category} pokemon for ${user}`,
          ephemeral: true,
        });
      }
    });
  },
};
