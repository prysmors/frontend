import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { DATA_SOURCES, HEALTH_METRICS } from "../../data/content";

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="container-px relative z-10">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            The Dashboard
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            YOUR ENTERPRISE, <span className="text-gradient">UNDERSTOOD IN REAL TIME.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            One command center for every data source, model, and executive KPI that matters.
          </p>
        </Reveal>

        {/* Composed dashboard panel */}
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8">
            {/* Widget A: Enterprise Data Sources */}
            <div className="mb-10">
              <p className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-[var(--color-mint)]">
                Enterprise Data Sources
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {DATA_SOURCES.map((src) => (
                  <div
                    key={src.name}
                    className="flex items-center gap-2 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 px-3 py-2.5"
                  >
                    {src.connected ? (
                      <CheckCircle2 size={14} className="shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                    ) : (
                      <Circle size={14} className="shrink-0 text-[var(--color-text-dim)]" aria-hidden="true" />
                    )}
                    <span className="truncate text-xs font-medium text-[var(--color-text-muted)]">{src.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget C: Infrastructure Health */}
            <div className="border-t border-[var(--color-border-soft)] pt-8">
              <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--color-mint)]">
                    Infrastructure Health
                  </p>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">
                    Powered by NVIDIA SDK.
                  </h3>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)]">
                  <span className="h-2 w-2 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
                  All systems operational
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
                    <p className="font-display text-3xl font-extrabold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-mint)]">
                      {m.value}
                      <span className="font-mono text-lg text-[var(--color-mint)]">{m.suffix}</span>
                    </p>
                    <BarIndicator value={parseFloat(m.value)} max={m.suffix === "%" ? 100 : 150} />
                  </motion.div>
                ))}
              </div>
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
