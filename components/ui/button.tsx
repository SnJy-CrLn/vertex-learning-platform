import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * 07 — Buttons
 *
 * Specs: height 44px (default), padding 0 16px (lg) / 0 12px (md),
 * radius 12px, Inter Medium 14–16px.
 */

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap " +
  "transition-colors duration-150 disabled:cursor-not-allowed";

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-3 text-body",
  lg: "h-11 px-4 text-body-lg",
};

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary-500 text-white shadow-sm",
    "hover:bg-primary-400",
    "disabled:bg-primary-200 disabled:text-white disabled:shadow-none",
  ),
  secondary: cn(
    "bg-white text-primary-500 border border-primary-300",
    "hover:bg-primary-100 hover:border-primary-400",
    "disabled:text-primary-200 disabled:border-primary-200 disabled:bg-white",
  ),
  tertiary: cn(
    "bg-white text-neutral-700 border border-neutral-200",
    "hover:bg-neutral-100 hover:border-neutral-300",
    "disabled:text-neutral-300 disabled:border-neutral-200 disabled:bg-white",
  ),
  text: cn(
    "bg-transparent text-neutral-700 px-2",
    "hover:text-primary-500",
    "disabled:text-neutral-300",
  ),
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Rendered after the label — trailing affordance, e.g. an external-link glyph. */
  trailingIcon?: ReactNode;
  /** Rendered before the label. */
  leadingIcon?: ReactNode;
};

/**
 * The classes a Button renders with, exposed so a non-`<button>` element
 * (e.g. `next/link`'s `<a>`) can look like one — used instead of an
 * `asChild`/Slot indirection.
 */
export function buttonClassName({
  variant = "primary",
  size = "lg",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, sizes[size], variants[variant], className);
}

export function Button({
  variant = "primary",
  size = "lg",
  leadingIcon,
  trailingIcon,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

/**
 * The "Watch Video" pattern from the sheet: a text button whose trailing glyph
 * is a filled primary disc. Disabled state fades the disc with the label.
 */
export function WatchButton({
  className,
  children = "Watch Video",
  disabled,
  ...props
}: Omit<ButtonProps, "variant" | "trailingIcon" | "leadingIcon">) {
  return (
    <Button
      variant="text"
      disabled={disabled}
      className={cn("group", className)}
      trailingIcon={
        <span
          className={cn(
            "grid size-5 place-items-center rounded-full transition-colors",
            disabled
              ? "bg-primary-200"
              : "bg-primary-500 group-hover:bg-primary-400",
          )}
        >
          <svg viewBox="0 0 24 24" className="size-3 fill-white" aria-hidden="true">
            <path d="M8.5 5 18.5 12 8.5 19z" />
          </svg>
        </span>
      }
      {...props}
    >
      {children}
    </Button>
  );
}
