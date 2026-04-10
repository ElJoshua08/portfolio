import { Command } from "@/features/landing/commands/types";

export const clear: Command = {
  name: "clear",
  description: "Clears the terminal.",
  handler({ reset }) {
    reset();
  },
};
