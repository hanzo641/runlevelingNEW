import { chromium } from "playwright";

const BASE = "http://localhost:4196/test-harness-built.html";
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

await etape("Page hôte charge, bouton widget présent", async () => {
  await page.goto(BASE);
  await page.waitForSelector('button[aria-label="Ouvrir le devis instantane"]');
});

await etape("Ouverture + sélection articles + calcul prix", async () => {
  await page.click('button[aria-label="Ouvrir le devis instantane"]');
  await page.click("text=Choisir mes articles");
  const plusCanape = page.locator(".hydro-ligne-article", { hasText: "Canape 2-3 places" }).locator('[data-action="plus"]');
  await plusCanape.click();
  await plusCanape.click();
  await page.waitForSelector("text=160,00");
  await page.waitForSelector("text=80,00");
});

await etape("Coordonnées + récapitulatif", async () => {
  await page.click('[data-action="aller-coordonnees"]');
  await page.fill("#hydro-input-ville", "Pau");
  await page.fill("#hydro-input-nom", "Marie Test");
  await page.fill("#hydro-input-tel", "0611223344");
  await page.click('[data-action="aller-recap"]');
  await page.waitForSelector("text=Marie Test");
});

await etape("Aucune erreur JS", async () => {
  if (erreursConsole.length > 0) throw new Error(erreursConsole.join(" | "));
});

await browser.close();
console.log(process.exitCode === 1 ? "\n=== ECHEC ===" : "\n=== TOUS LES TESTS PASSENT ===");
