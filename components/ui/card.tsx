import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import {
  BarChartIcon,
  ClockIcon,
  FileIcon,
  ExternalLinkIcon,
  PlayFilledIcon,
} from "@/components/icons";

function CardShell({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-white p-4 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface CourseCardProps {
  initial: ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
  className?: string;
}

export function CourseCard({
  initial,
  iconBg = "bg-neutral-900",
  title,
  description,
  level,
  duration,
  modules,
  className,
}: CourseCardProps) {
  return (
    <CardShell className={className}>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm font-display text-heading-3 font-bold text-white",
            iconBg,
          )}
        >
          {initial}
        </div>
        <div className="min-w-0">
          <h3 className="text-heading-3 font-medium text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-small text-neutral-500">
        <span className="inline-flex items-center gap-1">
          <BarChartIcon className="h-3.5 w-3.5" />
          {level}
        </span>
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="h-3.5 w-3.5" />
          {duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <FileIcon className="h-3.5 w-3.5" />
          {modules}
        </span>
      </div>
    </CardShell>
  );
}

export interface VideoLessonCardProps {
  title: string;
  description: string;
  lessonLabel: string;
  timestamp: string;
  className?: string;
}

export function VideoLessonCard({
  title,
  description,
  lessonLabel,
  timestamp,
  className,
}: VideoLessonCardProps) {
  return (
    <CardShell className={className}>
      <Badge variant="video">Video</Badge>
      <h3 className="mt-2 text-heading-3 font-medium text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-small text-neutral-500">
          {lessonLabel} · {timestamp}
        </span>
        <button className="inline-flex items-center gap-1.5 text-body font-medium text-primary-500 hover:text-primary-400">
          <PlayFilledIcon className="h-4 w-4" />
          Watch from {timestamp}
        </button>
      </div>
    </CardShell>
  );
}

export interface LessonCardProps {
  title: string;
  description: string;
  moduleLabel: string;
  className?: string;
}

export function LessonCard({ title, description, moduleLabel, className }: LessonCardProps) {
  return (
    <CardShell className={className}>
      <Badge variant="lesson">Lesson</Badge>
      <h3 className="mt-2 text-heading-3 font-medium text-neutral-900">{title}</h3>
      <p className="mt-1 text-body text-neutral-500">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-small text-neutral-500">{moduleLabel}</span>
        <button className="inline-flex items-center gap-1.5 text-body font-medium text-primary-500 hover:text-primary-400">
          View lesson
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </CardShell>
  );
}

export interface ResourceCardProps {
  title: string;
  description: string;
  meta: string;
  className?: string;
}

export function ResourceCard({ title, description, meta, className }: ResourceCardProps) {
  return (
    <CardShell className={cn("flex items-start justify-between gap-3", className)}>
      <div className="flex items-start gap-3">
        <FileIcon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
        <div>
          <h3 className="text-heading-3 font-medium text-neutral-900">{title}</h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
          <span className="mt-2 block text-small text-neutral-500">{meta}</span>
        </div>
      </div>
      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-neutral-500" />
    </CardShell>
  );
}
