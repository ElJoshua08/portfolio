import { ThemeProvider } from "@/components/theme-provider";
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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${bodyFont.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
