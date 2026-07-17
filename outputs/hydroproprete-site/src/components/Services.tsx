import { ARTICLES, SERVICES_SUR_DEVIS, TAUX_CREDIT_IMPOT, formaterEuros } from "../data/pricing";

export function Services() {
  return (
    <section id="tarifs" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Des tarifs clairs, affichés dès maintenant</h2>
          <p style={{ color: "var(--color-text-muted)" }}>
            Prix fixes par article. Avec le crédit d'impôt services à la personne de{" "}
            {TAUX_CREDIT_IMPOT * 100}%, votre reste à charge réel est deux fois moins élevé.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {ARTICLES.map((article) => (
            <div key={article.id} className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: 16, marginBottom: 4 }}>{article.nom}</h3>
              {article.prix === 0 ? (
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--color-accent-dark)" }}>Offert</div>
              ) : (
                <>
                  <div style={{ fontSize: 26, fontWeight: 700, color: "var(--color-primary-dark)" }}>
                    {article.prixMin ? `${formaterEuros(article.prixMin)} – ${formaterEuros(article.prixMax!)}` : formaterEuros(article.prix)}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                    dès {formaterEuros((article.prixMin ?? article.prix) * (1 - TAUX_CREDIT_IMPOT))} après crédit d'impôt
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 24, background: "var(--color-surface)", border: "none" }}>
          <h3 style={{ fontSize: 16 }}>Autres prestations sur devis</h3>
          <ul style={{ margin: 0, paddingLeft: 20, color: "var(--color-text-muted)", fontSize: 14 }}>
            {SERVICES_SUR_DEVIS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
