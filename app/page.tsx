import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { HealthTopics } from "@/components/sections/HealthTopics";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <HealthTopics />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
