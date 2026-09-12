import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ChevronRightIcon } from "@/components/icons";
import { Logo } from "@/components/ui/logo";

export interface NavLink {
  label: string;
  href: string;
}

export function TopNav({
  links,
  right,
  className,
}: {
  links: NavLink[];
  right?: ReactNode;
  className?: string;
}) {
  const nav = (
    <ul className="flex flex-wrap items-center gap-6">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-body font-medium text-neutral-700 hover:text-neutral-900"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={cn("flex items-center justify-between gap-6", className)}>
      <Logo />
      {nav}
      {right}
    </nav>
  );
}

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav className={cn("flex items-center gap-1.5 text-body", className)} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <a href={item.href} className="text-neutral-500 hover:text-neutral-900">
                {item.label}
              </a>
            ) : (
              <span className={isLast ? "text-neutral-900" : "text-neutral-500"}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-300" />}
          </span>
        );
      })}
    </nav>
  );
}

export interface PaginationProps {
  page: number;
  pageCount: number;
  className?: string;
}

function pageWindow(page: number, pageCount: number): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [1];
  if (page > 3) items.push("ellipsis");
  for (let p = Math.max(2, page - 1); p <= Math.min(pageCount - 1, page + 1); p++) {
    items.push(p);
  }
  if (page < pageCount - 2) items.push("ellipsis");
  if (pageCount > 1) items.push(pageCount);
  return items;
}

export function Pagination({ page, pageCount, className }: PaginationProps) {
  const items = pageWindow(page, pageCount);
  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="Pagination">
      <button
        className="flex h-9 w-9 items-center justify-center rounded-sm text-neutral-500 hover:bg-neutral-100 disabled:opacity-40"
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronRightIcon className="h-4 w-4 rotate-180" />
      </button>
      {items.map((item, i) =>
        item === "ellipsis" ? (
          <span key={`e-${i}`} className="flex h-9 w-9 items-center justify-center text-neutral-500">
            …
          </span>
        ) : (
          <button
            key={item}
            aria-current={item === page ? "page" : undefined}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-sm text-body font-medium",
              item === page
                ? "bg-primary-500 text-white"
                : "text-neutral-700 hover:bg-neutral-100",
            )}
          >
            {item}
          </button>
        ),
      )}
      <button
        className="flex h-9 w-9 items-center justify-center rounded-sm text-neutral-500 hover:bg-neutral-100 disabled:opacity-40"
        disabled={page === pageCount}
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </nav>
  );
}
