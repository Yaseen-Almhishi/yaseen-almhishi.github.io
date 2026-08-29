import { Link } from "react-router-dom";
import { ProjectRow } from "../components/ProjectRow";
import {
  disclosureNote,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "../data/content";

function Section({
  id,
  index,
  title,
  aside,
  children,
}: {
  id: string;
  index: string;
  title: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="editorial-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-rail">
        <p className="label section-number">{index}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {aside ? <p className="section-aside">{aside}</p> : null}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

export function HomePage() {
  return (
    <main>
      <section className="intro" id="top" aria-labelledby="hero-title">
        <aside className="intro-rail">
          <p className="label">{profile.location}</p>
          <p className="intro-note">A backend engineer&apos;s corner of the web.</p>
        </aside>
        <div className="intro-copy">
          <p className="label intro-role">{profile.role}</p>
          <h1 id="hero-title">Yaseen<br /><em>Almahayshi</em><span>.</span></h1>
          <p className="intro-primary">{profile.introduction}</p>
          <p className="intro-secondary">{profile.supporting}</p>
          <nav className="intro-actions" aria-label="Page shortcuts">
            <a href="#work">Selected work</a><i aria-hidden="true">·</i>
            <a href="#contact">Get in touch</a><i aria-hidden="true">·</i>
            <Link to="/cv/professional">CV</Link>
          </nav>
        </div>
      </section>

      <Section id="work" index="01" title="Selected work" aside={disclosureNote}>
        <div className="project-list">
          {projects.map((project) => <ProjectRow key={project.slug} project={project} />)}
        </div>
      </Section>

      <Section id="experience" index="02" title="Experience & education">
        <div className="path-block">
          <p className="label path-label">Work</p>
          {experience.map((item) => (
            <article className="path-entry" key={`${item.organization}-${item.role}`}>
              <div className="path-heading">
                <h3>{item.role} <span>· {item.organization}</span></h3>
                <time>{item.dates}</time>
              </div>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="path-block">
          <p className="label path-label">Education</p>
          {education.map((item) => (
            <article className="education-entry" key={item.program}>
              <div className="path-heading">
                <h3>{item.program}</h3>
                <time>{item.dates}</time>
              </div>
              <p>{item.institution}, {item.location}</p>
              {item.detail ? <p className="education-detail">{item.detail}</p> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="profile"
        index="03"
        title="Technical profile"
        aside="Tools I have worked with. No ratings or percentages."
      >
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <p className="label">{group.label}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
          <div className="skill-row">
            <p className="label">Languages</p>
            <ul>{languages.map((item) => <li key={item.name}>{item.name} <span>— {item.level}</span></li>)}</ul>
          </div>
        </div>
      </Section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-rail">
          <p className="label section-number">04</p>
          <h2 id="contact-title">Get in touch</h2>
        </div>
        <div className="section-content contact-content">
          <p className="contact-lead">For engineering collaboration, academic opportunities, or a thoughtful technical conversation.</p>
          <ul className="contact-links">
            <li><span className="label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="label">GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">{profile.githubLabel}</a></li>
            <li><span className="label">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a></li>
          </ul>
          <div className="cv-links">
            <p className="label">View / print</p>
            <div>
              <Link to="/cv/professional"><span><strong>Professional CV</strong><small>Backend-focused</small></span><b aria-hidden="true">→</b></Link>
              <Link to="/cv/academic"><span><strong>Academic CV</strong><small>Research & study</small></span><b aria-hidden="true">→</b></Link>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <p>{profile.name} · {profile.location}</p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </section>
    </main>
  );
}
