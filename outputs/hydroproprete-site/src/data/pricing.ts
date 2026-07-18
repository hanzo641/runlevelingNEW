export interface Article {
  id: string;
  nom: string;
  prix: number;
  unite?: string;
  prixMin?: number;
  prixMax?: number;
}

export const TAUX_CREDIT_IMPOT = 0.5;

export const ARTICLES: Article[] = [
  { id: "canape-2-3", nom: "Canapé 2-3 places", prix: 80 },
  { id: "canape-4-5-angle", nom: "Canapé 4-5 places / angle", prix: 110 },
  { id: "fauteuil", nom: "Fauteuil", prix: 50 },
  { id: "chaises-6", nom: "Ensemble de 6 chaises", prix: 90 },
  { id: "matelas-2p", nom: "Matelas 2 places", prix: 90 },
  { id: "matelas-1p", nom: "Matelas 1 place", prix: 60 },
  { id: "tapis", nom: "Tapis", prix: 85, prixMin: 50, prixMax: 120 },
  { id: "pouf", nom: "Pouf (offert avec un forfait)", prix: 0 },
];

export const SERVICES_SUR_DEVIS = [
  "Remise en état après sinistre",
  "Nettoyage automobile (sièges, moquettes, coffre)",
  "Nettoyage de terrasses",
  "Nettoyage fin de chantier",
  "Nettoyage de vitres",
];

export const ENTREPRISE = {
  nom: "Hydropropreté",
  telephone: "06 02 16 92 36",
  telephoneHref: "tel:+33602169236",
  email: "hydroproprete@gmail.com",
  adresse: "1 bis rue Jeanne d'Arc, Pau",
  siret: "891 297 756 00027",
  agrementSAP: "891297756",
  zone: "Pau et alentours",
};

export function formaterEuros(montant: number): string {
  return montant.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}
