import { useState } from "react";
import type { StatutAvanceImmediate } from "../types";
import { LABELS_STATUT_AI } from "../types";
import {
  genererId,
  listerClients,
  listerDocuments,
  listerSuivis,
  sauverSuivi,
  suiviPourDocument,
} from "../lib/storage";

export function AvanceImmediate() {
  const clients = listerClients();
  const documents = listerDocuments().filter((d) => d.type === "facture");
  const [suivis, setSuivis] = useState(listerSuivis());

  function rafraichir() {
    setSuivis(listerSuivis());
  }

  function mettreAJour(documentId: string, statut: StatutAvanceImmediate, notes: string) {
    const existant = suiviPourDocument(documentId);
    sauverSuivi({
      id: existant?.id ?? genererId(),
      documentId,
      statut,
      notes,
      derniereRelance: statut === "bloquee" ? new Date().toISOString() : existant?.derniereRelance,
    });
    rafraichir();
  }

  return (
    <div>
      <h1 style={{ fontSize: 26 }}>Suivi de l'avance immédiate</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
        Zenaide ne se connecte pas automatiquement à l'Urssaf (pas d'intégration
        API) : ce tableau vous permet de suivre vous-même l'état de chaque
        dossier et de ne pas perdre le fil des relances à faire.
      </p>

      <table>
        <thead>
          <tr>
            <th>Facture</th>
            <th>Client</th>
            <th>Statut</th>
            <th>Notes / relance</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((d) => {
            const client = clients.find((c) => c.id === d.clientId);
            const suivi = suivis.find((s) => s.documentId === d.id);
            return (
              <tr key={d.id}>
                <td>{d.numero}</td>
                <td>{client ? `${client.prenom} ${client.nom}` : "—"}</td>
                <td>
                  <select
                    value={suivi?.statut ?? "non_demandee"}
                    onChange={(e) =>
                      mettreAJour(d.id, e.target.value as StatutAvanceImmediate, suivi?.notes ?? "")
                    }
                    style={{ padding: "4px 8px", fontSize: 13 }}
                  >
                    {Object.entries(LABELS_STATUT_AI).map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    placeholder="Ex : relancé le 12/01, dossier en attente de validation"
                    defaultValue={suivi?.notes ?? ""}
                    onBlur={(e) =>
                      mettreAJour(d.id, suivi?.statut ?? "non_demandee", e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
          {documents.length === 0 && (
            <tr>
              <td colSpan={4} style={{ color: "var(--color-text-muted)" }}>
                Aucune facture pour l'instant.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
