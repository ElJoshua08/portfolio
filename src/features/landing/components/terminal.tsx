export const Terminal = () => {
  return (
    <div className="h-full w-1/2 shrink-0 grow">
      <TerminalHeader />
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
  return <div></div>;
};
