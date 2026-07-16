# Round 2 — Ré-évaluation "widget devis en ligne + crédit d'impôt" avec petit budget pub (10-30€/mois)

Date recherche : 2026-07-16
Contexte : Thomas est maintenant ouvert à un budget pub payant de 10-30€/mois (Google Ads / Meta Ads) pour tester la demande. Une recherche précédente ("zéro pub") avait conclu à des "réserves" : marché niche réel (10-25k entreprises ciblables), angle différenciant réel (crédit d'impôt affiché), mais aucune preuve de demande organique trouvée.

---

## 1. Chiffres de marché — confirmation/infirmation

### Secteur nettoyage (NAF 812) — données INSEE

- **Fiche sectorielle INSEE 812 (Ésane, données 2021)** : 74 462 entreprises dans le secteur des "activités de nettoyage" en 2021 (contre 64 043 en 2020). CA du secteur : 18,5 Md€. Emploi : 347 452 ETP. Clientèle : 71,2 % entreprises, 16,4 % particuliers, 12,4 % administrations publiques. 98,7% des clients sont en France (marché domestique).
  https://www.insee.fr/fr/statistiques/7763878

- **INSEE Première n°1690 (données 2015, plus ancien mais avec répartition par taille — c'est la seule source trouvée avec cette granularité)** : 38 000 unités légales dans le secteur, réparties ainsi :
  - 22 grandes entreprises (GE) → 34 % du CA du secteur
  - 170 entreprises de taille intermédiaire (ETI) → 22,1 % du CA
  - 2 600 PME → 28,3 % du CA
  - **Plus de 34 000 micro-entreprises → seulement 15,6 % du CA** (environ 90% des unités légales du secteur en nombre, mais un poids économique minoritaire)
  - Sous-catégorie **micro-entrepreneurs (régime auto-entrepreneur)** : 10 000 en 2015, contre 5 500 en 2010 (forte progression), mais ne pèsent que 0,6 % du CA du secteur.
  https://www.insee.fr/fr/statistiques/3362457

### Lecture pour le ciblage B2B du widget

Le chiffre brut "74 462 entreprises" (2021) est un majorant trompeur pour ce projet : il inclut les 22 grandes entreprises et 170 ETI qui pèsent 56% du CA à elles seules mais n'ont aucun intérêt pour un widget à 15-20€/mois (elles ont leurs propres systèmes). La cible réelle du produit — TPE/PME avec un site web propre, capables de payer un abonnement SaaS mensuel — se limite plutôt aux **~2 600 PME + une fraction des micro-entreprises qui ont un vrai site web** (la majorité des micro-entrepreneurs en nettoyage n'ont probablement pas de site web propre : ils utilisent Google Business Profile, Facebook, ou des plateformes comme Yoojo/Needhelp/Otodesk).

En croisant avec la structure typique du marché (une entreprise avec salariés est plus susceptible d'avoir un site web qu'un auto-entrepreneur solo), l'estimation réaliste de la cible **"entreprise de nettoyage/SAP avec site web propre, en France"** se situe plutôt autour de **5 000 à 15 000**, ce qui est cohérent avec (et confirme plutôt la borne basse de) l'estimation précédente de "10-25k entreprises ciblables" — mais avec une nuance importante : une bonne partie de cette fourchette est probablement optimiste, le vrai chiffre pouvant être plus proche de 5-10k si on exige un site web fonctionnel avec assez de trafic pour qu'un widget de devis ait un intérêt.

Aucune donnée officielle récente (2025-2026) avec ventilation par taille n'a pu être trouvée — l'INSEE indique que la diffusion des fiches sectorielles millésime 2022 a été repoussée pour cause de changement de nomenclature NAF. Donc les chiffres de 2015 restent la meilleure source disponible pour la structure du secteur, actualisés en tendance générale par le chiffre global 2021.

### SAP au sens large (au-delà du seul nettoyage)

Pas de chiffre officiel unique trouvé pour "auto-entrepreneurs SAP tous métiers confondus" en 2025-2026 malgré plusieurs recherches (URSSAF open data existe — https://open.urssaf.fr/explore/dataset/auto-entrepreneurs-par-secteur-dactivite/ — mais nécessite une exploration interactive du dataset non faisable via WebFetch/WebSearch). Le repère "25-45k micro-entrepreneurs SAP" utilisé dans la recherche Zenaide de cette nuit n'a pas pu être re-confirmé ni infirmé directement ; il reste plausible au vu de l'ordre de grandeur du secteur nettoyage seul (34 000 micro-entreprises).

**Verdict point 1** : chiffres de marché globalement confirmés dans l'ordre de grandeur, mais la cible réellement adressable par un widget-sur-site-web (donc excluant les auto-entrepreneurs sans site) est probablement plus proche de 5-15k que de 25-45k.

---

## 2. Réalisme d'une campagne pub à 10-30€/mois

### CPC Google Ads (Search) en France, 2025-2026

- CPC moyen tous secteurs confondus en France : **4,51-4,61€ en 2025** (+12,88% vs 2024), avec une nouvelle hausse de +7 à +12% anticipée pour 2026 (poussée par l'IA générative).
  https://leo-marchal.fr/cpc-google-ads-guide-par-secteur-dactivite-en-france/
  https://www.growth-angels.com/blog/acquisition/taux-moyens-google-ads-par-secteur

- CPC B2B Search en France 2026 : **fourchette généralement citée 2-8€**, pouvant dépasser **15-20€** sur des mots-clés très concurrentiels (logiciels, consulting, services financiers, juridique, assurance).
  https://driftdigital.fr/blog/google-ads-pme-b2b-2026/

- Spécifique "services à la personne" : "les CPC augmentent... à 5€, les clics deviennent chers", concurrence locale croissante.
  https://www.growth-angels.com/blog/acquisition/cpc-google-ads-par-secteur

- Budget "réaliste" recommandé pour du B2B services sur Google Ads par les agences : **1 500-2 000€/mois** minimum pour espérer une volumétrie exploitable — un ordre de grandeur 50 à 100 fois supérieur au budget de Thomas.
  https://www.growth-angels.com/blog/acquisition/taux-moyens-google-ads-par-secteur

**Calcul avec 10-30€/mois sur Google Ads Search, CPC estimé 2-5€ pour un mot-clé niche B2B (moins concurrentiel qu'un terme générique "logiciel devis" mais toujours B2B) :**
→ **2 à 15 clics par mois**. C'est un échantillon statistiquement dérisoire : impossible de distinguer un signal réel d'un bruit aléatoire (0 conversion sur 5 clics ne prouve rien dans un sens ou dans l'autre).

### CPC Meta Ads (Facebook/Instagram) en France, 2025-2026

- CPC généraliste : **0,20-0,95€** selon secteur et objectif.
- CPC B2B / services professionnels : **1,50-4,00€** (une source cite une fourchette plus large de 1 à 5€), avec un CPM de 15-35€.
  https://junto.fr/blog/tarifs-meta-ads
  https://winleads.fr/cout-social-ads-roi-campagnes-meta/

- Budget "recommandé" pour une PME afin d'alimenter correctement l'algorithme Meta : 200-500€/mois (phase de test), les TPE françaises dépensant en moyenne 200-800€/mois sur Facebook Ads.

**Calcul avec 10-30€/mois sur Meta Ads, CPC estimé 1,5-3€ en visant des audiences B2B (petites entreprises, gérants) :**
→ **3 à 20 clics par mois**. Meilleur que Google Search sur le papier (CPC plus bas), mais Meta n'a structurellement pas d'intention de recherche ("devis nettoyage" n'est pas une requête Meta) — il faudrait cibler par centres d'intérêt/comportement ("propriétaire de petite entreprise", "petites entreprises de nettoyage"), un ciblage flou qui génère plus de clics accidentels et moins qualifiés qu'une recherche Google. De plus, à ce niveau de dépense, l'algorithme Meta n'a statistiquement pas assez de données (l'agence recommande 200-500€/mois minimum) pour sortir de la phase d'apprentissage — le coût par clic réel risque d'être plus élevé que la moyenne tant que la campagne n'a pas de volume.

### Est-ce suffisant pour valider une hypothèse de demande ?

**Non, pas de manière fiable.** Avec 5-20 clics/mois toutes plateformes confondues :
- Même avec un taux de conversion landing page optimiste de 10-20% (élevé pour du B2B froid), cela représente **0,5 à 4 leads qualifiés par mois**.
- Un mois à 0 lead ne prouve pas l'absence de demande (échantillon trop petit) ; un mois à 2 leads ne prouve pas non plus une demande solide (pourrait être un biais d'audience ou de hasard).
- Il faudrait au minimum plusieurs dizaines de clics qualifiés (idéalement 100+) pour commencer à tirer une conclusion statistiquement défendable — soit plusieurs mois consécutifs à ce budget, ou un budget ponctuellement plus élevé (ex. 100-150€ sur 2-3 semaines) pour un vrai test.

**Conclusion round 2** : 10-30€/mois de pub ne suffit pas à générer un signal de demande statistiquement exploitable en un temps raisonnable (1-2 mois). C'est un budget qui a de la valeur pour *apprendre à faire tourner une campagne* (calibrer tracking, audiences, message), mais pas pour *valider ou invalider une hypothèse de marché*.

---

## 3. Concurrents — vérification round 2

| Outil | Type | Prix | Affiche le crédit d'impôt 50% sur le devis ? |
|---|---|---|---|
| **Econeto** (simulateur "Article 44") | Widget de pré-devis intégré à la suite logicielle Econeto, connecté par API au back-office | Non communiqué séparément (fait partie de la suite) | **Non** — le simulateur transmet surface/prestation/récurrence et génère un pré-devis PDF, mais aucune mention de calcul de crédit d'impôt trouvée dans la documentation. https://blog.econeto.com/article44-simulateur+de+devis+de+nettoyage+temps+reel |
| **Tactidevis** ("Simulateur tarif propreté") | Widget/module de devis pour entreprises de nettoyage/entretien | 36€ HT/mois (abonnement logiciel complet, devis illimité + facturation) | Non vérifiable en détail (page inaccessible en fetch direct, erreur serveur), mais aucune mention du crédit d'impôt dans les résultats de recherche ni sur les pages produit indexées. https://www.tactidevis.fr/proprete |
| **PROPRET** | Suite logicielle complète (planning, devis, facturation, CRM) | À partir de 49,99€ HT/mois | Module devis = calcul de rendement/marge interne, pas de mention de crédit d'impôt client. https://propret.fr/fonctionnalites/gestion-de-la-relation-client/logiciel-devis/ |
| **Elfsight Calculator Widget** (générique, cleaning cost calculator template) | Widget embarquable générique (pas français, pas spécialisé SAP) | Freemium, plans payants | Aucune fonctionnalité France/crédit d'impôt — outil généraliste anglophone. https://elfsight.com/calculator-form-widget/templates/cleaning-cost-calculator/ |
| **Clean Estimator / Clean Calculator / MaidGrow / CleanCalc** (US) | Calculateurs de devis nettoyage, marché américain | 7,99$/semaine à 29$/mois | Non pertinent (marché US, pas de notion de crédit d'impôt français). https://www.cleanestimator.com/, https://www.getapp.com/industries-software/a/clean-calculator/ |
| **Organilog, Progiclean, 2BePragma, Proprely** | Logiciels de gestion nettoyage tout-en-un (mentionnés dans forums/comparatifs) | Variable | Aucune mention trouvée d'un affichage crédit d'impôt sur devis dans le contenu indexé. |

**Confirmation round 2** : Aucun acteur identifié (français ou international) n'affiche explicitement le calcul du crédit d'impôt de 50% sur un devis en ligne généré par un widget embarqué. L'angle différenciant reste valide et n'a pas été copié entre-temps. **Mais** c'est une fonctionnalité facile à répliquer (une formule de calcul, pas une intégration technique complexe) — un concurrent existant (Econeto, Tactidevis, PROPRET) pourrait l'ajouter à leur widget existant en quelques jours de dev s'ils y voyaient un intérêt commercial, ce qui limite la défendabilité à moyen terme de cet avantage si le produit rencontre un succès visible.

---

## 4. Preuves de demande plus directes

### Forums

- Un fil trouvé sur un forum généraliste entrepreneurs (gautier-girard.com) : un gérant d'entreprise de nettoyage cherche explicitement un logiciel pour faire des devis rapidement, mentionnant que les solutions spécialisées existantes (Pégase Propreté, Clair et Net) sont jugées trop chères (1500-4000€). Réponses orientent vers EBP, Econeto.
  http://www.gautier-girard.com/forum/topic/besoin-dun-logiciel-pour-societe-de-nettoyage
  → C'est une preuve de demande pour un **outil de devis pas cher en général**, pas spécifiquement pour un **widget embarquable avec crédit d'impôt affiché sur le site du prestataire**. La douleur exprimée est "les logiciels pro sont trop chers", ce qui valide plutôt l'angle prix (15-20€/mois vs plusieurs centaines) que l'angle "crédit d'impôt affiché".

### Groupes Facebook

- Confirmation de l'existence d'au moins un groupe dédié : "Auto-entrepreneurs dans le nettoyage, ménage, service à..." (https://www.facebook.com/groups/193251479664600/) — mais **contenu et nombre de membres non accessibles** sans compte connecté (le fetch renvoie uniquement la page de connexion Facebook, aucune information sur les publications ou effectifs n'a pu être récupérée par cette méthode).
- Autres groupes généralistes auto-entrepreneurs identifiés où le sujet pourrait être abordé en creux : "Entraide Auto/Micro-entrepreneurs – Hello My Business", "Artisans et Auto-entrepreneurs" (avec déclinaisons régionales), "La Communauté des auto-entrepreneurs".
- **Limite méthodologique** : je n'ai pas pu lire le contenu réel de ces groupes (mur d'authentification Facebook), donc je ne peux ni confirmer ni infirmer la présence de discussions sur les logiciels de devis / génération de leads dans ces groupes spécifiquement. Une vérification manuelle par Thomas (qui peut se connecter à Facebook) serait nécessaire pour un signal réel — poster une question ouverte ("comment gérez-vous vos devis en ligne ?") dans ces groupes serait à la fois gratuit et plus informatif qu'une pub à 10-30€/mois.

### Avis sur outils de devis en ligne généralistes

- Aucun avis client indépendant détaillé trouvé (Capterra/Appvizer renvoient surtout du contenu marketing des éditeurs eux-mêmes plutôt que des avis vérifiés en profondeur pour ces outils de niche).
- Point qualitatif trouvé en creux : les entreprises de nettoyage recherchant un site web insistent sur l'importance d'un "formulaire de devis structuré" (type de local, surface, fréquence) et sur la rapidité de réponse comme facteur concurrentiel — cohérent avec l'intérêt générique pour un outil de devis instantané, mais toujours sans validation spécifique de l'angle "crédit d'impôt affiché".

**Verdict point 4** : toujours pas de preuve organique directe et solide de demande pour la fonctionnalité différenciante spécifique (crédit d'impôt affiché sur devis). La demande pour "un outil de devis en ligne pas cher" existe et est documentée (fil de forum), mais elle valide un marché déjà servi par Econeto/Tactidevis/PROPRET à des prix plus élevés — pas la killer feature crédit d'impôt en tant que telle.

---

## 5. Faisabilité technique de la campagne à ce budget (stack de Thomas)

Techniquement, aucun obstacle :
- Landing page simple : 1 page Vite + React/TS ou même HTML statique, hébergée gratuitement (Firebase Hosting / Vercel / Cloudflare Pages) — quelques heures de travail, dans les compétences de Thomas.
- Google Ads : compte gratuit à créer, tracking de conversion via Google Tag (gratuit), budget quotidien réglable à 0,50-1€/jour pour respecter 10-30€/mois.
- Meta Ads : compte Meta Business Suite gratuit, Meta Pixel à poser sur la landing page (gratuit), budget quotidien réglable de la même façon.
- Aucun besoin de VPS, pas de coût d'infra supplémentaire : la contrainte "budget mois 1 ≤ 100€" reste largement respectée même en ajoutant 10-30€ de pub.

**Le point faible n'est pas technique, il est statistique** : le stack permet de lancer la campagne facilement, mais le volume de données généré à ce budget sera trop faible pour en tirer une conclusion fiable en un temps raisonnable.

---

## 6. Verdict — le petit budget pub change-t-il l'évaluation ?

**Marginalement, mais pas fondamentalement.** Voir synthèse ci-dessous.

## Sources principales
- https://www.insee.fr/fr/statistiques/7763878 (Fiche secteur 812, données 2021)
- https://www.insee.fr/fr/statistiques/3362457 (Insee Première 1690, répartition par taille 2015)
- https://leo-marchal.fr/cpc-google-ads-guide-par-secteur-dactivite-en-france/
- https://www.growth-angels.com/blog/acquisition/cpc-google-ads-par-secteur
- https://www.growth-angels.com/blog/acquisition/taux-moyens-google-ads-par-secteur
- https://driftdigital.fr/blog/google-ads-pme-b2b-2026/
- https://junto.fr/blog/tarifs-meta-ads
- https://winleads.fr/cout-social-ads-roi-campagnes-meta/
- https://blog.econeto.com/article44-simulateur+de+devis+de+nettoyage+temps+reel
- https://www.tactidevis.fr/proprete
- https://propret.fr/fonctionnalites/gestion-de-la-relation-client/logiciel-devis/
- https://elfsight.com/calculator-form-widget/templates/cleaning-cost-calculator/
- https://www.cleanestimator.com/
- http://www.gautier-girard.com/forum/topic/besoin-dun-logiciel-pour-societe-de-nettoyage
- https://www.facebook.com/groups/193251479664600/ (existence confirmée, contenu non accessible)
- https://open.urssaf.fr/explore/dataset/auto-entrepreneurs-par-secteur-dactivite/ (dataset existant, non exploité en détail — piste pour Thomas)
