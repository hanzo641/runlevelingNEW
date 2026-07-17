# Site Hydropropreté — README technique

Site vitrine + assistant de devis instantané pour Hydropropreté (nettoyage professionnel de canapés, matelas, tapis — Pau et alentours).

## Stack

- Vite + React 19 + TypeScript, 100% statique (aucun backend, aucune base de données).
- Déployable tel quel sur Firebase Hosting, Vercel ou Cloudflare Pages (plan gratuit suffisant).

## Ce que fait le widget "Devis instantané"

Ce n'est **pas** une IA conversationnelle : c'est un assistant à questions guidées qui calcule un
prix **exact** à partir des vrais tarifs Hydropropreté (`src/data/pricing.ts`), pas une estimation
approximative. Ce choix est volontaire : une recherche de marché a montré que l'estimation de prix
par IA (photo) plafonne à ~90% de précision, ce qui n'est pas acceptable pour un prix affiché à un
client. Le calcul déterministe est fiable à 100% et ne nécessite aucune clé API ni aucun compte.

Parcours : sélection d'articles + quantités → prix total affiché en direct (avec et sans crédit
d'impôt 50%) → coordonnées du client → récapitulatif envoyable en un clic par **WhatsApp** (lien
`wa.me` pré-rempli) ou par **email** (mailto pré-rempli vers hydroproprete@gmail.com), ou appel
téléphonique direct.

## Mettre à jour les tarifs

Tout est centralisé dans `src/data/pricing.ts` (`ARTICLES`, `SERVICES_SUR_DEVIS`, `ENTREPRISE`).
Modifier ce fichier suffit à mettre à jour le site entier (tarifs affichés, calculs du widget,
coordonnées).

## Lancer en local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # sert le build pour vérification
```

## Tests

Test end-to-end réel (Playwright) couvrant : chargement de la page et des vrais tarifs, ouverture
du widget, sélection d'articles avec vérification du calcul du prix (avec crédit d'impôt),
saisie des coordonnées, génération du récapitulatif, ouverture des mentions légales.

```bash
npm run build && npm run preview -- --port 4190 &
node test-e2e.mjs
```

Résultat à la livraison : **7/7 tests passent**, aucune erreur JavaScript.

## Avant mise en ligne

1. **Déployer** : `npm run build` puis suivre la procédure de l'hébergeur choisi (Firebase
   Hosting / Vercel / Cloudflare Pages).
2. **Compléter le champ hébergeur** dans les mentions légales (`src/components/MentionsLegales.tsx`)
   une fois l'hébergeur choisi.
3. **Pointer le domaine** (ex. remplacer ou compléter hydroproprete.fr) vers le nouvel hébergement.
4. Vérifier que le lien WhatsApp (`wa.me/33602169236`) fonctionne bien avec le numéro professionnel.
5. (Optionnel, plus tard) Ajouter une vraie couche IA conversationnelle pour les demandes hors
   catalogue (auto, terrasse, sinistre) si le besoin s'en fait sentir — nécessiterait une clé API
   (Anthropic/OpenAI) et une fonction serverless (Cloudflare Pages Functions ou Vercel Functions)
   pour ne jamais exposer la clé côté client.
