import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "video" | "lesson" | "popular";

const variants: Record<BadgeVariant, string> = {
  video: "bg-neutral-900 text-white",
  lesson: "bg-info-100 text-info-500",
  popular: "bg-primary-100 text-primary-500",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "lesson", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center rounded-xs px-2 text-small font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
