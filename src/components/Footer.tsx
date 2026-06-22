"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-surface-dark px-5 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-(--container-content)">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,9rem)] font-light leading-[0.9] tracking-[-0.02em] text-on-dark"
        >
          Shivam Sharma
        </motion.p>

        <div className="mt-12 flex flex-col gap-6 border-t border-[rgba(255,255,255,0.12)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-on-dark-2">
            Designed and built by Shivam Sharma.
          </p>
          <nav className="flex gap-6">
            {[
              { label: "Email", href: "mailto:sh.sharma2911@gmail.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/shivamsharma2911" },
              { label: "GitHub", href: "https://github.com/samsharma291999-cmd" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-on-dark-2 transition-colors duration-[var(--duration-micro)] hover:text-accent-on-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
