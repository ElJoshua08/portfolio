import { Command } from "@/features/landing/commands/types";
import { WHOAMI } from "@/features/landing/constants";

export const whoami: Command = {
  name: "whoami",
  description: "Displays personal information.",
  handler({ addLine }) {
    WHOAMI.forEach(addLine);
  },
};
