import { Zap, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../data/content";

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] pt-16 pb-8">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="mb-4 flex items-center gap-2.5 text-[var(--color-text)] no-underline"
              aria-label="Prysmors — back to top"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-mint)] text-[#06110d]">
                <Zap size={17} strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">Prysmors</span>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Enterprise Decision Intelligence Platform — transforming data into
              strategic decisions through AI-powered analytics and simulation.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
                { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com", Icon: Github, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-dim)] transition-all hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]">
              Quick Links
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]">
              More
            </p>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Developer API", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]"
                  >
                    {item.label}
                    {item.href === "#" ? null : <ArrowUpRight size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-dim)]">
              Sign Up For Newsletter
            </p>
            <p className="mb-4 text-xs text-[var(--color-text-muted)]">
              Get the latest in enterprise AI and decision intelligence — no spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for newsletter"
                className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-xs text-[var(--color-text)] placeholder-[var(--color-text-dim)] outline-none transition-all focus:border-[var(--color-mint)] focus:ring-2 focus:ring-[var(--color-mint)]/15 min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[var(--color-mint)] px-3.5 py-2.5 text-xs font-bold text-[#06110d] transition-transform hover:-translate-y-px"
              >
                Join
              </button>
            </form>

            <div className="mt-6 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">Contact</p>
              <a href={`mailto:${COMPANY.email}`} className="mt-1 block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]">
                {COMPANY.email}
              </a>
              <a href={COMPANY.phoneHref} className="mt-0.5 block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-mint)]">
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
            Founded {COMPANY.founded} · {COMPANY.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
