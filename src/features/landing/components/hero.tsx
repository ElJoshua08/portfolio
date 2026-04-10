"use client";

import { TextBlur } from "@/components/ui/text-blur";
import { Terminal } from "@/features/landing/components/terminal";
import { TextEditor } from "@/features/landing/components/text-editor";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Hero = () => {
  return (
    <main className="flex h-[calc(100dvh-5rem)] min-h-0 w-full shrink-0 grow flex-row items-start justify-start border-b">
      <div
        id="hero-left"
        className="relative flex h-full min-h-0 w-1/2 flex-col gap-y-12 overflow-hidden p-12"
      >
        <h1
          id="hero-complete-name"
          className="inline-flex flex-col items-start justify-start gap-y-2"
        >
          <TextBlur
            id="hero-name"
            className="from-foreground font-header via-foreground relative -mt-4 -ml-4 inline-block bg-linear-to-b to-[#11111] bg-clip-text p-6 text-9xl font-bold text-transparent uppercase"
          >
            Josué
            <div
              id="hero-name-wrapper"
              className="bg-background absolute inset-0 z-30 scale-y-200 p-6"
            />
          </TextBlur>

          <span
            className="text-accent-green font-header invisible z-20 -mt-16 ml-2 text-8xl font-semibold uppercase"
            style={{
              textShadow: `2px -4px 8px #232323`,
            }}
            id="hero-surname"
          >
            Díaz.
          </span>
        </h1>

        <TextEditor />

        {/* Right border */}
        <div
          id="right-border"
          className="bg-border absolute top-0 right-0 -z-10 h-0 w-px"
        />
      </div>
      <Terminal />
    </main>
  );
};
