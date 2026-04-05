"use client";

import { Hero } from "@/features/landing/components/hero";
import { Navbar } from "@/features/landing/components/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const exit = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: "+=450vh",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      exit
        .to("#hero-name", { y: -80, autoAlpha: 0, duration: 1 })
        .to("#hero-surname", { y: -60, autoAlpha: 0, duration: 1 }, "<0.4")
        .to(".top-comment", { y: -20, autoAlpha: 0, duration: 0.6 }, "<0.3")
        .to(
          ".editor-number",
          { y: -20, autoAlpha: 0, duration: 0.6, stagger: 0.03 },
          "<0.2",
        )
        .to(
          ".editor-line",
          { y: -20, autoAlpha: 0, duration: 0.6, stagger: 0.03 },
          "<",
        )
        .to(
          ".container-card",
          { y: -40, autoAlpha: 0, filter: "blur(12px)", duration: 1 },
          "<0.2",
        )
        .to(".bottom-comment", { y: -20, autoAlpha: 0, duration: 0.5 }, "<0.3")
        .to("#hero-scroll", { autoAlpha: 0, duration: 0.5 }, "<");
    },
    { scope: containerRef },
  );

  return (
    <>
      <div
        ref={containerRef}
        className="flex h-screen w-full flex-col items-start justify-start bg-black text-white"
      >
        <Navbar />
        <Hero />
      </div>
      <div className="flex min-h-screen w-full flex-col items-start justify-start bg-gray-950 text-white">
        Projects
      </div>
    </>
  );
}
