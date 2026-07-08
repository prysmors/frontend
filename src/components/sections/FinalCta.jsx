import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../hooks/useReveal";

export default function FinalCta() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(ellipse, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-px relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            Ready to See Prysmors in Action?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Request a guided platform demo tailored to your industry — no commitment required.
          </p>

          <div className="mt-10 flex justify-center">
            <motion.a
              href="#contact"
              onClick={scrollTo("#contact")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-[var(--color-mint)] px-8 py-4 text-base font-bold text-[#06110d] shadow-[0_0_50px_rgba(39,255,191,0.35)]"
            >
              Request a Platform Demo
              <ArrowUpRight size={18} aria-hidden="true" />
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-dim)]">
            <a href="#contact" onClick={scrollTo("#contact")} className="hover:text-[var(--color-mint)]">
              Talk to Our Team
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-[var(--color-mint)]">
              Download Platform Overview
            </a>
            <span aria-hidden="true">·</span>
            <a href="#dashboard" onClick={scrollTo("#dashboard")} className="hover:text-[var(--color-mint)]">
              Explore the Dashboard
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
