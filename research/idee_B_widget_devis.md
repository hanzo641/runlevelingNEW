# Idée B — Widget/calculateur de devis en ligne embarquable pour entreprises de nettoyage

*Recherche réalisée le 2026-07-16. Toutes les sources sont citées avec URL.*

---

## 1. Concurrents directs

### France — logiciels métier avec simulateur de devis intégré (le vrai marché existant)

Le constat le plus important de cette recherche : **en France, personne ne vend un widget de devis autonome et léger** dédié au nettoyage. Ce qui existe, ce sont des **logiciels métier complets (CRM/planning/facturation)** qui incluent, en option ou en bonus, un simulateur de devis embarquable — mais on doit s'abonner à tout le logiciel pour l'avoir.

- **Econeto** — logiciel de gestion commerciale (devis, facturation, planning, pointage géolocalisé, qualité) pour entreprises de nettoyage. Propose un "simulateur de devis en temps réel" que les clients Econeto intègrent sur leur site (ex. vu en usage réel chez [Mention Propre](https://www.mentionpropre.fr/simulateur-devis-nettoyage) et [DeCA Propreté](https://www.deca-proprete.fr/simulateur-devis-nettoyage-en-ligne/)). Le widget envoie un email instantané avec lien devis, PDF, acompte en ligne. Prix non public (sur devis), caution de 15€ HT + 1er mois à la souscription, engagement 1 an. Accès filtré par SIRET (pas de self-service). Note 8,3/10 sur un comparatif logiciel.
  Sources : [blog.econeto.com/article44](https://blog.econeto.com/article44-simulateur+de+devis+de+nettoyage+temps+reel), [econeto.com](https://www.econeto.com/), [comparatif-logiciels.fr avis Econeto](https://www.comparatif-logiciels.fr/logiciel/avis-econeto/)
- **Tactidevis** — logiciel de chiffrage/devis pour artisans du nettoyage/ménage. 36€ HT/mois (sans engagement long, renouvelable au mois) ou 396€ HT/an. Bibliothèques de prix pré-remplies, devis/factures illimités. Pas de widget embarquable identifié — outil de gestion interne, pas orienté site web client.
  Source : [tactidevis.fr/tarifs](https://www.tactidevis.fr/tarifs)
- **PROPRET** — logiciel + appli pour sociétés de nettoyage, dès 29,99€ HT/mois, essai gratuit 14j.
  Source : [propret.fr/tarifs](https://propret.fr/tarifs/)
- **2BePragma / Propret (marque sœur)** — dès 48€/mois.
  Source : [2bepragma.com](https://www.2bepragma.com/)
- **Qerto**, **OptiméoO**, **Sevensoft**, **Organilog**, **Progiclean**, **Maglia**, **Comète Propreté** — autres logiciels métier propreté français, tarifs non tous publics, mais tous positionnés "gestion complète" (planning + devis + facturation), pas widget seul.
  Sources : [qerto.fr](https://www.qerto.fr), [optimeoo.fr/nos-tarifs](https://www.optimeoo.fr/nos-tarifs), [organilog-proprete.com](https://organilog-proprete.com/meilleurs-logiciels-nettoyage/)
- **Proprely** — nouvel entrant en beta privée (30 places fondateurs gratuites), même positionnement logiciel complet (signature électronique, relances auto, devis→facture). Cite lui-même le marché comme "un SaaS à 20-40€/mois".
  Source : [proprely.fr/blog/logiciel-devis-nettoyage-gratuit](https://proprely.fr/blog/logiciel-devis-nettoyage-gratuit/)

### France — outils génériques détournés

- **Plugins WordPress** génériques de "demande de devis" (Formidable Forms, WP Cost Estimation & Payment Forms Builder, Gravity Forms + GravityPDF, YITH WooCommerce Request a Quote, Cost Calculator Builder de StylemixThemes). Un artisan cherchant ce type d'outil sur le forum growthhacking.fr a exploré ces pistes en 2021-2022 et les a trouvées insuffisantes pour de la configuration multi-étapes conditionnelle — a fini par tester DevisFacile (plugin WordPress dédié devis).
  Source : [growthhacking.fr — plugin devis en ligne](https://www.growthhacking.fr/t/plugin-wordpress-ou-app-pour-generation-de-devis-en-ligne/13133)
- **Typeform / Jotform** — templates génériques "Cleaning Service Quotation Form", utilisés en questionnaire de collecte mais sans calcul de prix dynamique natif poussé (nécessite logique conditionnelle manuelle).
  Source : [jotform.com/form-templates/cleaning-service-quotation-form](https://www.jotform.com/form-templates/cleaning-service-quotation-form)

### International — le marché est nettement plus mature (widgets autonomes existent)

- **CalcWidget** — widget de calculateur de devis pour "service pros" en général (pas niche nettoyage), 1 ligne de code à intégrer, capture de leads automatique, plan gratuit (1 calculateur, 50 vues/mois de devis).
  Source (extrait via recherche) : calcwidget.com (page pricing inaccessible en direct lors de cette recherche, DNS non résolu depuis l'environnement)
- **EmbedQuote** — calculateur de prix embarquable pour tout site (Webflow, WordPress, Squarespace, Framer, HTML brut), pas de frais par utilisateur, essai gratuit sans CB, plans échelonnés (indépendants → agences). Prix exacts non publiés dans les résultats de recherche.
  Source : [embedquote.com](https://embedquote.com/), [embedquote.com/blog/getting-started](https://embedquote.com/blog/getting-started)
- **Clean Estimator** — calculateur de coût de nettoyage gratuit pour consommateurs (grand public) ET version "for companies" à embarquer sur son site (1 ligne HTML, compatible Wix/Squarespace/WordPress), plan unique tout inclus. Avis client positif : "Setup took about 20 minutes. The embed is seamless."
  Source : [cleanestimator.com/for-companies](https://www.cleanestimator.com/for-companies)
- **Elfsight Calculator Widget** — générique (pas niche nettoyage), très accessible : gratuit (200 vues/mois, 1 widget), Basic 4$/mois (5000 vues, 3 widgets), Pro 8$/mois (50 000 vues, 9 widgets), Premium 16$/mois (150 000 vues, 21 widgets), plans Enterprise 24-64$/mois.
  Source : [elfsight.com/calculator-form-widget/pricing](https://elfsight.com/calculator-form-widget/pricing/)
- **CALCONIC_**, **ConvertCalculator**, **involve.me**, **Common Ninja** — calculateurs de devis génériques no-code, tous transversaux (pas verticalisés nettoyage), utilisés par des agences pour construire des calculateurs pour leurs clients.
  Sources : [calconic.com/calculator-widgets/price-quote-calculator](https://www.calconic.com/calculator-widgets/price-quote-calculator), [convertcalculator.com/blog/custom-embedded-calculator](https://www.convertcalculator.com/blog/custom-embedded-calculator/)
- **Jobber, Housecall Pro, ServiceTitan** — logiciels field service US/UK/CA tout-en-un, avec widget de réservation/devis en ligne embarqué comme feature parmi des dizaines d'autres (pas un produit autonome).
  - Jobber : Core 49$/mois, Connect 149$/mois, Grow 349$/mois. Génère des devis avec branding, pas un simulateur "prix instantané" pur — plutôt un outil de création de devis pro à envoyer.
  - Housecall Pro : Basic 65$/mois/utilisateur, Essentials 169$/mois, MAX ~450$/mois. Widget de réservation en ligne solide (bien noté), mais avis Trustpilot globaux mitigés (2,9/5 sur reviews récents), critiques sur bugs/support malgré ajout constant de features.
  - ServiceTitan : tarification sur devis, 500-800$/siège/mois pour PME, 5-20k$ d'onboarding — hors de portée des TPE/auto-entrepreneurs visés ici.
  Sources : [getjobber.com/comparison/jobber-vs-housecall-pro](https://www.getjobber.com/comparison/jobber-vs-housecall-pro/), [servicetitanpricing.com](https://www.servicetitanpricing.com/), [rivetops.io/housecall-pro-pricing](https://www.rivetops.io/housecall-pro-pricing), [trustpilot.com/review/housecallpro.com](https://www.trustpilot.com/review/housecallpro.com)

### Constat clé
Il n'existe **aucun acteur identifié qui vend spécifiquement et uniquement un widget de devis nettoyage léger, en marque blanche, pas cher, en libre-service, pour le marché français**. Le rapprochement le plus proche (Econeto) le vend noyé dans un logiciel métier complet avec process de vente lourd (SIRET, devis sur demande, engagement 1 an). C'est une vraie fenêtre de différenciation potentielle — mais cela signifie aussi que personne n'a validé économiquement ce micro-segment isolément : soit l'opportunité est réelle et inexploitée, soit le marché a naturellement convergé vers le bundle logiciel complet parce que le widget seul ne suffit pas à générer assez de valeur perçue pour justifier un abonnement dédié.

---

## 2. Pricing observé (synthèse)

| Catégorie | Acteur | Prix |
|---|---|---|
| Logiciel complet FR (avec devis/simulateur) | Tactidevis | 36€ HT/mois ou 396€ HT/an |
| Logiciel complet FR | PROPRET | dès 29,99€ HT/mois |
| Logiciel complet FR | 2BePragma | dès 48€/mois |
| Logiciel complet FR | Econeto | sur devis (non public) |
| Widget générique international | Elfsight Calculator | gratuit → 4-16$/mois (puis Enterprise 24-64$) |
| Widget générique international | EmbedQuote | plans non chiffrés publiquement, essai gratuit |
| Widget niche nettoyage US (B2C gratuit + volet B2B) | Clean Estimator | plan unique "tout inclus", prix non précisé publiquement |
| Plugin WordPress devis | Cost Calculator Builder Pro | 59$ licence unique (site unique) |
| Logiciel field service complet US | Jobber / Housecall Pro / ServiceTitan | 49-450$/mois selon plan, jusqu'à 800$/siège pour ServiceTitan |

**Fourchette de référence pour un widget seul, marché mature (US) : 0-20$/mois** en usage TPE. Le marché français n'a pas ce produit isolé — la référence de prix pour un TPE de nettoyage y est donc plutôt "30-48€/mois pour un logiciel complet", ce qui laisse de la place pour un widget seul à 9-19€/mois si bien positionné, mais aussi le risque que le prospect compare spontanément à l'offre complète et trouve le widget seul "cher pour ce que c'est".

---

## 3. Preuves de demande réelle

**Ce que j'ai trouvé :**
- Un artisan (secteur BTP, proche du nettoyage en termes de besoin) a activement cherché sur un forum francophone (growthhacking.fr) un outil pour générer des devis configurables en ligne avec PDF automatique, a exploré plusieurs plugins WordPress, les a trouvés insuffisants pour la logique conditionnelle multi-étapes, et a exprimé de la méfiance à l'achat ("un peu la loterie") faute de pouvoir tester avant achat. C'est un signal de demande réel mais isolé (un seul thread trouvé), et il concerne le BTP, pas spécifiquement le nettoyage.
  Source : [growthhacking.fr](https://www.growthhacking.fr/t/plugin-wordpress-ou-app-pour-generation-de-devis-en-ligne/13133)
- Des forums d'auto-entrepreneurs nettoyage (gautier-girard.com) discutent abondamment de la difficulté de **chiffrer un devis** (combien facturer, taux horaire vs forfait) et du **temps non facturable** perdu en prospection/devis/compta/trajets — mais la douleur qui ressort le plus est "comment fixer le bon prix", pas "comment automatiser la saisie du devis en ligne". Aucune mention directe trouvée d'entreprises se plaignant explicitement du **taux de conversion de leur site web** faute de devis instantané.
  Sources : [gautier-girard.com/forum/topic/comment-faire-un-devis-nettoyage](http://www.gautier-girard.com/forum/topic/comment-faire-un-devis-nettoyage) (page indisponible au moment du fetch, 503), [gautier-girard.com/forum/topic/tarif-nettoyage](http://www.gautier-girard.com/forum/topic/tarif-nettoyage)
- **Reddit** : je n'ai trouvé **aucun thread anglophone exploitable** malgré une dizaine de requêtes variées (r/smallbusiness, r/Entrepreneur, r/cleaningbusiness, accès direct à reddit.com bloqué depuis cet environnement). Les recherches web générales sur "reddit + quote calculator + cleaning" ne remontent que des pages marketing d'outils (CalcWidget, involve.me, Jobber), pas de discussions organiques identifiables. **C'est un vrai trou dans la recherche** — je n'ai pas pu confirmer ou infirmer une plainte répandue chez les propriétaires de petites entreprises anglophones.
- **Statistiques génériques du secteur home services (US)** confirment indirectement l'intérêt du concept : "Interactive tools like quote calculators are more engaging than static forms and increase the likelihood of visitors leaving their contact details… higher intent… more qualified leads." Le taux de conversion lead→client moyen du secteur home services est de 7,8%, avec les leads téléphoniques à 46% de conversion — ce qui suggère que **le vrai goulot n'est pas forcément "pas de devis instantané" mais "pas assez de rappel/suivi rapide"**.
  Source : [estatehub.io — 2026 Benchmarks Lead Conversion Home Services](https://www.estatehub.io/articles/2026-benchmarks-lead-conversion-rates-home-services)
- Les avis clients positifs trouvés sur les outils existants (Clean Estimator : "Setup took about 20 minutes. The embed is seamless.") valident l'usage mais proviennent de pages marketing des vendeurs eux-mêmes (biais de sélection), pas de sources indépendantes.

**Verdict intermédiaire sur la demande** : la demande existe manifestement au niveau macro (le marché international a fait émerger plusieurs offres, les logiciels FR intègrent tous un simulateur), mais je n'ai trouvé **aucune preuve organique forte et indépendante** (Reddit, Facebook, avis 1-étoile de concurrents mentionnant l'absence de widget) d'une douleur aiguë et largement exprimée chez les TPE de nettoyage françaises spécifiquement sur ce point. La demande semble plus déduite ("c'est probablement utile") que prouvée par des plaintes explicites répétées.

---

## 4. Taille du marché cible en France

- **Secteur propreté (entreprises, hors SAP particuliers)** : la FEP (Fédération des Entreprises de Propreté) recense **~14 000 à 16 000 entreprises d'au moins 1 salarié** dans le secteur, pour 600 000+ emplois et 21 milliards d'€ de CA. La FEP fédère elle-même plus de 2 700 entreprises adhérentes.
  Sources : [monde-proprete.com/chiffres-cles-proprete](https://www.monde-proprete.com/chiffres-cles-proprete), [fepcso.com/chiffres-cles-nationaux](https://fepcso.com/chiffres-cles-nationaux/)
- **Secteur Services à la Personne (SAP) — inclut ménage/repassage à domicile, la cible la plus pertinente pour un widget "devis nettoyage domicile/textile"** : **82 776 organismes** recensés au 1er janvier 2025 (base NOVA), dont 91% d'entreprises (y compris micro-entrepreneurs), +18% en un an, 22,8 milliards d'€ de CA, 1,3 million de salariés. Le ménage/repassage est l'une des activités SAP les plus courantes mais les chiffres ne sont pas ventilés précisément par sous-activité dans les sources trouvées.
  Sources : [servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles](https://www.servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles), [tool-advisor.fr/blog/chiffres-service-a-la-personne](https://tool-advisor.fr/blog/chiffres-service-a-la-personne/)
- **FEDESAP** : fédère plus de **4 300 structures** SAP (tous secteurs confondus, pas seulement nettoyage).
  Source : [fedesap.org/les-chiffres-cles-du-secteur](https://www.fedesap.org/les-chiffres-cles-du-secteur/)
- **Estimation raisonnable de la cible réaliste** (entreprises de nettoyage + SAP ménage ayant un site web propre, donc capables techniquement d'intégrer un widget, et suffisamment structurées pour payer un SaaS) : probablement **entre 10 000 et 25 000 entreprises** en France selon le périmètre retenu (propreté pro + SAP ménage avec présence web). C'est un marché de niche, pas un marché de masse — cohérent avec une activité secondaire à temps partiel, pas avec un projet visant des millions d'euros de CA.

---

## 5. Difficulté d'acquisition (organique)

- **SEO** : les mots-clés évidents ("devis en ligne nettoyage", "simulateur devis nettoyage", "logiciel devis nettoyage") sont **déjà occupés par les logiciels métier complets** (Tactidevis, Econeto, PROPRET, Proprely, Organilog) qui produisent du contenu de blog dédié depuis des années (ex. Econeto a un blog avec des dizaines d'articles ciblant précisément ces requêtes : "article44-simulateur+de+devis+de+nettoyage+temps+reel", "article26-Calculer+forfait+mensuel+nettoyage+bureaux"). Un nouvel entrant devra se positionner sur une requête plus spécifique/longue traîne ("widget devis nettoyage pas cher", "alternative Econeto simulateur", "calculateur devis nettoyage WordPress") pour espérer ranker rapidement sans budget pub.
  Sources : [blog.econeto.com](https://blog.econeto.com/), déjà cité.
- **Fédérations professionnelles** (FEDESAP, FEP) : accès possible via partenariats/annuaires, mais processus lent (institutionnel), pas gratuit ni instantané — plus adapté à une stratégie moyen terme (webinaires, articles invités, présence sur salons).
- **Réseaux de franchise** (recherche sur "Sparkle", "Shiny", Nova Clean, Hygilas) : je n'ai pas identifié de franchise nommée "Sparkle" avec présence France significative — la recherche n'a pas confirmé cette piste telle que formulée dans la question ; en revanche il existe un vrai tissu de réseaux nationaux (Nova Clean, Hygilas) et d'enseignes locales indépendantes qui pourraient être démarchées individuellement.
  Source : [toute-la-franchise.com — franchises nettoyage-entretien](https://www.toute-la-franchise.com/annuaire-franchises/S2-franchises-nettoyage-entretien)
- **Groupes Facebook "entreprise de nettoyage"** : plusieurs pages/entreprises identifiées (ASR Nettoyage, Clean Tout Paris, France Nettoyage, NOVA CLEAN, Toujours Propre, CFN Nettoyage, W Propreté) mais je n'ai pas confirmé l'existence de **larges groupes d'entraide entre pros du nettoyage** comparables aux groupes auto-entrepreneurs généralistes très actifs sur Facebook — la recherche n'a pas permis de quantifier leur taille/activité, ce qui limite la certitude sur ce canal.
- **Forums entrepreneuriaux généralistes** (gautier-girard.com, pragmaticentrepreneurs.com) : actifs mais faible volume, audience diffuse.

**Verdict acquisition** : canal organique plausible mais **lent et disputé** — le SEO générique est déjà pris par des acteurs installés avec des années d'avance content, et les canaux communautaires (Facebook, fédérations) n'ont pas pu être quantifiés avec certitude dans cette recherche. Une acquisition efficace demanderait probablement du démarchage direct (cold outreach, LinkedIn, annuaires d'entreprises de nettoyage) plutôt que du pur SEO/inbound au démarrage.

---

## 6. Faisabilité technique (stack JS/TS simple, 5-10h/semaine)

**Oui, c'est réaliste techniquement**, et c'est le point le plus solide de cette idée :
- Un widget embarquable = un script JS (ou iframe) autonome, buildable en React/Preact/vanilla JS + TypeScript, hébergeable sur Cloudflare Pages ou Vercel (édge, gratuit à très faible volume).
- Backend minimal nécessaire : Cloudflare Workers ou Firebase Cloud Functions pour (a) calculer le devis côté serveur si besoin de cacher la formule de prix, (b) capter le lead (email/tel) et l'envoyer par email au prestataire (ex. via Resend/Postmark/SendGrid free tier ou simplement Firebase + un service SMTP).
- Firestore pour stocker les configs de prix par client (chaque entreprise cliente a ses propres tarifs/paramètres) et les leads capturés — cohérent avec le stack déjà maîtrisé (pas de VPS nécessaire).
- Le vrai risque technique n'est pas le widget lui-même (trivial pour un dev JS/TS confirmé) mais **le back-office multi-tenant** pour que chaque client puisse configurer ses propres prix/questions sans support manuel — ça, ça demande plus de temps (dashboard admin, gestion des comptes, facturation SaaS via Stripe). Sur 5-10h/semaine, un MVP mono-tenant (widget configuré à la main par toi pour chaque client, façon "service managé" plutôt que self-service) est largement atteignable en quelques semaines ; un vrai SaaS self-service avec dashboard de configuration prendra plusieurs mois.

**Conclusion faisabilité : élevée pour un MVP/service semi-managé, moyenne pour un vrai SaaS self-service scalable.**

---

## 7. Faiblesses des concurrents existants

- **France** : les seules solutions avec simulateur intégré (Econeto, dans une moindre mesure les autres) obligent à souscrire à **tout un logiciel de gestion** (devis+facturation+planning+RH) pour accéder au widget — gros frein pour une TPE qui veut juste un widget sur son site sans changer d'outil de facturation existant (souvent déjà en place : Excel, Henrri, Tiime évoqués dans les sources). Process de vente lourd chez Econeto (vérification SIRET, pas de self-service, devis sur demande, engagement 1 an + caution).
- **International** : les widgets génériques (Elfsight, EmbedQuote, CalcWidget, Cost Calculator Builder) sont **transversaux, pas verticalisés nettoyage** — aucune logique métier pré-construite (types de prestations nettoyage courant/fin de bail/tapis/vitres, calcul par m², fréquence, crédit d'impôt SAP français). L'acheteur doit tout paramétrer lui-même depuis zéro, ce qui reproduit la friction que la recherche montre déjà chez les artisans (cf. thread growthhacking.fr).
- **Aucun outil trouvé, français ou international, n'intègre la spécificité fiscale française du crédit d'impôt SAP (50%) dans le calcul du devis affiché au client** — c'est un argument de différenciation potentiellement fort et immédiatement vendable ("devis avec prix après crédit d'impôt affiché en direct").
- **Housecall Pro** (référence internationale) souffre d'avis Trustpilot mitigés (2,9/5 récents) — support et bugs, malgré une feature de réservation en ligne solide — signe que même les leaders ont des angles morts exploitables (simplicité, fiabilité) par un petit acteur focalisé sur un seul besoin bien fait.

---

## 8. Verdict honnête sur la preuve de demande réelle

La recherche **confirme l'existence du marché** (des concurrents en vivent, à des prix de 30-48€/mois en France pour le bundle complet, 0-20$/mois pour un widget seul aux US) mais **ne fournit pas de preuve organique forte et indépendante d'une douleur aiguë, largement exprimée, spécifique aux entreprises de nettoyage françaises**, sur le sujet précis "je perds des clients faute de devis instantané sur mon site". Les signaux trouvés sont :
- Indirects et déduits (statistiques génériques home services US sur la conversion des calculateurs).
- Faibles en volume (un seul thread forum francophone pertinent, et il concerne le BTP, pas le nettoyage).
- Non confirmés sur Reddit (accès bloqué + aucun thread pertinent trouvé via recherche web).
- Plus centrés, dans les forums d'auto-entrepreneurs nettoyage, sur "comment fixer mon prix" que sur "comment automatiser l'affichage du devis en ligne".

**Cette recherche seule ne suffit pas à confirmer une demande explosive** — elle confirme un marché niche réel, servi de façon imparfaite (bundlé, cher, ou non verticalisé), sans preuve de frustration massive et exprimée. Une validation terrain (appeler/écrire à 20-30 entreprises de nettoyage françaises, ou poster une question directe dans un vrai groupe Facebook pro nettoyage) serait nécessaire avant d'investir du temps de développement significatif.

---

# SYNTHÈSE CONCISE

**Verdict : RÉSERVES (ni GO franc, ni NO-GO).** Le marché existe et personne en France ne vend un widget de devis nettoyage autonome et abordable — c'est un vrai angle mort concurrentiel. Mais la preuve de demande organique (Reddit, Facebook, avis clients frustrés) reste faible et largement déduite plutôt que constatée : aucun signal fort trouvé de type "je perds des clients faute de devis instantané". Recommandation : valider par 15-20 échanges directs avec des entreprises de nettoyage françaises avant de développer, plutôt que de se fier à cette seule recherche.

**Concurrents + pricing** : France — logiciels métier complets avec simulateur bundlé (Econeto sur devis/engagement 1 an, Tactidevis 36€HT/mois, PROPRET dès 29,99€HT/mois, 2BePragma dès 48€/mois) ; aucun widget seul en libre-service identifié en France. International — Elfsight (0-16$/mois), EmbedQuote, CalcWidget, Clean Estimator (widgets génériques ou niche US, 0-20$/mois), field service complets (Jobber 49-349$/mois, Housecall Pro 65-450$/mois, ServiceTitan 500-800$/siège).

**Preuves de demande** : faibles et indirectes. Un thread forum francophone (BTP, pas nettoyage) confirme une recherche active d'outil similaire. Stats génériques US confirment que les calculateurs de devis convertissent mieux que les formulaires statiques. Aucune plainte massive et spécifique trouvée côté nettoyage FR ; Reddit inaccessible/silencieux sur le sujet.

**Taille marché France** : ~14-16 000 entreprises de propreté (FEP) + une fraction pertinente des 82 776 organismes SAP (ménage/repassage) — cible réaliste estimée à 10 000-25 000 entreprises avec site web exploitable. Niche, pas marché de masse.

**Différenciation possible** : widget léger et autonome (pas besoin de changer de logiciel de facturation existant), verticalisé nettoyage (types de prestations pré-construits), avec calcul intégrant le crédit d'impôt SAP français (50%) — argument absent de toute l'offre observée, française et internationale.

**Scores** :
- Time-to-first-euro : **moyen** — MVP technique rapide (semaines), mais vente B2B artisanale = cycle de conversion lent (démarchage direct nécessaire, pas de self-service évident au départ).
- Acquisition organique : **faible à moyen** — SEO déjà occupé par les logiciels installés depuis des années ; canaux communautaires (Facebook, fédérations) non quantifiés avec certitude, probablement lents.
- Faisabilité stack JS/TS (5-10h/semaine) : **élevée** pour un MVP semi-managé (widget + Firebase/Cloudflare, pas de VPS) ; **moyenne** pour un vrai SaaS self-service multi-tenant avec dashboard de configuration, qui prendrait plusieurs mois.
