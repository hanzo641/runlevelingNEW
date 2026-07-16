# Zenaide — Démarrage

## Résumé exécutif

**Idée choisie : Zenaide**, micro-SaaS qui gère devis/factures conformes, livre de recettes, attestations fiscales annuelles et suivi de l'avance immédiate pour les micro-entrepreneurs déclarés Services à la Personne (SAP) en France.
**Pourquoi** : tu vis cette douleur administrative de l'intérieur avec Hydropropreté ; le marché est réel (25-45k micro-entrepreneurs SAP estimés) mais niche et déjà servi par NeedMe/Abby (7-12€/mois) — l'angle gagnant n'est pas « personne ne le fait », c'est spécialisation métier extrême + prix cassé (39€/an) + crédit d'impôt affiché sur le devis (angle mort chez tous les concurrents) + distribution par crédibilité de pair, pas par SEO.
**Potentiel de revenu** : réaliste, c'est un **complément de revenu** (~40€/mois en rythme de croisière à 12 mois, scénario réaliste — voir `previsions.md`), pas un remplacement de salaire. Le scénario optimiste reste sous 150€/mois la première année.
**Statut ce matin** : l'application est **codée, buildée et testée de bout en bout** (12/12 tests automatisés passent, PDF générés vérifiés). Le copywriting, les 4 pages légales et le plan d'acquisition sans budget pub sont rédigés. Il ne manque que des actions qui nécessitent tes identifiants (domaine, hébergement, compléter les mentions légales avec tes coordonnées).

**Mes 3 prochaines actions recommandées** :
1. Compléter les 6 placeholders légaux (nom, adresse, email) dans `zenaide/src/content/legal.ts` — 10 min.
2. Créer le compte Firebase (ou Vercel/Cloudflare) et déployer `zenaide/dist/` — 30-45 min.
3. Poster le message de lancement dans 2-3 groupes Facebook SAP/nettoyage (texte prêt dans `zenaide/content/copywriting.md`) — 20 min.

---

## Ce qui a été fait cette nuit

- **Recherche de marché complète** : 20 idées générées, 5 étudiées en profondeur par des sous-agents dédiés (concurrents France/international, pricing, preuves de demande, taille de marché), 1 vérification légale SAP sourcée. Tout dans `recherche-marche.md`.
- **Décision argumentée** : Zenaide retenu, idées de secours #2 (sites vitrine artisans locaux) et #3 (guide/infoproduit SAP) documentées pour pivot rapide.
- **Application fonctionnelle** construite en React + TypeScript (`outputs/zenaide/`) : landing page, page tarifs, 4 pages légales, et l'outil complet (clients, devis/factures avec crédit d'impôt affiché, livre de recettes auto, attestations fiscales en un clic, suivi avance immédiate, profil entreprise).
- **Build testé et vérifié** : `npm run build` passe sans erreur ; un test end-to-end réel (Playwright) simule un utilisateur complet du premier clic jusqu'au téléchargement des PDF — tout fonctionne.
- **Copywriting complet prêt à l'emploi** : landing, pricing, 2 articles SEO complets, message d'outreach Facebook, email pour la FEDESAP (`zenaide/content/copywriting.md`).
- **Pages légales rédigées** (mentions légales, CGV, CGU, politique de confidentialité RGPD), avec sources et points de vigilance juridique documentés (`zenaide/content/legal.md`).
- **Prévisions de revenus sourcées** et budget mois 1 détaillé (`previsions.md`).

## Ce qui n'a PAS pu être fait cette nuit (nécessite tes identifiants/paiement)

- Aucun compte créé (Firebase, Vercel, Cloudflare, registrar de domaine, Stripe, réseaux sociaux).
- Aucun paiement effectué (nom de domaine, etc.).
- Rien publié en ligne.
- Le numéro SIRET et l'agrément SAP sont déjà connus et intégrés au code (Hydropropreté), mais **le nom de famille, l'adresse postale et l'email de contact** manquent encore dans les pages légales — je ne les ai pas inventés.

---

## Checklist des actions restantes

| # | Action | Temps estimé | Bloquant pour lancer ? |
|---|---|---|---|
| 1 | Lire ce README + parcourir l'app en local (`cd outputs/zenaide && npm install && npm run dev`) | 15 min | — |
| 2 | Compléter les placeholders légaux (nom, adresse, email, téléphone) dans `outputs/zenaide/src/content/legal.ts` | 10 min | Oui |
| 3 | Vérifier la disponibilité et réserver un nom de domaine (`zenaide.fr` suggéré, variantes dans `copywriting.md`) chez un registrar (OVH, Gandi...) | 15-20 min + validation | Oui |
| 4 | Créer un compte Firebase (recommandé vu ton expérience Runleveling) OU Vercel OU Cloudflare Pages, et déployer `npm run build` puis le contenu de `dist/` | 30-45 min | Oui |
| 5 | Pointer le nom de domaine vers l'hébergement choisi (DNS) | 10 min + propagation (jusqu'à 24h) | Oui |
| 6 | Choisir l'hébergeur définitif et supprimer les blocs alternatifs non retenus dans les mentions légales et la politique de confidentialité (`legal.ts`) | 5 min | Oui |
| 7 | Créer une adresse email de contact sur le domaine (ex. Cloudflare Email Routing, gratuit) | 15 min | Recommandé |
| 8 | Poster le message d'outreach dans 2-3 groupes Facebook SAP/nettoyage + envoyer l'email à la FEDESAP (textes prêts dans `copywriting.md`) | 30 min | Non, mais utile pour les 1ers utilisateurs |
| 9 | Publier les 2 articles SEO déjà rédigés (`copywriting.md`) sur le site ou un blog associé | 30-45 min | Non |
| 10 | Prévoir la mise en place d'un lien de paiement (Stripe Payment Link, gratuit à créer) pour l'offre à 39€/an dès les premières demandes | 20 min | Non (peut attendre les 1ers utilisateurs payants) |

**Temps total estimé pour un lancement minimal (actions 1 à 7) : environ 2h-2h30**, étalables sur plusieurs soirées dans le budget des 5-10h/semaine.

## Rappel légal important

Activité secondaire (Zenaide) sur le même SIRET qu'Hydropropreté : **autorisée** depuis le décret n°2024-851 (en vigueur au 01/01/2025), tant que le chiffre d'affaires de Zenaide reste **sous 30 % du chiffre d'affaires total** (apprécié sur l'année civile précédente — donc aucun risque la première année). Comptabilité séparée recommandée. Détail complet et sources dans `recherche-marche.md`.

## Fichiers à consulter

- `recherche-marche.md` — recherche complète, décision, idées de secours
- `previsions.md` — hypothèses de revenus, charge horaire, budget
- `outputs/zenaide/README.md` — documentation technique de l'application
- `outputs/zenaide/content/copywriting.md` — tous les textes marketing prêts à l'emploi
- `outputs/zenaide/content/legal.md` — version longue des textes légaux + points de vigilance
- `journal.md` — journal détaillé de la nuit, étape par étape
