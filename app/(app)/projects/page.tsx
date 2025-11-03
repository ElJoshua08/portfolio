"use client";

import { Project } from "@/app/(app)/projects/_components/project";
import { PageContent } from "@/components/page-content";

export default function ProjectsPage() {
  return (
    <PageContent>
      <header className="py-20 md:py-12 md:pl-18 flex flex-col md:items-start justify-center w-full">
        <span className="text-muted-foreground text-center">
          Take a look at...
        </span>
        <h1 className="font-bold text-4xl text-center">Some of my projects</h1>
      </header>

      <section className="w-full h-full flex items-center justify-center px-30">
        <Project
          project={{
            title: "Portfolio",
            description:
              "A simple portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
            url: "https://devbyjoshua.vercel.app/",
            thumbnail: "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            github: "https://github.com/ElJoshua08/portfolio",
            tools: [
              {
                name: "Next.js",
                description: "The React Framework",
                url: "https://nextjs.org/",
              },
              {
                name: "Tailwind CSS",
                description: "A utility-first CSS framework",
                url: "https://tailwindcss.com/",
              },
              {
                name: "TypeScript",
                description: "A typed superset of JavaScript",
                url: "https://www.typescriptlang.org/",
              },
            ],
            technologies: [
              {
                name: "Next.js",
                description: "The React Framework",
                url: "https://nextjs.org/",
              },
              {
                name: "Tailwind CSS",
                description: "A utility-first CSS framework",
                url: "https://tailwindcss.com/",
              },
              {
                name: "TypeScript",
                description: "A typed superset of JavaScript",
                url: "https://www.typescriptlang.org/",
              },
            ],
            date: "2023",
            tags: ["Next.js", "Tailwind CSS", "TypeScript"],
          }}
        />
      </section>
    </PageContent>
  );
}
