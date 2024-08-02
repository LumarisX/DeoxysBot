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
  const command = commands.find(
    (command) =>
      command.data.name.toLowerCase() === interaction.commandName.toLowerCase()
  );
  if (command) {
    command.execute(interaction);
  }
});

client.on("guildCreate", async (guild) => {
  await deployGuildCommands({ guildId: guild.id });
});

client.login(config.DISCORD_TOKEN);
