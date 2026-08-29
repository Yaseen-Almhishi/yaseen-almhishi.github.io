import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/content";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="detail-page">
      <Link className="back-link" to="/#work">← Back to selected work</Link>
      <header className="detail-hero">
        <p className="label detail-index">{project.index} / {project.label}</p>
        <h1>{project.title}<span>.</span></h1>
        <p className="detail-lead">{project.summary}</p>
        {project.publicLink ? (
          <a className="text-link" href={project.publicLink.href} target="_blank" rel="noreferrer">
            {project.publicLink.label} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </header>
      <div className="detail-grid">
        <section><p className="label">Context</p><p>{project.context}</p></section>
        <section><p className="label">Role</p><p>{project.role}</p></section>
        <section><p className="label">Contributions</p><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><p className="label">Engineering areas</p><ul className="area-list">{project.areas.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <aside className="boundary-note"><p className="label">Boundary</p><p>{project.boundary}</p></aside>
      </div>
    </main>
  );
}
