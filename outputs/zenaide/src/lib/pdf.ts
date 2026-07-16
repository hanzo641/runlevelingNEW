import jsPDF from "jspdf";
import type { Client, DocumentCommercial, ProfilEntreprise } from "../types";
import { TAUX_CREDIT_IMPOT } from "../types";
import { totalDocument } from "./storage";

const COULEUR_PRIMAIRE: [number, number, number] = [47, 109, 92];
const COULEUR_TEXTE: [number, number, number] = [30, 38, 34];
const COULEUR_MUET: [number, number, number] = [91, 107, 99];

function formaterEuros(montant: number): string {
  return montant.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

function formaterDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function enTete(doc: jsPDF, titre: string) {
  doc.setFillColor(...COULEUR_PRIMAIRE);
  doc.rect(0, 0, 210, 28, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Zenaide", 15, 17);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(titre, 195, 17, { align: "right" });
  doc.setTextColor(...COULEUR_TEXTE);
}

function blocEmetteur(doc: jsPDF, profil: ProfilEntreprise, y: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(profil.raisonSociale || "[Raison sociale à compléter]", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COULEUR_MUET);
  let ligne = y + 5;
  if (profil.adresse) {
    doc.text(profil.adresse, 15, ligne);
    ligne += 4;
  }
  if (profil.codePostal || profil.ville) {
    doc.text(`${profil.codePostal} ${profil.ville}`.trim(), 15, ligne);
    ligne += 4;
  }
  if (profil.siret) {
    doc.text(`SIRET : ${profil.siret}`, 15, ligne);
    ligne += 4;
  }
  if (profil.numeroAgrementSAP) {
    doc.text(`Agrément SAP n° ${profil.numeroAgrementSAP}`, 15, ligne);
    ligne += 4;
  }
  if (profil.tvaNonApplicable) {
    doc.text("TVA non applicable, art. 293 B du CGI", 15, ligne);
    ligne += 4;
  }
  doc.setTextColor(...COULEUR_TEXTE);
  return ligne;
}

function blocClient(doc: jsPDF, client: Client, y: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...COULEUR_MUET);
  doc.text("Client", 130, y);
  doc.setTextColor(...COULEUR_TEXTE);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  let ligne = y + 5;
  doc.text(`${client.civilite} ${client.prenom} ${client.nom}`.trim(), 130, ligne);
  ligne += 5;
  if (client.adresse) {
    doc.text(client.adresse, 130, ligne);
    ligne += 4;
  }
  if (client.codePostal || client.ville) {
    doc.text(`${client.codePostal} ${client.ville}`.trim(), 130, ligne);
    ligne += 4;
  }
  return ligne;
}

export function genererPdfDocument(
  document: DocumentCommercial,
  client: Client,
  profil: ProfilEntreprise
): jsPDF {
  const doc = new jsPDF();
  const titre = document.type === "devis" ? "DEVIS" : "FACTURE";
  enTete(doc, titre);

  let y = 40;
  const yApresClient = blocClient(doc, client, y);
  const yApresEmetteur = blocEmetteur(doc, profil, y);
  y = Math.max(yApresClient, yApresEmetteur) + 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(`${titre} N° ${document.numero}`, 15, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...COULEUR_MUET);
  doc.text(`Date : ${formaterDate(document.date)}`, 15, y + 6);
  doc.setTextColor(...COULEUR_TEXTE);

  y += 18;
  doc.setFillColor(245, 242, 235);
  doc.rect(15, y - 5, 180, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Description", 18, y);
  doc.text("Quantité", 120, y);
  doc.text("Prix unitaire", 145, y);
  doc.text("Total", 180, y, { align: "right" });
  y += 10;

  doc.setFont("helvetica", "normal");
  document.lignes.forEach((ligne) => {
    const totalLigne = ligne.quantite * ligne.prixUnitaire;
    doc.text(ligne.description, 18, y, { maxWidth: 95 });
    doc.text(String(ligne.quantite), 120, y);
    doc.text(formaterEuros(ligne.prixUnitaire), 145, y);
    doc.text(formaterEuros(totalLigne), 193, y, { align: "right" });
    y += 8;
  });

  const total = totalDocument(document);
  const creditImpot = total * TAUX_CREDIT_IMPOT;
  const resteACharge = total - creditImpot;

  y += 4;
  doc.setDrawColor(228, 222, 210);
  doc.line(15, y, 195, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Total à régler", 130, y);
  doc.text(formaterEuros(total), 193, y, { align: "right" });
  y += 10;

  doc.setFillColor(236, 244, 240);
  doc.rect(15, y - 5, 180, 26, "F");
  doc.setTextColor(...COULEUR_PRIMAIRE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Avec le crédit d'impôt services à la personne (50 %)", 18, y + 2);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(
    `Crédit d'impôt estimé : ${formaterEuros(creditImpot)}`,
    18,
    y + 9
  );
  doc.text(
    `Reste à charge réel estimé : ${formaterEuros(resteACharge)}`,
    18,
    y + 16
  );
  doc.setTextColor(...COULEUR_MUET);
  doc.setFontSize(7.5);
  doc.text(
    "Estimation à titre indicatif, sous réserve des plafonds et de la situation fiscale du client (cf. service-public.fr).",
    18,
    y + 22
  );

  doc.setTextColor(...COULEUR_TEXTE);
  doc.setFontSize(8);
  doc.setTextColor(...COULEUR_MUET);
  doc.text(
    "Document généré avec Zenaide — zenaide.fr",
    105,
    285,
    { align: "center" }
  );

  return doc;
}

export function genererPdfAttestation(
  client: Client,
  annee: number,
  totalPaye: number,
  profil: ProfilEntreprise
): jsPDF {
  const doc = new jsPDF();
  enTete(doc, "ATTESTATION FISCALE");

  let y = 45;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(
    `Attestation fiscale ${annee} — Services à la personne`,
    105,
    y,
    { align: "center" }
  );
  y += 15;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const yApresEmetteur = blocEmetteur(doc, profil, y);
  const yApresClient = blocClient(doc, client, y);
  y = Math.max(yApresEmetteur, yApresClient) + 14;

  doc.setFontSize(10.5);
  const paragraphe1 =
    `Je soussigné(e) ${profil.raisonSociale || "[Raison sociale à compléter]"}` +
    `, prestataire de services à la personne (agrément/déclaration SAP n° ${profil.numeroAgrementSAP || "[à compléter]"}),` +
    ` atteste que ${client.civilite} ${client.prenom} ${client.nom} a bénéficié, au cours de l'année civile ${annee},` +
    ` de prestations de services à la personne pour un montant total de ${formaterEuros(totalPaye)} TTC.`;
  const lignesTexte = doc.splitTextToSize(paragraphe1, 178);
  doc.text(lignesTexte, 15, y);
  y += lignesTexte.length * 6 + 8;

  doc.setFont("helvetica", "bold");
  doc.text(`Montant ouvrant droit au crédit d'impôt (50 %)`, 15, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...COULEUR_PRIMAIRE);
  doc.text(formaterEuros(totalPaye * TAUX_CREDIT_IMPOT), 15, y);
  doc.setTextColor(...COULEUR_TEXTE);
  doc.setFontSize(10.5);
  y += 12;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...COULEUR_MUET);
  const note = doc.splitTextToSize(
    "Cette attestation est remise pour permettre à son bénéficiaire de faire valoir ses droits au crédit d'impôt pour l'emploi " +
      "d'un salarié ou d'un prestataire à domicile (article 199 sexdecies du Code général des impôts). Le montant définitif retenu " +
      "par l'administration fiscale reste soumis aux plafonds et conditions en vigueur.",
    178
  );
  doc.text(note, 15, y);
  y += note.length * 4 + 12;

  doc.setTextColor(...COULEUR_TEXTE);
  doc.setFontSize(9);
  doc.text(`Fait à ${profil.ville || "________________"}, le ${formaterDate(new Date().toISOString())}`, 15, y);

  doc.setFontSize(8);
  doc.setTextColor(...COULEUR_MUET);
  doc.text("Document généré avec Zenaide — zenaide.fr", 105, 285, {
    align: "center",
  });

  return doc;
}
