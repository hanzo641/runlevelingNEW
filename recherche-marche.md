# Recherche marché — Mission business nocturne

## Profil contraintes (rappel)
- 5–10h/semaine (fonctionnaire le matin), budget mois 1 ≤ 100€
- Stack : React Native/Expo/Firebase, JS/TS, web simple, Firestore, API/OAuth. Pas de VPS (Firebase Hosting/Vercel/Cloudflare Pages).
- Micro-entreprise Hydropropreté (nettoyage, SAP) déjà active + hydroproprete.fr (Webador) + compte Apple dev + base clients locale Pau/64 + connaissance LMNP.
- Ne pas dupliquer Hydropropreté (services nettoyage) ni Runleveling (app running).
- Dropshipping exclu. Pas de pub payante (acquisition organique only).
- Critères pondérés : time-to-first-euro courte > acquisition organique > fit stack/statut/heures/budget > marge.

## Brainstorm — 20 idées générées

| # | Idée | Catégorie | Marché cible | Justification rapide |
|---|------|-----------|---------------|----------------------|
| 1 | SaaS "gestion SAP" : attestations fiscales annuelles auto-générées, livre de recettes, suivi avance immédiate/Unipros | SaaS niche B2B | France (micro-entrepreneurs SAP : ménage, jardinage, garde enfants, bricolage) | Douleur vécue de l'intérieur (Hydropropreté). Obligation légale annuelle = usage récurrent garanti. |
| 2 | Guide + templates "Devenir auto-entrepreneur SAP nettoyage" (e-book + Notion/Excel) | Info-produit | France | Faible effort de construction, vente one-shot, mais nécessite plateforme de paiement (compte à créer = bloqué cette nuit) |
| 3 | Service productisé : site vitrine + fiche Google Business Profile pour artisans/nettoyage locaux Pau/64 | Service productisé | Local (64) | Réseau existant, mais vente = démarchage manuel, pas scalable sans heures |
| 4 | Micro-outil : simulateur d'éligibilité crédit d'impôt SAP (widget) | Micro-outil / lead-gen | France (B2C + B2B) | Facile à construire (web simple), mais monétisation floue sans compte pub/affiliation |
| 5 | SaaS générique compta/seuils auto-entrepreneur (alertes seuils CA, TVA) | SaaS | France (tous AE) | Marché large mais ultra concurrentiel (Indy, Shine, Freebe, Tacotax...) |
| 6 | App de tracking sport de niche (trail/vélo) façon Runleveling | App mobile | International | Doublon trop proche de Runleveling → écarté d'office |
| 7 | Marketplace de prestataires SAP certifiés Nouvelle-Aquitaine | Marketplace | Local/régional | Problème d'œuf-poule, trop lourd pour 5-10h/sem |
| 8 | Marketplace nettoyage textile pro particuliers↔indépendants | Marketplace | France | Concurrence directe/conflit avec Hydropropreté → écarté |
| 9 | Newsletter/blog LMNP Pyrénées-Atlantiques + affiliation | Contenu | Local/national | Revenu lent (SEO + audience à construire), time-to-first-euro long |
| 10 | Automatisation relance/no-show (SMS/WhatsApp) pour artisans locaux | Automatisation B2B locale | Local | Bon produit mais vente terrain lourde, stack Twilio = coûts variables |
| 11 | Service de gestion d'avis Google post-intervention pour artisans | Service productisé / micro-SaaS | Local puis France | Proche de #3, à fusionner |
| 12 | Widget devis en ligne pour entreprises de nettoyage (embed sur site client) | Micro-outil payant B2B | France (niche nettoyage/SAP) | Bon fit stack (web widget JS), vente B2B ciblée via réseau SAP |
| 13 | Générateur de CGV/mentions légales conformes micro-entreprise (par secteur) | Micro-outil payant | France (tous AE) | Marché saturé de generators gratuits (LegalPlace, Captain Contrat) |
| 14 | Outil de simulation rentabilité LMNP (amortissement, régime réel vs micro-BIC) | Micro-outil / SaaS | France (investisseurs LMNP) | Connaissance perso forte, marché déjà servi (Beanstock, Ownily) mais niche fiscale precise possible |
| 15 | Formation vidéo "monter sa micro SAP" | Info-produit | France | Effort de production trop élevé pour 5-10h/sem |
| 16 | Outil de suivi CA + relance facture impayée pour micro-entrepreneurs services à domicile | SaaS niche | France | Proche de #1, à fusionner potentiellement |
| 17 | Comparateur d'agréments/statuts SAP vs prestataire libre pour futurs entrepreneurs du secteur | Contenu + lead-gen | France | Trafic informationnel, monétisation lente |
| 18 | Kit "auto-diagnostic SAP" (dois-je me déclarer SAP ou pas ?) + orientation vers compta/avocat (affiliation) | Micro-outil + affiliation | France | Rapide à construire, mais dépend de partenariats (comptables) à froid |
| 19 | Plateforme d'échange de matériel/pros entre micro-entrepreneurs du nettoyage (mutualisation) | Marketplace niche | Local | Trop tôt, base d'utilisateurs insuffisante |
| 20 | SaaS "carnet de bord SAP" tout-en-un : devis conformes + attestations fiscales + suivi Unipros + livre de recettes + rappels seuils — version enrichie de #1 combinant #1/#12/#16 | SaaS niche B2B | France (micro-entrepreneurs SAP, ~200k+ potentiels) | Combine plusieurs douleurs réelles en un seul outil, différenciation vs génériques (Indy/Shine ne gèrent PAS les spécificités SAP : attestations fiscales, Unipros/avance immédiate) |

## Top 5 retenues pour recherche approfondie (sous-agents)

1. **Idée A (fusion 1+16+20)** — SaaS "carnet de bord SAP" : attestations fiscales, livre de recettes, suivi avance immédiate/Unipros, alertes seuils, devis conformes SAP.
2. **Idée B (12)** — Widget/micro-outil de devis en ligne embarquable pour entreprises de nettoyage/SAP.
3. **Idée C (3+11)** — Service productisé site vitrine + fiche Google Business Profile pour artisans/nettoyage locaux (Pau/64 puis national).
4. **Idée D (5)** — SaaS générique seuils/compta auto-entrepreneur (test de la concurrence pour trancher si le marché large vaut mieux que la niche SAP).
5. **Idée E (2+ Notion templates)** — Info-produit/guide + templates "Lancer sa micro-entreprise SAP nettoyage" (test rapidité de mise sur le marché malgré blocage compte de paiement).

## Vérification légale SAP (recherche dédiée)

**Verdict : le risque est réel historiquement mais géré depuis le 1er janvier 2025.**

La « condition d'activité exclusive » (CAE, art. L7232-1-1 du Code du travail) imposait aux organismes SAP de n'exercer QUE des activités SAP. Un **décret n°2024-851 du 25 juillet 2024** (en vigueur depuis le 01/01/2025) a créé une dispense pour les entrepreneurs individuels en micro-entreprise exerçant le SAP à titre principal (art. L7232-1-2, e du 1°) : la dispense s'applique **« sous réserve que le chiffre d'affaires réalisé au titre de l'année civile précédente afférent aux autres activités, exercées à titre accessoire, n'excède pas 30 % du chiffre d'affaires total »**.

**Conclusion actionnable** : Thomas peut ajouter une activité secondaire non-SAP (le SaaS) sur le **même SIRET 89129775600027**, à condition de :
1. Garder le CA de l'activité secondaire ≤ 30 % du CA total (apprécié sur l'année civile précédente — donc aucun risque au démarrage, le seuil ne s'appliquera qu'à partir de l'exercice suivant).
2. Tenir une comptabilité séparée entre prestations SAP et activité SaaS.
3. Déclarer l'activité secondaire (formalites.entreprises.gouv.fr, démarche **gratuite**, délai quelques jours à 2-3 semaines) et reporter le CA principal/accessoire dans le tableau statistique annuel NOVA.

En cas de dépassement, la sanction n'est pas automatique : mise en demeure préfectorale avec 15 jours pour se justifier (art. R7232-20) avant tout retrait effectif. Une "seconde micro-entreprise" séparée n'est PAS possible juridiquement (une personne physique n'a qu'un seul SIRET d'entreprise individuelle) — il faudrait une société (SASU/EURL, ~250-300€) si une séparation totale était un jour nécessaire, mais ce n'est pas requis ici tant que le seuil de 30% est respecté.

**Sources** : Décret n°2024-851 (legifrance.gouv.fr/jorf/id/JORFTEXT000050054724) ; Code du travail art. L7232-1-1/L7232-1-2 (legifrance.gouv.fr) ; entreprendre.service-public.gouv.fr/actualites/A17570 ; entreprendre.service-public.gouv.fr/vosdroits/F33339. Détail complet : `research/legal_sap_exclusivite.md`.

**Réserve non tranchée par les sources** : le sort exact du crédit d'impôt des clients pour les prestations antérieures à un éventuel retrait n'est pas explicitement précisé — à confirmer avec un expert-comptable avant de dépasser durablement le seuil de 30%. Sans dépassement, aucun sujet.

## Synthèse des 5 recherches approfondies

| Idée | Verdict | Concurrents clés | Pricing marché | Preuve de demande | Marché | Point critique |
|------|---------|-------------------|-----------------|---------------------|--------|-----------------|
| **A — SaaS carnet SAP** | GO avec réserves | NeedMe (7€/mois, couvre déjà l'essentiel), Abby (6-26€), Unipros/coopératives (~40€/mois) | 6-40€/mois | Indirecte forte (galères avance immédiate documentées officiellement) mais pas de fil "je cherche un outil, aucun n'existe" | ~25-45k micro-entrepreneurs SAP (estimation, pas de chiffre officiel isolé) | Pas un océan bleu : NeedMe fait déjà l'essentiel à bas prix |
| **B — Widget devis nettoyage** | Réserves | Econeto, Tactidevis, PROPRET (29-48€/mois, suites lourdes) ; à l'international : Elfsight, Clean Estimator | 0-48€/mois | Faible/déduite, aucun signal Reddit direct trouvé | 10-25k entreprises nettoyage ciblables | Angle mort réel (calcul crédit d'impôt 50% absent partout) mais demande non confirmée par du terrain |
| **C — Sites vitrine artisans** | GO avec fortes réserves | Simplébo (dès 25€/mois), agences locales, freelances Malt | 290-6000€ création + 6-80€/mois | Solide (35% TPE sans site, 71% Français cherchent en ligne — France Num/IFOP) | 758 600 créations micro-entreprises/an (FR) | **Nécessite démarchage humain continu** — incompatible avec croissance passive 5-10h/sem |
| **D — SaaS générique compta AE** | **NO-GO** | Indy (86M€ levés), Pennylane (licorne 3,5Md€), Qonto (licorne 4,4Md€), Shine (racheté SG) | Marché consolidé, acteurs surfinancés | Demande générale évidente mais canaux verrouillés | 3,2M auto-entrepreneurs actifs | Marché en consolidation active (rachats 2025-2026) + réforme facturation électronique 2026-2027 exclut un solo dev |
| **E — Infoproduit guide SAP** | GO avec réserves (5,5/10) | Cours Udemy génériques (13-20€), guides gratuits LegalPlace/Abby | 13-20€ (one-shot) | Indirecte (contenu SEO abondant, vidéos récentes) | ~68 875 organismes SAP actifs (DARES/Nova 2024, +20%/an) | Contenu gratuit officiel déjà très complet → plafond de revenu bas seul, mais bon lead magnet |

## Décision finale

**Idée gagnante : version resserrée de l'idée A**, en évitant ses deux points faibles identifiés (concurrence frontale sur le "tout" + complexité réglementaire de l'intégration API avance immédiate). Voir `CLAUDE.md` et `outputs/README-DEMARRAGE.md` pour le détail produit et le raisonnement complet.

**Idées de secours documentées pour pivot rapide** :
- **#2 — Idée C** (site vitrine + fiche Google Business Profile pour artisans/nettoyage locaux Pau/64) : cash rapide via réseau existant Hydropropreté, mais plafonné à 1-3 clients/mois réalistes car nécessite du démarchage manuel. À activer en parallèle si besoin de cash immédiat, ou en pivot complet si l'idée gagnante ne trouve aucune traction en 4-6 semaines.
- **#3 — Idée E** (guide + templates "Lancer sa micro-entreprise SAP nettoyage") : réutilisée comme **lead magnet gratuit** pour l'idée gagnante (acquisition SEO/communautés) plutôt que produit payant autonome ; peut devenir un produit payant secondaire (19-29€) si l'audience grossit.
- Idée B (widget devis + calcul crédit d'impôt affiché) est **intégrée comme fonctionnalité** dans l'idée gagnante plutôt que traitée comme business séparé.
- Idée D est définitivement écartée (marché verrouillé par des acteurs sur-financés).

---

# Round 2 — Pivot post-Zenaide

## Pourquoi ce pivot

Zenaide a été construit, testé et livré (voir ci-dessus), mais **abandonné par Thomas** : il est déjà client d'Unipros (la coopérative concurrente identifiée section "Idée A") pour gérer l'admin de son activité Hydropropreté — devis, factures, attestations, avance immédiate y sont déjà pris en charge. Le narratif produit ("j'ai vécu cette douleur à la main") était donc factuellement faux, et sans cette légitimité vécue, l'intérêt personnel du projet s'effondre.

**Nouvelles contraintes (assouplies par rapport à la mission initiale)** :
- Modèle **SaaS avec abonnement réel** (paiement en ligne intégré, pas un simple mailto) — priorité affirmée par Thomas.
- **Petit budget de pub accepté : 10-30€/mois**, pour tester/valider la demande plutôt que de deviner. Ce n'est plus "zéro pub" comme dans la mission initiale, mais ça reste un budget de test, pas un budget d'acquisition à grande échelle (donc ça n'ouvre pas la porte aux marchés dominés par des acteurs très financés — voir Idée D, toujours NO-GO).
- Toutes les autres contraintes restent : 5-10h/semaine, budget ≤100€/mois tout compris (pub incluse), stack RN/Expo/Firebase/web simple, pas de VPS, dropshipping exclu, ne pas dupliquer Hydropropreté ni Runleveling.

## Brainstorm — 20 nouvelles idées (sans se limiter au secteur nettoyage/SAP)

| # | Idée | Catégorie | Marché cible | Justification rapide |
|---|------|-----------|---------------|----------------------|
| 1 | Widget "devis en ligne + crédit d'impôt affiché" pour entreprises de nettoyage/SAP (reprise de l'ancienne idée B, comme feature marketing pour LE SITE du client, pas un outil de gestion interne — ne concurrence donc pas Unipros) | Micro-outil payant B2B | France (nettoyage/SAP) | Angle mort concurrentiel réel (personne n'affiche le crédit d'impôt sur un devis en ligne), testable avec un petit budget pub ciblé gérants |
| 2 | Simulateur de rentabilité et fiscalité LMNP / meublé de tourisme (micro-BIC vs réel, impact de la réforme fiscale 2025 dite "loi Le Meur" sur les meublés de tourisme non classés) | SaaS niche | France (investisseurs locatifs, hôtes Airbnb/Booking) | Connaissance perso forte (LMNP), sujet chaud et récent (changement de loi = pic de recherche), marché large mais déjà servi par des acteurs établis à vérifier |
| 3 | "Carnet d'entretien locatif" : suivi des travaux/entretiens/factures/garanties pour petits propriétaires bailleurs (LMNP et classique) | SaaS niche | France (propriétaires bailleurs particuliers) | Obligation déclarative existe, pas de leader clair identifié a priori, à vérifier |
| 4 | SaaS de rappels de rendez-vous (SMS/WhatsApp) anti no-show pour indépendants locaux (coiffeurs, coachs, thérapeutes, praticiens bien-être) | SaaS niche B2B | France | Douleur connue (no-show = perte sèche), marché large, mais Planity/Doctolib/Calendly déjà très présents à vérifier |
| 5 | Outil de gestion des avis Google post-prestation pour TPE locales (nettoyage, artisans, professions libérales) | Micro-SaaS | France | Complète l'idée #4, angle "réputation locale" avec petit budget pub géociblé possible |
| 6 | Version "B2B clubs/coachs" du moteur Runleveling : outil de gamification/suivi d'entraînement vendu aux clubs de course à pied ou coachs sportifs indépendants (pas aux coureurs individuels — pas de doublon avec Runleveling) | SaaS niche | France (clubs/coachs sportifs) | Réutilise l'expertise technique Runleveling (Expo/Firebase/Strava) sans dupliquer le produit existant |
| 7 | Simulateur de plus-value immobilière à la revente (calcul fiscal simplifié) en outil freemium/payant | Micro-outil payant | France (investisseurs/vendeurs immobiliers) | Ponctuel par nature (utilisé une fois par transaction), revenu récurrent difficile |
| 8 | Générateur d'annonces immobilières optimisées (texte + conseils photos) pour petits bailleurs et primo-vendeurs | Micro-outil / SaaS | France | Concurrence forte des outils IA génériques (ChatGPT, Jasper), différenciation faible a priori |
| 9 | Suivi de conformité/travaux obligatoires pour propriétaires bailleurs (DPE, diagnostics, échéances légales) avec alertes | SaaS niche | France (bailleurs) | Douleur réglementaire réelle (DPE, décence), momentum réglementaire fort ces dernières années |
| 10 | Marketplace de mise en relation propriétaires LMNP ↔ conciergeries locales (Pau/64 puis extension) | Marketplace | Local puis régional | Effet réseau, trop lourd pour 5-10h/semaine, écarté d'office |
| 11 | Automatisation de demande d'avis + relance clients par SMS pour salons de coiffure/instituts de beauté indépendants | Automatisation B2B locale | France | Proche de #4/#5, marché déjà équipé (Fresha, Planity intègrent ça) à vérifier |
| 12 | SaaS de suivi de garanties/factures pour particuliers (rappel avant expiration de garantie, stockage centralisé) | Micro-outil B2C | France/international | Marché grand public difficile à monétiser (habitude du gratuit), acquisition B2C coûteuse même avec petit budget pub |
| 13 | Widget de prise de RDV + acompte en ligne pour indépendants (concurrence directe Calendly/Doctolib/Planity) | SaaS | France | Marché déjà saturé par des acteurs très installés, différenciation difficile à identifier a priori |
| 14 | Outil de calcul/suivi de charges récupérables et régularisation de charges locatives pour bailleurs | Micro-SaaS | France (bailleurs, surtout multi-lots) | Douleur comptable réelle mais niche étroite (bailleurs avec plusieurs lots/charges communes) |
| 15 | Simulateur d'éligibilité et de montant d'aides à la rénovation énergétique (MaPrimeRénov' etc.) avec mise en relation artisans locaux | Micro-outil + lead-gen | France | Sujet réglementé et changeant vite (risque d'obsolescence rapide de l'info), déjà beaucoup d'acteurs (simulateurs officiels + privés) |
| 16 | App de suivi de séries/habitudes sportives gamifiée pour clubs de sport amateurs (tennis, escalade, natation) — dans la lignée de #6 mais généraliste multi-sport | SaaS niche B2B | France (clubs/associations sportives) | Marché des logiciels de gestion de clubs déjà équipé (Gestion Club, ffe.fr, etc.) à vérifier |
| 17 | Outil de facturation/devis spécialisé pour un métier de niche non-SAP (ex. photographes, professeurs particuliers, coachs sportifs indépendants) | Micro-SaaS | France | Généraliste facturation déjà ultra-concurrentiel (voir Idée D round 1, NO-GO) — risque de retomber dans le même piège |
| 18 | Simulateur de reprise/rachat de bail commercial ou de local pro pour indépendants (niche très spécifique) | Micro-outil | France | Marché trop étroit, volume de recherche probablement faible |
| 19 | Kit/simulateur "changement de statut fiscal LMNP" (micro-BIC vers réel, ou vers LMP) avec calcul d'impact | Micro-outil dans la continuité de #2 | France | À fusionner avec #2 plutôt qu'idée séparée |
| 20 | SaaS de suivi de trésorerie prévisionnelle simple pour micro-entrepreneurs multi-activités (alerte seuils, prévision CA) | SaaS niche | France | Risque de retomber dans le marché saturé identifié en round 1 (Idée D, NO-GO) — écarté sauf angle très spécifique non couvert |

## Top 5 retenues pour recherche approfondie (Round 2)

1. **Idée 1** — Widget devis + crédit d'impôt affiché pour entreprises nettoyage/SAP (reprise ciblée, testée cette fois avec l'hypothèse d'un petit budget pub).
2. **Idée 2** — Simulateur de rentabilité/fiscalité LMNP et meublé de tourisme, incluant l'impact de la réforme fiscale récente sur les meublés de tourisme non classés.
3. **Idée 3** — Carnet d'entretien locatif (suivi travaux/factures/garanties) pour petits propriétaires bailleurs.
4. **Idée 4** — SaaS de rappels anti no-show (SMS/WhatsApp) pour indépendants locaux (coiffeurs, coachs, thérapeutes).
5. **Idée 6** — Version B2B (clubs/coachs sportifs) du moteur de gamification Runleveling, vendue aux structures plutôt qu'aux coureurs individuels.

*(Recherche approfondie en cours — sous-agents lancés en parallèle, résultats à suivre dans les sections dédiées ci-dessous.)*

## Résultats des 5 recherches Round 2

| Idée | Verdict | Point clé |
|------|---------|-----------|
| **1 — Widget devis + crédit d'impôt (nettoyage/SAP)** | Réserves (inchangé) | Angle différenciant toujours réel et non copié, mais budget pub 10-30€/mois insuffisant pour valider (5-20 clics/mois seulement, échantillon dérisoire). Marché réellement adressable revu à la baisse (5-15k, pas 25-45k). |
| **2 — Simulateur LMNP / meublé de tourisme** | Réserves fortes (4,5/10) | Réforme fiscale 2025 ("loi Le Meur") confirmée et réelle, mais un concurrent quasi identique existe déjà (simulateurlmnp.fr, freemium + 12€/mois) et les gros acteurs (LMNP.ai, Ownily) ont déjà mis à jour leurs outils — fenêtre de différenciation déjà refermée. |
| **3 — Carnet d'entretien locatif** | **NO-GO (3/10)** | Bloqué structurellement par le Carnet d'Information du Logement (CLÉA/Qualitel), gratuit et quasi-obligatoire par la loi depuis 2023 — pas un problème marketing, un mur réglementaire. |
| **4 — SaaS anti no-show (indépendants)** | **NO-GO (3/10)** | Marché dominé par des acteurs très financés (Doctolib, Planity) ; même les niches espérées (coachs sportifs, profs particuliers) sont déjà couvertes (KOACHER Pro, AZEOO). |
| **6 — B2B clubs sportifs (moteur Runleveling)** | **NO-GO (fortes réserves)** | Marché minuscule (~1800 clubs FFA running ciblables), aucune preuve de demande (la fidélisation en club passe par l'humain, pas un outil), et risque Strava qui déprécie ses endpoints clubs en septembre 2026. |

**Constat transversal important** : sur les 5 idées testées avec l'hypothèse d'un budget pub de 10-30€/mois, **aucune** n'a pu être validée ou invalidée par ce budget — le CPC B2B en France (1,5 à 8€ selon secteur) ne permet que 5 à 60 clics/mois, un échantillon statistiquement non significatif. Les sources consultées recommandent plutôt 200-2000€/mois pour un vrai test publicitaire B2B. **Le petit budget pub envisagé ne change donc pas fondamentalement la donne** par rapport à une stratégie 100% organique — il vaut mieux le garder pour un test ponctuel concentré une fois un signal qualitatif positif obtenu autrement (communautés, forums).

**Aucune idée du Round 2 n'obtient un GO franc.** Idée 1 (widget devis) reste la moins mauvaise option (réserves, pas NO-GO), mais sa validation réelle passe par de la présence gratuite en communautés (groupes Facebook, forums), pas par de la pub payante.

---

# Round 3 — Brainstorm générique (sans lien avec nettoyage/SAP/immobilier/running)

## Pourquoi ce nouveau round

Le Round 2 restait ancré sur les domaines de connaissance "insider" de Thomas (nettoyage/SAP, immobilier LMNP) par défaut — critique justifiée de Thomas : aucune de ces idées n'était un GO franc, et il n'a pas de attache émotionnelle particulière à ces secteurs pour la suite. Thomas confirme ne pas avoir de hobby/passion spécifique à exploiter à part "aimer bosser derrière un ordi" — donc ce round explore des idées **génériques de micro-SaaS pour développeur solo**, sans lien avec son activité existante, en s'appuyant sur des catégories qui fonctionnent régulièrement pour des indie hackers (Product Hunt, Indie Hackers, X/Twitter) plutôt que sur une expertise sectorielle personnelle.

**Constat conservé du Round 2** : un budget pub de 10-30€/mois ne suffit pas à valider une cible B2B professionnelle (CPC 2-8€). Ce round privilégie donc des idées validables par **canaux organiques peu coûteux** (Product Hunt, Reddit, Indie Hackers, X/Twitter, communautés de développeurs/freelances/créateurs — audiences que Thomas peut atteindre en tant que pair, comme un développeur qui s'adresse à d'autres développeurs/freelances).

## Brainstorm — 20 idées génériques

| # | Idée | Catégorie | Marché cible | Justification rapide |
|---|------|-----------|---------------|----------------------|
| 1 | Relance automatique de factures impayées pour freelances/TPE (dunning-as-a-service simplifié et pas cher, vs Chaser/Upflow orientés entreprises) | SaaS niche B2B | France + international anglophone possible | Douleur universelle et documentée (retards de paiement), concurrents existants mais orientés PME/ETI, pas freelances solo |
| 2 | Agrégateur de revenus multi-plateformes pour freelances/travailleurs de plateformes (Malt+ComeUp+Fiverr, ou livreurs/VTC multi-apps) avec vue consolidée pour la déclaration micro-entrepreneur | SaaS niche | France | Douleur réelle (dispersion des revenus), mais risque de retomber dans le piège "compta AE" déjà NO-GO (Round 1, Idée D) si pas assez différencié |
| 3 | Générateur automatique de changelog + status page pour petits produits SaaS/indie makers | Micro-outil dev-tool | International (indie hackers) | Niche "produit pour développeurs", Thomas est lui-même dans cette audience (crédibilité de pair), marché anglophone large |
| 4 | Outil de repurposing de contenu IA (transformer un article/une vidéo en posts réseaux sociaux) pour créateurs solo/petites marques | SaaS IA | International | Espace très chaud mais déjà très encombré (Opus Clip, Repurpose.io) — différenciation à vérifier |
| 5 | Générateur de devis/estimation de projet pour freelances techniques (dev/design) à partir d'un cahier des charges | Micro-SaaS | International (freelances tech) | Niche precise, Thomas connaît le métier de développeur freelance de l'intérieur |
| 6 | Outil de veille de prix/alertes pour un marché de niche (pièces détachées, matériel spécifique, occasion) | Micro-outil | International | Modèle éprouvé (CamelCamelCamel) mais dépend fortement du choix de niche précise |
| 7 | SaaS de mock-interview IA pour préparation d'entretiens d'embauche tech | SaaS IA | International | Concurrents gratuits puissants (Google Interview Warmup) — risque de cannibalisation par du gratuit |
| 8 | Outil de suivi de mentions de marque/produit sur réseaux sociaux pour petites entreprises (alternative simplifiée à Mention/Brand24) | SaaS niche | International | Marché existant avec acteurs établis, différenciation prix/simplicité à creuser |
| 9 | Générateur de posts LinkedIn "ghostwriting IA" pour indépendants/consultants FR | SaaS IA | France | Marché chaud (personal branding) mais très concurrentiel (Taplio, Supergrow), angle francophone à vérifier |
| 10 | Outil de gestion de licences/téléchargements pour développeurs indie vendant des plugins/templates/thèmes | Micro-SaaS dev-tool | International | Niche "vendre à d'autres devs", marché de niche mais qualifié |
| 11 | Simple générateur de pages de destination ("landing page") + formulaire de liste d'attente pour lancement de produit | Micro-outil | International | Marché saturé d'outils no-code (Carrd, Framer) — différenciation difficile |
| 12 | Outil de suivi de disponibilité/uptime + certificat SSL pour petits sites/SaaS indépendants | Micro-SaaS dev-tool | International | UptimeRobot domine avec un plan gratuit généreux — obstacle sérieux à la monétisation |
| 13 | Assistant IA de rédaction de CGV/CGU/mentions légales adaptées par secteur pour créateurs de SaaS/sites indépendants | Micro-outil | International/France | Proche de l'idée écartée en Round 1 (générateurs légaux déjà saturés, gratuits) |
| 14 | Outil de traduction/adaptation automatique de sites vitrine/SaaS pour l'export (multilingue) à destination de petits éditeurs indie | Micro-SaaS | International | Douleur réelle pour indie hackers qui veulent viser un marché international, concurrents existent (Weglot) mais chers |
| 15 | Newsletter/agrégateur curaté de niche (ex. veille outils IA pour développeurs, ou veille freelance) monétisé par abonnement premium | Contenu + SaaS | International | Time-to-first-euro long (audience à construire), mais très faible coût de démarrage |
| 16 | Outil de calcul/simulation de prix pour prestations freelances (aide à la fixation de tarif journalier) | Micro-outil | International | Proche de #5, à fusionner éventuellement |
| 17 | SaaS de gestion de contrats/signatures simplifié pour freelances (alternative low-cost à DocuSign/Yousign pour un usage basique) | SaaS niche | France/International | Yousign (français, bien financé) et DocuSign dominent largement — marché verrouillé |
| 18 | Outil de suivi de temps + facturation pour freelances techniques en mission (time tracking + invoice) | SaaS niche | International | Marché très encombré (Toggl, Harvest, Clockify gratuit) — différenciation difficile |
| 19 | Plateforme de mise en relation entre développeurs indie pour du "code review" payant à la demande (peer review marketplace) | Marketplace | International | Petit marché de niche, effet réseau à amorcer, risque élevé pour un solo |
| 20 | Outil d'automatisation de veille concurrentielle simplifiée pour petites entreprises (suivi de prix/changements sur sites concurrents) | Micro-SaaS | International | Existe déjà (Visualping, Distill) avec plans gratuits — différenciation à creuser |

## Top 5 retenues pour recherche approfondie (Round 3)

1. **Idée 1** — Relance automatique de factures impayées pour freelances/TPE, low-cost.
2. **Idée 2** — Agrégateur de revenus multi-plateformes pour freelances/travailleurs multi-jobbing (à bien différencier du piège "compta AE" déjà NO-GO).
3. **Idée 3** — Changelog + status page automatisés pour petits produits SaaS/indie makers.
4. **Idée 5** — Générateur de devis/estimation de projet pour freelances techniques.
5. **Idée 10** — Gestion de licences/téléchargements pour développeurs indie vendant du code (plugins/templates).

*(Recherche approfondie en cours.)*
