import { Panel, SpecList, SubLabel } from "@/components/spec";
import { VertexLogo } from "@/components/ui/logo";
import { Button, WatchButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FieldLabel, SearchField, SelectField } from "@/components/ui/input";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusIndicator, statusKinds } from "@/components/ui/status";
import {
  CourseCard,
  LessonCard,
  ResourceCard,
  VideoLessonCard,
} from "@/components/ui/card";
import { Breadcrumbs, Navbar, Pagination } from "@/components/ui/navigation";
import {
  AccessibilityIcon,
  ExternalLinkIcon,
  EyeIcon,
  GridIcon,
  TargetIcon,
  filledIconSet,
  outlineIconSet,
} from "@/components/icons";
import {
  neutralScale,
  primaryScale,
  radiusScale,
  shadowScale,
  spacingScale,
  typeScale,
  type Swatch,
} from "@/lib/tokens";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Design System",
  description:
    "Colors, typography, spacing, components and icons for the Vertex learning platform.",
};

function ColorChip({ swatch }: { swatch: Swatch }) {
  return (
    <li>
      <div
        className={swatch.bordered ? "h-14 rounded-sm border border-neutral-200" : "h-14 rounded-sm"}
        style={{ backgroundColor: swatch.hex }}
      />
      <p className="mt-2 text-small font-medium text-neutral-700">{swatch.name}</p>
      <p className="text-small text-neutral-500">{swatch.hex}</p>
    </li>
  );
}

const principles = [
  {
    Icon: EyeIcon,
    title: "Clarity First",
    body: "Every element should communicate clearly.",
  },
  {
    Icon: GridIcon,
    title: "Consistency",
    body: "Use components and patterns consistently across the platform.",
  },
  {
    Icon: TargetIcon,
    title: "Focus & Calm",
    body: "Remove noise and help learners focus on what matters.",
  },
  {
    Icon: AccessibilityIcon,
    title: "Accessible",
    body: "Design with accessibility and inclusivity in mind.",
  },
];

const buttonRows = [
  { state: "Default", disabled: false, className: "" },
  { state: "Hover", disabled: false, className: "" },
  { state: "Disabled", disabled: true, className: "" },
] as const;

export default function DesignSystemPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:py-12">
      <div className="grid gap-4">
        {/* --- Masthead + 01 Colors ---------------------------------------- */}
        <div className="grid gap-4 lg:grid-cols-[1fr_1.7fr]">
          <Panel className="flex flex-col justify-between gap-8">
            <div>
              <VertexLogo wordmarkClassName="text-heading-1" />
              <h1 className="mt-8 font-display text-display-1 tracking-tight text-neutral-900">
                Design System
              </h1>
              <p className="mt-4 max-w-sm text-body-lg text-neutral-500">
                A unified design language for Vertex learning platform. Clean,
                modern and focused on clarity, consistency and intuitive
                learning experiences.
              </p>
            </div>
            <p className="ds-eyebrow">
              Version 1.0 <span className="text-neutral-300">•</span> May 2025
            </p>
          </Panel>

          <Panel number="01" title="Colors">
            <SubLabel>Primary</SubLabel>
            <ul className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {primaryScale.map((s) => (
                <ColorChip key={s.name} swatch={s} />
              ))}
            </ul>
            <SubLabel className="mt-6">Neutral</SubLabel>
            <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {neutralScale.map((s) => (
                <ColorChip key={s.name} swatch={s} />
              ))}
            </ul>
          </Panel>
        </div>

        {/* --- 02 Typography + 03 Type scale -------------------------------- */}
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <Panel number="02" title="Typography">
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <span className="font-display text-display-1 leading-none text-neutral-900">
                  Ag
                </span>
                <div>
                  <p className="text-heading-3 text-neutral-900">
                    Playfair Display
                  </p>
                  <p className="mt-1 text-body text-neutral-500">
                    Elegant <span className="text-primary-300">•</span> Readable{" "}
                    <span className="text-primary-300">•</span> Timeless
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-display-1 leading-none font-bold text-neutral-900">
                  Ag
                </span>
                <div>
                  <p className="text-heading-3 text-neutral-900">Inter</p>
                  <p className="mt-1 text-body text-neutral-500">
                    Clean <span className="text-primary-300">•</span> Modern{" "}
                    <span className="text-primary-300">•</span> Highly legible
                  </p>
                </div>
              </div>
            </div>
          </Panel>

          <Panel number="03" title="Type scale">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-body">
                <thead>
                  <tr className="text-small text-neutral-500">
                    <th scope="col" className="pb-3 font-normal">Style</th>
                    <th scope="col" className="pb-3 font-normal">Font</th>
                    <th scope="col" className="pb-3 font-normal">Size / Line Height</th>
                    <th scope="col" className="pb-3 font-normal">Weight</th>
                    <th scope="col" className="pb-3 font-normal">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {typeScale.map((row) => (
                    <tr key={row.style} className="align-middle">
                      <td className="py-1.5 pr-4 font-medium text-neutral-900">
                        {row.style}
                      </td>
                      <td className="py-1.5 pr-4 text-neutral-500">{row.font}</td>
                      <td className="py-1.5 pr-4 text-neutral-500">{row.size}</td>
                      <td className="py-1.5 pr-4 text-neutral-500">{row.weight}</td>
                      <td className="py-1.5 text-neutral-500">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        {/* --- 04 Spacing + 05 Radius & shadows ----------------------------- */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel number="04" title="Spacing system">
            <p className="mb-6 text-body text-neutral-700">Base unit: 4px</p>
            <ul className="flex flex-wrap items-end gap-4">
              {spacingScale.map((s) => (
                <li key={s.px} className="text-center">
                  <div
                    className="mx-auto rounded-xs bg-primary-200"
                    style={{ width: s.px, height: s.px }}
                  />
                  <p className="mt-3 text-small font-medium text-neutral-700">
                    {s.px}
                  </p>
                  <p className="text-small text-neutral-500">({s.rem})</p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel number="05" title="Radius & shadows">
            <SubLabel>Radius</SubLabel>
            <ul className="flex flex-wrap gap-4">
              {radiusScale.map((r) => (
                <li key={r.name} className="text-center">
                  <div
                    className={`size-12 border border-neutral-200 bg-white ${r.className}`}
                  />
                  <p className="mt-2 text-small font-medium text-neutral-700">
                    {r.label}
                  </p>
                  <p className="text-small text-neutral-500">({r.name})</p>
                </li>
              ))}
            </ul>

            <SubLabel className="mt-6">Shadows</SubLabel>
            <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {shadowScale.map((s) => (
                <li
                  key={s.name}
                  className={`rounded-md bg-white p-3 ${s.className}`}
                >
                  <p className="text-body font-medium text-neutral-900">{s.name}</p>
                  <p className="mt-2 text-small leading-4 text-neutral-500">
                    {s.value}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* --- 06 Icons + 07 Buttons + 08 Inputs ---------------------------- */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel number="06" title="Icons">
            <SubLabel>Outline Style</SubLabel>
            <ul className="flex flex-wrap gap-4 text-neutral-900">
              {outlineIconSet.map(({ name, Icon }) => (
                <li key={name} title={name}>
                  <Icon className="size-5" />
                  <span className="sr-only">{name}</span>
                </li>
              ))}
            </ul>

            <SubLabel className="mt-6">Filled Style</SubLabel>
            <ul className="flex flex-wrap gap-4 text-neutral-900">
              {filledIconSet.map(({ name, Icon }) => (
                <li key={name} title={name}>
                  <Icon className="size-5" />
                  <span className="sr-only">{name}</span>
                </li>
              ))}
            </ul>

            <SpecList
              className="mt-6"
              title="Icon Specs"
              items={[
                "24×24px grid",
                "2px stroke width (outline)",
                "Rounded line caps",
                "Consistent optical balance",
              ]}
            />
          </Panel>

          <Panel number="07" title="Buttons">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px] text-left">
                <thead>
                  <tr className="text-small text-neutral-500">
                    <th scope="col" className="pb-3 font-normal" />
                    <th scope="col" className="pb-3 font-normal">Primary</th>
                    <th scope="col" className="pb-3 font-normal">Secondary</th>
                    <th scope="col" className="pb-3 font-normal">Tertiary</th>
                    <th scope="col" className="pb-3 font-normal">Text</th>
                  </tr>
                </thead>
                <tbody>
                  {buttonRows.map((row) => {
                    // The "Hover" row shows the hover skin at rest so the sheet
                    // can document it without requiring a pointer.
                    const hover = row.state === "Hover";
                    return (
                      <tr key={row.state}>
                        <th
                          scope="row"
                          className="py-2 pr-4 text-left text-small font-normal text-neutral-500"
                        >
                          {row.state}
                        </th>
                        <td className="py-2 pr-3">
                          <Button
                            size="md"
                            disabled={row.disabled}
                            className={hover ? "bg-primary-400" : undefined}
                          >
                            Get Started
                          </Button>
                        </td>
                        <td className="py-2 pr-3">
                          <Button
                            variant="secondary"
                            size="md"
                            disabled={row.disabled}
                            className={
                              hover ? "bg-primary-100 border-primary-400" : undefined
                            }
                          >
                            Explore Courses
                          </Button>
                        </td>
                        <td className="py-2 pr-3">
                          <Button
                            variant="tertiary"
                            size="md"
                            disabled={row.disabled}
                            className={
                              hover ? "bg-neutral-100 border-neutral-300" : undefined
                            }
                            trailingIcon={<ExternalLinkIcon className="size-4" />}
                          >
                            View Lesson
                          </Button>
                        </td>
                        <td className="py-2">
                          <WatchButton
                            size="md"
                            disabled={row.disabled}
                            className={hover ? "text-primary-500" : undefined}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <SpecList
              className="mt-6"
              title="Button Specs"
              items={[
                "Height: 44px (default)",
                "Padding: 0 16px (lg), 0 12px (md)",
                "Radius: 12px",
                "Font: Inter Medium (14–16px)",
              ]}
            />
          </Panel>

          <Panel number="08" title="Inputs">
            <FieldLabel htmlFor="ds-search">Search / Text Input</FieldLabel>
            <SearchField id="ds-search" />

            <div className="mt-6">
              <FieldLabel htmlFor="ds-select">Select</FieldLabel>
              <SelectField id="ds-select" defaultValue="relevant">
                <option value="relevant">Most Relevant</option>
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
              </SelectField>
            </div>

            <SpecList
              className="mt-6"
              title="Field Specs"
              items={[
                "Height: 44px",
                "Radius: 12px",
                "Border: 1px solid #E2E8F0",
                "Padding: 0 16px",
                "Focus: Border color #FB923C",
              ]}
            />
          </Panel>
        </div>

        {/* --- 09 Badges + 10 Status + 11 Progress -------------------------- */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel number="09" title="Badges / Tags">
            <div className="flex flex-wrap gap-10">
              <div>
                <SubLabel>Video</SubLabel>
                <Badge tone="video">Video</Badge>
              </div>
              <div>
                <SubLabel>Lesson</SubLabel>
                <Badge tone="lesson">Lesson</Badge>
              </div>
              <div>
                <SubLabel>Popular</SubLabel>
                <Badge tone="popular">Popular</Badge>
              </div>
            </div>
          </Panel>

          <Panel number="10" title="Status / Indicators">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {statusKinds.map((kind) => (
                <li key={kind}>
                  <StatusIndicator status={kind} />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel number="11" title="Progress bar">
            <ProgressBar value={35} />
          </Panel>
        </div>

        {/* --- 12 Cards ----------------------------------------------------- */}
        <Panel number="12" title="Cards">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <SubLabel>Course Card</SubLabel>
              <CourseCard
                initial="N"
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modules="12 modules"
              />
            </div>
            <div>
              <SubLabel>Lesson Card (Video)</SubLabel>
              <VideoLessonCard
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lesson="Lesson 5.1"
                duration="12:45"
                resumeAt="12:45"
              />
            </div>
            <div>
              <SubLabel>Lesson Card (Lesson)</SubLabel>
              <LessonCard
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                module="Module 5"
              />
            </div>
            <div>
              <SubLabel>Resource Card</SubLabel>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileType="PDF"
                fileSize="1.2 MB"
              />
            </div>
          </div>
        </Panel>

        {/* --- 13 Navigation ------------------------------------------------ */}
        <Panel number="13" title="Navigation">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <Navbar
              items={[
                { label: "Courses", href: "/courses" },
                { label: "My Learning", href: "/my-learning" },
              ]}
              currentHref="/courses"
            />

            <div>
              <SubLabel>Breadcrumbs</SubLabel>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "/courses" },
                  { label: "Next.js for Production", href: "/courses/nextjs" },
                  {
                    label: "Data Fetching & Caching",
                    href: "/courses/nextjs/data-fetching",
                  },
                ]}
              />
            </div>

            <div>
              <SubLabel>Pagination</SubLabel>
              <Pagination page={1} totalPages={8} />
            </div>
          </div>
        </Panel>

        {/* --- 14 Principles ------------------------------------------------ */}
        <Panel number="14" title="Principles">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ Icon, title, body }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon className="size-6 shrink-0 text-neutral-700" />
                <div>
                  <h3 className="text-body font-semibold text-neutral-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-small text-neutral-500">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </main>
  );
}
