import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Zap,
  Clock,
  Activity,
  Database,
  ArrowRight,
  Radio,
  Cpu,
  BarChart3,
} from "lucide-react";
import Reveal from "../../hooks/useReveal";
import {
  useAnimatedNumber,
  useSimulatedMetrics,
  useSparkline,
} from "../../hooks/useLiveMetrics";
import {
  DATA_SOURCES,
  HEALTH_METRICS,
  PIPELINE_STAGES,
  DASHBOARD_INSIGHTS,
} from "../../data/content";

/* ────────────────────────────────────────────
   SECTION
   ──────────────────────────────────────────── */
export default function Dashboard() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="container-px relative z-10">
        {/* header */}
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            The Dashboard
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-4xl md:text-5xl">
            YOUR ENTERPRISE, <span className="text-gradient">UNDERSTOOD IN REAL TIME.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            One command center for every data source, model, and executive KPI that matters.
          </p>
        </Reveal>

        {/* main panel */}
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8">
            <DataSourcesWidget />
            <PipelineWidget />
            <HealthMetricsWidget />
            <InsightsFeed />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   WIDGET A: Data Sources
   ──────────────────────────────────────────── */
function DataSourcesWidget() {
  const liveMetrics = useSimulatedMetrics(
    useMemo(
      () =>
        DATA_SOURCES.filter((s) => s.connected).map((s) => ({
          id: s.name,
          base: s.throughput,
          min: s.throughput * 0.7,
          max: s.throughput * 1.3,
          decimals: 0,
        })),
      []
    ),
    { interval: 2500, variance: 0.04 }
  );

  const onlineCount = DATA_SOURCES.filter((s) => s.connected).length;

  return (
    <div className="mb-8 sm:mb-10">
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <Database size={14} className="text-[var(--color-mint)]" aria-hidden="true" />
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)] sm:text-sm">
          Enterprise Data Sources
        </p>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-[var(--color-mint-deep)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-mint)]">
          <Radio size={8} className="animate-pulse" aria-hidden="true" />
          {onlineCount}/{DATA_SOURCES.length} Online
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {DATA_SOURCES.map((src) => (
          <motion.div
            key={src.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 px-3 py-2.5 sm:px-3.5 sm:py-3 transition-colors hover:border-[var(--color-mint)]/30"
          >
            {/* top row: name + status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                {src.connected ? (
                  <span className="relative shrink-0">
                    <CheckCircle2 size={13} className="text-[var(--color-mint)]" aria-hidden="true" />
                    <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--color-mint)] animate-ping opacity-60" />
                  </span>
                ) : (
                  <Circle size={13} className="shrink-0 text-[var(--color-text-dim)]" aria-hidden="true" />
                )}
                <span className="truncate text-[11px] font-semibold text-[var(--color-text-muted)] sm:text-xs">
                  {src.name}
                </span>
              </div>
              {src.connected && (
                <LiveThroughput
                  value={liveMetrics[src.name] ?? src.throughput}
                  unit="rec/s"
                />
              )}
            </div>

            {/* bottom row: stats */}
            {src.connected ? (
              <div className="mt-2 flex items-center gap-2 text-[10px] text-[var(--color-text-dim)] sm:gap-3">
                <span className="flex items-center gap-1">
                  <Activity size={8} className="text-[var(--color-mint)]" aria-hidden="true" />
                  {src.latency}ms
                </span>
                <span className="opacity-30">|</span>
                <span className="flex items-center gap-1">
                  <Clock size={8} aria-hidden="true" />
                  {src.lastSync}s ago
                </span>
              </div>
            ) : (
              <p className="mt-2 text-[10px] text-[var(--color-text-dim)] opacity-50">Awaiting configuration</p>
            )}

            {/* hover underline */}
            {src.connected && (
              <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--color-mint)]/50 to-[var(--color-mint)] transition-transform duration-500 group-hover:scale-x-100" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LiveThroughput({ value, unit }) {
  const animated = useAnimatedNumber(value, { duration: 600, decimals: 0 });
  const formatted = animated >= 1000 ? `${(animated / 1000).toFixed(1)}k` : animated;
  return (
    <span className="flex shrink-0 items-center gap-1 text-[10px] tabular-nums text-[var(--color-text-dim)]">
      <span className="h-1 w-1 rounded-full bg-[var(--color-mint)] animate-pulse" aria-hidden="true" />
      {formatted}
      <span className="opacity-50">{unit}</span>
    </span>
  );
}

/* ────────────────────────────────────────────
   WIDGET B: Processing Pipeline
   ──────────────────────────────────────────── */
function PipelineWidget() {
  const liveMetrics = useSimulatedMetrics(
    useMemo(
      () =>
        PIPELINE_STAGES.map((s) => ({
          id: s.id,
          base: s.base,
          min: s.min,
          max: s.max,
          decimals: 0,
        })),
      []
    ),
    { interval: 2000, variance: 0.03 }
  );

  return (
    <div className="mb-8 border-t border-[var(--color-border-soft)] pt-6 sm:mb-10 sm:pt-8">
      <div className="mb-4 flex items-center gap-2">
        <Cpu size={14} className="text-[var(--color-mint)]" aria-hidden="true" />
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)] sm:text-sm">
          Processing Pipeline
        </p>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-[var(--color-mint)]">
          <Zap size={9} aria-hidden="true" className="animate-pulse" />
          Real-time
        </span>
      </div>

      {/* pipeline stages: horizontal on desktop, vertical on mobile */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:items-center">
        {PIPELINE_STAGES.map((stage, i) => {
          const live = liveMetrics[stage.id] ?? stage.base;
          const pct = Math.round((live / stage.max) * 100);
          return (
            <div key={stage.id} className="flex items-center sm:flex-1">
              {/* stage card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex-1 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 p-3 transition-colors hover:border-[var(--color-mint)]/30 sm:mx-1 sm:p-3.5"
              >
                <p className="mb-1 text-[10px] uppercase tracking-wide text-[var(--color-text-dim)]">{stage.label}</p>
                <p className="font-display text-lg font-extrabold text-[var(--color-text)] tabular-nums sm:text-xl">
                  <AnimatedCompact value={live} />
                </p>
                <p className="mt-0.5 text-[10px] text-[var(--color-text-dim)]">{stage.unit}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-mint)]/50 to-[var(--color-mint)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>

              {/* arrow connector (hidden on mobile, between cards on desktop) */}
              {i < PIPELINE_STAGES.length - 1 && (
                <div className="hidden shrink-0 sm:block">
                  <ArrowRight size={14} className="mx-0.5 text-[var(--color-text-dim)] opacity-40" aria-hidden="true" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedCompact({ value }) {
  const v = useAnimatedNumber(value, { duration: 600, decimals: 0 });
  const display = v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v);
  return <span>{display}</span>;
}

/* ────────────────────────────────────────────
   WIDGET C: Health Metrics
   ──────────────────────────────────────────── */
function HealthMetricsWidget() {
  const liveValues = useSimulatedMetrics(HEALTH_METRICS, { interval: 3500, variance: 0.015 });

  return (
    <div className="mb-8 border-t border-[var(--color-border-soft)] pt-6 sm:mb-10 sm:pt-8">
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <BarChart3 size={14} className="text-[var(--color-mint)]" aria-hidden="true" />
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)] sm:text-sm">
            Infrastructure Health
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-[10px] font-semibold text-[var(--color-text-muted)] sm:px-4 sm:text-xs">
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
          All systems operational
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {HEALTH_METRICS.map((m, i) => (
          <MetricCard key={m.id} metric={m} liveValue={liveValues[m.id]} index={i} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({ metric, liveValue, index }) {
  const display = useAnimatedNumber(liveValue, {
    duration: 700,
    decimals: metric.decimals,
  });
  const sparkPoints = useSparkline(metric.base, {
    maxLen: 16,
    interval: 2200 + index * 300,
    variance: 0.012,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 p-3.5 transition-colors hover:border-[var(--color-mint)]/30 sm:p-5"
    >
      <div className="mb-1 flex items-center justify-between sm:mb-2">
        <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-dim)] sm:text-[11px]">
          {metric.label}
        </p>
        <span
          className={`flex items-center gap-0.5 text-[10px] font-semibold ${
            metric.trendDir === "up" ? "text-[var(--color-mint)]" : "text-orange-400"
          }`}
        >
          {metric.trendDir === "up" ? (
            <TrendingUp size={10} aria-hidden="true" />
          ) : (
            <TrendingDown size={10} aria-hidden="true" />
          )}
          {metric.trendDir === "up" ? "+" : "-"}{metric.trendBase}
          {metric.suffix}
        </span>
      </div>

      <p className="font-display text-xl font-extrabold text-[var(--color-text)] tabular-nums transition-colors group-hover:text-[var(--color-mint)] sm:text-2xl md:text-3xl">
        {display}
        <span className="font-mono text-sm text-[var(--color-mint)] sm:text-lg">{metric.suffix}</span>
      </p>

      {/* sparkline */}
      <SparkLine points={sparkPoints} className="mt-3" />

      {/* progress bar */}
      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)] sm:mt-3">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-mint)]/50 to-[var(--color-mint)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min((liveValue / (metric.max || 100)) * 100, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   WIDGET D: AI Activity Feed
   ──────────────────────────────────────────── */
function InsightsFeed() {
  const [visible, setVisible] = useState(DASHBOARD_INSIGHTS.slice(0, 4));

  useEffect(() => {
    const pool = [...DASHBOARD_INSIGHTS];
    let idx = 4;
    const id = setInterval(() => {
      const next = pool[idx % pool.length];
      idx++;
      setVisible((prev) => {
        const updated = [next, ...prev];
        return updated.slice(0, 4);
      });
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-t border-[var(--color-border-soft)] pt-6 sm:pt-8">
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <Lightbulb size={14} className="text-[var(--color-mint)]" aria-hidden="true" />
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)] sm:text-sm">
          Recent AI Activity
        </p>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-[var(--color-mint)]">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
          Live
        </span>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.div
              key={`${item.id}-${item.title}`}
              layout
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 px-3 py-2.5 transition-colors hover:border-[var(--color-mint)]/20 sm:gap-3 sm:px-4 sm:py-3"
            >
              <span className="mt-0.5 shrink-0">
                {item.type === "alert" && <AlertTriangle size={14} className="text-amber-400" aria-hidden="true" />}
                {item.type === "insight" && <Lightbulb size={14} className="text-[var(--color-mint)]" aria-hidden="true" />}
                {item.type === "success" && <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[11px] font-semibold text-[var(--color-text)] sm:text-xs">{item.title}</p>
                  <span className="shrink-0 text-[10px] text-[var(--color-text-dim)]">{item.time}</span>
                </div>
                <p className="mt-0.5 text-[10px] leading-relaxed text-[var(--color-text-muted)] sm:text-[11px]">
                  {item.detail}
                </p>
              </div>
              <ArrowRight size={12} className="mt-1 shrink-0 text-[var(--color-text-dim)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   SPARKLINE (inline SVG)
   ──────────────────────────────────────────── */
function SparkLine({ points, className = "" }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const w = 120;
  const h = 28;
  const pad = 2;

  const coords = points.map((v, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2);
    const y = pad + (1 - (v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });

  const pathD = `M${coords.join(" L")}`;
  const areaD = `${pathD} L${w - pad},${h - pad} L${pad},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`block w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-mint)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaD}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="var(--color-mint)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}
