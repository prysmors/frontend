import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, TrendingUp, Activity, Cpu, ArrowUpRight } from "lucide-react";
import IsometricCircuit from "./graphics/IsometricCircuit";

export default function DemoModal({ open, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Prysmors platform preview"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 bg-[#030705]/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-solid,#0d1512)] shadow-[0_60px_140px_rgba(0,0,0,0.65)] lg:grid-cols-2"
          >
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)]"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {/* Left: animated 3D isometric circuit scene */}
            <div className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#101b26_0%,#050a0d_100%)] p-8 sm:p-10">
              <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden="true" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[320px] w-full max-w-md sm:h-[380px]"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  className="h-full w-full"
                  animate={{ rotateY: [0, 8, -8, 0], rotateX: [0, -4, 4, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IsometricCircuit className="h-full w-full drop-shadow-[0_0_70px_rgba(255,176,32,0.15)]" id="modalGraph" variant="large" />
                </motion.div>
              </motion.div>
            </div>

            {/* Right: simulated live demo panel */}
            <div className="flex flex-col justify-center gap-6 border-t border-[var(--color-border-soft)] p-8 lg:border-l lg:border-t-0 sm:p-10">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-mint)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-mint)]" />
                  Live Preview
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[var(--color-text)] sm:text-3xl">
                  See a decision get made in real time.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  This is a simulated walkthrough of the Prysmors reasoning engine — enterprise
                  signals flow in, get scored for confidence, and surface as a ranked
                  recommendation for your leadership team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <DemoStat icon={TrendingUp} label="Forecast Growth" value="+18.2%" delay={0.1} />
                <DemoStat icon={Activity} label="GPU Utilization" value="82%" delay={0.2} />
                <DemoStat icon={Cpu} label="Decision Confidence" value="94%" delay={0.3} />
                <DemoStat icon={TrendingUp} label="Signals Processed" value="12.4k/s" delay={0.4} />
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  onClose();
                }}
                className="btn-mint w-fit"
              >
                Request a Platform Demo
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DemoStat({ icon: Icon, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 p-3"
    >
      <Icon size={15} className="mb-2 text-[var(--color-mint)]" aria-hidden="true" />
      <p className="text-[11px] text-[var(--color-text-dim)]">{label}</p>
      <p className="text-sm font-bold text-[var(--color-text)]">{value}</p>
    </motion.div>
  );
}