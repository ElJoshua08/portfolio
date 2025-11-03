export type Project = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  github?: string;
  tools: Tool[];
  technologies: Technology[];
  date: string;
  tags: string[];
};

export type Tool = {
  name: string;
  description: string;
  url: string;
};

export type Technology = {
  name: string;
  description: string;
  url: string;
};
