import { UploadProjectForm } from "@/app/(app)/projects/upload/form";
import { PageContent } from "@/components/page-content";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function UploadProjectPage() {
  const [json, setJson] = useState("");

  return (
    <PageContent showNavLinks={false}>
      <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
        <UploadProjectForm onJsonGenerated={setJson} />
      </div>

      <Dialog open={!!json}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>JSON Generated Successfully</DialogTitle>
          </DialogHeader>
          <pre className="text-sm">{json}</pre>
          <Button
            onClick={() => {
              const blob = new Blob([json], { type: "application/json" });
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
