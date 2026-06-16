import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import SectorsPage from './components/SectorsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ModernSlavery from './components/ModernSlavery';
import FAQ from './components/FAQ';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState('Manned Guarding');
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services setCurrentPage={setCurrentPage} setSelectedService={setSelectedService} />
            <WhyChooseUs />
            <FAQ />
            <About setCurrentPage={setCurrentPage} />
            <Sectors setCurrentPage={setCurrentPage} setSelectedSector={setSelectedSector} />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'service-details' ? (
          <ServiceDetailsPage serviceTitle={selectedService} setCurrentPage={setCurrentPage} />
        ) : currentPage === 'sectors' ? (
          <SectorsPage initialSector={selectedSector} setCurrentPage={setCurrentPage} />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'terms' ? (
          <TermsOfService />
        ) : currentPage === 'slavery' ? (
          <ModernSlavery />
        ) : null}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

