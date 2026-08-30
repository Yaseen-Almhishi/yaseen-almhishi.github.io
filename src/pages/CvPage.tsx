import { Link } from "react-router-dom";
import {
  community,
  education,
  experience,
  languages,
  profile,
  projects,
  researchInterests,
  skillGroups,
} from "../data/content";

type CvKind = "professional" | "academic";

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="cv-section"><h2><span aria-hidden="true">§</span>{title}<i /></h2>{children}</section>;
}

function CvEntry({ title, meta, sub, children }: { title: string; meta?: string; sub?: string; children?: React.ReactNode }) {
  return (
    <article className="cv-entry">
      <div className="cv-entry-heading"><h3>{title}</h3>{meta ? <time>{meta}</time> : null}</div>
      {sub ? <p className="cv-entry-sub">{sub}</p> : null}
      {children}
    </article>
  );
}

function CvBullets({ items }: { items: readonly string[] }) {
  return <ul className="cv-bullets">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function CvHeader({ kind }: { kind: CvKind }) {
  return (
    <header className="cv-header">
      <div><h1>{profile.name}<span>.</span></h1><p className="label">{profile.role} · {kind === "professional" ? "Professional CV" : "Academic CV"}</p></div>
      <address>
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.siteUrl}>{profile.siteUrl.replace(/^https?:\/\//, "")}</a>
        <a href={profile.github}>github.com/{profile.githubLabel}</a>
        <a href={profile.linkedin}>linkedin.com/{profile.linkedinLabel}</a>
      </address>
    </header>
  );
}

function CvSkills() {
  return (
    <CvSection title="Technical skills">
      <div className="cv-skills">
        {skillGroups.map((group) => <p key={group.label}><strong>{group.label}</strong><span>{group.items.join(", ")}</span></p>)}
      </div>
    </CvSection>
  );
}

function CvCommunity() {
  return (
    <CvSection title="Languages & community">
      <p>{languages.map((item) => `${item.name} (${item.level})`).join(" · ")}</p>
      <p className="cv-muted">{community.join(" · ")}</p>
    </CvSection>
  );
}

function ProfessionalCv() {
  const marsol = projects.find((project) => project.slug === "marsol")!;
  const lumi = projects.find((project) => project.slug === "salon-platform")!;
  const riad = projects.find((project) => project.slug === "fulfillment-platform")!;
  const roastMeAgent = projects.find((project) => project.slug === "roast-me-agent")!;
  const hemolyTools = projects.find((project) => project.slug === "hemoly-tools")!;
  return (
    <>
      <CvHeader kind="professional" />
      <CvSection title="Profile">
        <p>Backend-focused software engineer building APIs, integrations, data workflows, and modular business systems across .NET and TypeScript stacks.</p>
      </CvSection>
      <CvSection title="Experience">
        <CvEntry title={`${experience[0].role} — ${experience[0].organization}`} meta={experience[0].dates}>
          <CvBullets items={[
            "Build and maintain backend services, APIs, integrations, and business workflows across .NET and TypeScript systems.",
            "Contribute across Marsol, Riad, Lumi, and event systems; additional work includes Marsol Wallet, iLab, and RoastingMachine.",
            "Work across data modelling, modular design, background processing, debugging, documentation, and frontend delivery when needed.",
          ]} />
        </CvEntry>
      </CvSection>
      <CvSection title="Selected work">
        <CvEntry title={marsol.title} sub="NestJS · TypeScript · PostgreSQL · Redis · Prisma · BullMQ">
          <CvBullets items={["Contribute to backend services, APIs, data workflows, localization, maintenance, and public-facing API documentation."]} />
        </CvEntry>
        <CvEntry title={lumi.title} sub="ASP.NET Core · Blazor · Entity Framework Core · PostgreSQL">
          <CvBullets items={["Started the web platform and built its early backend, data, booking, scheduling, administration, localization, and reporting foundation."]} />
        </CvEntry>
        <CvEntry title={riad.title} sub="ASP.NET Core · Blazor · PostgreSQL · Redis · Hangfire · SignalR">
          <CvBullets items={["Contribute across catalog, inventory, vendors, checkout, payments, orders, shipping, search, notifications, and administration."]} />
        </CvEntry>
        <CvEntry title={`${roastMeAgent.title} & ${hemolyTools.title}`} sub="FastAPI · AI services · ASP.NET Core · Blazor · WhatsApp integrations">
          <CvBullets items={[
            "Main contributor to RoastMeAgent, a WhatsApp-connected AI experience for a local TEDx event.",
            "Contributed sticker-generation, library, and WhatsApp delivery workflows to HemolyTools for a medical event in Tripoli.",
          ]} />
        </CvEntry>
      </CvSection>
      <CvSkills />
      <CvSection title="Education">
        {education.map((item) => <CvEntry key={item.program} title={`${item.program} — ${item.institution}`} meta={item.dates} sub={item.location} />)}
      </CvSection>
      <CvSection title="Languages">
        <p>{languages.map((item) => `${item.name} (${item.level})`).join(" · ")}</p>
      </CvSection>
    </>
  );
}

function AcademicCv() {
  const bachelorProject = projects.find((project) => project.slug === "biometric-voting-poc")!;
  return (
    <>
      <CvHeader kind="academic" />
      <CvSection title="Academic profile">
        <p>Computer Science graduate and backend-focused software engineer interested in reliable software systems, privacy-aware design, APIs, and data-intensive workflows.</p>
      </CvSection>
      <CvSection title="Education">
        {education.map((item) => <CvEntry key={item.program} title={`${item.program} — ${item.institution}`} meta={item.dates} sub={`${item.location}${item.detail ? ` · ${item.detail}` : ""}`} />)}
      </CvSection>
      <CvSection title="Bachelor project">
        <CvEntry title={bachelorProject.title} sub="Academic proof of concept">
          <CvBullets items={bachelorProject.contributions} />
          <p className="cv-muted">{bachelorProject.boundary}</p>
        </CvEntry>
      </CvSection>
      <CvSection title="Research interests"><CvBullets items={researchInterests} /></CvSection>
      <CvSection title="Professional experience">
        <CvEntry title={`${experience[0].role} — ${experience[0].organization}`} meta={experience[0].dates}>
          <CvBullets items={experience[0].points.slice(0, 2)} />
        </CvEntry>
      </CvSection>
      <CvSkills />
      <CvCommunity />
    </>
  );
}

export function CvPage({ kind }: { kind: CvKind }) {
  const other = kind === "professional" ? "academic" : "professional";
  return (
    <main className="cv-page">
      <div className="cv-toolbar no-print">
        <Link to="/">← Back to site</Link>
        <div><Link to={`/cv/${other}`}>{other === "professional" ? "Professional CV" : "Academic CV"}</Link><button type="button" onClick={() => window.print()}>Print / Save as PDF</button></div>
      </div>
      <article className="cv-sheet">{kind === "professional" ? <ProfessionalCv /> : <AcademicCv />}</article>
    </main>
  );
}
