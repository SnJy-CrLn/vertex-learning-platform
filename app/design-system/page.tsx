import { SpecSection, SpecGrid, SpecLabel, Swatch } from "@/components/spec";
import { Button } from "@/components/ui/button";
import { TextInput, SelectInput } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Status } from "@/components/ui/status";
import { ProgressBar } from "@/components/ui/progress-bar";
import { CourseCard, VideoLessonCard, LessonCard, ResourceCard } from "@/components/ui/card";
import { TopNav, Breadcrumbs, Pagination } from "@/components/ui/navigation";
import { Logo } from "@/components/ui/logo";
import {
  BellIcon,
  BellFilledIcon,
  SearchIcon,
  SearchFilledIcon,
  PlayIcon,
  PlayFilledIcon,
  FileIcon,
  FileFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  BarChartIcon,
  BarChartFilledIcon,
  ClockIcon,
  ClockFilledIcon,
  UserIcon,
  UserFilledIcon,
  ChevronRightIcon,
  ChevronRightFilledIcon,
  EyeIcon,
  GridIcon,
  TargetIcon,
  AccessibleIcon,
} from "@/components/icons";

const primaryScale = [
  { name: "Primary 500", hex: "#F97316" },
  { name: "Primary 400", hex: "#FB923C" },
  { name: "Primary 300", hex: "#FDBA74" },
  { name: "Primary 200", hex: "#FED7AA" },
  { name: "Primary 100", hex: "#FFEEE5" },
];

const neutralScale = [
  { name: "Neutral 900", hex: "#0F172A" },
  { name: "Neutral 700", hex: "#334155" },
  { name: "Neutral 500", hex: "#64748B" },
  { name: "Neutral 300", hex: "#CBD5E1" },
  { name: "Neutral 200", hex: "#E2E8F0" },
  { name: "Neutral 100", hex: "#F1F5F9" },
  { name: "Neutral 50", hex: "#FAFAFC" },
  { name: "White", hex: "#FFFFFF" },
];

const typeScale = [
  { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", use: "Page titles", className: "font-display text-display-1" },
  { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", use: "Section titles", className: "font-display text-display-2" },
  { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", use: "Card titles", className: "text-heading-1 font-semibold" },
  { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", use: "Sub section", className: "text-heading-2 font-semibold" },
  { style: "Heading 3", font: "Inter", size: "18 / 26", weight: "Medium", use: "Small titles", className: "text-heading-3 font-medium" },
  { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", use: "Body copy", className: "text-body-lg" },
  { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", use: "Supporting text", className: "text-body" },
  { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", use: "Captions, meta", className: "text-small" },
];

const spacingSteps = [4, 8, 12, 16, 24, 32, 40, 48, 64];

const radiusSteps = [
  { label: "4px (xs)", className: "rounded-xs" },
  { label: "8px (sm)", className: "rounded-sm" },
  { label: "12px (md)", className: "rounded-md" },
  { label: "16px (lg)", className: "rounded-lg" },
  { label: "24px (xl)", className: "rounded-xl" },
  { label: "Full (circle)", className: "rounded-full" },
];

const shadowSteps = [
  { label: "Sm", value: "0 1px 2px 0 rgba(15, 23, 42, 0.05)", className: "shadow-sm" },
  { label: "Md", value: "0 4px 12px -2px rgba(15, 23, 42, 0.08)", className: "shadow-md" },
  { label: "Lg", value: "0 12px 24px -4px rgba(15, 23, 42, 0.1)", className: "shadow-lg" },
  { label: "Xl", value: "0 20px 40px -8px rgba(15, 23, 42, 0.12)", className: "shadow-xl" },
];

const outlineIcons = [
  { Icon: BellIcon, label: "Bell" },
  { Icon: SearchIcon, label: "Search" },
  { Icon: PlayIcon, label: "Play" },
  { Icon: FileIcon, label: "File" },
  { Icon: BookmarkIcon, label: "Bookmark" },
  { Icon: BarChartIcon, label: "Bar chart" },
  { Icon: ClockIcon, label: "Clock" },
  { Icon: UserIcon, label: "User" },
  { Icon: ChevronRightIcon, label: "Chevron" },
];

const filledIcons = [
  { Icon: BellFilledIcon, label: "Bell" },
  { Icon: SearchFilledIcon, label: "Search" },
  { Icon: PlayFilledIcon, label: "Play" },
  { Icon: FileFilledIcon, label: "File" },
  { Icon: BookmarkFilledIcon, label: "Bookmark" },
  { Icon: BarChartFilledIcon, label: "Bar chart" },
  { Icon: ClockFilledIcon, label: "Clock" },
  { Icon: UserFilledIcon, label: "User" },
  { Icon: ChevronRightFilledIcon, label: "Chevron" },
];

const principles = [
  { Icon: EyeIcon, title: "Clarity First", body: "Every element should communicate clearly." },
  { Icon: GridIcon, title: "Consistency", body: "Use components and patterns consistently across the platform." },
  { Icon: TargetIcon, title: "Focus & Calm", body: "Remove noise and help learners focus on what matters." },
  { Icon: AccessibleIcon, title: "Accessible", body: "Design with accessibility and inclusivity in mind." },
];

export default function DesignSystemPage() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-4 py-12 sm:px-8">
      <header className="rounded-lg bg-primary-100 p-8 sm:p-10">
        <Logo className="mb-6" />
        <h1 className="font-display text-display-1 font-bold text-neutral-900">
          Design System
        </h1>
        <p className="mt-4 max-w-lg text-body-lg text-neutral-700">
          A unified design language for Vertex learning platform. Clean, modern and
          focused on clarity, consistency and intuitive learning experiences.
        </p>
        <p className="mt-6 text-small font-semibold uppercase tracking-wide text-neutral-500">
          Version 1.0 · May 2025
        </p>
      </header>

      {/* 01 Colors */}
      <SpecSection number="01" title="Colors">
        <SpecLabel>Primary</SpecLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {primaryScale.map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
        <SpecLabel><span className="mt-6 block">Neutral</span></SpecLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {neutralScale.map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
      </SpecSection>

      <SpecGrid>
        {/* 02 Typography */}
        <SpecSection number="02" title="Typography">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-display text-display-1 font-bold text-neutral-900">Ag</p>
              <p className="mt-1 text-body font-medium text-neutral-900">Playfair Display</p>
              <p className="text-small text-neutral-500">Elegant · Readable · Timeless</p>
            </div>
            <div>
              <p className="text-display-1 font-bold text-neutral-900">Ag</p>
              <p className="mt-1 text-body font-medium text-neutral-900">Inter</p>
              <p className="text-small text-neutral-500">Clean · Modern · Highly legible</p>
            </div>
          </div>
        </SpecSection>

        {/* 03 Type scale */}
        <SpecSection number="03" title="Type Scale">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-body">
              <thead>
                <tr className="text-small text-neutral-500">
                  <th className="pb-2 pr-3 font-medium">Style</th>
                  <th className="pb-2 pr-3 font-medium">Font</th>
                  <th className="pb-2 pr-3 font-medium">Size / Line Height</th>
                  <th className="pb-2 pr-3 font-medium">Weight</th>
                  <th className="pb-2 font-medium">Use</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row) => (
                  <tr key={row.style} className="border-t border-neutral-100">
                    <td className={`py-2 pr-3 whitespace-nowrap text-neutral-900 ${row.className}`}>
                      {row.style}
                    </td>
                    <td className="py-2 pr-3 whitespace-nowrap text-neutral-500">{row.font}</td>
                    <td className="py-2 pr-3 whitespace-nowrap text-neutral-500">{row.size}</td>
                    <td className="py-2 pr-3 whitespace-nowrap text-neutral-500">{row.weight}</td>
                    <td className="py-2 whitespace-nowrap text-neutral-500">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SpecSection>
      </SpecGrid>

      <SpecGrid>
        {/* 04 Spacing */}
        <SpecSection number="04" title="Spacing System">
          <SpecLabel>Base unit: 4px</SpecLabel>
          <div className="flex flex-wrap items-end gap-4">
            {spacingSteps.map((step) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-xs bg-primary-100"
                  style={{ width: step, height: step }}
                />
                <span className="text-small text-neutral-500">{step}</span>
              </div>
            ))}
          </div>
        </SpecSection>

        {/* 05 Radius & Shadows */}
        <SpecSection number="05" title="Radius & Shadows">
          <SpecLabel>Radius</SpecLabel>
          <div className="mb-6 flex flex-wrap gap-4">
            {radiusSteps.map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <div className={`h-12 w-12 border border-neutral-200 bg-neutral-100 ${r.className}`} />
                <span className="text-small text-neutral-500">{r.label}</span>
              </div>
            ))}
          </div>
          <SpecLabel>Shadows</SpecLabel>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {shadowSteps.map((s) => (
              <div key={s.label} className={`rounded-sm bg-white p-3 ${s.className}`}>
                <p className="text-body font-medium text-neutral-900">{s.label}</p>
                <p className="text-small text-neutral-500">{s.value}</p>
              </div>
            ))}
          </div>
        </SpecSection>
      </SpecGrid>

      <SpecGrid className="lg:grid-cols-3">
        {/* 06 Icons */}
        <SpecSection number="06" title="Icons">
          <SpecLabel>Outline Style</SpecLabel>
          <div className="mb-6 flex flex-wrap gap-4">
            {outlineIcons.map(({ Icon, label }) => (
              <Icon key={label} className="h-6 w-6 text-neutral-900" aria-label={label} />
            ))}
          </div>
          <SpecLabel>Filled Style</SpecLabel>
          <div className="mb-6 flex flex-wrap gap-4">
            {filledIcons.map(({ Icon, label }) => (
              <Icon key={label} className="h-6 w-6 text-neutral-900" aria-label={label} />
            ))}
          </div>
          <SpecLabel>Icon Specs</SpecLabel>
          <ul className="list-disc pl-5 text-body text-neutral-500">
            <li>24x24px grid</li>
            <li>2px stroke width (outline)</li>
            <li>Rounded line caps</li>
            <li>Consistent optical balance</li>
          </ul>
        </SpecSection>

        {/* 07 Buttons */}
        <SpecSection number="07" title="Buttons">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Explore Courses</Button>
            <Button variant="tertiary">View Lesson</Button>
            <Button variant="text">Watch Video</Button>
            <Button variant="primary" disabled>Get Started</Button>
            <Button variant="secondary" disabled>Explore Courses</Button>
            <Button variant="tertiary" disabled>View Lesson</Button>
            <Button variant="text" disabled>Watch Video</Button>
          </div>
          <SpecLabel><span className="mt-6 block">Button Specs</span></SpecLabel>
          <ul className="list-disc pl-5 text-body text-neutral-500">
            <li>Height: 44px (default)</li>
            <li>Padding: 0 16px (lg), 0 12px (md)</li>
            <li>Radius: 12px</li>
            <li>Font: Inter Medium (14-16px)</li>
          </ul>
        </SpecSection>

        {/* 08 Inputs */}
        <SpecSection number="08" title="Inputs">
          <SpecLabel>Search / Text Input</SpecLabel>
          <TextInput search className="mb-6" />
          <SpecLabel>Select</SpecLabel>
          <SelectInput defaultValue="relevant" className="mb-6">
            <option value="relevant">Most Relevant</option>
            <option value="recent">Most Recent</option>
          </SelectInput>
          <SpecLabel>Field Specs</SpecLabel>
          <ul className="list-disc pl-5 text-body text-neutral-500">
            <li>Height: 44px</li>
            <li>Radius: 12px</li>
            <li>Border: 1px solid #E2E8F0</li>
            <li>Padding: 0 16px</li>
            <li>Focus: Border color #FB923C</li>
          </ul>
        </SpecSection>
      </SpecGrid>

      <SpecGrid className="lg:grid-cols-3">
        {/* 09 Badges */}
        <SpecSection number="09" title="Badges / Tags">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-small text-neutral-500">Video</p>
              <Badge variant="video">Video</Badge>
            </div>
            <div>
              <p className="mb-2 text-small text-neutral-500">Lesson</p>
              <Badge variant="lesson">Lesson</Badge>
            </div>
            <div>
              <p className="mb-2 text-small text-neutral-500">Popular</p>
              <Badge variant="popular">Popular</Badge>
            </div>
          </div>
        </SpecSection>

        {/* 10 Status */}
        <SpecSection number="10" title="Status / Indicators">
          <div className="flex flex-col gap-4">
            <Status kind="in-progress" />
            <Status kind="completed" />
            <Status kind="now-playing" />
            <Status kind="locked" />
          </div>
        </SpecSection>

        {/* 11 Progress bar */}
        <SpecSection number="11" title="Progress Bar">
          <ProgressBar value={35} label="35% complete" />
        </SpecSection>
      </SpecGrid>

      {/* 12 Cards */}
      <SpecSection number="12" title="Cards">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <SpecLabel>Course Card</SpecLabel>
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
            <SpecLabel>Lesson Card (Video)</SpecLabel>
            <VideoLessonCard
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              lessonLabel="Lesson 5.1"
              timestamp="12:45"
            />
          </div>
          <div>
            <SpecLabel>Lesson Card (Lesson)</SpecLabel>
            <LessonCard
              title="Data Fetching & Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              moduleLabel="Module 5"
            />
          </div>
          <div>
            <SpecLabel>Resource Card</SpecLabel>
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              meta="PDF · 1.2 MB"
            />
          </div>
        </div>
      </SpecSection>

      {/* 13 Navigation */}
      <SpecSection number="13" title="Navigation">
        <div className="flex flex-col gap-6">
          <TopNav links={[{ label: "Courses", href: "#" }, { label: "My Learning", href: "#" }]} />
          <div>
            <SpecLabel>Breadcrumbs</SpecLabel>
            <Breadcrumbs
              items={[
                { label: "All Courses", href: "#" },
                { label: "Next.js for Production", href: "#" },
                { label: "Data Fetching & Caching" },
              ]}
            />
          </div>
          <div>
            <SpecLabel>Pagination</SpecLabel>
            <Pagination page={1} pageCount={8} />
          </div>
        </div>
      </SpecSection>

      {/* 14 Principles */}
      <SpecSection number="14" title="Principles">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-2">
              <Icon className="h-6 w-6 text-neutral-700" />
              <p className="text-body font-medium text-neutral-900">{title}</p>
              <p className="text-body text-neutral-500">{body}</p>
            </div>
          ))}
        </div>
      </SpecSection>
    </div>
  );
}
