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

      <section className="w-full h-full flex items-center justify-start py-20 px-30 flex-col gap-y-20">
        <Project
          project={{
            title: "Portfolio",
            description:
              "This is a personal portfolio website, is built with Next.JS, Tailwind CSS, and TypeScript. It features a responsive design, and is optimized for both mobile and desktop devices. \n\n Minimalist and clean design, featuring a CLI-like interface with multiple commands.",
            links: {
              github: "https://github.com/ElJoshua08/portfolio",
              website: "https://devbyjoshua.vercel.app/",
            },
            images: {
              thumbnails: {
                phone: "/images/portfolio-thumbnail.png",
                tablet: "/images/portfolio-thumbnail.png",
                desktop: "/images/portfolio-thumbnail.png",
              },
            },
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
            projectDate: new Date("2025-10-01"),
          }}
        />

        <div className="flex w-full items-center justify-center gap-x-40">
          <button
            className="text-xl cursor-pointer disabled:text-muted-foreground"
            disabled
          >
            [ Prev ]
          </button>
          <button className="text-xl cursor-pointer">[ Next ]</button>
        </div>
      </section>
    </PageContent>
  );
}
