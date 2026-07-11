import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import { logo } from "../assets";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (href) => (e) => {
    e.preventDefault();
    if (isHome) {
      scrollTo(href);
    } else {
      navigate("/" + href);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      scrollTo("#home");
    } else {
      navigate("/");
    }
  };

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-px flex h-full items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="text-[var(--color-text)] no-underline"
            aria-label="Prysmors — back to top"
          >
            <img src={logo} alt="Prysmors" className="h-14 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-mint)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full bg-[var(--color-mint)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/product"
              className="btn-mint"
            >
              Prys_v2
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-mint)] hover:text-[var(--color-mint)]"
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
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--color-bg)]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "var(--header-h)" }}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { handleNav(link.href)(e); setMenuOpen(false); }}
                className={`flex items-center gap-3 rounded-xl px-4 py-4 text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-mint-deep)] text-[var(--color-mint)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-[var(--color-mint)]" : "bg-[var(--color-border)]"}`}
                />
                {link.label}
              </a>
            );
          })}
          <div className="mt-6 px-4">
            <Link
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="btn-mint w-full justify-center"
            >
              Prys_v2
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
