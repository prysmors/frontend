import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown, ArrowUp } from "lucide-react";

export default function LegalPageLayout({ title, lastUpdated, sections, children }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
      <Header />

      <div
        className="relative pt-20"
        style={{ minHeight: "calc(100vh - var(--header-h))" }}
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full bg-[var(--color-mint)]/[0.03] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-[var(--color-mint)]/[0.02] blur-[100px]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:px-8 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-24 space-y-1" aria-label="Document sections">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                    activeId === s.id
                      ? "bg-[var(--color-mint)]/10 text-[var(--color-mint)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]/50"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                      activeId === s.id
                        ? "bg-[var(--color-mint)] shadow-[0_0_8px_var(--color-mint)]"
                        : "bg-[var(--color-border)] group-hover:bg-[var(--color-text-muted)]"
                    }`}
                  />
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile nav dropdown */}
          <div className="lg:hidden fixed bottom-6 left-4 right-4 z-40">
            <div className="relative">
              <button
                onClick={() => setMobileNavOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 px-4 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-mint)]" />
                  Jump to section
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[var(--color-text-muted)] transition-transform duration-200 ${
                    mobileNavOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileNavOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 shadow-[0_-8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                  <nav className="max-h-[50vh] overflow-y-auto p-2" aria-label="Document sections">
                    {sections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setMobileNavOpen(false);
                          setTimeout(() => scrollToSection(s.id), 150);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-150 ${
                          activeId === s.id
                            ? "bg-[var(--color-mint)]/10 text-[var(--color-mint)]"
                            : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            activeId === s.id
                              ? "bg-[var(--color-mint)]"
                              : "bg-[var(--color-border)]"
                          }`}
                        />
                        {s.label}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <main className="min-w-0 flex-1 max-w-4xl">
            <h1 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl font-display mb-2">
              {title}
            </h1>
            <p className="text-sm text-[var(--color-text-dim)] mb-8">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-0">
              {children}
            </div>

            {/* Back to top */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-5 py-2.5 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-200 hover:border-[var(--color-mint)]/40 hover:text-[var(--color-mint)] hover:shadow-[0_0_24px_-6px_rgba(39,255,191,0.15)]"
              >
                <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                Back to top
              </button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="pt-8 pb-2 scroll-mt-28">
      <h2 className="text-xl font-semibold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2 mb-4 font-display">
        {title}
      </h2>
      <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function DefinitionBlock({ terms }) {
  return (
    <div className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-5 space-y-3">
      {terms.map(([term, definition]) => (
        <div key={term}>
          <span className="font-semibold text-[var(--color-text)]">{term}</span>
          <span className="text-[var(--color-text-muted)]">: {definition}</span>
        </div>
      ))}
    </div>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="list-none space-y-2 pl-0">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
