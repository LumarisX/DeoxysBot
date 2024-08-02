import { REST, Routes } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

const commandData = commands
  .filter((command) => command.enabled)
  .map((command) => command.data);

async function deployCommands() {
  try {
    console.log("Starting refreshing application (/) commands.");
    console.log(commands.map((command) => command.data.name));
    await rest.put(Routes.applicationCommands(config.APPLICATION_ID), {
      body: commandData,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

deployCommands();
