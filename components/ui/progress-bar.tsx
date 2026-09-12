import { cn } from "@/lib/cn";

export interface ProgressBarProps {
  /** 0-100 */
  value: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="h-2 flex-1 rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {label && <span className="whitespace-nowrap text-body text-neutral-500">{label}</span>}
    </div>
  );
}
