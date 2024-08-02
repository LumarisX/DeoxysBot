import {
  CommandInteraction,
  CommandInteractionOption,
  SharedSlashCommand,
  SlashCommandBuilder,
  User,
} from "discord.js";
import fs from "fs";
import path from "path";

const categoryChoices = [
  { name: "Utility", value: "utility" },
  { name: "Sweeper", value: "sweeper" },
  { name: "Stall", value: "stall" },
  { name: "Wall", value: "wall" },
  { name: "Field Manipulation", value: "field" },
  { name: "Bulky Defense", value: "bulkyd" },
  { name: "Bulky Offense", value: "bulkyo" },
  { name: "NFE", value: "nfe" },
];

const tierChoices = [
  { name: "S", value: "s" },
  { name: "A", value: "a" },
  { name: "B", value: "b" },
  { name: "C", value: "c" },
  { name: "D", value: "d" },
];

export const commands: {
  data: SharedSlashCommand;
  execute: (interaction: CommandInteraction) => void;
  enabled: boolean;
}[] = [
  {
    data: new SlashCommandBuilder()
      .setName("speak")
      .setDescription("Deoxys has spoken."),
    execute: (interaction: CommandInteraction) => {
      let quotes = [
        "Prepare yourself for my unmatched power!",
        "Witness the true force of my attacks!",
        "Your defenses are futile against my might.",
        "Feel the intensity of my cosmic energy!",
        "You cannot withstand my onslaught!",
        "I am the apex of power and precision!",
        "Your defeat is inevitable.",
        "My strength knows no bounds!",
        "Bow before the ultimate force of destruction!",
      ];
      interaction.reply(quotes[Math.floor(Math.random() * quotes.length)]);
    },
    enabled: true,
  },
  {
    data: new SlashCommandBuilder()
      .setName("draft-random")
      .setDescription("Draft a random pokemon.")
      .addStringOption((option) =>
        option
          .setName("tier")
          .setDescription("Tier")
          .setRequired(true)
          .addChoices(tierChoices)
      )
      .addStringOption((option) =>
        option
          .setName("category")
          .setDescription("Category")
          .setRequired(true)
          .addChoices(categoryChoices)
      ),
    execute: (interaction: CommandInteraction) => {
      const tier = interaction.options.get("tier");
      const category = interaction.options.get("category");
      if (!tier) {
        return interaction.reply("Tier not selected");
      }
      if (!category) {
        return interaction.reply("Category not selected");
      }
      const tierString: string | undefined = tierChoices.find(
        (choice) => choice.value === tier.value
      )?.name;
      const categoryString: string | undefined = categoryChoices.find(
        (choice) => choice.value === category.value
      )?.name;
      let replyString = `${interaction.user} has selected a ${
        tierString || tier.value
      } tier ${categoryString || category.value} pokemon.`;
      interaction.reply(replyString).then(() =>
        new Promise((f) => setTimeout(f, 2000)).then(() => {
          if (interaction.isRepliable()) {
            let pokemon = draftPokemon(interaction.user, tier, category);
            if (pokemon) {
              interaction.editReply(
                replyString + `\nI have drafted you ${pokemon}!`
              );
            } else {
              interaction.editReply(
                replyString + "\nNo pokemon are left! Please choose again."
              );
            }
          }
        })
      );
    },
    enabled: true,
  },
];
export type DraftData = {
  name: string;
  tier: string;
  category: string;
  coach?: string;
}[];

function draftPokemon(
  user: User,
  tier: CommandInteractionOption,
  category: CommandInteractionOption
): string | undefined {
  const filePath = path.resolve(__dirname, "../draft/draft.json");
  const draftData: DraftData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let undrafted = draftData.filter(
    (pokemon) =>
      pokemon.category === category.value &&
      pokemon.tier === tier.value &&
      !pokemon.coach
  );
  if (undrafted.length > 0) {
    const randomMon = undrafted[Math.floor(Math.random() * undrafted.length)];
    randomMon.coach = user.username;
    fs.writeFileSync(filePath, JSON.stringify(draftData, null, 2));
    return randomMon.name;
  } else {
    return;
  }
}
