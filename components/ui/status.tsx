import { cn } from "@/lib/cn";
import { CheckCircleIcon, LockIcon } from "@/components/icons";

export type StatusKind = "in-progress" | "completed" | "now-playing" | "locked";

const labels: Record<StatusKind, string> = {
  "in-progress": "In Progress",
  completed: "Completed",
  "now-playing": "Now Playing",
  locked: "Locked",
};

const colors: Record<StatusKind, string> = {
  "in-progress": "text-primary-500",
  completed: "text-success-500",
  "now-playing": "text-primary-500",
  locked: "text-neutral-500",
};

function StatusGlyph({ kind }: { kind: StatusKind }) {
  switch (kind) {
    case "completed":
      return <CheckCircleIcon className="h-4 w-4" />;
    case "locked":
      return <LockIcon className="h-4 w-4" />;
    case "now-playing":
      return <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />;
    case "in-progress":
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
          <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Status({ kind, className }: { kind: StatusKind; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-body font-medium", colors[kind], className)}>
      <StatusGlyph kind={kind} />
      {labels[kind]}
    </span>
  );
}
