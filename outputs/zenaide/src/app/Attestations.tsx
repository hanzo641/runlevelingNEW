import { useMemo, useState } from "react";
import { lireProfil, listerClients, listerDocuments, totalDocument } from "../lib/storage";
import { genererPdfAttestation } from "../lib/pdf";
import { TAUX_CREDIT_IMPOT } from "../types";

function formaterEuros(m: number) {
  return m.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export function Attestations() {
  const clients = listerClients();
  const documents = listerDocuments();
  const profil = lireProfil();

  const anneesDisponibles = useMemo(() => {
    const annees = new Set(
      documents
        .filter((d) => d.type === "facture" && d.statut === "paye" && d.datePaiement)
        .map((d) => new Date(d.datePaiement!).getFullYear())
    );
    annees.add(new Date().getFullYear() - 1);
    return Array.from(annees).sort((a, b) => b - a);
  }, [documents]);

  const [annee, setAnnee] = useState(anneesDisponibles[0] ?? new Date().getFullYear() - 1);

  const totauxParClient = clients
    .map((client) => {
      const total = documents
        .filter(
          (d) =>
            d.type === "facture" &&
            d.statut === "paye" &&
            d.clientId === client.id &&
            d.datePaiement &&
            new Date(d.datePaiement).getFullYear() === annee
        )
        .reduce((s, d) => s + totalDocument(d), 0);
      return { client, total };
    })
    .filter((c) => c.total > 0);

  function telechargerUne(clientId: string) {
    const entree = totauxParClient.find((c) => c.client.id === clientId);
    if (!entree) return;
    const pdf = genererPdfAttestation(entree.client, annee, entree.total, profil);
    pdf.save(`attestation-fiscale-${annee}-${entree.client.nom}.pdf`);
  }

  function telechargerToutes() {
    totauxParClient.forEach(({ client, total }) => {
      const pdf = genererPdfAttestation(client, annee, total, profil);
      pdf.save(`attestation-fiscale-${annee}-${client.nom}.pdf`);
    });
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 26 }}>Attestations fiscales</h1>
        <select value={annee} onChange={(e) => setAnnee(Number(e.target.value))} style={{ width: "auto" }}>
          {anneesDisponibles.map((a) => (
            <option key={a} value={a}>
              Année {a}
            </option>
          ))}
        </select>
      </div>
      <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
        Une attestation par client, calculée à partir des factures marquées «
        Payé » et encaissées sur l'année {annee}. À envoyer à vos clients en
        début d'année suivante pour leur déclaration de revenus.
      </p>

      {totauxParClient.length > 0 && (
        <button className="btn btn-primary" onClick={telechargerToutes} style={{ marginBottom: 20 }}>
          Générer toutes les attestations {annee} ({totauxParClient.length})
        </button>
      )}

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Total encaissé {annee}</th>
            <th>Crédit d'impôt estimé (50 %)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {totauxParClient.map(({ client, total }) => (
            <tr key={client.id}>
              <td>
                {client.prenom} {client.nom}
              </td>
              <td>{formaterEuros(total)}</td>
              <td>{formaterEuros(total * TAUX_CREDIT_IMPOT)}</td>
              <td style={{ textAlign: "right" }}>
                <button className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13 }} onClick={() => telechargerUne(client.id)}>
                  PDF
                </button>
              </td>
            </tr>
          ))}
          {totauxParClient.length === 0 && (
            <tr>
              <td colSpan={4} style={{ color: "var(--color-text-muted)" }}>
                Aucune facture encaissée sur {annee} pour l'instant.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
