import { ENTREPRISE } from "../data/pricing";

export function ZoneContact() {
  return (
    <section id="zone" className="section" style={{ background: "var(--color-primary-dark)", color: "#fff" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
        <h2 style={{ color: "#fff" }}>Zone d'intervention : {ENTREPRISE.zone}</h2>
        <p style={{ color: "rgba(255,255,255,0.85)" }}>
          Basés au {ENTREPRISE.adresse}, nous intervenons directement chez vous.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
            marginTop: 28,
          }}
        >
          <a href={ENTREPRISE.telephoneHref} className="btn btn-accent">
            📞 {ENTREPRISE.telephone}
          </a>
          <a href={`mailto:${ENTREPRISE.email}`} className="btn btn-ghost" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
            ✉️ {ENTREPRISE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
