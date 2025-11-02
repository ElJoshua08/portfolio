"use client";

import React from "react";

import { useCommands } from "@/app/_components/commands";
import { TypewriterText, TypewriterWelcome } from "@/components/typewriter";
import { useEffect, useRef, useState } from "react";

type CommandOutput = {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
};

export const Terminal = () => {
  const COMMANDS = useCommands();

  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setHistory([
        {
          command: "",
          output: (
            <div className="space-y-2">
              <div className="text-muted-foreground">
                Welcome! Type{" "}
                <span className="text-accent">&apos;help&apos;</span> to see
                available commands.
              </div>
              <div className="text-primary text-lg font-bold">
                <TypewriterWelcome
                  text="> JOSHUA PORTFOLIO v1.0.0"
                  delay={30}
                />
              </div>
            </div>
          ),
          timestamp: new Date(),
        },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    const [cmd, ...args] = trimmedInput.split(" ");
    const commandKey = cmd.toLowerCase();
    const command = COMMANDS[commandKey as keyof typeof COMMANDS];

    if (commandKey === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = command ? (
      command.execute(args.join(" "))
    ) : (
      <div className="text-destructive">
        <TypewriterText
          text={`Command not found: ${trimmedInput}. Type 'help' for available commands.`}
          delay={20}
        />
      </div>
    );

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedInput,
        output,
        timestamp: new Date(),
      },
    ]);

    setInput("");
  };

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Content */}
      <div
        className="p-4 flex-1 overflow-y-auto scroll-smooth"
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="space-y-2"
            >
              {item.command && (
                <div className="flex gap-2">
                  <span className="text-primary">joshua@portfolio$</span>
                  <span className="text-foreground">{item.command}</span>
                </div>
              )}
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Input Line */}
          {showWelcome && (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2"
            >
              <span className="text-primary">joshua@portfolio$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground caret-muted-foreground"
                autoFocus
                spellCheck={false}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
