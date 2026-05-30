import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Nexus Uplift Foundation terms and conditions of use.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Nexus Uplift Foundation website (nexusuplift.org), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.`,
  },
  {
    title: "2. About Nexus Uplift Foundation",
    content: `Nexus Uplift Foundation is a non-profit health education organisation. Our website provides general health education content aimed at children and their caregivers. We are not a medical practice and do not provide individual medical advice or diagnosis.`,
  },
  {
    title: "3. Medical Disclaimer",
    content: `IMPORTANT: The health information on this website is for educational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider for any medical condition. Never disregard professional medical advice or delay seeking it because of something you read on this website.

In an emergency, call your local emergency services immediately.`,
  },
  {
    title: "4. Accuracy of Information",
    content: `We take care to ensure the health information we publish is accurate and up-to-date at the time of publication. However, medical knowledge evolves. We make no warranties about the completeness, accuracy, or reliability of any information on this site.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, icons, and images — is the property of Nexus Uplift Foundation or its content suppliers and is protected by applicable copyright laws.

You may share our educational content for non-commercial purposes with attribution to "Nexus Uplift Foundation". Commercial use requires written permission from us.`,
  },
  {
    title: "6. User Conduct",
    content: `When using our contact form or any interactive features, you agree not to:
• Submit false, misleading, or offensive content
• Impersonate any person or entity
• Attempt to gain unauthorised access to our systems
• Use our platform to distribute spam or malware
• Violate any applicable law or regulation`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites for reference purposes. These links do not constitute endorsement of those sites. We have no control over third-party content and accept no responsibility for it. Please review their privacy policies before sharing information.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by law, Nexus Uplift Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from:
• Your use of, or inability to use, this website
• Any errors or omissions in our content
• Unauthorised access to our systems
• Any third-party conduct on or through our site`,
  },
  {
    title: "9. Volunteer and Partnership Agreements",
    content: `Volunteering or entering a partnership with Nexus Uplift Foundation is subject to separate written agreements. These Terms do not govern those relationships. Contact us at hello@nexusuplift.org for partnership enquiries.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms are governed by the laws of Sierra Leone. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Sierra Leone.`,
  },
  {
    title: "11. Changes to These Terms",
    content: `We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting on this page. The "Last updated" date will reflect when changes were made. Continued use of our website after changes constitutes acceptance.`,
  },
  {
    title: "12. Contact",
    content: `For any questions about these Terms, contact us at hello@nexusuplift.org or write to Nexus Uplift Foundation, Freetown, Sierra Leone.`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-3">Legal</span>
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground text-sm">
          Last updated: <time dateTime="2026-05-29">29 May 2026</time>
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Please read these Terms and Conditions carefully before using the Nexus Uplift website. By using our site you agree to these terms.
        </p>
      </div>

      <div className="p-4 mb-10 rounded-xl border border-amber-500/30 bg-amber-500/10 text-sm text-amber-600 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> Content on this site is for educational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare professional.
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
        <strong className="text-foreground">Questions about these Terms?</strong> Email us at{" "}
        <a href="mailto:hello@nexusuplift.org" className="text-primary hover:underline">
          hello@nexusuplift.org
        </a>
      </div>
    </div>
  );
}
