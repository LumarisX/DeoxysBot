import { ChatInputCommandInteraction, SharedSlashCommand } from "discord.js";
import { DraftRoute } from "./draft/draft.router";
import { MiscRoute } from "./misc/misc.router";

export type Command = {
  data: SharedSlashCommand;
  execute: (interaction: ChatInputCommandInteraction) => void;
};

export type CommandRoute = {
  commands: { command: Command; enabled?: boolean }[];
  enabled?: boolean;
};

export let routes: CommandRoute[] = [MiscRoute, DraftRoute];
