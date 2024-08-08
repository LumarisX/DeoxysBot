import {
  AttachmentBuilder,
  CommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
  User,
} from "discord.js";
import {
  draftData,
  getCoach,
  getDivisionByName,
  guildCheck,
  tradeRandom,
} from ".";
import { Command } from "..";
import { getDexData } from "./data/draftdex";

export const DraftTradeRandomCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("trade-random")
    .setDescription("Admin only: Trade for a new random pokemon.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addStringOption((option) =>
      option.setName("pokemon").setDescription("pokemon").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category")
        .setRequired(true)
        .addChoices(
          draftData.categories.map((choice) => ({
            name: choice,
            value: choice,
          }))
        )
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to trade for.")
        .setRequired(true)
    )
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
    ),
  execute: async (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply("Server does not have a registered draft.");
    const division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division not found.");
    const user: User | undefined = interaction.options.get("user")?.user;
    if (!user) return interaction.reply("User not found.");
    let coach = getCoach(division, user.id);
    if (!coach)
      return interaction.reply(`${user} is not a coach in this division.`);
    const category = interaction.options.get("category")?.value;
    if (!category) return interaction.reply("Category not found.");
    const oldPokemonString = interaction.options.get("pokemon");
    if (!oldPokemonString?.value)
      return interaction.reply("Pokemon not selected.");
    const oldPokemonDex = getDexData(oldPokemonString.value as string);
    if (!oldPokemonDex) return interaction.reply("Pokemon does not exist.");
    const baseReply = `${interaction.user}'s ${oldPokemonDex.name} has been traded away.`;
    let newPokemonDex = tradeRandom(division, oldPokemonDex, coach, {
      validate: true,
    });

    if (typeof newPokemonDex === "string")
      return interaction.reply(baseReply + `\n${newPokemonDex}`);
    const attachment = new AttachmentBuilder(
      `https://play.pokemonshowdown.com/sprites/gen5/${newPokemonDex.png}.png`,
      { name: `${newPokemonDex.png}.png` }
    );
    interaction.reply({
      content: baseReply + `\nI have drafted you ${newPokemonDex.name}!`,
      files: [attachment],
    });
  },
};
