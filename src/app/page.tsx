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

  // TODO: animations starts just a little bit after page is loaded, so all the widths etc should be already setted
  // TODO: that way although the page loads before the animation starts nothing is visible, then we just need to change fromTo() -> to()

  // ? 242 LINES BEFORE CHANGE
  useGSAP(() => {
    const enter = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });

    enter.delay(1);
    enter.to(
      "#bottom-border",
      {
        width: `100%`,
        duration: 1.3,
        ease: "slow(0.1,0.7,false)",
      },
      "<0.35",
    );

    enter.to(
      "#right-border",
      {
        height: `100%`,
        duration: 0.8,
        ease: "slow(0.4,0.5,false)",
      },
      "<0.66",
    );

    enter.to(
      "#terminal-header-bottom-border",
      {
        width: `100%`,
        duration: 0.85,
        ease: "slow(0.1,0.6,false)",
      },
      "<",
    );

    // Navbar
    const logoChars = new SplitText("#logo", { type: "words" });
    gsap.set("#logo", { visibility: "visible" });
    gsap.set(logoChars.words, { autoAlpha: 0, yPercent: 100 });
    enter.to(
      logoChars.words,
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.22,
        stagger: 0.15,
        ease: "back.out",
      },
      ">0.3",
    );

    gsap.set(".link-item", { yPercent: 100 });
    enter.to(
      ".link-item",
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.22,
        stagger: 0.15,
        ease: "back.out(2.5)",
      },
      ">",
    );

    enter.fromTo(
      "#hero-name",
      { y: 60 },
      { y: 0, ease: "power3.out", duration: 0.6 },
      "<-0.80",
    );

    enter.fromTo(
      "#hero-name-wrapper",
      {
        opacity: 1,
        backdropFilter: "blur(16px)",
      },
      {
        backdropFilter: "blur(0px)",
        opacity: 0,
        duration: 0.55,
      },
      "<",
    );

    let nameSplit = new SplitText("#hero-surname", { type: "chars" });
    gsap.set("#hero-surname", { visibility: "visible" });
    enter.fromTo(
      nameSplit.chars,
      { y: 40, autoAlpha: 0, filter: "blur(12px)" },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "back.out(2.5)",
        filter: "blur(0px)",
        stagger: 0.05,
      },
      "<0.15",
    );

    const commentTop = new SplitText("#top-comment", {
      type: "words",
      autoSplit: true,
    });
    gsap.set("#top-comment", { visibility: "visible" });
    gsap.set(commentTop.words, { autoAlpha: 0, y: 35 });
    enter.to(
      commentTop.words,
      { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "back.out" },
      "<0.35",
    );

    enter.fromTo(
      ".container-card",
      { y: -40, filter: "blur(12px)" },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "back.out",
      },
      "<0.1",
    );

    enter.fromTo(
      ".editor-number",
      { y: -20, autoAlpha: 0, filter: "blur(12px)" },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.25,
        stagger: 0.03,
        filter: "blur(0px)",
      },
      "<",
    );

    enter.fromTo(
      ".editor-line",
      { y: 35, autoAlpha: 0, filter: "blur(6px)" },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.18,
        stagger: 0.015,
        filter: "blur(0px)",
        ease: "back.out",
      },
      "<0.1",
    );

    const bottomComment = new SplitText("#bottom-comment", { type: "words" });
    gsap.set("#bottom-comment", { visibility: "visible" });
    enter.fromTo(
      bottomComment.words,
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.09 },
      ">0.3",
    );

    // * Terminal
    gsap.set("#terminal-body", { visibility: "visible" });

    enter.to(
      "#terminal-header",
      {
        backgroundColor: "var(--surface)",
        duration: 0.3,
      },
      "<-1.3",
    );

    const terminalTitle = new SplitText("#terminal-header-title", {
      type: "chars",
    });
    gsap.set("#terminal-header-title", { visibility: "visible" });
    enter.from(
      terminalTitle.chars,
      { autoAlpha: 0, y: 15, duration: 0.15, stagger: 0.03, ease: "back.out" },
      "<0.3",
    );

    enter.from(
      ".terminal-header-action",
      {
        y: 30,
        autoAlpha: 0,
        ease: "back.out",
        duration: 0.3,
        stagger: 0.05,
      },
      "<0.55",
    );

    enter.from(
      ".terminal-line",
      {
        y: 30,
        autoAlpha: 0,
        ease: "back.in",
        duration: 0.35,
        stagger: 0.15,
      },
      "<0.1",
    );

    const terminalPrompt = new SplitText("#terminal-prompt", {
      type: "chars",
    });
    gsap.set("#terminal-prompt", { visibility: "visible" });
    enter.fromTo(
      terminalPrompt.chars,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.06,
        duration: 0.1,
        ease: "none",
      },
    );
  });

  // useGSAP(
  //   () => {
  //     const exit = gsap.timeline({
  //       defaults: { ease: "none" },
  //       scrollTrigger: {
  //         trigger: containerRef.current!,
  //         start: "top top",
  //         end: "+=350vh",
  //         scrub: true,
  //         pin: true,
  //         invalidateOnRefresh: true,
  //       },
  //     });

  //     exit
  //       .to(
  //         "#hero-name .text-blur",
  //         { y: -60, backdropFilter: "blur(0px)", duration: 0.4, stagger: 0.03 },
  //         "<",
  //       )
  //       .to("#hero-name-wrapper", {
  //         opacity: 1,
  //         backdropFilter: "blur(16px)",
  //       })
  //       .to(
  //         "#hero-surname",
  //         {
  //           autoAlpha: 0,
  //           y: -60,
  //           duration: 0.4,
  //         },
  //         "<-0.2",
  //       )
  //       .to(".top-comment", { y: -20, autoAlpha: 0, duration: 0.3 }, ">-0.1")
  //       .to(
  //         ".editor-number",
  //         { y: -20, autoAlpha: 0, duration: 0.3, stagger: 0.03 },
  //         "<",
  //       )
  //       .to(
  //         ".editor-line",
  //         { y: -20, autoAlpha: 0, duration: 0.3, stagger: 0.06 },
  //         "<0.15",
  //       )
  //       .to(
  //         ".container-card",
  //         { y: -40, autoAlpha: 0, filter: "blur(12px)", duration: 1 },
  //         "<0.4",
  //       )
  //       .to(".bottom-comment", { y: -20, autoAlpha: 0, duration: 0.5 }, "<")
  //       .to("#right-border", { height: 0, duration: 0.5 }, "<-0.3")
  //       .to(
  //         "#terminal-header",
  //         {
  //           autoAlpha: 0,
  //           duration: 0.3,
  //         },
  //         ">",
  //       )
  //       .to(
  //         ".terminal-line",
  //         {
  //           filter: "blur(4px)",
  //           y: -60,
  //           opacity: 0,
  //           stagger: 0.06,
  //           duration: 0.15,
  //         },
  //         "<0",
  //       )
  //       .to(
  //         "#terminal-prompt",
  //         {
  //           filter: "blur(4px)",
  //           y: -60,
  //           opacity: 0,
  //           stagger: 0.06,
  //         },
  //         "<0",
  //       );
  //   },
  //   { scope: containerRef },
  // );

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
