# Round 5 — Application de suivi d'entretien automobile (carnet numérique)

Recherche menée le 2026-07-17. Objectif : évaluer la viabilité d'une app mobile de carnet d'entretien auto (vidanges, CT, pneus, révisions, factures, rappels km/date, multi-véhicules), en abonnement, à la fois en B2C direct et en B2B2C (vendue aux garages).

---

## 1. Concurrents directs — panorama complet

### International / US-UK

**Simply Auto (Mobifolio)** — https://simplyauto.app/ | https://apps.apple.com/us/app/simply-auto-mileage-tracker/id893278325 | https://play.google.com/store/apps/details?id=mrigapps.andriod.fuelcons
- 870 000 téléchargements cumulés, ~3,7k/mois actuellement (croissance ralentie). 81 000 utilisateurs actifs mensuels (progress report développeur, croissance ~27%/an, **entièrement organique, quasi zéro pub**).
- Note : 4,43/5 sur 23k avis Play Store ; 4,4/5 sur 2k avis App Store (Android nettement plus fort qu'iOS).
- Pricing : freemium avec deux tiers — **GOLD (achat unique, mentionné à 29,99$ à vie)** vs **PLATINUM (abonnement annuel)**. Fait crucial révélé par le blog du développeur lui-même (https://www.simplyauto.app/blog/progress-report-and-road-ahead.html) : **l'achat unique (Gold) reste la source de revenus principale**, l'abonnement (Platinum) ne progresse que "secondairement" malgré +138% sur un an — signe que l'abonnement peine à devenir dominant même après des années d'optimisation.
- Plaintes : lisibilité (petit texte), bugs de synchronisation, app pas toujours intuitive.

**Drivvo** — https://www.drivvo.com/en/pricing/ | https://play.google.com/store/apps/details?id=br.com.ctncardoso.ctncar
- 5+ millions de téléchargements Play Store, 113 000+ avis, note 4,5/5.
- Modèle : gratuit avec pub + abonnement Pro (cloud backup, multi-device sync, suppression pub, export CSV/Excel).
- **Signal très fort et négatif** : le développeur a annoncé une hausse de prix de l'abonnement de **6$ à 25$ (x4)**, provoquant une vague de plaintes ("ads intrusives même après paiement", "annonces trompeuses de fin d'abonnement", "verrouillage de fonctionnalités déjà payées"). Sources : Capterra (https://www.capterra.com/p/219368/Drivvo/), justuseapp reviews (https://justuseapp.com/en/app/1206041425/drivvo-vehicle-management/reviews).
- Enseignement : le marché tolère mal les hausses de prix sur un produit perçu comme "juste un carnet", même avec 5M+ d'installs et une marque installée — la sensibilité au prix est structurelle, pas juste un problème de UX.

**AUTOsist** — https://autosist.com/pricing/
- Positionné B2B/fleet dès le départ : gratuit pour un usage perso limité, payant pour pros/flottes à **5$/véhicule/mois (facturé annuellement) ou 7$/mois**, minimum 59$/mois pour 5 véhicules. Volume discount au-delà de 100 véhicules.
- Satisfaction 94% (153 avis), 4,2-4,7/5 selon plateformes. Modèle B2B fleet clairement plus rémunérateur par utilisateur que le grand public — confirme que la valeur perçue est plus forte côté pro/flotte que côté particulier isolé.

**CARFAX Car Care** (US) — https://www.carfax.com/Service/ | https://apps.apple.com/us/app/carfax-car-care/id552472249
- **100% gratuit, sans pub perçue par les utilisateurs.** 4,8/5 App Store, 4,7/5 Play Store (41k avis).
- Monétisation indirecte : CARFAX se rémunère via son réseau de garages/concessionnaires partenaires (CARFAX Service Shops, https://www.carfaxserviceshops.com/) — les ateliers rejoignent le programme **gratuitement** et gagnent en visibilité (65 000+ ateliers déjà listés, 450M+ rapports CARFAX consultés/an), et CARFAX capte/monétise la donnée d'historique véhicule en amont (rapports vendus aux acheteurs/dealers). L'app "carnet gratuit" est un produit d'appel pour alimenter la base de données CARFAX, pas un centre de profit direct.
- Limite : plafonné à 8 véhicules, pas de suivi fin de tous les fluides.

**Fuelly** — https://apps.apple.com/us/app/fuelly-mpg-service-tracker/id295905460
- Historiquement achat unique, transitionné vers abonnement annuel — plaintes d'utilisateurs "propriétaires à vie" contraints de re-payer en abonnement, pub insistante pour upsell premium au démarrage.

**Fuelio** (Sygic) — https://www.fuel.io/
- Modèle "presque tout gratuit" : les fonctions Pro (sync cloud, rappels d'entretien, scan de reçus par appareil photo) sont désormais offertes gratuitement ; seul un tier Premium optionnel plus avancé reste payant. Tendance à la gratuité croissante dans la catégorie.

**Road Trip (MPG)** (iOS uniquement) — https://apps.apple.com/us/app/road-trip-mpg/id298398207
- Achat unique 6,99$, pas d'abonnement, mais pas de vrai carnet d'entretien/rappels — pur tracker de consommation.

**FIXD** (OBD2 hardware + app) — https://www.fixdapp.com (device 59,99$, abonnement 8,99$/mois ou 69,99$/an)
- Modèle matériel + abonnement, différent (diagnostic moteur temps réel, pas juste carnet). Nombreuses plaintes de facturation automatique agressive post-essai gratuit (jusqu'à 99,99$ débités) — image de marque écornée par pratiques de conversion jugées trompeuses.

### France

**Odopass** — https://www.odopass.fr/ (société bretonne, Cesson-Sévigné, créée 2019, capital initial 240k€)
- **Le concurrent français dominant et le plus dangereux pour ce projet** : 1 million de téléchargements, 300 000 utilisateurs actifs. Note 4,7/5 sur 2000+ avis.
- **100% gratuit** pour l'usage courant (saisie illimitée, scan de factures par IA, rappels auto, suivi km, suivi dépenses, partage sécurisé à la revente) — "sans abonnement mensuel ni fonctionnalité bloquée derrière un paywall".
- Modèle économique : partenariats B2B avec professionnels (garages, centres de contrôle technique Dekra/Norisko/AutoControl avec -10% pour les utilisateurs actifs, assureurs). A signé des partenariats majeurs avec **Norauto et Midas**. Développe maintenant une offre B2B pour que les pros de l'occasion valorisent leurs véhicules sur la plateforme (early 2026). Se positionne aussi comme insurtech (assurance anti-vice caché / anti-fraude au compteur).
- Sources : https://journalauto.com/services/odopass-vise-350-000-utilisateurs-en-2022/, https://www.lejournaldesentreprises.com/article/odopass-lance-un-service-de-recuperation-automatique-des-historiques-dentretien-des-vehicules-et-2132459

**AUTODOC CLUB** — https://club.auto-doc.fr/
- Gratuit, sans pub, sans limitation. Adossé au vendeur de pièces auto en ligne AUTODOC (monétisation par cross-sell pièces détachées, contenu/tutoriels). Plainte notable : pas de transmission facile de l'historique à l'acheteur en cas de revente (angle mort exploitable).

**Autolivret.fr** — web-app gratuite, suivi entretien/CT/réparations.

**"Carnet Entretien Voiture"** (app FR indépendante) — carnet-entretien-voiture.fr
- Gratuit, scan IA de factures/carte grise, export CSV, stockage sur le Google Drive personnel de l'utilisateur (pas de cloud propriétaire) — argument de souveraineté des données.

**WheelTrack** — https://wheeltrack.fr/, app récente (2025-2026), positionnée gestion auto + location (Turo/Getaround) en plus du carnet perso, téléchargement gratuit, détails d'abonnement flous/en évolution.

**Constat clé marché français** : les 4-5 apps françaises les plus visibles sont **toutes gratuites**, avec un acteur dominant (Odopass) déjà installé, financé, et en train de verrouiller des partenariats avec les plus gros réseaux de centres auto du pays (Norauto, Midas). Le narratif "personne n'a fait un carnet d'entretien bien fait" ne tient pas — le marché français a déjà une réponse gratuite, bien notée, à un million de téléchargements.

---

## 2. Modèle de monétisation réel — synthèse transversale

- **Aucun grand acteur ne vit uniquement d'un abonnement carnet d'entretien pur.** Les leaders (CARFAX Car Care, Odopass, AUTODOC Club, Fuelio en grande partie) sont **gratuits**, financés par des revenus adjacents : données véhicule revendues (CARFAX), partenariats garages/assureurs (Odopass), vente de pièces détachées (AUTODOC), écosystème plus large (Sygic/Fuelio).
- Les acteurs qui vendent un abonnement pur sur le carnet (Drivvo, Fuelly, Simply Auto Platinum) le font en modèle freemium avec pub sur le tier gratuit — et même eux tirent une part significative, voire majoritaire (cas Simply Auto), de leurs revenus de l'**achat unique**, pas de l'abonnement récurrent.
- Benchmarks génériques de conversion freemium (RevenueCat State of Subscription Apps 2025/2026, https://www.revenuecat.com/state-of-subscription-apps-2025 ; https://dev.to/paywallpro/global-subscription-app-conversion-benchmarks-3c75) : conversion freemium moyenne **~2-3,7%** (médiane globale citée à 8% mais très bimodale — 25% des produits sous 2,5%). Un paywall dur convertit mieux (10-12%) mais suppose une proposition de valeur qu'on ose faire payer dès le départ — ce qui est risqué pour "un simple carnet" quand 4-5 concurrents gratuits et bien notés existent déjà.
- **Réaction du marché aux hausses de prix** (cas Drivvo x4, cas Fuelly transition achat unique → abonnement) : vagues de plaintes et sentiment de trahison — signal fort que les utilisateurs perçoivent structurellement ce type d'app comme device à faible valeur perçue, proche d'une "app de notes", pas comme un SaaS à valeur récurrente évidente.
- **Conclusion : un simple carnet numérique se vend mal en abonnement récurrent pur.** Le marché s'attend majoritairement à la gratuité (financée par ailleurs) ou, au mieux, à un achat unique modeste. C'est structurellement proche du cas "app de notes" évoqué dans la question — confirmé par les données.

---

## 3. Angle B2B2C garages — marché déjà mature et encombré

Recherche sur les solutions de fidélisation/CRM vendues aux garages avec rappels d'entretien automatiques :

**France — solutions déjà en place, marché mature :**
- **WinMotor Cloud** (Solware) — DMS complet garage (facturation, devis, planning, rappels SMS/email auto d'entretien, historique véhicule). Tarif non public, estimé **50-150€/mois tout compris** selon taille de l'atelier. https://www.winmotorcloud.com/
- **Garage Connect** — solution cloud mobile-first pour petits garages (1-5 personnes), SMS auto inclus dans l'abonnement, envoi automatique à la clôture de fiche (J-11 mois avant échéance). **~20-39€/mois**. https://mongarage-connect.com/
- **AutoProGestion** — à partir de **29€/mois**. https://www.autoprogestion.fr/tarifs
- **REPARMAXPRO**, **Axium**, **NextLead Automotive**, **Infocob**, **iDGarages.pro** — tous proposent des variantes du même produit : fiche véhicule + historique + relance SMS/email automatique basée sur plan constructeur ou kilométrage.
- **SMS Proxima** — solution SMS pure à l'usage (pas d'abonnement), pour ceux qui ne veulent pas d'un DMS complet.

**International :**
- **CARFAX Service Shops** (US) — **gratuit** pour les ateliers (listing + rappels co-brandés CARFAX), CARFAX se rémunère ailleurs (vente de rapports). 65 000+ ateliers déjà inscrits.
- **Perkstar** (UK) — app de fidélité générique adaptée aux garages, rappels MOT via wallet Apple/Google. Pricing **£15-60/mois** selon palier.
- **Loyaltty** (US) — équivalent, programme de fidélité pour ateliers auto.

**Verdict sur ce marché** : ce n'est **pas un océan bleu**. C'est un marché déjà servi par de nombreux DMS (Dealer/Digital Management System) établis en France, dont les rappels d'entretien automatiques ne sont qu'**une fonctionnalité parmi d'autres** (facturation, devis, planning, stock) — pas un produit autonome. Un garagiste qui a déjà WinMotor, Garage Connect ou équivalent n'a **aucune raison** d'ajouter une app tierce juste pour les rappels : la fonctionnalité est déjà incluse dans son outil de gestion quotidien. Entrer sur ce marché avec juste "l'app de rappel" reviendrait à concurrencer des DMS complets avec un produit à fonctionnalité unique — proposition de valeur trop mince face à des solutions déjà installées, intégrées à la facturation, et à des prix (20-150€/mois) qui exigent une force de vente terrain (démonstration, onboarding) que 5-10h/semaine en solo ne permettent pas de construire. Le modèle CARFAX (gratuit pour les garages, monétisé ailleurs) montre aussi que même les gros acteurs n'arrivent pas à faire payer les garages pour ce service isolément — il faut l'embarquer dans quelque chose de plus large.

---

## 4. Preuves de demande réelle — frustration carnet papier / historique perdu

- Recherches Reddit directes infructueuses (r/MechanicAdvice, r/cars non indexés par le moteur de recherche disponible dans cet environnement, et fetch direct de reddit.com bloqué). **Limite méthodologique à noter** : je n'ai pas pu extraire de citations Reddit verbatim malgré plusieurs formulations de requête.
- En revanche, la douleur "historique d'entretien manquant nuit à la revente" est **documentée et quantifiée par des sources françaises spécialisées auto (pas des vendeurs d'app neutres, donc à pondérer, mais convergentes)** :
  - Un véhicule avec historique d'entretien complet et documenté se revend en moyenne **10-20% plus cher** (jusqu'à 15% pour un dossier bien tenu et cohérent).
  - **60% des acheteurs potentiels en France** déclarent être prêts à payer plus pour un véhicule avec historique complet (source agrégée depuis capcar.fr, odopass.fr, carverif.fr, wheeltrack.fr — voir liens ci-dessous).
  - Un véhicule avec carnet complet se vendrait en moyenne **30% plus vite**.
  - Sans carnet : décote pouvant aller jusqu'à 15% ou plus, réticence des acheteurs.
  - Sources : https://www.capcar.fr/blog/linteret-du-carnet-dentretien-pour-vendre-sa-voiture-doccasion, https://www.odopass.fr/blog/historique-entretien-voiture-guide-exhaustif-acheteur-vendeur, https://carverif.fr/blogs/conseils-achat-vente/historique-entretien-voiture-verification, https://wheeltrack.fr/blog/preparer-revente-voiture-maximiser-valeur, https://www.fixter.fr/blog/carnet-dentretien-de-voiture
- **Interprétation** : la douleur existe et est réelle (perte de valeur à la revente, carnet papier perdu/incomplet), mais c'est justement **cette douleur précise qu'Odopass a déjà identifiée et adressée gratuitement**, avec la fonctionnalité "partage sécurisé de l'historique à un acheteur potentiel" en cœur de produit, et 1M de téléchargements pour la faire connaître. La demande est prouvée, mais déjà largement captée.
- Les critiques express des concurrents (`carnet-entretien-voiture.fr`) elles-mêmes positionnent leur alternative contre "les apps généralistes gratuites en apparence qui monétisent les données" et contre "les solutions propriétaires constructeur limitées" — confirmant que le champ concurrentiel gratuit est perçu comme dense, pas vide, par les acteurs eux-mêmes.

---

## 5. Taille de marché

**France :**
- **39,7 millions de voitures particulières en circulation** au 1er janvier 2025 (source SDES, ministère Transition écologique — https://www.statistiques.developpement-durable.gouv.fr/397-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2025). Âge moyen du parc : 11,5 ans (en hausse) — cohérent avec un besoin d'entretien suivi sur des véhicules vieillissants.
- **Garages/centres de réparation en France** : chiffres CNPA/FNA divergents selon le périmètre — environ **80 000 établissements de réparation automobile** au total (marché de 26,8 milliards €, CNPA 2024), dont les indépendants représentent ~40% des ateliers, soit environ **32 000 établissements indépendants** (FNA 2024). Source : https://fna.fr/, recherche agrégée.

**International (angle app mobile, marché plus mûr) :**
- **US** : ~299 000-303 000 ateliers de réparation indépendants (2024-2025), 71% des ateliers auto sont indépendants. Marché de la réparation mécanique générale estimé à **59,8 milliards $ (2025)**, marché plus large service auto ~199-211 milliards $ (2025-2026). Sources : https://get.partstech.com/hubfs/PDFs/Q125_State%20Of%20Industry%20Report/, https://www.mordorintelligence.com/industry-reports/united-states-automotive-service-market

**Lecture** : le marché adressable (véhicules) est immense (40M en France, centaines de millions à l'international), mais c'est précisément parce que ce marché est immense et évident que des acteurs bien financés (CARFAX aux US, Odopass en France) l'ont déjà occupé avec des offres gratuitesà grande échelle. Taille de marché élevée ≠ espace libre pour un abonnement payant en solo.

---

## 6. Faiblesses exploitables des concurrents existants

- **UX datée** chez les anciens (Drivvo, Fuelly, Simply Auto) — interfaces dites "pas toujours intuitives", petit texte, navigation datée. Une app moderne et épurée peut différencier sur ce point, mais ce n'est pas un avantage défendable longtemps (facilement copié).
- **OCR/scan de factures par IA** : déjà présent chez Odopass et carnet-entretien-voiture.fr — **pas un angle mort**, déjà standard chez les leaders gratuits français. Ne pas présumer que c'est une killer feature disponible.
- **Transmission d'historique à la revente** : AUTODOC Club ne le fait pas bien (plainte identifiée) mais Odopass le fait déjà très bien (fonctionnalité phare). Angle partiellement exploitable seulement face aux acteurs secondaires, pas face au leader.
- **Intégration garage / prise de RDV directe** : angle peu exploité par les apps carnet pures (elles sont côté conducteur, pas connectées aux systèmes des garages), mais c'est structurellement difficile à construire en solo (nécessite des intégrations B2B avec des DMS déjà en place chez les garages, cf. section 3) — fort potentiel mais hors de portée d'un développeur seul à 5-10h/semaine sans partenariats.
- **Prix des concurrents payants en hausse et mal perçus** (Drivvo x4, Fuelly transition forcée) : un positionnement "prix bas et stable, jamais d'augmentation surprise" pourrait rassurer, mais ne compense pas le fait que les meilleurs acteurs sont gratuits, pas juste "moins chers".
- **Consolidation des flottes/pros mieux monétisée que le grand public** (AUTOsist) — suggère que si un modèle payant doit exister, il a plus de chances de fonctionner sur un segment pro/multi-véhicules (loueurs, flottes pro, artisans avec plusieurs véhicules) que sur le particulier avec 1-2 voitures.

---

## 7. Verdict sur la viabilité d'un ABONNEMENT

**B2C direct (app vendue aux automobilistes)** : abonnement pur difficilement viable. Le marché — France et international — a déjà normalisé la **gratuité** pour ce type de produit (Odopass 1M installs, CARFAX Car Care 41k avis à 4,8/5, AUTODOC Club), financée par des revenus adjacents que Thomas n'a pas les moyens de répliquer seul (partenariats garages nationaux, revente de données véhicule, réseau pièces détachées). Même les acteurs qui vendent un abonnement (Drivvo, Fuelly) tirent une part significative de leurs revenus de l'achat unique, et les hausses de prix génèrent des révoltes d'utilisateurs. Les benchmarks de conversion freemium (2-4% en moyenne pour ce type d'usage) rendraient l'acquisition d'utilisateurs payants very coûteuse à l'échelle nécessaire pour un revenu significatif à budget pub 10-30€/mois.

**B2B2C (vendu aux garages)** : marché déjà mature et encombré en France par des DMS complets (WinMotor Cloud, Garage Connect, AutoProGestion, REPARMAXPRO, Axium, NextLead, Infocob) à 20-150€/mois, où les rappels d'entretien ne sont qu'une fonctionnalité parmi d'autres (facturation, devis, planning). Vendre "juste les rappels" à un garagiste qui a déjà un DMS n'apporte pas de valeur différenciante suffisante, et la vente B2B terrain (démo, onboarding, support) est incompatible avec 5-10h/semaine en solo sans réseau commercial existant. Même CARFAX offre ce service gratuitement aux garages.

**Recommandation finale** : ni le B2C direct en abonnement pur, ni le B2B2C garages, ne semblent viables tels quels pour ce projet dans ces contraintes (solo, 5-10h/semaine, budget pub 10-30€/mois). Le marché est réel et la douleur existe, mais elle est déjà bien adressée par des acteurs gratuits et mieux financés des deux côtés (B2C et B2B2C). Cette idée est probablement à écarter au profit d'autres pistes du brainstorm Round 2, sauf si un angle radicalement différent (non exploré ici) permet d'éviter la comparaison frontale avec Odopass/CARFAX — par exemple un micro-segment non couvert, mais aucun n'a été identifié avec certitude dans cette recherche.
