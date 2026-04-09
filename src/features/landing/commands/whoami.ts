import { Command } from "@/features/landing/commands/types";
import { BLANK_LINE } from "@/features/landing/constants";
import { TerminalLine } from "@/features/landing/types";

export const WHOAMI: TerminalLine[] = [
  BLANK_LINE,
  {
    body: [
      {
        content: "Personal information: ",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    body: [
      { content: "> name: ", className: "text-muted-foreground" },
      { content: "Josué Díaz Martínez", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> role: ", className: "text-muted-foreground" },
      { content: "Front-End Developer", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> age: ", className: "text-muted-foreground" },
      { content: "17", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> location: ", className: "text-muted-foreground" },
      { content: "Cantabria, Spain", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> experience: ", className: "text-muted-foreground" },
      { content: "3+ years", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> status: ", className: "text-muted-foreground" },
      { content: "available for work ●", className: "text-accent-green" },
    ],
  },
  BLANK_LINE,
];

export const whoami: Command = {
  name: "whoami",
  description: "Displays personal information.",
  handler({ addLine }) {
    WHOAMI.forEach(addLine);
  },
};
