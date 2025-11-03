import { Button } from "@/components/ui/button";
import { type Project as ProjectType } from "@/src/types/project";
import Image from "next/image";

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-12 bg-red-500 h-full max-h-[600px] w-full">
      <div className="relative max-h-96 w-[400px] bg-red-500">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="rounded-md aspect-3/2 w-full h-full"
        />
      </div>

      <div className="flex flex-col items-start justify-start bg-blue-500 w-full h-full py-12 px-4 gap-y-12">
        <h2 className="font-bold text-2xl">{project.title}</h2>

        <p>{project.description}</p>

        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            variant="outline"
            size="icon"
          >
            
          </Button>
        </div>
      </div>
    </div>
  );
};
