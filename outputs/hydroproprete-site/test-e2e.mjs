import { chromium } from "playwright";

const BASE = "http://localhost:4190";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
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

await etape("La page charge et affiche le hero", async () => {
  await page.goto(`${BASE}/`);
  await page.waitForSelector("text=Vos canapés, matelas et tapis");
});

await etape("Les tarifs réels s'affichent", async () => {
  await page.waitForSelector("text=Canapé 2-3 places");
  await page.waitForSelector("text=80,00");
});

await etape("Le bouton flottant ouvre le widget de devis", async () => {
  await page.click('button[aria-label="Ouvrir le devis instantané"]');
  await page.waitForSelector("text=Choisir mes articles");
});

await etape("Sélection d'articles et calcul du prix en direct", async () => {
  await page.click("text=Choisir mes articles");
  // Ajouter 1x canapé 2-3 places (80€) et 1x matelas 1 place (60€) = 140€ total, 70€ après crédit d'impôt
  const lignes = page.locator("div", { hasText: "Canapé 2-3 places" });
  await page.locator("text=Canapé 2-3 places").locator("xpath=../..").locator("button", { hasText: "+" }).click();
  await page.locator("text=Matelas 1 place").locator("xpath=../..").locator("button", { hasText: "+" }).click();
  await page.waitForSelector("text=140,00");
  await page.waitForSelector("text=70,00");
});

await etape("Passage aux coordonnées puis récapitulatif", async () => {
  await page.click('button:has-text("Continuer")');
  await page.fill('input[placeholder*="ville"]', "Pau");
  await page.fill('input[placeholder="Votre nom"]', "Claire Test");
  await page.fill('input[placeholder="Votre téléphone"]', "0600000000");
  await page.click('button:has-text("Voir le récapitulatif")');
  await page.waitForSelector("text=Envoyer par WhatsApp");
  await page.waitForSelector("text=Claire Test");
});

await etape("Les mentions légales s'ouvrent depuis le footer", async () => {
  await page.click("text=Mentions légales");
  await page.waitForSelector("text=891 297 756 00027");
});

await etape("Aucune erreur JS non capturée pendant le parcours", async () => {
  if (erreursConsole.length > 0) {
    throw new Error(`Erreurs détectées : ${erreursConsole.join(" | ")}`);
  }
});

await browser.close();
console.log(process.exitCode === 1 ? "\n=== DES TESTS ONT ÉCHOUÉ ===" : "\n=== TOUS LES TESTS PASSENT ===");
