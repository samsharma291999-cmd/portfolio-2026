"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] flex-col px-5 pt-32 pb-28 sm:px-6 lg:px-8 lg:pb-32"
    >
      <div className="mx-auto flex w-full max-w-(--container-content) flex-1 items-center">
        {/* Left — headline + bio */}
        <div className="flex flex-col flex-1 justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease, delay: 0.1 }}
            className="mb-6 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.08em] text-ink-2"
          >
            Shivam Sharma
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,7rem)] leading-[1.02] tracking-[-0.015em] text-ink">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, ease, delay: 0.18 }}
                className="block font-light"
              >
                Defaults are
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, ease, delay: 0.36 }}
                className="block font-bold"
              >
                decisions.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, ease, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl"
          >
            Senior Product Designer with 5 years of experience designing products
            across travel, SaaS, and AI. I focus on turning ambiguity into clear
            systems, defensible decisions, and experiences that scale.
          </motion.p>
        </div>

        {/* Right — reading aside (desktop only) */}
        <motion.a
          href="https://thedecisionlab.com/biases/automation-bias"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.36, ease, delay: 0.72 }}
          className="group ml-16 hidden shrink-0 w-[200px] border-l border-border-hairline pl-5 transition-colors duration-[var(--duration-micro)] hover:border-accent-ink lg:block"
          aria-label="Article: Automation Bias"
        >
          <p className="font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.06em] text-ink-3">
            On my mind
          </p>
          <p className="mt-2 text-sm leading-snug text-ink-2 group-hover:text-ink transition-colors duration-[var(--duration-micro)]">
            Why we stop searching after the first plausible answer.
          </p>
          <p className="mt-3 inline-flex items-center gap-1 font-[family-name:var(--font-label)] text-[10px] uppercase tracking-[0.06em] text-ink-3">
            Automation Bias
            <svg width="9" height="9" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </p>
        </motion.a>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.36, ease, delay: 0.7 }}
        className="group mx-auto mt-12 flex w-full max-w-(--container-content) items-center gap-3 sm:mt-16"
        aria-label="Scroll to featured work"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong transition-colors duration-[var(--duration-micro)] group-hover:border-accent-ink">
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-ink-2 transition-colors duration-[var(--duration-micro)] group-hover:text-accent-ink"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
          >
            <path
              d="M7 1V13M7 13L2 8M7 13L12 8"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>
        <span className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-2">
          See the work
        </span>
      </motion.a>
    </section>
  );
}
