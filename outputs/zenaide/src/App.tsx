import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Pricing } from "./pages/Pricing";
import { LegalPage } from "./pages/legal/LegalPage";
import { mentionsLegales, cgv, cgu, confidentialite } from "./content/legal";
import { AppLayout } from "./app/AppLayout";
import { Dashboard } from "./app/Dashboard";
import { Clients } from "./app/Clients";
import { DevisFactures } from "./app/DevisFactures";
import { LivreRecettes } from "./app/LivreRecettes";
import { Attestations } from "./app/Attestations";
import { AvanceImmediate } from "./app/AvanceImmediate";
import { Profil } from "./app/Profil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tarifs" element={<Pricing />} />
      <Route
        path="/legal/mentions-legales"
        element={<LegalPage titre="Mentions légales" contenuMarkdown={mentionsLegales} />}
      />
      <Route path="/legal/cgv" element={<LegalPage titre="Conditions Générales de Vente" contenuMarkdown={cgv} />} />
      <Route path="/legal/cgu" element={<LegalPage titre="Conditions Générales d'Utilisation" contenuMarkdown={cgu} />} />
      <Route
        path="/legal/confidentialite"
        element={<LegalPage titre="Politique de confidentialité" contenuMarkdown={confidentialite} />}
      />

      <Route path="/app" element={<AppLayout />}>
        <Route path="tableau-de-bord" element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="devis-factures" element={<DevisFactures />} />
        <Route path="livre-recettes" element={<LivreRecettes />} />
        <Route path="attestations" element={<Attestations />} />
        <Route path="avance-immediate" element={<AvanceImmediate />} />
        <Route path="profil" element={<Profil />} />
      </Route>
    </Routes>
  );
}

export default App;
