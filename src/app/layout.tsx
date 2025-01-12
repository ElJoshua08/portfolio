import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Joshua - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {/* <div className="absolute bottom-0 left-0 right-0 -top-[600px] bg-[radial-gradient(circle_1200px_at_50%_150px,#4E501B,transparent)] -z-10"></div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
