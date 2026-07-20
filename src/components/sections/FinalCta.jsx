import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../../hooks/useReveal";

export default function FinalCta() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(ellipse, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-px relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-extrabold leading-[1.1] text-[var(--color-text)] sm:text-4xl md:text-5xl">
            From disconnected data to confident leadership,<br />
            <span className="text-gradient">AI-powered intelligence for every strategic business decision.</span>
          </h2>

          <div className="mt-10 flex justify-center">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("/#contact"); }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-[var(--color-mint)] px-8 py-4 text-base font-bold text-[#06110d] shadow-[0_0_50px_rgba(39,255,191,0.35)]"
            >
              Request a Platform Demo
              <ArrowUpRight size={18} aria-hidden="true" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
