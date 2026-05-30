"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Dr. Aminata Sesay",
    role: "Founder & Medical Director",
    initials: "AS",
    bio: "Paediatrician with 12 years in community health. Frustrated by preventable deaths caused by health myths, she founded Nexus Uplift to fix that.",
  },
  {
    name: "Ibrahim Koroma",
    role: "Education Lead",
    initials: "IK",
    bio: "Former teacher and curriculum designer. Ibrahim transforms complex medical content into joyful, accessible workshops for children.",
  },
  {
    name: "Fatmata Bangura",
    role: "Community Outreach",
    initials: "FB",
    bio: "Trained social worker with deep ties across 12 communities. Fatmata builds trust and ensures workshops are culturally sensitive.",
  },
  {
    name: "Sorie Kamara",
    role: "Operations & Partnerships",
    initials: "SK",
    bio: "Nonprofit management expert who handles logistics, funding, and partnerships to keep Nexus Uplift running and growing.",
  },
];

const values = [
  { icon: Heart, label: "Compassion", desc: "Every child deserves accurate information about their own body." },
  { icon: Target, label: "Precision", desc: "We never share unverified medical content. Accuracy is non-negotiable." },
  { icon: Eye, label: "Transparency", desc: "We are open about our methods, funding, and outcomes." },
  { icon: Users, label: "Inclusion", desc: "We reach rural and urban communities equally, in local languages." },
];

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Page header */}
      <section className="border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              The Story Behind Nexus Uplift
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We started because a child died from a treatable asthma attack — while the family prayed
              for a spiritual cure. That story is not unique. We exist so it becomes rarer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To equip every child with accurate, science-based health knowledge so they can make informed decisions and reject dangerous medical myths.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "A generation of health-literate children who grow into adults that seek evidence-based care, for themselves and their communities.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border border-l-4 border-l-primary p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Values</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">What We Stand For</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={item}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-2">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Team</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Meet the People Behind the Work</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={item}>
                <div className="bg-card rounded-xl border border-border p-6 hover:shadow-sm transition-all duration-200">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Join Us?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We welcome healthcare professionals, educators, volunteers, and community partners.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
