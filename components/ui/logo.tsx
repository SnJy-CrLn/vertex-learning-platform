import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2 3h6l4 14 4-14h6l-8 18h-4L2 3z" fill="var(--color-primary-500)" />
      </svg>
      <span className="font-display text-heading-1 font-bold text-neutral-900">
        Vertex
      </span>
    </div>
  );
}
