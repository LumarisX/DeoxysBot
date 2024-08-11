import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
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
  execute: async (interaction: ChatInputCommandInteraction) => {
    if (!guildCheck(interaction.guildId))
      return interaction.reply({
        content: "Server does not have a registered draft.",
        ephemeral: true,
      });
    let division = getDivisionByName(
      interaction.options.getString("division", true)
    );
    let coach = getCoach(division, interaction.user.id);
    if (!coach)
      return sendError(interaction, `You are not a coach in this division.`)
    let picks: string[] = [];
    let checkChoice = (choiceString: string) => {
      let pokemonDex = getDexData(choiceString);
      if (!pokemonDex)
        return sendError(interaction, `${choiceString} is an unknown pokemon.`);
      if (isDrafted(pokemonDex.pid, division))
        return sendError(interaction,
          `${pokemonDex.name} has already been drafted.`
        );
      picks.push(pokemonDex.pid);
    };
    const firstChoiceString = interaction.options.getString("first-choice")
    if (firstChoiceString) {
      checkChoice(firstChoiceString);
    }
    const secondChoiceString = interaction.options.getString("second-choice")
    if (secondChoiceString) {
      checkChoice(secondChoiceString);
    }
    const thirdChoiceString = interaction.options.getString("third-choice")
    if (thirdChoiceString) {
      checkChoice(thirdChoiceString);
    }
    const fourthChoiceString = interaction.options.getString("fourth-choice")
    if (fourthChoiceString) {
      checkChoice(fourthChoiceString);
    }
    const fifthChoiceString = interaction.options.getString("fifth-choice")
    if (fifthChoiceString) {
      checkChoice(fifthChoiceString);
    }
    addPicks(coach, picks);
    //add reply
  },
};