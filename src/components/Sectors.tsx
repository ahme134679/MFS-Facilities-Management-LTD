import { Building, Store, HardHat, GraduationCap, Plane, Home, Beer } from 'lucide-react';

interface SectorsProps {
  setCurrentPage: (page: string) => void;
  setSelectedSector: (sectorId: string) => void;
}

export default function Sectors({ setCurrentPage, setSelectedSector }: SectorsProps) {
  const sectors = [
    { id: 'corporate', title: "Corporate & Office", icon: <Building className="h-10 w-10 mb-4" /> },
    { id: 'retail', title: "Retail & Shopping", icon: <Store className="h-10 w-10 mb-4" /> },
    { id: 'construction', title: "Construction", icon: <HardHat className="h-10 w-10 mb-4" /> },
    { id: 'education', title: "Education", icon: <GraduationCap className="h-10 w-10 mb-4" /> },
    { id: 'aviation', title: "Aviation & Transport", icon: <Plane className="h-10 w-10 mb-4" /> },
    { id: 'residential', title: "Residential & Estates", icon: <Home className="h-10 w-10 mb-4" /> },
    { id: 'pubs', title: "Pubs & Bars", icon: <Beer className="h-10 w-10 mb-4" /> }
  ];

  const handleSectorClick = (sectorId: string) => {
    setSelectedSector(sectorId);
    setCurrentPage('sectors');
    window.scrollTo(0, 0);
  };

  return (
    <section id="sectors" className="py-20 bg-mfs-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Industries We Serve</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Protecting Every Sector</h3>
          <p className="text-gray-300 text-lg mb-8">
            Our specialised teams understand the unique threats and compliance demands of different operational environments.
          </p>
          <button 
            onClick={() => {
              setSelectedSector('corporate');
              setCurrentPage('sectors');
              window.scrollTo(0, 0);
            }}
            className="bg-mfs-gold hover:bg-mfs-gold-hover text-mfs-navy font-bold px-8 py-3 rounded transition-colors"
          >
            View All Sectors
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              onClick={() => handleSectorClick(sector.id)}
              className="flex flex-col items-center text-center p-6 border border-gray-700 hover:border-mfs-gold hover:bg-white/5 transition-colors rounded-lg group cursor-pointer"
            >
              <div className="text-gray-400 group-hover:text-mfs-gold transition-colors">
                {sector.icon}
              </div>
              <h4 className="font-semibold text-sm">{sector.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
