# Prévisions — Zenaide

**Avertissement méthodologique** : ces chiffres sont des **hypothèses raisonnées**, pas des garanties. La recherche de marché (`research/idee_A_saas_sap.md`) a conclu à un verdict **« GO avec réserves »** : la douleur administrative SAP est réelle et documentée, mais le marché n'est pas vierge (NeedMe à 7€/mois couvre déjà l'essentiel du périmètre) et aucune preuve de demande « brute » (fil Reddit/forum du type « je cherche cet outil, il n'existe pas ») n'a été trouvée. Les projections ci-dessous intègrent cette prudence.

## Taille de marché (rappel sourcé)

- 82 776 organismes SAP recensés au 1er janvier 2025 (base Nova), dont 91 % « entreprises » (catégorie qui mélange sociétés et micro-entrepreneurs) — [servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles](https://www.servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles).
- Donnée DARES 2018 : 8 440 auto-entrepreneurs dans le secteur, alors « embryonnaire » — panorama OPCOEP.
- **Estimation raisonnée (non officielle)** retenue pour ces prévisions : **25 000 à 45 000 micro-entrepreneurs SAP actifs en France en 2025-2026**, en extrapolant la croissance du secteur (+18-20 %/an). C'est une fourchette large : à traiter comme un ordre de grandeur, pas un chiffre précis.

## Hypothèses de conversion

Aucune donnée spécifique au secteur SAP sur les taux de conversion freemium → payant n'a été trouvée dans la recherche. Les hypothèses ci-dessous s'appuient sur des repères généralistes du freemium B2B SaaS (taux de conversion freemium→payant typiquement cités entre 1 % et 5 % dans l'industrie du logiciel, à prendre comme un ordre de grandeur générique et non une donnée sectorielle SAP) et sur les contraintes propres à ce projet :

- **Acquisition 100 % organique** (groupes Facebook SAP/nettoyage, FEDESAP, SEO sur les 2 articles publiés, bouche-à-oreille du réseau Hydropropreté) : pas de budget pub, donc croissance lente et progressive.
- **Friction de paiement en V1** : aucun paiement en ligne intégré (voir `outputs/zenaide/content/legal.md`, article 3 des CGV) — la conversion vers l'offre payante nécessite un email/lien manuel, ce qui réduit mécaniquement le taux de conversion réel par rapport à un checkout intégré.
- **Palier de conversion naturel** : la conversion n'est « forcée » que lorsqu'un utilisateur dépasse 3 clients actifs — beaucoup de micro-entrepreneurs SAP à temps partiel resteront durablement dans la limite gratuite.

## Scénarios à 6 mois et 12 mois

| | Pessimiste | Réaliste | Optimiste |
|---|---|---|---|
| **Mois 1** — comptes créés (gratuit) | 5 | 20 | 50 |
| **Mois 1** — clients payants | 0 | 0 | 1 |
| **Mois 6** — comptes créés cumulés | 25 | 120 | 350 |
| **Mois 6** — clients payants cumulés | 0 | 4 | 15 |
| **Mois 6** — revenu cumulé | 0 € | 156 € | 585 € |
| **Mois 12** — comptes créés cumulés | 60 | 300 | 800 |
| **Mois 12** — clients payants cumulés | 1 | 12 | 40 |
| **Mois 12** — revenu annualisé (12 × abonnements actifs × 39€) | 39 € | 468 € | 1 560 € |

**Lecture** : même le scénario optimiste reste un revenu d'appoint (environ 130 €/mois en rythme de croisière la première année), cohérent avec le verdict de la recherche (niche réelle mais pas un marché massif, concurrence déjà présente). Le scénario réaliste correspond à environ **40 €/mois** de revenu récurrent au bout d'un an — un complément, pas un remplacement de revenu.

**Ce que ces chiffres ne couvrent pas** : le potentiel de revenu de service associé (accompagnement, présentation FEDESAP, éventuelle vente ultérieure du guide/infoproduit en lead magnet payant si l'audience grossit — voir idée de secours #3 dans `recherche-marche.md`) n'est pas comptabilisé ici.

## Charge hebdomadaire estimée (objectif : rester sous 10h/semaine)

| Poste | Heures/semaine (rythme de croisière) |
|---|---|
| Animation communautés (groupes Facebook, réponses, entraide) | 2-3h |
| Support utilisateurs (email, questions) | 1-2h |
| Maintenance / petites évolutions produit | 2-3h |
| Contenu (articles SEO, mises à jour) | 1-2h |
| **Total** | **6-10h/semaine** |

Les 2 premières semaines de lancement demanderont probablement plus (finalisation compte Firebase/hébergement, premiers retours à traiter) — à anticiper en dehors du calcul de rythme de croisière ci-dessus.

## Budget mois 1 (plafond 100 €)

| Poste | Coût estimé | Obligatoire pour lancer ? |
|---|---|---|
| Nom de domaine zenaide.fr (1 an) | 10-15 € | Oui |
| Hébergement (Firebase Hosting / Vercel / Cloudflare Pages, plan gratuit) | 0 € | Oui |
| Compte email pro (ex. Cloudflare Email Routing sur le domaine, gratuit) | 0 € | Recommandé |
| Réserve pour imprévu (ex. extension de domaine, outil de design ponctuel) | 20 € | Non |
| **Total engagé mois 1** | **≈ 10-35 €** | — |
| **Marge restante sur les 100 €** | **≈ 65-90 €** | — |

Le budget prévu est largement suffisant : l'essentiel du coût (développement, hébergement, PDF, design) est déjà couvert par le stack gratuit choisi (V1 sans backend, pas de Firestore/Auth payant, pas d'outil tiers payant). La marge restante peut servir à réserver des variantes de nom de domaine, ou à financer un outil de paiement en ligne (Stripe n'a pas de coût fixe, seulement des frais par transaction) lors du passage en V2.

## Sources

- [servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles](https://www.servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles)
- Panorama OPCOEP des entreprises de services à la personne (DARES 2018)
- `research/idee_A_saas_sap.md` (synthèse complète concurrence, pricing, preuves de demande)
- Repères généralistes de conversion freemium B2B SaaS (ordre de grandeur générique, non spécifique au secteur SAP — à vérifier empiriquement dès les premiers mois réels d'usage)
