import { useState } from "react";
import { ARTICLES, ENTREPRISE, TAUX_CREDIT_IMPOT, formaterEuros } from "../data/pricing";

type Etape = "accueil" | "articles" | "coordonnees" | "recap";

interface LigneSelectionnee {
  articleId: string;
  quantite: number;
}

function bulle(texte: string) {
  return (
    <div className="hw-bulle-bot">
      <span>{texte}</span>
    </div>
  );
}

export function ChatWidget() {
  const [ouvert, setOuvert] = useState(false);
  const [etape, setEtape] = useState<Etape>("accueil");
  const [selection, setSelection] = useState<LigneSelectionnee[]>([]);
  const [ville, setVille] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [notes, setNotes] = useState("");

  function quantitePour(articleId: string) {
    return selection.find((l) => l.articleId === articleId)?.quantite ?? 0;
  }

  function changerQuantite(articleId: string, delta: number) {
    setSelection((prev) => {
      const existant = prev.find((l) => l.articleId === articleId);
      const nouvelleQuantite = Math.max(0, (existant?.quantite ?? 0) + delta);
      if (nouvelleQuantite === 0) {
        return prev.filter((l) => l.articleId !== articleId);
      }
      if (existant) {
        return prev.map((l) => (l.articleId === articleId ? { ...l, quantite: nouvelleQuantite } : l));
      }
      return [...prev, { articleId, quantite: nouvelleQuantite }];
    });
  }

  const total = selection.reduce((somme, ligne) => {
    const article = ARTICLES.find((a) => a.id === ligne.articleId);
    return somme + (article ? article.prix * ligne.quantite : 0);
  }, 0);
  const totalApresCreditImpot = total * (1 - TAUX_CREDIT_IMPOT);
  const nombreArticles = selection.reduce((n, l) => n + l.quantite, 0);

  function reinitialiser() {
    setEtape("accueil");
    setSelection([]);
    setVille("");
    setNom("");
    setTelephone("");
    setNotes("");
  }

  function recapitulatifTexte(): string {
    const lignes = selection
      .map((l) => {
        const article = ARTICLES.find((a) => a.id === l.articleId);
        return article ? `- ${article.nom} x${l.quantite} : ${formaterEuros(article.prix * l.quantite)}` : "";
      })
      .filter(Boolean)
      .join("\n");
    return (
      `Bonjour, je souhaite un devis pour :\n${lignes}\n\n` +
      `Total estimé : ${formaterEuros(total)} (soit ${formaterEuros(totalApresCreditImpot)} après crédit d'impôt de 50%)\n\n` +
      `Ville : ${ville || "non précisée"}\n` +
      `Nom : ${nom || "non précisé"}\n` +
      `Téléphone : ${telephone || "non précisé"}\n` +
      (notes ? `Précisions : ${notes}\n` : "") +
      `\nMerci de me recontacter pour confirmer un créneau.`
    );
  }

  function envoyerParEmail() {
    const sujet = encodeURIComponent(`Demande de devis — ${nom || "nouveau client"}`);
    const corps = encodeURIComponent(recapitulatifTexte());
    window.location.href = `mailto:${ENTREPRISE.email}?subject=${sujet}&body=${corps}`;
  }

  function envoyerParWhatsapp() {
    const texte = encodeURIComponent(recapitulatifTexte());
    const numero = ENTREPRISE.telephoneHref.replace("tel:+", "");
    window.open(`https://wa.me/${numero}?text=${texte}`, "_blank");
  }

  return (
    <>
      {!ouvert && (
        <button
          onClick={() => setOuvert(true)}
          aria-label="Ouvrir le devis instantané"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 22px",
            borderRadius: 999,
            border: "none",
            background: "var(--color-accent)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 12px 28px rgba(244, 163, 64, 0.45)",
          }}
        >
          💬 Devis instantané
        </button>
      )}

      {ouvert && (
        <div
          role="dialog"
          aria-label="Assistant de devis Hydropropreté"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 50,
            width: 360,
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "calc(100vh - 48px)",
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            borderRadius: 20,
            boxShadow: "var(--shadow-strong)",
            overflow: "hidden",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>Devis instantané</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Hydropropreté — réponse immédiate</div>
            </div>
            <button
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ padding: 18, overflowY: "auto", flex: 1 }}>
            {etape === "accueil" && (
              <>
                {bulle(
                  "Bonjour 👋 Je peux vous donner un prix exact tout de suite. Qu'avez-vous besoin de faire nettoyer ?"
                )}
                <button className="btn btn-primary" style={{ width: "100%", marginTop: 12 }} onClick={() => setEtape("articles")}>
                  Choisir mes articles
                </button>
                <p style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 12, textAlign: "center" }}>
                  Prestation sur-mesure (auto, terrasse, sinistre...) ?{" "}
                  <a href={`tel:${ENTREPRISE.telephoneHref.replace("tel:", "")}`}>Appelez directement</a>.
                </p>
              </>
            )}

            {etape === "articles" && (
              <>
                {bulle("Sélectionnez vos articles et leur quantité — le prix se met à jour en direct.")}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  {ARTICLES.filter((a) => a.prix > 0).map((article) => (
                    <div
                      key={article.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 10px",
                        borderRadius: 10,
                        background: "var(--color-surface)",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{article.nom}</div>
                        <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
                          {article.prixMin ? `${formaterEuros(article.prixMin)} - ${formaterEuros(article.prixMax!)}` : formaterEuros(article.prix)}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={() => changerQuantite(article.id, -1)}
                          style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid var(--color-border)", background: "#fff", cursor: "pointer" }}
                        >
                          −
                        </button>
                        <span style={{ minWidth: 16, textAlign: "center", fontWeight: 700 }}>{quantitePour(article.id)}</span>
                        <button
                          onClick={() => changerQuantite(article.id, 1)}
                          style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid var(--color-border)", background: "#fff", cursor: "pointer" }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {nombreArticles > 0 && (
                  <div className="card" style={{ padding: 12, marginTop: 14, background: "var(--color-primary-light)", border: "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                      <span>Total</span>
                      <span>{formaterEuros(total)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-primary-dark)" }}>
                      <span>Avec crédit d'impôt 50%</span>
                      <span>{formaterEuros(totalApresCreditImpot)}</span>
                    </div>
                  </div>
                )}

                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: 14 }}
                  disabled={nombreArticles === 0}
                  onClick={() => setEtape("coordonnees")}
                >
                  Continuer
                </button>
                <button className="btn btn-ghost" style={{ width: "100%", marginTop: 8 }} onClick={() => setEtape("accueil")}>
                  Retour
                </button>
              </>
            )}

            {etape === "coordonnees" && (
              <>
                {bulle("Parfait. Où intervenons-nous, et comment vous recontacter ?")}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                  <input placeholder="Votre ville (zone Pau et alentours)" value={ville} onChange={(e) => setVille(e.target.value)} />
                  <input placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                  <input placeholder="Votre téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                  <textarea
                    placeholder="Précisions utiles (état des taches, disponibilités...)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: 14 }}
                  disabled={!nom || !telephone}
                  onClick={() => setEtape("recap")}
                >
                  Voir le récapitulatif
                </button>
                <button className="btn btn-ghost" style={{ width: "100%", marginTop: 8 }} onClick={() => setEtape("articles")}>
                  Retour
                </button>
              </>
            )}

            {etape === "recap" && (
              <>
                {bulle("Voici votre demande. Envoyez-la en un clic, on vous recontacte rapidement pour fixer un créneau.")}
                <div className="card" style={{ padding: 14, marginTop: 12, fontSize: 13, whiteSpace: "pre-wrap" }}>
                  {recapitulatifTexte()}
                </div>
                <button className="btn btn-accent" style={{ width: "100%", marginTop: 14 }} onClick={envoyerParWhatsapp}>
                  Envoyer par WhatsApp
                </button>
                <button className="btn btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={envoyerParEmail}>
                  Envoyer par email
                </button>
                <a
                  className="btn btn-ghost"
                  style={{ width: "100%", marginTop: 8 }}
                  href={ENTREPRISE.telephoneHref}
                >
                  Ou appeler directement — {ENTREPRISE.telephone}
                </a>
                <button
                  onClick={reinitialiser}
                  style={{ width: "100%", marginTop: 10, background: "none", border: "none", color: "var(--color-text-muted)", fontSize: 12, cursor: "pointer" }}
                >
                  Recommencer une demande
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
