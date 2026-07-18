import { useState } from "react";
import type { ActiviteSAP, Client } from "../types";
import { LABELS_ACTIVITE } from "../types";
import { genererId, listerClients, sauverClient, supprimerClient } from "../lib/storage";

const CLIENT_VIDE: Client = {
  id: "",
  civilite: "",
  nom: "",
  prenom: "",
  adresse: "",
  codePostal: "",
  ville: "",
  email: "",
  telephone: "",
  activite: "menage",
  creeLe: "",
};

export function Clients() {
  const [clients, setClients] = useState(listerClients());
  const [enEdition, setEnEdition] = useState<Client | null>(null);
  const [formulaireOuvert, setFormulaireOuvert] = useState(false);

  function rafraichir() {
    setClients(listerClients());
  }

  function ouvrirNouveau() {
    setEnEdition({ ...CLIENT_VIDE, id: genererId(), creeLe: new Date().toISOString() });
    setFormulaireOuvert(true);
  }

  function ouvrirEdition(client: Client) {
    setEnEdition(client);
    setFormulaireOuvert(true);
  }

  function enregistrer(e: React.FormEvent) {
    e.preventDefault();
    if (!enEdition) return;
    sauverClient(enEdition);
    setFormulaireOuvert(false);
    setEnEdition(null);
    rafraichir();
  }

  const limiteAtteinte = clients.length >= 3;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 26 }}>Clients</h1>
        <button className="btn btn-primary" onClick={ouvrirNouveau} disabled={limiteAtteinte}>
          + Ajouter un client
        </button>
      </div>

      {limiteAtteinte && (
        <p style={{ fontSize: 13, color: "var(--color-accent-dark)" }}>
          Vous avez atteint la limite de 3 clients de l'offre gratuite. Passez à
          l'offre payante (39 €/an) pour ajouter des clients illimités.
        </p>
      )}

      {formulaireOuvert && enEdition && (
        <form onSubmit={enregistrer} className="card" style={{ padding: 24, margin: "20px 0" }}>
          <h3>{clients.some((c) => c.id === enEdition.id) ? "Modifier le client" : "Nouveau client"}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: 12 }}>
            <div className="field">
              <label>Civilité</label>
              <select
                value={enEdition.civilite}
                onChange={(e) => setEnEdition({ ...enEdition, civilite: e.target.value as Client["civilite"] })}
              >
                <option value="">—</option>
                <option value="M.">M.</option>
                <option value="Mme">Mme</option>
              </select>
            </div>
            <div className="field">
              <label>Prénom</label>
              <input
                required
                value={enEdition.prenom}
                onChange={(e) => setEnEdition({ ...enEdition, prenom: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Nom</label>
              <input
                required
                value={enEdition.nom}
                onChange={(e) => setEnEdition({ ...enEdition, nom: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label>Adresse</label>
            <input
              value={enEdition.adresse}
              onChange={(e) => setEnEdition({ ...enEdition, adresse: e.target.value })}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}>
            <div className="field">
              <label>Code postal</label>
              <input
                value={enEdition.codePostal}
                onChange={(e) => setEnEdition({ ...enEdition, codePostal: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Ville</label>
              <input
                value={enEdition.ville}
                onChange={(e) => setEnEdition({ ...enEdition, ville: e.target.value })}
              />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={enEdition.email}
                onChange={(e) => setEnEdition({ ...enEdition, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Téléphone</label>
              <input
                value={enEdition.telephone}
                onChange={(e) => setEnEdition({ ...enEdition, telephone: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label>Activité SAP concernée</label>
            <select
              value={enEdition.activite}
              onChange={(e) => setEnEdition({ ...enEdition, activite: e.target.value as ActiviteSAP })}
            >
              {Object.entries(LABELS_ACTIVITE).map(([valeur, libelle]) => (
                <option key={valeur} value={valeur}>
                  {libelle}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button type="submit" className="btn btn-primary">Enregistrer</button>
            <button type="button" className="btn btn-ghost" onClick={() => setFormulaireOuvert(false)}>
              Annuler
            </button>
          </div>
        </form>
      )}

      <table style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Activité</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id}>
              <td>
                {c.civilite} {c.prenom} {c.nom}
              </td>
              <td>{LABELS_ACTIVITE[c.activite]}</td>
              <td>{c.email || c.telephone || "—"}</td>
              <td style={{ textAlign: "right" }}>
                <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }} onClick={() => ouvrirEdition(c)}>
                  Modifier
                </button>
                <button
                  className="btn btn-ghost"
                  style={{ padding: "6px 12px", fontSize: 13, marginLeft: 6 }}
                  onClick={() => {
                    if (confirm(`Supprimer ${c.prenom} ${c.nom} ?`)) {
                      supprimerClient(c.id);
                      rafraichir();
                    }
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
          {clients.length === 0 && (
            <tr>
              <td colSpan={4} style={{ color: "var(--color-text-muted)" }}>
                Aucun client pour l'instant.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
