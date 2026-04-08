import { Command } from "@/features/landing/commands/types";

export const resume: Command = {
  name: "resume",
  description: "Opens my resume on a new window.",
  handler({ addLine }) {
    addLine({
      body: {
        content: "Opening resume...",
        className: "text-muted-foreground",
      },
    });

    window.open("https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ");
  },
};
