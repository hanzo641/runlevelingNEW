# Étude de marché — SaaS "carnet de bord SAP" pour micro-entrepreneurs Services à la Personne

Date de la recherche : 2026-07-16
Contexte : Thomas, fonctionnaire (5-10h/semaine dispo), gère déjà une micro-entreprise SAP ("Hydropropreté", nettoyage à domicile). Idée évaluée : SaaS centralisant attestations fiscales annuelles SAP, livre de recettes automatique, suivi/rapprochement avance immédiate Urssaf, devis/factures conformes SAP, alertes de seuils de CA.

---

## 1. Concurrents directs en France

### 1.1 Généralistes auto-entrepreneur (facturation/compta) avec module SAP

| Outil | Couvre attestation fiscale SAP ? | Couvre avance immédiate (API Urssaf) ? | Livre de recettes auto | Alertes seuils |
|---|---|---|---|---|
| **Abby** (abby.fr) | Oui — génération auto, calcul par client, envoi groupé (offre **Business**) | Oui — "seul outil à intégrer nativement l'avance immédiate SAP via l'API Urssaf" (dès offre **Pro**) | Oui | Oui (TVA) |
| **Indy** (ex-Georges.tech, ex-Georges, rebaptisé en 2022) | Oui, via son guide/fonctionnalité déclarative, positionné surtout compta/déclarations Urssaf | Oui — offre **Start** à 14,40€ HT/mois inclut l'accès au service Avance Immédiate Urssaf | Oui | Oui |
| **NeedMe** (needme.fr) | **Oui — fonctionnalité dédiée "génération des attestations fiscales SAP" en un clic (lancée récemment, présentée comme nouveauté)** | Oui — intégration API "Tiers de Prestation", incluse sans surcoût | Oui (livre de recettes/achats avec justificatifs) | Oui (temps réel vs seuils légaux) |
| **MicroDesk** (microdesk.fr, Bordeaux, fondée 2018) | Contenu/fonctionnalités orientées SAP (déclaration NOVA, avance immédiate) mais détails produits derrière portail de connexion — moins documenté publiquement | Mentionné (partenaire Urssaf) | Oui (déclarations Urssaf auto) | Oui (tableaux de bord seuils) |
| **Sinao** (sinao.fr) | Oui — centre d'aide dédié "Comment générer mes attestations fiscales pour mes clients" | Oui — page dédiée "avance immédiate" | Oui | Oui |
| **Shine** | Positionné avant tout comme banque pro + facturation ; **Plateforme Agréée** facturation électronique, mais pas de spécialisation SAP visible (pas de module attestation fiscale/avance immédiate mis en avant) | Non mis en avant spécifiquement | Oui (basique) | Limité |
| **Freebe** | Solution de facturation compatible e-facturation (connectée à une Plateforme Agréée partenaire) ; pas de spécialisation SAP identifiée dans les sources trouvées | Non identifié | Oui | Oui |
| **Georges** | N'existe plus sous ce nom — la société a été rebaptisée **Indy** en 2022. Pas un concurrent distinct. |
| **Tacotax** | **Pas un concurrent pertinent** : TacoTax est un service de déclaration d'impôt sur le revenu / défiscalisation pour particuliers (financé par apport d'affaires vers CGP/avocats fiscalistes), sans lien avec la facturation ou les attestations SAP des auto-entrepreneurs. |

Sources :
- https://abby.fr/logiciel-facturation-sap
- https://abby.fr/tarifs
- https://abby.fr/blog/modele-dattestation-fiscale-annuelle-pour-le-service-a-la-personne-sap/
- https://www.indy.fr/auto-entrepreneur/
- https://www.indy.fr/prix/
- https://www.indy.fr/guide/fiscalite/declarations/attestation-fiscale-auto-entrepreneur/
- https://needme.fr/
- https://needme.fr/tarifs/
- https://needme.fr/fonctionnalites/
- https://needme.fr/fonctionnalites/avance-immediate/
- https://needme.fr/nouvelle-fonctionnalite-needme-generation-des-attestations-fiscales-sap/
- https://microdesk.fr/
- https://microdesk.fr/avance-immediate-de-credit-dimpot-sap/
- https://help.sinao.fr/fr/articles/7193518-comment-generer-mes-attestations-fiscales-pour-mes-clients-et-les-comprendre
- https://www.sinao.fr/logiciel/avance-immediate
- https://www.shine.fr/facturation-electronique/
- https://ma-facture-electronique.org/plateforme-agreee/liste-officielle/freebe/
- https://www.toutsurmesfinances.com/impots/declaration-defiscalisation-moins-d-impot-grace-a-l-assistant-en-ligne-tacotax.html

### 1.2 Acteurs niche déjà positionnés spécifiquement SAP

C'est le point le plus important pour la validation de l'idée : **il existe déjà des acteurs niche sur ce segment précis**, à plusieurs niveaux de maturité :

- **Unipros** (unipros.coop) — "la coopérative du service à la personne". Modèle **coopérative** (pas un simple SaaS) : les micro-entrepreneurs adhèrent, gardent leur statut, et Unipros fournit une plateforme web + appli mobile (devis, facturation, **avance immédiate**, **attestations fiscales**, suivi clients/relances) + appui juridique. Abonnement fixe **39,90€ HT/mois**, sans commission sur le CA, sans engagement, essai 30 jours. Reversement des sommes en 24-48h. Avis globalement positifs (transparence tarifaire) mais certains utilisateurs notent que la cotisation "peut peser lourd" en dessous d'un certain seuil de facturation, surtout au démarrage.
  Sources : https://unipros.coop/ | https://unipros.coop/notre-offre/ | https://unipros.coop/lattestation-fiscale/ | https://fr.trustpilot.com/review/unipros.coop | https://trajectio.fr/unipros-cooperative-services/

- **Accès SAP** (acces-sap.com) — autre **coopérative multi-services** (ménage, jardin, informatique, petit bricolage, soutien scolaire, cours particuliers) : gère facturation, encaissements multi-moyens (CB, CESU...), reversement 48-72h, attestations fiscales, avance immédiate pour les clients (jusqu'à 6 000€/an). Adhésion 10€ de part sociale. Tarifs de service non публics sur le site.
  Sources : https://www.acces-sap.com/professionnels/foire-aux-questions/ | https://www.acces-sap.com/particuliers/credit-impot-services-a-la-personne/

- **FaciliSAP** (facilisap.fr) — coopérative multi-services similaire (mise en relation clients + outils devis/facturation + accompagnement certification SAP pour les pros).

- **Ximi, Ogust, Apologic (Arche MC2), Progisap** — logiciels **"pros" complets** (planning, télégestion, paie, multi-financeurs APA/PCH) destinés aux **structures/associations avec salariés**, pas aux micro-entrepreneurs solos. Ximi démarre à **49€/mois**. Trop lourds/chers et hors-cible pour un micro-entrepreneur solo.
  Sources : https://www.ximi.fr/logiciel-services-a-la-personne/ | https://ogust.com/logiciel-services-a-la-personne/tarifs/ | https://www.logiciels.pro/ximi/

- **avance-immediate.fr** — site indépendant proposant un générateur/modèle d'attestation fiscale annuelle gratuit + infos avance immédiate (positionnement contenu/outil gratuit, pas un SaaS complet payant).
  Source : https://www.avance-immediate.fr/AttestationFiscale

**Conclusion section 1** : Le marché n'est **pas vierge**. Deux catégories de concurrents directs et actifs existent déjà :
1. Des généralistes auto-entrepreneur (Abby, NeedMe, Sinao, MicroDesk, Indy) qui ont **déjà ajouté** génération d'attestation fiscale SAP + avance immédiate comme fonctionnalités (pour NeedMe, présentée comme une nouveauté récente, ce qui montre que la demande pousse les acteurs génériques à se spécialiser).
2. Des coopératives 100% dédiées SAP (Unipros, Accès SAP, FaciliSAP) qui vont plus loin qu'un simple logiciel : elles portent une partie de la responsabilité administrative/juridique et prennent un abonnement fixe ~40€/mois.

---

## 2. Concurrents internationaux

Comme anticipé, la spécificité du dispositif (crédit d'impôt 50% SAP français, Urssaf, Cesu, Nova, avance immédiate) est **100% réglementation française** — aucun équivalent structurel à l'étranger. Les outils internationaux de gestion pour "home service businesses" (ex. Jobber, Housecall Pro, ServiceTitan, aux USA) gèrent planning/facturation/paiement mais n'ont **aucune notion de crédit d'impôt clients ni d'attestations fiscales homologues** — l'équivalent américain le plus proche (dependent care FSA, etc.) fonctionne complètement différemment et n'implique pas ce type de document. **Aucun concurrent international pertinent identifié.** Ce n'est pas un axe de risque concurrentiel, mais cela confirme aussi qu'il n'y a pas de produit international à adapter/copier facilement.

---

## 3. Pricing observé chez les concurrents

| Acteur | Tarif |
|---|---|
| NeedMe | 7€ HT/mois ou 67€ HT/an (-20%) — tout inclus, essai 30 j |
| Abby | Gratuit (Basique) / Start 5,85-7,20€ / Pro 9,75-12€ (avance immédiate incluse) / Business 21,45-26,40€ (attestations incluses) — promo -35% annuel |
| Indy | Gratuit (Essentiel) / Plus 9€/mois / Premium 15-19€/mois / Accompagnement prioritaire +28€/mois |
| Unipros (coopérative) | 39,90€ HT/mois fixe, 0% commission, essai 30 j |
| Accès SAP (coopérative) | 10€ part sociale + commission/frais non publics |
| Ximi (pro/structures) | à partir de 49€/mois (hors-cible micro-entrepreneur solo) |

**Fourchette de marché pour un outil dédié micro-entrepreneur (hors coopératives) : ~5 à 12€/mois** pour l'essentiel des fonctionnalités ; les fonctionnalités SAP avancées (attestations, avance immédiate) sont généralement dans les paliers **7-15€/mois**. Les coopératives (qui offrent un service plus large, pas juste logiciel) sont à ~40€/mois.

Sources : cf. section 1.1 et 1.2 ci-dessus.

---

## 4. Preuves de demande réelle

### 4.1 Témoignages concrets trouvés (plateforme gouvernementale "Services Publics +")

Ce site officiel (plus.transformation.gouv.fr) collecte des témoignages d'usagers sur les démarches administratives — c'est la source la plus fiable de "vraies galères" trouvée, car ce sont des témoignages nominatifs datés, non filtrés par un éditeur de logiciel :

- **"Avance immédiate trop de dysfonctionnements"** (11 oct. 2022, Gironde) : un auto-entrepreneur attend 43 jours sans être informé de pièces manquantes (attestation de vigilance, document fiscal). Citation : *"Je ne comprends pas pourquoi l'Urssaf fait tout pour retarder les demandes d'habilitation."* Il évoque le risque que la lourdeur administrative pousse vers le travail non déclaré.
  URL : https://www.plus.transformation.gouv.fr/experiences/3105596_avance-immediate-trop-de-dysfonctionnements

- **"Difficultés rencontrées pour obtenir l'avance immédiate"** (19 nov. 2023, Daniel, Indre-et-Loire) : *"Depuis plusieurs mois, il m'est impossible d'obtenir la mise en place d'une avance immédiate."* Le système Urssaf ne reconnaît pas les contribuables n'ayant pas reçu leur avis d'impôt avant le 31/08/2023 malgré des retards d'envoi connus de la DGFiP. Après 8 relances, réponse Urssaf : *"nos équipes techniques ont pris en charge votre demande [...] nous ne pouvons pas vous indiquer de délai."*
  URL : https://www.plus.transformation.gouv.fr/experiences/4232729_difficultes-rencontrees-pour-obtenir-lavance-immediate

- Autres titres identifiés sur la même plateforme (non détaillés faute de temps, mais confirmant un pattern récurrent) : *"Avance Immédiate un défi"*, *"Avance immédiate"* (témoignage générique), *"L'URSSAF autoentrepreneur me met en grandes difficultés..."*, *"Problème pour accéder à mon espace URSSAF Auto-entrepreneur"*.
  URLs : https://www.plus.transformation.gouv.fr/experiences/6466815_avance-immediate-un-defi | https://www.plus.transformation.gouv.fr/experiences/5941483_avance-immediate | https://www.plus.transformation.gouv.fr/experiences/4726496_lurssaf-autoentrepreneur-me-met-en-grandes-difficultes

**Analyse** : ces témoignages portent principalement sur des **dysfonctionnements du service Urssaf lui-même** (délais, non-reconnaissance de documents, absence de réponse) — un problème structurel que même un excellent SaaS tiers ne peut pas résoudre directement (il ne peut qu'aider à préparer/suivre le dossier, relancer, documenter). C'est une nuance importante : la douleur n'est pas "je ne sais pas faire une attestation fiscale", c'est "le système Urssaf est lent/buggé et personne ne me prévient". Un outil qui **suit/relance/alerte** sur l'état du dossier avance immédiate a de la valeur, mais ne supprime pas la cause racine.

### 4.2 Preuve indirecte de la demande via les concurrents eux-mêmes

- Le fait que **NeedMe présente la génération d'attestation fiscale SAP comme une "nouvelle fonctionnalité"** (article dédié à son lancement) est un signal fort que (a) ce n'était pas couvert avant par cet acteur généraliste, et (b) la demande existait suffisamment pour justifier un développement dédié.
  URL : https://needme.fr/nouvelle-fonctionnalite-needme-generation-des-attestations-fiscales-sap/
- L'existence de **trois coopératives dédiées** (Unipros, Accès SAP, FaciliSAP) avec abonnement payant démontre qu'un marché est prêt à payer significativement (~40€/mois) pour déléguer cette complexité — mais ce sont des modèles où le prestataire facture *via* la coopérative (qui devient un peu un intermédiaire de facturation), pas un simple outil SaaS que le micro-entrepreneur pilote lui-même en gardant sa propre facturation. C'est un modèle différent de "carnet de bord" proposé dans l'idée.
- Nouvelle **obligation réglementaire au 1er janvier 2026** : les prestataires SAP utilisant l'avance immédiate doivent désormais transmettre à l'Urssaf une **attestation de garantie financière**, sous peine de suspension du dispositif. Certaines fédérations alertent que cette garantie pourrait rendre le dispositif *"difficilement tenable pour certaines structures"*. C'est une nouvelle couche de complexité administrative **récente et croissante** — un momentum favorable pour un outil qui aide à suivre/documenter la conformité.
  Source : https://www.coorie.fr/2026/03/25/securiser-le-remboursement-fiscal-en-temps-reel-quelles-obligations-pour-prestataires-et-menages/

### 4.3 Ce que je n'ai PAS trouvé

- Aucun fil Reddit francophone spécifique (r/auto_entrepreneur, r/france) mentionnant explicitement "attestation fiscale SAP" ou "avance immédiate" n'est apparu dans les résultats de recherche (l'indexation de Reddit en France/francophone sur ces requêtes très spécifiques semble faible ou ces sujets n'y sont pas beaucoup discutés — à vérifier manuellement en se connectant directement sur Reddit, ce que je n'ai pas pu faire ici avec WebSearch).
- Aucun avis Trustpilot/Google individuel cité verbatim mentionnant explicitement "je galère avec mon attestation fiscale SAP" n'a pu être extrait (accès Trustpilot bloqué/403 lors du fetch direct).
- Pas de groupe Facebook fermé consulté en profondeur (accès nécessite connexion) — seulement leur existence confirmée par indexation Google (voir section 6).

**Conclusion section 4** : la demande existe et est **documentée indirectement** (témoignages officiels sur les dysfonctionnements Urssaf, mouvement des concurrents vers plus de fonctionnalités SAP, existence de coopératives payantes dédiées, nouvelle complexité réglementaire 2026). Mais je n'ai pas trouvé de preuve "brute" et directe (verbatims Reddit/forums de type "je cherche un outil pour faire mes attestations SAP, aucun outil ne le fait bien") — probablement parce que **des solutions existent déjà et sont relativement satisfaisantes** (Abby a 4-4,5/5 sur Trustpilot avec 300+ avis, Indy 4,7-4,8/5 sur 6 000-13 000 avis), ce qui réduit la frustration exprimée publiquement.

---

## 5. Taille de marché

Les chiffres officiels ne permettent **pas d'isoler précisément** le nombre de micro-entrepreneurs SAP — c'est une limite documentée des sources officielles elles-mêmes (DARES/Nova ne publient pas cette ventilation fine régulièrement).

Éléments chiffrés trouvés :
- **82 776 organismes SAP** recensés au 1er janvier 2025 (base Nova), dont **91% sont des "entreprises"** (catégorie qui mélange sociétés classiques ET micro-entrepreneurs), 7,5% associations, 1,5% établissements publics. Croissance de +18% du nombre d'entreprises entre 2024 et 2025. CA sectoriel 2024 : 22,8 Md€.
  Source : https://www.servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles
- Au 1er janvier 2024, 68 875 organismes (90% entreprises) — donc **croissance rapide d'une année sur l'autre** (68 875 → 82 776, soit +20% en un an).
  Source : https://tool-advisor.fr/blog/chiffres-service-a-la-personne/ (citant le Ministère de l'Économie)
- Donnée historique DARES : **8 440 auto-entrepreneurs** dans le secteur en **2018**, avec l'activité micro-entrepreneur alors "embryonnaire" (1,6% des heures du secteur), concentrée sur entretien du domicile (41,2%) et petit jardinage/bricolage (25,5%).
  Source : panorama OPCOEP (PDF) — https://www.opcoep.fr/ressources/centre-ressources/branches/esap/panorama-des-entreprises-de-services-a-la-personne-opcoep.pdf
- Une source secondaire (non officielle, à prendre avec prudence) évoque "15 000 auto-entrepreneurs" dans le secteur SAP, sans date précise ni méthodologie claire.

**Estimation raisonnée** : en extrapolant la croissance rapide du secteur (créations de micro-entreprises en France = record de 758 600 immatriculations en 2025 tous secteurs confondus, +18-20%/an pour les organismes SAP) depuis la base 2018 (~8 440), une fourchette **plausible mais non officiellement confirmée de 25 000 à 45 000 micro-entrepreneurs actifs en SAP en France en 2025-2026** semble raisonnable. Ce chiffre reste une estimation, pas une donnée officielle — c'est une limite importante à signaler à Thomas.

Sources :
- https://www.servicesalapersonne.gouv.fr/tout-savoir-sur-les-services-la-personne/etudes-et-donnees-sur-les-services-la-personne
- https://dares.travail-emploi.gouv.fr/publication/les-organismes-de-services-la-personne-en-2021
- https://www.aladom.fr/actualites/secteur-service/6854/quelques-chiffres-sur-les-services-la-personne/
- https://www.insee.fr/fr/statistiques/8721354

---

## 6. Acquisition — communautés et canaux organiques

- **FEDESAP** (Fédération Française de Services à la Personne et de Proximité) : fédération patronale fondée en 2007, affiliée CPME, revendique **3 300+ membres/adhérents** (réseaux, petites entreprises, associations, et une part d'auto-entrepreneurs), représentant 130 000+ salariés au total. Présence Facebook/LinkedIn active. C'est un partenaire de contenu/visibilité potentiel (articles invités, webinaires) plutôt qu'un canal direct vers les auto-entrepreneurs individuels.
  Sources : https://www.fedesap.org/ | https://fr.linkedin.com/company/f%C3%A9d%C3%A9sap
- **FESP** (Fédération des entreprises de services à la personne) : autre fédération, positionnement plutôt entreprises établies/réseaux (O2, Shiva...), moins pertinente pour les micro-entrepreneurs solos.
  Source : https://www.fesp.fr/
- **Groupes Facebook identifiés** (existence confirmée via indexation, contenu interne non consulté) :
  - "Auto entrepreneur aide ménagère à domicile"
  - "CESU Aide à Domicile / Auxiliaire de Vie question et entraide"
  - "Entraide Auto/Micro-entrepreneurs" (lié à Hello My Business)
  - "Entraide & réseau des auto-entrepreneurs"
  - "aide a domicile"
  Ces groupes discutent explicitement de recherche de prestataires logiciels, questions juridiques/comptables, et accompagnement — terrain fertile pour du contenu organique et de la présence communautaire (répondre aux questions, pas juste poster des liens).
  Source (résultats de recherche Google) : requête "groupe facebook auto-entrepreneur ménage aide à domicile entraide administratif"
- **Blogs/contenu SEO déjà occupés** : de nombreux sites publient déjà des guides détaillés et bien référencés sur "attestation fiscale SAP", "déclaration NOVA", "livre de recettes auto-entrepreneur" — notamment les concurrents eux-mêmes (Abby, NeedMe, Indy, MicroDesk, LegalPlace, LegalStart) qui investissent fortement en contenu SEO. **Le SEO sur les mots-clés génériques ("attestation fiscale auto-entrepreneur", "livre de recettes") sera très concurrentiel** face à des acteurs financés avec des équipes content dédiées.

**Conclusion section 6** : l'acquisition organique est **possible mais pas gratuite en effort** : les communautés existent (groupes FB, forums, fédérations) et sont accessibles sans budget pub, mais le SEO pur sur les requêtes évidentes est déjà disputé par des acteurs installés avec des moyens supérieurs à ceux de Thomas (5-10h/semaine). Le point d'entrée réaliste est plutôt : participation active dans les groupes Facebook de niche (métiers précis : ménage, jardinage, garde d'enfants), contenu ultra-spécifique (long-tail) que les gros acteurs généralistes négligent, et le fait que **Thomas connaît ce métier de l'intérieur** (crédibilité de pair, pas de marketeur).

---

## 7. Faiblesses des concurrents existants exploitables

1. **Les généralistes (Abby, Indy, NeedMe, Sinao, MicroDesk)** traitent le SAP comme **une fonctionnalité parmi d'autres** dans un outil de facturation généraliste — pas comme le cœur du produit. Le vocabulaire, l'onboarding, les templates de devis/factures ne sont pas taillés spécifiquement pour les 4-5 métiers SAP typiques (ménage, jardinage, garde d'enfants, bricolage, soutien scolaire). Une UX 100% pensée "carnet de bord SAP" pourrait être plus simple/rapide à prendre en main pour ce public précis.
2. **Les coopératives (Unipros, Accès SAP, FaciliSAP)** demandent un **changement de mode de facturation** plus profond (le client facture parfois "via" la coopérative) et un abonnement fixe élevé (~40€/mois) qui pèse lourd pour un micro-entrepreneur à faible CA/temps partiel — un vrai point de friction identifié dans les avis Unipros eux-mêmes ("la cotisation peut peser lourd en dessous d'un certain seuil"). Un SaaS simple, moins cher (5-15€/mois), qui laisse le micro-entrepreneur garder 100% la main sur sa facturation, cible ce segment "petit CA / temps partiel / débutant" mal servi par les coopératives.
3. **Suivi proactif de l'avance immédiate** : aucun concurrent identifié ne semble se positionner clairement sur le **suivi/relance des dossiers bloqués côté Urssaf** (délais, pièces manquantes, statut du dossier) — alors que c'est exactement le type de douleur documentée dans les témoignages officiels (section 4.1). Un tableau de bord "où en est mon dossier avance immédiate, qu'est-ce qui bloque, que dois-je relancer" serait différenciant, même s'il ne peut pas accélérer l'Urssaf lui-même.
4. **La nouvelle obligation de garantie financière 2026** est très récente (source datée de mars 2026) : peu d'outils ont encore construit une expérience utilisateur claire autour de cette nouvelle contrainte. Fenêtre d'opportunité de contenu + fonctionnalité (checklist de conformité, rappels d'échéance) à court terme.
5. **Prix d'entrée** : NeedMe à 7€/mois et Abby Start à ~6-7€/mois sont déjà très accessibles — il sera difficile de différencier uniquement sur le prix. La différenciation doit venir de la spécialisation métier (SAP uniquement) et de l'accompagnement/contenu, pas du tarif.

---

## 8. Évaluation honnête : preuve de demande suffisante, ou hypothèse non validée ?

**C'est une hypothèse partiellement validée, pas une demande "béante" non adressée.**

Éléments qui **valident** l'existence d'un problème réel :
- Obligation légale complexe et récurrente (attestation avant 31 mars, déclaration Nova trimestrielle, livre de recettes, seuils, et depuis 2026 garantie financière avance immédiate).
- Témoignages officiels documentés de vraies difficultés avec l'avance immédiate (mais liées à l'Urssaf, pas à l'absence d'outil).
- Mouvement des concurrents généralistes vers plus de spécialisation SAP (NeedMe qui vient de lancer sa fonctionnalité dédiée) = signal de traction perçue par des acteurs financés.
- Existence de 3 coopératives payantes dédiées uniquement au SAP = preuve que des gens paient déjà spécifiquement pour déléguer cette complexité.

Éléments qui **tempèrent** :
- Le marché a **déjà plusieurs solutions fonctionnelles et pas chères** (NeedMe 7€/mois avec attestations SAP + avance immédiate + livre de recettes automatique couvre déjà quasiment tout le périmètre de l'idée). Ce n'est donc pas un "océan bleu" : Thomas entrerait sur un marché avec au moins 5-6 concurrents crédibles déjà en place, dont certains avec de très bonnes notes clients (Abby, Indy).
- Aucune preuve "brute" trouvée (verbatims Reddit/forums non filtrés) de gens cherchant activement un outil et n'en trouvant pas — signal faible que la demande insatisfaite soit massive. Ce qui existe surtout, ce sont des plaintes envers l'Urssaf lui-même (structurel, pas résolvable par un SaaS tiers).
- Le nombre total de micro-entrepreneurs SAP est probablement de l'ordre de **quelques dizaines de milliers** (25 000-45 000 estimé) — un marché de niche réel mais pas énorme, avec un TAM abonnement plausible de l'ordre de 2-5M€/an au global (en supposant 20-30% de taux d'adoption d'un outil payant à 5-10€/mois), à partager entre tous les acteurs.

**Verdict de cette section** : il y a une **vraie douleur administrative documentée**, mais **pas un vide concurrentiel** — l'idée devra se différencier finement (spécialisation métier extrême, UX simplifiée, suivi proactif de l'avance immédiate, prix, ou distribution via la crédibilité de pair de Thomas dans les communautés SAP) plutôt que de miser sur "personne ne le fait".

---

## Liste consolidée des sources principales

- https://www.servicesalapersonne.gouv.fr/donnees-et-etudes/chiffres-cles
- https://www.servicesalapersonne.gouv.fr/tout-savoir-sur-les-services-la-personne/etudes-et-donnees-sur-les-services-la-personne
- https://dares.travail-emploi.gouv.fr/publication/les-organismes-de-services-la-personne-en-2021
- https://www.aladom.fr/actualites/secteur-service/6854/quelques-chiffres-sur-les-services-la-personne/
- https://tool-advisor.fr/blog/chiffres-service-a-la-personne/
- https://www.opcoep.fr/ressources/centre-ressources/branches/esap/panorama-des-entreprises-de-services-a-la-personne-opcoep.pdf
- https://abby.fr/logiciel-facturation-sap
- https://abby.fr/tarifs
- https://www.indy.fr/prix/
- https://www.indy.fr/auto-entrepreneur/
- https://needme.fr/tarifs/
- https://needme.fr/fonctionnalites/
- https://needme.fr/nouvelle-fonctionnalite-needme-generation-des-attestations-fiscales-sap/
- https://microdesk.fr/
- https://www.sinao.fr/logiciel/avance-immediate
- https://unipros.coop/
- https://unipros.coop/notre-offre/
- https://fr.trustpilot.com/review/unipros.coop
- https://www.acces-sap.com/professionnels/foire-aux-questions/
- https://www.facilisap.fr/
- https://www.ximi.fr/logiciel-services-a-la-personne/
- https://ogust.com/logiciel-services-a-la-personne/tarifs/
- https://www.plus.transformation.gouv.fr/experiences/3105596_avance-immediate-trop-de-dysfonctionnements
- https://www.plus.transformation.gouv.fr/experiences/4232729_difficultes-rencontrees-pour-obtenir-lavance-immediate
- https://www.coorie.fr/2026/03/25/securiser-le-remboursement-fiscal-en-temps-reel-quelles-obligations-pour-prestataires-et-menages/
- https://www.fedesap.org/
- https://www.fesp.fr/
