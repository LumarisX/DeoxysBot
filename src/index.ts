import { Client, GatewayIntentBits, Interaction } from "discord.js";
import { config } from "./config";
import { deployGuildCommands } from "./deploy-commands";
import { commands } from "./commands";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => console.log("Ready!"));

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;
  const commandData = commands.find(
    (commandData) =>
      commandData.command.data.name.toLowerCase() ===
      interaction.commandName.toLowerCase()
  );
  if (commandData) {
    commandData.command.execute(interaction);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase().includes("deoxys")) {
    try {
      message.reply(`Hello ${message.author}!`);
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("guildCreate", async (guild) => {
  await deployGuildCommands({ guildId: guild.id });
});

client.login(config.DISCORD_TOKEN);
