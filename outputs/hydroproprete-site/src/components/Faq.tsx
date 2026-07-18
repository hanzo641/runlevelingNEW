const FAQ = [
  {
    q: "Comment fonctionne le crédit d'impôt de 50% ?",
    r: "Hydropropreté est un organisme déclaré Services à la Personne (agrément SAP891297756). Les prestations réalisées à votre domicile ouvrent droit à un crédit d'impôt de 50% sur le montant payé, dans la limite des plafonds en vigueur. Le prix affiché sur ce site inclut déjà le calcul avec et sans ce crédit d'impôt.",
  },
  {
    q: "Faut-il déplacer les meubles avant votre passage ?",
    r: "Non. La méthode par injection-extraction professionnelle permet de nettoyer canapés, matelas et tapis en profondeur directement sur place, sans avoir à déplacer vos meubles.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    r: "Nous intervenons à Pau et dans les alentours. Indiquez votre ville dans l'assistant de devis pour confirmer que vous êtes dans notre zone.",
  },
  {
    q: "Le prix annoncé est-il définitif ?",
    r: "Pour les articles listés (canapés, fauteuils, matelas, chaises, tapis), le prix est fixe. Pour les prestations sur devis (auto, terrasse, fin de chantier, sinistre), nous vous recontactons avec un prix précis après avoir échangé sur votre besoin.",
  },
  {
    q: "Sous combien de temps pouvez-vous intervenir ?",
    r: "Cela dépend de nos disponibilités du moment. Envoyez votre demande via l'assistant de devis ou appelez-nous directement pour connaître le prochain créneau possible.",
  },
];

export function Faq() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="section-title">
          <h2>Questions fréquentes</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQ.map((f) => (
            <div key={f.q} className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: 15, marginBottom: 6 }}>{f.q}</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginBottom: 0 }}>{f.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
