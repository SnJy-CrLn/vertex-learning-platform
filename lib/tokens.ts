/**
 * Vertex Design System — token manifest.
 *
 * The values themselves live in `app/globals.css` (@theme) and are what the
 * app actually renders with. This file mirrors them so documentation surfaces
 * can enumerate the scales instead of hand-maintaining a second list.
 */

export type Swatch = {
  name: string;
  hex: string;
  /** Text color that stays legible on this swatch. */
  onDark?: boolean;
  /** Swatches this light need a hairline to read as a filled chip. */
  bordered?: boolean;
};

export const primaryScale: Swatch[] = [
  { name: "Primary 500", hex: "#F97316", onDark: true },
  { name: "Primary 400", hex: "#FB923C", onDark: true },
  { name: "Primary 300", hex: "#FDBA74" },
  { name: "Primary 200", hex: "#FED7AA" },
  { name: "Primary 100", hex: "#FFEEE5" },
];

export const neutralScale: Swatch[] = [
  { name: "Neutral 900", hex: "#0F172A", onDark: true },
  { name: "Neutral 700", hex: "#334155", onDark: true },
  { name: "Neutral 500", hex: "#64748B", onDark: true },
  { name: "Neutral 300", hex: "#CBD5E1" },
  { name: "Neutral 200", hex: "#E2E8F0" },
  { name: "Neutral 100", hex: "#F1F5F9" },
  { name: "Neutral 50", hex: "#FAFAFC", bordered: true },
  { name: "White", hex: "#FFFFFF", bordered: true },
];

export type TypeRow = {
  style: string;
  font: "Playfair Display" | "Inter";
  size: string;
  weight: string;
  use: string;
  /** Tailwind classes that reproduce the row. */
  className: string;
};

export const typeScale: TypeRow[] = [
  {
    style: "Display 1",
    font: "Playfair Display",
    size: "48 / 56",
    weight: "Bold",
    use: "Page titles",
    className: "font-display text-display-1",
  },
  {
    style: "Display 2",
    font: "Playfair Display",
    size: "36 / 44",
    weight: "Bold",
    use: "Section titles",
    className: "font-display text-display-2",
  },
  {
    style: "Heading 1",
    font: "Inter",
    size: "28 / 36",
    weight: "Semi Bold",
    use: "Card titles",
    className: "text-heading-1",
  },
  {
    style: "Heading 2",
    font: "Inter",
    size: "22 / 30",
    weight: "Semi Bold",
    use: "Sub section",
    className: "text-heading-2",
  },
  {
    style: "Heading 3",
    font: "Inter",
    size: "18 / 26",
    weight: "Medium",
    use: "Small titles",
    className: "text-heading-3",
  },
  {
    style: "Body Large",
    font: "Inter",
    size: "16 / 24",
    weight: "Regular",
    use: "Body copy",
    className: "text-body-lg",
  },
  {
    style: "Body",
    font: "Inter",
    size: "14 / 20",
    weight: "Regular",
    use: "Supporting text",
    className: "text-body",
  },
  {
    style: "Small",
    font: "Inter",
    size: "12 / 16",
    weight: "Regular",
    use: "Captions, meta",
    className: "text-small",
  },
];

/** Base unit is 4px; `rem` labels assume the 16px root. */
export const spacingScale = [
  { px: 4, rem: "0.25rem" },
  { px: 8, rem: "0.5rem" },
  { px: 12, rem: "0.75rem" },
  { px: 16, rem: "1rem" },
  { px: 24, rem: "1.5rem" },
  { px: 32, rem: "2rem" },
  { px: 40, rem: "2.5rem" },
  { px: 48, rem: "3rem" },
  { px: 64, rem: "4rem" },
];

export const radiusScale = [
  { label: "4px", name: "xs", className: "rounded-xs" },
  { label: "8px", name: "sm", className: "rounded-sm" },
  { label: "12px", name: "md", className: "rounded-md" },
  { label: "16px", name: "lg", className: "rounded-lg" },
  { label: "24px", name: "xl", className: "rounded-xl" },
  { label: "Full", name: "circle", className: "rounded-full" },
];

export const shadowScale = [
  { name: "Sm", value: "0 1px 2px 0 rgba(15, 23, 42, 0.05)", className: "shadow-sm" },
  { name: "Md", value: "0 4px 12px -2px rgba(15, 23, 42, 0.08)", className: "shadow-md" },
  { name: "Lg", value: "0 12px 24px -4px rgba(15, 23, 42, 0.10)", className: "shadow-lg" },
  { name: "Xl", value: "0 20px 40px -8px rgba(15, 23, 42, 0.12)", className: "shadow-xl" },
];
