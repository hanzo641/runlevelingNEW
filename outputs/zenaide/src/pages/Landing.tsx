import { Link } from "react-router-dom";
import { MarketingHeader } from "../components/MarketingHeader";
import { MarketingFooter } from "../components/MarketingFooter";

const BENEFICES = [
  {
    titre: "Des devis et factures conformes, sans y penser",
    texte:
      "Chaque devis et chaque facture générés par Zenaide intègrent automatiquement les mentions obligatoires propres aux activités de services à la personne. Fini le risque d'oublier une mention légale ou de partir d'un modèle Word bricolé : vous remplissez la prestation, Zenaide s'occupe du reste.",
  },
  {
    titre: "Le crédit d'impôt de 50 % affiché en clair, dès le devis",
    texte:
      "C'est la fonctionnalité que vos clients vont adorer : Zenaide calcule et affiche automatiquement le montant du crédit d'impôt de 50 % dont bénéficie la famille, directement sur le devis et la facture. Un argument concret pour vous, une information claire pour elle.",
  },
  {
    titre: "Le livre de recettes qui se remplit tout seul",
    texte:
      "Obligation légale de la micro-entreprise, corvée numéro un pour beaucoup d'indépendants : le livre de recettes de Zenaide se met à jour automatiquement à chaque facture émise. Vous n'avez plus rien à recopier.",
  },
  {
    titre: "Les attestations fiscales annuelles, en un clic pour tous vos clients",
    texte:
      "Chaque début d'année, vos clients ont besoin de leur attestation fiscale. Que vous ayez 5 ou 50 familles à accompagner, Zenaide génère toutes les attestations en un clic, prêtes à être envoyées.",
  },
  {
    titre: "Un suivi clair de vos dossiers d'avance immédiate",
    texte:
      "L'avance immédiate simplifie la vie de vos clients, mais génère souvent des dossiers en attente. Zenaide vous permet de suivre l'état de chaque dossier pour ne plus perdre le fil.",
  },
];

const ETAPES = [
  {
    titre: "Renseignez votre micro-entreprise",
    texte:
      "Votre SIRET, votre numéro d'agrément SAP et votre activité. Aucune carte bancaire n'est nécessaire pour démarrer — vos informations restent sur votre appareil.",
  },
  {
    titre: "Ajoutez vos clients, créez vos devis et factures",
    texte:
      "Zenaide applique automatiquement les mentions obligatoires et calcule le crédit d'impôt de 50 % à afficher. Votre livre de recettes se construit en parallèle, sans action supplémentaire.",
  },
  {
    titre: "Laissez Zenaide préparer vos obligations annuelles",
    texte:
      "Le moment venu, générez les attestations fiscales de tous vos clients en un clic et suivez vos dossiers d'avance immédiate depuis votre tableau de bord.",
  },
];

const FAQ = [
  {
    q: "Dois-je être expert-comptable pour utiliser Zenaide ?",
    r: "Non. Zenaide est conçu pour être utilisé sans aucune connaissance comptable ou fiscale préalable. Vous renseignez vos prestations et vos clients, l'outil applique les règles de conformité SAP à votre place.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    r: "Dans cette première version, toutes vos données (clients, devis, factures) restent stockées localement dans votre navigateur : elles ne transitent par aucun serveur Zenaide. C'est aussi pour cela qu'elles ne sont accessibles que depuis l'appareil sur lequel vous les avez saisies — pensez à exporter vos PDF régulièrement.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    r: "Oui. L'abonnement payant est sans engagement et résiliable à tout moment. Vous conservez l'accès jusqu'à la fin de la période déjà payée.",
  },
  {
    q: "Est-ce que Zenaide remplace mon expert-comptable ?",
    r: "Non. Zenaide vous aide à produire des documents conformes et à suivre vos obligations administratives liées au SAP. Il ne remplace pas les conseils personnalisés d'un expert-comptable.",
  },
  {
    q: "Avec quelles activités de services à la personne Zenaide est-il compatible ?",
    r: "Zenaide s'adresse aux micro-entrepreneurs déclarés en services à la personne : ménage à domicile, jardinage, garde d'enfants, soutien scolaire, bricolage, aide non-lourde aux seniors, et activités similaires relevant du régime SAP.",
  },
  {
    q: "Que se passe-t-il quand je dépasse 3 clients actifs ?",
    r: "Vous pouvez continuer à utiliser Zenaide en passant à l'offre payante à 39 €/an (environ 3,90 €/mois). Vos données restent intactes, rien n'est perdu.",
  },
  {
    q: "Le calcul du crédit d'impôt affiché est-il garanti exact dans tous les cas ?",
    r: "Zenaide applique les règles de calcul du crédit d'impôt de 50 % telles que définies pour les services à la personne. Le montant final accordé par l'administration fiscale dépend de la situation individuelle de chaque client (plafonds, autres crédits d'impôt) : Zenaide affiche une estimation, pas une garantie de remboursement.",
  },
  {
    q: "Faut-il installer un logiciel pour démarrer ?",
    r: "Non. Zenaide fonctionne directement depuis votre navigateur, sans installation. Vous pouvez commencer à émettre des devis dans la foulée.",
  },
];

export function Landing() {
  return (
    <>
      <MarketingHeader />
      <main>
        <section style={{ padding: "88px 0 64px" }}>
          <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
            <span className="badge">Pensé pour les métiers du SAP</span>
            <h1 style={{ fontSize: 44, marginTop: 20 }}>
              Toute la paperasse SAP, enfin simple.
            </h1>
            <p style={{ fontSize: 18, color: "var(--color-text-muted)", marginBottom: 28 }}>
              Devis, factures, livre de recettes, attestations fiscales et suivi de
              l'avance immédiate : Zenaide gère l'administratif de votre
              micro-entreprise de services à la personne, pour que vous puissiez vous
              concentrer sur vos clients — pas sur vos tableurs.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/app/tableau-de-bord" className="btn btn-primary">
                Utiliser Zenaide gratuitement
              </Link>
              <a href="#fonctionnalites" className="btn btn-ghost">
                Voir comment ça marche
              </a>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 12 }}>
              Gratuit jusqu'à 3 clients actifs. Aucune carte bancaire requise.
            </p>
          </div>
        </section>

        <section id="fonctionnalites" style={{ padding: "40px 0" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {BENEFICES.map((b) => (
                <div key={b.titre} className="card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 18 }}>{b.titre}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginBottom: 0 }}>
                    {b.texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0", background: "var(--color-primary-light)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: 40 }}>Comment ça marche</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 28,
              }}
            >
              {ETAPES.map((e, i) => (
                <div key={e.titre}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 style={{ fontSize: 16 }}>{e.titre}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)" }}>{e.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2>Fait par un pro du SAP, pour les pros du SAP.</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              Zenaide est né d'un constat simple : Thomas, le fondateur, est
              lui-même micro-entrepreneur déclaré en services à la personne
              (nettoyage textiles et à domicile, sous l'enseigne Hydropropreté, à
              Pau). Comme vous, il a rempli des devis à la main, cherché la bonne
              mention légale tard le soir, et passé une soirée entière à préparer
              les attestations fiscales de ses clients en début d'année.
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              Les outils de gestion existants traitent le SAP comme une case à
              cocher parmi cent autres métiers. Zenaide a été pensé dès le départ
              pour un seul secteur : le vôtre.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}>
              Zenaide n'a pas encore d'historique à afficher : c'est un outil qui
              démarre. Ce que vous avez, en revanche, c'est la garantie qu'il est
              construit par quelqu'un qui fait le même métier que vous.
            </p>
          </div>
        </section>

        <section style={{ padding: "64px 0", background: "var(--color-primary-light)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ textAlign: "center", marginBottom: 32 }}>Questions fréquentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {FAQ.map((f) => (
                <div key={f.q} className="card" style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 15, marginBottom: 8 }}>{f.q}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginBottom: 0 }}>
                    {f.r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 0", textAlign: "center" }}>
          <div className="container">
            <h2>Prêt à alléger votre paperasse SAP ?</h2>
            <Link to="/app/tableau-de-bord" className="btn btn-primary">
              Utiliser Zenaide gratuitement
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
