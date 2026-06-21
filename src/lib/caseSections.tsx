import type { ReactNode } from "react";

export type CaseSection = {
  heading: string;
  body: string | ReactNode;
  imageGroups?: { count: number; columns: 1 | 2 | 3 | 4; images?: string[] }[];
};

// Default placeholder sections (used by cases without their own content yet)
export const caseSections: CaseSection[] = [
  {
    heading: "Problem",
    body:
      "Users abandoned setup before reaching first value. Support volume from confused new accounts was the single largest ticket category, and the trend was worsening each quarter as the user base broadened past early adopters.",
  },
  {
    heading: "Context & Constraints",
    body:
      "The existing flow was built incrementally over three years by different teams, with no owner accountable for the sequence as a whole. Engineering capacity was fixed at two sprints. Any redesign had to ship without a backend rewrite.",
  },
  {
    heading: "Approach",
    body:
      "I mapped every existing step against the decision it required from the user, then separated steps that were genuinely necessary before first value from steps that could move later or disappear. Most steps fell into the second group.",
  },
  {
    heading: "Key Decisions",
    body:
      "Deferred account configuration until after the user had something working. Replaced a six-field form with a single default, editable later. Removed a confirmation step that existed only to satisfy an internal audit requirement, after confirming with legal it was not actually required.",
  },
  {
    heading: "Outcome",
    body:
      "Time-to-first-value dropped from a median of 14 minutes to 3. Setup-related support tickets fell by 71% in the following quarter. The simplified flow shipped without any backend changes, inside the original two-sprint window.",
  },
  {
    heading: "Lessons Learned",
    body:
      "Most onboarding friction wasn't unclear copy or weak UI. It was unnecessary steps inherited from old constraints nobody had re-examined. The highest-leverage design work was deletion, not addition.",
  },
];

const staynowSections: CaseSection[] = [
  {
    heading: "Problem",
    body: "Travel platforms optimize transactions, not experiences. Hotels are reduced to generic listings sorted by price, while the most uncertain and emotional parts of travel happen after payment. Travelers increasingly care about neighborhood fit, local context, and confidence, yet existing platforms stop delivering value once a reservation is confirmed. The opportunity was not to build another booking engine, but to own the journey around it.",
  },
  {
    heading: "Context & Constraints",
    body: "The project began with no behavioral data and a non-negotiable 90-day timeline. Investor demos were already scheduled, engineering capacity was fixed, and the product had to move from a concept to a venture-ready MVP without expanding scope. To preserve speed and clarity, the guest experience was prioritized while hotelier-facing workflows were deferred to the broader one-year engagement that followed.",
  },
  {
    heading: "Discovery & Strategy",
    body: (
      <>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">We benchmarked leading OTAs and hospitality products to understand where value was created and where it disappeared. The analysis consistently revealed the same pattern: platforms performed well during booking but abandoned travellers immediately after payment.</p>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">Qualitative research mapped the end-to-end journey of our primary persona and highlighted the transition between booking and arrival as the point where trust broke down. Through workshops with stakeholders, these insights were translated into a set of principles centered around reducing adoption risk and establishing trust as a new entrant.</p>
        <p className="mt-4 text-lg leading-relaxed text-ink-2"><strong>The conclusion was clear: competing on inventory would make StayNow another commodity. Differentiation had to come from continuity and local context.</strong></p>
      </>
    ),
    imageGroups: [
      { count: 2, columns: 2, images: ["/staynow-image-01.avif", "/staynow-phases.png"] },
    ],
  },
  {
    heading: "Key Decision 01 — Design travel as a shared experience, not a solo task",
    body: "Research showed that trip planning was already happening across chats, screenshots, and external tools. Rather than treating travel as an individual activity, the MVP introduced collaborative trips, shared wishlists, group chats, and polling to bring planning into a single experience. The goal was to reduce coordination overhead and make decision-making visible across everyone involved in the trip.",
    imageGroups: [
      { count: 1, columns: 1, images: ["/staynow-kd01.png"] },
    ],
  },
  {
    heading: "Key Decision 02 — Replace hotel search with location-first discovery",
    body: "Competing on inventory or price was unrealistic. Instead, discovery centered around neighborhoods, local experiences, and contextual storytelling. Interactive maps, Hotel Stories, and location-driven exploration helped travelers evaluate destinations through atmosphere and experiences rather than generic price-sorted lists. The platform positioned booking as an extension of place, not the other way around.",
    imageGroups: [
      { count: 1, columns: 1, images: ["/staynow-kd02.png"] },
    ],
  },
  {
    heading: "Key Decision 03 — Extend the experience beyond the booking confirmation",
    body: "Most OTAs stop providing value once a reservation is made. StayNow was designed to support guests through the transition from booking to arrival. Pre-check-in, ID verification, digital keys, and contextual trip information reduced uncertainty during the highest-anxiety stage of the journey. The objective was to create continuity between reservation and arrival rather than treating them as separate experiences.",
    imageGroups: [
      { count: 1, columns: 1, images: ["/staynow-kd03.png"] },
    ],
  },
  {
    heading: "Key Decision 04 — Turn feedback into a participation loop",
    body: "Reviews are traditionally treated as a transactional task after the trip ends. StayNow reframed them as a way to sustain engagement beyond checkout. Structured reviews, media uploads, and reward points encouraged contribution while creating a richer layer of trust for future travelers. By connecting feedback with incentives, the experience extended beyond a single stay and reinforced the ecosystem over time.",
    imageGroups: [
      { count: 1, columns: 1, images: ["/staynow-kd04.png"] },
    ],
  },
  {
    heading: "Outcome",
    body: (
      <>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">
          The MVP shipped within the 90-day timeline and helped communicate a coherent product vision to investors, contributing to a{" "}
          <a
            href="https://timesofstartups.com/funding/staynow-secures-2-2m-in-funding-to-empower-independent-hotel-owners/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 underline text-accent-ink hover:text-accent-strong transition-colors"
          >
            $2.2M seed raise
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="shrink-0 translate-y-[-1px]">
              <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>{" "}
          within three months of launch.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">The engagement established a scalable visual language and design system across web and mobile, supporting more than twenty core experiences and providing the foundation for the year-long product roadmap that followed.</p>
      </>
    ),
  },
  {
    heading: "Lessons Learned",
    body: "The most valuable opportunities are often found outside an industry's accepted definition of the problem. Starting without behavioral data forced every decision to be grounded in research and explicit tradeoffs rather than assumptions.\n\nThe hardest design work was not deciding what to build in ninety days. It was deciding what not to build.",
  },
];

const cloudDataPlatformSections: CaseSection[] = [
  {
    heading: "Problem",
    body: "Powerful technology, low activation. The platform delivered real value to technical users who reached it, but most trial users never got there. Four friction points blocked them at the start: an empty workspace with no orientation, complete dependency on external documentation, generic onboarding that ignored role or use case, and a core experience that was only discoverable after significant setup. The result was high trial abandonment before users ever saw what the product could do.",
  },
  {
    heading: "Context & Constraints",
    body: "The client was a Fortune 500 enterprise with an established cloud data platform. The engagement ran 1.6 years in total, but this project was scoped to a single month, focused exclusively on the trial activation path. Scope could not expand to include the full product, infrastructure, or onboarding backend. Every decision had to work within what already existed.",
  },
  {
    heading: "Discovery & Strategy",
    body: "The research question was not what is wrong with onboarding but what makes trials work. The insight that reframed the project: great trials do not explain value. They engineer it.\n\nWe audited activation patterns across enterprise SaaS products and identified four characteristics that distinguished successful trials: they captured context early to personalize the experience, they brought support into the product rather than routing users out to documentation, they removed blank states that left users without a starting point, and they guided without restricting, steering users toward value without locking them into a single path.",
    imageGroups: [
      { count: 1, columns: 1 },
      { count: 2, columns: 2 },
    ],
  },
  {
    heading: "Key Decision 01 — Capture context at the start, not at setup",
    body: "We introduced an environment personalization step at trial entry. By asking a few targeted questions about role and use case upfront, the product could shape the workspace before users encountered it, eliminating the blank-state problem and setting a more relevant starting point.",
    imageGroups: [
      { count: 2, columns: 2 },
    ],
  },
  {
    heading: "Key Decision 02 — Make support part of the product",
    body: "Rather than routing users to external documentation, we embedded contextual guidance directly into the interface. Help surfaced where and when it was relevant, reducing the dependency on outside resources and keeping users inside the product during the moments they were most likely to abandon.",
    imageGroups: [
      { count: 2, columns: 2 },
    ],
  },
  {
    heading: "Key Decision 03 — Pre-load the workspace with sample data",
    body: "Instead of asking users to connect data sources before they had seen any value, we shipped a ready-to-run workspace with sample datasets. Users could run their first query immediately, experiencing the core value of the product before any setup was required.",
    imageGroups: [
      { count: 3, columns: 3 },
    ],
  },
  {
    heading: "Key Decision 04 — Reinforce value through validation",
    body: "To accelerate confidence, we added social proof and performance indicators at key moments in the trial. Seeing that similar companies had succeeded, alongside real query performance data, gave users a signal that the product could deliver before they had committed to full integration.",
    imageGroups: [
      { count: 2, columns: 2 },
    ],
  },
  {
    heading: "Outcome",
    body: "Time-to-First-Query dropped by 40%. The embedded guidance removed the primary source of trial abandonment. The activation path shifted from requiring support intervention to being self-serve. The approach also produced a reusable activation framework that the product team could apply beyond the trial scope.",
  },
  {
    heading: "Lessons Learned",
    body: "Enterprise products do not need to hide sophistication. They need to reveal it at the right time. The instinct in complex products is often to simplify or reduce, but the real problem here was sequencing. Users were not leaving because the product was too hard. They were leaving before they understood what it was.",
  },
];

export function getCaseSections(slug: string): CaseSection[] {
  if (slug === "staynow") return staynowSections;
  if (slug === "cloud-data-platform") return cloudDataPlatformSections;
  return caseSections;
}
