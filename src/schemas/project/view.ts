import { ComponentType, SVGProps } from "react";
import { z } from "zod";

export const ToolSchema = z.object({
  name: z.string(),
  description: z.string(),
  Icon: z.custom<ComponentType<SVGProps<SVGSVGElement>>>(),
});

const ImageSetSchema = z.object({
  thumbnails: z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
  }),
});

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  links: z.object({
    github: z.string().url().optional(),
    website: z.string().url().optional(),
  }),
  images: z.object({
    dark: ImageSetSchema,
    light: ImageSetSchema,
  }),
  tools: z.array(ToolSchema),
  projectDate: z.coerce.date(),
});

export type Tool = z.infer<typeof ToolSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
