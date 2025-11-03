/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

type Schema = z.infer<typeof formSchema>;

export function UploadProjectForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });
  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row p-2 sm:p-5 md:p-8 w-full h-full gap-2 "
    >
      <FieldGroup className="flex  flex-col md:flex-row">
        <FieldGroup className="flex flex-col space-y-6 p-12 h-fit rounded-sm border">
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

        <FieldGroup className="flex flex-col space-y-6 p-12 h-fit rounded-sm border">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="mb-4 cursor-pointer text-left">
                        <FieldDescription>
                          Click here for a better explanation about image name
                          convention.
                        </FieldDescription>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[calc(100vw-8rem)]! h-[calc(100vh-8rem)] w-full">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                          Image Naming Convention
                        </DialogTitle>
                        <DialogDescription className="sr-only" />
                      </DialogHeader>
                      <div className="mt-6 flex flex-col gap-y-10 text-foreground">
                        {/* Light/Dark Mode */}
                        <div className="flex flex-row gap-x-10">
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-primary">
                              Light / Dark Mode
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              Each image can have both a light and dark version
                              to match the site’s theme. To define them, append{" "}
                              <span className="text-accent font-medium">
                                &apos;-light&apos;
                              </span>
                              or{" "}
                              <span className="text-accent font-medium">
                                &apos;-dark&apos;
                              </span>{" "}
                              to the end of the filename. Both versions should
                              share the same base name so they can be recognized
                              as a pair.
                            </p>

                            <div className="bg-muted/20 border border-border rounded-lg p-4 space-y-1 font-mono text-sm text-muted-foreground">
                              <p>project-preview-light.png</p>
                              <p>project-preview-dark.png</p>
                            </div>
                          </div>

                          {/* Thumbnails */}
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-primary">
                              Thumbnails
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              Thumbnails represent image previews for different
                              devices. Prefix the filename with{" "}
                              <span className="text-accent font-medium">
                                &apos;thumb-&apos;
                              </span>
                              followed by the device version:
                              <span className="text-accent font-medium">
                                {" "}
                                &apos;mobile-&apos;
                              </span>
                              ,
                              <span className="text-accent font-medium">
                                {" "}
                                &apos;tablet-&apos;
                              </span>
                              , or
                              <span className="text-accent font-medium">
                                {" "}
                                &apos;desktop-&apos;
                              </span>
                              . You can also combine them with the light/dark
                              suffix.
                            </p>

                            <div className="bg-muted/20 border border-border rounded-lg p-4 space-y-1 font-mono text-sm text-muted-foreground">
                              <p>thumb-mobile-light.png</p>
                              <p>thumb-tablet-dark.png</p>
                              <p>thumb-desktop-light.png</p>
                            </div>
                          </div>
                        </div>

                        {/* Combined Example */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-primary">
                            Full Example
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            A project could include a full set of images for
                            multiple devices and themes:
                          </p>
                          <div className="bg-muted/20 border border-border rounded-lg p-4 space-y-1 font-mono text-sm text-muted-foreground">
                            <p>thumb-mobile-light.png</p>
                            <p>thumb-mobile-dark.png</p>
                            <p>thumb-tablet-light.png</p>
                            <p>thumb-tablet-dark.png</p>
                            <p>thumb-desktop-light.png</p>
                            <p>thumb-desktop-dark.png</p>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="mt-auto">
                        <DialogClose asChild>
                          <Button rounded="round-sm">Understood</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
