export type Project = {
  slug: string;
  index: string;
  title: string;
  label: "Company work" | "Event project" | "Internship project" | "Bachelor project";
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
  email: "yaseen@almahayshi.dev",
  github: "https://github.com/Yaseen-Almhishi",
  githubLabel: "Yaseen-Almhishi",
  linkedin: "https://www.linkedin.com/in/yaseen-almahayshi/",
  linkedinLabel: "in/yaseen-almahayshi",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://almahayshi.dev",
  introduction:
    "I build APIs, integrations, data workflows, and modular business systems. My strongest work is on the backend, and I work across the stack when a problem needs it.",
  supporting:
    "My work includes data modelling, system design, documentation, debugging, and production maintenance as part of an engineering team.",
};

export const disclosureNote =
  "Company work is presented with permission at the project, contribution, and high-level technology level. Code, private repositories, customer data, credentials, and internal implementation details remain private.";

export const projects: Project[] = [
  {
    slug: "marsol",
    index: "01",
    title: "Marsol",
    label: "Company work",
    summary:
      "A communications platform whose public documentation covers REST APIs for SMS, OTP, sender IDs, virtual numbers, phonebooks, text-to-speech, and related services.",
    context:
      "Marsol is a communications platform developed at Cipher for messaging, verification, voice services, and virtual numbers.",
    role: "Backend, API, data, localization, maintenance, and documentation contributions as part of the Cipher team.",
    contributions: [
      "Contributed to backend services, APIs, data workflows, and localization as part of the Cipher engineering team.",
      "Supported maintenance and delivery across a mature communications product.",
      "Helped prepare and maintain public-facing API documentation.",
    ],
    areas: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "OpenAPI", "Docker"],
    boundary:
      "Source code, private repositories, architecture details, operating data, customers, credentials, metrics, and other non-public implementation details are intentionally omitted.",
    publicLink: { label: "Read the public API documentation", href: "https://docs.marsol.ly/" },
  },
  {
    slug: "salon-platform",
    index: "02",
    title: "Lumi",
    label: "Company work",
    summary:
      "A web-based salon-management platform for bookings, services, employees, administration, localization, and reporting, now deployed and in use.",
    context:
      "I started the Lumi project at Cipher and established its early technical and product foundation.",
    role: "Project initiation and early full-stack engineering contribution within Cipher.",
    contributions: [
      "Created the initial project foundation and contributed to its backend and data layers.",
      "Built early booking, scheduling, service, employee-management, administration, localization, reporting, and deployment workflows.",
    ],
    areas: [".NET", "ASP.NET Core", "Blazor", "Entity Framework Core", "PostgreSQL", "Radzen", "Serilog", "Docker"],
    boundary:
      "The project is discussed with company permission. Source code, private repository links, customer data, credentials, and internal implementation details are not disclosed.",
  },
  {
    slug: "fulfillment-platform",
    index: "03",
    title: "Riad",
    label: "Company work",
    summary:
      "A new commerce and fulfillment system covering catalog, inventory, vendors, checkout, payments, orders, shipping, and operational administration.",
    context:
      "Cipher is building Riad as a new commerce and fulfillment system and is preparing it for customer delivery.",
    role: "Full-stack software engineering contribution with a backend and modular-systems focus.",
    contributions: [
      "Contributed across catalog, inventory, vendors, shopping cart, checkout, payments, orders, shipping, notifications, and administrative workflows.",
      "Worked on APIs, background processing, integrations, data modelling, search, and real-time application concerns as part of the team.",
    ],
    areas: [".NET", "ASP.NET Core", "Blazor", "Entity Framework Core", "PostgreSQL", "Redis", "Hangfire", "SignalR", "Typesense", "Docker"],
    boundary:
      "The high-level product scope and stack are shared with company permission. Source code, private repository links, customer data, credentials, architecture details, and internal workflows remain private.",
  },
  {
    slug: "wallet-code-platform",
    index: "04",
    title: "Marsol Wallet",
    label: "Company work",
    summary:
      "A wallet and redeemable-code platform supporting code lifecycle, top-up usage, reporting, administration, and related operational workflows.",
    context:
      "I contributed to Marsol Wallet as part of the Cipher team, focusing on selected product and operational features.",
    role: "Software engineering contribution within Cipher.",
    contributions: [
      "Contributed to code validity, top-up usage statistics, configuration, exports, filtering, mail, deployment, and interface fixes.",
      "Supported backend services, data workflows, debugging, and maintenance as part of the wider team effort.",
    ],
    areas: [".NET", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "OpenAPI", "FIDO2", "Docker"],
    boundary:
      "The project and high-level stack are shared with company permission. Source code, private repository links, customer data, credentials, and internal implementation details are not disclosed.",
  },
  {
    slug: "roast-me-agent",
    index: "05",
    title: "RoastMeAgent",
    label: "Event project",
    summary:
      "An AI experience created for a local TEDx event and connected to a WhatsApp chatbot so attendees could generate playful, personalized roasts.",
    context:
      "The project turned an event interaction into a conversational experience combining image understanding, generated humor, audio, and WhatsApp delivery.",
    role: "Main software engineering contribution within the Cipher team.",
    contributions: [
      "Led most of the implementation work across the service, AI workflow, media generation, storage, and event delivery path.",
      "Integrated the experience with a WhatsApp chatbot so attendees could use it directly during the event.",
    ],
    areas: ["Python", "FastAPI", "Google ADK", "LiteLLM", "ElevenLabs", "Firebase", "Google Cloud Storage", "Docker"],
    boundary:
      "The event concept and high-level stack are shared with company permission. Prompts, private code, credentials, participant data, and internal implementation details remain private.",
  },
  {
    slug: "hemoly-tools",
    index: "06",
    title: "HemolyTools",
    label: "Event project",
    summary:
      "A set of digital tools created for a medical event in Tripoli, including a sticker-generation experience and WhatsApp-assisted delivery.",
    context:
      "I contributed to the event's creative tooling, particularly the sticker-generation and WhatsApp integration workflow.",
    role: "Focused software engineering contribution within the Cipher team.",
    contributions: [
      "Worked on reference-driven and batch sticker generation, the sticker library, and supporting interface flows.",
      "Contributed to the WhatsApp gateway path used to deliver generated event content.",
    ],
    areas: [".NET", "ASP.NET Core", "Blazor", "Entity Framework Core", "SQL Server", "React", "TypeScript", "WhatsApp Cloud API", "Docker"],
    boundary:
      "The event purpose, contribution, and high-level stack are shared with company permission. Medical or participant data, private code, credentials, prompts, and internal implementation details remain private.",
  },
  {
    slug: "roasting-machine",
    index: "07",
    title: "RoastingMachine",
    label: "Internship project",
    summary:
      "A playful image-to-roast prototype I worked on during my internship; its core idea later inspired RoastMeAgent.",
    context:
      "The project was an early exercise in connecting image analysis, generated text, speech, media storage, and a documented backend API.",
    role: "Substantial internship implementation contribution within Cipher.",
    contributions: [
      "Worked on image handling, generated captions and roasts, text-to-speech, object storage, API protection, logging, and documentation.",
      "Helped establish the technical idea that was later adapted into the event-focused RoastMeAgent experience.",
    ],
    areas: ["NestJS", "TypeScript", "AI image captioning", "Text-to-speech", "Object storage", "OpenAPI", "Docker"],
    boundary:
      "This is presented as an internship prototype, not a production product. Private code, credentials, prompts, stored media, and implementation details remain private.",
  },
  {
    slug: "biometric-voting-poc",
    index: "08",
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
      "Contribute across Marsol, Riad, Lumi, Marsol Wallet, and focused event systems while keeping private implementation details confidential.",
      "Made smaller contributions to iLab patient, request, permission, sample-handling, and settings workflows.",
      "Work across data modelling, modular system design, background processing, debugging, technical documentation, and frontend delivery when needed.",
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
