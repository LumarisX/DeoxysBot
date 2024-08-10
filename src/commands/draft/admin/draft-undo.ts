import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import {
  draftData,
  undoDraft,
  getDivisionByName,
  notifyNext,
  guildCheck,
} from "..";
import { Command } from "../..";

export const DraftUndoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-undo")
    .setDescription("Admin Only: Undo the previous draft pick.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
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
  execute: (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division)
      return interaction.reply({
        content: "Division is invalid.",
        ephemeral: true,
      });
    if (undoDraft(division)) {
      interaction.reply({ content: "Draft pick undone.", ephemeral: true });
      notifyNext(interaction.channel);
    } else {
      return interaction.reply({
        content: "No draft picks to be undone.",
        ephemeral: true,
      });
    }
  },
};
