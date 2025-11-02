"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const PageContent = ({
  children,
  showDelay = 500,
}: {
  children: ReactNode;
  showDelay?: number;
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, showDelay);
    return () => clearTimeout(timer);
  }, [showDelay]);

  return (
    <main className="h-dvh w-full p-4">
      <div
        className={`h-full w-full flex flex-col shadow-lg shadow-black/50 rounded-sm overflow-hidden bg-card backdrop-blur-3xl border transition-all duration-700 p-6 relative ${
          showContent
            ? "opacity-100 translate-y-0 backdrop-blur-3xl"
            : "opacity-0 translate-y-4 backdrop-blur-none"
        }`}
      >
        <ul className="absolute flex items-center justify-center top-8 right-12 gap-x-6 z-20">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground group transition-all *:transition-all"
              >
                <span className="group-hover:text-accent">[</span> {link.name}{" "}
                <span className="group-hover:text-accent">]</span>
              </Link>
            </li>
          ))}
        </ul>

        {children}
      </div>
    </main>
  );
};
