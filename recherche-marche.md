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
