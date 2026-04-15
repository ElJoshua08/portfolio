import { Command } from "@/features/landing/commands/types";
import { BLANK_LINE } from "@/features/landing/constants";
import { TerminalLine } from "@/features/landing/types";

const SKILLS: TerminalLine[] = [
  // Languages
  BLANK_LINE,
  {
    body: [
      {
        content: "// languages",
        className: "text-secondary-foreground underline italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "TypeScript", className: "text-foreground font-bold" },
      { content: " · advanced", className: "text-accent-blue" },
      {
        content:
          " // I don't write JavaScript anymore. Typing is non-negotiable",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [],
  },
  // Frameworks
  BLANK_LINE,
  {
    body: [
      {
        content: "// frameworks",
        className: "text-secondary-foreground underline italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Next.JS", className: "text-foreground font-bold" },
      { content: " · advanced ", className: "text-accent-blue" },
      {
        content:
          "// Default go-to. App Router, RSC, server actions — I live here.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "React", className: "text-foreground font-bold" },
      { content: " · advanced", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "React Native", className: "text-foreground font-bold" },
      { content: " · intermediate ", className: "text-accent-blue" },
      {
        content: "// Haven't used it a lot, but I can defend myself on it.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  // Styling
  BLANK_LINE,
  {
    body: [
      {
        content: "// styling",
        className: "text-secondary-foreground underline italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "TailwindCSS", className: "text-foreground font-bold" },
      { content: " · intermediate ", className: "text-accent-blue" },
      {
        content: "// THE ONLY PLAUSIBLE WAY. No CSS on a real project.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  // Animation
  BLANK_LINE,
  {
    body: [
      {
        content: "// animations",
        className: "text-secondary-foreground underline italic",
      },
    ],
  },
  {
    body: [
      {
        content: "I'm a person who really enjoys animations, ",
        className: "text-foreground",
      },
    ],
  },
  {
    body: [
      {
        content: "So i really focus my time on learning about them.",
        className: "text-foreground",
      },
    ],
  },
  BLANK_LINE,
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "GSAP", className: "text-foreground font-bold" },
      { content: " · advanced ", className: "text-accent-blue" },
      {
        content:
          "// Timelines, ScrollTrigger, SplitText, basically if it moves, it's GSAP.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Framer Motion", className: "text-foreground font-bold" },
      { content: " · intermediate ", className: "text-accent-blue" },
      {
        content:
          "// I use this for component-level animations, literally made for react.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Three.js", className: "text-foreground font-bold" },
      { content: " · noobie ", className: "text-accent-blue" },
      {
        content: "// 3D on the web. Still exploring.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  // Tools
  BLANK_LINE,
  {
    body: [
      {
        content: "// tools",
        className: "text-secondary-foreground italic underline",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Git", className: "text-foreground font-bold" },
      { content: " · advanced", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Docker", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  // Design
  BLANK_LINE,
  {
    body: [
      {
        content: "// design",
        className: "text-secondary-foreground italic underline",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Figma", className: "text-foreground font-bold" },
      { content: " · advanced ", className: "text-accent-blue" },
      {
        content: "// Design first is the best friend of fast-shipping.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Blender", className: "text-foreground font-bold" },
      { content: " · noobie ", className: "text-accent-blue" },
      {
        content: "// I'm  a total noob but I enjoy it.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  BLANK_LINE,
];

export const skills: Command = {
  name: "skills",
  description: "Some bits of my usual stack.",
  handler({ addLine }) {
    SKILLS.forEach(addLine);
  },
};
