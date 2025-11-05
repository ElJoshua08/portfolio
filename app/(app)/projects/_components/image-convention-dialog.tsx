import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldDescription } from "@/components/ui/field";

export const ImageConventionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mb-4 cursor-pointer text-left">
          <FieldDescription>
            Click here for a better explanation about image name convention.
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
                Each image can have both a light and dark version to match the
                site’s theme. To define them, append{" "}
                <span className="text-accent font-medium">
                  &apos;-light&apos;
                </span>
                or{" "}
                <span className="text-accent font-medium">
                  &apos;-dark&apos;
                </span>{" "}
                to the end of the filename. Both versions should share the same
                base name so they can be recognized as a pair.
              </p>

              <div className="bg-muted/20 border border-border rounded-lg p-4 space-y-1 font-mono text-sm text-muted-foreground">
                <p>project-preview-light.png</p>
                <p>project-preview-dark.png</p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">Thumbnails</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Thumbnails represent image previews for different devices.
                Prefix the filename with{" "}
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
                . You can also combine them with the light/dark suffix.
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
            <h3 className="text-xl font-semibold text-primary">Full Example</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A project could include a full set of images for multiple devices
              and themes:
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
  );
};
