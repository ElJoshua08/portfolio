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
  {
    body: [
      {
        content: "> Github: ",
        className: "text-muted-foreground",
      },
      {
        content: "ElJoshua08",
        className: "text-accent-blue hover:underline",
        href: "https://github.com/ElJoshua08/",
      },
    ],
  },
  {
    body: [
      {
        content: "> Email: ",
        className: "text-muted-foreground",
      },
      {
        content: "josuealejandrof926@gmail.com",
        className: "text-accent-blue hover:underline",
        href: "mailto://josuealejandrof926@gmail.com",
      },
    ],
  },
];

export const contact: Command = {
  name: "contact",
  description: "Contact with me",
  handler({ addLine }) {
    CONTACT.map(addLine);
  },
};
