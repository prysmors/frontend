import { Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SiteBackground from "./SiteBackground";
import Header from "./Header";
import Footer from "./Footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-text)" }}>
      <SiteBackground />
      <Header />
      <main className="relative flex min-h-screen items-center justify-center pt-[76px]">
        {/* background layers */}
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[150px]"
          style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="noise-layer" aria-hidden="true" />

        <div className="container-px relative z-10 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl"
          >
            {/* icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 text-[var(--color-mint)]">
              <Wrench size={36} strokeWidth={1.5} />
            </div>

            <span className="mb-4 inline-block rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
              Coming Soon
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl md:text-6xl">
              PRODUCT PAGE IS{" "}
              <span className="text-gradient">UNDER MAINTENANCE</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              We&apos;re working hard to bring you an incredible product experience.
              In the meantime, you can access the Prysmors dashboard directly.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://app.prysmors.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-13 items-center gap-2.5 rounded-lg bg-[var(--color-mint)] px-7 text-sm font-bold text-[#06110d] shadow-[0_10px_30px_rgba(39,255,191,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(39,255,191,0.5)]"
              >
                Go to Dashboard
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>

              <motion.a
                href="/"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-13 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-white/[0.04] px-7 text-sm font-bold text-[var(--color-text)] backdrop-blur-sm transition-colors hover:border-[var(--color-mint)]/60 hover:bg-[var(--color-mint)]/10 hover:text-[var(--color-mint)]"
              >
                Back to Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
