import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-neutral-50 px-6 py-24 text-center">
      <Logo />
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-display text-display-2 font-bold text-neutral-900">
          Vertex
        </h1>
        <p className="max-w-md text-body-lg text-neutral-500">
          A production-style AI-powered learning platform with intelligent
          content search.
        </p>
      </div>
      <Link href="/design-system">
        <Button variant="primary">View Design System</Button>
      </Link>
    </div>
  );
}
