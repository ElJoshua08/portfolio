/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { ImageConventionDialog } from "@/app/(app)/projects/_components/image-convention-dialog";
import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formSchema } from "@/src/schemas/project/upload";
import { ProjectSchema } from "@/src/schemas/project/view";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

type Schema = z.infer<typeof formSchema>;

export function UploadProjectForm({
  onJsonGenerated,
}: {
  onJsonGenerated: (json: ProjectSchema) => void;
}) {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    if (!Array.isArray(data.images)) {
      toast.error("Please select all the necessary images");
      return null;
    }

    const slug = data.slug.toLowerCase();

    // Separate images by theme
    const lightImages = data.images.filter((image) =>
      image.name.toLowerCase().includes("light")
    );
    const darkImages = data.images.filter((image) =>
      image.name.toLowerCase().includes("dark")
    );

    // Helper to create a full path with slug and category
    const buildPath = (filename: string, category: string) =>
      filename ? `/${slug}/images/${category}/${filename}` : "";

    // Helper to extract a thumbnail path by device keyword
    const getThumbnail = (images: File[], device: string, category: string) =>
      buildPath(
        images.find((img) => img.name.toLowerCase().includes(device))?.name ||
          "",
        category
      );

    const lightImageSet = {
      thumbnails: {
        mobile: getThumbnail(lightImages, "mobile", "thumbnails"),
        tablet: getThumbnail(lightImages, "tablet", "thumbnails"),
        desktop: getThumbnail(lightImages, "desktop", "thumbnails"),
      },
    };

    const darkImageSet = {
      thumbnails: {
        mobile: getThumbnail(darkImages, "mobile", "thumbnails"),
        tablet: getThumbnail(darkImages, "tablet", "thumbnails"),
        desktop: getThumbnail(darkImages, "desktop", "thumbnails"),
      },
    };

    // Validate completeness
    const missingLight = Object.values(lightImageSet.thumbnails).some(
      (v) => !v
    );
    const missingDark = Object.values(darkImageSet.thumbnails).some((v) => !v);

    if (missingLight || missingDark) {
      toast.error(
        "Missing some required images (make sure all light/dark thumbnails are provided)"
      );
      return null;
    }

    // Construct the final ProjectSchema
    const project: ProjectSchema = {
      slug,
      title: data.title,
      description: data.description,
      links: {
        github: data.githubUrl || undefined,
        website: data.websiteUrl || undefined,
      },
      images: {
        dark: darkImageSet,
        light: lightImageSet,
      },
      tools: data.tools
        ? data.tools
            .split(",")
            .map((t: string) => ({
              name: t.trim(),
              description: "",
              Icon: () => null, // placeholder
            }))
            .filter((t: any) => t.name.length > 0)
        : [],
      projectDate:
        data.projectDate instanceof Date
          ? data.projectDate
          : new Date(data.projectDate),
    };

    onJsonGenerated(project);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row p-2 sm:p-5 md:p-8 w-full h-full gap-2 "
    >
      <FieldGroup className="flex  flex-col md:flex-row">
        <FieldGroup className="flex flex-col space-y-6 p-12 h-fit rounded-sm border">
          <Controller
            name="slug"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="title">Slug *</FieldLabel>
                <Input
                  {...field}
                  id="title"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  aria-invalid={fieldState.invalid}
                  placeholder="Slug for the project"
                />

                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>
                    Used to generate Image URLs, projectUrl, etc. Short name,
                    kebab-case.
                  </FieldDescription>
                )}
              </Field>
            )}
          />

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="title">Title *</FieldLabel>
                <Input
                  {...field}
                  id="title"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  aria-invalid={fieldState.invalid}
                  placeholder="Exchange Calculator for..."
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="description">Description *</FieldLabel>
                <Textarea
                  {...field}
                  aria-invalid={fieldState.invalid}
                  id="description"
                  placeholder="Do not overextend, that's for later."
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="githubUrl"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="github-url">Github Url </FieldLabel>
                <Input
                  {...field}
                  id="github-url"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  aria-invalid={fieldState.invalid}
                  placeholder="https://github.com/..."
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="websiteUrl"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="website-url">Website Url</FieldLabel>
                <Input
                  {...field}
                  id="website-url"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  aria-invalid={fieldState.invalid}
                  placeholder="https://website-example.com"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="projectDate"
            control={form.control}
            render={({ field, fieldState }) => {
              const selectedDate = field.value;
              return (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="project-date">Project Date *</FieldLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative">
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-start font-normal active:scale-none",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="size-4" />
                          {selectedDate ? (
                            <>{format(selectedDate, "dd MMM, yyyy")}</>
                          ) : (
                            <span>Select a date</span>
                          )}
                        </Button>
                        {fieldState.isDirty && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute top-1/2 end-0 -translate-y-1/2 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              form.resetField("projectDate");
                            }}
                          >
                            <X />
                          </Button>
                        )}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(newDate) => {
                          newDate && form.setValue("projectDate", newDate);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              );
            }}
          />
        </FieldGroup>

        <FieldGroup className="flex flex-col space-y-6 p-12 h-[78vh] rounded-sm border overflow-auto">
          <Controller
            name="images"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <Field
                  data-invalid={fieldState.invalid}
                  className="gap-1"
                >
                  <FieldLabel htmlFor="images">Images *</FieldLabel>
                  <ImageConventionDialog />
                  <FileUpload
                    {...field}
                    setValue={(name, value, options) => {
                      form.setValue(name as "images", value, options);
                    }}
                    name="images"
                    placeholder="WEBP, PNG (max. 20MB)"
                    accept="image/png, image/jpeg, image/webp"
                    maxFiles={20}
                    maxSize={21000000}
                  />
                </Field>
                {Array.isArray(fieldState.error) ? (
                  fieldState.error?.map((error, i) => (
                    <p
                      key={i}
                      role="alert"
                      data-slot="field-error"
                      className="text-destructive text-sm"
                    >
                      {error.message}
                    </p>
                  ))
                ) : (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            )}
          />

          <Controller
            name="tools"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1"
              >
                <FieldLabel htmlFor="tools">Tools </FieldLabel>
                <Input
                  {...field}
                  id="tools"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  aria-invalid={fieldState.invalid}
                  placeholder="Placeholder input"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldGroup>
      <div className="flex justify-end items-center w-full mt-auto gap-x-4 absolute bottom-12 right-12">
        <Link href="/">
          <Button
            variant="outline"
            type="button"
          >
            Go Home
          </Button>
        </Link>
        <Button>
          {form.formState.isSubmitting ? "Submitting..." : "Generate JSON"}
        </Button>
      </div>
    </form>
  );
}
