import { REST, Routes, SharedSlashCommand } from "discord.js";
import { config } from "./config";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

const commandData: SharedSlashCommand[] = [];

// const commandData = routes
//   .filter((route) => route.enabled)
//   .flatMap((routes) => routes.commands)
//   .filter((commandData) => commandData.enabled)
//   .map((commandData) => commandData.command.data);

async function deployGlobalCommands() {
  try {
    console.log("Starting refreshing application (/) commands.");
    console.log(commandData.map((commandData) => commandData.name));
    await rest.put(Routes.applicationCommands(config.APPLICATION_ID), {
      body: commandData,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

deployGlobalCommands();
