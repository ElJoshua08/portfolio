"use client";

import { TERMINAL_INITIALIZATION_LINES } from "@/features/landing/constants";
import { TerminalLine } from "@/features/landing/types";
import { generatePrompt } from "@/features/landing/utils";
import { cn } from "@/lib/utils";
import { useState } from "react";

// TODO: we should really use a provider an abstract this component, (UI goes inside page itself, and then we can reuse it)

export const Terminal = () => {
  return (
    <div className="flex h-full min-h-0 w-1/2 shrink-0 grow flex-col">
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
};

export const TerminalHeader = () => {
  return (
    <div className="bg-surface flex w-full items-center justify-between border-b p-6">
      <span className="text-accent-green text-lg uppercase">
        Super crazy terminal
      </span>

      <div className="flex items-center gap-x-2">
        <span className="size-3 cursor-pointer rounded-full bg-[#219A33]" />
        <span className="size-3 cursor-pointer rounded-full bg-[#FEBC2E]" />
        <span className="size-3 cursor-pointer rounded-full bg-[#D32B22]" />
      </div>
    </div>
  );
};

export const TerminalBody = () => {
  const [lines, setLines] = useState<TerminalLine[]>(
    TERMINAL_INITIALIZATION_LINES,
  );

  return (
    <div className="flex w-full grow flex-col items-start justify-start gap-y-1 overflow-y-auto p-4">
      {lines.map((line, idx) => {
        const prompt = Array.isArray(line.prompt)
          ? line.prompt
          : line.prompt && [line.prompt];
        const body = Array.isArray(line.body)
          ? line.body
          : line.body && [line.body];
        const misc = Array.isArray(line.misc)
          ? line.misc
          : line.misc && [line.misc];

        return (
          <div
            key={idx}
            className="flex w-full items-center justify-start gap-x-2"
          >
            <span className="grow">
              {prompt &&
                prompt.map((section, sectionIdx) => (
                  <span
                    key={sectionIdx}
                    className={cn(section.className, "mr-[1ch]")}
                  >
                    {section.content}
                  </span>
                ))}
              {body &&
                body.map((section, sectionIdx) => (
                  <span
                    key={sectionIdx}
                    className={cn(section.className, "mr-[1ch]")}
                  >
                    {section.content}
                  </span>
                ))}
            </span>
            {misc &&
              misc.map((section, sectionIdx) => (
                <span key={sectionIdx} className={cn(section.className)}>
                  {section.content}
                </span>
              ))}
          </div>
        );
      })}

      <TerminalPrompt />
    </div>
  );
};

const TerminalPrompt = () => {
  const prompt = generatePrompt({});

  return (
    <span>
      {prompt.map((section, sectionIdx) => (
        <span key={sectionIdx} className={cn(section.className)}>
          {section.content}
        </span>
      ))}
    </span>
  );
};
