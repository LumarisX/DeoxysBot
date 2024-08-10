import {
  ChatInputCommandInteraction,
  PermissionsBitField,
  SlashCommandBuilder,
} from "discord.js";
import { addReminder, guildCheck, removeReminder, updateTime } from "../..";
import { Command } from "../../..";

export const DraftTimerCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-timer")
    .setDescription("Change timer settings.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    .addSubcommand((subcommand) =>
      subcommand
        .setName("time")
        .setDescription("Set the timer time")
        .addNumberOption((option) =>
          option
            .setName("time-minutes")
            .setRequired(true)
            .setDescription("The amount of time in minutes.")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("reminder")
        .setDescription("Set or remove a reminder.")
        .addStringOption((option) =>
          option
            .setName("action")
            .setRequired(true)
            .setDescription("The amount of time in minutes")
            .addChoices(
              { name: "Add", value: "add" },
              { name: "Remove", value: "remove" }
            )
        )
        .addNumberOption((option) =>
          option
            .setName("time-minutes")
            .setRequired(true)
            .setDescription("The amount of time in minutes")
        )
    ),
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    if (!interaction.isChatInputCommand())
      throw new Error("Interaction is not a chat input command");
    let command = interaction.options.getSubcommand();
    switch (command) {
      case "time":
        let time = interaction.options.getNumber("time-minutes", true);
        updateTime(time);
        interaction.reply({
          content: `The timer has been updated to ${time} minutes.`,
          ephemeral: true,
        });
        break;
      case "reminder":
        time = interaction.options.getNumber("time-minutes", true);
        let action = interaction.options.getString("action", true);
        switch (action) {
          case "add":
            addReminder(time);
            interaction.reply({
              content: `The timer will remind at ${time} minutes.`,
              ephemeral: true,
            });
            break;
          case "remove":
            removeReminder(time);
            interaction.reply({
              content: `The reminder at ${time} minutes has been removed.`,
              ephemeral: true,
            });
            break;
        }
    }
  },
};
