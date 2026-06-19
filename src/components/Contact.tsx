"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border-hairline px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-(--container-content)">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.36, ease }}
          className="max-w-2xl"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] font-semibold text-ink">
            I&rsquo;m always interested in conversations around product design, systems thinking, and ambitious products.
          </h2>
          <p className="mt-5 text-lg text-ink-2">
            The fastest way to reach me is email. I respond within a day.
          </p>
          <a
            href="mailto:sam.sharma291999@gmail.com"
            className="mt-8 inline-flex h-12 items-center rounded-sm bg-accent-strong px-7 font-[family-name:var(--font-label)] text-[13px] uppercase tracking-[0.06em] text-on-dark transition-[filter,box-shadow] duration-[var(--duration-micro)] hover:brightness-110 hover:shadow-md active:scale-[0.99]"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
