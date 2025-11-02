"use client";

import { PageContent } from "@/components/page-content";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContent showContent={showContent}>So this is some content</PageContent>
  );
}
