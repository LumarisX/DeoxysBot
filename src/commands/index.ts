import { SharedSlashCommand, CommandInteraction } from "discord.js";
import { MiscRoute } from "./misc/misc.router";
import { DraftRoute } from "./draft/draft.router";

export type Command = {
  data: SharedSlashCommand;
  execute: (interaction: CommandInteraction) => void;
};

export type CommandRoute = {
  commands: { command: Command; enabled?: boolean }[];
  enabled?: boolean;
};

export let routes: CommandRoute[] = [MiscRoute, DraftRoute];
