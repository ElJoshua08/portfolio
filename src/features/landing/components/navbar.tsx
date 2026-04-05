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
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-border flex h-20 min-h-16 w-full items-center justify-between border-b px-8">
      <Link
        href="/"
        className="text-accent-green font-header font-bold tracking-widest uppercase"
      >
        Josue Diaz Martinez
      </Link>

      <ul className="flex items-center justify-center gap-x-6">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
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
