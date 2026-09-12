import Link from "next/link";
import { VertexLogo } from "@/components/ui/logo";
import { buttonClassName } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center">
      <VertexLogo wordmarkClassName="text-heading-1" />
      <div className="max-w-md">
        <h1 className="font-display text-display-2 tracking-tight text-neutral-900">
          Vertex
        </h1>
        <p className="mt-3 text-body-lg text-neutral-500">
          A unified design language for the Vertex learning platform.
        </p>
      </div>
      <Link href="/design-system" className={buttonClassName()}>
        View Design System
      </Link>
    </main>
  );
}
