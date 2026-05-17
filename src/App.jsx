import { useState } from 'react';
import SEO from './components/SEO';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Recipes from './sections/Recipes';
import Pillars from './sections/Pillars';
import FoundersCircle from './sections/FoundersCircle';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ContactModal from './components/ContactModal';
import LegalModal from './components/LegalModal';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <SEO />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Recipes />
        <Pillars />
        <FoundersCircle />
      </main>
      <Footer onOpenModal={setActiveModal} />
      <StickyCTA />
      {activeModal === 'contact' && <ContactModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'mentions' && <LegalModal type="mentions" onClose={() => setActiveModal(null)} />}
      {activeModal === 'confidentialite' && <LegalModal type="confidentialite" onClose={() => setActiveModal(null)} />}
    </>
  );
}
