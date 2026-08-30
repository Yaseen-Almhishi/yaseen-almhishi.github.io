import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import { profile, projects } from "./data/content";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "profile", label: "Profile" },
  { id: "contact", label: "Contact" },
] as const;

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }));
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);
  return null;
}

function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    let title = `${profile.name} — ${profile.role}`;
    let description = "Yaseen Almahayshi is a backend-focused software engineer working across APIs, integrations, data workflows, and modular business systems.";
    let shouldIndex = true;
    if (normalizedPathname === "/cv/professional") title = `${profile.name} — Professional CV`;
    if (normalizedPathname === "/cv/academic") title = `${profile.name} — Academic CV`;
    if (normalizedPathname.startsWith("/work/")) {
      const project = projects.find((item) => `/work/${item.slug}` === normalizedPathname);
      if (project) {
        title = `${project.title} — ${profile.name}`;
        description = project.summary;
      }
    }
    const knownPaths = new Set(["/", "/cv/professional", "/cv/academic", ...projects.map((project) => `/work/${project.slug}`)]);
    if (!knownPaths.has(normalizedPathname)) {
      title = `Page not found — ${profile.name}`;
      description = "The requested portfolio page could not be found.";
      shouldIndex = false;
    }
    document.title = title;
    const canonicalPathname = normalizedPathname === "/" ? "/" : `${normalizedPathname}/`;
    const canonicalUrl = new URL(canonicalPathname, profile.siteUrl).toString();
    const setMeta = (selector: string, content: string) => document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="robots"]', shouldIndex ? "index, follow" : "noindex, follow");
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  }, [pathname]);
  return null;
}

function SiteHeader() {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <Link className="brand" to="/#top">Yaseen Almahayshi<span aria-hidden="true">—</span></Link>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                aria-current={active === section.id ? "location" : undefined}
                className={active === section.id ? "active" : ""}
                to={`/#${section.id}`}
              >
                {active === section.id ? <span aria-hidden="true">/</span> : null}{section.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="mobile-contact" to="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isCv = pathname.startsWith("/cv/");
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PageMetadata />
      {!isCv ? <SiteHeader /> : null}
      <div id="main-content" tabIndex={-1}>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/cv/professional" element={<CvPage kind="professional" />} />
          <Route path="/cv/academic" element={<CvPage kind="academic" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}
