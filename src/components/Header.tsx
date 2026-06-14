import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', href: '#' },
    { name: 'About Us', page: 'about', href: '#' },
    { name: 'Services', page: 'home', href: '#services' },
    { name: 'Sectors', page: 'home', href: '#sectors' },
    { name: 'Contact', page: 'contact', href: '#' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; page: string; href: string }) => {
    if (link.href === '#') {
      e.preventDefault();
      setCurrentPage(link.page);
      window.scrollTo(0, 0);
    } else {
      if (currentPage !== link.page) {
        setCurrentPage(link.page);
        // Let the browser handle the hash after navigating
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-mfs-navy shadow-lg py-2' : 'bg-mfs-navy/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer shrink-0"
            onClick={(e) => handleNavClick(e as any, navLinks[0])}
          >
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczP1mvUhzCeI25Ip1kdtgh6JMVWOZ80i6XnlZENYJI8GmjYWRkeKXVp5xqiCDGMCzIJsWsNeG0rpNxfDV8MSazgBZALDRenRhtptDPhZvHeC-bnVddfj=s800" 
              alt="MFS Facilities Management" 
              className="h-14 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-base md:text-lg leading-tight uppercase tracking-wide">MFS Facilities Management LTD</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page && (link.href === '#' || window.location.hash === link.href)
                    ? 'text-mfs-gold' 
                    : 'text-gray-200 hover:text-mfs-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Contact */}
          <div className="hidden md:flex flex-col items-end">
             <a href="tel:+447563263846" className="flex items-center gap-2 text-mfs-gold font-bold hover:text-mfs-gold/80 transition-colors">
               <Phone className="h-4 w-4" />
               <span>+44-7563-263846</span>
             </a>
             <a 
               href="#" 
               onClick={(e) => handleNavClick(e, { name: 'Contact', page: 'contact', href: '#' })}
               className="mt-1 bg-mfs-gold hover:bg-mfs-gold-hover text-mfs-navy font-bold px-5 py-2 rounded text-sm transition-colors"
             >
               Get a Quote
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mfs-navy border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`block font-medium ${
                  currentPage === link.page && (link.href === '#' || window.location.hash === link.href)
                    ? 'text-mfs-gold' 
                    : 'text-gray-200 hover:text-mfs-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <a href="tel:+447563263846" className="flex items-center gap-2 text-mfs-gold font-bold mb-4 hover:text-mfs-gold/80 transition-colors">
                <Phone className="h-5 w-5" />
                <span>+44-7563-263846</span>
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, { name: 'Contact', page: 'contact', href: '#' })}
                className="block text-center bg-mfs-gold text-mfs-navy font-bold px-4 py-3 rounded"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
