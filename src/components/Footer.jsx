import { Facebook, Youtube, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS, COMPANY } from "../data/content";
import { logo } from "../assets";

function PinterestIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 20.5 12 11" />
      <path d="M10 14.5c-.7-.5-1.2-1.4-1.2-2.7A5 5 0 0 1 14 6.7c2.6 0 4.5 1.8 4.5 4.3 0 2.9-1.5 5.6-4 5.6-.9 0-1.7-.5-2-1.2" />
    </svg>
  );
}

function XIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  { href: "https://www.facebook.com/Prysmors/", Icon: Facebook, label: "Facebook" },
  { href: "https://x.com/Prysmors", Icon: XIcon, label: "X" },
  { href: "https://www.pinterest.com/prysmors/", Icon: PinterestIcon, label: "Pinterest" },
  { href: "https://www.youtube.com/@Prysmors", Icon: Youtube, label: "YouTube" },
  { href: "https://www.linkedin.com/company/prysmors/", Icon: Linkedin, label: "LinkedIn" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function NavColumn({ items, heading, headingId }) {
  const navigate = useNavigate();
  return (
    <div>
      <p
        id={headingId}
        className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]"
      >
        {heading}
      </p>
      <ul className="space-y-3" aria-labelledby={headingId}>
        {items.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); navigate("/" + link.href); }}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const mid = Math.ceil(NAV_LINKS.length / 2);
  const navCol1 = NAV_LINKS.slice(0, mid);
  const navCol2 = NAV_LINKS.slice(mid);

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] pt-16 pb-8">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.85fr_0.85fr_1.1fr]">
          {/* Brand — spans full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); navigate("/"); }}
              className="mb-4 inline-block text-[var(--color-text)] no-underline"
              aria-label="Prysmors — back to top"
            >
              <img src={logo} alt="Prysmors" className="h-14 w-auto" />
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Enterprise Decision Intelligence Platform, transforming data into
              strategic decisions through AI-powered analytics and simulation.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  aria-disabled={!href}
                  title={!href ? `${label} (coming soon)` : label}
                  onClick={!href ? (e) => e.preventDefault() : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-dim)] transition-all hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)] hover:-translate-y-0.5 ${
                    !href ? "cursor-default opacity-60 hover:translate-y-0 hover:border-[var(--color-border)] hover:text-[var(--color-text-dim)]" : ""
                  }`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — split across two columns with clear section labels */}
          <NavColumn items={navCol1} heading="Quick Links" headingId="footer-quick-links-1" />
          <NavColumn items={navCol2} heading="More Links" headingId="footer-quick-links-2" />

          {/* Legal + Contact */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]">
              Legal
            </p>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); navigate(item.href); }}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-3 mt-8 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]">
              Contact
            </p>
            <div className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/50 p-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
              >
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="mt-1.5 block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border-soft)] pt-7 sm:flex-row">
          <p className="text-xs text-[var(--color-text-dim)]">
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            {COMPANY.address}
          </p>
        </div>
      </div>
    </footer>
  );
}