import { clear } from "@/features/landing/commands/clear";
import { help } from "@/features/landing/commands/help";
import { resume } from "@/features/landing/commands/resume";
import { skills } from "@/features/landing/commands/skills";
import { Command } from "@/features/landing/commands/types";
import { whoami } from "@/features/landing/commands/whoami";

export const COMMANDS: Record<string, Command> = {
  help,
  clear,
  whoami,
  resume,
  skills,
};
