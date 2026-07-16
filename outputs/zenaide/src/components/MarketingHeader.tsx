import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function MarketingHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        background: "rgba(250, 247, 242, 0.9)",
        backdropFilter: "blur(6px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link to="/#fonctionnalites" style={{ fontSize: 14, textDecoration: "none", color: "var(--color-text)" }}>
            Fonctionnalités
          </Link>
          <Link to="/tarifs" style={{ fontSize: 14, textDecoration: "none", color: "var(--color-text)" }}>
            Tarifs
          </Link>
          <Link to="/app/tableau-de-bord" className="btn btn-primary" style={{ padding: "10px 18px" }}>
            Utiliser Zenaide
          </Link>
        </nav>
      </div>
    </header>
  );
}
