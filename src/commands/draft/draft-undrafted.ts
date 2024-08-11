import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  ComponentType,
  SlashCommandBuilder,
} from "discord.js";
import {
  draftData,
  getDivisionByName,
  getUndrafted,
  guildCheck,
  PokemonData,
} from ".";
import { Command } from "..";
import { getDexData } from "./data/draftdex";

export const DraftUndraftedCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-undrafted")
    .setDescription("View a list of undrafted pokemon.")
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
    )
    .addStringOption((option) =>
      option
        .setName("tier")
        .setDescription("Tier")
        .addChoices(
          draftData.tiers.map((choice) => ({
            name: choice.name,
            value: choice.name,
          }))
        )
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .addChoices(
          draftData.categories.map((choice) => ({
            name: choice,
            value: choice,
          }))
        )
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByName(
      interaction.options.getString("division", true)
    );
    if (!division) throw new Error("Unknown division.");
    const tier = interaction.options.getString("tier");
    const category = interaction.options.getString("category");
    let undraftedData = getUndrafted(division, {
      tier: tier,
      category: category,
    });
    let currentPage = 0;
    const pageSize = 25;

    const generateReplyString = (data: PokemonData[], page: number) => {
      const start = page * pageSize;
      const end = start + pageSize;
      const undraftedList = data
        .slice(start, end)
        .map(
          (pokemon) =>
            `**${getDexData(pokemon.pid)!.name}**: ${pokemon.tier}-tier ${
              pokemon.category
            }`
        );
      if (undraftedList.length > 0) {
        return `Remaining undrafted pokemon are:\n> ${undraftedList.join(
          "\n> "
        )}`;
      } else {
        return (
          `There are no remaining undrafted ` +
          (tier ? `${tier}-tier ` : "") +
          (category ? `${category} ` : "") +
          `pokemon.`
        );
      }
    };

    const replyString = generateReplyString(undraftedData, currentPage);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("previous")
        .setLabel("<")
        .setStyle(ButtonStyle.Primary)
        .setDisabled(currentPage === 0),
      new ButtonBuilder()
        .setCustomId("next")
        .setLabel(">")
        .setStyle(ButtonStyle.Primary)
        .setDisabled(currentPage * pageSize + pageSize >= undraftedData.length)
    );

    const reply = await interaction.reply({
      content: replyString,
      components: [row],
      fetchReply: true,
    });

    const filter = (i: any) =>
      (i.customId === "next" || i.customId === "previous") &&
      i.user.id === interaction.user.id;

    const collector = reply.createMessageComponentCollector({
      filter,
      componentType: ComponentType.Button,
      time: 60000, // 1 minute
    });

    collector.on("collect", async (i: any) => {
      if (i.customId === "next") {
        currentPage++;
      } else if (i.customId === "previous") {
        currentPage--;
      }

      const updatedReplyString = generateReplyString(
        undraftedData,
        currentPage
      );

      await i.update({
        content: updatedReplyString,
        components: [
          new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
              .setCustomId("previous")
              .setLabel("<")
              .setStyle(ButtonStyle.Primary)
              .setDisabled(currentPage === 0),
            new ButtonBuilder()
              .setCustomId("next")
              .setLabel(">")
              .setStyle(ButtonStyle.Primary)
              .setDisabled(
                currentPage * pageSize + pageSize >= undraftedData.length
              )
          ),
        ],
      });
    });

    collector.on("end", () => {
      reply.edit({
        components: [
          new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
              .setCustomId("previous")
              .setLabel("<")
              .setStyle(ButtonStyle.Primary)
              .setDisabled(true),
            new ButtonBuilder()
              .setCustomId("next")
              .setLabel(">")
              .setStyle(ButtonStyle.Primary)
              .setDisabled(true)
          ),
        ],
      });
    });
  },
};
