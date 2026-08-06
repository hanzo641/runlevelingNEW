# HydroPropreté — Site vitrine premium

Site statique (HTML5 / CSS moderne / Vanilla JS, sans framework ni dépendance)
pour l'entreprise de nettoyage professionnel HydroPropreté à Pau.

## Structure

```
hydropropete-site/
├── index.html                 Page d'accueil
├── contact.html                Formulaire de devis
├── mentions-legales.html
├── politique-confidentialite.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── netlify.toml                Config déploiement + headers de sécurité/cache
├── css/
│   └── style.css               Design system complet
├── js/
│   └── main.js                 Interactions (reveal, compteurs, slider, FAQ, formulaire)
├── images/
│   ├── *.svg                   Illustrations maison, prêtes à être remplacées
│   └── README.md                Guide de remplacement des visuels
└── pages/
    ├── nettoyage-vitres-pau.html
    ├── nettoyage-copropriete-pau.html
    ├── nettoyage-canape-pau.html
    ├── nettoyage-terrasse-pau.html
    ├── fin-de-chantier-pau.html
    └── remise-en-etat-pau.html
```

## Déploiement

### Netlify

1. Créez un nouveau site depuis ce dossier (`hydropropete-site/`) comme
   répertoire de base ("Base directory").
2. Aucune commande de build n'est nécessaire (site 100 % statique).
   Répertoire de publication : `.`
3. Le formulaire de contact (`contact.html`) utilise **Netlify Forms**
   (attribut `data-netlify="true"`) : il sera automatiquement détecté au
   déploiement, sans configuration supplémentaire.

### Cloudflare Pages

1. Sélectionnez ce dossier comme racine du projet.
2. Build command : (aucune) — Output directory : `.`
3. Le formulaire Netlify Forms ne fonctionne pas sur Cloudflare Pages :
   remplacez l'action du formulaire dans `contact.html` par un service tiers
   (Cloudflare Pages Functions, Formspree, etc.) avant mise en production.

## Avant la mise en ligne — checklist

- [ ] Remplacer le domaine `https://www.hydropropete-pau.fr` dans toutes les
      balises `canonical`, `og:url` et le fichier `sitemap.xml`.
- [ ] Remplacer le téléphone, l'e-mail, l'adresse et le numéro WhatsApp
      (recherchez `+33559000000`, `+33659000000`, `contact@hydropropete-pau.fr`).
- [ ] Compléter les mentions légales (SIRET, forme juridique, hébergeur réel).
- [ ] Remplacer les visuels de démonstration dans `/images` (voir
      `images/README.md`).
- [ ] Remplacer les avis clients d'exemple sur la page d'accueil par de vrais
      avis vérifiés.
- [ ] Vérifier le score Google PageSpeed après remplacement des images par
      des photos réelles compressées (WebP recommandé).
