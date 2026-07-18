import { chromium } from "playwright";

const BASE = "http://localhost:4199/test-harness-built.html";
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

await etape("Passage direct à la réservation (pas de formulaire coordonnées)", async () => {
  await page.click('[data-action="aller-reservation"]');
  await page.waitForSelector("text=Reserver mon creneau");
});

await etape("Le lien Calendly est correct", async () => {
  const href = await page.locator('a:has-text("Reserver mon creneau")').getAttribute("href");
  if (href !== "https://calendly.com/hydroproprete/reservation") throw new Error("Lien Calendly inattendu: " + href);
});

await etape("Le bouton WhatsApp secondaire fonctionne toujours", async () => {
  await page.waitForSelector("text=WhatsApp");
  await page.waitForSelector('a[href^="tel:"]');
});

await etape("Aucune erreur JS", async () => {
  if (erreursConsole.length > 0) throw new Error(erreursConsole.join(" | "));
});

await browser.close();
console.log(process.exitCode === 1 ? "\n=== ECHEC ===" : "\n=== TOUS LES TESTS PASSENT ===");
