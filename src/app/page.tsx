import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="h-dvh w-full p-8 flex items-center justify-center">
      {/* Content */}
      <main className="h-full w-full flex items-center justify-start flex-col max-w-screen-2xl">
        {/* Hero */}
        <Hero />
      </main>
    </div>
  );
}
