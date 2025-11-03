import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  title: z.string({ error: "This field is required" }),
  description: z.string({ error: "This field is required" }),
  githubUrl: z.url({ error: "Please enter a valid url" }).optional(),
  websiteUrl: z.url({ error: "Please enter a valid url" }).optional(),
  images: z.union([
    z.file().mime(["image/png", "image/jpeg", "image/webp"]).max(21000000),
    z
      .array(
        z.file().mime(["image/png", "image/jpeg", "image/webp"]).max(21000000)
      )
      .nonempty({ message: "Please select a file" }),
    z.string().min(1, "Please select a file"),
    z.instanceof(FileList),
  ]),
  projectDate: z.date({ error: "This field is required" }).nonoptional(),
  tools: z.string({ error: "This field is required" }).optional(),
});
