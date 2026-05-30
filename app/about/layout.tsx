import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Nexus Uplift Foundation — our mission, our team, and why we believe science-based health education can change children's lives in Sierra Leone.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
