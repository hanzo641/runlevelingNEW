import { useMemo, useState } from "react";
import { listerClients, listerDocuments, totalDocument } from "../lib/storage";

function formaterEuros(m: number) {
  return m.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export function LivreRecettes() {
  const clients = listerClients();
  const documents = listerDocuments();
  const anneesDisponibles = useMemo(() => {
    const annees = new Set(
      documents
        .filter((d) => d.type === "facture" && d.statut === "paye" && d.datePaiement)
        .map((d) => new Date(d.datePaiement!).getFullYear())
    );
    annees.add(new Date().getFullYear());
    return Array.from(annees).sort((a, b) => b - a);
  }, [documents]);

  const [annee, setAnnee] = useState(new Date().getFullYear());

  const ecritures = documents
    .filter((d) => d.type === "facture" && d.statut === "paye" && d.datePaiement)
    .filter((d) => new Date(d.datePaiement!).getFullYear() === annee)
    .sort((a, b) => (a.datePaiement ?? "").localeCompare(b.datePaiement ?? ""));

  let cumul = 0;

  function exporterCsv() {
    const lignes = [
      ["Date d'encaissement", "N° facture", "Client", "Nature de la prestation", "Montant TTC"],
      ...ecritures.map((d) => {
        const client = clients.find((c) => c.id === d.clientId);
        return [
          new Date(d.datePaiement!).toLocaleDateString("fr-FR"),
          d.numero,
          client ? `${client.prenom} ${client.nom}` : "",
          d.lignes.map((l) => l.description).join(" / "),
          totalDocument(d).toFixed(2).replace(".", ","),
        ];
      }),
    ];
    const csv = lignes.map((l) => l.map((v) => `"${v.replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob([`﻿${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `livre-de-recettes-${annee}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: 26 }}>Livre de recettes {annee}</h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select value={annee} onChange={(e) => setAnnee(Number(e.target.value))} style={{ width: "auto" }}>
            {anneesDisponibles.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <button className="btn btn-secondary" onClick={exporterCsv} disabled={ecritures.length === 0}>
            Exporter en CSV
          </button>
        </div>
      </div>
      <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
        Généré automatiquement à partir de vos factures marquées « Payé ». Conservez cet export : il constitue votre registre légal des recettes de micro-entrepreneur.
      </p>

      <table>
        <thead>
          <tr>
            <th>Date d'encaissement</th>
            <th>N° facture</th>
            <th>Client</th>
            <th>Prestation</th>
            <th>Montant</th>
            <th>Cumul</th>
          </tr>
        </thead>
        <tbody>
          {ecritures.map((d) => {
            const client = clients.find((c) => c.id === d.clientId);
            const montant = totalDocument(d);
            cumul += montant;
            return (
              <tr key={d.id}>
                <td>{new Date(d.datePaiement!).toLocaleDateString("fr-FR")}</td>
                <td>{d.numero}</td>
                <td>{client ? `${client.prenom} ${client.nom}` : "—"}</td>
                <td>{d.lignes.map((l) => l.description).join(", ")}</td>
                <td>{formaterEuros(montant)}</td>
                <td style={{ fontWeight: 600 }}>{formaterEuros(cumul)}</td>
              </tr>
            );
          })}
          {ecritures.length === 0 && (
            <tr>
              <td colSpan={6} style={{ color: "var(--color-text-muted)" }}>
                Aucune facture encaissée sur {annee}.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
