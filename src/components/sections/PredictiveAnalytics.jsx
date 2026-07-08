import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, ShieldAlert, Sparkles } from "lucide-react";
import Reveal from "../../hooks/useReveal";

const STATS = [
  { icon: TrendingUp, value: "94.6%", label: "Forecast Accuracy" },
  { icon: ShieldAlert, value: "12", label: "Risk Signals Caught Early" },
  { icon: Sparkles, value: "7", label: "New Opportunities Surfaced" },
];

export default function PredictiveAnalytics() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // subtle parallax offsets driven by pointer position — cheap transforms only, no WebGL
  const imgX = useTransform(sx, [0, 1], [-10, 10]);
  const imgY = useTransform(sy, [0, 1], [-8, 8]);
  const glowX = useTransform(sx, [0, 1], [-24, 24]);
  const glowY = useTransform(sy, [0, 1], [-18, 18]);

  const handlePointerMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <section id="predictive-analytics" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            Predictive Analytics
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            SEE WHAT&apos;S COMING,
            <br />
            <span className="text-gradient">NOT JUST WHAT HAPPENED.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Prysmors reads enterprise signal continuously and projects what
            happens next — revenue, risk, and opportunity — before it shows
            up in a quarterly report.
          </p>

          <div className="mt-10 flex flex-col gap-6 xs:flex-row xs:gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <s.icon size={18} className="mt-0.5 shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-extrabold text-[var(--color-text)]">
                    {s.value}
                  </p>
                  <p className="text-xs leading-snug text-[var(--color-text-dim)]">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <div
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative h-[420px] sm:h-[500px]"
          >
            {/* ambient glow follows the pointer — CSS/transform only, cheap on the GPU */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="pointer-events-none absolute -inset-10 rounded-full opacity-40 blur-[90px]"
              aria-hidden="true"
            >
              <div className="h-full w-full rounded-full bg-[var(--color-mint)]" />
            </motion.div>

            <motion.div
              style={{ x: imgX, y: imgY }}
              className="relative h-full overflow-hidden rounded-3xl border border-[var(--color-border)]"
            >
              <img
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1100&q=80"
                alt="Analyst studying a forward-looking data forecast on a large display"
                loading="lazy"
                className="h-full w-full scale-105 object-cover"
                width={1100}
                height={1300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/85 via-[var(--color-bg)]/10 to-transparent" />

              {/* single restrained data callout instead of a full synthetic chart */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    Q3 Revenue Forecast
                  </p>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-mint)]">
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--color-mint)]" />
                    +18.2%
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/70">
                  Trending ahead of plan across three of four regions.
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
