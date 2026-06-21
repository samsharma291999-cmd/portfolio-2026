"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/content";
import { getCaseSections } from "@/lib/caseSections";

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

export default function CaseStudyDetail({ study, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

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

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-canvas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${study.title} case study`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-hairline bg-canvas/90 px-5 py-4 backdrop-blur-sm sm:px-6">
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

          <motion.div
            layoutId={`cover-${study.slug}`}
            transition={{ type: "spring", stiffness: 260, damping: 30, mass: 1 }}
            className="relative aspect-[16/9] w-full overflow-hidden bg-surface-sunken sm:aspect-[21/9]"
          >
            <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-ink-3">
              {study.title} cover
            </div>
          </motion.div>

          <div className="mx-auto w-full max-w-(--container-content) px-5 py-10 sm:px-6 lg:py-14">
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
                      }`}
                    >
                      {Array.from({ length: group.count }).map((_, ii) => {
                        const src = group.images?.[ii];
                        return src ? (
                          <div key={ii} className="aspect-[16/10] overflow-hidden rounded-md bg-surface-sunken">
                            <img src={src} alt="" className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <div
                            key={ii}
                            className="aspect-[16/10] rounded-md bg-surface-sunken"
                          />
                        );
                      })}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-16 font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-accent-ink hover:text-accent-strong"
            >
              ← Back to work
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
