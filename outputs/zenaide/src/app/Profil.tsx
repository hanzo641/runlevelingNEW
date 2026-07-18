import { useState } from "react";
import type { ProfilEntreprise } from "../types";
import { lireProfil, sauverProfil } from "../lib/storage";

export function Profil() {
  const [profil, setProfil] = useState<ProfilEntreprise>(lireProfil());
  const [enregistre, setEnregistre] = useState(false);

  function enregistrer(e: React.FormEvent) {
    e.preventDefault();
    sauverProfil(profil);
    setEnregistre(true);
    setTimeout(() => setEnregistre(false), 2000);
  }

  return (
    <div>
      <h1 style={{ fontSize: 26 }}>Mon profil</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
        Ces informations apparaissent sur vos devis, factures et attestations
        fiscales générés en PDF.
      </p>

      <form onSubmit={enregistrer} className="card" style={{ padding: 24, maxWidth: 520 }}>
        <div className="field">
          <label>Raison sociale / nom commercial</label>
          <input
            value={profil.raisonSociale}
            onChange={(e) => setProfil({ ...profil, raisonSociale: e.target.value })}
            placeholder="Ex. Hydropropreté — Thomas [Nom]"
          />
        </div>
        <div className="field">
          <label>SIRET</label>
          <input value={profil.siret} onChange={(e) => setProfil({ ...profil, siret: e.target.value })} placeholder="89129775600027" />
        </div>
        <div className="field">
          <label>Numéro d'agrément / déclaration SAP</label>
          <input
            value={profil.numeroAgrementSAP}
            onChange={(e) => setProfil({ ...profil, numeroAgrementSAP: e.target.value })}
            placeholder="SAP891297756"
          />
        </div>
        <div className="field">
          <label>Adresse</label>
          <input value={profil.adresse} onChange={(e) => setProfil({ ...profil, adresse: e.target.value })} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}>
          <div className="field">
            <label>Code postal</label>
            <input value={profil.codePostal} onChange={(e) => setProfil({ ...profil, codePostal: e.target.value })} />
          </div>
          <div className="field">
            <label>Ville</label>
            <input value={profil.ville} onChange={(e) => setProfil({ ...profil, ville: e.target.value })} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div className="field">
            <label>Email</label>
            <input type="email" value={profil.email} onChange={(e) => setProfil({ ...profil, email: e.target.value })} />
          </div>
          <div className="field">
            <label>Téléphone</label>
            <input value={profil.telephone} onChange={(e) => setProfil({ ...profil, telephone: e.target.value })} />
          </div>
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 400 }}>
          <input
            type="checkbox"
            style={{ width: "auto" }}
            checked={profil.tvaNonApplicable}
            onChange={(e) => setProfil({ ...profil, tvaNonApplicable: e.target.checked })}
          />
          Franchise en base de TVA (art. 293 B du CGI)
        </label>

        <button type="submit" className="btn btn-primary" style={{ marginTop: 16 }}>
          Enregistrer
        </button>
        {enregistre && <span style={{ marginLeft: 12, color: "var(--color-primary)", fontSize: 13 }}>Enregistré ✓</span>}
      </form>
    </div>
  );
}
