import { TextBlur } from "@/components/ui/text-blur";

export const ProjectsShowcase = () => {
  return (
    <div className="bg-background z-10 flex min-h-screen w-full flex-col items-start justify-start p-12">
      <header className="flex w-full items-center justify-between">
        {/* Title */}
        <h1 className="relative inline-flex flex-col items-start justify-start gap-y-2">
          <TextBlur
            className="from-foreground font-header via-foreground relative z-0 -mt-4 -ml-4 inline-block cursor-default bg-linear-to-b to-[#11111] bg-clip-text p-6 text-8xl font-bold text-transparent"
            blurSteps={8}
          >
            Selected
          </TextBlur>
          <span className="text-accent-green font-header pointer-event-none peer z-50 -mt-18 ml-48 text-8xl font-bold select-none">
            Work
          </span>

          <span className="text-secondary-foreground absolute top-1/2 left-0 mt-8 ml-2 block -translate-y-1/2 font-bold">
            // 01 - Projects
          </span>
        </h1>

        <span className="text-accent-blue">// ? Hover to reveal...</span>
      </header>
      <main className="bg-surface h-full w-full grow">Main content</main>
      <footer className="flex w-full items-center justify-between">
        <h3 className="relative inline-flex flex-col items-start justify-start gap-y-2">
          <TextBlur
            className="from-accent-blue font-header via-accent-blue relative z-0 -mt-4 -ml-4 inline-block cursor-default bg-linear-to-b to-[#11111] bg-clip-text p-6 text-7xl font-bold text-transparent"
            blurSteps={8}
          >
            Stackd
          </TextBlur>

          <span className="absolute top-1/2 left-0 mt-6 ml-2 block -translate-y-1/2 text-2xl font-bold">
            Poker Tracker
          </span>
        </h3>
      </footer>
    </div>
  );
};
