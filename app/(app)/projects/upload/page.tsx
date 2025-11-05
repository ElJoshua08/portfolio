"use client";

import { UploadProjectForm } from "@/app/(app)/projects/upload/form";
import { PageContent } from "@/components/page-content";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectSchema } from "@/src/schemas/project/view";
import { useState } from "react";

export default function UploadProjectPage() {
  const [json, setJson] = useState<ProjectSchema>();

  return (
    <PageContent showNavLinks={false}>
      <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
        <UploadProjectForm onJsonGenerated={setJson} />
      </div>

      <Dialog
        open={!!json}
        onOpenChange={(open) => !open && setJson(undefined)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>JSON Generated Successfully</DialogTitle>
            <DialogDescription className="sr-only">
              This is the JSON that was generated.
            </DialogDescription>
          </DialogHeader>
          <pre className="text-sm font-mono whitespace-pre-wrap bg-muted p-4 rounded-sm relative max-h-[70vh] overflow-auto">
            {JSON.stringify(json, null, 2)}

            <CopyButton
              variant="outline"
              content={JSON.stringify(json, null, 2)}
              className="absolute top-4 right-4"
            />
          </pre>
          <Button
            rounded="round-sm"
            onClick={() => { 
              const blob = new Blob([JSON.stringify(json)], {
                type: "application/json",
              });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = "data.json"; // nombre del archivo
              a.click();

              URL.revokeObjectURL(url);
            }}
          >
            Download JSON
          </Button>
        </DialogContent>
      </Dialog>
    </PageContent>
  );
}
