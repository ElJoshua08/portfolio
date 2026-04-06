"use client";

import { Line } from "@/features/landing/types";
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
  const [lines, setLines] = useState<Line[]>([]);

  return (
    <div className="flex grow w-full items-start justify-start gap-y-1 overflow-y-auto bg-red-500 p-2"></div>
  );
};
