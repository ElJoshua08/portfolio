import { TerminalSection } from "@/features/landing/types";

export function generatePrompt({
  username = "joshua",
  hostname = "portfolio",
  cwd = "~/",
  promptChar = "$",
}: {
  username?: string;
  hostname?: string;
  cwd?: string;
  promptChar?: string;
}): TerminalSection[] {
  return [
    {
      content: `${username}@${hostname}`,
      className: "text-accent-blue",
    },
    {
      content: `:${cwd}`,
      className: "text-muted-foreground",
    },
    {
      content: `${promptChar} `,
      className: "text-accent-green",
    },
  ];
}
