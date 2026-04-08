import { Command } from "@/features/landing/commands/types";

export const resume: Command = {
  name: "resume",
  description: "Opens my resume on a new window.",
  async handler({ addLine }) {
    addLine({
      body: {
        content: "Opening resume...",
        className: "text-muted-foreground",
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000))

    window.open("https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ");
  },
};
