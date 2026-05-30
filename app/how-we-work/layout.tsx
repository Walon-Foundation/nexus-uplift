import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our six-step methodology for delivering science-based health education — from finding the right communities to transparent impact reporting.",
};

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
