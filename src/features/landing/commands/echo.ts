import { Command } from "@/features/landing/commands/types";
import { BLANK_LINE } from "@/features/landing/constants";

export const echo: Command = {
  name: "echo",
  description: "Prints to console the message.",
  handler({ addLine, args }) {
    const message = args[0];

    if (!message) {
      addLine(BLANK_LINE);
    } else {
      addLine({
        body: {
          content: message,
          className: "text-foreground",
        },
      });
    }
  },
};
