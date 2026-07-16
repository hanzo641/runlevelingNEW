import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  chargerDonneesDemo,
  listerClients,
  listerDocuments,
  listerSuivis,
  toutEffacer,
  totalDocument,
} from "../lib/storage";

export function Dashboard() {
  const [rafraichir, setRafraichir] = useState(0);
  const [clients, setClients] = useState(listerClients());
  const [documents, setDocuments] = useState(listerDocuments());
  const [suivis, setSuivis] = useState(listerSuivis());

  useEffect(() => {
    setClients(listerClients());
    setDocuments(listerDocuments());
    setSuivis(listerSuivis());
  }, [rafraichir]);

  const chiffreAffairesAnnee = documents
    .filter((d) => d.type === "facture" && d.statut === "paye")
    .filter((d) => new Date(d.datePaiement ?? d.date).getFullYear() === new Date().getFullYear())
    .reduce((somme, d) => somme + totalDocument(d), 0);

  const dossiersBloques = suivis.filter((s) => s.statut === "bloquee").length;

  const estimationLimiteAtteinte = clients.length >= 3;

  return (
    <div>
      <h1 style={{ fontSize: 28 }}>Tableau de bord</h1>
      <p style={{ color: "var(--color-text-muted)" }}>
        Bienvenue sur votre espace Zenaide. Vos données restent stockées
        localement dans ce navigateur.
      </p>

      {clients.length === 0 && documents.length === 0 && (
        <div className="card" style={{ padding: 24, marginBottom: 24 }}>
          <h3>Envie de voir Zenaide en action tout de suite ?</h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
            Chargez un client et une facture d'exemple pour explorer les
            fonctionnalités sans tout ressaisir.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              chargerDonneesDemo();
              setRafraichir((n) => n + 1);
            }}
          >
            Charger des données d'exemple
          </button>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>Clients actifs</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "var(--color-primary-dark)" }}>
            {clients.length}
            <span style={{ fontSize: 14, fontWeight: 400, color: "var(--color-text-muted)" }}> / 3 (offre gratuite)</span>
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>CA encaissé ({new Date().getFullYear()})</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "var(--color-primary-dark)" }}>
            {chiffreAffairesAnnee.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>Devis / factures</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "var(--color-primary-dark)" }}>
            {documents.length}
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>Dossiers avance immédiate bloqués</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: dossiersBloques > 0 ? "var(--color-accent-dark)" : "var(--color-primary-dark)" }}>
            {dossiersBloques}
          </div>
        </div>
      </div>

      {estimationLimiteAtteinte && (
        <div className="card" style={{ padding: 20, marginBottom: 24, background: "var(--color-primary-light)", border: "none" }}>
          <strong>Vous approchez ou dépassez la limite de l'offre gratuite (3 clients).</strong>{" "}
          <Link to="/tarifs">Découvrez l'offre payante à 39 €/an</Link> pour continuer sans limite.
        </div>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link to="/app/clients" className="btn btn-secondary">Ajouter un client</Link>
        <Link to="/app/devis-factures" className="btn btn-secondary">Créer un devis</Link>
        <Link to="/app/attestations" className="btn btn-secondary">Générer une attestation</Link>
      </div>

      <div style={{ marginTop: 48 }}>
        <button
          className="btn btn-ghost"
          style={{ fontSize: 12, opacity: 0.6 }}
          onClick={() => {
            if (confirm("Effacer toutes les données locales de Zenaide ? Cette action est irréversible.")) {
              toutEffacer();
              setRafraichir((n) => n + 1);
            }
          }}
        >
          Effacer toutes mes données locales
        </button>
      </div>
    </div>
  );
}
