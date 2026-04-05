"use client";

import { Terminal } from "@/features/landing/components/terminal";
import { TextEditor } from "@/features/landing/components/text-editor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const BLUR_STEPS = 8;

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const enter = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      enter
        .fromTo(
          "#hero-name",
          { y: 60, autoAlpha: 0, filter: "blur(12px)" },
          { y: 0, autoAlpha: 1, duration: 1.2, filter: "blur(0px)" },
        )
        .fromTo(
          "#hero-surname",
          { y: 40, autoAlpha: 0, filter: "blur(12px)" },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            filter: "blur(0px)",
          },
          "-=0.8",
        );

      const topWords = new SplitText(".top-comment", {
        type: "words",
        mask: "lines",
      });

      enter
        .fromTo(
          topWords.words,
          { autoAlpha: 0, y: 35 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 },
          "-=0.35",
        )
        .fromTo(
          ".container-card",
          { y: -40, autoAlpha: 0, filter: "blur(12px)" },
          { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.2 },
          "-=0.5",
        )
        .fromTo(
          ".editor-line",
          { y: -20, autoAlpha: 0, filter: "blur(12px)" },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.05,
            filter: "blur(0px)",
          },
          "<0.2",
        )
        .fromTo(
          ".editor-number",
          { y: -20, autoAlpha: 0, filter: "blur(12px)" },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.05,
            filter: "blur(0px)",
          },
          "<",
        );

      const bottomWords = new SplitText(".bottom-comment", {
        type: "words",
        mask: "lines",
      });

      enter
        .fromTo(
          bottomWords.words,
          { autoAlpha: 0, y: -20 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05 },
          "-=0.3",
        )
        .fromTo(
          "#hero-scroll",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="flex h-full w-full flex-row items-center border-b bg-black"
    >
      <div
        id="hero-left"
        className="flex h-full w-1/2 grow flex-col gap-y-12 border-r p-12"
      >
        <h1 className="inline-flex flex-col items-start justify-start gap-y-2">
          <span className="text-foreground font-header relative inline-block p-4 text-8xl font-semibold uppercase">
            Josué
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              {Array.from({ length: BLUR_STEPS }).map((_, i) => {
                const t = i / (BLUR_STEPS - 1); // 0 → 1

                // Blur progresivo (curva más natural)
                const blur = Math.pow(t, 1.8) * 14;

                // Posiciones del gradiente (más suaves que antes)
                const start = t * 80;
                const midStart = start + 6;
                const midEnd = midStart + 12;
                const end = midEnd + 10;

                return (
                  <div
                    key={i}
                    className="absolute inset-0"
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
          </span>
          <span className="text-accent-green font-header z-20 -mt-8 ml-8 text-8xl font-semibold uppercase text-shadow-black">
            Díaz.
          </span>
        </h1>

        <TextEditor />
        <div id="hero-scroll" className="py-6" style={{ opacity: 0 }}>
          <span className="text-muted-foreground text-lg uppercase">
            Scroll Down
          </span>
        </div>
      </div>
      <Terminal />
    </main>
  );
};
