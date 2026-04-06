/* eslint-disable react/jsx-no-comment-textnodes */

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ABOUT_ME_LINES } from "@/features/landing/constants";

export const TextEditor = () => {
  return (
    <div className="flex min-h-0 w-full flex-col items-start justify-start gap-y-3 overflow-y-hidden bg-red-500">
      <span className="text-muted-foreground top-comment">
        // A little bit of <span className="text-accent-green">myself</span>
      </span>
      <ScrollArea className="container-card bg-card flex w-4/5 grow flex-col items-start justify-start gap-y-1 overflow-y-auto rounded-xs py-4">
        <span className="text-muted-foreground mb-2 pl-4">about-me.txt</span>
        {ABOUT_ME_LINES.map((line, idx) => (
          <div
            key={idx}
            className="hover:bg-muted flex w-full items-start justify-start gap-x-4 px-4"
          >
            <span className="editor-number text-card-foreground/60 w-[2ch] text-right select-none">
              {idx + 1}
            </span>
            {line.type === "text" && (
              <span>
                {line.texts!.map((text, idx) => (
                  <span
                    key={idx}
                    className={`text-${text.color} editor-line mr-2 inline-block`}
                  >
                    {text.text}{" "}
                  </span>
                ))}
              </span>
            )}
          </div>
        ))}
      </ScrollArea>
      {/* <span className="text-muted-foreground bottom-comment">
        {"// This might have taken me a while :8"
          .split(" ")
          .map((word, idx) => (
            <span key={idx} className="hover:text-accent-blue cursor-default">
              {word}{" "}
            </span>
          ))}
      </span> */}
    </div>
  );
};
