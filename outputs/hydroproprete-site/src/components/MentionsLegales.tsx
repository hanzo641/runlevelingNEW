import { ENTREPRISE } from "../data/pricing";

export function MentionsLegales({ onFermer }: { onFermer: () => void }) {
  return (
    <div
      role="dialog"
      aria-label="Mentions légales"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 76, 110, 0.5)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
      onClick={onFermer}
    >
      <div
        className="card"
        style={{ maxWidth: 560, maxHeight: "80vh", overflowY: "auto", padding: 28, background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Mentions légales</h2>
        <p style={{ fontSize: 14 }}>
          <strong>Éditeur du site</strong> : {ENTREPRISE.nom}, entreprise individuelle (micro-entreprise),
          activité déclarée Services à la Personne — agrément n° {ENTREPRISE.agrementSAP}.
        </p>
        <p style={{ fontSize: 14 }}>
          SIRET : {ENTREPRISE.siret}
          <br />
          Adresse : {ENTREPRISE.adresse}
          <br />
          Téléphone : {ENTREPRISE.telephone}
          <br />
          Email : {ENTREPRISE.email}
        </p>
        <p style={{ fontSize: 14 }}>TVA non applicable, article 293 B du Code général des impôts (franchise en base de TVA).</p>
        <p style={{ fontSize: 14 }}>
          <strong>Hébergement</strong> : [hébergeur à compléter lors de la mise en ligne].
        </p>
        <p style={{ fontSize: 14 }}>
          <strong>Données personnelles</strong> : les informations transmises via l'assistant de devis
          (nom, téléphone, ville, précisions sur la demande) sont utilisées uniquement pour vous
          recontacter et établir votre devis. Elles ne sont ni revendues ni partagées avec des tiers.
          Vous pouvez demander leur suppression à tout moment en écrivant à {ENTREPRISE.email}.
        </p>
        <button className="btn btn-primary" onClick={onFermer} style={{ marginTop: 8 }}>
          Fermer
        </button>
      </div>
    </div>
  );
}
