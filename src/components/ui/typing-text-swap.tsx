'use client';

import { useEffect, useState } from 'react';

interface TypingTextSwapProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  duration: number;
  delay?: number;
}

export const TypingTextSwap = ({
  texts,
  duration,
  delay = 1000,
  ...props
}: TypingTextSwapProps) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);

      setTimeout(() => {
        setCurrentText(texts[index]);
      }, delay);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration, delay, index]);

  return <span {...props}>{currentText}</span>;
};
