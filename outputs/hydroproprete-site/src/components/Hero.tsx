import { ENTREPRISE } from "../data/pricing";

export function Hero() {
  return (
    <section style={{ padding: "64px 0 56px", background: "linear-gradient(180deg, #EAF4FA 0%, #ffffff 100%)" }}>
      <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
        <span className="badge">✓ Crédit d'impôt de 50% sur toutes nos prestations</span>
        <h1 style={{ fontSize: 42, marginTop: 20 }}>
          Vos canapés, matelas et tapis nettoyés en profondeur, chez vous, à Pau.
        </h1>
        <p style={{ fontSize: 18, color: "var(--color-text-muted)", marginBottom: 28 }}>
          Méthode professionnelle par injection-extraction : la saleté incrustée et les
          acariens éliminés en profondeur, sans déplacer vos meubles.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#tarifs" className="btn btn-accent">
            Voir mon prix instantané
          </a>
          <a href={ENTREPRISE.telephoneHref} className="btn btn-ghost">
            📞 {ENTREPRISE.telephone}
          </a>
        </div>
        <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 14 }}>
          Intervention rapide à {ENTREPRISE.zone} — devis clair, sans surprise.
        </p>
      </div>
    </section>
  );
}
