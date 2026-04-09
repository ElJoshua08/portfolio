"use client";

import { Magnetic } from "@/components/ui/magnetic";
import { TextBlur } from "@/components/ui/text-blur";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ProjectsShowcase = () => {
  const containerRef = useRef(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const nOutlineRef = useRef<HTMLSpanElement>(null);
  const nFilledRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  console.log(revealed, "Is revealed");

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    let fillX = 0,
      fillY = 0;
    let inside = false;
    let isRevealing = false;
    let raf: number;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onEnter = () => {
      inside = true;
    };

    const onLeave = () => {
      inside = false;
      if (nFilledRef.current && !isRevealing) {
        nFilledRef.current.style.webkitMaskImage =
          "radial-gradient(circle 0px at 50% 50%, black 0px, transparent 0px)";
        nFilledRef.current.style.maskImage =
          "radial-gradient(circle 0px at 50% 50%, black 0px, transparent 0px)";
      }
    };

    const onClick = () => {
      if (isRevealing) return;
      isRevealing = true;

      const filled = nFilledRef.current;
      const outline = nOutlineRef.current;

      if (!filled || !outline) return;

      // expand mask to cover everything
      const diagonal = Math.sqrt(
        stage.offsetWidth ** 2 + stage.offsetHeight ** 2,
      );
      filled.style.transition =
        "mask-size 0.6s cubic-bezier(0.4, 0, 0.2, 1), -webkit-mask-size 0.6s cubic-bezier(0.4, 0, 0.2, 1)";

      const expandMask = () => {
        const mask = `radial-gradient(circle ${diagonal}px at ${fillX}px ${fillY}px, black ${diagonal}px, transparent ${diagonal}px)`;
        filled.style.webkitMaskImage = mask;
        filled.style.maskImage = mask;
      };

      // use a CSS transition on a custom property for the radius
      filled.style.setProperty("--mask-x", `${fillX}px`);
      filled.style.setProperty("--mask-y", `${fillY}px`);

      // animate radius via keyframe
      const startRadius = 90;
      const endRadius = diagonal;
      const duration = 700;
      const start = performance.now();

      function animateMask(now: number) {
        if (!filled) return;

        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 1.5);
        const radius = startRadius + (endRadius - startRadius) * ease;
        const mask = `radial-gradient(circle ${radius}px at ${fillX}px ${fillY}px, black ${radius}px, transparent ${radius}px)`;
        filled.style.webkitMaskImage = mask;
        filled.style.maskImage = mask;

        if (progress < 1) {
          requestAnimationFrame(animateMask);
        } else {
          // mask fully expanded — scale out + blur + fade both layers
          const exitDuration = "0.7s";
          const exitEase = "cubic-bezier(0.4, 0, 0.2, 1)";

          [filled, outline].forEach((el) => {
            if (!el) return;

            el.style.transition = `transform ${exitDuration} ${exitEase}, opacity ${exitDuration} ${exitEase}, filter ${exitDuration} ${exitEase}`;
            el.style.transform = "scale(1.15)";
            el.style.opacity = "0";
            el.style.filter = "blur(20px)";
          });

          setTimeout(() => setRevealed(true), 500);
        }
      }

      requestAnimationFrame(animateMask);
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);
    stage.addEventListener("click", onClick);

    function tick() {
      if (!stage) return;

      currentX = lerp(currentX, mouseX, 0.07);
      currentY = lerp(currentY, mouseY, 0.07);
      fillX = lerp(fillX, mouseX, 0.1);
      fillY = lerp(fillY, mouseY, 0.1);

      const cx = stage.offsetWidth / 2;
      const cy = stage.offsetHeight / 2;

      if (nOutlineRef.current && !isRevealing) {
        const dx = (currentX - cx) * 0.045;
        const dy = (currentY - cy) * 0.045;
        nOutlineRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }

      if (nFilledRef.current && !isRevealing) {
        const dx2 = (currentX - cx) * 0.025;
        const dy2 = (currentY - cy) * 0.025;
        nFilledRef.current.style.transform = `translate(${dx2}px, ${dy2}px)`;
      }

      if (inside && nFilledRef.current && !isRevealing) {
        const mask = `radial-gradient(circle 90px at ${fillX}px ${fillY}px, black 90px, transparent 90px)`;
        nFilledRef.current.style.webkitMaskImage = mask;
        nFilledRef.current.style.maskImage = mask;
      }

      raf = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      stage.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-background relative z-10 flex h-screen min-h-screen w-full flex-col items-start justify-start overflow-hidden p-12"
    >
      <header className="flex h-35 w-full items-center">
        {!revealed ? (
          <>
            <h1 className="relative inline-flex flex-col items-start justify-start gap-y-2">
              <TextBlur
                className="from-foreground font-header via-foreground relative z-0 -mt-4 -ml-4 inline-block bg-linear-to-b to-[#11111] bg-clip-text p-6 text-8xl font-bold text-transparent"
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
            <Magnetic strength={1} className="ml-auto">
              <span className="text-accent-blue">// ? Click to reveal...</span>
            </Magnetic>
          </>
        ) : (
          <h3 className="relative inline-flex flex-col items-start justify-start gap-y-2">
            <TextBlur
              className="from-accent-blue font-header via-accent-blue relative z-0 -mt-4 -ml-4 inline-block bg-linear-to-b to-[#11111] bg-clip-text p-6 text-7xl font-bold text-transparent"
              blurSteps={8}
            >
              Stackd
            </TextBlur>
            <span className="absolute top-1/2 left-0 mt-6 ml-2 block -translate-y-1/2 text-2xl font-bold">
              Poker Tracker
            </span>
          </h3>
        )}
      </header>

      <main className="flex h-full w-full grow items-center justify-center">
        {!revealed && (
          <div
            ref={stageRef}
            className="relative h-full min-h-full w-full min-w-full overflow-hidden"
          >
            <div
              ref={nFilledRef}
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
              style={{
                willChange: "transform, mask-image",
                WebkitMaskImage:
                  "radial-gradient(circle 0px at 50% 50%, black 0px, transparent 0px)",
                maskImage:
                  "radial-gradient(circle 0px at 50% 50%, black 0px, transparent 0px)",
              }}
            >
              <span
                className="text-accent-blue text-[800px] leading-none font-bold select-none"
                style={{ willChange: "transform" }}
              >
                01
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <span
                ref={nOutlineRef}
                className="text-[800px] leading-none font-bold text-transparent select-none"
                style={{
                  WebkitTextStroke: "3px #36184d",
                  willChange: "transform",
                }}
              >
                01
              </span>
            </div>
          </div>
        )}

        {revealed && (
          <div
            data-mouse="zoom"
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border"
          >
            <Image
              data-mouse="zoom"
              src="/grain-lg.jpg"
              alt="some alt"
              fill
              className="absolute h-full w-full object-cover"
            />
          </div>
        )}
      </main>

      <footer className="hidden w-full items-center justify-between"></footer>
    </div>
  );
};
