# Étude de marché — Idée D : SaaS générique de gestion pour auto-entrepreneurs (France)

Date de la recherche : 2026-07-16
Objectif : déterminer si le marché du "logiciel/app de gestion pour auto-entrepreneurs" (CA, seuils, factures/devis, livre de recettes) est trop saturé pour un développeur solo (5-10h/semaine, 100€ de budget, pas de pub payante, stack Firebase/Vercel).

---

## 1. Acteurs déjà établis — pricing, taille, financement

### Indy (ex-Georges, ex-Georges.tech) — le leader
- Fondée en 2016 à Lyon (Adrien Plat, Côme Fouques, Romain Koenig, Pablo Larvor). Rebaptisée Indy en 2022.
- **Utilisateurs** : 300 000 à 400 000+ indépendants selon les sources (350 000 selon CCIMA, 400 000+ selon la page officielle Indy en 2026).
- **Financement cumulé : ~86 millions d'euros** :
  - 2018 : 1 M€ (Kerala Ventures, Fast Forward)
  - Juin 2019 : 10 M€ Série A (Alven Capital)
  - 2021/2022 : 35 M€ Série B (Singular, Alven, Kerala Ventures) — passage de Georges à Indy
  - Novembre 2023 : 40 M€ Série C (BlackFin Capital Partners, La Maison Partners, iXO Private Equity)
- **300 employés** (Lyon + Paris).
- **Pricing** : offre Free à 0€ (facturation + compte pro + base compta), puis 16€HT/mois (micro-entrepreneur), 28€HT/mois (EI à l'IR), 32€HT/mois (SCI/LMNP), 59€HT/mois (sociétés à l'IS).
- **Consolidation agressive en 2025-2026** : rachat de Lycha (logiciel de facturation de l'insurtech Coover, ~60 000 utilisateurs) en août 2025, puis rachat de Mon-AutoEntreprise.fr (10 000 utilisateurs + communauté Facebook de 120 000 membres + organisme de formation AEcademy) en mai 2026. Ces rachats sont explicitement motivés par la réforme de la facturation électronique (voir section 3).
- Sources : [Usine Digitale — levée 40M€](https://www.usine-digitale.fr/article/indy-leve-40-millions-d-euros-pour-sa-plateforme-de-gestion-dediee-aux-independants.N2198073), [Indy Wikipédia](https://fr.wikipedia.org/wiki/Indy_(logiciel)), [Indy Blog — Georges devient Indy, 35M€](https://www.indy.fr/blog/georges-devient-indy-leve-35-millions-alternative-comptable/), [Tarifs Indy](https://www.indy.fr/prix/), [Maddyness — rachat Lycha](https://www.maddyness.com/2026/05/19/apres-le-logiciel-de-facturation-de-coover-indy-soffre-une-legaltech/), [Le Journal des Entreprises — rachat Mon-AutoEntreprise.fr](https://www.lejournaldesentreprises.com/article/la-fintech-lyonnaise-indy-rachete-mon-autoentreprisefr-2143383)

### Shine (banque pro + facturation + URSSAF)
- Néobanque pour indépendants, **rachetée par la Société Générale en 2020 pour 100 millions d'euros** (70 000 clients à l'époque du rachat). Reste opérée de façon quasi indépendante.
- Depuis 2024, Shine appartient au groupe **Ageras** (spécialiste comptable/bancaire).
- **Pricing 2026** : Free (0€/mois, facturation illimitée), Basic ~7,90€HT, Smart ~14,90€HT (calcul URSSAF + facturation complète — le plus populaire pour les AE), Business ~24,90€HT.
- Sources : [Société Générale — communiqué officiel](https://www.societegenerale.com/en/news/newsroom/societe-generale-announces-acquisition-shine-neobank-entrepreneurs), [Capitaine Banque — rachat Shine](https://www.capitaine-banque.com/actualite-banque/la-societe-generale-rachete-shine-la-banque-pour-freelance/), [Tarifs Shine](https://www.shine.fr/tarifs/), [StackIndep — Shine Prix 2026](https://stackindep.fr/banque-pro/shine-prix)

### Freebe
- Fondée en 2018 par Antoine Legendre (designer freelance).
- **Rachetée par le groupe Tiime** (voir ci-dessous) — pas de levée de fonds indépendante identifiée après le rachat.
- Fonctionnalités : facturation, déclarations URSSAF automatiques, suivi des seuils de micro-entreprise, CRM, suivi du temps, synchronisation bancaire (450+ banques).
- **Pricing** : à partir de 15€/mois (12,50€/mois en annuel) pour micro-entrepreneurs ; 30€/mois pour EI ; 20€/mois pour sociétés.
- Sources : [Maddyness 2018 — lancement Freebe](https://www.maddyness.com/2018/08/08/freebe-freelance-administratif/), [Freebe.me](https://www.freebe.me/), [Les Experts Comptables — avis Freebe](https://les-experts-comptables.fr/avis-freebe)

### Tiime (groupe qui a racheté Freebe)
- Née en 2015 au sein du groupe l-expert-comptable.com, structurée en société en 2017 (RCS Paris).
- Fondée par 6 associés issus de l-expert-comptable.com.
- Positionnement : appli tout-en-un (compta, compte pro, factures, notes de frais) destinée aux experts-comptables ET aux entrepreneurs.
- Tiime Invoice est cité comme référence "gratuite" pour la facturation conforme.
- Source : [Tiime — Qui sommes-nous](https://www.tiime.fr/tiime-qui-sommes-nous), [Les Geeks des Chiffres — histoire Arnaud Doillon](https://www.lesgeeksdeschiffres.com/post/arnaud-doillon)

### Georges → voir Indy (fusion historique, même entité)

### Abby
- Solution de facturation/comptabilité en ligne, plus de **100 000 professionnels indépendants** utilisateurs.
- **Financement** :
  - Levée initiale (montant non précisé dans les sources trouvées)
  - Avril 2023 : 1,2 M€ (Yeast, Tomcat Ventures, Myrtus Venture)
  - Levée plus récente : 3 M€ (menée par Tomcat Ventures et OneGreen, avec Kima Ventures) — objectif rentabilité mi-2026, fonds pour R&D et IA générative.
- **Pricing** : gratuit (facturation + compta de base) ; Start ~6-7,20€/mois ; Pro ~16-26,40€/mois (TVA, tâches, CRM).
- Sources : [Independant.io — levée 1,2M€](https://independant.io/abby-la-solution-cle-en-main-de-gestion-pour-les-entrepreneurs-leve-12-million-deuros/), [Finyear — levée 3M€](https://finyear.com/abby-leve-3-millions-deuros-pour-simplifier-la-gestion-des-independants), [Tarifs Abby](https://abby.fr/tarifs)

### Henrri (groupe Rivalis / Sage)
- Logiciel de facturation gratuit depuis 2016, édité par le groupe Rivalis (racheté depuis par **Sage**, un très gros groupe international de logiciels de gestion).
- **100% gratuit et illimité** — pas de plan payant classique, se finance autrement (modèle indirect, cross-sell Rivalis/Sage).
- Pour la conformité facturation électronique 2026-2027, Henrri s'appuie sur **Pennylane comme Plateforme Agréée (PA)** partenaire — signe que même un acteur "gratuit" doit s'adosser à un acteur licorne pour rester conforme.
- Sources : [Henrri.com](https://www.henrri.com/), [Henrri — pourquoi gratuit](https://www.henrri.com/pourquoi-gratuit/)

### Facture.net
- Logiciel 100% gratuit et sans engagement, positionné "zéro frais" pour micro-entreprises/TPE/PME.
- Note utilisateurs ~8,5/10 selon comparateurs (à prendre avec précaution, sources potentiellement affiliées).
- Version Premium à 9€/mois.
- S'engage à maintenir sa politique zéro frais même après l'entrée en vigueur de la facturation électronique obligatoire (mais nécessitera un partenariat PA comme Henrri).
- Limite reconnue : peu adapté dès que l'activité se complexifie (pas de gestion complète de la compta/fiscalité).
- Sources : [Facture.net](https://www.facture.net/), [Comparateur e-Facturation — avis Facture.net](https://comparateur-efacturation.fr/plateforme/facture-net)

### Banques pro incluant ces fonctionnalités

**Qonto**
- Plus de **600 000 clients professionnels** en 2026, présent dans 8 pays.
- **Financement cumulé : 622 M€**, dont une Série D de 486 M€ en janvier 2022 (Tiger Global, TCV, Alkeon, Eurazeo, KKR, Insight Partners, Exor Seeds, Tencent, DST Global).
- **Valorisation : 4,4 milliards d'euros** — première licorne fintech française par la taille du dernier tour.
- Actionnaire de contrôle : **Crédit Mutuel Arkéa** (groupe bancaire mutualiste avec de multiples filiales fintech : Fortuneo, Leetchi, Pumpkin, Monext…).
- Sources : [Beaboss — Qonto licorne](https://www.beaboss.fr/Thematique/start-up-1271/levee-fonds-2074/Breves/Qonto-leve-486-millions-euros-devient-plus-grosse-licorne-fran-aise-368609.htm), [Business Cool — Qonto licorne](https://business-cool.com/actualites/actu-business/qonto-licorne-plus-valorisee/), [Wikipédia Crédit Mutuel Arkéa](https://fr.wikipedia.org/wiki/Cr%C3%A9dit_mutuel_Ark%C3%A9a)

**Blank**
- Néobanque pro lancée en 2019/2020 par Paul-Henri Blaiset et Simon Parisot, incubée et détenue par le **Crédit Agricole** (groupe bancaire n°1 en France).
- A levé 47 M€ selon Usine Digitale.
- D'après une source, fin 2025 Blank n'aurait pas réussi à rattraper la concurrence locale (Shine, Qonto) en nombre de clients — pas de chiffre officiel trouvé mais positionnement clairement en retrait.
- Sources : [Usine Digitale — Blank lève 47M€](https://www.usine-digitale.fr/article/blank-la-neobanque-pour-les-pros-soutenue-par-credit-agricole-leve-47-millions-d-euros.N2143542), [Crédit Agricole — communiqué Blank](https://presse.credit-agricole.com/blank-la-neo-banque-des-professionnels-independants-nouvelle-startup-du-groupe-credit-agricole/?lang=fra)

### Acteur transversal majeur non cité par l'utilisateur mais central : Pennylane
- Fondée en 2020, plateforme de comptabilité/gestion pour PME et cabinets d'expertise-comptable, avec forte présence indirecte chez les indépendants (notamment via son rôle de PA pour Henrri et d'autres).
- **Licorne** depuis février 2024 (40 M€, Sequoia Capital, DST Global).
- Avril 2025 : 75 M€ additionnels.
- Janvier 2026 : **175 M€** (TCV, Blackstone Growth) → **valorisation 3,5 milliards d'euros**.
- 120 000+ PME clientes, 2 000+ cabinets comptables, 115 M€ d'ARR en 2025 (contre 60 M€ en 2024).
- Sources : [Maddyness — Pennylane 175M€](https://www.maddyness.com/2026/01/20/pennylane-nouvelle-levee-de-fonds-de-175-millions-deuros-pour-la-licorne-francaise/), [Maddyness — Pennylane licorne 40M€](https://www.maddyness.com/2024/02/08/une-nouvelle-levee-de-40-millions-catapulte-pennylane-au-rang-de-licorne/)

**Tableau récapitulatif financement (puissance de feu marketing potentielle)**

| Acteur | Financement cumulé connu | Statut / actionnaire | Utilisateurs |
|---|---|---|---|
| Indy | ~86 M€ | VC (Alven, Singular, BlackFin, iXO...) | 300-400k+ |
| Qonto | 622 M€ | Crédit Mutuel Arkéa + VC internationaux | 600k+ (pro, tous segments) |
| Pennylane | ~330 M€ (40+75+175M€+antérieur) | VC (Sequoia, DST, TCV, Blackstone) | 120k+ PME |
| Shine | rachat 100 M€ par Société Générale | Groupe Ageras (ex-SG) | ~70k+ au moment du rachat |
| Blank | 47 M€ | Crédit Agricole (groupe bancaire) | non communiqué, en retrait |
| Abby | ~4,2 M€ (1,2M€ + 3M€) | VC (Kima Ventures, Tomcat Ventures...) | 100k+ |
| Freebe | rachat par Tiime | Groupe Tiime | non communiqué |
| Henrri | adossé à Sage (groupe coté) | Groupe Rivalis / Sage | non communiqué |
| Facture.net | gratuit, modèle non-VC apparent | indépendant | non communiqué |

---

## 2. Ancienneté, rentabilité, solidité financière

- **Indy** : 10 ans d'existence (2016), très bien financé (86 M€), en pleine phase de consolidation par acquisitions (2 rachats en moins d'un an, 2025-2026). C'est le signe d'un acteur qui joue une stratégie de "land grab" avant la réforme de la facturation électronique — pas du tout un marché qui laisse de la place à un petit nouveau non financé.
- **Shine** : 8-9 ans d'existence (lancé ~2017), déjà racheté deux fois (Société Générale en 2020, puis groupe Ageras en 2024) — c'est un actif consolidé dans des mains d'institutions financières solides, pas une startup fragile.
- **Qonto** : licorne à 4,4 Md€ de valorisation, adossée à un grand groupe bancaire (Crédit Mutuel Arkéa) — solidité maximale.
- **Pennylane** : licorne à 3,5 Md€, ARR doublé en un an (60M€ → 115M€), clairement en croissance forte et rentabilité visée mais pas encore atteinte (typique des licornes en hyper-croissance) — puissance de frappe marketing/produit énorme.
- **Blank** : seul acteur qui semble "en difficulté relative" (pas rattrapé la concurrence) malgré son adossement Crédit Agricole — mais reste soutenu par un grand groupe, donc pas vulnérable financièrement.
- **Abby** : le plus jeune/petit financièrement (4,2 M€ cumulés) parmi les acteurs "SaaS pur" identifiés, vise la rentabilité mi-2026 — c'est le concurrent le "moins surarmé", mais reste très largement au-dessus des moyens d'un développeur solo à 100€.
- **Henrri** : adossé à Sage, groupe coté en bourse (LSE), capacité financière quasi illimitée à l'échelle d'un solo.

**Conclusion section 2** : Tous les acteurs identifiés sont soit des licornes/quasi-licornes VC-backed (Indy, Qonto, Pennylane), soit adossés à des groupes bancaires ou logiciels de premier plan (Shine/Ageras/SG, Blank/Crédit Agricole, Henrri/Sage). Aucun n'est une startup fragile ou near-death. Le marché est mature et consolidé, avec une vague de rachats actuelle (Indy rachète activement) motivée par la réforme de facturation électronique 2026-2027.

Sources (rappel) : voir section 1.

---

## 3. Barrières à l'entrée : SEO et réglementation

### SEO
Recherches effectuées sur les requêtes cibles ("logiciel auto-entrepreneur", "facturation auto-entrepreneur", "meilleur logiciel facturation auto-entrepreneur 2026"). L'accès direct aux pages de résultats Google a été bloqué techniquement (page d'erreur Google), mais l'agrégation de multiples recherches fait clairement ressortir un pattern constant : les résultats qui reviennent systématiquement en tête sont :
- Des **sites comparateurs/affiliés à forte autorité de domaine** : portail-autoentrepreneur.fr, l-expert-comptable.com, comparateur-efacturation.fr, tool-advisor.fr, independant.io, propulsebyca.fr, appvizer.fr, sellsy.com (blog), MAIF (blog), Qonto (blog "logiciel de facturation auto-entrepreneur gratuit"), Pennylane (fiches pratiques).
- Les **pages produit/blog des gros acteurs eux-mêmes** : indy.fr (guides comparatifs "logiciel facturation X"), qonto.com/blog, pennylane.com, tiime.fr, dougs.fr.
- Aucune page de petit indépendant/solo n'apparaît dans le top des résultats trouvés.

**Constat clé** : le SEO sur ces mots-clés est verrouillé à deux niveaux : (1) par les gros acteurs qui produisent eux-mêmes des dizaines d'articles de blog comparatifs optimisés SEO ("Qonto pour vos factures", "10 logiciels de facturation gratuits pour auto-entrepreneur" publié... par Qonto lui-même), et (2) par un écosystème de sites affiliés spécialisés (comparateur-efacturation.fr, tool-advisor.fr, independant.io, portail-autoentrepreneur.fr) qui vivent des commissions d'affiliation versées par ces mêmes gros acteurs. Un nouvel entrant devrait non seulement battre les gros acteurs en SEO direct, mais aussi convaincre ces sites affiliés de le référencer — ce qui suppose un programme d'affiliation avec budget, quasi impossible avec 100€.

Sources : [Qonto Blog — 10 logiciels de facturation gratuits](https://qonto.com/fr/blog/gestion-entreprise/facturation/logiciel-facturation-auto-entrepreneur-gratuit), [Indy — comparatif logiciels compta AE](https://www.indy.fr/guide/comptabilite-en-ligne/logiciel/comparatif/auto-entrepreneur/), [L'Expert-Comptable.com — 5 meilleurs logiciels](https://www.l-expert-comptable.com/a/6961-les-meilleurs-logiciels-de-facturation-pour-auto-entrepreneur.html), [Comparateur e-Facturation](https://comparateur-efacturation.fr/blog/meilleur-logiciel-facturation-auto-entrepreneur-2026)

### Barrière réglementaire nouvelle et majeure : la réforme de la facturation électronique
C'est la découverte la plus importante de cette recherche pour l'évaluation des barrières à l'entrée :
- À partir du **1er septembre 2026**, toutes les entreprises (y compris micro-entrepreneurs) doivent pouvoir **recevoir** des factures électroniques via une **Plateforme Agréée (PA, ex-PDP)**.
- À partir du **1er septembre 2027**, les micro-entreprises devront aussi pouvoir **émettre** leurs factures via une PA.
- Une PA est un statut délivré par la **DGFiP** après un processus d'immatriculation technique et sécuritaire qui prend **6 à 12 mois**. 137 PA sont immatriculées en France à ce jour (juillet 2026).
- **Un développeur solo ne peut pas raisonnablement devenir lui-même PA** (délai, exigences techniques et de sécurité, coûts). Il devrait donc **intégrer l'API d'une PA tierce** (ex. Pennylane, qui sert déjà de PA à Henrri) pour rester conforme d'ici 2027 — ce qui ajoute une dépendance technique et potentiellement des coûts, et le rend commercialement dépendant d'un concurrent direct (Pennylane vend aussi ses propres solutions).
- Cette réforme est justement la raison invoquée par Indy pour ses rachats agressifs en 2025-2026 (Lycha, Mon-AutoEntreprise.fr) : "le marché ressemble de plus en plus à une course à la consolidation où chaque acteur cherche à atteindre une taille critique avant que la réforme ne rebatte les cartes."

Sources : [Portail Auto-Entrepreneur — facture électronique obligatoire](https://www.portail-autoentrepreneur.fr/academie/gestion-auto-entreprise/facturation/facture-electronique-obligatoire), [Pennylane — obligation AE](https://www.pennylane.com/fr/fiches-pratiques/facture-electronique/obligation-pour-les-auto-entrepreneurs), [Comparateur e-Facturation — liste des 137 PA](https://comparateur-efacturation.fr/guide/liste-plateformes-agreees), [Infonet — rachat Lycha par Indy](https://infonet.fr/actualite/nouveautes/indy-lycha-facturation-electronique/)

---

## 4. Angle de niche non couvert par les généralistes ?

Constats :
- Les métiers réglementés (professions de santé : infirmiers, médecins, etc.) sont **exclus du régime micro-entrepreneur** — ce ne sont donc pas des niches accessibles pour un SaaS "auto-entrepreneur".
- Pour les métiers non réglementés compatibles avec le régime micro (coachs, consultants, graphistes, développeurs, artisans BTP en micro, photographes, etc.), il existe déjà des solutions verticalisées : Obat/Tolteck/ProGBat pour le BTP, Agathe You pour les infirmiers libéraux (hors micro), NeedMe pour les créatifs/graphistes.
- Les comparateurs eux-mêmes notent qu'"un logiciel générique peut parfaitement convenir à un consultant… mais être totalement inadapté" à des métiers à contraintes spécifiques — ce qui confirme qu'il existe une logique de niche verticale, mais elle est **déjà partiellement occupée par des outils spécialisés** (souvent pas spécifiquement "micro-entrepreneur" mais orientés métier).
- Angle potentiellement encore libre : des micro-niches très spécifiques et mal servies par le SEO généraliste actuel, par exemple des combinaisons métier + statut très précises (ex. "micro-entrepreneur BNC + professions créatives non réglementées avec suivi de droits d'auteur", "auto-entrepreneurs en franchise TVA avec activité mixte BIC/BNC" — un vrai casse-tête réglementaire mal couvert même par les généralistes), ou un outil ultra-simple à message unique ("juste l'alerte de seuil TVA/CA, rien d'autre") pour capter les gens qui ne veulent pas d'un outil complet et payant.
- Le point de bascule 2026-2027 (facturation électronique) crée une fenêtre d'anxiété/recherche d'information à court terme, mais c'est aussi le moment où les gros acteurs consolident le plus agressivement (cf. Indy).

**Conclusion section 4** : Un angle de niche existe en théorie (vertical métier très précis, ou fonctionnalité unique hyper-simple comme "juste l'alerte de seuils"), mais aucune niche flagrante et non défendue n'a été identifiée dans le champ des micro-entrepreneurs générique. Les niches métiers évidentes (BTP, santé, création) sont déjà couvertes par des outils spécialisés ou exclues du régime micro.

Sources : [Kandbaz — logiciel gestion niche AE](https://www.mes-logiciels.com/erp-niche-auto-entrepreneurs/), [LegalPlace — AE et activité libérale](https://www.legalplace.fr/guides/auto-entrepreneur-activite-liberale/), [Payflo — logiciels gestion artisan BTP](https://payflo.fr/blog/meilleurs-logiciels-gestion-artisan-btp-guide-complet/)

---

## 5. Preuve de demande réelle — mais accessible à un solo ?

- **3,186 millions d'auto-entrepreneurs administrativement actifs** fin juin 2025 (+204 000 sur un an) selon URSSAF/janvier 2026.
- **758 600 micro-entreprises créées en 2025** (+6% vs 2024), plus haut niveau historique depuis la création du régime en 2009.
- Chiffre d'affaires agrégé déclaré : 8,05 Md€ au T2 2025 (+5,2% sur un an).
- MAIS : **seuls 49,8% des micro-entrepreneurs déclarent un chiffre d'affaires positif** sur un trimestre donné — une part significative du "marché" n'a pas d'activité réelle et n'a donc pas vraiment besoin d'un outil de gestion payant.
- Le marché existe indéniablement (des millions d'utilisateurs potentiels, un flux constant de nouveaux entrants chaque année) — mais **l'accessibilité de la demande** dépend entièrement des canaux d'acquisition, et sur ce marché ces canaux (SEO, comparateurs affiliés, partenariats banques, notoriété de marque, bouche-à-oreille dans les communautés officielles type Mon-AutoEntreprise.fr) sont déjà largement occupés par les acteurs identifiés en section 1, avec des budgets marketing sans commune mesure avec 100€.
- Le seul canal réellement accessible à un solo sans budget serait le contenu organique (communautés Reddit/Facebook, réseaux sociaux, bouche-à-oreille), mais Indy possède déjà une communauté Facebook de 120 000 membres (rachetée via Mon-AutoEntreprise.fr), ce qui illustre à quel point même les canaux "gratuits/communautaires" sont déjà consolidés par les leaders.

Sources : [Open.Urssaf — auto-entrepreneurs par secteur](https://open.urssaf.fr/explore/dataset/auto-entrepreneurs-par-secteur-dactivite/), [TPEActu — 49,8% déclarent un CA](https://tpeactu.fr/2026/01/29/auto-entrepreneurs-chiffre-affaires-urssaf-2025/), [Optigest+ — bilan 2025 auto-entrepreneurs](https://optigestplus.org/2026/05/10/auto-entrepreneur-en-france-le-bilan-2025-en-chiffres-statistiques-ca-secteurs/)

---

## 6. Verdict argumenté

**Un développeur solo avec 100€ de budget et 5-10h/semaine ne peut pas réalistement percer sur ce marché généraliste.** Les raisons, en ordre d'importance :

1. **Puissance de feu financière écrasante et sans commune mesure** : Indy (86 M€), Qonto (622 M€, valorisation 4,4 Md€, adossé à Crédit Mutuel Arkéa), Pennylane (330 M€+, valorisation 3,5 Md€), Shine (racheté 100 M€ par la Société Générale, puis groupe Ageras), Blank (Crédit Agricole), Henrri (Sage), Abby (4,2 M€, le "petit" du lot). Même le concurrent le moins financé dispose de 40x le budget de Thomas.
2. **SEO déjà verrouillé** sur toutes les requêtes cibles par les gros acteurs eux-mêmes (qui produisent du contenu de blog comparatif à grande échelle) et par un écosystème de sites affiliés qui vivent des commissions versées par ces mêmes acteurs.
3. **Nouvelle barrière réglementaire structurelle** : la réforme de facturation électronique (réception obligatoire dès septembre 2026, émission dès septembre 2027) impose de passer par une Plateforme Agréée DGFiP — processus de 6 à 12 mois, ou dépendance technique/commerciale à un concurrent (Pennylane). C'est précisément la raison pour laquelle Indy rachète agressivement ses concurrents plus petits en ce moment : le marché est en pleine consolidation, pas en phase d'ouverture.
4. **Consolidation active en cours** : les rachats d'Indy (Lycha, Mon-AutoEntreprise.fr) en 2025-2026 montrent que même les acteurs de taille moyenne se font absorber plutôt que de percer seuls.
5. **Demande réelle mais canaux d'accès déjà occupés** : 3,2M d'auto-entrepreneurs actifs et 758 600 créations en 2025, mais les canaux gratuits (SEO, communautés) sont déjà consolidés (communauté Facebook de 120k membres rachetée par Indy).

**Une niche verticale très précise reste théoriquement envisageable** (ex. un outil mono-fonction ultra-simple centré uniquement sur l'alerte de seuils CA/TVA pour un public anxieux face à la complexité, ou un vertical métier non réglementé et mal desservi), mais ce n'est plus l'idée "SaaS généraliste de gestion pour auto-entrepreneurs" telle que décrite — et même une niche demande une vraie stratégie de distribution que 100€/5-10h par semaine peine à financer face à des concurrents qui possèdent déjà les communautés et le SEO.

---

# SYNTHÈSE (≤350 mots)

**Verdict : NO-GO** pour un SaaS généraliste de gestion auto-entrepreneur (CA, seuils TVA/micro-BIC/micro-BNC, factures/devis, livre de recettes) lancé en solo avec 100€ et 5-10h/semaine.

**Acteurs dominants et financement** : le marché est occupé par des poids lourds très largement financés. **Indy** (ex-Georges, 2016, Lyon) a levé **86 M€** au total, revendique 300-400k utilisateurs, 300 salariés, et rachète activement ses concurrents (Lycha en 2025, Mon-AutoEntreprise.fr en 2026). **Qonto**, banque pro incluant facturation, est une **licorne à 4,4 Md€** (622 M€ levés), contrôlée par le Crédit Mutuel Arkéa, avec 600 000 clients pro. **Pennylane**, acteur transversal de la comptabilité (partenaire PA d'Henrri notamment), est une licorne à **3,5 Md€** (330 M€+ levés, ARR doublé à 115 M€ en 2025). **Shine** a été racheté 100 M€ par la Société Générale en 2020, puis revendu au groupe Ageras. **Blank** est adossé au Crédit Agricole. **Henrri** appartient au groupe Sage (coté en bourse). Même **Abby**, le plus modeste financièrement (4,2 M€), pèse 40 fois le budget de Thomas.

**Saturation SEO** : totale. Les requêtes "logiciel auto-entrepreneur" et "facturation auto-entrepreneur" sont dominées par le contenu produit par les gros acteurs eux-mêmes (blogs Qonto, Indy, Pennylane) et par un écosystème de sites affiliés qui vivent de leurs commissions. Aucune place organique visible pour un nouvel entrant sans budget.

**Barrière supplémentaire critique découverte** : la réforme de facturation électronique (réception obligatoire dès septembre 2026, émission dès septembre 2027) impose de transiter par une Plateforme Agréée DGFiP (processus 6-12 mois) ou de dépendre techniquement d'un concurrent. C'est la raison même de la vague de rachats actuelle chez Indy — le marché consolide, il ne s'ouvre pas.

**Angle de niche possible** : pas de niche généraliste évidente non couverte (les verticaux métier type BTP/santé/création ont déjà leurs outils spécialisés, ou sont exclus du régime micro). La seule piste réaliste serait un **outil mono-fonction ultra-simple** (juste l'alerte de seuils CA/TVA, sans facturation complète) visant un public anxieux non servi par les usines à gaz — mais cela reste un pari de distribution, pas une garantie de succès face à des acteurs qui possèdent déjà le SEO et les communautés.
