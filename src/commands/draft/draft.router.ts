import { CommandRoute } from "..";
import { DraftModPickCommand } from "./admin/draft-modpick";
import { DraftResetCommand } from "./admin/draft-reset";
import { DraftSkipCommand } from "./admin/draft-skip";
import { DraftStateCommand } from "./admin/draft-state";
import { DraftTimerCommand } from "./admin/draft-timer";
import { DraftUndoCommand } from "./admin/draft-undo";
import { DraftRandomCommand } from "./draft-random";
import { DraftTeamCommand } from "./draft-team";
import { DraftUndraftedCommand } from "./draft-undrafted";
import { DraftTradeRandomCommand } from "./trade-random";

export const DraftRoute: CommandRoute = {
  commands: [
    { command: DraftRandomCommand, enabled: true },
    { command: DraftTeamCommand, enabled: true },
    { command: DraftResetCommand, enabled: true },
    { command: DraftUndoCommand, enabled: true },
    { command: DraftUndraftedCommand, enabled: true },
    { command: DraftModPickCommand, enabled: true },
    { command: DraftTradeRandomCommand, enabled: true },
    { command: DraftStateCommand, enabled: true },
    { command: DraftSkipCommand, enabled: true },
    { command: DraftTimerCommand, enabled: true },
  ],
  enabled: true,
};
