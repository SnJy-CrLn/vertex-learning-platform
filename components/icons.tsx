import type { SVGProps } from "react";

/**
 * 06 — Icons
 *
 * Specs: 24×24px grid, 2px stroke width (outline), rounded line caps,
 * consistent optical balance. Every icon inherits `currentColor`, so color is
 * set by the surrounding text color rather than a prop.
 */

export type IconProps = SVGProps<SVGSVGElement>;

function Outline({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Outline style -------------------------------------------------------- */

export const BellIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M18 8A6 6 0 0 0 6 8c0 6-3 7-3 7h18s-3-1-3-7" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </Outline>
);

export const SearchIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Outline>
);

export const PlayCircleIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5 16 12l-6 3.5z" />
  </Outline>
);

export const FileIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
  </Outline>
);

export const BookmarkIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4z" />
  </Outline>
);

export const ChartIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M5 20v-6" />
    <path d="M12 20V8" />
    <path d="M19 20v-9" />
  </Outline>
);

export const ClockIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </Outline>
);

export const UserIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </Outline>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="m9 5 7 7-7 7" />
  </Outline>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="m15 5-7 7 7 7" />
  </Outline>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="m5 9 7 7 7-7" />
  </Outline>
);

export const ExternalLinkIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M14 4h6v6" />
    <path d="m20 4-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Outline>
);

export const CheckCircleIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 2.7 2.7L16 9.5" />
  </Outline>
);

export const LockIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="4.5" y="10" width="15" height="10" rx="2" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
  </Outline>
);

export const LayersIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="m12 3 8 4.5-8 4.5-8-4.5z" />
    <path d="m4 12.5 8 4.5 8-4.5" />
  </Outline>
);

export const SignalIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M5 20v-3" />
    <path d="M12 20v-8" />
    <path d="M19 20V6" />
  </Outline>
);

export const EyeIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12" />
    <circle cx="12" cy="12" r="3" />
  </Outline>
);

export const GridIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </Outline>
);

export const TargetIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
  </Outline>
);

export const AccessibilityIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="4" r="1.6" />
    <path d="M4.5 8.5 12 10l7.5-1.5" />
    <path d="M12 10v4.5" />
    <path d="m8.5 21 3.5-6.5L15.5 21" />
  </Outline>
);

export const SpinnerIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" />
  </Outline>
);

/* --- Filled style --------------------------------------------------------- */

export const BellFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2a6 6 0 0 0-6 6c0 5.2-2.4 6.4-2.4 6.4A1 1 0 0 0 4.2 16h15.6a1 1 0 0 0 .6-1.6S18 13.2 18 8a6 6 0 0 0-6-6" />
    <path d="M9.6 17.5a2.6 2.6 0 0 0 4.8 0z" />
  </Solid>
);

export const SearchFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path
      fillRule="evenodd"
      d="M11 4a7 7 0 1 0 4.2 12.6l3.1 3.1a1 1 0 0 0 1.4-1.4l-3.1-3.1A7 7 0 0 0 11 4m0 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"
    />
  </Solid>
);

export const PlayCircleFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-2 6.1a.6.6 0 0 1 .9-.5l5.6 3.4a.6.6 0 0 1 0 1l-5.6 3.4a.6.6 0 0 1-.9-.5z"
    />
  </Solid>
);

export const FileFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M13.5 2H7a2.5 2.5 0 0 0-2.5 2.5v15A2.5 2.5 0 0 0 7 22h10a2.5 2.5 0 0 0 2.5-2.5V8z" />
    <path d="M14.5 2.4V7.5h5.1z" />
  </Solid>
);

export const BookmarkFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v16a.8.8 0 0 1-1.25.66L12 17.9l-4.75 3.26A.8.8 0 0 1 6 20.5z" />
  </Solid>
);

export const ChartFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <rect x="3.5" y="13" width="3.6" height="8" rx="1.2" />
    <rect x="10.2" y="7" width="3.6" height="14" rx="1.2" />
    <rect x="16.9" y="10" width="3.6" height="11" rx="1.2" />
  </Solid>
);

export const ClockFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m1 5a1 1 0 1 0-2 0v5.4l3.5 2.2a1 1 0 1 0 1-1.7L13 11.4z"
    />
  </Solid>
);

export const UserFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <circle cx="12" cy="7.8" r="4.3" />
    <path d="M12 14c-4.1 0-7.5 2.7-7.5 6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1c0-3.3-3.4-6-7.5-6" />
  </Solid>
);

export const ChevronRightFilledIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M9.3 3.9a1.3 1.3 0 0 0 0 1.9l6.2 6.2-6.2 6.2a1.3 1.3 0 0 0 1.9 1.8l7.1-7.1a1.3 1.3 0 0 0 0-1.8l-7.1-7.1a1.3 1.3 0 0 0-1.9 0" />
  </Solid>
);

/** The two icon families, in the documented display order. */
export const outlineIconSet = [
  { name: "Bell", Icon: BellIcon },
  { name: "Search", Icon: SearchIcon },
  { name: "Play", Icon: PlayCircleIcon },
  { name: "File", Icon: FileIcon },
  { name: "Bookmark", Icon: BookmarkIcon },
  { name: "Chart", Icon: ChartIcon },
  { name: "Clock", Icon: ClockIcon },
  { name: "User", Icon: UserIcon },
  { name: "Chevron", Icon: ChevronRightIcon },
];

export const filledIconSet = [
  { name: "Bell", Icon: BellFilledIcon },
  { name: "Search", Icon: SearchFilledIcon },
  { name: "Play", Icon: PlayCircleFilledIcon },
  { name: "File", Icon: FileFilledIcon },
  { name: "Bookmark", Icon: BookmarkFilledIcon },
  { name: "Chart", Icon: ChartFilledIcon },
  { name: "Clock", Icon: ClockFilledIcon },
  { name: "User", Icon: UserFilledIcon },
  { name: "Chevron", Icon: ChevronRightFilledIcon },
];
