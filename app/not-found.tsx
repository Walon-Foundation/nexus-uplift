import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HeartPulse } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
          <HeartPulse className="w-8 h-8 text-primary" />
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          404 — Page Not Found
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
          This page does not exist.
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          The page you are looking for may have been moved, renamed, or never existed.
          The Nexus Uplift website is small and easy to navigate — let us help you find
          what you need.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
