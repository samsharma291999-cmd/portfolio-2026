"use client";

import { motion } from "framer-motion";
import { impactFigures } from "@/lib/content";

const ease = [0.2, 0, 0, 1] as const;

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="inline-block shrink-0 ml-0.5 translate-y-[-1px]">
    <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ImpactHighlights() {
  return (
    <section className="border-t border-b border-border-hairline bg-surface-sunken px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-(--container-content)">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-4 sm:gap-x-0">
          {impactFigures.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.externalLink ?? (item.linkedCase ? `#work` : undefined)}
              target={item.externalLink ? "_blank" : undefined}
              rel={item.externalLink ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className={`block ${
                i === 0
                  ? "sm:pr-[28px]"
                  : i === impactFigures.length - 1
                  ? "sm:pl-[28px] sm:border-l sm:border-border-hairline"
                  : "sm:px-[28px] sm:border-l sm:border-border-hairline"
              } ${item.externalLink || item.linkedCase ? "group" : ""}`}
            >
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-none text-ink whitespace-nowrap">
                {item.figure}
              </p>
              <p className="mt-3 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-2 transition-colors duration-[var(--duration-micro)] group-hover:text-accent-ink">
                {item.labelLines ? (
                  <span className="inline border-b border-transparent group-hover:border-accent-ink">
                    {item.labelLines[0]}
                    <br />
                    {item.labelLines[1]}
                    {item.externalLink && <ArrowIcon />}
                  </span>
                ) : (
                  <span className="inline border-b border-transparent group-hover:border-accent-ink">
                    {item.label}
                    {item.externalLink && <ArrowIcon />}
                  </span>
                )}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
