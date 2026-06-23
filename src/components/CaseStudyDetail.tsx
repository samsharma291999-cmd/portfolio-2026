"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/content";
import { getCaseSections, getCaseNotice } from "@/lib/caseSections";

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

export default function CaseStudyDetail({ study, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!study) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const max = scrollHeight - clientHeight;
      setScrollProgress(max > 0 ? scrollTop / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [study]);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-canvas"
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${study.title} case study`}
        >
          <div className="sticky top-0 z-10 border-b border-border-hairline bg-canvas/90 backdrop-blur-sm">
            {/* Scroll progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-accent-ink" style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }} />
            <div className="flex items-center justify-between px-5 py-4 sm:px-6">
            <span className="font-[family-name:var(--font-display)] text-base text-ink">
              {study.title}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-11 items-center gap-2 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-2 transition-colors duration-[var(--duration-micro)] hover:text-accent-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              Close
            </button>
            </div>
          </div>

          <motion.div
            layoutId={`cover-${study.slug}`}
            transition={{ type: "spring", stiffness: 260, damping: 30, mass: 1 }}
            className="relative aspect-[16/9] w-full overflow-hidden bg-surface-sunken sm:aspect-[21/9]"
          >
            {study.cover ? (
              <img src={study.cover} alt={`${study.title} cover`} className="h-full w-full object-contain" />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-ink-3">
                {study.title} cover
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.2, 0, 0, 1], delay: 0.05 }}
            className="mx-auto w-full max-w-(--container-content) px-5 py-10 sm:px-6 lg:py-14"
          >
            {/* Fact block: pinned at top, instant scan */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.1 }}
              className="grid grid-cols-2 gap-6 border-b border-border-hairline pb-10 sm:grid-cols-4"
            >
              {[
                { label: "Role", value: study.role },
                { label: "Timeline", value: study.timeline },
                { label: "Constraints", value: study.constraints ?? "" },
                { label: "Outcome", value: study.outcome },
              ].map((f) => (
                <div key={f.label}>
                  <p className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-3">
                    {f.label}
                  </p>
                  <p className="mt-2 text-base text-ink">{f.value}</p>
                </div>
              ))}
            </motion.div>

            <h1 className="mt-12 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
              {study.title}
            </h1>
            <p className="mt-3 max-w-(--container-reading) text-lg text-ink-2">
              {study.outcome}
            </p>

            {getCaseNotice(study.slug) && (
              <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-border-hairline bg-surface-sunken px-4 py-3 text-sm text-ink-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span>{getCaseNotice(study.slug)}</span>
              </div>
            )}

            <div className="mt-14 flex flex-col gap-14">
              {getCaseSections(study.slug).map((s, i) => (
                <motion.div
                  key={s.heading}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.36, delay: i * 0.02 }}
                >
                  <div className="max-w-(--container-reading)">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                      {s.heading}
                    </h2>
                    {typeof s.body === "string"
                      ? s.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className="mt-4 text-lg leading-relaxed text-ink-2">{para}</p>
                        ))
                      : <div>{s.body}</div>
                    }
                  </div>
                  {s.imageGroups?.map((group, gi) => (
                    <div
                      key={gi}
                      className={`mt-8 grid gap-4 ${
                        group.columns === 1
                          ? "grid-cols-1"
                          : group.columns === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : group.columns === 3
                          ? "grid-cols-1 sm:grid-cols-3"
                          : "grid-cols-2"
                      } ${group.className ?? ""}`}
                    >
                      {Array.from({ length: group.count }).map((_, ii) => {
                        const src = group.images?.[ii];
                        return src ? (
                          <img key={ii} src={src} alt="" className="w-full rounded-xl" />
                        ) : (
                          <div
                            key={ii}
                            className="aspect-[16/10] rounded-xl bg-surface-sunken"
                          />
                        );
                      })}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>

            {study.figmaLink && (
              <a
                href={study.figmaLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-14 flex items-center gap-4 rounded-xl border border-border-hairline bg-surface-raised px-6 py-5 transition-colors hover:border-accent-ink/40"
              >
                <svg width="32" height="32" viewBox="0 0 38 57" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
                  <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38h9.5v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
                  <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#FF7262"/>
                  <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" fill="#F24E1E"/>
                  <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-ink">View Design Files</p>
                  <p className="mt-0.5 text-sm text-ink-2">{study.figmaLink.description}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-ink-3">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="mt-10 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink hover:text-accent-strong"
            >
              ← Back to work
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
