import { TerminalLine } from "@/features/landing/types";

type CommandContext = {
  addLine: (line: TerminalLine) => void;
  reset: () => void;
  args: string[];
};

type CommandHandler = (ctx: CommandContext) => void;

export type Command = {
  name: string;
  description: string;
  handler: CommandHandler;
};
