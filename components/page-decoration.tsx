/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { ASCII_DECORATION } from "@/src/contants";
import { useEffect, useState } from "react";

export const PageDecoration = ({
  numberOfElements,
}: {
  numberOfElements: number;
}) => {
  const [elements, setElements] = useState<
    { x: number; y: number; banner: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: numberOfElements }, () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const banner =
        ASCII_DECORATION[Math.floor(Math.random() * ASCII_DECORATION.length)];
      return { x, y, banner };
    });

    setElements(generated);
  }, [numberOfElements]);

  return (
    <>
      {elements.map((el, i) => (
        <pre
          key={i}
          className="absolute text-xs opacity-10 select-none pointer-events-none leading-[1.10] -z-1"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            transform: "translate(-50%, -50%)",
            whiteSpace: "pre",
          }}
        >
          {el.banner}
        </pre>
      ))}
    </>
  );
};
