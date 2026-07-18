# Widget "Devis instantané" — version autonome pour Webador

Ce dossier contient une version **autonome** (JavaScript pur, sans React, sans build, sans
dépendance externe) du widget de devis, prête à coller dans ton site Webador existant.

## Installation dans Webador

1. Ouvre l'éditeur de ton site sur Webador.
2. Va dans **Réglages > Avancé**.
3. Clique sur **"Ajouter du code HTML personnalisé"**.
4. Clique sur **+ Ajouter un code HTML**.
5. Choisis la position **"Body – end"** (pour que le widget apparaisse sur toutes les pages).
6. Ouvre le fichier `widget-snippet.html` de ce dossier, copie **tout son contenu**, colle-le
   dans le champ de code.
7. Enregistre.

Le bouton "💬 Devis instantané" apparaît en bas à droite de chaque page de ton site.

## Modifier les tarifs ou le numéro de téléphone

Tout est regroupé en haut du `<script>`, dans les variables `HYDRO_ARTICLES` et
`HYDRO_ENTREPRISE` en bas du fichier `widget-snippet.html` — modifie ces valeurs puis recolle
le fichier mis à jour dans Webador.

## Vérifié avant livraison

Testé avec Playwright dans une page hôte simulant volontairement des styles CSS "agressifs" et
conflictuels (pour prouver que le widget ne casse rien et n'est pas cassé par le thème Webador) :
ouverture du widget, sélection de plusieurs articles avec calcul du prix exact (avec et sans
crédit d'impôt), saisie des coordonnées, génération du récapitulatif, lien d'appel téléphonique
correct. **7/7 tests passent, aucune erreur JavaScript.**

```bash
python3 -m http.server 4195 &
node test-widget.mjs
```

## Important

Webador indique explicitement ne pas garantir la compatibilité du code personnalisé et ne pas
fournir de support dessus (voir leur documentation officielle). Ce widget a été testé dans un
environnement qui simule un site tiers, mais **teste-le une fois collé dans ton vrai site**
(ouvrir le widget, faire un devis test, vérifier que le bouton WhatsApp/email fonctionne) avant
de considérer que c'est en ligne pour de vrai.
