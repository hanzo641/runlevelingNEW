import type {
  Client,
  DocumentCommercial,
  ProfilEntreprise,
  SuiviAvanceImmediate,
} from "../types";

const KEYS = {
  clients: "zenaide.clients",
  documents: "zenaide.documents",
  suivis: "zenaide.suivisAvanceImmediate",
  profil: "zenaide.profil",
} as const;

function lireListe<T>(cle: string): T[] {
  const brut = window.localStorage.getItem(cle);
  if (!brut) return [];
  try {
    return JSON.parse(brut) as T[];
  } catch {
    return [];
  }
}

function ecrireListe<T>(cle: string, valeur: T[]): void {
  window.localStorage.setItem(cle, JSON.stringify(valeur));
}

export function genererId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

// --- Clients ---
export function listerClients(): Client[] {
  return lireListe<Client>(KEYS.clients).sort((a, b) =>
    a.nom.localeCompare(b.nom)
  );
}

export function sauverClient(client: Client): void {
  const liste = lireListe<Client>(KEYS.clients);
  const index = liste.findIndex((c) => c.id === client.id);
  if (index >= 0) liste[index] = client;
  else liste.push(client);
  ecrireListe(KEYS.clients, liste);
}

export function supprimerClient(id: string): void {
  ecrireListe(
    KEYS.clients,
    lireListe<Client>(KEYS.clients).filter((c) => c.id !== id)
  );
}

// --- Documents (devis / factures) ---
export function listerDocuments(): DocumentCommercial[] {
  return lireListe<DocumentCommercial>(KEYS.documents).sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}

export function sauverDocument(document: DocumentCommercial): void {
  const liste = lireListe<DocumentCommercial>(KEYS.documents);
  const index = liste.findIndex((d) => d.id === document.id);
  if (index >= 0) liste[index] = document;
  else liste.push(document);
  ecrireListe(KEYS.documents, liste);
}

export function supprimerDocument(id: string): void {
  ecrireListe(
    KEYS.documents,
    lireListe<DocumentCommercial>(KEYS.documents).filter((d) => d.id !== id)
  );
}

export function prochainNumero(type: "devis" | "facture"): string {
  const annee = new Date().getFullYear();
  const prefixe = type === "devis" ? "DEV" : "FAC";
  const existants = lireListe<DocumentCommercial>(KEYS.documents).filter(
    (d) => d.type === type && d.numero.includes(String(annee))
  );
  const n = existants.length + 1;
  return `${prefixe}-${annee}-${String(n).padStart(3, "0")}`;
}

// --- Suivi avance immédiate ---
export function listerSuivis(): SuiviAvanceImmediate[] {
  return lireListe<SuiviAvanceImmediate>(KEYS.suivis);
}

export function sauverSuivi(suivi: SuiviAvanceImmediate): void {
  const liste = lireListe<SuiviAvanceImmediate>(KEYS.suivis);
  const index = liste.findIndex((s) => s.id === suivi.id);
  if (index >= 0) liste[index] = suivi;
  else liste.push(suivi);
  ecrireListe(KEYS.suivis, liste);
}

export function suiviPourDocument(
  documentId: string
): SuiviAvanceImmediate | undefined {
  return listerSuivis().find((s) => s.documentId === documentId);
}

// --- Profil entreprise ---
const PROFIL_PAR_DEFAUT: ProfilEntreprise = {
  raisonSociale: "",
  siret: "",
  adresse: "",
  codePostal: "",
  ville: "",
  email: "",
  telephone: "",
  numeroAgrementSAP: "",
  tvaNonApplicable: true,
};

export function lireProfil(): ProfilEntreprise {
  const brut = window.localStorage.getItem(KEYS.profil);
  if (!brut) return PROFIL_PAR_DEFAUT;
  try {
    return { ...PROFIL_PAR_DEFAUT, ...JSON.parse(brut) };
  } catch {
    return PROFIL_PAR_DEFAUT;
  }
}

export function sauverProfil(profil: ProfilEntreprise): void {
  window.localStorage.setItem(KEYS.profil, JSON.stringify(profil));
}

// --- Calculs ---
export function totalDocument(document: DocumentCommercial): number {
  return document.lignes.reduce(
    (somme, ligne) => somme + ligne.quantite * ligne.prixUnitaire,
    0
  );
}

// --- Données de démonstration (pour tester l'app rapidement) ---
export function chargerDonneesDemo(): void {
  const client: Client = {
    id: genererId(),
    civilite: "Mme",
    nom: "Dupuis",
    prenom: "Claire",
    adresse: "12 rue des Pyrénées",
    codePostal: "64000",
    ville: "Pau",
    email: "claire.dupuis@example.fr",
    telephone: "0600000000",
    activite: "menage",
    creeLe: new Date().toISOString(),
  };
  sauverClient(client);

  const facture: DocumentCommercial = {
    id: genererId(),
    type: "facture",
    numero: prochainNumero("facture"),
    clientId: client.id,
    date: new Date().toISOString(),
    lignes: [
      { id: genererId(), description: "Ménage à domicile", quantite: 4, prixUnitaire: 22 },
    ],
    statut: "paye",
    datePaiement: new Date().toISOString(),
  };
  sauverDocument(facture);
}

export function toutEffacer(): void {
  Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
}
