import { UploadProjectForm } from "@/app/(app)/projects/upload/form";
import { PageContent } from "@/components/page-content";

export default function UploadProjectPage() {
  return (
    <PageContent showNavLinks={false}>
      <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
        <UploadProjectForm />
      </div>
    </PageContent>
  );
}
