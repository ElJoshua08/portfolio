"use client";

import { Loader } from "@/app/_components/loader";
import { ASCII_BANNER } from "@/src/constants";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [hasAlreadyLoaded, setHasAlreadyLoaded] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setHasAlreadyLoaded(true);
      console.log("loaded");
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  if (!hasAlreadyLoaded) {
    return <Loader />;
  }

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 ">
        <pre
          data-glitch={ASCII_BANNER}
          className="glitch text-5xl font-mono leading-none rotate-25 select-none text-white"
        >
          {ASCII_BANNER}
        </pre>
      </div>
      {children}
    </>
  );
}
