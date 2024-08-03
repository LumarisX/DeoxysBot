import { REST, Routes } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

const commandData = commands
  .filter((commandData) => commandData.enabled)
  .map((commandData) => commandData.command.data);

type DeployCommandsProps = {
  guildId: string;
};

export async function deployGuildCommands({ guildId }: DeployCommandsProps) {
  try {
    console.log("Starting refreshing application (/) commands.");
    await rest.put(
      Routes.applicationGuildCommands(config.APPLICATION_ID, guildId),
      {
        body: commandData,
      }
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
