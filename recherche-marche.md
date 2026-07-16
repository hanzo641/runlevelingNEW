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
Voir section dédiée après retour des sous-agents.

## Idées rejetées et pourquoi (résumé)
- #6, #8 : doublons directs avec projets existants (Runleveling, Hydropropreté) → exclus par consigne explicite.
- #7, #19 : marketplaces à effet réseau, incompatibles avec 5-10h/sem et budget 100€.
- #9, #15, #17 : time-to-first-euro trop long (contenu/formation lente à monétiser).
- #10 : bon potentiel mais coûts variables (SMS/WhatsApp API) et vente terrain lourde — gardé en option secondaire si A échoue.
- #13 : marché des générateurs légaux déjà saturé par des acteurs installés gratuits.

*(Section à compléter avec les résultats des recherches approfondies ci-dessous.)*
