import { TerminalLine, TerminalSection } from "@/features/landing/types";

export const BLANK_LINE: TerminalLine = {
  body: {
    content: "_",
    className: "text-background",
  },
};

// Todo: This shit might be actually fkn better as a markdown, I
// Todo: don't know how to use colors in a markdown tho.
export const ABOUT_ME: TerminalSection[][] = [
  [
    { content: "Hello there I'm", className: "text-foreground" },
    { content: "Joshua", className: "text-accent-green italic" },
    {
      content: "// (Actually Josué Díaz Martínez :8)",
      className: "text-muted-foreground",
    },
  ],
  [{ content: "", className: "" }],
  [
    { content: "I'm a", className: "text-foreground" },
    { content: "Frontend Developer,", className: "text-accent-blue" },
    { content: "17 years old,", className: "text-foreground" },
    { content: "// started at 12", className: "text-muted-foreground" },
  ],
  [{ content: "", className: "" }],
  [{ content: "// what I do", className: "text-muted-foreground" }],
  [
    { content: "I build", className: "text-oreground" },
    { content: "bold, fast,", className: "text-accent-green" },
    { content: "and heavily animated", className: "text-foreground" },
    { content: "interfaces", className: "text-accent-blue" },
  ],
  [
    { content: "that people", className: "text-foreground" },
    { content: "actually remember.", className: "text-accent-green" },
  ],
  [{ content: "", className: "" }],
  [{ content: "// stack", className: "text-muted-foreground" }],
  [
    { content: "Next.js,", className: "text-yellow-500 italic" },
    { content: "React,", className: "text-teal-500 underline" },
    { content: "TypeScript,", className: "text-blue-600 font-bold" },
    { content: "Tailwind,", className: "text-accent-blue" },
    { content: "GSAP", className: "text-red-500 font-bold" },
  ],
  [{ content: "", className: "" }],
  [{ content: "", className: "" }],
  [{ content: "// open to", className: "text-muted-foreground" }],
  [
    { content: "Freelance,", className: "text-accent-green" },
    { content: "full-time,", className: "text-accent-green" },
    { content: "collabs —", className: "text-accent-green" },
    { content: "anything worth building.", className: "text-foreground" },
  ],
  [{ content: "", className: "" }],
  [{ content: "", className: "" }],
  [{ content: "// goal", className: "text-muted-foreground" }],
  [
    { content: "The top.", className: "text-accent-green font-bold" },
    { content: "// nothing else.", className: "text-muted-foreground" },
  ],
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
        content: "> ",
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
        content: "> ",
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
        content: "> ",
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
        content: "‘help’ ",
        className: "text-accent-green",
      },
      {
        content: "to get stated.",
        className: "text-secondary-foreground",
      },
    ],
  },
];

export const WHOAMI: TerminalLine[] = [
  {},
  {
    body: [
      {
        content: "Personal information: ",
        className: "text-secondary-foreground",
      },
    ],
  },
  {
    body: [
      { content: "> name: ", className: "text-muted-foreground" },
      { content: "Josué Díaz Martínez", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> role: ", className: "text-muted-foreground" },
      { content: "Front-End Developer", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> age: ", className: "text-muted-foreground" },
      { content: "17", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> location:", className: "text-muted-foreground" },
      { content: "Cantabria, Spain", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> experience:", className: "text-muted-foreground" },
      { content: "3+ years", className: "text-foreground" },
    ],
  },
  {
    body: [
      { content: "> status:", className: "text-muted-foreground" },
      { content: "available for work ●", className: "text-accent-green" },
    ],
  },
];
