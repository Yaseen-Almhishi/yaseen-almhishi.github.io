export type Project = {
  slug: string;
  index: string;
  title: string;
  label: "Publicly documented" | "Private work" | "Bachelor project";
  summary: string;
  context: string;
  role: string;
  contributions: string[];
  areas: string[];
  boundary: string;
  publicLink?: { label: string; href: string };
};

export type Experience = {
  organization: string;
  role: string;
  dates: string;
  points: string[];
};

export type Education = {
  program: string;
  institution: string;
  location: string;
  dates: string;
  detail?: string;
};

export const profile = {
  name: "Yaseen Almahayshi",
  role: "Backend-focused Software Engineer",
  location: "Misurata, Libya",
  email: "yaseen.almahayshi@gmail.com",
  github: "https://github.com/Yaseen-Almhishi",
  githubLabel: "Yaseen-Almhishi",
  linkedin: "https://www.linkedin.com/in/yaseen-almahayshi/",
  linkedinLabel: "in/yaseen-almahayshi",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://yaseen-almhishi.github.io",
  introduction:
    "I build APIs, integrations, data workflows, and modular business systems. My strongest work is on the backend, and I work across the stack when a problem needs it.",
  supporting:
    "My work includes data modelling, system design, documentation, debugging, and production maintenance as part of an engineering team.",
};

export const disclosureNote =
  "Private projects are described only by category, role, general constraints, and approved engineering contributions.";

export const projects: Project[] = [
  {
    slug: "marsol",
    index: "01",
    title: "Marsol",
    label: "Publicly documented",
    summary:
      "A communications platform whose public documentation covers REST APIs for SMS, OTP, sender IDs, virtual numbers, phonebooks, text-to-speech, and related services.",
    context:
      "Marsol is a communications platform developed at Cipher. It is described here only at the product-and-service level of its public API documentation.",
    role: "Software engineering and documentation contributions as part of the Cipher team.",
    contributions: [
      "Contributed as a software engineer on the Cipher team.",
      "Worked primarily on backend-related tasks.",
      "Helped prepare and maintain public-facing API documentation.",
    ],
    areas: ["Software engineering", "Backend development", "API documentation", "Team delivery"],
    boundary:
      "The public documentation is the limit of the product description here. Architecture, source code, operating data, customers, credentials, metrics, and other non-public implementation details are intentionally omitted.",
    publicLink: { label: "Read the public API documentation", href: "https://docs.marsol.ly/" },
  },
  {
    slug: "salon-platform",
    index: "02",
    title: "Salon-management platform",
    label: "Private work",
    summary:
      "Backend, data, administration, and operational work for a private salon-management platform at Cipher.",
    context:
      "A private company project in the salon-management category. The public description deliberately stops at the category and contribution level.",
    role: "Software engineering contribution within Cipher.",
    contributions: [
      "Contributed to server-side features, data modelling, and administrative workflows.",
      "Supported debugging, maintenance, and integration work as the system evolved.",
    ],
    areas: ["Backend services", "Data modelling", "Administrative workflows", "Maintenance"],
    boundary:
      "The product name, screenshots, code, client information, schemas, architecture, and private workflows are not disclosed.",
  },
  {
    slug: "fulfillment-platform",
    index: "03",
    title: "Fulfillment & commerce platform",
    label: "Private work",
    summary:
      "Backend and modular business-system work for a private fulfillment and commerce platform at Cipher.",
    context:
      "A private company project in the fulfillment and commerce category. This description avoids product identity and implementation details.",
    role: "Software engineering contribution with a backend and modular-systems focus.",
    contributions: [
      "Contributed to backend components and administrative workflows.",
      "Worked across integration, data-modelling, and system-design concerns as part of the team.",
    ],
    areas: ["Backend systems", "Integrations", "Data modelling", "System design"],
    boundary:
      "The product identity, customers, metrics, screenshots, code, internal diagrams, and private workflows are not disclosed.",
  },
  {
    slug: "wallet-code-platform",
    index: "04",
    title: "Wallet & code-redemption platform",
    label: "Private work",
    summary:
      "Backend work for a private wallet and redeemable-code platform at Cipher.",
    context:
      "A private company project in the wallet and code-redemption category. The description remains at category and contribution level because the repository and product details are not public.",
    role: "Software engineering contribution within Cipher.",
    contributions: [
      "Contributed to backend services, APIs, and related business workflows.",
      "Supported data modelling, validation, testing, debugging, and maintenance.",
    ],
    areas: ["Backend services", "REST APIs", "Data modelling", "Testing"],
    boundary:
      "Product names, screenshots, code, schemas, customers, metrics, and non-public implementation details are intentionally omitted.",
  },
  {
    slug: "biometric-voting-poc",
    index: "05",
    title: "Biometric voting — proof of concept",
    label: "Bachelor project",
    summary:
      "An academic prototype exploring biometric verification within a permissioned-blockchain voting workflow.",
    context:
      "My individual Bachelor of Computer Science graduation project, completed as a research proof of concept.",
    role: "Individual project — research, implementation, integration, evaluation design, and documentation.",
    contributions: [
      "Built the prototype workflow across biometric feature extraction, election-specific identifier hashing, permissioned-ledger logic, and command-line integration.",
      "Defined and documented the architecture, threat assumptions, evaluation criteria, constraints, and limitations.",
    ],
    areas: ["Python", "Hyperledger Fabric", "Systems integration", "Security evaluation"],
    boundary:
      "This is an academic prototype, not a production voting system. Its evaluation uses prototype and synthetic/local conditions; it does not establish deployment readiness, absolute anonymity, or population-scale biometric performance.",
  },
];

export const experience: Experience[] = [
  {
    organization: "Cipher",
    role: "Software Engineer",
    dates: "Sep 2023 — Present",
    points: [
      "Build and maintain backend services, APIs, integrations, and business workflows.",
      "Contribute to data modelling, modular system design, debugging, and technical documentation.",
      "Work across the stack when a product or operational problem requires it.",
    ],
  },
];

export const education: Education[] = [
  {
    program: "BSc Computer Science",
    institution: "Misurata University",
    location: "Misurata, Libya",
    dates: "Completed 23 Feb 2026 · 2025/2026",
  },
  {
    program: "Erasmus+ exchange semester",
    institution: "Riga Technical University",
    location: "Riga, Latvia",
    dates: "Jan — Jun 2025",
    detail: "One academic semester at Riga Technical University through the Erasmus+ programme.",
  },
];

export const skillGroups = [
  { label: "Programming", items: ["C#", "TypeScript", "JavaScript", "SQL"] },
  {
    label: "Backend & frameworks",
    items: ["ASP.NET Core", "Blazor Server", "NestJS", "Node.js", "Entity Framework Core", "Prisma", "SignalR"],
  },
  { label: "Data", items: ["PostgreSQL", "SQL Server", "Redis", "Data modelling"] },
  {
    label: "APIs & practice",
    items: ["REST APIs", "GraphQL", "API design", "Integrations", "Modular systems", "Debugging", "Technical documentation", "Git & GitHub"],
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B1 certified" },
] as const;

export const community = [
  "Scout Movement member and volunteer, 2018 — Present",
  "Debate and development activities, 2019 — 2021",
] as const;

export const researchInterests = [
  "Backend and distributed systems",
  "Privacy-aware system design",
  "Reliable APIs and data-intensive workflows",
] as const;
