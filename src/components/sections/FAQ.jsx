import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { FAQS } from "../../data/content";

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[var(--color-mint)]/30 bg-[var(--color-surface)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-border-soft)] hover:bg-[var(--color-surface)]/80"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-sm font-bold sm:text-base transition-colors ${
            isOpen ? "text-[var(--color-mint)]" : "text-[var(--color-text)]"
          }`}
        >
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all ${
            isOpen
              ? "border-[var(--color-mint)]/40 bg-[var(--color-mint-deep)] text-[var(--color-mint)]"
              : "border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-dim)]"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--color-text-muted)]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            FAQ
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            Common Questions,{" "}
            <span className="text-gradient">Clear Answers</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>

        {/* CTA below FAQ */}
        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="mb-4 text-sm text-[var(--color-text-muted)]">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-mint inline-flex"
          >
            Contact Our Team
          </a>
        </Reveal>
      </div>
    </section>
  );
}
