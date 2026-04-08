"use client";

import { TextBlur } from "@/components/ui/text-blur";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { XIcon } from "lucide-react";
import { useRef, useState } from "react";

const ROWS = 10;

export const ProjectsShowcase = () => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  console.log("hovering");

  // Reacciona a isHovering
  useGSAP(
    () => {
      if (isHovering) {
        gsap.to(".project-row-inner-first", {
          x: "0%",
          ease: "expo.inOut",
          delay: 0.125,
          duration: 1.2,
        });
        gsap.to(".project-row-inner", {
          x: "0%",
          ease: "expo.out",
          duration: 0.7,
          delay: 0.8,
          stagger: 0.08,
        });
      } else {
        gsap.to(".project-row-inner, .project-row-inner-first", {
          x: "-100%",
          duration: 0.4,
        });
      }
    },
    { scope: containerRef, dependencies: [isHovering] },
  );

  return (
    <div
      ref={containerRef}
      className="bg-background relative z-10 flex min-h-screen w-full flex-col items-start justify-start p-12"
    >
      <header className="flex w-full items-center justify-between">
        <h1 className="relative inline-flex flex-col items-start justify-start gap-y-2">
          <TextBlur
            className="from-foreground font-header via-foreground relative z-0 -mt-4 -ml-4 inline-block cursor-default bg-linear-to-b to-[#11111] bg-clip-text p-6 text-8xl font-bold text-transparent"
            blurSteps={8}
          >
            Selected
          </TextBlur>
          <span className="text-accent-green font-header pointer-event-none peer z-10 -mt-18 ml-48 text-8xl font-bold select-none">
            Work
          </span>
          <span className="text-secondary-foreground absolute top-1/2 left-0 mt-8 ml-2 block -translate-y-1/2 font-bold">
            // 01 - Projects
          </span>
        </h1>
        <span className="text-accent-blue">// ? Hover to reveal...</span>
      </header>

      <main
        onMouseEnter={() => setIsHovering(true)}
        className="bg-surface h-full w-full grow"
      >
        Main content
      </main>

      <footer className="flex w-full items-center justify-between">
        <h3 className="relative inline-flex flex-col items-start justify-start gap-y-2">
          <TextBlur
            className="from-accent-blue font-header via-accent-blue relative z-0 -mt-4 -ml-4 inline-block cursor-default bg-linear-to-b to-[#11111] bg-clip-text p-6 text-7xl font-bold text-transparent"
            blurSteps={8}
          >
            Stackd
          </TextBlur>
          <span className="absolute top-1/2 left-0 mt-6 ml-2 block -translate-y-1/2 text-2xl font-bold">
            Poker Tracker
          </span>
        </h3>
      </footer>

      <div className="project-reveal pointer-events-none absolute inset-0 z-20">
        {Array.from({ length: ROWS }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-full overflow-hidden",
              i === 0 ? "project-row-inner-first" : "project-row-inner",
            )}
            style={{
              height: `${100 / ROWS}%`,
              top: `${(100 / ROWS) * i}%`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/mountain-lg.jpg')",
                backgroundSize: `100% ${ROWS * 100}%`,
                backgroundPosition: `0% ${(i * 100) / (ROWS - 1)}%`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        ))}
      </div>

      {isHovering && (
        <button
          className="bg-background absolute top-0 right-0 z-20 flex cursor-pointer items-center justify-center"
          style={{
            height: `${100 / ROWS}%`,
            aspectRatio: `1/1`,
          }}
        >
          <XIcon
            className="size-20"
            strokeWidth={0.6}
            onClick={() => setIsHovering(false)}
          />
        </button>
      )}
    </div>
  );
};
