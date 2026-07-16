import { chromium } from "playwright";

const BASE = "http://localhost:4173";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const page = await browser.newPage();
const erreursConsole = [];
page.on("pageerror", (err) => erreursConsole.push(String(err)));
page.on("console", (msg) => {
  if (msg.type() === "error") erreursConsole.push(msg.text());
});

async function etape(nom, fn) {
  try {
    await fn();
    console.log(`OK   - ${nom}`);
  } catch (e) {
    console.log(`FAIL - ${nom} :: ${e.message}`);
    process.exitCode = 1;
  }
}

await etape("Landing page charge et affiche le headline", async () => {
  await page.goto(`${BASE}/`);
  await page.waitForSelector("text=Toute la paperasse SAP");
});

await etape("Page tarifs affiche les deux offres", async () => {
  await page.goto(`${BASE}/tarifs`);
  await page.waitForSelector("text=39 €");
});

await etape("Pages légales se chargent (4)", async () => {
  for (const slug of ["mentions-legales", "cgv", "cgu", "confidentialite"]) {
    await page.goto(`${BASE}/legal/${slug}`);
    await page.waitForSelector("h1");
  }
});

await etape("Tableau de bord accessible et vide au départ", async () => {
  await page.goto(`${BASE}/app/tableau-de-bord`);
  await page.waitForSelector("text=Tableau de bord");
});

await etape("Créer un client", async () => {
  await page.goto(`${BASE}/app/clients`);
  await page.click("text=+ Ajouter un client");
  await page.fill('input[required]', ""); // no-op, precise fill below
  await page.selectOption("select", "Mme");
  const inputs = await page.locator("form input").all();
  // prenom, nom in order after civilite select
  await page.fill("form >> label:has-text('Prénom') + input", "Claire");
  await page.fill("form >> label:has-text('Nom') + input", "Martin");
  await page.fill("form >> label:has-text('Adresse') + input", "5 rue du Hédas");
  await page.fill("form >> label:has-text('Code postal') + input", "64000");
  await page.fill("form >> label:has-text('Ville') + input", "Pau");
  await page.fill("form >> label:has-text('Email') + input", "claire.martin@example.fr");
  await page.click('button:has-text("Enregistrer")');
  await page.waitForSelector("text=Claire Martin");
});

await etape("Renseigner le profil entreprise", async () => {
  await page.goto(`${BASE}/app/profil`);
  await page.fill("form >> label:has-text('Raison sociale') + input", "Hydropropreté — Thomas");
  await page.fill("form >> label:has-text('SIRET') + input", "89129775600027");
  await page.fill("form >> label:has-text(\"Numéro d'agrément\") + input", "SAP891297756");
  await page.click('button:has-text("Enregistrer")');
  await page.waitForSelector("text=Enregistré");
});

await etape("Créer une facture et vérifier le calcul du crédit d'impôt", async () => {
  await page.goto(`${BASE}/app/devis-factures`);
  await page.click("text=+ Facture");
  const ligne = page.locator("form div", { hasText: "Description" }).first();
  await page.fill('input[placeholder*="Description"]', "Ménage à domicile 4h");
  await page.fill('input[placeholder="Quantité"]', "4");
  await page.fill('input[placeholder*="Prix unitaire"]', "22");
  await page.waitForSelector("text=88,00");
  await page.waitForSelector("text=44,00");
  await page.click('button:has-text("Enregistrer")');
  await page.waitForSelector("text=FAC-");
});

await etape("Marquer la facture comme payée", async () => {
  await page.selectOption("table select", "paye");
  await page.waitForTimeout(200);
});

await etape("Le livre de recettes reflète la facture payée", async () => {
  await page.goto(`${BASE}/app/livre-recettes`);
  await page.waitForSelector("text=Claire Martin");
  await page.waitForSelector("text=88,00");
});

await etape("Une attestation fiscale est proposée pour l'année en cours", async () => {
  await page.goto(`${BASE}/app/attestations`);
  await page.waitForSelector("text=Claire Martin");
  await page.waitForSelector("text=44,00");
});

await etape("Le suivi avance immédiate liste la facture", async () => {
  await page.goto(`${BASE}/app/avance-immediate`);
  await page.waitForSelector("text=FAC-");
});

await etape("Aucune erreur JS non capturée pendant le parcours", async () => {
  if (erreursConsole.length > 0) {
    throw new Error(`Erreurs détectées : ${erreursConsole.join(" | ")}`);
  }
});

await browser.close();
console.log(process.exitCode === 1 ? "\n=== DES TESTS ONT ÉCHOUÉ ===" : "\n=== TOUS LES TESTS PASSENT ===");
