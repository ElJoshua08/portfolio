/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { TextBlur } from "@/components/ui/text-blur";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText);

export const ProjectShowcase = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const nOutlineRef = useRef<HTMLSpanElement>(null);
  const nFilledRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useGSAP(
    () => {
      if (!revealed) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        "#revealed-container",
        { autoAlpha: 0, scale: 1.04, filter: "blur(12px)" },
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1 },
      );

      tl.fromTo(
        "#revealed-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "<0.2",
      );

      tl.fromTo(
        "#project-name",
        { yPercent: 60, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.7 },
        "<0.2",
      );

      tl.fromTo(
        ".project-tag",
        { x: 16, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
        "<0.3",
      );

      tl.fromTo(
        "#project-sub",
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
        "<0.3",
      );

      const descSplit = new SplitText("#project-desc", {
        type: "words",
        mask: "lines",
      });

      tl.fromTo(
        descSplit.words,
        { y: 16, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.015 },
        "<0.15",
      );

      tl.fromTo(
        ".stack-line",
        { x: -12, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.4, stagger: 0.07 },
        "<0.2",
      );

      tl.fromTo(
        ".project-link",
        { y: 10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.08 },
        "<0.2",
      );
    },
    { dependencies: [revealed] },
  );

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

      const diagonal = Math.sqrt(
        stage.offsetWidth ** 2 + stage.offsetHeight ** 2,
      );
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
          [filled, outline].forEach((el) => {
            if (!el) return;
            el.style.transition =
              "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.7s cubic-bezier(0.4,0,0.2,1)";
            el.style.transform = "scale(1.15)";
            el.style.opacity = "0";
            el.style.filter = "blur(20px)";
          });

          gsap.to("#showcase-header-out", {
            scaleY: 0,
            duration: 0.4,
            ease: "power3.in",
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
        nOutlineRef.current.style.transform = `translate(${(currentX - cx) * 0.045}px, ${(currentY - cy) * 0.045}px)`;
      }

      if (nFilledRef.current && !isRevealing) {
        nFilledRef.current.style.transform = `translate(${(currentX - cx) * 0.025}px, ${(currentY - cy) * 0.025}px)`;
      }

      if (inside && nFilledRef.current && !isRevealing) {
        const mask = `radial-gradient(
                        circle 200px at ${fillX}px ${fillY}px,
                        #00000088 80px,
                        #00000088 100px,
                        #00000044 100px,
                        #00000044 130px,
                        #00000022 130px,
                        #00000022 160px,
                        transparent 160px,
                        transparent 200px
                      )`;
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
  }, [revealed]);

  return (
    <div
      className={cn(
        "project-showcase bg-background relative z-10 flex h-screen min-h-screen w-full shrink-0 flex-col items-start justify-start overflow-hidden",
        !revealed && "p-12",
      )}
    >
      <header
        className={cn("flex h-35 w-full items-center", revealed && "hidden")}
      >
        {!revealed && (
          <div id="showcase-header-out" className="flex w-full items-center">
            <h1 className="relative inline-flex flex-col items-start justify-start gap-y-2">
              <TextBlur
                className="from-foreground font-header via-foreground relative z-0 -mt-4 -ml-4 inline-block bg-linear-to-b to-[#11111] bg-clip-text p-6 text-8xl font-bold text-transparent"
                blurSteps={8}
              >
                Selected
              </TextBlur>
              <span className="text-accent-green font-header z-10 -mt-18 ml-48 text-8xl font-bold select-none">
                Work
              </span>
              <span className="text-secondary-foreground absolute top-1/2 left-0 mt-8 ml-2 block -translate-y-1/2 font-bold">
                // 01 - Projects
              </span>
            </h1>
            <span className="text-accent-blue ml-auto">
              // ? Click to reveal...
            </span>
          </div>
        )}
      </header>

      <main className="flex h-full w-full grow items-center justify-center">
        {!revealed ? (
          <div
            ref={stageRef}
            className="relative h-full w-full overflow-hidden"
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
                className="text-accent-blue text-[800px] leading-none font-thin select-none"
                style={{ willChange: "transform" }}
              >
                01
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <span
                ref={nOutlineRef}
                className="text-[800px] leading-none font-thin text-transparent select-none"
                style={{
                  WebkitTextStroke: "3px #36184d",
                  willChange: "transform",
                }}
              >
                01
              </span>
            </div>
          </div>
        ) : (
          <div
            id="revealed-container"
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src="/landing3.webp"
              alt="Stackd project"
              fill
              className="object-cover object-top"
            />

            <div
              id="revealed-overlay"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            />

            <button
              onClick={() => setRevealed(false)}
              className="absolute top-4 left-4 rounded-md bg-black px-4 py-2 text-white"
            >
              Close that shit
            </button>

            <div className="absolute right-8 bottom-8 left-8 flex items-end justify-between">
              <div className="flex flex-col gap-y-3">
                <h1
                  id="project-name"
                  className="font-header from-accent-blue via-accent-blue relative z-20 inline-block bg-linear-to-b to-[#111111] bg-clip-text text-8xl font-bold text-transparent"
                >
                  Stackd
                </h1>
                <span className="font-header text-foreground z-30 -mt-10 text-3xl font-bold">
                  Poker Tracker
                </span>
                <p
                  id="project-desc"
                  className="text-foreground/75 max-w-sm text-sm leading-relaxed tracking-wide"
                >
                  A real-time multiplayer poker tracker built to manage
                  sessions, track stats, and visualize your game over time.
                </p>
                <div className="mt-2 flex gap-x-3">
                  <a
                    href="#"
                    className="project-link rounded border border-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-[#333]"
                  >
                    [ github ]
                  </a>
                  <a
                    href="#"
                    className="project-link rounded border border-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-[#333]"
                  >
                    [ live site ]
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-end gap-y-2">
                <div className="stack-line font-mono text-xs text-[#333]">
                  <span>&gt; framework: </span>
                  <span className="text-accent-green">Next.JS</span>
                </div>
                <div className="stack-line font-mono text-xs text-[#333]">
                  <span>&gt; tools: </span>
                  <span className="text-accent-blue">GSAP, Tailwind</span>
                </div>
                <div className="stack-line font-mono text-xs text-[#333]">
                  <span>&gt; lang: </span>
                  <span className="text-accent-green">TypeScript</span>
                </div>
                <div className="stack-line font-mono text-xs text-[#333]">
                  <span>&gt; date: </span>
                  <span className="text-[#555]">Feb. 2026</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
