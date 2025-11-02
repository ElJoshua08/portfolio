import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-7 pt-14 lg:pt-7 flex items-center gap-8 relative rounded-t-sm">
      {/* Left: ASCII Art "J" */}
      <div className="shrink-0 pr-4">
        <Link href="/">
          <pre className="text-primary text-2xl leading-none font-mono animate-fade-in  ">
            {`       ██╗
       ██║
       ██║
  ██   ██║
  ╚█████╔╝
   ╚════╝`}
          </pre>
        </Link>
      </div>

      {/* Right: Heading and Subtitle */}
      <div className="h-24 w-0.5 bg-border" />

      <div className="flex-1">
        <h1 className="text-5xl font-bold text-foreground font-mono">
          JOSUÉ DÍAZ MARTÍNEZ
        </h1>
        <p className="text-muted-foreground text-xl mt-2 font-mono">
          Front-End Developer
        </p>
      </div>
    </div>
  );
};
