import React from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, href: string) => {
    if (href === '#') {
      e.preventDefault();
      setCurrentPage(page);
      window.scrollTo(0, 0);
    } else {
      setCurrentPage(page);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#050B14] pt-16 pb-8 border-t-4 border-mfs-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-mfs-gold" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">MFS</span>
                <span className="text-gray-400 text-xs tracking-wider">FACILITIES MANAGEMENT</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier security provider offering industry-leading manned guarding, mobile patrols, and risk management solutions across the UK, specializing in Cardiff, Newport, South Wales, and Bristol.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61590675005764" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-mfs-gold hover:text-white transition-all"><Facebook className="h-4 w-4" /></a>
              <a href="https://x.com/MFSFacilities" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-mfs-gold hover:text-white transition-all"><Twitter className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/mfs-management-085572416/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-mfs-gold hover:text-white transition-all"><Linkedin className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/mfsfacilities/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-mfs-gold hover:text-white transition-all"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home', '#')} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about', '#')} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'home', '#services')} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Our Services</a></li>
              <li><a href="#sectors" onClick={(e) => handleNavClick(e, 'home', '#sectors')} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Industry Sectors</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact', '#')} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Security Services</h4>
            <ul className="space-y-3">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e as any, 'home', '#services'); }} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Manned Guarding</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e as any, 'home', '#services'); }} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Mobile Patrols</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e as any, 'home', '#services'); }} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Keyholding & Alarm Response</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e as any, 'home', '#services'); }} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">CCTV Monitoring</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e as any, 'home', '#services'); }} className="text-gray-400 hover:text-mfs-gold text-sm transition-colors block">Concierge Security</a></li>
            </ul>
          </div>

          {/* Accreditations Dummy */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
               {/* Visual placeholders for badges like SIA, ISO 9001 etc */}
               <div className="bg-white/5 border border-white/10 rounded overflow-hidden aspect-video flex flex-col items-center justify-center p-2 text-center text-xs text-gray-400">
                  <ShieldCheck className="h-6 w-6 text-mfs-gold mb-1" />
                  SIA Approved
               </div>
               <div className="bg-white/5 border border-white/10 rounded overflow-hidden aspect-video flex flex-col items-center justify-center p-2 text-center text-xs text-gray-400">
                  <ShieldCheck className="h-6 w-6 text-gray-300 mb-1" />
                  ISO 9001
               </div>
               <div className="bg-white/5 border border-white/10 rounded overflow-hidden aspect-video flex flex-col items-center justify-center p-2 text-center text-xs text-gray-400">
                  <ShieldCheck className="h-6 w-6 text-gray-300 mb-1" />
                  SafeContractor
               </div>
               <div className="bg-white/5 border border-white/10 rounded overflow-hidden aspect-video flex flex-col items-center justify-center p-2 text-center text-xs text-gray-400">
                  <ShieldCheck className="h-6 w-6 text-gray-300 mb-1" />
                  CHAS
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} MFS Facilities Management LTD. All rights reserved. Registered in 2025. Company Reg: 16304479.
          </p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); window.scrollTo(0,0); }} className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('cookies'); window.scrollTo(0,0); }} className="text-gray-500 hover:text-white text-xs transition-colors">Cookie Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); window.scrollTo(0,0); }} className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('slavery'); window.scrollTo(0,0); }} className="text-gray-500 hover:text-white text-xs transition-colors">Modern Slavery Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
