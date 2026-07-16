# État du projet — Mission business nocturne

**Statut : PIVOT EN COURS.** Zenaide a été livré (voir historique ci-dessous, conservé pour référence) mais **abandonné par Thomas** après revue : il est déjà client d'Unipros (concurrent direct identifié dans la recherche) pour gérer l'admin de son activité Hydropropreté, ce qui invalidait le narratif produit et l'intérêt personnel du projet. Nouvelle contrainte assouplie : Thomas est ouvert à un vrai système d'abonnement (paiement en ligne réel) et à un **petit budget de pub (10-30€/mois)** pour valider la demande — la contrainte initiale "zéro pub" n'est plus stricte. Un nouveau brainstorm complet (Round 2) est en cours, voir `recherche-marche.md` section "Round 2".

## Idée retenue : Zenaide

Micro-SaaS de niche pour micro-entrepreneurs déclarés Services à la Personne (SAP) — ménage, jardinage, garde d'enfants, soutien scolaire, bricolage. Positionnement : "la tranquillité administrative des pros du SAP", moins cher et plus spécialisé que les généralistes.

**Pourquoi cette idée (raisonnement complet dans `recherche-marche.md`)** :
- Douleur réelle et documentée (attestations fiscales, avance immédiate, livre de recettes) — Thomas la vit directement avec Hydropropreté.
- Marché niche réel (~25-45k micro-entrepreneurs SAP) mais PAS un océan bleu : NeedMe (7€/mois, soit 67€/an en tarif annuel remisé -20%) et Abby couvrent déjà l'essentiel. → on ne recrée PAS un concurrent généraliste, on se positionne sur : (1) UX 100% spécialisée métiers SAP, (2) prix cassé (freemium + 39€/an, sous les 67-84€/an pratiqués chez NeedMe selon la formule), (3) killer feature attestations fiscales en un clic + calcul crédit d'impôt 50% affiché sur les devis (angle mort identifié chez tous les concurrents), (4) distribution par crédibilité de pair (groupes Facebook SAP/nettoyage, FEDESAP) plutôt que SEO pur (déjà disputé).
- **On évite volontairement l'intégration API Urssaf avance immédiate** (trop complexe/réglementée pour 5-10h/semaine) : à la place, un tracker manuel de statuts + relances. Ça réduit fortement le risque technique du MVP.
- Légal : activité secondaire OK sur le même SIRET Hydropropreté (SAP891297756) tant que CA < 30% du CA total (décret 2024-851, voir `recherche-marche.md`).
- **Nom "Zenaide" choisi délibérément SANS le sigle "SAP"** dans la marque pour éviter toute confusion avec la marque déposée SAP SE (éditeur ERP allemand, même secteur logiciel) — le mot "SAP" reste utilisé uniquement comme terme descriptif (Services à la Personne) dans le contenu, jamais comme élément de marque.

## Choix techniques
- Un seul projet Vite + React + TypeScript (`outputs/zenaide/`), React Router pour landing/pricing/légal/app.
- **V1 sans backend** : données en localStorage (pas de compte/serveur nécessaire) → testable et déployable ce soir sans créer aucun compte. Migration Firestore prévue en v2 (checklist README) une fois que Thomas aura créé le projet Firebase lui-même.
- Génération PDF (devis/factures/attestations) 100% côté client (jsPDF), zéro serveur.
- Déploiement cible : Firebase Hosting / Vercel / Cloudflare Pages (gratuit, pas de VPS) — action manuelle de Thomas (checklist README, nécessite un compte).

## Pricing retenu
Freemium : gratuit à vie jusqu'à 3 clients actifs. Payant : **39€/an, soit 3,25€/mois** (39 ÷ 12 — attention, une version antérieure de ce document et du code affichait par erreur "3,90€/mois", corrigé partout). Sous le tarif annuel de NeedMe (67€/an remisé, 84€/an en mensuel × 12 sans remise). Justification détaillée dans `previsions.md`.

## État final (fin de nuit)
- Application construite, buildée (`npm run build` OK) et testée end-to-end (Playwright, 12/12 tests passent, PDF générés vérifiés réels) — voir `outputs/zenaide/`.
- Rebuild propre confirmé (npm ci depuis zéro dans un dossier séparé + re-run des tests e2e : succès).
- Copywriting complet, pages légales rédigées (avec placeholders identifiés à compléter par Thomas), prévisions sourcées.
- Livrable principal : `outputs/README-DEMARRAGE.md`.
- **Vérification finale critique effectuée par sous-agent** (relecture croisée de tous les livrables + code). Problèmes trouvés et corrigés :
  1. Erreur de calcul "39€/an ≈ 3,90€/mois" (faux — c'est 3,25€/mois) : corrigée dans `Pricing.tsx`, `Landing.tsx`, `copywriting.md`, ce fichier.
  2. Comparatif NeedMe "84€/an" présenté sans nuance : précisé (67€/an tarif annuel remisé vs 84€/an en mensuel × 12).
  3. Promesse "résiliable en un clic" sur la page Tarifs, incohérente avec l'absence de compte utilisateur en V1 (résiliation réelle par email) : reformulée.
  4. Email de paiement codé en dur (`mailto:contact@zenaide.fr`) alors que l'email de contact est un placeholder ailleurs : checklist README clarifiée pour que cette adresse soit créée avant que le bouton de paiement soit fonctionnel.
  5. `Attestations.tsx` recalculait le taux de crédit d'impôt en dur (`0.5`) au lieu d'utiliser la constante partagée `TAUX_CREDIT_IMPOT` : corrigé.
  6. Ce fichier (`CLAUDE.md`) contenait des sections obsolètes ("Décisions prises : à remplir", "Prochaine étape : lancer la recherche Phase 1") datant du tout début de la nuit : nettoyées.
- Mission considérée comme terminée. Si reprise après compaction : lire `outputs/README-DEMARRAGE.md`, tout est à jour et cohérent.

## Contexte clé
- Repo = Runleveling (app existante, NE PAS MODIFIER). Nouveau business dans des sous-dossiers dédiés (`recherche-marche.md`, `previsions.md`, `journal.md`, `research/`, `outputs/`).
- Contraintes respectées : 5-10h/semaine, budget mois 1 ≤ 100€ (voir `previsions.md`), stack web simple (pas de VPS), pas de pub payante, dropshipping exclu (non retenu).
- Micro-entreprise existante : Hydropropreté (nettoyage, SAP agrément SAP891297756, SIRET 89129775600027, franchise TVA 293B). Question légale de l'adjonction d'activité SAP résolue (voir ci-dessus, décret 2024-851).
- Idées de secours #2 (site vitrine + fiche Google Business Profile pour artisans locaux Pau/64) et #3 (guide/templates SAP en lead magnet) documentées dans `recherche-marche.md` pour pivot rapide.

## Fichiers clés
- `recherche-marche.md` : brainstorm (20 idées) + recherche approfondie (top 5 + légal SAP) + décision
- `previsions.md` : hypothèses de revenus sourcées, charge horaire, budget mois 1
- `journal.md` : log détaillé chronologique de la nuit
- `research/` : notes brutes des 6 sous-agents de recherche Phase 1
- `outputs/README-DEMARRAGE.md` : livrable principal (résumé exécutif + checklist)
- `outputs/zenaide/` : code source complet de l'application
