import { GithubIcon } from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { normalizeUrl } from "@/lib/utils";
import { type Project as ProjectType } from "@/src/types/project";
import { ExpandIcon, EyeIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Project = ({ project }: { project: ProjectType }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-row items-start justify-center gap-x-12 w-full h-96">
      <Dialog>
        <DialogTrigger className="cursor-pointer group relative h-full w-full">
          <div className="relative h-full aspect-19/10">
            <Image
              src={
                project.images[resolvedTheme as "dark" | "light"].thumbnails
                  .desktop
              }
              alt={project.title}
              fill
              className="rounded-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-xl bg-muted/25 rounded-[calc(var(--radius)-3px)] transition-all flex items-center justify-center border-2 border-emerald-500">
              <ExpandIcon className="size-24 stroke-1" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[90vw]! aspect-19/10 p-0!">
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
          <div className="h-full w-full relative">
            <Image
              src={
                project.images[resolvedTheme as "dark" | "light"].thumbnails
                  .desktop
              }
              alt={project.title}
              fill
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col items-start justify-between gap-y-12 w-full min-h-full ">
        <header className="flex flex-col gap-y-1">
          <h2 className="font-bold text-4xl tracking-wide">{project.title}</h2>
          <p className="text-lg text-muted-foreground whitespace-pre-line">
            {project.description}
          </p>
        </header>

        <div className="flex flex-row items-center justify-between mt-auto w-full">
          <ul className="flex gap-x-4 ">
            {project.tools.map((tool) => (
              <li key={tool.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <tool.Icon className="size-10 fill-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">{tool.name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>

          <ul className="flex gap-x-2">
            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={normalizeUrl(project.title)}
                    className="size-12 block"
                  >
                    <Button
                      variant="outline"
                      size="icon-lg"
                      rounded="round"
                      className="size-12 group"
                    >
                      <EyeIcon className="size-7 group-hover:stroke-accent" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm ">View on Project Page</p>
                </TooltipContent>
              </Tooltip>
            </li>
            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.links.github || "#"}
                    target="_blank"
                    className="size-12 block"
                  >
                    <Button
                      variant="outline"
                      size="icon-lg"
                      rounded="round"
                      className="size-12 group"
                    >
                      <GithubIcon className="size-7 fill-foreground group-hover:fill-accent" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm ">View on Github</p>
                </TooltipContent>
              </Tooltip>
            </li>

            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.links.website || "#"}
                    target="_blank"
                    className="size-12 block"
                  >
                    <Button
                      variant="outline"
                      size="icon-lg"
                      className="size-12"
                      rounded="round"
                    >
                      <SquareArrowOutUpRightIcon className="size-7" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Visit Website</p>
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
