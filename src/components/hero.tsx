import Image from 'next/image';
import { Card } from './ui/card';
import { TextSwap } from './ui/text-swap';

export const Hero = () => {
  const texts = [
    "I'm your Web Developer",
    "I'm your Designer",
    "I'm your Full Stack Developer",
    "I'm your Creative Thinker",
    "I'm your Problem Solver",
    "I'm your Agile Partner",
  ];

  return (
    <Card className="w-full flex flex-row items-center justify-start gap-x-16 backdrop-blur-xl border shadow-sm py-4 px-16 rounded-md">
      <div className="rounded-full overflow-hidden size-64 object-contain">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      <h1 className="text-7xl text-foreground leading-tight">
        Hi there, <span className="text-primary">I&apos;m Joshua</span>, and{' '}
        <TextSwap
          texts={texts}
          duration={3000}
        />
      </h1>
    </Card>
  );
};
