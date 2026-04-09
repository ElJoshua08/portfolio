import { Command } from "@/features/landing/commands/types";
import { BLANK_LINE } from "@/features/landing/constants";
import { TerminalLine } from "@/features/landing/types";

// TODO: fix this styling
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
      { content: "> ", className: "text-muted-foreground" },
      { content: "TypeScript", className: "text-foreground" },
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
      { content: "> ", className: "text-muted-foreground" },
      { content: "Next.JS", className: "text-foreground" },
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
        content: "// Expo-based. I don't use it a lot but I love when i do.",
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
        content:
          "// Utility-first is the only way. Fast, consistent, scalable.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  // Animation
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
    body: [{
      content: "I'm a person who really enjoys animations",
      className: "text-foreground"
    },{
      content: "I'm a person who really enjoys animations",
      className: "text-foreground"
    }]
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "GSAP", className: "text-foreground font-bold" },
      { content: " · advanced", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content:
          "  Timelines, ScrollTrigger, SplitText — if it moves, it's GSAP.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Framer Motion", className: "text-foreground font-bold" },
      { content: " · high-intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content: "  Component-level animations. Great for React, fast to ship.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Three.js", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content: "  3D on the web. Still exploring — but I enjoy it a lot.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  { body: { content: "", className: "" } },

  // Tools
  {
    body: [{ content: "// tools", className: "text-muted-foreground italic" }],
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
      {
        content:
          "  Branching, rebasing, conventional commits. Version control is non-negotiable.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Docker", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content:
          "  Containerizing projects. Consistent environments, no excuses.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  { body: { content: "", className: "" } },

  // Design
  {
    body: [{ content: "// design", className: "text-muted-foreground italic" }],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Figma", className: "text-foreground font-bold" },
      { content: " · advanced", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content:
          "  I design before I code. Components, variables, auto-layout — all of it.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Blender", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content: "  3D modeling and rendering for web assets and visuals.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "Affinity Suite", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content:
          "  Designer + Publisher for print and brand work. No subscription needed.",
        className: "text-muted-foreground italic",
      },
    ],
  },
  {
    body: [
      { content: "> ", className: "text-accent-green" },
      { content: "DaVinci Resolve", className: "text-foreground font-bold" },
      { content: " · intermediate", className: "text-accent-blue" },
    ],
  },
  {
    body: [
      {
        content: "  Motion graphics and video editing. Fusion for compositing.",
        className: "text-muted-foreground italic",
      },
    ],
  },
];
export const skills: Command = {
  name: "skills",
  description: "A little bit about my stack.",
  handler({ addLine }) {
    SKILLS.forEach(addLine);
  },
};
