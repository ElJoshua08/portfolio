import { Cursor } from "@/components/ui/cursor";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

const headerFont = Space_Grotesk({
  variable: "--font-header",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev by Joshua",
  description: "Hey, im Joshua! and this is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        headerFont.variable,
        bodyFont.variable,
        "font-mono",
      )}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <Cursor />
      </body>
    </html>
  );
}
