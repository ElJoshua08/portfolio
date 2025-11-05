/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/use-file-upload";
import { AlertCircleIcon, CloudUpload, File, TrashIcon } from "lucide-react";

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file.type;
  if (fileType.startsWith("image/")) {
    // return preview
    return (
      <div className="aspect-square size-24 overflow-hidden rounded-md">
        <img
          alt="image"
          src={URL.createObjectURL(file.file as Blob)}
          className="object-cover size-full"
        />
      </div>
    );
  }
  return (
    <div className="aspect-square size-10 flex items-center justify-center overflow-hidden rounded-full">
      <File className="size-5 opacity-60" />
    </div>
  );
};

export function FileUpload({
  maxFiles,
  maxSize,
  placeholder,
  // description,
  required,
  setValue,
  accept,
  name,
  disabled,
}: {
  maxFiles: number;
  maxSize: number;
  placeholder?: string;
  // description?: string;
  required?: boolean;
  disabled?: boolean;
  setValue: (
    name: string,
    value: any,
    options?: {
      shouldValidate?: boolean;
      shouldDirty?: boolean;
      shouldTouch?: boolean;
    }
  ) => void;
  accept?: string;
  name: string;
}) {
  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    multiple: maxFiles > 1,
    maxFiles,
    maxSize,
    accept,
    onFilesChange: (files) => {
      setValue(
        name,
        files.map((file) => file.file),
        { shouldValidate: true, shouldDirty: true, shouldTouch: true }
      );
    },
  });

  return (
    <div className="flex flex-col gap-2 pb-2">
      {/* Drop area */}
      <div
        role="button"
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="border-input min-h-52 hover:bg-input/40 data-[dragging=true]:bg-input/40 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex  flex-col items-center justify-center rounded-md border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px] hover:cursor-pointer"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload files"
          required={required}
          disabled={disabled}
        />

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-secondary mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <CloudUpload className="size-4 opacity-60" />
          </div>
          {/* <p className="mb-1.5 text-sm font-medium">
            Upload
          </p> */}
          <p className="text-foreground font-medium text-sm mb-2">
            Drag & drop or click to browse
          </p>
          <div className="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
            {placeholder}
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-center gap-2 rounded-lg border min-w-16 min-h-16 relative group overflow-hidden"
            >
              {getFileIcon(file)}

              <button
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/75 group-hover:backdrop-blur-[3px] cursor-pointer transition-all *:transition-all"
                onClick={() => removeFile(file.id)}
              >
                <TrashIcon className="size-0 group-hover:size-12 stroke-destructive  stroke-2" />
              </button>
            </div>
          ))}

          {/* Remove all files button */}
          {files.length > 1 && (
            <Button
              size="sm"
              rounded="round-sm"
              variant="outline"
              onClick={clearFiles}
            >
              Remove all files
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
