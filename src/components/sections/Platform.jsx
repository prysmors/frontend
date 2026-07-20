import { motion } from "framer-motion";
import { Database, Cpu, TrendingUp, GitBranch, Send, ArrowRight } from "lucide-react";
import Reveal from "../hooks/useReveal";
import { PIPELINE_STEPS, HEALTH_METRICS } from "../../data/content";

const ICON_MAP = {
  database: Database,
  cpu: Cpu,
  "trending-up": TrendingUp,
  "git-branch": GitBranch,
  send: Send,
};

export default function Platform() {
  return (
    <section id="platform" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="container-px relative z-10">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            How It Works
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-4xl md:text-5xl">
            THE DECISION <span className="text-gradient">INTELLIGENCE PIPELINE</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            From fragmented enterprise data to executive-ready decisions, in real time.
          </p>
        </Reveal>

        {/* Pipeline steps */}
        <div className="relative mb-20">
          {/* Connector line desktop */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-mint)]/30 to-transparent lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PIPELINE_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Database;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* Step number badge */}
                    <div className="relative mb-5">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-mint)] shadow-[0_0_0_8px_var(--color-bg)] transition-all duration-300 group-hover:border-[var(--color-mint)]/50 group-hover:shadow-[0_0_24px_rgba(39,255,191,0.2)]">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-mint)] font-mono text-[9px] font-bold text-[#06110d]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Arrow between steps (mobile hidden) */}
                    {i < PIPELINE_STEPS.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="absolute -right-4 top-[19px] hidden text-[var(--color-mint)]/40 lg:block"
                        aria-hidden="true"
                      />
                    )}

                    <h3 className="mb-2 font-display text-base font-bold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{step.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Infrastructure health metrics */}
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-8 backdrop-blur-sm">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--color-mint)]">
                  Infrastructure Health
                </p>
                <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">
                  Powered by NVIDIA SDK
                </h3>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)]">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
                All systems operational
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {HEALTH_METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="group rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 p-5 transition-colors hover:border-[var(--color-mint)]/30"
                >
                  <p className="mb-2 text-[11px] uppercase tracking-wide text-[var(--color-text-dim)]">
                    {m.label}
                  </p>
                  <p className="font-display text-2xl font-extrabold text-[var(--color-text)] group-hover:text-[var(--color-mint)] transition-colors sm:text-3xl">
                    {m.value}
                    <span className="font-mono text-lg text-[var(--color-mint)]">{m.suffix}</span>
                  </p>
                  <BarIndicator value={parseFloat(m.value)} max={m.suffix === "%" ? 100 : 150} />
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BarIndicator({ value, max }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-[var(--color-mint)]/60 to-[var(--color-mint)]"
      />
    </div>
  );
}
