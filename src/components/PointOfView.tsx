"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { beliefs } from "@/lib/content";

const ease = [0.2, 0, 0, 1] as const;

function BeliefRow({ belief, index }: { belief: typeof beliefs[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.36, ease, delay: (index % 4) * 0.05 }}
      className="border-b border-border-hairline"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-7 text-left sm:py-8"
      >
        <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-ink sm:text-2xl">
          {belief.claim}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          className="mt-1.5 flex h-7 w-7 flex-shrink-0 items-center justify-center text-ink-2"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-(--container-reading) pb-8 text-lg leading-relaxed text-ink-2">
              {belief.reasoning}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PointOfView() {
  return (
    <section
      id="perspective"
      className="px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-(--container-content)">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.36, ease }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
            How I think about the work
          </h2>
        </motion.div>

        <div>
          {beliefs.map((belief, i) => (
            <BeliefRow key={belief.id} belief={belief} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
