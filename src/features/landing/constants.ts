import { TerminalLine } from "@/features/landing/types";

export const ABOUT_ME_LINES = [
  {
    type: "text",
    texts: [
      { text: "Hello there I'm", class: "base" },
      { text: "Joshua", class: "accent-green" },
      {
        text: "// (Actually Josué Díaz Martínez :8)",
        class: "muted-foreground",
      },
    ],
  },
  { type: "blank" },
  {
    type: "text",
    texts: [
      { text: "I'm a", class: "foreground" },
      { text: "Frontend Developer,", class: "accent-blue" },
      { text: "17 years old,", class: "foreground" },
      { text: "// started at 12", class: "muted-foreground" },
    ],
  },
  { type: "blank" },
  {
    type: "text",
    texts: [{ text: "// what I do", class: "muted-foreground" }],
  },
  {
    type: "text",
    texts: [
      { text: "I build", class: "foreground" },
      { text: "bold, fast,", class: "accent-green" },
      { text: "and heavily animated", class: "foreground" },
      { text: "interfaces", class: "accent-blue" },
    ],
  },
  {
    type: "text",
    texts: [
      { text: "that people", class: "foreground" },
      { text: "actually remember.", class: "accent-green" },
    ],
  },
  { type: "blank" },
  {
    type: "text",
    texts: [{ text: "// stack", class: "muted-foreground" }],
  },
  {
    type: "text",
    texts: [
      { text: "Next.js,", class: "accent-blue" },
      { text: "React,", class: "accent-blue" },
      { text: "TypeScript,", color: "accent-blue" },
      { text: "Tailwind,", color: "accent-blue" },
      { text: "GSAP", color: "accent-blue" },
    ],
  },
  { type: "blank" },
  {
    type: "text",
    texts: [{ text: "// open to", color: "muted-foreground" }],
  },
  {
    type: "text",
    texts: [
      { text: "Freelance,", color: "accent-green" },
      { text: "full-time,", color: "accent-green" },
      { text: "collabs —", color: "accent-green" },
      { text: "anything worth building.", color: "foreground" },
    ],
  },
  { type: "blank" },
  {
    type: "text",
    texts: [{ text: "// goal", color: "muted-foreground" }],
  },
  {
    type: "text",
    texts: [
      { text: "The top.", color: "accent-green" },
      { text: "// nothing else.", color: "muted-foreground" },
    ],
  },
];

export const TERMINAL_INITIALIZATION_LINES: TerminalLine[] = [
  {
    body: {
      content: "Initializing Terminal...",
      className: "text-secondary-foreground",
    },
    misc: {
      content: "23ms",
      className: "text-muted-foreground",
    },
  },
  {
    misc: {
      content: "15ms",
      className: "text-muted-foreground",
    },
    body: [
      {
        content: "Loading modules...",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    misc: {
      content: "12ms",
      className: "text-muted-foreground",
    },
    body: [
      {
        content: ">",
        className: "text-muted-foreground",
      },
      {
        content: "System.check() --- ",
        className: "text-secondary-foreground",
      },
      {
        content: "✓",
        className: "text-accent-green",
      },
    ],
  },
  {
    misc: {
      content: "5ms",
      className: "text-muted-foreground",
    },
    body: [
      {
        content: ">",
        className: "text-muted-foreground",
      },
      {
        content: "Portfolio.parse() --- ",
        className: "text-secondary-foreground",
      },
      {
        content: "✓",
        className: "text-accent-green",
      },
    ],
  },
  {
    misc: {
      content: "17ms",
      className: "text-muted-foreground",
    },
    body: [
      {
        content: ">",
        className: "text-muted-foreground",
      },
      {
        content: "Projects.fetch() --- ",
        className: "text-secondary-foreground",
      },
      {
        content: "✓",
        className: "text-accent-green",
      },
    ],
  },
  {
    body: [
      {
        content: "...",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    body: [
      {
        content: "All systems operational.",
        className: "text-secondary-foreground",
      },
    ],
    misc: [
      {
        content: "Total time: ",
        className: "text-secondary-foreground",
      },
      {
        content: "89ms",
        className: "text-muted-foreground",
      },
    ],
  },
  {
    body: [
      {
        content: "-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    body: [
      {
        content: "Welcome! Type ",
        className: "text-secondary-foreground",
      },
      {
        content: "‘help’",
        className: "text-accent-green",
      },
      {
        content: "to get stated.",
        className: "text-secondary-foreground",
      },
    ],
  },
];
