import { cn } from "@/lib/cn";

/**
 * 11 — Progress bar
 *
 * A full-width track with a primary fill and a trailing percentage label.
 * Exposed as a native progressbar so assistive tech reads the same value the
 * label shows.
 */

export function ProgressBar({
  value,
  label,
  className,
}: {
  /** Completion, 0–100. Values outside the range are clamped. */
  value: number;
  /** Trailing text. Defaults to "<value>% complete"; pass `null` to hide it. */
  label?: string | null;
  className?: string;
}) {
  const pct = Math.round(Math.min(100, Math.max(0, value)));
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${pct}% complete`}
        className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200"
      >
        <div
          className="h-full rounded-full bg-primary-500 transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      {label !== null ? (
        <span className="shrink-0 text-small font-medium text-neutral-700">
          {label ?? `${pct}% complete`}
        </span>
      ) : null}
    </div>
  );
}
