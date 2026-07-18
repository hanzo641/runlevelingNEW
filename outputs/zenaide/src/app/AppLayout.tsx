import { NavLink, Outlet, Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const LIENS = [
  { to: "/app/tableau-de-bord", label: "Tableau de bord" },
  { to: "/app/clients", label: "Clients" },
  { to: "/app/devis-factures", label: "Devis & factures" },
  { to: "/app/livre-recettes", label: "Livre de recettes" },
  { to: "/app/attestations", label: "Attestations fiscales" },
  { to: "/app/avance-immediate", label: "Avance immédiate" },
  { to: "/app/profil", label: "Mon profil" },
];

export function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 232,
          flexShrink: 0,
          borderRight: "1px solid var(--color-border)",
          padding: "24px 16px",
          background: "var(--color-surface)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", display: "block", marginBottom: 28, paddingLeft: 8 }}>
          <Logo size={24} />
        </Link>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {LIENS.map((lien) => (
            <NavLink
              key={lien.to}
              to={lien.to}
              style={({ isActive }) => ({
                padding: "10px 12px",
                borderRadius: 8,
                fontSize: 14,
                textDecoration: "none",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--color-primary-dark)" : "var(--color-text-muted)",
                background: isActive ? "var(--color-primary-light)" : "transparent",
              })}
            >
              {lien.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "32px 40px", maxWidth: 960 }}>
        <Outlet />
      </main>
    </div>
  );
}
