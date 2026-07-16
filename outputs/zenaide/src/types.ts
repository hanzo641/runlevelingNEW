export type ActiviteSAP =
  | "menage"
  | "jardinage"
  | "garde_enfants"
  | "soutien_scolaire"
  | "bricolage"
  | "aide_senior"
  | "autre";

export const LABELS_ACTIVITE: Record<ActiviteSAP, string> = {
  menage: "Ménage / entretien du domicile",
  jardinage: "Jardinage / petit bricolage extérieur",
  garde_enfants: "Garde d'enfants",
  soutien_scolaire: "Soutien scolaire",
  bricolage: "Bricolage / petits travaux",
  aide_senior: "Aide à la vie quotidienne (hors soins)",
  autre: "Autre prestation SAP",
};

export interface Client {
  id: string;
  civilite: "M." | "Mme" | "";
  nom: string;
  prenom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  email: string;
  telephone: string;
  activite: ActiviteSAP;
  creeLe: string; // ISO date
}

export interface LigneDocument {
  id: string;
  description: string;
  quantite: number; // heures ou unités
  prixUnitaire: number; // euros HT (franchise TVA -> HT = TTC)
}

export type StatutDocument = "brouillon" | "envoye" | "paye";

export interface DocumentCommercial {
  id: string;
  type: "devis" | "facture";
  numero: string;
  clientId: string;
  date: string; // ISO date
  lignes: LigneDocument[];
  statut: StatutDocument;
  datePaiement?: string; // ISO date, requis pour livre de recettes + attestation
}

export type StatutAvanceImmediate =
  | "non_demandee"
  | "en_attente"
  | "validee"
  | "bloquee";

export const LABELS_STATUT_AI: Record<StatutAvanceImmediate, string> = {
  non_demandee: "Non demandée",
  en_attente: "En attente Urssaf",
  validee: "Validée",
  bloquee: "Bloquée / à relancer",
};

export interface SuiviAvanceImmediate {
  id: string;
  documentId: string;
  statut: StatutAvanceImmediate;
  derniereRelance?: string; // ISO date
  notes: string;
}

export interface ProfilEntreprise {
  raisonSociale: string;
  siret: string;
  adresse: string;
  codePostal: string;
  ville: string;
  email: string;
  telephone: string;
  numeroAgrementSAP: string;
  tvaNonApplicable: boolean;
}

export const TAUX_CREDIT_IMPOT = 0.5;
