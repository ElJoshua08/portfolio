"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-border relative flex h-20 min-h-16 w-full items-center justify-between px-8">
      {/* Bottom border */}
      <div
        id="bottom-border"
        className="bg-border absolute bottom-0 left-0 h-px w-0"
      />

      <Link
        href="/"
        id="logo"
        className="text-accent-green font-header invisible font-bold tracking-widest uppercase"
      >
        Josue Diaz Martinez
      </Link>

      <ul className="flex items-center justify-center gap-x-6">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={link.name}
              className="link-item invisible"
            >
              <Link
                href={link.href}
                className={cn(
                  "text-foreground/75 font-semibold tracking-wider transition-colors duration-75",
                  isActive && "text-accent-blue",
                  !isActive && "hover:text-foreground",
                )}
              >
                [ {link.name} ]
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
