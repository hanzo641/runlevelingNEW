import { Logo } from "./Logo";
import { ENTREPRISE } from "../data/pricing";

export function Footer({ onOuvrirMentions }: { onOuvrirMentions: () => void }) {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", padding: "32px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 13,
          color: "var(--color-text-muted)",
        }}
      >
        <Logo size={22} />
        <div>
          SIRET {ENTREPRISE.siret} — Agrément SAP n° {ENTREPRISE.agrementSAP}
        </div>
        <button
          onClick={onOuvrirMentions}
          style={{ background: "none", border: "none", color: "var(--color-primary)", cursor: "pointer", fontSize: 13, padding: 0 }}
        >
          Mentions légales
        </button>
      </div>
    </footer>
  );
}
