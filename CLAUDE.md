# État du projet — Mission business nocturne

**Statut** : Phase 1 terminée. Phase 2 (construction) en cours.

## Idée retenue : Zenaide

Micro-SaaS de niche pour micro-entrepreneurs déclarés Services à la Personne (SAP) — ménage, jardinage, garde d'enfants, soutien scolaire, bricolage. Positionnement : "la tranquillité administrative des pros du SAP", moins cher et plus spécialisé que les généralistes.

**Pourquoi cette idée (raisonnement complet dans `recherche-marche.md`)** :
- Douleur réelle et documentée (attestations fiscales, avance immédiate, livre de recettes) — Thomas la vit directement avec Hydropropreté.
- Marché niche réel (~25-45k micro-entrepreneurs SAP) mais PAS un océan bleu : NeedMe (7€/mois) et Abby couvrent déjà l'essentiel. → on ne recrée PAS un concurrent généraliste, on se positionne sur : (1) UX 100% spécialisée métiers SAP, (2) prix cassé (freemium + 39€/an vs 84€/an chez NeedMe), (3) killer feature attestations fiscales en un clic + calcul crédit d'impôt 50% affiché sur les devis (angle mort identifié chez tous les concurrents), (4) distribution par crédibilité de pair (groupes Facebook SAP/nettoyage, FEDESAP) plutôt que SEO pur (déjà disputé).
- **On évite volontairement l'intégration API Urssaf avance immédiate** (trop complexe/réglementée pour 5-10h/semaine) : à la place, un tracker manuel de statuts + relances. Ça réduit fortement le risque technique du MVP.
- Légal : activité secondaire OK sur le même SIRET Hydropropreté (SAP891297756) tant que CA < 30% du CA total (décret 2024-851, voir `recherche-marche.md`).
- **Nom "Zenaide" choisi délibérément SANS le sigle "SAP"** dans la marque pour éviter toute confusion avec la marque déposée SAP SE (éditeur ERP allemand, même secteur logiciel) — le mot "SAP" reste utilisé uniquement comme terme descriptif (Services à la Personne) dans le contenu, jamais comme élément de marque.

## Choix techniques (Phase 2)
- Un seul projet Vite + React + TypeScript (`outputs/zenaide/`), React Router pour landing/pricing/légal/app.
- **V1 sans backend** : données en localStorage (pas de compte/serveur nécessaire) → testable et déployable ce soir sans créer aucun compte. Migration Firestore prévue en v2 (checklist README) une fois que Thomas aura créé le projet Firebase lui-même.
- Génération PDF (devis/factures/attestations) 100% côté client (jsPDF), zéro serveur.
- Déploiement cible : Firebase Hosting / Vercel / Cloudflare Pages (gratuit, pas de VPS) — action manuelle de Thomas (checklist README, nécessite un compte).

## Pricing retenu
Freemium : gratuit à vie jusqu'à 3 clients actifs. Payant : 39€/an (~3,90€/mois) — nettement sous NeedMe (84€/an). Justification détaillée dans `previsions.md`.

## Contexte clé
- Repo = Runleveling (app existante, NE PAS MODIFIER). Nouveau business dans des sous-dossiers dédiés.
- Contraintes : 5-10h/semaine, budget mois 1 ≤ 100€, stack RN/Expo/Firebase/web simple (pas de VPS), pas de pub payante, dropshipping exclu.
- Micro-entreprise existante : Hydropropreté (nettoyage, SAP agrément SAP891297756, franchise TVA 293B). Question légale ouverte : adjonction d'activité non-SAP sur ce SIRET = risque pour le crédit d'impôt clients ? (recherche en cours)
- Synergie pré-identifiée : SaaS/outil de niche pour micro-entrepreneurs nettoyage/SAP.
- Idées 2 et 3 (secours) à documenter en détail pour pivot rapide.

## Décisions prises
(à remplir au fur et à mesure)

## Prochaine étape
Lancer les sous-agents de recherche Phase 1 (top 5 idées + légal SAP).

## Fichiers clés
- `recherche-marche.md` : brainstorm + recherche + décision
- `journal.md` : log détaillé chronologique
- `research/` : notes brutes des sous-agents
- `outputs/` : livrables finaux (Phase 3)
