import type { ReactNode } from "react";

export type CaseSection = {
  heading: string;
  body: string | ReactNode;
  imageGroups?: { count: number; columns: 1 | 2 | 3 | 4; images?: string[]; className?: string }[];
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
      { count: 1, columns: 1, images: ["/staynow-kd04.png"], className: "max-w-lg mx-auto" },
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
    body: "Despite industry-leading query performance, the platform struggled to convert trial users into activated customers. Sales feedback revealed a consistent pattern: users abandoned the platform before experiencing its core value. Warehouse setup was lengthy, documentation lived outside the product, and new users were often dropped into empty states with little guidance. The result was a growing gap between technical capability and user activation.\n\nThe opportunity was not to simplify the product itself, but to reduce the distance between signup and the first successful query.",
  },
  {
    heading: "Context & Constraints",
    body: "The project was a one-month sprint within a broader 1.6-year engagement with a Fortune 500 cloud data company. Engineering capacity and timelines were fixed, while the objective was clear: transition a high-touch onboarding process into a scalable self-service experience. With limited time and no room for large architectural changes, the redesign had to focus on activation rather than expanding functionality. Success depended on helping users experience value quickly without sacrificing the platform's technical depth.",
  },
  {
    heading: "Discovery & Strategy",
    body: "An audit of the existing experience revealed four major friction points. Users landed on a dead-end warehouse screen without clear next steps, documentation forced them into external websites, all personas followed the same generic path, and the platform's most important action, running a query, remained hidden behind multiple layers.\n\nBenchmarking enterprise platforms and cross-domain SaaS products showed a different pattern. Successful onboarding experiences maintained momentum through progressive profiling, embedded support, and contextual guidance rather than overwhelming users with documentation. Conversations with stakeholders and technical subject matter experts further highlighted that Data Engineers and Database Administrators had fundamentally different goals, yet both needed to reach value quickly.\n\nThese insights led to a simple conclusion: great trials don't explain value, they engineer it. Activation had to become the product's primary experience rather than a prerequisite to it.",
    imageGroups: [{ count: 2, columns: 2, images: ["/aero-ds-signup.png", "/aero-ds-old-dashboard.png"] }],
  },
  {
    heading: "Key Decision 01 Personalize the environment, not just the interface",
    body: "Traditional onboarding assumed users would adapt to the product. Instead, the experience captured technical context and user goals during signup to shape the workspace around their needs. Role-based tasks and environment configuration reduced unnecessary setup and created momentum immediately after account creation. Rather than entering a generic platform, users entered an experience designed around the outcome they wanted to achieve.",
    imageGroups: [{ count: 2, columns: 2, images: ["/aero-kd01-smart-entry.png", "/aero-kd01-context-capture.png"] }],
  },
  {
    heading: "Key Decision 02 Bring support inside the workflow",
    body: "The biggest source of drop-off wasn't complexity itself, but the interruption caused by leaving the product. Documentation, guidance, and communication were integrated directly into the experience through contextual help and an in-product inbox. Users could learn, ask questions, and continue working without losing momentum. Support became part of the workflow instead of a separate destination.",
    imageGroups: [{ count: 1, columns: 1, images: ["/aero-kd02-guidance.png"] }],
  },
  {
    heading: "Key Decision 03 Guide users toward activation instead of expecting discovery",
    body: "The original information architecture prioritized administration over activation, leaving users responsible for discovering value themselves. Navigation was restructured to surface critical tasks, while progress indicators and contextual nudges provided clear next steps. Rather than presenting a powerful but overwhelming platform, the experience actively guided users toward the milestone that mattered most.",
    imageGroups: [{ count: 1, columns: 1, images: ["/aero-kd03-inbox.png"] }],
  },
  {
    heading: "Key Decision 04 Eliminate the blank cursor problem",
    body: "The query editor represented the platform's \"Aha!\" moment, yet users were greeted with an empty environment and little confidence about what to do next. Instead of forcing exploration, the workspace was populated with meaningful sample data and prepared queries that provided a warm start. Users could validate performance immediately, reducing uncertainty and shortening the path to their first successful query.",
    imageGroups: [{ count: 1, columns: 1, images: ["/aero-kd04-query-env.png"] }],
  },
  {
    heading: "Key Decision 05 Reinforce value through visible proof",
    body: "Running a query alone wasn't enough. Users also needed confidence that the platform delivered on its promise. Performance feedback and social validation were introduced to reinforce trust and connect technical actions with tangible outcomes. Instead of asking users to believe in the platform, the experience continuously demonstrated its capabilities.",
    imageGroups: [{ count: 1, columns: 1, images: ["/aero-kd05-performance-proof.png"] }],
  },
  {
    heading: "Outcome",
    body: "The redesign transformed warehouse setup from a major sales bottleneck into a high-velocity activation flow. By focusing on reducing friction and guiding users toward meaningful milestones, the experience reduced Time-to-First-Query by 40% and shifted the platform from a manual onboarding process toward a scalable self-service model.\n\nThe project established a repeatable activation framework that aligned user success with business outcomes, proving that increasing adoption wasn't about adding more education, but about helping users experience value sooner.",
  },
  {
    heading: "Lessons Learned",
    body: "Complex enterprise products don't fail because users lack information. They fail when users are unable to connect capabilities with outcomes. Working within a one-month sprint reinforced that activation is not a stage before the product, it is the product.\n\nThe most impactful decisions were not about simplifying technical complexity. They were about designing momentum and ensuring users reached value before complexity had a chance to overwhelm them.",
  },
];

export function getCaseSections(slug: string): CaseSection[] {
  if (slug === "staynow") return staynowSections;
  if (slug === "cloud-data-platform") return cloudDataPlatformSections;
  return caseSections;
}

export function getCaseNotice(slug: string): string | null {
  if (slug === "cloud-data-platform") {
    return "Client name and identifying details have been changed to protect confidentiality.";
  }
  return null;
}
