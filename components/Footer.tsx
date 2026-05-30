import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";

const footerLinks = {
  Foundation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#topics", label: "Health Topics" },
    { href: "/#mission", label: "Our Mission" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  Connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "mailto:hello@nexusuplift.org", label: "hello@nexusuplift.org" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size={28} />
              <span className="font-semibold text-base text-foreground">Nexus Uplift</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering kids through science-based health education.
              Removing superstition, one child at a time.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-xs text-foreground mb-4 uppercase tracking-widest">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus Uplift Foundation. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Freetown, Sierra Leone
          </p>
        </div>
      </div>
    </footer>
  );
}
