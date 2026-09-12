import { cn } from "@/lib/cn";
import {
  CheckCircleIcon,
  LockIcon,
  PlayCircleFilledIcon,
  SpinnerIcon,
} from "@/components/icons";

/**
 * 10 — Status / Indicators
 *
 * Each state pairs a distinct glyph with a distinct color, so the state is
 * never carried by color alone.
 */

export type StatusKind = "in-progress" | "completed" | "now-playing" | "locked";

const statuses = {
  "in-progress": {
    label: "In Progress",
    Icon: SpinnerIcon,
    className: "text-primary-500",
  },
  completed: {
    label: "Completed",
    Icon: CheckCircleIcon,
    className: "text-success-500",
  },
  "now-playing": {
    label: "Now Playing",
    Icon: PlayCircleFilledIcon,
    className: "text-primary-500",
  },
  locked: {
    label: "Locked",
    Icon: LockIcon,
    className: "text-neutral-500",
  },
} as const satisfies Record<
  StatusKind,
  { label: string; Icon: typeof LockIcon; className: string }
>;

export function StatusIndicator({
  status,
  label,
  className,
}: {
  status: StatusKind;
  /** Overrides the default copy for this state. */
  label?: string;
  className?: string;
}) {
  const { label: defaultLabel, Icon, className: tone } = statuses[status];
  return (
    <span className={cn("inline-flex items-center gap-2 text-body", className)}>
      <Icon className={cn("size-[18px] shrink-0", tone)} />
      <span className="text-neutral-700">{label ?? defaultLabel}</span>
    </span>
  );
}

export const statusKinds = Object.keys(statuses) as StatusKind[];
