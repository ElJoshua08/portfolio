"use client";

import { TextBlur } from "@/components/ui/text-blur";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export const ProjectsShowcase = () => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Setup inicial solo una vez
  useGSAP(
    () => {
      gsap.set(".project-image", { autoAlpha: 0 });
    },
    { scope: containerRef },
  );

  // Reacciona a isHovering
  useGSAP(
    () => {
      gsap.to(".project-image", {
        autoAlpha: isHovering ? 1 : 0,
        duration: 0.4,
      });
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

      <Image
        src="/waves.jpg"
        fill
        className="project-image absolute z-20 object-cover"
        alt="Stackd"
      />

      {isHovering && (
        <button className="bg-background absolute top-6 right-6 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full">
          <XIcon onClick={() => setIsHovering(false)} />
        </button>
      )}
    </div>
  );
};
