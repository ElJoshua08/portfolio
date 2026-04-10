"use client";

import { Navbar } from "@/features/landing/components/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(SplitText);

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const enter = gsap.timeline({
        defaults: { ease: "back.out" },
        delay: 0.4,
      });

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
      const logo = new SplitText("#logo", { type: "words" });
      gsap.set("#logo", { visibility: "visible" });
      enter.from(
        logo.words,
        {
          autoAlpha: 0,
          yPercent: 100,
          duration: 0.22,
          stagger: 0.15,
        },
        ">0.3",
      );

      enter.from(
        ".link-item",
        {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.22,
          stagger: 0.15,
          ease: "back.out(2.5)",
        },
        ">",
      );

      enter.from(
        "#hero-name",
        { y: 60, duration: 0.6, ease: "power3.out" },
        "<-0.60",
      );

      enter.to(
        "#hero-name-wrapper",
        {
          autoAlpha: 0,
        },
        "<-0.1",
      );

      const nameSplit = new SplitText("#hero-surname", { type: "chars" });
      gsap.set("#hero-surname", { visibility: "visible" });
      enter.from(
        nameSplit.chars,
        {
          yPercent: 100,
          autoAlpha: 0,
          filter: "blur(12px)",
          ease: "back.out(2.5)",
          duration: 0.6,
          stagger: 0.05,
        },
        "<0.15",
      );

      const commentTop = new SplitText("#top-comment", { type: "words" });
      gsap.set("#top-comment", { visibility: "visible" });
      enter.from(
        commentTop.words,
        { autoAlpha: 0, y: 60, duration: 0.35, stagger: 0.06 },
        "<0.35",
      );

      enter.from(
        ".container-card",
        { y: 60, filter: "blur(12px)", autoAlpha: 0, duration: 0.6 },
        "<0.1",
      );

      enter.from(
        ".editor-number",
        {
          y: -20,
          autoAlpha: 0,
          filter: "blur(12px)",
          duration: 0.25,
          stagger: 0.03,
        },
        "<",
      );

      enter.from(
        ".editor-line",
        {
          y: 35,
          autoAlpha: 0,
          filter: "blur(6px)",
          duration: 0.18,
          stagger: 0.015,
        },
        "<0.1",
      );

      const bottomComment = new SplitText("#bottom-comment", { type: "words" });
      gsap.set("#bottom-comment", { visibility: "visible" });
      enter.from(
        bottomComment.words,
        { autoAlpha: 0, y: -20, duration: 0.65, stagger: 0.09 },
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
        {
          autoAlpha: 0,
          y: 15,
          duration: 0.15,
          stagger: 0.03,
          ease: "back.out",
        },
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
      enter.from(terminalPrompt.chars, {
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.1,
        ease: "none",
      });
    },
    {
      dependencies: [],
    },
  );

  return (
    <div ref={rootRef} className="h-screen min-h-0 w-full">
      <Navbar />
      {children}
    </div>
  );
}
