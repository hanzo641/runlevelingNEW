import { Logo } from "./Logo";
import { ENTREPRISE } from "../data/pricing";

export function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(6px)",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Logo />
        <nav style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <a href="#tarifs" className="header-link" style={{ fontSize: 14, textDecoration: "none", color: "var(--color-text)" }}>
            Tarifs
          </a>
          <a href="#zone" className="header-link" style={{ fontSize: 14, textDecoration: "none", color: "var(--color-text)" }}>
            Zone d'intervention
          </a>
          <a
            href={ENTREPRISE.telephoneHref}
            style={{ fontWeight: 700, fontSize: 14, color: "var(--color-primary-dark)", textDecoration: "none" }}
          >
            📞 {ENTREPRISE.telephone}
          </a>
        </nav>
      </div>
    </header>
  );
}
