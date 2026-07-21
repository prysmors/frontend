import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import { logo, favicon } from "../assets";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

function BrandGlyph() {
  return <img src={favicon} alt="" className="h-full w-full object-contain" />;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rawActive, setActiveImmediate, lockNavigation, isNavigatingRef] = useActiveSection(SECTION_IDS);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname === "/product";
  const active = isProductPage ? null : rawActive;
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const cleanHash = location.hash ? location.hash.replace(/^#\/?/, "") : "home";
    setActiveImmediate(cleanHash);

    isNavigatingRef.current = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        const target = document.getElementById(cleanHash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setTimeout(() => {
          if (mountedRef.current) isNavigatingRef.current = false;
        }, 1000);
      }, 60);
    });
  }, [location.pathname, location.hash]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNav = useCallback((href) => (e) => {
    e.preventDefault();
    const cleanHash = href.replace(/^#\/?/, "");

    setActiveImmediate(cleanHash);
    lockNavigation(1000);

    if (location.pathname !== "/") {
      navigate(`/#${cleanHash}`, { replace: false });
    } else {
      window.history.pushState(null, "", `/#${cleanHash}`);
      const target = document.getElementById(cleanHash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location.pathname, navigate, setActiveImmediate, lockNavigation]);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-px flex h-full items-center justify-between gap-6">
          {/* Logo — enlarged, with a soft ambient glow that intensifies on hover */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="group relative flex shrink-0 items-center text-[var(--color-text)] no-underline"
            aria-label="Prysmors — back to top"
          >
            <span
              className="pointer-events-none absolute -inset-3 rounded-full bg-[var(--color-mint)]/0 blur-xl transition-all duration-500 group-hover:bg-[var(--color-mint)]/12"
              aria-hidden="true"
            />
            <img
              src={logo}
              alt="Prysmors"
              className="relative h-16 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-[4.5rem]"
            />
          </a>

          {/* Desktop nav — glass pill capsule, animated active indicator */}
          <nav
            className="relative hidden items-center gap-0.5 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-1 backdrop-blur-md lg:flex"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 xl:px-4 xl:text-[13px] ${
                    isActive
                      ? "text-[var(--color-bg)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-mint)] shadow-[0_0_18px_-2px_var(--color-mint)]"
                      aria-hidden="true"
                    />
                  )}
                  {!isActive && (
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-text)]/0 transition-colors duration-300 hover:bg-[var(--color-text)]/[0.06]"
                      aria-hidden="true"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA — real favicon badge, larger size, no ring */}
          <div className="hidden shrink-0 lg:flex items-center">
            <Link
              to="/product"
              className={`group/cta relative flex items-center gap-3 overflow-hidden rounded-2xl py-1.5 pl-1.5 pr-5 text-[var(--color-text)] transition-all duration-300 ${
                isProductPage
                  ? "bg-gradient-to-r from-[var(--color-mint-deep)] to-[var(--color-mint-deep)] shadow-[0_0_28px_-6px_var(--color-mint)] ring-1 ring-[var(--color-mint)]/40"
                  : "bg-gradient-to-r from-[var(--color-mint-deep)] to-[var(--color-surface)] shadow-[0_0_0_1px_var(--color-border)] hover:shadow-[0_0_28px_-6px_var(--color-mint)]"
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-bg)] transition-transform duration-300 group-hover/cta:scale-105">
                <BrandGlyph />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Prys_v2</span>
              <ArrowUpRight
                size={15}
                className="text-[var(--color-mint)] transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
              <span
                className="pointer-events-none absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/cta:translate-x-[120%]"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 text-[var(--color-text)] backdrop-blur-md transition-all duration-300 hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-50 flex flex-col overflow-y-auto bg-[var(--color-bg)]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-1 flex-col gap-1.5 px-5 pb-10 pt-6 sm:px-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { handleNav(link.href)(e); setMenuOpen(false); }}
                className={`flex items-center gap-3 rounded-xl px-4 py-4 text-base font-semibold transition-all duration-200 min-h-[48px] ${
                  isActive
                    ? "bg-[var(--color-mint-deep)] text-[var(--color-mint)] shadow-[0_0_20px_-8px_var(--color-mint)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[var(--color-mint)] shadow-[0_0_8px_var(--color-mint)]" : "bg-[var(--color-border)]"
                  }`}
                />
                {link.label}
              </a>
            );
          })}
          <div className="mt-4 px-3">
            <Link
              to="/product"
              onClick={() => setMenuOpen(false)}
              className={`relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl py-3 pl-2.5 pr-5 text-[var(--color-text)] min-h-[48px] ${
                isProductPage
                  ? "bg-gradient-to-r from-[var(--color-mint-deep)] to-[var(--color-mint-deep)] shadow-[0_0_20px_-6px_var(--color-mint)] ring-1 ring-[var(--color-mint)]/40"
                  : "bg-gradient-to-r from-[var(--color-mint-deep)] to-[var(--color-surface)] shadow-[0_0_0_1px_var(--color-border)]"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg)]">
                <BrandGlyph />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Prys_v2</span>
              <ArrowUpRight size={15} className="text-[var(--color-mint)]" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}