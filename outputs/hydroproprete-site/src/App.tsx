import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CommentCaMarche } from "./components/CommentCaMarche";
import { Faq } from "./components/Faq";
import { ZoneContact } from "./components/ZoneContact";
import { Footer } from "./components/Footer";
import { MentionsLegales } from "./components/MentionsLegales";
import { ChatWidget } from "./components/ChatWidget";

function App() {
  const [mentionsOuvertes, setMentionsOuvertes] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CommentCaMarche />
        <Faq />
        <ZoneContact />
      </main>
      <Footer onOuvrirMentions={() => setMentionsOuvertes(true)} />
      {mentionsOuvertes && <MentionsLegales onFermer={() => setMentionsOuvertes(false)} />}
      <ChatWidget />
    </>
  );
}

export default App;
