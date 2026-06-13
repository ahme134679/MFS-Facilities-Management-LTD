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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Sectors />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : null}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

