# Journal de mission — Business nocturne

## 2026-07-16 — Démarrage

- ✅ Vérifié l'état du dossier : c'est le repo Runleveling (app Expo réelle, ne pas y toucher). Le nouveau business sera construit dans des sous-dossiers dédiés (`business/`, `research/`, `outputs/`).
- ✅ Créé `journal.md` et `CLAUDE.md` (anti-compaction).
- ✅ Phase 1 — 20 idées générées, 5 sous-agents de recherche approfondie + 1 sous-agent légal SAP lancés en parallèle (background).
- ✅ Tous les résultats reçus et synthétisés dans `recherche-marche.md`. Décision : **Zenaide**, micro-SaaS niche SAP (attestations fiscales, devis/factures conformes + crédit d'impôt affiché, livre de recettes auto, suivi avance immédiate manuel). Idées de secours documentées (#2 sites vitrine artisans, #3 infoproduit guide SAP).
- ✅ Vérification légale SAP : activité secondaire OK sur le même SIRET Hydropropreté (décret 2024-851, seuil 30% du CA, gratuit).
- ✅ Phase 2 — Scaffold Vite + React + TypeScript créé dans `outputs/zenaide/`. Choix technique : V1 sans backend (localStorage), PDF 100% client (jsPDF), déploiement cible Firebase Hosting/Vercel/Cloudflare Pages.
- ✅ Sous-agents copywriting complet et pages légales (CGV/CGU/mentions légales/RGPD) lancés en parallèle et intégrés.
- ✅ Application construite : Landing, Pricing, 4 pages légales (rendues via markdown), et l'outil complet (Dashboard, Clients, Devis/Factures avec calcul crédit d'impôt 50%, Livre de recettes auto + export CSV, Attestations fiscales en un clic, Suivi avance immédiate, Profil entreprise).
- ✅ **Build testé** : `npm run build` passe (tsc + vite build, aucune erreur).
- ✅ **Tests end-to-end réels exécutés** (Playwright + Chromium headless, via `test-e2e.mjs`) : parcours complet landing → tarifs → 4 pages légales → création client → profil entreprise → création facture avec vérification du calcul crédit d'impôt (88€ facturés → 44€ crédit d'impôt affiché) → passage en payé → **téléchargement PDF facture réel (6871 octets)** → livre de recettes à jour → attestation fiscale générée → **téléchargement PDF attestation réel (5918 octets)** → suivi avance immédiate. **12/12 tests passent, aucune erreur JS.** Un bug de sélecteur de test (collision "Nom"/"Prénom" par sous-chaîne) trouvé et corrigé en cours de route — l'app elle-même n'avait pas de bug.
- ✅ `previsions.md` rédigé avec hypothèses sourcées (pessimiste/réaliste/optimiste), charge hebdo, budget mois 1.
- ✅ `outputs/README-DEMARRAGE.md` rédigé (résumé exécutif + checklist chiffrée).
- ✅ Sous-agent de vérification finale critique exécuté (relecture croisée de tous les livrables + code, comparaison avec les fichiers de recherche bruts). 6 problèmes trouvés, tous corrigés :
  1. Erreur de calcul "39€/an ≈ 3,90€/mois" (faux, c'est 3,25€/mois) → corrigée dans `Pricing.tsx`, `Landing.tsx`, `copywriting.md`, `CLAUDE.md`.
  2. Comparatif NeedMe "84€/an" trompeur (NeedMe pratique en réalité 67€/an en tarif annuel remisé) → nuancé.
  3. Promesse "résiliable en un clic" incohérente avec l'absence de compte utilisateur en V1 → reformulée en "résiliable par email".
  4. Email de paiement en dur (`contact@zenaide.fr`) non signalé comme prérequis dans la checklist → checklist corrigée.
  5. `Attestations.tsx` recalculait le taux de crédit d'impôt en dur au lieu d'utiliser la constante partagée `TAUX_CREDIT_IMPOT` → corrigé.
  6. `CLAUDE.md` contenait des sections obsolètes du tout début de nuit ("Décisions prises : à remplir") → nettoyé et réécrit à jour.
- ✅ Rebuild + re-test end-to-end après corrections : **12/12 tests passent toujours**, PDF générés vérifiés (facture 6871 octets, attestation 5918 octets).
- ✅ **Mission terminée.** Tous les livrables sont cohérents entre eux et avec les sources de recherche.

