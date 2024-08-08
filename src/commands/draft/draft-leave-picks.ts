import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import {
  addPicks,
  draftData,
  getCoach,
  getDivisionByName,
  guildCheck,
  isDrafted,
} from ".";
import { Command } from "..";
import { getDexData } from "./data/draftdex";

export const DraftStateCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("draft-leave-picks")
    .setDescription("Leave pokemon for future picks.")
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
        .setName("first-choice")
        .setDescription("First Choice")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("second-choice").setDescription("Second Choice")
    )
    .addStringOption((option) =>
      option.setName("third-choice").setDescription("Third Choice")
    )
    .addStringOption((option) =>
      option.setName("fourth-choice").setDescription("Fourth Choice")
    )
    .addStringOption((option) =>
      option.setName("fifth-choice").setDescription("Fifth Choice")
    ),
  execute: async (interaction: CommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply("Server does not have a registered draft.");
    let division = getDivisionByName(
      interaction.options.get("division")?.value as string
    );
    if (!division) return interaction.reply("Division is invalid.");
    let coach = getCoach(division, interaction.user.id);
    if (!coach)
      return interaction.reply(`You is not a coach in this division.`);
    let picks: string[] = [];
    let checkChoice = (choiceString: string) => {
      let pokemonDex = getDexData(choiceString);
      if (!pokemonDex)
        return interaction.reply(`${choiceString} is an unknown pokemon.`);
      if (isDrafted(pokemonDex.pid, division))
        return interaction.reply(
          `${pokemonDex.name} has already been drafted.`
        );
      picks.push(pokemonDex.pid);
    };
    const firstChoiceString = interaction.options.get("first-choice")
      ?.value as string;
    if (firstChoiceString) {
      checkChoice(firstChoiceString);
    }
    const secondChoiceString = interaction.options.get("second-choice")
      ?.value as string;
    if (secondChoiceString) {
      checkChoice(secondChoiceString);
    }
    const thirdChoiceString = interaction.options.get("third-choice")
      ?.value as string;
    if (thirdChoiceString) {
      checkChoice(thirdChoiceString);
    }
    const fourthChoiceString = interaction.options.get("fourth-choice")
      ?.value as string;
    if (fourthChoiceString) {
      checkChoice(fourthChoiceString);
    }
    const fifthChoiceString = interaction.options.get("fifth-choice")
      ?.value as string;
    if (fifthChoiceString) {
      checkChoice(fifthChoiceString);
    }
    addPicks(coach, picks);
  },
};
