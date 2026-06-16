import React, { useState, useEffect } from 'react';
import { Building, Store, HardHat, GraduationCap, Plane, Home, Beer, ChevronRight, CheckCircle2 } from 'lucide-react';

interface SectorPageProps {
  initialSector?: string | null;
  setCurrentPage: (page: string) => void;
}

const sectorsData = [
  { 
    id: 'corporate',
    title: "Corporate & Office", 
    icon: <Building className="h-6 w-6" />,
    description: "Comprehensive security solutions tailored for corporate environments, ensuring a safe and productive workplace while maintaining a professional and welcoming atmosphere for employees and visitors.",
    details: [
      "Manned guarding and reception duties",
      "Access control management and visitor logging",
      "CCTV monitoring and surveillance",
      "Patrolling and out-of-hours security",
      "Emergency response and evacuation assistance",
      "Keyholding and rapid alarm response"
    ]
  },
  { 
    id: 'retail',
    title: "Retail & Shopping", 
    icon: <Store className="h-6 w-6" />,
    description: "Specialised retail security to minimize shrinkage, deter theft, and provide a safe shopping experience for customers and staff in retail outlets, shopping centers, and supermarkets.",
    details: [
      "Uniformed retail security officers for visible deterrence",
      "Undercover store detectives",
      "CCTV operations and monitoring",
      "Crowd control during sales or special events",
      "Loss prevention strategies and audits",
      "First aid trained security staff"
    ]
  },
  { 
    id: 'construction',
    title: "Construction", 
    icon: <HardHat className="h-6 w-6" />,
    description: "Robust security guarding protecting your high-value plant, machinery, tools, and materials on construction sites against theft and vandalism, especially out of hours.",
    details: [
      "24/7 site security and perimeter patrols",
      "Access control for contractors and deliveries",
      "Out-of-hours static guarding",
      "Mobile patrols and alarm response",
      "Health and safety compliance monitoring",
      "CCTV tower deployment and monitoring"
    ]
  },
  { 
    id: 'education',
    title: "Education", 
    icon: <GraduationCap className="h-6 w-6" />,
    description: "Creating a secure and supportive learning environment for schools, colleges, and university campuses. We prioritize student and staff safety with a friendly, approachable presence.",
    details: [
      "Campus patrols and static guarding",
      "Access control and student ID verification",
      "Event security for graduation and open days",
      "CCTV monitoring and control room operations",
      "Emergency response protocols",
      "Nightwatchmen and keyholding services"
    ]
  },
  { 
    id: 'aviation',
    title: "Aviation & Transport", 
    icon: <Plane className="h-6 w-6" />,
    description: "Strictly compliant security solutions for the aviation and transport sectors, focusing on threat prevention, passenger safety, and securing sensitive operational areas.",
    details: [
      "Aviation security compliant guarding",
      "Baggage and cargo screening support",
      "Perimeter and airside security patrols",
      "Passenger profiling and crowd management",
      "Access control for restricted areas",
      "Threat assessment and emergency response"
    ]
  },
  { 
    id: 'residential',
    title: "Residential & Estates", 
    icon: <Home className="h-6 w-6" />,
    description: "Discreet and reliable security providing peace of mind for private estates, residential complexes, and luxury accommodations. We integrate seamlessly into the community.",
    details: [
      "Concierge and front desk security",
      "Estate patrols and boundary security",
      "Access control and visitor validation",
      "CCTV surveillance and alarm monitoring",
      "Keyholding and alarm response",
      "Mail and package screening"
    ]
  },
  { 
    id: 'pubs',
    title: "Pubs & Bars", 
    icon: <Beer className="h-6 w-6" />,
    description: "Professional door supervision and security services designed to maintain a safe, welcoming, and compliant environment for patrons and staff in licensed premises.",
    details: [
      "SIA licensed door supervisors",
      "ID checking and entry age verification",
      "Conflict management and de-escalation",
      "Capacity monitoring and crowd control",
      "Search policies implementation",
      "Liaison with local police and licensing authorities"
    ]
  }
];

export default function SectorsPage({ initialSector, setCurrentPage }: SectorPageProps) {
  const [selectedSector, setSelectedSector] = useState(sectorsData[0]);

  useEffect(() => {
    if (initialSector) {
      const found = sectorsData.find(s => s.id === initialSector);
      if (found) {
        setSelectedSector(found);
      }
    }
  }, [initialSector]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-mfs-navy font-bold tracking-wider uppercase text-sm mb-2">Industries We Serve</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Security Solutions Across All Sectors</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From the bustling atmosphere of pubs and bars to the high-security demands of corporate offices and construction sites, our specialized teams are trained to mitigate sector-specific risks with unwavering professionalism.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-32">
              <div className="bg-mfs-navy text-white p-6">
                <h3 className="font-bold text-xl">Select Sector</h3>
              </div>
              <div className="flex flex-col divide-y divide-gray-100">
                {sectorsData.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector)}
                    className={`flex items-center justify-between p-5 text-left transition-colors ${
                      selectedSector.id === sector.id 
                        ? 'bg-mfs-gold/10 text-mfs-navy font-bold border-l-4 border-mfs-gold' 
                        : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${selectedSector.id === sector.id ? 'text-mfs-gold' : 'text-gray-400'}`}>
                        {sector.icon}
                      </div>
                      <span>{sector.title}</span>
                    </div>
                    <ChevronRight className={`h-5 w-5 ${selectedSector.id === sector.id ? 'text-mfs-gold' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-mfs-navy/5 p-4 rounded-xl text-mfs-navy">
                  {React.cloneElement(selectedSector.icon, { className: "h-10 w-10 text-mfs-navy" })}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedSector.title}</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="lead text-xl font-medium text-gray-800 mb-8 border-l-4 border-mfs-gold pl-4">
                  {selectedSector.description}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Comprehensive Details & Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedSector.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <CheckCircle2 className="h-6 w-6 text-mfs-gold shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-mfs-navy text-white p-8 rounded-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Need bespoke security for your {selectedSector.title.toLowerCase()} business?</h3>
                    <p className="text-gray-300 mb-6 max-w-xl">
                      Contact our specialised team today for a comprehensive risk assessment and custom-tailored security quotation.
                    </p>
                    <button onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('contact');
                      window.scrollTo(0, 0);
                    }} className="inline-block bg-mfs-gold hover:bg-mfs-gold-hover text-mfs-navy font-bold px-8 py-3 rounded text-center transition-colors">
                      Get a Custom Quote
                    </button>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                    {React.cloneElement(selectedSector.icon, { className: "w-64 h-64" })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
