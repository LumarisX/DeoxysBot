import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { canDraft, draftData, draftRandom, getNextUser, notifyNext } from ".";
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
    if (draftData.state != "started")
      return interaction.reply("The draft has not started yet.");
    if (!canDraft(interaction.user.id)) {
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
              let pokemon = draftRandom(interaction.user, tier, category, true);
              if (typeof pokemon === "string")
                return interaction.editReply(baseReply + `\n${pokemon}`);
              // const attachment = new AttachmentBuilder(
              //   `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.png}.png`,
              //   { name: `${pokemon.png}.png` }
              // );

              interaction.editReply({
                content: baseReply + `\nI have drafted you ${pokemon.name}!`,
                // files: [attachment],
              });
              notifyNext(interaction);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    );
  },
};
