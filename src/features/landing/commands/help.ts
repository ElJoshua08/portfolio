import { COMMANDS } from "@/features/landing/commands";
import { Command } from "@/features/landing/commands/types";

export const help: Command = {
  name: "help",
  description: "Displays the information shown now.",
  handler({ addLine, args }) {
    const target = args[0];

    if (target) {
      const command = COMMANDS[target];
      if (command) {
        addLine({
          body: [
            {
              content: `Command - ${command.name}`,
              className: "text-secondary-foreground",
            },
          ],
        });
        addLine({
          body: [
            {
              content: command.description,
              className: "text-foreground",
            },
          ],
        });
      } else {
        addLine({
          body: [
            {
              content: `Command ${target} not found. type 'help' to get a list of commands.`,
              className: "text-destructive",
            },
          ],
        });
      }
    } else {
      Object.entries(COMMANDS).forEach((obj, idx) => {
        addLine({
          body: [
            {
              content: `${obj[0]} - `,
              className: "text-accent-green",
            },
            {
              content: obj[1].description,
              className: "text-foreground/75",
            },
          ],
        });
      });
    }
  },
};
