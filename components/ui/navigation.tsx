import Link from "next/link";
import { cn } from "@/lib/cn";
import { VertexLogo } from "@/components/ui/logo";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

/**
 * 13 — Navigation
 *
 * Navbar, breadcrumbs and pagination. The current item is marked by color
 * *and* by `aria-current`, never by color alone.
 */

export type NavItem = { label: string; href: string };

export function Navbar({
  items,
  currentHref,
  className,
}: {
  items: NavItem[];
  currentHref?: string;
  className?: string;
}) {
  return (
    <nav
      aria-label="Main"
      className={cn("flex items-center gap-8 text-body", className)}
    >
      <Link href="/" className="rounded-xs">
        <VertexLogo wordmarkClassName="text-heading-3 font-bold" />
      </Link>
      <ul className="flex items-center gap-6">
        {items.map((item) => {
          const current = item.href === currentHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "font-medium transition-colors",
                  current
                    ? "text-primary-500"
                    : "text-neutral-500 hover:text-neutral-900",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Breadcrumbs({
  items,
  className,
}: {
  /** The last item is rendered as the current page and is not a link. */
  items: NavItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-body">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-medium text-neutral-900">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              )}
              {last ? null : (
                <ChevronRightIcon className="size-3.5 text-neutral-300" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const pageButton =
  "grid size-8 place-items-center rounded-sm text-body transition-colors";

export function Pagination({
  page,
  totalPages,
  className,
}: {
  page: number;
  totalPages: number;
  className?: string;
}) {
  // Show the first three pages, then an ellipsis, then the last — enough to
  // orient the reader without turning navigation into a wall of numbers.
  const pages: (number | "ellipsis")[] =
    totalPages <= 4
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [1, 2, 3, "ellipsis", totalPages];

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        aria-label="Previous page"
        className={cn(
          pageButton,
          "text-neutral-500 hover:bg-neutral-100 disabled:text-neutral-300 disabled:hover:bg-transparent",
        )}
      >
        <ChevronLeftIcon className="size-4" />
      </button>
      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            aria-hidden="true"
            className={cn(pageButton, "text-neutral-500")}
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === page ? "page" : undefined}
            aria-label={`Page ${p}`}
            className={cn(
              pageButton,
              p === page
                ? "border border-primary-300 bg-primary-100 font-medium text-primary-500"
                : "text-neutral-700 hover:bg-neutral-100",
            )}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page >= totalPages}
        aria-label="Next page"
        className={cn(
          pageButton,
          "text-neutral-500 hover:bg-neutral-100 disabled:text-neutral-300 disabled:hover:bg-transparent",
        )}
      >
        <ChevronRightIcon className="size-4" />
      </button>
    </nav>
  );
}
