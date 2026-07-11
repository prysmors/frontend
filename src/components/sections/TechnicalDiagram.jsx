import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { PIPELINE_STEPS } from "../../data/content";
import {
  dataIngestionIcon,
  aiReasoningEngineIcon,
  predictiveModelingIcon,
  scenarioSimulationIcon,
  executiveDeliveryIcon,
} from "../../assets";

const ARCH_ICONS = [
  dataIngestionIcon,
  aiReasoningEngineIcon,
  predictiveModelingIcon,
  scenarioSimulationIcon,
  executiveDeliveryIcon,
];

export default function TechnicalDiagram() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="container-px relative z-10">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            Platform Architecture
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            FROM RAW DATA TO A <span className="text-gradient">STRATEGIC RECOMMENDATION.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Enterprise data connects once, then flows continuously through reasoning, prediction, and
            simulation models — accelerated on NVIDIA infrastructure — before reaching the people who decide.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-mint)]/30 to-transparent lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PIPELINE_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-5">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_0_0_8px_var(--color-bg)] transition-all duration-300 group-hover:border-[var(--color-mint)]/50 group-hover:shadow-[0_0_24px_rgba(39,255,191,0.2)]">
                      <img
                        src={ARCH_ICONS[i]}
                        alt={step.title}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-mint)] font-mono text-[9px] font-bold text-[#06110d]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

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
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 flex max-w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-4 py-2 font-mono text-xs text-[var(--color-text-muted)]">
            <Cpu size={14} className="text-[var(--color-mint)]" aria-hidden="true" />
            Powered by NVIDIA SDK.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
