"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const sections = [
  { id: "work", label: "Work" },
  { id: "perspective", label: "Perspective" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(88);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (barRef.current) setBarHeight(barRef.current.offsetHeight);
  }, [collapsed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[padding] duration-[var(--duration-state)]"
      style={{ transitionTimingFunction: "var(--ease-inout)" }}
    >
      <div
        ref={barRef}
        className={`mx-auto flex max-w-(--container-content) items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-[var(--duration-state)] ${
          collapsed ? "py-3" : "py-6"
        }`}
        style={{
          transitionTimingFunction: "var(--ease-inout)",
          backgroundColor: collapsed ? "color-mix(in srgb, var(--color-canvas) 82%, transparent)" : "transparent",
          backdropFilter: collapsed ? "blur(8px)" : "none",
          borderBottom: collapsed ? "1px solid var(--color-border-hairline)" : "1px solid transparent",
        }}
      >
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-ink"
        >
          S. Sharma
        </a>

        {/* Desktop anchors */}
        <nav className="hidden items-center gap-7 sm:flex" aria-label="Section navigation">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative font-[family-name:var(--font-label)] text-[12px] uppercase tracking-[0.06em] text-ink-2 transition-colors duration-[var(--duration-micro)] hover:text-ink"
              aria-current={active === id ? "true" : undefined}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent-ink"
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center sm:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform duration-[var(--duration-micro)] ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-ink transition-transform duration-[var(--duration-micro)] ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile full-height list */}
      {menuOpen && (
        <nav
          style={{ top: barHeight, height: `calc(100vh - ${barHeight}px)` }}
          className="fixed inset-x-0 flex flex-col gap-1 overflow-y-auto border-t border-border-hairline bg-canvas px-5 py-6 sm:hidden"
          aria-label="Section navigation"
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-[family-name:var(--font-display)] text-3xl text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
