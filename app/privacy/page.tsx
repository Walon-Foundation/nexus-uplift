import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nexus Uplift Foundation privacy policy — how we handle your information.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Nexus Uplift Foundation ("we", "us", or "our") is a non-profit health education foundation based in Freetown, Sierra Leone. Our website is nexusuplift.org. You can contact us at hello@nexusuplift.org.`,
  },
  {
    title: "2. What Information We Collect",
    content: `We collect information you provide directly when you:
• Fill out our contact form (name, email address, message)
• Sign up for our newsletter (email address)
• Register as a volunteer (name, email, phone, skills, location)

We do not collect sensitive health data about users. We do not run advertising networks or sell data.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information solely to:
• Respond to your enquiries and messages
• Send you updates about Nexus Uplift programmes (only if you opt in)
• Coordinate volunteer activities
• Improve our website and services

We will never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the following bases:
• Consent — when you opt into communications or fill our contact form
• Legitimate interest — improving our foundation's services and responding to enquiries
We are not subject to GDPR as a Sierra Leonean organisation, but we adopt its principles voluntarily.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses only essential cookies required for the site to function (e.g., theme preference). We do not use tracking cookies, advertising cookies, or third-party analytics at this time. You can clear cookies at any time via your browser settings.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain contact form submissions for up to 2 years, after which they are deleted. Newsletter subscribers are retained until they unsubscribe. Volunteer records are retained for the duration of the volunteer relationship plus 1 year.`,
  },
  {
    title: "7. Your Rights",
    content: `You have the right to:
• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent at any time

To exercise any of these rights, email us at privacy@nexusuplift.org and we will respond within 30 days.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our website is informational and intended for general audiences. We do not knowingly collect personal data from children under 13. If you believe a child has submitted data to us, contact us immediately at hello@nexusuplift.org and we will delete it.`,
  },
  {
    title: "9. Security",
    content: `We use industry-standard security measures to protect your data, including HTTPS encryption. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to prompt notification if a breach occurs.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date below. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-3">Legal</span>
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">
          Last updated: <time dateTime="2026-05-29">29 May 2026</time>
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          This Privacy Policy explains how Nexus Uplift Foundation collects, uses, and protects your personal information when you use our website or contact us.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map(({ title, content }) => (
          <section key={title}>
            <h2 className="text-xl font-bold mb-3 text-foreground">{title}</h2>
            <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line border-l-2 border-primary/30 pl-4">
              {content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 p-6 glass rounded-2xl text-sm text-muted-foreground">
        <strong className="text-foreground">Questions?</strong> Contact our privacy team at{" "}
        <a href="mailto:privacy@nexusuplift.org" className="text-primary hover:underline">
          privacy@nexusuplift.org
        </a>{" "}
        or write to us at Nexus Uplift Foundation, Freetown, Sierra Leone.
      </div>
    </div>
  );
}
