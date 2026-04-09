"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { COMMANDS } from "@/features/landing/commands";
import { TERMINAL_INITIALIZATION_LINES } from "@/features/landing/constants";
import {
  TerminalLine,
  TerminalSection,
  TerminalType,
} from "@/features/landing/types";
import { generatePrompt } from "@/features/landing/utils";
import Link from "next/link";
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
      className="bg-background relative flex w-full items-center justify-between p-4"
    >
      <span
        id="terminal-header-title"
        className="text-accent-green invisible text-lg uppercase"
      >
        Terminal
      </span>

      <div className="flex items-center gap-x-2">
        <span
          data-mouse="morph"
          className="terminal-header-action invisible size-3 rounded-full bg-[#219A33]"
        />
        <span
          data-mouse="morph"
          className="terminal-header-action invisible size-3 rounded-full bg-[#FEBC2E]"
        />
        <span
          data-mouse="morph"
          onClick={reset}
          className="terminal-header-action invisible rounded-full bg-[#D32B22] not-first-of-type:size-3"
        />
      </div>

      <div
        id="terminal-header-bottom-border"
        className="bg-border absolute bottom-0 left-0 h-px w-0"
      />
    </div>
  );
};

export const TerminalBody = () => {
  const { terminal, focusInput } = useTerminal();
  return (
    <ScrollArea
      id="terminal-body"
      data-mouse="clickable"
      className="invisible flex h-full min-h-0 w-full flex-col items-start justify-start gap-y-1 overflow-y-auto p-4"
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
                    <LineSection section={section} key={sectionIdx} />
                  ))}
                {body &&
                  body.map((section, sectionIdx) => (
                    <LineSection section={section} key={sectionIdx} />
                  ))}
              </span>
              {misc &&
                misc.map((section, sectionIdx) => (
                  <LineSection section={section} key={sectionIdx} />
                ))}
            </div>
          );
        })}

      <TerminalPrompt />
    </ScrollArea>
  );
};

const TerminalPrompt = () => {
  const { inputRef, addLine, reset } = useTerminal();
  const prompt = generatePrompt({});

  function registerCommand(input: string) {
    const [name, ...args] = input.trim().split(" ");

    const newLine: TerminalLine = {
      prompt,
      body: { content: input, className: "text-foreground" },
    };
    addLine(newLine);

    const command = COMMANDS[name];
    if (command) {
      command.handler({ addLine, reset, args });
    } else if (name) {
      addLine({
        body: {
          content: `command not found: ${name} · type 'help' to see available commands`,
          className: "text-destructive",
        },
      });
    }

    inputRef.current!.value = "";
  }

  // TODO: now we actually need a command system. (now idea how to implement it now.)

  return (
    <div id="terminal-prompt" className="invisible flex w-full items-center">
      <span className="inline">
        {prompt.map((section, sectionIdx) => (
          <LineSection key={sectionIdx} section={section} />
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

const LineSection = ({ section }: { section: TerminalSection }) => {
  if (section.href) {
    return (
      <Link
        href={section.href}
        className={section.className as string | undefined}
      >
        {section.content}
      </Link>
    );
  }

  return (
    <span className={section.className as string | undefined}>
      {section.content}
    </span>
  );
};
