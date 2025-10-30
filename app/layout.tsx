import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const bodyFont = Fira_Code({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Joshua - Portfolio",
  description: "Welcome to Joshua's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
