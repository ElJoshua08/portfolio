export const Loader = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <pre className="text-primary text-2xl leading-none font-mono animate-pulse">
          {`     ██╗
     ██║
     ██║
██   ██║
╚█████╔╝
 ╚════╝`}
        </pre>

        <div className="w-64 h-1 bg-secondary border border-border overflow-hidden">
          <div className="h-full bg-primary animate-loading-bar" />
        </div>

        <div className="text-muted-foreground text-sm font-mono animate-pulse">
          Initializing portfolio...
        </div>
      </div>
    </div>
  );
};
