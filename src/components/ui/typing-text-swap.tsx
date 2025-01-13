'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TypingTextSwapProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  typingSpeed?: number; // Speed of typing a single character (ms)
  deletingSpeed?: number; // Speed of deleting a single character (ms)
  pauseDuration?: number; // Pause before deleting or typing new text (ms)
  showCursor?: boolean; // Show blinking cursor
  randomness?: number; // Randomness factor for speed (0-1)
}

export const TypingTextSwap = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  showCursor = false,
  randomness = 0.1,
  ...props
}: TypingTextSwapProps) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0); // Index of the current text
  const [textIndex, setTextIndex] = useState(0); // Index of the current character
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting
  const [isPaused, setIsPaused] = useState(false); // Pause between actions

  useEffect(() => {
    // Generate a random speed based on a base speed and randomness factor
    const getRandomSpeed = (baseSpeed: number) => {
      const variation = baseSpeed * randomness;
      return baseSpeed + Math.random() * variation - variation / 2; // Randomly vary speed ± variation
    };

    if (isPaused) return;

    const currentString = texts[index];
    const delay = isDeleting
      ? getRandomSpeed(deletingSpeed)
      : getRandomSpeed(typingSpeed);

    if (!isDeleting && textIndex < currentString.length) {
      // Typing mode
      setTimeout(() => {
        setCurrentText(currentString.slice(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);
      }, delay);
    } else if (isDeleting && textIndex > 0) {
      // Deleting mode
      setTimeout(() => {
        setCurrentText(currentString.slice(0, textIndex - 1));
        setTextIndex((prev) => prev - 1);
      }, delay);
    } else if (textIndex === currentString.length && !isDeleting) {
      // Pause after typing
      setIsPaused(true);
      setTimeout(() => {
        setIsDeleting(true);
        setIsPaused(false);
      }, pauseDuration);
    } else if (textIndex === 0 && isDeleting) {
      // Move to the next text
      setIsPaused(true);
      setTimeout(() => {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsPaused(false);
      }, pauseDuration);
    }
  }, [
    texts,
    index,
    textIndex,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    isPaused,
    randomness,
  ]);

  return (
    <span {...props}>
      {currentText}{' '}
      {showCursor && (
        <Cursor
          width={20}
          height={5}
        />
      )}
    </span>
  );
};

export interface CursorProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  width: number;
  height: number;
}

export const Cursor = ({
  color = '#fff',
  width,
  height,
  ...props
}: CursorProps) => {
  return (
    <span
      {...props}
      className={cn(
        'inline-block animate-cursor-blink',
        props.className
      )}
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};
