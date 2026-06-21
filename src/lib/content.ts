export type ImpactFigure = {
  figure: string;
  label: string;
  labelLines?: [string, string];
  linkedCase?: string;
  externalLink?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  outcome: string;
  role: string;
  timeline: string;
  constraints?: string;
  cover: string;
  lead?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "staynow",
    title: "StayNow",
    outcome: "Location-first travel platform, concept to MVP in 90 days, contributing to a $2.2M seed raise.",
    role: "Senior Product Designer (UX/Visual)",
    timeline: "2022-2024 First 3 Months MVP Sprint",
    constraints: "Zero behavioral data, 90-day sprint, fixed engineering scope",
    cover: "/case-staynow.jpg",
    lead: true,
  },
  {
    slug: "botpenguin",
    title: "BotPenguin",
    outcome: "Led product design across AI-powered customer engagement workflows, balancing growth, usability, and system consistency.",
    role: "Assistant Manager – Product Design",
    timeline: "2026",
    cover: "/case-botpenguin.jpg",
  },
  {
    slug: "cloud-data-platform",
    title: "B2B Cloud Data Product",
    outcome: "Reduced Time-to-First-Query by 40% for a Fortune 500 cloud data platform.",
    role: "Product Designer (UX + Visual)",
    timeline: "1-month sprint, 1.6-year engagement",
    constraints: "Fortune 500 enterprise, trial activation scope, 1-month sprint",
    cover: "/case-cloud-data.jpg",
  },
];

export const impactFigures: ImpactFigure[] = [
  {
    figure: "$2.2M",
    label: "Seed funding secured, StayNow MVP",
    labelLines: ["Seed funding secured,", "StayNow MVP"],
    linkedCase: "staynow",
    externalLink: "https://timesofstartups.com/funding/staynow-secures-2-2m-in-funding-to-empower-independent-hotel-owners/",
  },
  { figure: "3 Industries", label: "Spanning AI, SaaS, and Travel" },
  { figure: "5 Years", label: "Turning ambiguity into systems" },
  {
    figure: "0→1",
    label: "Products designed from concept to launch",
    labelLines: ["Products designed from concept", "to launch"],
  },
];

export type Belief = {
  id: string;
  claim: string;
  reasoning: string;
};

export const beliefs: Belief[] = [
  {
    id: "defaults",
    claim: "Defaults are decisions.",
    reasoning:
      "Products communicate intent through defaults long before users read instructions.",
  },
  {
    id: "speed",
    claim: "Speed is a design property.",
    reasoning:
      "Latency, clarity, and responsiveness are part of the experience, not implementation details.",
  },
  {
    id: "systems",
    claim: "Systems scale trust.",
    reasoning:
      "Consistency is not repetition. It is what allows products to remain understandable as they grow.",
  },
  {
    id: "tradeoffs",
    claim: "Good design makes tradeoffs visible.",
    reasoning:
      "Every decision optimizes for something and sacrifices something. Design should make those choices intentional.",
  },
];
