import { Terminal } from "@/app/_components/terminal";

export default function Home() {
  return (
    <main className="w-full h-dvh bg-red-500">
      {/* Header */}
      <header className="w-full h-44 border-b">
        <h1>Welcome to My App</h1>
      </header>
      {/* Terminal */}
      <Terminal />
    </main>
  );
}
