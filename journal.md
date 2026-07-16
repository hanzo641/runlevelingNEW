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
- ⏳ Reste à faire : README-DEMARRAGE.md, sous-agent de vérification finale critique, rebuild propre final.

