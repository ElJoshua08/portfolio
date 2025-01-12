'use client';

import { useEffect, useState } from 'react';
import TextTransition from 'react-text-transition';

interface TextSwapProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  duration: number;
}

export const TextSwap = ({ texts, duration, ...props }: TextSwapProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <span {...props}>
      <TextTransition>{texts[index]}</TextTransition>
    </span>
  );
};
