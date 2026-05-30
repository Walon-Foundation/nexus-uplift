import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { MythBuster } from "@/components/sections/MythBuster";
import { HealthTopics } from "@/components/sections/HealthTopics";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmailCapture } from "@/components/sections/EmailCapture";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <MythBuster />
      <HealthTopics />
      <Stats />
      <Testimonials />
      <EmailCapture />
      <CTA />
    </>
  );
}
