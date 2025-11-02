"use client";

import { Header } from "@/app/_components/header";
import { Terminal } from "@/app/_components/terminal";
import { PageContent } from "@/components/page-content";

export default function Home() {
  return (
    <PageContent>
      {/* Header Component */}
      <Header />

      {/* Terminal Component */}
      <div className="flex-1 overflow-hidden border-t-2 py-4">
        <Terminal />
      </div>
    </PageContent>
  );
}

