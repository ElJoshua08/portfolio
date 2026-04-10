"use client";

import { Hero } from "@/features/landing/components/hero";
import { ProjectShowcase } from "@/features/landing/components/project-showcase";
import { SHOWCASE_PROJECTS } from "@/features/landing/showcase-projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(SplitText, SlowMo);

export default function Home() {
  useGSAP(() => {
    const projectsArray = gsap.utils.toArray(".project-showcase");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects-scroll",
        pin: true,
        scrub: 1,
        start: "top top",
        snap: {
          snapTo: [
            0,
            ...projectsArray.map(
              (_, i) => 0.1 + (i / (projectsArray.length - 1)) * (1 - 0.1),
            ),
          ],
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
          ease: "power1.inOut",
        },
      },
    });

    tl.to({}, { duration: 0.1 });

    tl.to(projectsArray, {
      xPercent: -100 * (projectsArray.length - 1),
      ease: "none",
    });
  });

  return (
    <>
      <Hero />
      <div
        id="projects-scroll"
        className="flex min-w-full items-start justify-start overflow-x-hidden"
      >
        {SHOWCASE_PROJECTS.map((project, idx) => (
          <ProjectShowcase key={idx} project={project} index={idx} />
        ))}
      </div>
      {/* <footer className="w-full border-t px-10 py-10">
        <div className="flex flex-col items-start justify-center gap-y-2">
          <span className="text-foreground/85 font-header text-lg">
            Wanna now how this was made?
          </span>
          <a
            className="text-foreground/70 hover:text-accent-blue transition-all duration-75 hover:underline"
            href="https://github.com/ElJoshua08/portfolio"
          >
            Take a look at it&apos;s code
          </a>
        </div>
      </footer> */}
    </>
  );
}
