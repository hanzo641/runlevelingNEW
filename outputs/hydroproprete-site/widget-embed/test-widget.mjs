import { chromium } from "playwright";

const BASE = "http://localhost:4195/test-harness-built.html";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const erreursConsole = [];
page.on("pageerror", (err) => erreursConsole.push(String(err)));
page.on("console", (msg) => { if (msg.type() === "error") erreursConsole.push(msg.text()); });

async function etape(nom, fn) {
  try {
    await fn();
    console.log(`OK   - ${nom}`);
  } catch (e) {
    console.log(`FAIL - ${nom} :: ${e.message}`);
    process.exitCode = 1;
  }
}

await etape("La page hôte (styles agressifs) charge sans erreur", async () => {
  await page.goto(BASE);
  await page.waitForSelector("text=Site vitrine factice");
});

await etape("Le bouton flottant du widget apparaît", async () => {
  await page.waitForSelector('button[aria-label="Ouvrir le devis instantané"]');
});

await etape("Ouverture du widget malgré les styles hôtes", async () => {
  await page.click('button[aria-label="Ouvrir le devis instantané"]');
  await page.waitForSelector("text=Choisir mes articles");
});

await etape("Sélection d'articles et calcul du prix (2 canapés 2-3 places + 1 matelas 1 place = 220€)", async () => {
  await page.click("text=Choisir mes articles");
  const plusCanape = page.locator(".hydro-ligne-article", { hasText: "Canapé 2-3 places" }).locator('[data-action="plus"]');
  await plusCanape.click();
  await plusCanape.click();
  const plusMatelas = page.locator(".hydro-ligne-article", { hasText: "Matelas 1 place" }).locator('[data-action="plus"]');
  await plusMatelas.click();
  await page.waitForSelector("text=220,00");
  await page.waitForSelector("text=110,00"); // après crédit d'impôt 50%
});

await etape("Passage aux coordonnées et récapitulatif", async () => {
  await page.click('[data-action="aller-coordonnees"]');
  await page.fill("#hydro-input-ville", "Pau");
  await page.fill("#hydro-input-nom", "Jean Dupont");
  await page.fill("#hydro-input-tel", "0611223344");
  await page.click('[data-action="aller-recap"]');
  await page.waitForSelector("text=Jean Dupont");
  await page.waitForSelector("text=Envoyer par WhatsApp");
});

await etape("Le lien tel: contient le bon numéro", async () => {
  const href = await page.locator('a[href^="tel:"]').first().getAttribute("href");
  if (href !== "tel:+33602169236") throw new Error("Numéro inattendu: " + href);
});

await etape("Aucune erreur JS (widget non cassé par les styles hôtes agressifs)", async () => {
  if (erreursConsole.length > 0) throw new Error(erreursConsole.join(" | "));
});

await browser.close();
console.log(process.exitCode === 1 ? "\n=== DES TESTS ONT ÉCHOUÉ ===" : "\n=== TOUS LES TESTS PASSENT ===");
