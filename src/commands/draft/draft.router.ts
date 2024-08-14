import { CommandRoute } from "..";
import { DraftModPickCommand } from "./admin/draft-modpick";
import { DraftResetCommand } from "./admin/draft-reset";
import { DraftSkipCommand } from "./admin/draft-skip";
import { DraftStateCommand } from "./admin/draft-state";
import { DraftTimerCommand } from "./admin/draft-timer";
import { DraftUndoCommand } from "./admin/draft-undo";
import { DraftRandomCommand } from "./draft-random";
import { DraftRerollCommand } from "./draft-reroll";
import { DraftTeamCommand } from "./draft-team";
import { DraftUndraftedCommand } from "./draft-undrafted";

export const DraftRoute: CommandRoute = {
  commands: [
    { command: DraftRandomCommand, enabled: true },
    { command: DraftTeamCommand, enabled: true },
    { command: DraftResetCommand, enabled: true },
    { command: DraftUndoCommand, enabled: true },
    { command: DraftUndraftedCommand, enabled: true },
    { command: DraftModPickCommand, enabled: true },
    { command: DraftRerollCommand, enabled: true },
    { command: DraftStateCommand, enabled: true },
    { command: DraftSkipCommand, enabled: true },
    { command: DraftTimerCommand, enabled: true },
    { command: DraftModPickCommand, enabled: false },
  ],
  enabled: true,
};
