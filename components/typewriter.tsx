/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cloneElement, Fragment, useEffect, useRef, useState } from "react";

export const TypewriterContent = ({
  children,
  displayedWords,
}: {
  children: React.ReactNode;
  displayedWords: number;
}) => {
  const renderPartialContent = (
    node: React.ReactNode,
    wordCount: { current: number }
  ): React.ReactNode => {
    if (typeof node === "string") {
      const words = node.split(/(\s+)/);
      let result = "";
      for (const word of words) {
        if (word.trim()) {
          if (wordCount.current < displayedWords) {
            result += word;
            wordCount.current++;
          } else {
            break;
          }
        } else {
          result += word;
        }
      }
      return result;
    }

    if (typeof node === "object" && node !== null && "props" in node) {
      const children = (node.props as any).children;
      const newChildren = renderPartialContent(children, wordCount);
      return cloneElement(node, {}, newChildren);
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <Fragment key={index}>
          {renderPartialContent(child, wordCount)}
        </Fragment>
      ));
    }

    return node;
  };

  const wordCount = { current: 0 };
  return <>{renderPartialContent(children, wordCount)}</>;
};

export const TypewriterWelcome = ({
  text,
  delay = 50,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

export const TypewriterText = ({
  text,
  delay = 30,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

export const TypewriterWords = ({
  children,
  delay = 50,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [displayedWords, setDisplayedWords] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const text = contentRef.current.textContent || "";
      const words = text.split(/\s+/).filter(Boolean);
      setTotalWords(words.length);
    }
  }, []);

  useEffect(() => {
    if (displayedWords < totalWords) {
      const timeout = setTimeout(() => {
        setDisplayedWords((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (totalWords > 0) {
      setIsComplete(true);
    }
  }, [displayedWords, totalWords, delay]);

  return (
    <>
      <div
        ref={contentRef}
        className="hidden"
      >
        {children}
      </div>
      <div
        style={{
          display: isComplete ? "block" : "inline",
        }}
      >
        {isComplete ? (
          children
        ) : (
          <TypewriterContent displayedWords={displayedWords}>
            {children}
          </TypewriterContent>
        )}
      </div>
    </>
  );
};
