import { Link } from "react-router-dom";
import { MarketingHeader } from "../components/MarketingHeader";
import { MarketingFooter } from "../components/MarketingFooter";

export function Pricing() {
  return (
    <>
      <MarketingHeader />
      <main>
        <section style={{ padding: "72px 0 40px", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h1>Un tarif pensé pour les micro-entrepreneurs, pas pour les grandes structures.</h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: 17 }}>
              Commencez gratuitement. Passez au payant seulement quand votre
              activité en a besoin.
            </p>
          </div>
        </section>

        <section style={{ padding: "20px 0 80px" }}>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              maxWidth: 820,
            }}
          >
            <div className="card" style={{ padding: 32 }}>
              <span className="badge">Gratuit</span>
              <h2 style={{ marginTop: 16, fontSize: 34 }}>0 €</h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
                À vie. Jusqu'à 3 clients actifs. Aucune carte bancaire requise.
              </p>
              <ul style={{ paddingLeft: 18, fontSize: 14, color: "var(--color-text)" }}>
                <li>Devis et factures conformes aux mentions obligatoires SAP</li>
                <li>Calcul et affichage automatique du crédit d'impôt de 50 %</li>
                <li>Livre de recettes généré automatiquement</li>
                <li>Génération des attestations fiscales annuelles</li>
                <li>Suivi manuel des dossiers d'avance immédiate</li>
              </ul>
              <Link to="/app/tableau-de-bord" className="btn btn-secondary" style={{ width: "100%", marginTop: 12 }}>
                Créer mon espace gratuit
              </Link>
            </div>

            <div className="card" style={{ padding: 32, border: "2px solid var(--color-primary)" }}>
              <span className="badge" style={{ background: "var(--color-primary)", color: "#fff" }}>
                Payant
              </span>
              <h2 style={{ marginTop: 16, fontSize: 34 }}>
                39 € <span style={{ fontSize: 16, fontWeight: 400 }}>/ an</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
                Soit 3,25 €/mois. Sans engagement, résiliable à tout moment.
              </p>
              <ul style={{ paddingLeft: 18, fontSize: 14, color: "var(--color-text)" }}>
                <li>Tout ce qui est dans l'offre Gratuite</li>
                <li>Clients actifs illimités</li>
                <li>Toutes les fonctionnalités sans restriction</li>
              </ul>
              <a
                href="mailto:contact@zenaide.fr?subject=Passage%20à%20l'offre%20payante%20Zenaide"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: 12 }}
              >
                Passer à l'offre payante
              </a>
              <p style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 10, marginBottom: 0 }}>
                Sans engagement, résiliable à tout moment par simple email. Aucun
                frais caché, aucun palier surprise. (Paiement en ligne bientôt
                disponible — en attendant, contactez-nous directement.)
              </p>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
