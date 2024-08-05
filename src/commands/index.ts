import { CommandInteraction, SharedSlashCommand } from "discord.js";
import { DraftRandomCommand } from "./draft/draft-random";
import { SpeakCommand } from "./speak/speak";
import { DraftTeamCommand } from "./draft/draft-team";
import { DraftResetCommand } from "./draft/draft-reset";
import { DraftUndoCommand } from "./draft/draft-undo";
import { DraftUndraftedCommand } from "./draft/draft-undrafted";
import { DraftModPickCommand } from "./draft/draft-modpick";
import { DraftTradeRandomCommand } from "./draft/trade/trade-random";
import { DraftStateCommand } from "./draft/draft-state";
import { DraftSkipCommand } from "./draft/draft-skip";

export type Command = {
  data: SharedSlashCommand;
  execute: (interaction: CommandInteraction) => void;
};

export const commands: { command: Command; enabled: boolean }[] = [
  { command: SpeakCommand, enabled: true },
  { command: DraftRandomCommand, enabled: true },
  { command: DraftTeamCommand, enabled: true },
  { command: DraftResetCommand, enabled: true },
  { command: DraftUndoCommand, enabled: true },
  { command: DraftUndraftedCommand, enabled: true },
  { command: DraftModPickCommand, enabled: true },
  { command: DraftTradeRandomCommand, enabled: true },
  { command: DraftStateCommand, enabled: true },
  { command: DraftSkipCommand, enabled: true },
];
