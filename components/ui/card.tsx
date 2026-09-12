import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import {
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  LayersIcon,
  PlayCircleFilledIcon,
  SignalIcon,
} from "@/components/icons";

/**
 * 12 — Cards
 *
 * One shell (white, radius 16px, 1px Neutral 200 hairline, shadow on hover),
 * four content shapes built on top of it.
 */

export function CardShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-4",
        "shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      {children}
    </article>
  );
}

function MetaRow({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-neutral-100 pt-3 text-small text-neutral-500">
      {children}
    </div>
  );
}

function MetaItem({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 [&>svg]:size-3.5">
      {icon}
      {children}
    </span>
  );
}

/* --- Course card ---------------------------------------------------------- */

export function CourseCard({
  initial,
  title,
  description,
  level,
  duration,
  modules,
}: {
  /** Single-character course mark shown in the tile. */
  initial: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
}) {
  return (
    <CardShell>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-sm bg-neutral-900 font-display text-body-lg font-bold text-white"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <h3 className="text-heading-3 text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="mt-auto">
        <MetaRow>
          <MetaItem icon={<SignalIcon />}>{level}</MetaItem>
          <MetaItem icon={<ClockIcon />}>{duration}</MetaItem>
          <MetaItem icon={<LayersIcon />}>{modules}</MetaItem>
        </MetaRow>
      </div>
    </CardShell>
  );
}

/* --- Lesson card (video) -------------------------------------------------- */

export function VideoLessonCard({
  title,
  description,
  lesson,
  duration,
  resumeAt,
}: {
  title: string;
  description: string;
  lesson: string;
  duration: string;
  /** Timestamp to resume from; omitted renders a plain "Watch" action. */
  resumeAt?: string;
}) {
  return (
    <CardShell>
      <Badge tone="video" className="self-start">
        Video
      </Badge>
      <h3 className="mt-3 text-heading-3 text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500">{description}</p>
      <div className="mt-auto">
        <MetaRow>
          <MetaItem>
            {lesson} <span className="text-neutral-300">·</span> {duration}
          </MetaItem>
          <button
            type="button"
            className="ml-auto inline-flex items-center gap-1.5 text-small font-medium text-primary-500 transition-colors hover:text-primary-400"
          >
            <PlayCircleFilledIcon className="size-4" />
            {resumeAt ? `Watch from ${resumeAt}` : "Watch lesson"}
          </button>
        </MetaRow>
      </div>
    </CardShell>
  );
}

/* --- Lesson card (reading) ------------------------------------------------ */

export function LessonCard({
  title,
  description,
  module,
}: {
  title: string;
  description: string;
  module: string;
}) {
  return (
    <CardShell>
      <Badge tone="lesson" className="self-start">
        Lesson
      </Badge>
      <h3 className="mt-3 text-heading-3 text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500">{description}</p>
      <div className="mt-auto">
        <MetaRow>
          <MetaItem>{module}</MetaItem>
          <button
            type="button"
            className="ml-auto inline-flex items-center gap-1.5 text-small font-medium text-primary-500 transition-colors hover:text-primary-400"
          >
            View lesson
            <ExternalLinkIcon className="size-3.5" />
          </button>
        </MetaRow>
      </div>
    </CardShell>
  );
}

/* --- Resource card -------------------------------------------------------- */

export function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  href = "#",
}: {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  href?: string;
}) {
  return (
    <CardShell>
      <div className="flex items-start gap-3">
        <FileIcon className="size-6 shrink-0 text-neutral-500" />
        <div className="min-w-0">
          <h3 className="text-heading-3 text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="mt-auto">
        <MetaRow>
          <MetaItem>
            {fileType} <span className="text-neutral-300">·</span> {fileSize}
          </MetaItem>
          <a
            href={href}
            className="ml-auto text-primary-500 transition-colors hover:text-primary-400"
            aria-label={`Open ${title}`}
          >
            <ExternalLinkIcon className="size-4" />
          </a>
        </MetaRow>
      </div>
    </CardShell>
  );
}
