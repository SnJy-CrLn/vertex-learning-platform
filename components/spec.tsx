import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Layout primitives for the specimen sheet itself. These document the system;
 * they are not part of it, so product screens should not reach for them.
 */

export function Panel({
  number,
  title,
  className,
  children,
}: {
  /** Two-digit section number, e.g. "01". */
  number?: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-neutral-200 bg-white p-6 shadow-sm",
        className,
      )}
    >
      {title ? (
        <header className="mb-6 flex items-baseline gap-3">
          {number ? (
            <span className="text-small font-semibold text-primary-500">
              {number}
            </span>
          ) : null}
          <h2 className="ds-eyebrow">{title}</h2>
        </header>
      ) : null}
      {children}
    </section>
  );
}

export function SubLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3 className={cn("mb-3 text-small font-medium text-neutral-700", className)}>
      {children}
    </h3>
  );
}

export function SpecList({
  title,
  items,
  className,
}: {
  title: string;
  items: ReactNode[];
  className?: string;
}) {
  return (
    <div className={className}>
      <SubLabel>{title}</SubLabel>
      <ul className="space-y-1.5 text-small text-neutral-500">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-neutral-300">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
