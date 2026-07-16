import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function MarketingFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: 80,
        padding: "40px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo size={22} />
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            fontSize: 13,
            color: "var(--color-text-muted)",
          }}
        >
          <Link to="/tarifs" style={{ color: "inherit" }}>
            Tarifs
          </Link>
          <Link to="/legal/mentions-legales" style={{ color: "inherit" }}>
            Mentions légales
          </Link>
          <Link to="/legal/cgv" style={{ color: "inherit" }}>
            CGV
          </Link>
          <Link to="/legal/cgu" style={{ color: "inherit" }}>
            CGU
          </Link>
          <Link to="/legal/confidentialite" style={{ color: "inherit" }}>
            Confidentialité
          </Link>
        </nav>
      </div>
      <div className="container" style={{ marginTop: 20, fontSize: 12, color: "var(--color-text-muted)" }}>
        Zenaide — outil conçu en France pour les micro-entrepreneurs déclarés en services à la personne. TVA non applicable, art. 293 B du CGI.
      </div>
    </footer>
  );
}
