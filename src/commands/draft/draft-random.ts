import {
  AttachmentBuilder,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import {
  advanceDraft,
  canDraft,
  draftData,
  draftRandom,
  getDivisionByChannel,
  guildCheck,
  isNextPick,
} from ".";
import { Command } from "..";

export const DraftRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-random")
    .setDescription("Draft a random pokemon.")
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
    ),
  execute: (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply("Server does not have a registered draft.");
    let division = getDivisionByChannel(interaction.channelId);
    if (!division)
      return interaction.reply(
        "Unknown channel. Please try again in your draft channel."
      );
    if (draftData.state != "started")
      return interaction.reply("The draft has not started yet.");
    if (!canDraft(division, interaction.user.id)) {
      return interaction.reply("Not allowed to draft.");
    }
    const tier = interaction.options.get("tier");
    const category = interaction.options.get("category");
    if (!tier) {
      return interaction.reply("Tier not selected");
    }
    if (!category) {
      return interaction.reply("Category not selected");
    }
    const baseReply = `${interaction.user} has selected a ${tier.value}-tier ${category.value} pokemon.`;
    interaction.reply(baseReply + `\nSearching`).then(() =>
      setTimeout(() => {
        interaction.editReply(baseReply + `\nSearching.`);
        setTimeout(() => {
          interaction.editReply(baseReply + `\nSearching..`);
          setTimeout(() => {
            interaction.editReply(baseReply + `\nSearching...`);
            setTimeout(() => {
              let pokemon = draftRandom(
                division,
                interaction.user,
                tier,
                category,
                { validate: true }
              );
              if (typeof pokemon === "string")
                return interaction.editReply(baseReply + `\n${pokemon}`);
              const attachment = new AttachmentBuilder(
                `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`,
                { name: `${pokemon.png}.png` }
              );
              interaction.editReply({
                content:
                  baseReply +
                  `\nI have drafted you ${pokemon.name}${
                    pokemon.note ? ` (${pokemon.note})` : ""
                  }`,
                files: [attachment],
              });
              if (isNextPick(interaction.user, division))
                advanceDraft(interaction);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    );
  },
};
