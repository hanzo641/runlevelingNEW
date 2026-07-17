# Round 4 — Scan de déclencheurs techniques récents (2025-2026)

Objectif : identifier des évolutions techniques/plateforme très récentes créant une fenêtre d'opportunité fraîche pour un micro-SaaS mondial, développeur solo, stack JS/TS/React/RN/Expo/Firebase, pas de VPS, 5-10h/semaine, budget ≤100€, abonnement Stripe.

Méthode : recherche web intensive sur 5 axes (MCP/agents IA, dépréciation cookies, nouvelles capacités modèles IA, nouveaux frameworks, autres signaux "opportunity gap 2026"). Toutes les notes brutes ci-dessous, classement final en bas.

---

## Axe 1 — Écosystème MCP (Model Context Protocol) et agents IA

### 1.1 État général de l'écosystème MCP en 2026
- L'écosystème est déjà large ("crossing 97 million monthly SDK downloads in early 2026", "500+ public MCP servers"). Le goulot d'étranglement n'est plus le protocole mais la **découverte** (quand construire vs. quand trouver un serveur existant).
- Gap le plus cité : **intégration knowledge base native** (le plus demandé, non couvert uniformément).
- Problème de design répété : serveurs à 50+ tools où les agents "trébuchent" dans la sélection d'outils → mauvaise UX agent, pas un produit en soi mais un signal de qualité générale médiocre.
- Sources : [MCP Server Ecosystem in 2026 (dev.to)](https://dev.to/sahil_kat/the-mcp-server-ecosystem-in-2026-integration-layer-for-ai-agents-2mln), [MCP Dev Summit 2026 Readout](https://www.digitalapplied.com/blog/mcp-dev-summit-2026-readout-protocol-roadmap-analysis), [MCP Market — Developer Tools](https://mcpmarket.com/categories/developer-tools)

### 1.2 Observabilité MCP — GAP CONFIRMÉ PAR LA ROADMAP OFFICIELLE
- La roadmap officielle MCP (modelcontextprotocol.io) cite explicitement 4 manques : audit trails/observabilité structurés compatibles SIEM/APM, auth enterprise SSO, patterns gateway/proxy, portabilité de config entre clients.
- "Le point de douleur opérationnel en production, c'est l'observabilité à travers plusieurs serveurs — fan-out de requêtes, échecs partiels d'outils, dérive silencieuse de schéma entre versions de serveur."
- "Pas d'audit trail standardisé actuellement" — écart largement cité par les équipes IA enterprise en 2026.
- Ces solutions existantes (WorkOS, gateways) sont **enterprise-first**, pas des outils self-serve pour un développeur indie qui publie/exploite 1 à quelques serveurs MCP.
- Sources : [Roadmap MCP officiel](https://modelcontextprotocol.io/development/roadmap), [WorkOS — Everything your team needs to know about MCP in 2026](https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026), [The New Stack — MCP roadmap 2026](https://thenewstack.io/model-context-protocol-roadmap-2026/), [StackOne — MCP in production](https://www.stackone.com/blog/mcp-where-its-been-where-its-going/)

### 1.3 Sécurité MCP — CVEs en forte hausse
- Plus de 30 CVE déposées contre des serveurs MCP en une fenêtre de 60 jours début 2026, 43% de type command-injection.
- OWASP MCP Top 10 en beta depuis avril 2026.
- Outils existants : Cisco AI Defense MCP Scanner, Snyk Agent Scan, MCP-Scan (open-source) — plutôt orientés scan de code/dépendances, portés par des acteurs sécurité établis (Cisco, Snyk) → difficile à concurrencer frontalement pour un solo dev, mais ce sont des outils "scanner", pas des outils "monitoring continu abordable".
- Enterprises découvrent 3-10x plus de déploiements MCP que prévu par l'IT ("shadow MCP").
- Sources : [Cisco mcp-scanner (GitHub)](https://github.com/cisco-ai-defense/mcp-scanner), [Snyk agent-scan (GitHub)](https://github.com/snyk/agent-scan), [State of MCP Registries — safedep.io](https://safedep.io/the-state-of-mcp-registries/), [State of MCP Security 2026 — PipeLab](https://pipelab.org/blog/state-of-mcp-security-2026/), [MCP Security Statistics 2026 — Practical DevSecOps](https://www.practical-devsecops.com/mcp-security-statistics-2026-report/)

### 1.4 Testing MCP — outils existent mais incomplets pour indie/CI
- FastMCP Client, mcp-testing-framework, mcp-testing-kit (thoughtspot), Apify Tester MCP Client : bons pour tests unitaires locaux.
- Gap identifié explicitement : "MCP Inspector fonctionne bien pour un développeur individuel qui debug son serveur, mais manque de fonctionnalités pour le testing en équipe, le tracking historique, ou l'intégration CI/CD — c'est un outil de développement, pas une plateforme de test complète."
- → Espace pour un outil léger "CI/CD + historique de tests pour serveurs MCP" à destination des devs indie qui publient des serveurs MCP commerciaux.
- Sources : [MCPcat — Unit Testing MCP Servers](https://mcpcat.io/guides/writing-unit-tests-mcp-servers/), [mcp-testing-framework (GitHub)](https://github.com/haakco/mcp-testing-framework), [mcp-testing-kit (GitHub)](https://github.com/thoughtspot/mcp-testing-kit)

### 1.5 Claude Agent Skills — sécurité, un angle TRÈS FRAIS (format lancé fin 2025)
- Étude Snyk "ToxicSkills" (2026) : 36% des agent skills scannées contiennent des failles de sécurité, 1467 skills vulnérables/payloads malicieux trouvés visant OpenClaw, Claude Code, Cursor.
- "Publier une skill sur ClawHub ne demande qu'un fichier SKILL.md et un compte GitHub vieux d'une semaine — pas de signature de code, pas de revue de sécurité, pas de sandbox par défaut."
- Février 2026 : première campagne de malware coordonnée documentée contre les utilisateurs Claude Code/OpenClaw, 30+ skills malveillantes distribuées via ClawHub. 91% des skills malveillantes combinent prompt injection + malware traditionnel.
- Incident : 1184 skills malveillantes ont inondé un registre majeur via 12 comptes éditeurs ; au pic, 5 des 7 skills les plus téléchargées étaient des malwares confirmés.
- Outils existants : SkillsDirectory.com (scan sécurité, mais positionné CISO/enterprise), Snyk Agent Scan (enterprise). **Pas d'outil self-serve grand public/pas cher pour un utilisateur individuel ou petite équipe qui veut vérifier une skill avant de l'installer**, à la manière d'un "VirusTotal pour skills Claude/agents IA".
- L'écosystème de marketplaces de skills est passé de 1 registre en décembre 2025 à 8 marketplaces majeures en Q2 2026 (skills.sh, Agensi, ClaudeSkills.info...) — croissance rapide = fenêtre encore ouverte.
- Sources : [Snyk ToxicSkills](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/), [Cloud Security Alliance — 5 Claude Agent Skills Risks](https://cloudsecurityalliance.org/blog/2026/06/25/5-claude-agent-skills-risks-every-ciso-should-know), [SkillsDirectory security](https://www.skillsdirectory.com/security), [Datadog Security Labs — malicious skills supply chain](https://securitylabs.datadoghq.com/articles/malicious-skills-supply-chain-risks-in-coding-agents-with-dynamic-context/), [arXiv — SkillJect prompt injection](https://arxiv.org/pdf/2602.14211), [Agensi — 7 AI Agent Skills Marketplaces](https://www.agensi.io/learn/best-ai-agent-skills-marketplaces-2026)

### 1.6 Facturation/usage pour agents IA (billing)
- Stripe a lancé (private preview, waitlist) des capacités de metering/billing IA dans Stripe Billing + Metronome — pensé pour facturer par token/appel API/tâche agent. Marché confirmé mais **outillage encore en preview, orienté moyennes/grandes entreprises SaaS IA**, pas un starter kit simple pour un solo dev qui veut ajouter du metered billing à son propre produit.
- Sources : [PYMNTS — Stripe usage-based AI billing](https://www.pymnts.com/news/artificial-intelligence/2026/stripe-introduces-billing-tools-to-meter-and-charge-ai-usage/), [Stripe usage-based billing](https://stripe.com/billing/usage-based-billing), [Stripe docs — Agents and AI](https://docs.stripe.com/agents)

### 1.7 Garde-fous de dépenses IA ("spend guardrails") — pain point réel et chiffré
- Anecdotes fortes : une entreprise a "cramé" tout son budget IA 2026 en avril après déploiement d'agents pour ses développeurs ; une autre a dépensé 500M$ en un mois sans plafond d'usage ; Microsoft a annulé des licences Claude Code internes à cause de factures de tokens incontrôlées.
- Outils existants : Alephant (Budget Circuit Breaker), Amnic, Kong AI Gateway, Ramp — **tous positionnés enterprise/mid-market avec pricing enterprise**, pas de version simple/abordable pour une petite agence ou startup de 5-20 personnes qui utilise Claude Code/Cursor/Codex en équipe.
- Côté indie/perso : ccusage, claude-usage, SessionWatcher, cc-statistics — excellents outils **locaux et gratuits pour un individu**, mais aucun ne couvre le cas "équipe" (agrégation multi-sièges, alertes Slack, plafonds par personne/projet).
- Sources : [Developers Digest — AI infra agents spend guardrails](https://www.developersdigest.tech/blog/ai-infrastructure-agents-need-spend-guardrails), [Alephant — 10 Real-Time AI API Budget Guardrails](https://blog.alephant.io/10-real-time-ai-api-budget-guardrails-for-2026/), [Amnic — AI Cost Governance Tools](https://amnic.com/blogs/ai-cost-governance-tools), [ccusage.com](https://ccusage.com/), [Torii — Claude Code usage dashboards](https://www.toriihq.com/articles/five-claude-code-usage-dashboards-and-monitoring-tools), [GitHub — claude-usage](https://github.com/phuryn/claude-usage), [GitHub — claude-usage-tracker](https://github.com/658jjh/claude-usage-tracker)

---

## Axe 2 — Dépréciation cookies tiers / tracking navigateurs

- Rebondissement important : en juillet 2024 déjà, Google a abandonné la dépréciation forcée des cookies tiers dans Chrome. En 2026, Chrome affiche un prompt "Privacy Choice" mais ne bloque pas par défaut — la plupart des utilisateurs choisissent quand même de bloquer le tracking.
- Safari et Firefox bloquent déjà les cookies tiers par défaut → environ 50% du web est déjà "cookieless" de fait, indépendamment de Chrome.
- Impact business : nécessité de tracking server-side (matching par email), et de solutions de first-party data. Mais ce terrain est déjà **structurellement mature et saturé** (CDP, server-side tagging, outils analytics privacy-first existent depuis des années — pas un déclencheur "frais" de 2025-2026, plutôt une tendance de fond de 2023-2024).
- Conclusion : axe **peu prometteur** pour une fenêtre fraîche — pas de nouveau changement de règle en 2026 qui n'était pas déjà anticipé et outillé depuis longtemps.
- Sources : [Ethyca — Third-Party Cookie Deprecation 2026 Guide](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know), [OneTrust — Google Drops Cookie Choice Prompt](https://www.onetrust.com/blog/google-drops-plans-for-third-party-cookie-choice-prompt-in-chrome/), [Statista — Third-party cookie deprecation](https://www.statista.com/topics/7693/third-party-cookie-deprecation/)

---

## Axe 3 — Nouvelles capacités des modèles IA grand public (2025-2026)

### 3.1 WebMCP — LE signal le plus frais trouvé dans toute la recherche
- Chrome a lancé WebMCP en **origin trial dès Chrome 149** (2026), annoncé à Google I/O 2026. C'est un nouveau standard web : les sites web exposent des "tools" structurés (API JS impérative + annotations HTML déclaratives sur les formulaires) pour que les agents IA (Gemini in Chrome en premier, mais le standard est agnostique au modèle) interagissent avec le site sans screenshot/DOM-scraping.
- Gain annoncé : jusqu'à 89% d'économie de tokens vs. l'approche actuelle (capture d'écran + inférence multimodale + parsing DOM itératif).
- Grandes marques en expérimentation : Expedia, Booking.com, Shopify, Credit Karma, TurboTax, Redfin, Etsy, Instacart, Target.
- **C'est un changement de plateforme au sens strict du brief** : très récent (2026), encore en preview/origin trial, donc écosystème d'outils "autour de WebMCP" quasi inexistant à ce stade — fenêtre potentiellement très tôt.
- Gap identifié par un article tiers : "Google WebMCP Needs Knowledge Layer for AI Agents" — signal qu'il manque une couche d'outillage.
- Opportunité concrète pour un solo dev : un générateur/plugin qui audite un site (Shopify, WordPress/WooCommerce, ou site custom) et génère automatiquement le manifeste WebMCP (tools + schema) à partir des formulaires/API existants, plus un tableau de bord de "trafic agent" (qui appelle vos tools WebMCP, quand, pourquoi) — équivalent d'un "Yoast SEO" ou "générateur de sitemap XML" mais pour l'ère agentique. Public cible : petits e-commerçants/SaaS qui n'ont pas les ressources d'Etsy/Shopify pour implémenter à la main.
- Risque : adoption encore incertaine (juste en origin trial), timing pourrait être trop tôt pour un revenu immédiat — mais c'est exactement le type de fenêtre "avant que le marché ne se remplisse" demandé dans le brief.
- Sources : [Chrome for Developers — WebMCP](https://developer.chrome.com/docs/ai/webmcp), [WebMCP early preview announcement](https://developer.chrome.com/blog/webmcp-epp), [Chrome at I/O 2026](https://developer.chrome.com/blog/chrome-at-io26), [VentureBeat — Chrome ships WebMCP](https://venturebeat.com/infrastructure/google-chrome-ships-webmcp-in-early-preview-turning-every-website-into-a), [AgentMarketCap — WebMCP 89% token savings](https://agentmarketcap.ai/blog/2026/04/07/chrome-firefox-native-agent-apis-2026-browser-agentic-primitives), [Human Delta — WebMCP needs knowledge layer](https://www.humandelta.ai/blog/google-webmcp-knowledge-layer-ai-agents), [Webfuse — What is WebMCP](https://www.webfuse.com/blog/what-is-webmcp-the-practical-guide-to-the-web-model-context-protocol)

### 3.2 Agentic Commerce Protocol (ACP) / ChatGPT Instant Checkout
- Stripe + OpenAI ont co-développé l'Agentic Commerce Protocol (ACP), un standard ouvert pour l'achat depuis ChatGPT ("Instant Checkout"). Déjà actif pour les marchands Etsy US, extension prévue à plus d'1 million de marchands Shopify.
- 800-900M d'utilisateurs hebdo ChatGPT, ~50M requêtes shopping/jour. ChatGPT convertirait 2 à 6x mieux que Google.
- ACP est un standard ouvert : les marchands qui n'utilisent pas Stripe pour le paiement peuvent quand même l'adopter avec leur propre PSP.
- Opportunité pour petits marchands **hors Shopify/Etsy** (WooCommerce, sites custom, Squarespace...) : un service/plugin qui génère le flux produit conforme ACP + rend le site "achetable depuis ChatGPT", positionné comme l'équivalent d'un plugin SEO mais pour le commerce conversationnel. Marché encore très jeune (2026), grande dynamique de plateforme (Stripe + OpenAI poussent l'adoption).
- Sources : [Stripe newsroom — Instant Checkout + ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout), [OpenAI — Buy it in ChatGPT](https://openai.com/index/buy-it-in-chatgpt/), [Stripe blog — open standard for agentic commerce](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce), [MindStudio — ACP for builders](https://www.mindstudio.ai/blog/openai-stripe-agentic-commerce-protocol-new-payment-stack-builders)

### 3.3 ChatGPT Apps SDK (bâti sur MCP)
- Lancé pour permettre à des développeurs tiers de construire des "apps" utilisables dans une conversation ChatGPT, avec soumission ouverte à tout développeur vérifié (solo ou entreprise). Distribution immédiate vers 800M+ utilisateurs hebdo.
- Techniquement : l'Apps SDK est un standard ouvert **construit sur MCP** — donc directement dans les compétences JS/TS d'un développeur qui maîtriserait déjà MCP.
- Temps de dev estimé : 2-4 semaines pour une app simple, 3-4 mois du concept au lancement en comptant la revue.
- Monétisation encore limitée en 2026 (renvoi vers son propre site pour la transaction, pas encore de paiement natif digital goods) — donc pas un modèle d'abonnement direct pour l'instant, plutôt un canal de distribution/acquisition.
- Sources : [OpenAI — Introducing apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/), [OpenAI — Developers can submit apps](https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/), [OpenAI Developers — Apps SDK](https://developers.openai.com/apps-sdk)

### 3.4 x402 — paiements agent-to-agent en stablecoin
- Protocole ouvert (Coinbase/Cloudflare) qui réactive le code HTTP 402 pour des micro-paiements autonomes agent-to-agent en USDC. Adoption réelle mais encore modeste : ~75M transactions/30 jours, ~24M$ de volume, 94k acheteurs/22k vendeurs. Visa, Mastercard, Ripple ont rejoint le standard mi-2026.
- Un article CoinDesk note explicitement : "la demande n'est pas encore là" pour le micropaiement.
- Nécessite des compétences crypto/wallets — s'éloigne du stack Stripe/JS/TS "simple" demandé, et le produit serait probablement un produit crypto-adjacent (friction réglementaire/complexité). **Écarté comme peu adapté au profil du développeur.**
- Sources : [Digital Applied — x402 Payment Protocol](https://www.digitalapplied.com/blog/x402-payment-protocol-ai-agents-pay-coinbase-cloudflare), [CoinDesk — x402 demand not there yet](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet), [CoinDesk — Visa Mastercard Ripple join x402](https://www.coindesk.com/tech/2026/07/15/visa-mastercard-and-ripple-join-the-standard-letting-ai-agents-pay-in-stablecoins)

### 3.5 Sora 2 / génération vidéo
- Sora 2 (OpenAI) lancé, avec audio. Peu de pistes micro-SaaS spécifiques et fraîches identifiées au-delà des idées déjà connues (repurposing de contenu vidéo) — terrain déjà couvert par de nombreux outils de repurposing existants. **Pas de fenêtre fraîche spécifique identifiée.**
- Source : [OpenAI — Sora 2 is here](https://openai.com/index/sora-2/)

---

## Axe 4 — GEO / visibilité IA (nouveaux frameworks autour du search génératif)

- Marché GEO (Generative Engine Optimization) en forte croissance (365M$ US en 2026, CAGR 42,9%), mais **déjà bien couvert** par de nombreux outils spécialisés (LLMrefs, Omnibound, plusieurs guides listent 10+ outils comparés). Trop d'acteurs déjà positionnés pour un nouvel entrant générique.
- llms.txt : adopté par 28% de domaines étudiés, mais **quasi ignoré par les vrais crawlers IA** (0,1% du trafic bot IA touche le fichier llms.txt selon une étude sur 515M événements) — signal fort que c'est un axe à faible valeur réelle malgré le buzz. Déjà 7+ générateurs recensés. **Axe à éviter.**
- Sources : [SitePoint — Best GEO Tools 2026](https://www.sitepoint.com/best-generative-engine-optimization-tools-to-improve-ai-search-visibility-2026/), [Omnibound — GEO Statistics 2026](https://www.omnibound.ai/blog/generative-engine-optimization-statistics), [context.dev — Best llms.txt Generator Tools 2026](https://www.context.dev/blog/best-llms-txt-generator-tools-2026), [tryanalyze.ai — llms.txt generator tools tested](https://www.tryanalyze.ai/blog/llms-txt-generator-tools)

---

## Axe 5 — Vibe coding / sécurité du code généré par IA

- Terrain déjà **saturé rapidement** : au moins 3 concurrents directs actifs en 2026 (Vibe App Scanner, CheckVibe, VibeShield), plus outils enterprise (Veracode). Le besoin est bien réel et documenté (45% du code IA introduit des vulnérabilités OWASP Top 10 ; étude sur 5600 apps → 2000+ vulnérabilités et 400+ secrets exposés), mais la fenêtre de premier entrant est déjà refermée pour une offre généraliste.
- Sous-niche possible non vérifiée en détail : scanner spécialisé sur un seul écosystème (ex. uniquement Supabase RLS + clés exposées pour apps Lovable/Bolt) — mais risque de recouper VibeShield qui couvre déjà spécifiquement Supabase RLS/Firebase rules/clés React.
- Sources : [Vibe App Scanner](https://vibeappscanner.com/), [CheckVibe](https://checkvibe.dev/vibe-coding-security-scanner), [VibeShield](https://vibeshield.me/), [Forbes — Vibe coding security problem](https://www.forbes.com/sites/jodiecook/2026/03/20/vibe-coding-has-a-massive-security-problem/), [getautonoma — Vibe coding security risks](https://getautonoma.com/blog/vibe-coding-security-risks)

---

## Pistes écartées rapidement (pour mémoire)
- **Cookies tiers / privacy tracking** : pas de déclencheur frais en 2026, terrain déjà mature depuis 2023-2024.
- **llms.txt** : buzz sans usage réel mesuré côté crawlers IA — mauvais ROI.
- **GEO générique** : déjà trop d'outils établis.
- **Vibe coding security scanner généraliste** : déjà 3+ concurrents directs actifs.
- **x402/paiements crypto agent-to-agent** : hors stack demandé (crypto/wallets), demande encore faible.
- **MCP directories/registries génériques** (type "annuaire de serveurs MCP") : déjà mcpmarket.com, smithery.ai, registre officiel MCP — saturé.

---

## CLASSEMENT FINAL — Top pistes pour recherche approfondie

### 1. Scanner de sécurité pour Claude Agent Skills / plugins d'agents IA (self-serve, indie/petite équipe) — PRIORITÉ : TRÈS HAUTE
**Déclencheur technique** : le format "Agent Skills" (SKILL.md) est un standard tout récent (fin 2025-2026), sans barrière de publication (pas de signature de code, pas de sandbox par défaut, pas de revue), avec un écosystème de marketplaces passé de 1 à 8 en 6 mois.
**Besoin créé** : vérifier qu'une skill/plugin téléchargée n'est pas malveillante avant de l'exécuter avec des permissions larges sur sa machine/compte. Besoin exprimé par de vrais incidents documentés (36% de skills avec failles selon l'étude Snyk ToxicSkills, campagnes de malware confirmées touchant Claude Code/OpenClaw/Cursor début 2026, jusqu'à 5 des 7 skills les plus téléchargées d'un registre étant du malware confirmé lors d'un pic d'infection).
**Couverture actuelle** : outils existants (SkillsDirectory.com, Snyk Agent Scan) positionnés CISO/enterprise, pas de "VirusTotal" simple, pas cher, self-serve pour un développeur/petite équipe individuel qui veut juste scanner une skill avant install.
**Faisabilité solo dev** : oui — analyse statique de fichiers markdown/scripts (regex + heuristiques + LLM-as-judge via l'API Claude elle-même pour classifier), extension/CLI légère, backend Firebase, abonnement pour scan continu d'un registre de skills utilisées en équipe. MVP réaliste en quelques semaines.

### 2. Observabilité/monitoring léger "self-serve" pour serveurs MCP publiés par des indie devs — PRIORITÉ : HAUTE
**Déclencheur technique** : explosion du nombre de serveurs MCP publiés (500+, 97M téléchargements SDK/mois), alors que la roadmap officielle MCP reconnaît elle-même l'absence d'audit trail standardisé et de solution d'observabilité inter-serveurs.
**Besoin créé** : tracer les appels d'outils, détecter les échecs partiels et la dérive de schéma entre versions, avoir un tableau de bord d'usage/erreurs pour un serveur MCP qu'on a soi-même publié (ex. un dev qui vend l'accès à son serveur MCP).
**Couverture actuelle** : solutions existantes (WorkOS, gateways) enterprise-first et complexes ; MCP Inspector est un outil de dev local sans historique/CI. Rien d'équivalent à "Sentry mais pour mes serveurs MCP" à prix indie.
**Faisabilité** : SDK JS/TS à intégrer dans un serveur MCP (middleware simple), ingestion + dashboard sur Firebase, abonnement mensuel par nombre de serveurs/volume d'appels. Bon fit stack.

### 3. Garde-fous de dépenses IA pour petites équipes/agences utilisant Claude Code, Cursor, Codex — PRIORITÉ : MOYENNE-HAUTE
**Déclencheur technique** : généralisation rapide des CLI d'agents de code (Claude Code, Codex CLI, Cursor) dans des équipes de 5-20 personnes en 2026, sans outil de gouvernance de dépenses adapté à cette taille.
**Besoin créé** : éviter les dérapages de facture (anecdotes documentées : budget annuel cramé en un mois, licences internes annulées pour cause de coûts token incontrôlés) ; alerter/plafonner par personne ou projet.
**Couverture actuelle** : outils gratuits mais individuels (ccusage, claude-usage, SessionWatcher) ne couvrent pas l'agrégation d'équipe ; outils d'équipe (Amnic, Alephant, Torii, Ramp) au pricing enterprise, hors de portée d'une agence de 10 personnes.
**Faisabilité** : dépend de la disponibilité d'API d'usage programmatique côté Anthropic/OpenAI (Anthropic propose une Admin API en beta pour l'usage organisation — à vérifier en détail) ; sinon agrégation via logs locaux synchronisés. Risque technique moyen à valider en priorité avant d'investir.

### 4. Kit "site prêt pour les agents" (WebMCP) pour petits marchands/SaaS hors grandes plateformes — PRIORITÉ : MOYENNE
**Déclencheur technique** : WebMCP, standard Chrome tout juste sorti en origin trial (Chrome 149, 2026), qui permet à un site d'exposer des "tools" structurés aux agents IA (jusqu'à 89% d'économie de tokens revendiquée) — actuellement testé par de grandes marques (Shopify, Etsy, Booking.com...) mais aucun outillage grand public identifié pour les petits sites.
**Besoin créé** : équivalent d'un "plugin SEO" mais pour l'ère agentique — générer/valider automatiquement un manifeste WebMCP à partir d'un site existant, avec analytics de trafic agent.
**Couverture actuelle** : quasiment nulle à ce stade (juste des articles explicatifs, pas d'outil produit trouvé) — mais l'adoption réelle du standard reste incertaine (encore en preview), donc timing risqué : soit très tôt et gagnant, soit trop tôt et sans marché avant plusieurs mois.
**Faisabilité** : JS/TS pur, buildable en quelques semaines pour un MVP (générateur de manifeste), mais valeur commerciale dépendante de l'adoption effective de WebMCP par les navigateurs/agents au 2e semestre 2026 — à surveiller avant d'investir sérieusement.

### 5. Kit de conformité "Agentic Commerce Protocol" pour marchands hors Shopify/Etsy — PRIORITÉ : MOYENNE (à surveiller)
**Déclencheur technique** : Stripe + OpenAI ont ouvert l'Agentic Commerce Protocol (standard ouvert) pour permettre l'achat direct depuis ChatGPT (déjà 800-900M utilisateurs hebdo, ~50M requêtes shopping/jour), avec extension prévue à plus d'1M de marchands Shopify après Etsy.
**Besoin créé** : rendre un site marchand (WooCommerce, Squarespace, custom) "achetable depuis ChatGPT" en générant le flux produit conforme ACP — alors que les grandes plateformes (Shopify) auront probablement l'intégration native, laissant les petits marchands indépendants de côté.
**Couverture actuelle** : le protocole est ouvert et récent, pas d'outil "no-code" identifié pour les marchands hors grandes plateformes.
**Faisabilité** : bon fit stack (JS/TS/Node/Firebase, Stripe déjà dans l'équation), mais dépend de l'évolution réglementaire/technique du protocole encore jeune — à re-vérifier dans quelques mois pour confirmer la stabilité de l'API avant d'investir du temps de dev.
