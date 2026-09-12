import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * 09 — Badges / Tags
 *
 * Small uppercase chips that classify a piece of content at a glance.
 */

export type BadgeTone = "video" | "lesson" | "popular" | "neutral";

const tones: Record<BadgeTone, string> = {
  video: "bg-primary-100 text-primary-500",
  lesson: "bg-info-100 text-info-500",
  popular: "bg-primary-100 text-primary-500 ring-1 ring-primary-200",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
