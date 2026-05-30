"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@nexusuplift.org", href: "mailto:hello@nexusuplift.org" },
  { icon: Phone, label: "Phone", value: "+232 76 000 0000", href: "tel:+23276000000" },
  { icon: MapPin, label: "Location", value: "Freetown, Sierra Leone", href: "#" },
];

const howWeHelp = [
  "Invite us to your school or community",
  "Volunteer as a health educator",
  "Partner with us as an organisation",
  "Donate to support our work",
  "Media and press enquiries",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", role: "community-member" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-24 min-h-screen">
      {/* Page header */}
      <section className="border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Whether you want to volunteer, partner with us, invite us to your school, or just say
              hello — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">Contact Details</h2>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-black/[0.07] dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-primary/40 hover:shadow-[0_6px_24px_rgba(232,93,63,0.08)] transition-all duration-200 group"
              >
                <div className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-foreground/60" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </a>
            ))}

            <div className="p-5 rounded-lg bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-black/[0.07] dark:border-white/[0.07] shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.2)] mt-2">
              <h3 className="font-semibold text-sm text-foreground mb-3">How Can We Help?</h3>
              <ul className="space-y-2">
                {howWeHelp.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/70 dark:bg-white/[0.04] backdrop-blur-md rounded-xl border border-black/[0.07] dark:border-white/[0.08] shadow-[0_4px_28px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_4px_28px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 2 business days.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">I am a&hellip;</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    >
                      <option value="community-member">Community Member</option>
                      <option value="parent">Parent / Guardian</option>
                      <option value="teacher">Teacher / Educator</option>
                      <option value="healthcare">Healthcare Professional</option>
                      <option value="organisation">Organisation / NGO</option>
                      <option value="journalist">Journalist / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us more..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
