"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

const roles = [
  {
    company: "BotPenguin",
    title: "Assistant Manager – Product Design",
    period: "Apr 2026 – Present",
    detail:
      "Translating product requirements into user-centered solutions across web and mobile. Led ideation for the AI ChatFlow Builder and conducted UX audits identifying 55+ usability issues.",
  },
  {
    company: "Consumer Electronics Venture",
    title: "Co-Founder",
    period: "Jan 2025 – Dec 2025",
    detail:
      "Designed interfaces for inventory and credit tracking systems, simplifying operational workflows and enabling scalable business operations.",
  },
  {
    company: "UXReactor",
    title: "Senior Visual Designer",
    period: "Nov 2022 – Sep 2024",
    detail:
      "Designed 500+ screens across 20+ complex workflows. Led end-to-end UX for StayNow MVP, contributing to a $2.2M seed raise. Built a design system that increased development velocity by 60%.",
  },
  {
    company: "UXReactor",
    title: "Visual Designer",
    period: "Apr 2021 – Oct 2022",
    detail:
      "Redesigned a Fortune 500 cloud data platform, converting dense workflows into accessible interfaces that boosted task completion by 35%.",
  },
  {
    company: "UXReactor",
    title: "Associate Visual Designer",
    period: "Jan 2020 – Mar 2021",
    detail:
      "Designed responsive web and mobile interfaces, translating wireframes into production-ready visuals with strong attention to typography, layout, and interaction design.",
  },
];

function RoleRow({ role, index }: { role: typeof roles[number]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.36, ease, delay: index * 0.06 }}
      className="border-b border-border-hairline py-6 first:pt-0"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-baseline justify-between gap-4 text-left"
      >
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-medium text-ink">
            {role.company}
          </p>
          <p className="mt-1 text-base text-ink-2">{role.title}</p>
        </div>
        <p className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-3">
          {role.period}
        </p>
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
            <p className="max-w-md pt-4 text-base leading-relaxed text-ink-2">
              {role.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border-hairline px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-(--container-content)">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.36, ease }}
            className="lg:col-span-2"
          >
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
              About
            </h2>
            <p className="mt-6 max-w-(--container-reading) text-lg leading-relaxed text-ink-2">
              I&rsquo;m a Senior Product Designer with five years of experience
              working across travel, SaaS, and AI products. I enjoy turning
              ambiguity into systems, simplifying complexity, and making
              decisions explicit. My work sits at the intersection of product
              thinking, interaction design, and execution.
            </p>
            <p className="mt-5 max-w-(--container-reading) text-lg leading-relaxed text-ink-2">
              Outside of work, I&rsquo;m interested in design systems, AI,
              distribution businesses, and building products that create
              long-term leverage.
            </p>
            <div className="mt-8 flex gap-6">
              <a
                href="https://drive.google.com/file/d/1sz0yeemVfJ5bOb8_TyRvHGspM1bEs_pT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink transition-colors duration-[var(--duration-micro)] hover:text-accent-strong"
              >
                Résumé
              </a>
              <a
                href="https://www.linkedin.com/in/shivamsharma2911"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink transition-colors duration-[var(--duration-micro)] hover:text-accent-strong"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-1">
            {roles.map((role, i) => (
              <RoleRow key={`${role.company}-${i}`} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
