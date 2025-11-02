import { ASCII_BANNER } from "@/src/contants";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-7 pt-14 lg:pt-7 flex flex-col sm:flex-row items-center gap-8 relative rounded-t-sm">
      {/* Left: ASCII Art "J" */}
      <div className="shrink-0 pr-4">
        <Link href="/">
          <pre className="text-primary text-2xl leading-none font-mono animate-fade-in hidden sm:block ">
            {ASCII_BANNER}
          </pre>
        </Link>
      </div>

      {/* Right: Heading and Subtitle */}
      <div className="h-24 w-0.5 bg-border hidden sm:block" />

      <div className="flex-1">
        <h1 className="text-5xl font-bold text-foreground font-mono text-center sm:text-left">
          JOSUÉ DÍAZ MARTÍNEZ
        </h1>
        <p className="text-muted-foreground text-xl mt-2 font-mono text-center sm:text-left">
          Front-End Developer
        </p>
      </div>
    </div>
  );
};
