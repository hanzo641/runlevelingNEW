import { useState } from "react";
import type { DocumentCommercial, LigneDocument, StatutDocument } from "../types";
import { TAUX_CREDIT_IMPOT } from "../types";
import {
  genererId,
  lireProfil,
  listerClients,
  listerDocuments,
  prochainNumero,
  sauverDocument,
  supprimerDocument,
  totalDocument,
} from "../lib/storage";
import { genererPdfDocument } from "../lib/pdf";

const LIGNE_VIDE = (): LigneDocument => ({
  id: genererId(),
  description: "",
  quantite: 1,
  prixUnitaire: 0,
});

function formaterEuros(m: number) {
  return m.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

const LABELS_STATUT: Record<StatutDocument, string> = {
  brouillon: "Brouillon",
  envoye: "Envoyé",
  paye: "Payé",
};

export function DevisFactures() {
  const clients = listerClients();
  const [documents, setDocuments] = useState(listerDocuments());
  const [formulaireOuvert, setFormulaireOuvert] = useState(false);
  const [type, setType] = useState<"devis" | "facture">("devis");
  const [clientId, setClientId] = useState(clients[0]?.id ?? "");
  const [lignes, setLignes] = useState<LigneDocument[]>([LIGNE_VIDE()]);

  function rafraichir() {
    setDocuments(listerDocuments());
  }

  function ouvrirNouveau(t: "devis" | "facture") {
    setType(t);
    setClientId(clients[0]?.id ?? "");
    setLignes([LIGNE_VIDE()]);
    setFormulaireOuvert(true);
  }

  const total = lignes.reduce((s, l) => s + l.quantite * l.prixUnitaire, 0);
  const creditImpot = total * TAUX_CREDIT_IMPOT;

  function enregistrer(e: React.FormEvent) {
    e.preventDefault();
    if (!clientId) return;
    const document: DocumentCommercial = {
      id: genererId(),
      type,
      numero: prochainNumero(type),
      clientId,
      date: new Date().toISOString(),
      lignes,
      statut: "brouillon",
    };
    sauverDocument(document);
    setFormulaireOuvert(false);
    rafraichir();
  }

  function telecharger(document: DocumentCommercial) {
    const client = clients.find((c) => c.id === document.clientId);
    if (!client) return;
    const pdf = genererPdfDocument(document, client, lireProfil());
    pdf.save(`${document.numero}.pdf`);
  }

  function changerStatut(document: DocumentCommercial, statut: StatutDocument) {
    sauverDocument({
      ...document,
      statut,
      datePaiement: statut === "paye" ? new Date().toISOString() : document.datePaiement,
    });
    rafraichir();
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 26 }}>Devis & factures</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-secondary" onClick={() => ouvrirNouveau("devis")}>
            + Devis
          </button>
          <button className="btn btn-primary" onClick={() => ouvrirNouveau("facture")}>
            + Facture
          </button>
        </div>
      </div>

      {clients.length === 0 && (
        <p style={{ color: "var(--color-text-muted)" }}>
          Ajoutez d'abord un client avant de créer un devis ou une facture.
        </p>
      )}

      {formulaireOuvert && (
        <form onSubmit={enregistrer} className="card" style={{ padding: 24, margin: "20px 0" }}>
          <h3>Nouveau {type === "devis" ? "devis" : "facture"}</h3>
          <div className="field">
            <label>Client</label>
            <select value={clientId} onChange={(e) => setClientId(e.target.value)} required>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.prenom} {c.nom}
                </option>
              ))}
            </select>
          </div>

          <label>Prestations</label>
          {lignes.map((ligne, i) => (
            <div key={ligne.id} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr auto", gap: 8, marginBottom: 8 }}>
              <input
                placeholder="Description (ex. Ménage à domicile)"
                value={ligne.description}
                onChange={(e) => {
                  const copie = [...lignes];
                  copie[i] = { ...ligne, description: e.target.value };
                  setLignes(copie);
                }}
                required
              />
              <input
                type="number"
                min={0}
                step={0.5}
                placeholder="Quantité"
                value={ligne.quantite}
                onChange={(e) => {
                  const copie = [...lignes];
                  copie[i] = { ...ligne, quantite: Number(e.target.value) };
                  setLignes(copie);
                }}
              />
              <input
                type="number"
                min={0}
                step={0.5}
                placeholder="Prix unitaire €"
                value={ligne.prixUnitaire}
                onChange={(e) => {
                  const copie = [...lignes];
                  copie[i] = { ...ligne, prixUnitaire: Number(e.target.value) };
                  setLignes(copie);
                }}
              />
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: "6px 10px" }}
                onClick={() => setLignes(lignes.filter((l) => l.id !== ligne.id))}
              >
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-ghost" style={{ fontSize: 13, marginBottom: 16 }} onClick={() => setLignes([...lignes, LIGNE_VIDE()])}>
            + Ajouter une ligne
          </button>

          <div className="card" style={{ padding: 16, background: "var(--color-primary-light)", border: "none", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
              <span>Total</span>
              <span>{formaterEuros(total)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-primary-dark)" }}>
              <span>dont crédit d'impôt estimé (50 %)</span>
              <span>{formaterEuros(creditImpot)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-text-muted)" }}>
              <span>Reste à charge estimé du client</span>
              <span>{formaterEuros(total - creditImpot)}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button type="submit" className="btn btn-primary" disabled={!clientId}>
              Enregistrer
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setFormulaireOuvert(false)}>
              Annuler
            </button>
          </div>
        </form>
      )}

      <table style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Client</th>
            <th>Date</th>
            <th>Montant</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((d) => {
            const client = clients.find((c) => c.id === d.clientId);
            return (
              <tr key={d.id}>
                <td>{d.numero}</td>
                <td>{client ? `${client.prenom} ${client.nom}` : "Client supprimé"}</td>
                <td>{new Date(d.date).toLocaleDateString("fr-FR")}</td>
                <td>{formaterEuros(totalDocument(d))}</td>
                <td>
                  <select
                    value={d.statut}
                    onChange={(e) => changerStatut(d, e.target.value as StatutDocument)}
                    style={{ padding: "4px 8px", fontSize: 13 }}
                  >
                    {Object.entries(LABELS_STATUT).map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ textAlign: "right" }}>
                  <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }} onClick={() => telecharger(d)}>
                    PDF
                  </button>
                  <button
                    className="btn btn-ghost"
                    style={{ padding: "6px 12px", fontSize: 13, marginLeft: 6 }}
                    onClick={() => {
                      if (confirm(`Supprimer ${d.numero} ?`)) {
                        supprimerDocument(d.id);
                        rafraichir();
                      }
                    }}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
          {documents.length === 0 && (
            <tr>
              <td colSpan={6} style={{ color: "var(--color-text-muted)" }}>
                Aucun devis ni facture pour l'instant.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
