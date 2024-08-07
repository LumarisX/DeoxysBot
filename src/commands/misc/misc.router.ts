import { CommandRoute } from "..";
import { SpeakCommand } from "./speak";

export const MiscRoute: CommandRoute = {
  commands: [{ command: SpeakCommand, enabled: true }],
  enabled: true,
};
