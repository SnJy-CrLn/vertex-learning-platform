/**
 * Vertex icon set — section 06 of the design system.
 * 24x24 grid, 2px stroke width, rounded line caps, consistent optical balance.
 * Each icon ships an outline (default) and filled variant.
 */
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const outlineProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BellIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function BellFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 21a2 2 0 0 0 4 0h-4z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function SearchFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 2a9 9 0 1 0 5.6 16.03l4.68 4.68 1.42-1.42-4.68-4.68A9 9 0 0 0 11 2zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 15.5 12 10 15.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PlayFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M10 8.5 15.5 12 10 15.5z" fill="var(--color-white, #fff)" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
    </svg>
  );
}

export function FileFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2h7l5 5v15H7V2zm7 1.5V8h4.5L14 3.5z" />
    </svg>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M6 3h12v18l-6-4-6 4z" />
    </svg>
  );
}

export function BookmarkFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 2h12v20l-6-4-6 4V2z" />
    </svg>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M5 20V10M12 20V4M19 20v-7" />
    </svg>
  );
}

export function BarChartFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="3" y="10" width="4" height="11" rx="1" />
      <rect x="10" y="3" width="4" height="18" rx="1" />
      <rect x="17" y="12" width="4" height="9" rx="1" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ClockFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l4 2.3-1 1.7-5-2.9V7h2z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

export function UserFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="7" r="4.5" />
      <path d="M3 22c0-5 4-9 9-9s9 4 9 9H3z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronRightFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 4v16l10-8z" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowRightFilledIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 11h13.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H3v-2z" />
    </svg>
  );
}

export function AccessibleIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
      <path d="M5 8h14M12 8v13M8 13h8M8 21l2-6M16 21l-2-6" />
    </svg>
  );
}
