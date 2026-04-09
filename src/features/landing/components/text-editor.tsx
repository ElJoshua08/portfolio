/* eslint-disable react/jsx-no-comment-textnodes */

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ABOUT_ME } from "@/features/landing/constants";
import { cn } from "@/lib/utils";

export const TextEditor = () => {
  return (
    <div className="flex h-full min-h-0 w-full flex-col items-start justify-start gap-y-3 overflow-y-hidden">
      <span id="top-comment" className="text-muted-foreground invisible">
        // A little bit of <span className="text-accent-green">myself</span>
      </span>
      <ScrollArea className="container-card bg-card invisible flex min-h-0 w-4/5 max-w-2xl grow flex-col items-start justify-start gap-y-2 overflow-y-auto rounded-xs py-4">
        <span className="text-muted-foreground mb-3 inline-block pl-4">
          about-me.txt
        </span>
        {ABOUT_ME.map((line, idx) => (
          <div
            key={idx}
            className="hover:bg-muted flex w-full items-start justify-start gap-x-4 px-4"
          >
            <span className="editor-number text-card-foreground/60 w-[2ch] text-right select-none">
              {idx + 1}
            </span>
            <span className="text-nowrap">
              {line.map((section, sectionIdx) => (
                <span
                  key={sectionIdx}
                  className={cn(
                    section.className,
                    "editor-line mr-[1ch] inline-block",
                  )}
                >
                  {section.content}{" "}
                </span>
              ))}
            </span>
          </div>
        ))}
      </ScrollArea>
      <span id="bottom-comment" className="text-muted-foreground invisible">
        {"// This might have taken me a while :8"
          .split(" ")
          .map((word, idx) => (
            <span key={idx} className="hover:text-accent-blue cursor-default">
              {word}{" "}
            </span>
          ))}
      </span>
    </div>
  );
};
