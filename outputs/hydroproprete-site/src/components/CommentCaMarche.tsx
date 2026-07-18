const ETAPES = [
  {
    titre: "Demandez votre devis instantané",
    texte: "Choisissez vos articles dans l'assistant en bas de l'écran : le prix exact s'affiche tout de suite, avec et sans crédit d'impôt.",
  },
  {
    titre: "On confirme votre créneau",
    texte: "Vous recevez une confirmation rapide par WhatsApp, email ou téléphone, selon ce qui vous arrange.",
  },
  {
    titre: "Nettoyage par injection-extraction",
    texte: "Sur place, on élimine en profondeur la saleté incrustée et les acariens, sans déplacer vos meubles.",
  },
];

export function CommentCaMarche() {
  return (
    <section className="section" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        <div className="section-title">
          <h2>Comment ça marche</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}
        >
          {ETAPES.map((e, i) => (
            <div key={e.titre}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ fontSize: 17 }}>{e.titre}</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)" }}>{e.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
