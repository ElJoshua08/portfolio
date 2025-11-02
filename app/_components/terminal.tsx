"use client";

import React, { useEffect, useRef, useState } from "react";
import { useCommands } from "@/app/_components/commands";
import { TypewriterText, TypewriterWelcome } from "@/components/typewriter";

type CommandOutput = {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
};

export const Terminal = () => {
  const COMMANDS = useCommands();

  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mostrar mensaje de bienvenida
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

  // Auto-scroll al fondo
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Manejar envío de comando
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return; // Ignora comandos vacíos o con solo espacios

    // Evitar duplicados consecutivos
    const lastCommand = history[history.length - 1]?.command;
    if (lastCommand === trimmedInput) {
      setInput("");
      setHistoryIndex(null);
      return;
    }

    const [cmd, ...args] = trimmedInput.split(" ");
    const commandKey = cmd.toLowerCase();
    const command = COMMANDS[commandKey as keyof typeof COMMANDS];

    if (commandKey === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(null);
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
    setHistoryIndex(null);
  };

  // Navegación con ArrowUp / ArrowDown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;

      setHistoryIndex((prev) => {
        const newIndex =
          prev === null ? history.length - 1 : Math.max(0, prev - 1);
        setInput(history[newIndex]?.command || "");
        return newIndex;
      });
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;

      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const newIndex = prev + 1 >= history.length ? null : prev + 1;

        setInput(newIndex === null ? "" : history[newIndex]?.command || "");
        return newIndex;
      });
    }
  };

  // Reset de índice si el usuario empieza a escribir manualmente
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (historyIndex !== null) setHistoryIndex(null);
  };

  return (
    <div className="h-full flex flex-col">
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
                onChange={handleChange}
                onKeyDown={handleKeyDown}
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
