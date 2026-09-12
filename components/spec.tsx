import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SpecSection({
  number,
  title,
  children,
  className,
}: {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-lg border border-neutral-200 bg-white p-6", className)}>
      <div className="mb-5 flex items-baseline gap-2">
        <span className="ds-eyebrow text-primary-500">{number}</span>
        <span className="ds-eyebrow">{title}</span>
      </div>
      {children}
    </section>
  );
}

export function SpecGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2", className)}>{children}</div>;
}

export function SpecLabel({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-small font-semibold uppercase tracking-wide text-neutral-500">{children}</p>;
}

export function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-sm border border-neutral-200"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="text-body font-medium text-neutral-900">{name}</p>
        <p className="text-small text-neutral-500">{hex}</p>
      </div>
    </div>
  );
}
