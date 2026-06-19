"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/content";

const ease = [0.2, 0, 0, 1] as const;

type Props = {
  study: CaseStudy;
  index: number;
  onOpen: (slug: string) => void;
};

export default function CaseStudyCard({ study, index, onOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.36, ease, delay: (index % 4) * 0.07 }}
      className={study.lead ? "col-span-full" : "col-span-full sm:col-span-1"}
    >
      <button
        type="button"
        onClick={() => onOpen(study.slug)}
        className="group block w-full text-left"
        aria-label={`Open case study: ${study.title}`}
      >
        <motion.div
          layoutId={`cover-${study.slug}`}
          className={`relative overflow-hidden bg-surface-sunken shadow-sm transition-shadow duration-[var(--duration-micro)] group-hover:shadow-md ${
            study.lead
              ? "aspect-[16/9] rounded-lg sm:aspect-[21/9]"
              : "aspect-[4/3] rounded-md"
          }`}
        >
          {study.cover ? (
            <Image
              src={study.cover}
              alt={`${study.title} cover`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 80vw"
              priority={study.lead}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-ink-3"
              style={{ fontSize: study.lead ? "1.1rem" : "0.9rem" }}
            >
              {study.title} cover
            </div>
          )}
          <motion.div
            className="absolute inset-0 scale-[1.01] bg-ink/0 opacity-0 transition-opacity duration-[var(--duration-micro)] group-hover:opacity-100"
            style={{ background: "rgba(140,58,58,0.04)" }}
          />
        </motion.div>

        <div className="mt-5 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3
            className={`font-[family-name:var(--font-display)] font-medium text-ink ${
              study.lead ? "text-[1.75rem]" : "text-xl"
            }`}
          >
            <span className="bg-[linear-gradient(transparent,transparent_calc(100%-1px),var(--color-accent-ink)_calc(100%-1px))] bg-[length:0%_100%] bg-no-repeat transition-[background-size] duration-[var(--duration-micro)] group-hover:bg-[length:100%_100%]">
              {study.title}
            </span>
          </h3>
          <p className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-3">
            {study.role}
          </p>
        </div>
        <p className="mt-2 max-w-2xl text-base text-ink-2">{study.outcome}</p>
      </button>
    </motion.div>
  );
}
