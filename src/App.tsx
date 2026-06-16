import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Sectors from './components/Sectors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import SectorsPage from './components/SectorsPage';

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
            <About />
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
        ) : null}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

