import { TypingTextSwap } from './ui/typing-text-swap';

export const Hero = () => {
  const texts = [
    "I'm your Full Stack Developer.",
    "I'm your Web Developer.",
    "I'm your Designer.",
    "I'm your Creative Thinker.",
    "I'm your Problem Solver.",
    "I'm your Agile Partner.",
  ];

  return (
    <header className="w-full flex flex-row items-center justify-center gap-x-16 py-4 rounded-md bg-transparent">
      <div className="rounded-full overflow-hidden size-56 object-contain shrink-0 bg-gray-800 shadow-lg shadow-yellow-500/70 flex items-center justify-center">
        <h1 className="text-2xl tracking-widest">FOTO</h1>
        {/* <Image
          src="/hero.jpg"
          alt="hero"
          width={300}
          height={300}
          className="object-cover"
        /> */}
      </div>
      <h1
        className="text-6xl text-foreground leading-tight tracking-wide inline-flex flex-col items-start"
        style={{
          width:
            texts.reduce(
              (acc, text) => (text.length > acc ? text.length : acc),
              0
            ) *
              0.8 +
            'ch',
        }}
      >
        <span>
          Hi there, <span className="text-primary">I&apos;m Joshua</span>, and{' '}
          <br />
        </span>
        <span>
          <TypingTextSwap
            texts={texts}
            typingSpeed={350}
            randomness={0.08}
            deletingSpeed={100}
            pauseDuration={3000}
            showCursor
          />
        </span>
      </h1>
    </header>
  );
};
