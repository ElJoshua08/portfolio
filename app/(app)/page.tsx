"use client";

import { Header } from "@/app/_components/header";
import { Terminal } from "@/app/_components/terminal";
import { PageContent } from "@/components/page-content";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <PageContent showContent={showContent}>
      {/* Header Component */}
      <Header />

      {/* Terminal Component */}
      <div className="flex-1 overflow-hidden border-t-2 py-4">
        <Terminal />
      </div>
    </PageContent>
  );
}
