import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <p className="label not-found-code">404</p>
      <h1 id="not-found-title">This page has<br />{" "}<em>left the archive</em><span>.</span></h1>
      <p>The address may be old, incomplete, or mistyped. The main portfolio is still where it should be.</p>
      <Link className="not-found-link" to="/">Return to the portfolio <span aria-hidden="true">→</span></Link>
    </main>
  );
}
