import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type TextBlurProps = {
  as?: ElementType;
  children?: React.ReactNode;
  blurSteps?: number;
} & React.HTMLAttributes<HTMLElement>;

export const TextBlur = ({
  as: Tag = "span",
  children,
  blurSteps = 16,
  ...props
}: TextBlurProps) => {
  return (
    <Tag {...props} className={cn(props.className, "group relative")}>
      {children}
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: blurSteps }).map((_, i) => {
          const t = i / (blurSteps - 1); // 0 → 1

          const blur = Math.pow(t, 1.4) * 6;

          const start = t * 100;
          const midStart = start + 6;
          const midEnd = midStart + 12;
          const end = midEnd + 10;

          return (
            <div
              key={i}
              className="blur-section absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
              style={{
                backdropFilter: `blur(${blur.toFixed(2)}px)`,
                WebkitBackdropFilter: `blur(${blur.toFixed(2)}px)`,
                maskImage: `linear-gradient(
              to bottom,
              transparent ${start}%,
              black ${midStart}%,
              black ${midEnd}%,
              transparent ${end}%
            )`,
                WebkitMaskImage: `linear-gradient(
              to bottom,
              transparent ${start}%,
              black ${midStart}%,
              black ${midEnd}%,
              transparent ${end}%
            )`,
              }}
            />
          );
        })}
      </span>
    </Tag>
  );
};
