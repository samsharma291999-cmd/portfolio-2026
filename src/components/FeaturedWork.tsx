"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/content";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyDetail from "./CaseStudyDetail";

const ease = [0.2, 0, 0, 1] as const;

export default function FeaturedWork() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openStudy = caseStudies.find((s) => s.slug === openSlug) ?? null;

  return (
    <section id="work" className="px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-(--container-content)">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.36, ease }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
            Featured work
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-2">
            Three projects, chosen for the decisions behind them rather than
            the polish on top.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              index={i}
              onOpen={setOpenSlug}
            />
          ))}
        </div>
      </div>

      <CaseStudyDetail study={openStudy} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
