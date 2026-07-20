import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DemoModal from "../DemoModal";
import { heroGraphic } from "../../assets";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-x-hidden overflow-y-visible pt-[calc(var(--header-h)+1.5rem)]"
    >
      {/* background layers */}
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-violet) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="noise-layer" aria-hidden="true" />

      <div className="container-px relative z-10 grid w-full grid-cols-1 items-center gap-16 py-10 lg:grid-cols-[1.05fr_1fr] lg:py-0">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
            Turn Data Into Strategic Decisions

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[13vw] leading-[0.98] font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-[4.6rem] xl:text-[5.2rem]"
          >
            Decision Intelligence{" "}
            <span className="text-gradient">Built for Enterprise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            Unify enterprise data, predict outcomes, and simulate scenarios, all in one AI-powered platform.
            Prysmors turns raw information into strategic decisions with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("/#contact"); }}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--color-mint)] px-6 text-sm font-bold text-[#06110d] shadow-[0_10px_30px_rgba(39,255,191,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(39,255,191,0.5)]"
            >
              Book a Demo
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/product"
              onClick={(e) => { e.preventDefault(); navigate("/product"); }}
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-white/[0.04] px-6 text-sm font-bold text-[var(--color-text)] backdrop-blur-sm transition-colors hover:border-[var(--color-mint)]/60 hover:bg-[var(--color-mint)]/10 hover:text-[var(--color-mint)]"
            >
              Explore the Platform
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[var(--color-border-soft)] pt-7 text-[var(--color-text-dim)]"
          >
            <Metric value="97.4%" label="Prediction Accuracy" />
            <Metric value="128+" label="Enterprise Integrations" />
            <Metric value="6–8 wks" label="To First Production Insight" />
          </motion.div>
        </div>

        {/* Right: animated visual */}
        <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:h-[560px]">
          {/* floating geometric shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="animate-float-slow absolute right-2 top-2 h-16 w-16 rounded-2xl border border-[var(--color-mint)]/30 bg-gradient-to-br from-[#27FFbf]/25 to-transparent backdrop-blur-sm sm:h-28 sm:w-28"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="animate-float-slower absolute left-0 top-16 h-10 w-10 rounded-full border border-[#7b61ff]/40 bg-gradient-to-br from-[#7b61ff]/30 to-transparent sm:h-20 sm:w-20"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="animate-spin-slow absolute bottom-24 right-10 h-10 w-10 rounded-lg border border-[#27FFbf]/40 sm:h-14 sm:w-14"
            style={{ background: "conic-gradient(from 90deg, rgba(39,255,191,0.2), transparent 60%)" }}
            aria-hidden="true"
          />
          <div
            className="animate-float-slow absolute -left-4 bottom-8 h-28 w-28 rounded-full opacity-40 blur-2xl sm:h-52 sm:w-52"
            style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 72%)" }}
            aria-hidden="true"
          />

          {/* Floating KPI pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-float-slower absolute -left-2 top-4 flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-1.5 text-[10px] font-semibold text-[var(--color-mint)] shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md sm:left-2"
          >
            <TrendingUp size={12} aria-hidden="true" />
            +18% Forecast Accuracy
          </motion.div>

          {/* Orbit ring (knowledge graph accent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="animate-spin-slow absolute right-6 bottom-2 h-20 w-20 rounded-full border border-dashed border-[var(--color-mint)]/30 sm:h-24 sm:w-24"
            aria-hidden="true"
          />

          {/* Orbiting dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="animate-orbit absolute right-12 top-12 h-3 w-3 rounded-full bg-[var(--color-mint)] shadow-[0_0_12px_rgba(39,255,191,0.8)]"
            aria-hidden="true"
          />

          {/* central dashboard "laptop" card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute inset-x-4 top-14 flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-4 pb-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-8 sm:top-20 sm:p-5 sm:pb-10 lg:pb-14"
          >
            <div className="mb-4 flex w-full items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-mint-deep)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-mint)]">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
                Live
              </span>
            </div>

            {/* Hero graphic */}
            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[radial-gradient(ellipse_at_center,#0f1824_0%,#070c11_100%)] py-0">
              <img
                src={heroGraphic}
                alt="Prysmors decision intelligence visualization"
                className="h-[280px] w-full max-w-[380px] object-contain sm:h-[320px] sm:max-w-[440px]"
              />
            </div>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-[var(--color-text-dim)]">
              Real-time reasoning across enterprise data, scored and ranked for confidence.
            </p>

            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => setDemoOpen(true)}
              aria-label="Watch a preview of how the platform works"
              className="animate-pulse-glow relative mt-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--color-mint)] text-[#06110d] shadow-[0_0_40px_rgba(39,255,191,0.5)] sm:absolute sm:mt-0 sm:-bottom-8 lg:-bottom-24 sm:left-10 sm:h-16 sm:w-16"
            >
              <Play size={18} fill="#06110d" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-[var(--color-text)]">{value}</p>
      <p className="text-xs text-[var(--color-text-dim)]">{label}</p>
    </div>
  );
}
