import { cn } from "@/lib/cn";

/**
 * The Vertex mark: a primary chevron descending to a point, with the negative
 * space cut as a darker inner vertex.
 */
export function VertexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 5h28L16 29z" fill="var(--color-primary-500)" />
      <path d="M10.5 5h11L16 14.6z" fill="var(--color-neutral-900)" />
    </svg>
  );
}

export function VertexLogo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <VertexMark className={markClassName} />
      <span
        className={cn(
          "font-display text-heading-2 font-bold tracking-tight text-neutral-900",
          wordmarkClassName,
        )}
      >
        Vertex
      </span>
    </span>
  );
}
