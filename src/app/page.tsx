"use client";

import { Hero } from "@/features/landing/components/hero";
import { Navbar } from "@/features/landing/components/navbar";
import { ProjectsShowcase } from "@/features/landing/components/projects-showcase";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { SlowMo } from "gsap/EasePack";
import { useRef } from "react";

gsap.registerPlugin(SplitText, SlowMo);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // TODO: Adjust timings and easings to make a good animation.
      const enter = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      const logoChars = new SplitText("#logo", {
        type: "words",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
      });

      enter.fromTo(
        logoChars.words,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.22,
          delay: 0.22,
          stagger: 0.1,
          ease: "expo.out",
        },
      );

      enter.fromTo(
        ".link-item",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "expo.out",
        },
        "<0.3",
      );

      enter.fromTo(
        "#bottom-border",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 0.6,
          ease: "slow(0.1,0.4,false)",
        },
      );

      enter.fromTo("#hero-name", { y: 60 }, { y: 0, duration: 1.2 }).fromTo(
        "#hero-name-wrapper",
        {
          opacity: 1,
          backdropFilter: "blur(16px)",
        },
        {
          backdropFilter: "blur(0px)",
          opacity: 0,
          duration: 1.4,
        },
        "<0.1",
      );

      const surnameChars = new SplitText("#hero-surname", {
        type: "chars",
      });

      enter.fromTo(
        surnameChars.chars,
        { y: 40, autoAlpha: 0, filter: "blur(12px)" },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          filter: "blur(0px)",
          stagger: 0.05,
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

      enter.fromTo(
        "#right-border",
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 1.2,
          ease: "slow(0.1,0.4,false)",
        },
      );
    },
    { scope: containerRef },
  );

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
          invalidateOnRefresh: true,
        },
      });

      exit
        .to(
          "#hero-name .text-blur",
          { y: -60, backdropFilter: "blur(0px)", duration: 0.4, stagger: 0.03 },
          "<",
        )
        .to("#hero-name-wrapper", {
          opacity: 1,
          backdropFilter: "blur(16px)",
        })
        .to(
          "#hero-complete-name",
          { y: -60, autoAlpha: 0, duration: 1 },
          "<0.4",
        )
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
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="flex h-screen w-full flex-col items-start justify-start"
      >
        <Navbar />
        <Hero />
      </div>
      <ProjectsShowcase />
    </div>
  );
}
