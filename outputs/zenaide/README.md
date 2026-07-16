# Zenaide — README technique

Micro-SaaS pour micro-entrepreneurs déclarés Services à la Personne (SAP) en France : devis/factures conformes avec calcul du crédit d'impôt de 50 %, livre de recettes automatique, attestations fiscales annuelles en un clic, suivi manuel de l'avance immédiate.

Voir `../../recherche-marche.md` et `../../CLAUDE.md` à la racine du dépôt pour le raisonnement business complet.

## Stack technique

- **Vite + React 19 + TypeScript**, React Router pour le routage (landing, tarifs, pages légales, outil).
- **Aucun backend en V1** : toutes les données (clients, devis, factures, profil) sont stockées dans le `localStorage` du navigateur (`src/lib/storage.ts`). Pas de compte, pas de serveur, pas de coût d'hébergement de base de données.
- **Génération PDF 100 % côté client** avec [jsPDF](https://github.com/parallax/jsPDF) (`src/lib/pdf.ts`) : devis, factures, attestations fiscales.
- **Contenu légal** en Markdown (`src/content/legal.ts`), rendu avec [marked](https://github.com/markedjs/marked).
- Pas de dépendance à un VPS : le build (`npm run build`) produit un dossier `dist/` statique déployable tel quel sur **Firebase Hosting**, **Vercel** ou **Cloudflare Pages** (tous avec un plan gratuit suffisant pour démarrer).

## Structure du projet

```
src/
  types.ts              # Modèles de données (Client, Document, Suivi avance immédiate, Profil)
  lib/
    storage.ts           # CRUD localStorage + calculs
    pdf.ts                # Génération des PDF (devis/factures/attestations)
  content/
    legal.ts              # Textes juridiques (mentions légales, CGV, CGU, confidentialité)
  components/              # Logo, header/footer marketing
  pages/                    # Landing, Pricing, pages légales
  app/                       # L'outil : Dashboard, Clients, DevisFactures, LivreRecettes,
                              # Attestations, AvanceImmediate, Profil, AppLayout (nav)
content/
  copywriting.md            # Copywriting source (landing, pricing, articles SEO, outreach)
  legal.md                  # Version longue des textes légaux + points de vigilance juridique
```

## Lancer le projet en local

```bash
npm install
npm run dev       # serveur de développement, http://localhost:5173
npm run build     # build de production dans dist/ (tsc + vite build)
npm run preview   # sert le build de production localement pour vérification
```

## Tests

Un test end-to-end réel (Playwright + Chromium headless) couvre le parcours complet : navigation marketing, création d'un client, saisie du profil entreprise, création d'une facture avec vérification du calcul du crédit d'impôt, passage au statut payé, **téléchargement réel du PDF de facture**, mise à jour du livre de recettes, génération d'une attestation fiscale et **téléchargement réel de son PDF**, suivi de l'avance immédiate.

```bash
npm run build && npm run preview -- --port 4173 &
node test-e2e.mjs
```

Résultat au moment de la livraison : **12/12 tests passent**, aucune erreur JavaScript non capturée pendant le parcours (voir `../../journal.md` pour le détail).

## Ce qui manque avant mise en ligne (voir aussi `../README-DEMARRAGE.md`)

1. **Compléter les placeholders légaux** dans `src/content/legal.ts` (nom de famille, adresse, email de contact, hébergeur retenu) — liste complète dans `content/legal.md`.
2. **Créer un compte** chez le registrar de domaine (ex. OVH, Gandi) pour `zenaide.fr` (ou variante), et chez l'hébergeur retenu (Firebase / Vercel / Cloudflare Pages) — non fait cette nuit (aucune création de compte autorisée).
3. **Déployer** : `npm run build` puis suivre la procédure de déploiement de l'hébergeur choisi (ex. `firebase deploy`, `vercel --prod`, ou glisser-déposer `dist/` sur Cloudflare Pages).
4. **V2 (plus tard)** : ajouter un compte utilisateur + synchronisation Firestore si la V1 locale montre une traction suffisante pour justifier l'investissement (voir anticipation déjà écrite dans `src/content/legal.ts`, section confidentialité point 8).
5. **Paiement en ligne** : la V1 ne propose pas de checkout intégré (mailto vers contact) — Stripe Checkout (ou Payment Link) est le candidat naturel pour la V2, sans coût fixe (uniquement des frais par transaction).

## Notes de conception

- **Le mot « SAP » n'apparaît jamais dans le nom de marque** (uniquement comme terme descriptif « Services à la Personne » dans le contenu), pour éviter toute confusion avec la marque déposée SAP SE (éditeur ERP allemand) — voir raisonnement dans `../../CLAUDE.md`.
- Le crédit d'impôt de 50 % affiché est systématiquement présenté comme une **estimation indicative**, jamais comme une garantie — choix assumé pour rester dans les clous vis-à-vis du client final et de l'administration fiscale (voir CGV, article 6).
