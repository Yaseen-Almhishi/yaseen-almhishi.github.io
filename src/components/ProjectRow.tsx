import { Link } from "react-router-dom";
import type { Project } from "../data/content";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-index" aria-hidden="true">{project.index}</div>
      <div className="project-copy">
        <div className="project-heading">
          <h3><Link to={`/work/${project.slug}`}>{project.title}</Link></h3>
          <span className={`project-label project-label--${project.label.toLowerCase().replaceAll(" ", "-")}`}>{project.label}</span>
        </div>
        <p>{project.summary}</p>
        <ul className="project-contributions">
          {project.contributions.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="text-link" to={`/work/${project.slug}`}>Read project <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
