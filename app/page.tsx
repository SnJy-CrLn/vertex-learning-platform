import Link from "next/link";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { TopNav } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/input";
import { CourseCard } from "@/components/ui/card";
import {
  BellIcon,
  ArrowRightIcon,
} from "@/components/icons";

const courses = [
  {
    initial: "N",
    iconBg: "bg-neutral-900",
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
  },
  {
    initial: "🐳",
    iconBg: "bg-sky-100",
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
  },
  {
    initial: "TS",
    iconBg: "bg-blue-600",
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
  },
];

const barHeights = [40, 64, 88, 56, 30, 0, 72, 100, 48, 80, 60];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-neutral-50">
      <header className="border-b border-neutral-200 px-6 py-4 sm:px-10">
        <TopNav
          links={[
            { label: "Courses", href: "#" },
            { label: "My Learning", href: "#" },
          ]}
          right={
            <div className="flex items-center gap-4">
              <button
                aria-label="Notifications"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100"
              >
                <BellIcon className="h-5 w-5" />
              </button>
              <Show when="signed-out">
                <div className="flex items-center gap-3">
                  <SignInButton>
                    <button className="text-body font-medium text-neutral-700 hover:text-neutral-900">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <Button>Sign up</Button>
                  </SignUpButton>
                </div>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          }
        />
      </header>

      <section className="border-b border-neutral-200 px-6 py-20 text-center sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-100 px-4 py-1.5 text-small font-semibold uppercase tracking-wide text-primary-500">
            Intelligent Learning
          </span>
          <h1 className="font-display text-display-2 font-bold text-neutral-900 sm:text-display-1">
            Search your learning
            <br />
            in plain English.
          </h1>
          <p className="max-w-md text-body-lg text-neutral-500">
            Vertex understands what you want to learn and finds the exact
            lessons across all your courses.
          </p>
          <Button variant="primary">
            Explore Courses
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <TextInput
            search
            placeholder="Ask anything about your learning..."
            className="mt-4 h-14 rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-heading-1 font-semibold text-neutral-900">
              All Courses
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-body font-medium text-primary-500 hover:text-primary-400"
            >
              View all courses
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-auto overflow-hidden px-6 pb-0 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-center gap-3 border-t border-neutral-200 py-6 text-body text-neutral-500">
          <span className="text-primary-400" aria-hidden="true">
            ★
          </span>
          <span className="mx-auto">New courses and lessons added every week.</span>
        </div>
        <div className="flex h-40 items-end justify-center gap-3" aria-hidden="true">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="w-10 rounded-t-sm bg-gradient-to-t from-primary-300 to-primary-100/0"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
