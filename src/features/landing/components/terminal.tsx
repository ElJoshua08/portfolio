"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TERMINAL_INITIALIZATION_LINES } from "@/features/landing/constants";
import { TerminalLine, TerminalType } from "@/features/landing/types";
import { generatePrompt } from "@/features/landing/utils";
import { cn } from "@/lib/utils";
import { createContext, useContext, useRef, useState } from "react";

type TerminalContextType = {
  terminal: TerminalType;
  inputRef: React.RefObject<HTMLInputElement | null>;
  addLine: (line: TerminalLine) => void;
  reset: () => void;
  focusInput: () => void;
};

const terminalContext = createContext<TerminalContextType>({
  terminal: { lines: undefined },
  inputRef: { current: null },
  addLine: () => {},
  reset: () => {},
  focusInput: () => {},
});

export const useTerminal = () => useContext(terminalContext);

// TODO: All this must be animated.

export const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [terminal, setTerminal] = useState<TerminalType>({
    lines: TERMINAL_INITIALIZATION_LINES,
  });

  const addLine = (line: TerminalLine) => {
    setTerminal((prev) => ({
      ...prev,
      lines: [...(prev.lines ?? []), line],
    }));
  };

  const reset = () => {
    setTerminal({ lines: undefined });
    inputRef.current ? (inputRef.current.value = "") : "";
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <terminalContext.Provider
      value={{ terminal, addLine, reset, inputRef, focusInput }}
    >
      <div className="flex h-full min-h-0 w-1/2 shrink-0 grow flex-col">
        <TerminalHeader />
        <TerminalBody />
      </div>
    </terminalContext.Provider>
  );
};

export const TerminalHeader = () => {
  const { reset } = useTerminal();

  return (
    <div
      id="terminal-header"
      className="bg-surface relative flex w-full items-center justify-between p-4"
    >
      <span
        id="terminal-header-title"
        className="text-accent-green text-lg uppercase"
      >
        Terminal
      </span>

      <div className="flex items-center gap-x-2">
        <span className="terminal-header-action size-3 cursor-pointer rounded-full bg-[#219A33]" />
        <span className="terminal-header-action size-3 cursor-pointer rounded-full bg-[#FEBC2E]" />
        <span
          onClick={reset}
          className="terminal-header-action cursor-pointer rounded-full bg-[#D32B22] not-first-of-type:size-3"
        />
      </div>

      <div
        id="terminal-header-bottom-border"
        className="bg-border absolute bottom-0 left-0 h-px w-full"
      />
    </div>
  );
};

export const TerminalBody = () => {
  const { terminal, focusInput } = useTerminal();
  return (
    <ScrollArea
      className="flex h-full min-h-0 w-full flex-col items-start justify-start gap-y-1 overflow-y-auto p-4"
      onClick={focusInput}
    >
      {terminal.lines &&
        terminal.lines.map((line, idx) => {
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
              className="terminal-line flex w-full items-center justify-start gap-x-2"
            >
              <span className="grow">
                {prompt &&
                  prompt.map((section, sectionIdx) => (
                    <span
                      key={sectionIdx}
                      className={cn(
                        section.className,
                        "terminal-line-prompt-section",
                      )}
                    >
                      {section.content}
                    </span>
                  ))}
                {body &&
                  body.map((section, sectionIdx) => (
                    <span
                      key={sectionIdx}
                      className={cn(
                        section.className,
                        "terminal-line-body-section",
                      )}
                    >
                      {section.content}
                    </span>
                  ))}
              </span>
              {misc &&
                misc.map((section, sectionIdx) => (
                  <span
                    key={sectionIdx}
                    className={cn(
                      section.className,
                      "terminal-line-misc-section",
                    )}
                  >
                    {section.content}
                  </span>
                ))}
            </div>
          );
        })}

      <TerminalPrompt />
    </ScrollArea>
  );
};

const TerminalPrompt = () => {
  const { inputRef, addLine } = useTerminal();
  const prompt = generatePrompt({});

  function registerCommand(command: string) {
    const newLine: TerminalLine = {
      prompt,
      body: {
        content: command,
        className: "terminal-line text-foreground",
      },
    };

    addLine(newLine);
    inputRef.current!.value = "";
  }

  // TODO: now we actually need a command system. (now idea how to implement it now.)

  return (
    <div id="terminal-prompt" className="flex w-full items-center">
      <span className="inline">
        {prompt.map((section, sectionIdx) => (
          <span key={sectionIdx} className={cn(section.className)}>
            {section.content}
          </span>
        ))}
      </span>

      <input
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") registerCommand(e.currentTarget.value);
        }}
        className="ml-[1ch] flex-1 outline-0"
      />
    </div>
  );
};
