import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { SearchIcon, ChevronRightIcon } from "@/components/icons";

const fieldBase =
  "h-11 w-full rounded-md border border-neutral-200 bg-white px-4 text-body text-neutral-900 placeholder:text-neutral-500 outline-none transition-colors focus:border-primary-400 disabled:cursor-not-allowed disabled:opacity-40";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Renders the search icon + `⌘K` affordance from the spec's search field. */
  search?: boolean;
}

export function TextInput({ search, className, ...props }: TextInputProps) {
  if (!search) {
    return <input className={cn(fieldBase, className)} {...props} />;
  }

  return (
    <div className="relative">
      <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
      <input
        className={cn(fieldBase, "pl-10 pr-14", className)}
        placeholder={props.placeholder ?? "Search anything..."}
        {...props}
      />
      <kbd className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rounded-xs border border-neutral-200 px-1.5 py-0.5 text-small text-neutral-500">
        ⌘K
      </kbd>
    </div>
  );
}

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement>;

export function SelectInput({ className, children, ...props }: SelectInputProps) {
  return (
    <div className="relative">
      <select
        className={cn(fieldBase, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <ChevronRightIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-neutral-500" />
    </div>
  );
}
