import { marked } from "marked";
import { MarketingHeader } from "../../components/MarketingHeader";
import { MarketingFooter } from "../../components/MarketingFooter";

export function LegalPage({ titre, contenuMarkdown }: { titre: string; contenuMarkdown: string }) {
  const html = marked.parse(contenuMarkdown, { async: false }) as string;
  return (
    <>
      <MarketingHeader />
      <main>
        <section style={{ padding: "56px 0 80px" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h1>{titre}</h1>
            <div
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: html }}
              style={{ fontSize: 15, color: "var(--color-text)" }}
            />
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
