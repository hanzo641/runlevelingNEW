# Round 3 — Idée 3 : Outil combiné Changelog public + Status page pour indie makers

Recherche effectuée le 2026-07-17. Marché ciblé : international anglophone, indie makers / petits SaaS.

---

## 1. Concurrents changelog

### Canny
- Pricing : Free (jusqu'à 25 "tracked users", changelog complet, roadmap public) ; Starter ~$19/mo (annuel, jusqu'à 100 tracked users) ; Growth/Pro $79/mo (annuel, custom domain, segmentation, jusqu'à 10 sièges admin).
- Facturation au "tracked user" = imprévisible, peut grimper vite. Positionnement plutôt mid-market/enterprise malgré un free tier généreux.
- Sources : [Canny pricing blog](https://www.productlogz.com/blog/canny-pricing), [ReleasePad Canny alternatives](https://www.releasepad.io/blog/canny-alternatives/), [Peeqback — Canny alternatives for indie hackers](https://peeqback.com/blog/canny-alternative-for-indie-hackers)

### Beamer
- Starter $49/mo (annuel) plafonné à 5 000 MAU ; Pro $99/mo (10k MAU) ; Scale $249/mo (50k MAU). Add-ons Feedback et NPS à $99/mo chacun. Coût total réaliste $200-700+/mo avec add-ons.
- Free tier existe mais plafonné à 1 000 MAU avec branding Beamer imposé.
- Clairement positionné au-dessus du budget indie maker dès qu'on dépasse le free tier.
- Sources : [ProductLift Beamer pricing](https://www.productlift.dev/blog/beamer-pricing/), [Worknotes Beamer pricing breakdown](https://www.worknotes.ai/blog/beamer-pricing-full-breakdown), [Featurebase Beamer pricing](https://www.featurebase.app/blog/beamer-pricing)

### LaunchNotes
- Growth $249/mo (annuel, 2 utilisateurs), vente par démo, pas de palier bas. 100% enterprise/mid-market, hors de portée et hors cible pour un indie maker.
- Source : [Canny — best changelog tools](https://canny.io/blog/best-changelog-tools/)

### Headway
- Free plan solide (changelog illimité, widget, catégories perso) ; Pro $29/mo (whitelabel, domaine custom, intégrations, gestion d'équipe). Manque emails et segmentation même en payant.
- Explicitement recommandé pour "indie builders qui veulent quelque chose de rapide et propre sans se soucier des emails".
- Source : [Featurebase Headway alternatives](https://www.featurebase.app/blog/headway-alternatives)

### Frill
- Startup $25/mo (50 idées, 1 survey) ; Business $49/mo ; Growth $149/mo ; Enterprise $349/mo. Utilisateurs et tracked users illimités à tous les paliers — plus prévisible que Canny mais point d'entrée payant plus élevé que Headway.

### ReleaseNotes.io
- Positionnement changelog dédié sans suite complète ; pricing non communiqué clairement publiquement dans les sources trouvées (à vérifier sur le site directement). Le point faible identifié : dès qu'on veut onboarding/annonces/analytics/feedback dans le même flux, il faut empiler d'autres outils.
- Source : [ReleaseNotes.io](https://www.releasenotes.io/)

### Sleekplan (indie-friendly, à noter particulièrement)
- Plan **Indie à $13/mo**, un des feedback+changelog tools payants les moins chers du marché ; utilisateurs finaux/feedback/abonnés illimités. Existe aussi en free tier basique.
- Explicitement recommandé pour "solo builders et indie founders qui veulent feedback + changelog en un outil simple".
- Source : [Sleekplan pricing](https://sleekplan.com/pricing/)

### Autres outils indie-friendly identifiés
- **ChangeCrab** — "Changelogs as a Service", à partir de $19,95/mo, free plan existant. Important : **a déjà ajouté un mini status-page** via une intégration StatusCake, disponible sur tous les plans payants (voir section 3).
- **Quackback** — outil de changelog open source, auto-hébergeable ou cloud managé, notifie automatiquement chaque votant quand une feature ship, release notes rédigées par IA.
- **gittomarket.io** — génère automatiquement des "shipping artifacts" (stat cards, posts réseaux sociaux, page de build publique) à partir des commits GitHub. Free (10 auto-posts/mois) ; Pro $29/mo ; offre "founding beta" à $9/mo à vie pour les 20 premiers. Explicitement ciblé indie makers/solo founders. Ce n'est pas un changelog classique mais un concurrent direct sur l'angle "auto-génération depuis GitHub".
- **Next Release** — automatise entièrement les release notes depuis GitHub (1000+ releases créées par ses clients), édition possible avant publication. Pricing non trouvé précisément.
- **ReleaseLog** (releaselog.app) — voir section 3, c'est LE concurrent direct combo changelog+roadmap+feature requests, lancé récemment sur Product Hunt/Indie Hackers.
- **GitHub Releases natif** — gratuit, déjà là pour tout projet open/privé sur GitHub. Limite : non "portable" (affiché seulement dans le contexte GitHub, pas terrible pour un site marketing), mais reste l'option par défaut à coût zéro que beaucoup d'indie makers utilisent avant de payer quoi que ce soit.

**Conclusion changelog** : le marché est déjà dense (Canny, Beamer, LaunchNotes = trop chers/enterprise ; Headway, Frill, Sleekplan, ChangeCrab, Quackback = déjà positionnés indie-friendly avec des prix $0-25/mo). Il y a peu d'espace de prix vraiment vide en dessous de Sleekplan/Headway.

---

## 2. Concurrents status page

### UptimeRobot
- Free ($0) : 50 moniteurs, intervalle 5 min, **1 status page basique incluse**, 3 mois de rétention, 5 intégrations tierces. **Restriction importante : le plan Free est réservé à un usage personnel/non-commercial** (donc en théorie pas utilisable tel quel pour un vrai SaaS commercial, mais dans les faits très largement utilisé par des micro-SaaS qui l'ignorent ou n'appliquent pas la règle).
- Solo $9-10/mo, Team $38-45/mo, Enterprise $69-82/mo.
- Confirme le pattern déjà identifié dans une recherche précédente : un free tier très généreux qui écrase la volonté de payer pour une simple status page basique.
- Sources : [UptimeRobot pricing](https://uptimerobot.com/pricing/), [notifier.so UptimeRobot pricing 2026](https://notifier.so/guides/uptimerobot-pricing-2026/), [Instatus — UptimeRobot pricing](https://instatus.com/blog/uptimerobot-pricing)

### Statuspage.io (Atlassian)
- $29/mo (Hobby, limité) jusqu'à $399/mo (Business) ou $1 499/mo (Enterprise). Le standard historique mais jugé cher et enterprise par la communauté indie hacker ("$50+/mo pour une status page, c'est absurde" — sentiment exprimé dans les comparatifs).

### Better Stack
- Free : 1 status page, 10 moniteurs (heartbeats), gestion d'incidents basique. Payant à l'usage (pay-as-you-go) : ~$24/mo pour 50 moniteurs + 1 status page + 2 membres.

### Instatus
- Free avec coéquipiers et abonnés illimités ; Pro à partir de $20/mo (aussi vu à $15/mo selon la source) ; Business $300/mo. Architecture Jamstack réputée très rapide, "les plus belles status pages" citées dans plusieurs comparatifs. A récemment ajouté du monitoring basique (50 moniteurs, 4 régions sur Pro).

### Hyperping
- Tout-en-un monitoring + status page + on-call, dès $29/mo (un comparatif indique aussi un point d'entrée à $24/mo flat-rate). Free : 20 moniteurs, 1 status page limitée.

### OpenStatus (open source)
- Free/Hobby : 1 moniteur, 1 status page (3 composants), check toutes les 10 min. Starter $25-30/mo, Pro $83-100/mo, Scale $416-500/mo. Combine déjà monitoring + status page en un seul outil open source, auto-hébergeable.

### Chirp
- Outil status page/monitoring explicitement "built for indie hackers", setup ~2 min, monitoring uptime/SSL/heartbeat cron jobs. Recommandé aux côtés d'UptimeRobot comme meilleur point de départ pour solo founders.

**Conclusion status page** : oui, confirmé — **UptimeRobot (et dans une moindre mesure Better Stack et OpenStatus) proposent déjà une status page gratuite largement suffisante** pour un micro-SaaS qui n'a pas des besoins d'incident management sophistiqués. C'est un frein sérieux à la monétisation d'une simple status page, exactement comme identifié dans la recherche précédente sur les outils d'uptime (mentionnée dans le brief). Le segment payant qui reste (Hyperping, Instatus, Chirp, OpenStatus payant) est déjà occupé par des acteurs légers et pas chers ($15-30/mo) spécifiquement positionnés indie/solo.

---

## 3. Existe-t-il déjà un outil combiné changelog + status page ?

**Oui, plusieurs, et c'est la découverte la plus importante de cette recherche.**

### ReleaseLog (releaselog.app)
- Trouvé via Indie Hackers — décrit comme "changelog, roadmap, and feature requests all in one place, powered by AI". Un post Indie Hackers le décrit explicitement comme lancé sur Product Hunt le 13 mai (2026) en tant que **"changelog/status page product"**.
- Widget "What's New" flottant embarquable, changelog public SEO-friendly, roadmap et feature requests connectés.
- Le site releaselog.app n'a pas pu être atteint directement via fetch (DNS/résolution échouée pendant la recherche), donc pricing exact non confirmé — mais sa présence confirme qu'un développeur indépendant a déjà identifié et attaqué ce créneau très récemment (2026).
- Sources : [ReleaseLog sur Indie Hackers](https://www.indiehackers.com/ReleaseLog), [post PH launch mention](https://www.indiehackers.com/post/one-big-fresh-lesson-learned-from-product-hunt-launch-do-not-forget-to-update-status-4ffd63ebb3)

### ChangeCrab
- "Changelogs as a Service" à partir de $19,95/mo, avec **intégration StatusCake ajoutant une mini status-page en haut de la page de changelog**, disponible sur tous les plans payants. C'est très exactement le combo envisagé par Thomas (changelog + status en un seul outil), déjà en prod.
- Source : [ChangeCrab StatusCake integration](https://changecrab.com/blog/31/new-changecrab-x-statuscake-integration-launched)

### OpenStatus
- Combine déjà status page + monitoring (pas de changelog en tant que tel, mais publie son propre changelog produit — positionnement légèrement différent, orienté "compliance-first status page" pour devs).

**Conclusion sur la différenciation** : L'angle "un seul outil changelog + status page pas cher pour indie makers" n'est **pas un océan bleu** — il existe déjà au moins deux acteurs (ReleaseLog, ChangeCrab) qui l'ont identifié et lancé, et un troisième (gittomarket) qui attaque l'angle "auto-génération depuis GitHub" adjacent. ReleaseLog en particulier semble avoir été conçu par un pair indie hacker très récemment (2026), ce qui suggère que l'idée est dans l'air du temps mais aussi qu'elle est déjà contestée. La fenêtre de "premier arrivé" est probablement déjà fermée ou en train de se fermer.

---

## 4. Preuves de demande réelle

- Sur Indie Hackers, plusieurs threads confirment une vraie douleur autour du changelog : "Most users assume your product is abandoned — here's why that's a retention problem" (lien direct avec la valeur d'un changelog visible), "Do you keep a public changelog for your product?", "Do you maintain release notes/changelog for your saas?". Ces discussions montrent un intérêt réel pour le *concept* de changelog, mais **peu de plaintes explicites sur le prix ou l'absence d'outil abordable** — la conversation tourne plus autour de "est-ce que je devrais en tenir un" que "je n'arrive pas à trouver d'outil pas cher".
- Sur le pricing, un thread confirme que "Canny peut être cher quand on démarre" et que Sleekplan/Nolt sont cités comme alternatives moins chères déjà connues de la communauté — preuve que la communauté connaît déjà des solutions indie-friendly, ce qui réduit la douleur non résolue.
- Côté status page, plusieurs articles de blog (Chirp, Hyperping) affirment frontalement que "$50+/mo pour une status page c'est absurde pour un solo founder" — mais ce sont des articles de tools concurrents eux-mêmes indie-friendly (contenu marketing), pas des posts spontanés de plainte d'utilisateurs. Aucune plainte brute trouvée sur Reddit (r/SaaS, r/microsaas) via les recherches effectuées — les résultats Reddit étaient quasi vides sur ce sujet précis, ce qui est en soi un signal faible (le sujet ne génère pas de discussions organiques importantes sur Reddit).
- Aucun thread Hacker News "Show HN" trouvé spécifiquement demandant un outil changelog+status combiné pas cher ; les discussions HN trouvées portent sur des outils techniques de génération de changelog (git-cliff) plutôt que sur la demande commerciale.
- Le fait que ReleaseLog et gittomarket aient été lancés/promus récemment (2026) par des indie hackers pour ce créneau exact est en soi une preuve indirecte de demande perçue par des pairs — mais aussi une preuve de concurrence déjà active.

**Verdict preuve de demande : modérée et indirecte, pas de plainte massive et explicite trouvée. La demande existe (changelog = pratique reconnue comme bonne pour la rétention) mais elle n'est pas non-servie : plusieurs options $0-25/mo existent déjà et sont citées par la communauté elle-même.**

---

## 5. Taille de marché

Approximations faute de chiffre officiel unique :
- Product Hunt : plus de 500 soumissions de produits par jour en 2026 (beaucoup de doublons/bruit, mais ordre de grandeur ~15 000+ lancements/mois si on prend le chiffre brut).
- Indie Hackers : newsletter à 100 000 abonnés (a stagné ~30k pendant des années avant de percer ces deux dernières années) ; jusqu'à 20 000 visiteurs quotidiens sur le forum.
- Pas de chiffre fiable trouvé sur le nombre total de "produits indie actifs" cumulés sur Product Hunt ou Indie Hackers (les recherches sur les totaux/milestones n'ont rien donné de précis).
- Estimation raisonnable : l'audience adressable en "reach" (newsletter + forum + PH) est de l'ordre de dizaines de milliers à ~100k personnes, mais le sous-ensemble de produits indie ayant (a) des utilisateurs payants existants, (b) la discipline de tenir un changelog/status page, et (c) un budget dédié à ce type d'outil est vraisemblablement beaucoup plus restreint — probablement quelques milliers de produits actifs à un instant T dans le monde entier, à mettre en face d'au moins 6-8 concurrents directs déjà identifiés (Headway, Frill, Sleekplan, ChangeCrab, Quackback, ReleaseLog, UptimeRobot free, Instatus, Hyperping, OpenStatus, Chirp...).

**C'est un marché de niche réel mais déjà fragmenté entre de nombreux petits acteurs, pas un marché énorme et vide.**

---

## 6. Faisabilité d'acquisition organique

- Product Hunt reste un canal valide et gratuit : Thomas, développeur solo, a une légitimité de pair complète pour y lancer un produit destiné à d'autres indie makers. Cependant la concurrence y est déjà passée (ReleaseLog y a été lancé en 2026), donc l'effet de nouveauté est réduit.
- Indie Hackers (forum + "build in public" posts + product page) est un canal cohérent et gratuit, bien adapté à un dev solo qui peut documenter sa propre traction.
- Twitter/X "build in public" est également plausible : c'est une audience qui *elle-même* utilise des changelogs/updates publics comme format de contenu, donc le produit peut être son propre canal de démonstration (dogfooding visible).
- Ces canaux sont réalistes pour Thomas avec 5-10h/semaine, mais ils sont aussi les canaux que *tous* les concurrents indie (ReleaseLog, gittomarket, Quackback, Chirp, Next Release) utilisent déjà pour se faire connaître — donc pas d'avantage différenciant sur la distribution, juste un accès égal à un canal saturé de produits similaires.

---

## 7. Verdict

Voir synthèse ci-dessous.
