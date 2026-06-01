"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, Tag, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail,  label: "Email",    value: "hello@nexusuplift.org", href: "mailto:hello@nexusuplift.org" },
  { icon: Phone, label: "Phone",    value: "+232 33 482 361",       href: "tel:+23233482361" },
  { icon: MapPin,label: "Location", value: "Freetown, Sierra Leone", href: "https://maps.google.com/?q=Freetown,+Sierra+Leone" },
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", role: "community-member" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 pb-24 min-h-screen">
      {/* Page header */}
      <section className="border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground mb-5">
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
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-3 gap-8 lg:gap-10">
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
                className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-white/[0.05] border border-border shadow-sm hover:border-primary/40 transition-all duration-200 group"
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

            <div className="p-5 rounded-lg bg-white dark:bg-white/[0.05] border border-border mt-2">
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
            <div className="relative bg-white dark:bg-white/[0.05] rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-8"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Message Sent</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 2 business days.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Form header */}
                  <div className="flex items-center gap-3 px-8 py-5 border-b border-border">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Send us a message</p>
                      <p className="text-xs text-muted-foreground">We respond within 2 business days</p>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/40 dark:bg-white/[0.03] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background dark:focus:bg-white/[0.06] transition-all placeholder:text-muted-foreground/60"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/40 dark:bg-white/[0.03] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background dark:focus:bg-white/[0.06] transition-all placeholder:text-muted-foreground/60"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Role chips */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        I am a&hellip;
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { value: "individual",   label: "Individual" },
                          { value: "educator",     label: "Educator / Healthcare" },
                          { value: "organisation", label: "Organisation" },
                          { value: "media",        label: "Media / Press" },
                          { value: "other",        label: "Other" },
                        ].map(({ value, label }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setForm({ ...form, role: value })}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                              form.role === value
                                ? "bg-primary text-white border-primary "
                                : "bg-muted/60 dark:bg-white/[0.04] border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="What is this about?"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/40 dark:bg-white/[0.03] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background dark:focus:bg-white/[0.06] transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Message <span className="text-primary">*</span>
                        </label>
                        <span className="text-xs text-muted-foreground tabular-nums">
                          {form.message.length} / 1000
                        </span>
                      </div>
                      <textarea
                        required
                        rows={6}
                        maxLength={1000}
                        placeholder="Tell us more about what you have in mind…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/40 dark:bg-white/[0.03] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-background dark:focus:bg-white/[0.06] transition-all placeholder:text-muted-foreground/60 resize-none"
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200/60 dark:border-red-500/20 bg-red-50/80 dark:bg-red-950/20 px-4 py-3">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </div>
                    )}

                    {/* Submit row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Your message goes directly to our team.<br className="hidden sm:block" />
                        We never share your information with third parties.
                      </p>
                      <Button type="submit" size="lg" className="gap-2 shrink-0" disabled={loading}>
                        <Send className="w-4 h-4" />
                        {loading ? "Sending…" : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
