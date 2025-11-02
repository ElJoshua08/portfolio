"use client";

import Link from "next/link";
import { ReactNode } from "react";

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
  showContent,
}: {
  children: ReactNode;
  showContent: boolean;
}) => {
  return (
    <main className="h-dvh w-full p-4">
      <div
        className={`h-full w-full flex flex-col shadow-lg shadow-black/50 rounded-sm overflow-hidden bg-card border-border border-2 transition-all duration-700 p-6 relative ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <ul className="absolute flex items-center justify-center top-6 right-12 gap-x-6 z-20">
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
