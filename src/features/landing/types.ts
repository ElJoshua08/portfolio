import type { ClassValue } from "clsx";

export type TerminalSection = {
  content: string;
  className: ClassValue;
};

export type TerminalLine = {
  prompt?: TerminalSection[];
  body?: TerminalSection[] | TerminalSection;
  misc?: TerminalSection[] | TerminalSection;
};

export type TerminalType = {
  lines?: TerminalLine[];
};
