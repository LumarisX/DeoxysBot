import { CommandInteraction, SharedSlashCommand } from "discord.js";
import { DraftRandomCommand } from "./draft/draft-random";
import { SpeakCommand } from "./speak/speak";
import { DraftMyTeamCommand } from "./draft/draft-myteam";

export type Command = {
  data: SharedSlashCommand;
  execute: (interaction: CommandInteraction) => void;
};

export const commands: { command: Command; enabled: boolean }[] = [
  { command: SpeakCommand, enabled: true },
  { command: DraftRandomCommand, enabled: true },
  { command: DraftMyTeamCommand, enabled: true },
];
export type DraftData = {
  name: string;
  pid: string;
  tier: string;
  category: string;
  coach?: string;
}[];
