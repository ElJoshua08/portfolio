import { Command } from "@/features/landing/commands/types";
import { TerminalLine } from "@/features/landing/types";

const CONTACT: TerminalLine[] = [
  {
    body: [
      {
        content: "Contact with me!",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    body: [
      {
        content: "> Instagram: ",
        className: "text-muted-foreground",
      },
      {
        content: "@el_.joshua",
        className: "text-accent-blue hover:underline",
        href: "https://www.instagram.com/el_.joshua",
      },
    ],
  },
];

export const contact: Command = {
  name: "contact",
  description: "Contact with me",
  handler({ addLine }) {},
};
