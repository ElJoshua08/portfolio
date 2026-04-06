"use client";

import { Terminal } from "@/features/landing/components/terminal";
import { TextEditor } from "@/features/landing/components/text-editor";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const BLUR_STEPS = 16;

export const Hero = () => {
  return (
    <main className="flex w-full grow flex-row items-center justify-center">
      <div
        id="hero-left"
        className="relative flex min-h-0 w-1/2 flex-col gap-y-12 overflow-hidden p-12"
      >
        <h1
          id="hero-complete-name"
          className="inline-flex flex-col items-start justify-start gap-y-2 overflow-visible"
        >
          <span
            id="hero-name"
            className="from-foreground font-header via-foreground group relative -mt-4 -ml-4 inline-block cursor-default overflow-visible bg-linear-to-b to-[#11111] bg-clip-text p-6 text-9xl font-bold text-transparent uppercase"
          >
            Josué
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              {Array.from({ length: BLUR_STEPS }).map((_, i) => {
                const t = i / (BLUR_STEPS - 1); // 0 → 1

                const blur = Math.pow(t, 1.4) * 6;

                const start = t * 100;
                const midStart = start + 6;
                const midEnd = midStart + 12;
                const end = midEnd + 10;

                return (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
                    style={{
                      backdropFilter: `blur(${blur.toFixed(2)}px)`,
                      WebkitBackdropFilter: `blur(${blur.toFixed(2)}px)`,
                      maskImage: `linear-gradient(
              to bottom,
              transparent ${start}%,
              black ${midStart}%,
              black ${midEnd}%,
              transparent ${end}%
            )`,
                      WebkitMaskImage: `linear-gradient(
              to bottom,
              transparent ${start}%,
              black ${midStart}%,
              black ${midEnd}%,
              transparent ${end}%
            )`,
                    }}
                  />
                );
              })}
            </div>
            <div
              id="hero-name-wrapper"
              className="bg-background absolute inset-0 z-30"
            />
          </span>

          <span
            className="text-accent-green font-header z-20 -mt-16 ml-2 text-8xl font-semibold uppercase text-shadow-blue-400"
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
          className="bg-border absolute top-0 right-0 h-full w-px"
        />
      </div>
      <Terminal />
    </main>
  );
};
