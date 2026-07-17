# Round 3 — Idée 2 : Agrégateur de revenus multi-plateformes pour indépendants/freelances

Date recherche : 2026-07-17
Objectif : vérifier si cette idée échappe au piège identifié pour "SaaS générique de compta AE" (marché verrouillé par Indy/Pennylane/Qonto/Shine) ou si c'est le même piège avec un nom différent.

---

## 1. Concurrents directs

### 1.1 Segment "gig driver" (Uber, DoorDash, Instacart, Lyft...) — marché US, déjà TRÈS encombré

Il existe une famille entière d'apps établies qui font EXACTEMENT ce que l'idée propose, pour les chauffeurs/livreurs :

- **Solo** (worksolo.com) — connecte Uber, Lyft, DoorDash, Instacart, Spark, Amazon Flex, Grubhub, Shipt, Roadie, Favor et plus. Tracking auto des revenus + kilométrage + impôts. Pricing 8-15$/mois (annuel). App Store/Google Play, produit mature.
  https://www.worksolo.com/
- **Gridwise** — agrège les revenus de plusieurs plateformes gig (rideshare + livraison), 500k+ dashers dans leurs propres études.
  https://gridwise.io/
- **Hurdlr** — connecte Uber, Lyft, PayPal, Square, Airbnb, banques. Suivi revenus multi-sources + estimation impôts trimestriels temps réel. Gratuit + payant dès 9,99$/mois. Produit ancien et établi (reviews 2021 déjà).
  https://www.g2.com/products/hurdlr/reviews , https://entrecourier.com/delivery/delivery-strategies/delivery-tools/hurdlr-review-2021-mileage-expense-tax-tracker-app/
- **Moves** — agrège revenus/dépenses de 20+ plateformes gig (Uber, DoorDash, Rover...).
- **Para**, **Mystro**, **ShiftTracker**, **SheetLink** — variantes concurrentes sur le même créneau, certaines utilisant Plaid pour lire directement les dépôts bancaires plutôt que les API des plateformes.
  https://shifttrackerapp.com/ , https://sheetlink.app/gig-worker-bookkeeping
- **Argyle** — infrastructure B2B (façon "Plaid pour l'emploi/gig") qui fournit à des tiers (prêteurs, assureurs, apps comme celles ci-dessus) un accès permissionné aux données de revenus Uber, DoorDash, Instacart, TaskRabbit, Wonolo. A levé 20M$ en Series A (Bain Capital Ventures) — c'est littéralement l'infrastructure sur laquelle Solo/Gridwise/etc. sont probablement construits.
  https://www.argyle.com/industries/gig-economy , https://baincapitalventures.com/insight/bcv-leads-20-million-series-a-in-argyle-modern-api-for-income-and-employment-verification/

**Conclusion segment gig driver** : ce marché n'est PAS un océan bleu, c'est un océan rouge mature avec 6-8 acteurs concurrents, dont au moins un (Argyle) financé à hauteur de 20M$ et servant d'infrastructure aux autres. Le pattern est identique au piège Indy/Pennylane : produit "logique" que plusieurs équipes bien financées ont déjà construit et itéré depuis des années.

### 1.2 Segment "créateur de contenu" (YouTube, Twitch, Patreon...) — un concurrent quasi-exact trouvé

- **Easy Earnings Tracker** (easyearningstracker.com) — "un seul dashboard pour YouTube, Patreon, Twitch, Upwork et plus", conversion multi-devises, rapports fiscaux. **C'est une correspondance quasi-exacte de l'idée évaluée**, y compris le mélange créateurs + freelance (Upwork est listé). Vérifié par fetch direct :
  - Méthode : **saisie manuelle uniquement**, pas de connexion bancaire ni d'API ("No bank connections. No scary permissions. You stay in control.") — confirme qu'aucune plateforme ne fournit d'API d'earnings exploitable, même pour ce concurrent.
  - Pricing : Starter 2,49$/mois (promo, normalement 4,99$), Pro 13,99$/mois.
  - Maturité : produit jeune, solo-founder ("built during tax season at 2am"), pas de preuve de traction (pas de compteur d'utilisateurs, pas de témoignages tiers), mais design professionnel.
  https://www.easyearningstracker.com/

**Conclusion segment créateur** : un concurrent direct existe déjà, à un prix cassé (2,49-14$/mois), en solo, et prouve que le produit "aggregation manuelle multi-plateforme" est réplicable en quelques semaines par n'importe qui — donc faible barrière à l'entrée = faible défendabilité, pas l'inverse.

### 1.3 Segment "freelance créatif/tech" (Malt, Fiverr, Upwork, ComeUp) — pas de concurrent dédié trouvé

Aucun outil spécifiquement dédié à l'agrégation des revenus Malt+Fiverr+Upwork+ComeUp n'a été trouvé. En revanche :
- **Indy** (ex-Georges, France) résout indirectement ce problème via l'**agrégation bancaire Open Banking DSP2** (connexion en lecture seule à Qonto, Shine, Wise, BNP, Boursorama, Revolut Pro, etc.) : toutes les transactions pro sont importées automatiquement quelle que soit leur plateforme d'origine, avec catégorisation par IA. Si les virements Malt/Fiverr/Upwork atterrissent sur le même compte bancaire pro, Indy voit déjà la somme consolidée — sans avoir besoin d'intégrer chaque plateforme individuellement.
  https://wise.com/fr/blog/indy-tarifs-fonctionnalites-alternatives
- **Lili** (US) — explicitement PAS d'agrégation cross-comptes ("no combined or aggregated view across businesses").
  https://support.lili.co/hc/en-us/articles/6592694536346
- **Found**, **Collective** — non trouvé de fonctionnalité d'agrégation multi-plateformes spécifique lors de la recherche.

**Conclusion segment freelance créatif** : c'est le segment le moins couvert par des concurrents dédiés — mais c'est aussi celui où la douleur est la plus faible, car l'agrégation bancaire (déjà chez Indy/Shine/Qonto) capture déjà l'essentiel du signal utile (le total encaissé), sans qu'un outil spécifique par plateforme soit nécessaire pour la déclaration fiscale/URSSAF.

---

## 2. Disponibilité des API — le nœud du problème technique

| Plateforme | API publique pour revenus personnels ? | Constat |
|---|---|---|
| **Malt** | Non trouvée | Résultats de recherche ne montrent que la marketplace de freelances proposant des services API, pas de documentation Malt elle-même pour un accès tiers aux revenus. |
| **Fiverr** | Non | Confirmé : pas d'API générale publique ; seulement une API d'affiliation limitée (promotion de gigs, pas de données de revenus). Solutions tierces = scraping non officiel (fragile, anti-bot, CAPTCHA). https://www.netrows.com/blog/best-fiverr-freelancer-data-apis-2026 |
| **Upwork** | API GraphQL existe (developer.upwork.com) mais orientée gestion de contrats/jobs pour clients/agences, accès nécessite client ID + secret + permissions accordées par le "resource owner" — pas conçue comme un flux grand public "connecte ton compte, on lit tes gains" façon Plaid. https://www.upwork.com/developer |
| **Uber Eats** (livreur) | Les API publiques documentées (merchants.ubereats.com/.../integration-partners, Developer Portal) sont pour les **restaurants/marchands** (menus, commandes), pas pour les revenus personnels des livreurs. Pas d'API "earnings" accessible à un tiers pour un livreur individuel. |
| **Deliveroo** | Developer Portal existe (api-docs.deliveroo.com) mais couvre Partner Platform (restaurants), Retail Platform (commerçants), Signature (delivery expérience) — accès **sur invitation uniquement**, rien côté revenus livreur. |

**Conclusion** : aucune des plateformes visées (freelance ou gig-livraison) n'expose d'API self-service permettant à un outil tiers de lire automatiquement les revenus d'un utilisateur. Les acteurs US qui le font (Solo, Gridwise, Hurdlr) s'appuient soit sur une infrastructure B2B payante type **Argyle** (credential-based, coûteuse, hors de portée d'un budget ≤100€/mois), soit sur du **screen scraping** (identifiants utilisateur saisis dans l'app tierce) — pratique risquée légalement/en ToS, explicitement déconseillée par les banques et régulateurs, et que l'écosystème fintech est en train d'abandonner au profit de l'open banking réglementé (CFPB, PSD2/DSP2). https://theprivacyreport.net/the-risks-of-fintech-screen-scraping/ , https://www.americanbanker.com/news/wells-fargo-pnc-tell-trustly-to-stop-screen-scraping-customer-data

Pour un développeur solo sans budget infra, la seule option réaliste est donc **l'import manuel / CSV** (comme Easy Earnings Tracker) — ce qui réduit fortement la valeur différenciante ("automatique") de l'idée et la ramène à un simple tableur amélioré.

---

## 3. Preuves de demande réelle

- Recherches Reddit ciblées (r/freelance, r/doordash_drivers, r/UberEATS, r/gigeconomy) via WebSearch n'ont **pas remonté de fils Reddit identifiables avec URL** exprimant explicitement "je veux un outil pour agréger mes revenus multi-plateformes" — limite probable de l'outil de recherche plutôt que preuve d'absence, mais aucune preuve directe et citable trouvée.
- Preuve indirecte forte côté US : l'existence et la survie dans la durée de 6-8 apps concurrentes (Solo, Gridwise, Hurdlr, Moves, Para, SheetLink, Mystro) sur le segment gig-driver démontre qu'un marché payant existe bel et bien pour ce besoin — mais il est déjà servi.
- Stat "54% des travailleurs gig opèrent sur plusieurs plateformes, moyenne 3-5 plateformes" — trouvée sur des sites de type SEO/content-farm (demandsage.com, shifttrackerapp.com) sans source primaire citée. **Fiabilité faible, à traiter avec scepticisme.**
- Stat fiable et sourcée (France, DARES) : enquête **Tracov 2** (début 2023) — **600 000 indépendants** déclarent accéder à leur clientèle via au moins une appli/plateforme numérique ; environ la moitié (~300 000) en tirent la majorité de leur activité ("travailleurs intensifs de plateforme"). https://dares.travail-emploi.gouv.fr (PDF non accessible directement, chiffre repris via recherche croisée)
- INSEE (2021-2023) : 12% des indépendants dépendent économiquement d'un seul partenaire ; seulement 3% de tous les indépendants sont "dominés" par une plateforme numérique — **signal que la dépendance à une plateforme unique est l'exception, pas la norme**, ce qui va dans le sens d'un usage multi-plateforme répandu, mais reste un chiffre indirect. https://www.insee.fr/fr/statistiques/8376593
- Multi-homing qualitatif confirmé pour les livreurs (ex. un même coursier actif simultanément sur Deliveroo et Uber Eats) mais sans pourcentage précis trouvé.

**Conclusion demande** : la demande existe et est documentée côté US (marché mature de payeurs), plausible mais pas quantifiée précisément côté France.

---

## 4. Taille de marché

- **France** : ~600 000 indépendants "travailleurs de plateforme" (DARES Tracov 2, 2023), dont ~300 000 "intensifs". Ce chiffre inclut VTC, livraison, et quelques métiers de service — probablement une minorité relève du freelance créatif/tech (Malt/Upwork/Fiverr).
- **International** : marché gig economy large mais chiffres génériques ("70M Americans freelancing") peu fiables/gonflés, à usage indicatif seulement.
- Le sous-segment précis visé (un freelance sur Malt+ComeUp+Fiverr+Upwork EN MÊME TEMPS, ou un livreur sur 3 apps en même temps) est un sous-ensemble encore plus restreint de ces 600k — pas de chiffre spécifique trouvé, probable ordre de grandeur dizaines de milliers en France.

---

## 5. Risque de retomber dans le piège identifié — verdict factuel

Deux constats convergent vers un **risque élevé de retomber dans le même piège, sous une forme différente** :

1. **Le sous-marché le plus proche de l'idée (agrégateur de revenus gig multi-plateformes) existe déjà et est saturé côté US**, avec un acteur d'infrastructure financé (Argyle, 20M$) et 6-8 apps consommateurs établies (Solo, Gridwise, Hurdlr...). C'est exactement le pattern Indy/Pennylane/Qonto : un besoin réel, déjà comblé par des équipes mieux financées et plus rapides.
2. **Le sous-marché "créateurs multi-plateformes" a un concurrent quasi-identique déjà en ligne** (Easy Earnings Tracker), en solo-bootstrap, à prix cassé — ce qui prouve que la barrière à l'entrée technique est FAIBLE (donc réplicable par n'importe qui, y compris de futurs entrants), pas que le marché est vide.
3. **Le sous-marché "freelance créatif France" (Malt/Fiverr/Upwork) est le moins concurrencé**, mais c'est aussi celui où la douleur est la plus faible : l'agrégation bancaire déjà présente chez Indy/Shine/Qonto capture déjà la donnée utile (le CA total encaissé) sans nécessiter d'intégration par plateforme.
4. **Signal réglementaire défavorable et déterminant** : à partir de **janvier 2027**, les plateformes numériques françaises devront déclarer mensuellement à l'URSSAF les revenus perçus par les micro-entrepreneurs pour leur compte, consultables directement sur l'espace autoentrepreneur.urssaf.fr — soit **exactement le problème de consolidation que l'idée prétend résoudre, automatisé gratuitement par l'État** pour tout revenu perçu via une plateforme. Cela réduit structurellement, à horizon 6 mois, la valeur d'un outil payant de consolidation pour l'usage déclaratif francais — le cas d'usage le plus solide (fiscal/URSSAF) est en train de disparaître de lui-même. https://www.shine.fr/blog/micro-entrepreneurs-precompte-des-cotisations-plateformes/

**Verdict** : ce n'est pas un copier-coller exact du piège "compta AE générique" (les acteurs concurrents sont différents : Solo/Gridwise/Hurdlr/Argyle plutôt qu'Indy/Pennylane/Qonto), mais **c'est le même type de piège structurel** : un besoin réel déjà comblé par des acteurs mieux financés sur le segment le plus gros et le plus mûr (gig US), un concurrent quasi-identique et bon marché sur le deuxième segment (créateurs), et sur le seul segment vraiment ouvert (freelance créatif France), la douleur réelle est faible et sur le point d'être partiellement résolue par la réglementation elle-même.

---

## 6. Faisabilité d'acquisition organique

- Product Hunt / Indie Hackers : faisable en théorie (créneau "gig economy tools" actif), mais aucune preuve trouvée d'un lancement récent réussi sur ce créneau précis — les recherches Product Hunt n'ont pas remonté de lancement spécifique "income aggregator freelance".
- Communautés Reddit gig (r/doordash_drivers, r/UberEATS) : audience US majoritairement, où le marché est déjà saturé de concurrents établis — acquisition difficile face à des apps avec des années d'avance et du budget marketing.
- Communautés françaises SAP/freelance (Malt community, groupes Facebook livreurs) : audience plus accessible mais taille de niche plus incertaine et douleur moins aiguë (cf. section 5).

---

## SYNTHÈSE CONCISE (verdict)

**Verdict : NO-GO (avec nuance).** Ce n'est pas le même piège nominal que "compta AE générique" (Indy/Pennylane/Qonto/Shine), mais c'est structurellement le même type de piège : un vrai besoin déjà comblé par des acteurs plus rapides/financés sur le segment le plus gros.

**Faisabilité technique : faible pour la version "automatique".** Aucune des plateformes ciblées (Malt, Fiverr, Upwork, Uber Eats, Deliveroo) n'expose d'API self-service pour les revenus personnels. La seule option viable pour un solo dev à budget ≤100€/mois est l'**import manuel/CSV**, ce qui réduit le produit à un tableur amélioré — faible différenciation, faible barrière à l'entrée (donc faible défendabilité).

**Concurrents : nombreux et parfois financés.** Segment gig-driver US (Solo, Gridwise, Hurdlr, Moves, Para, SheetLink) : marché mature, 6-8 acteurs, infrastructure B2B financée (Argyle, 20M$ levés). Segment créateurs : concurrent quasi-identique déjà en ligne (Easy Earnings Tracker, 2,49$/mois, solo-founder). Segment freelance créatif France : le moins concurrencé, mais aussi le moins douloureux — l'agrégation bancaire déjà proposée par Indy/Shine capture déjà l'essentiel du signal utile.

**Preuves de demande : réelles mais indirectes côté France.** DARES : 600 000 indépendants "travailleurs de plateforme" en France (dont ~300k intensifs), multi-homing qualitativement confirmé pour les livreurs mais non quantifié précisément. Pas de fil Reddit citable trouvé exprimant explicitement cette douleur. Stats "54% multi-plateforme" trouvées non fiables (sources SEO sans citation primaire).

**Taille de marché : niche réelle mais modeste et mal définie**, sous-ensemble des 600k travailleurs de plateforme français.

**Facteur aggravant décisif** : à partir de janvier 2027, l'URSSAF imposera aux plateformes une déclaration mensuelle automatique des revenus des micro-entrepreneurs — cela résout gratuitement, par voie réglementaire, le cas d'usage fiscal/déclaratif qui est la justification la plus solide de l'idée en France.

**Score global : 3/10.** À écarter en l'état ; explorer plutôt un angle très différent (ex. cas d'usage non-fiscal, non-français, ou fusion avec un produit à plus forte défendabilité) si Thomas veut creuser l'univers gig-economy.
