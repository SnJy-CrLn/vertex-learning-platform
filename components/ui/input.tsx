import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon, SearchIcon } from "@/components/icons";

/**
 * 08 — Inputs
 *
 * Field specs: height 44px, radius 12px, border 1px solid Neutral 200,
 * padding 0 16px, focus border Primary 400.
 */

const fieldBase =
  "h-11 w-full rounded-md border border-neutral-200 bg-white px-4 text-body " +
  "text-neutral-900 placeholder:text-neutral-500 transition-colors " +
  "hover:border-neutral-300 focus:border-primary-400 focus:outline-none " +
  "disabled:bg-neutral-100 disabled:text-neutral-300";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Leading glyph inside the field, e.g. a search icon. */
  icon?: ReactNode;
  /** Trailing hint, e.g. a keyboard shortcut. */
  hint?: ReactNode;
};

export function TextField({ icon, hint, className, ...props }: TextFieldProps) {
  return (
    <div className="relative">
      {icon ? (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 [&>svg]:size-4">
          {icon}
        </span>
      ) : null}
      <input
        className={cn(fieldBase, !!icon && "pl-10", !!hint && "pr-14", className)}
        {...props}
      />
      {hint ? (
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-small text-neutral-500">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export function SearchField(props: Omit<TextFieldProps, "icon" | "type">) {
  return (
    <TextField
      type="search"
      icon={<SearchIcon />}
      placeholder="Search anything..."
      hint="⌘ K"
      aria-label="Search"
      {...props}
    />
  );
}

export type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({ className, children, ...props }: SelectFieldProps) {
  return (
    <div className="relative">
      <select
        className={cn(fieldBase, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
    </div>
  );
}

export function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-small font-medium text-neutral-700"
    >
      {children}
    </label>
  );
}
