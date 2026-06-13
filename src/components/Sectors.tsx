import { Building, Store, HardHat, GraduationCap, Plane, Home, Beer } from 'lucide-react';

export default function Sectors() {
  const sectors = [
    { title: "Corporate & Office", icon: <Building className="h-10 w-10 mb-4" /> },
    { title: "Retail & Shopping", icon: <Store className="h-10 w-10 mb-4" /> },
    { title: "Construction", icon: <HardHat className="h-10 w-10 mb-4" /> },
    { title: "Education", icon: <GraduationCap className="h-10 w-10 mb-4" /> },
    { title: "Aviation & Transport", icon: <Plane className="h-10 w-10 mb-4" /> },
    { title: "Residential & Estates", icon: <Home className="h-10 w-10 mb-4" /> },
    { title: "Pubs & Bars", icon: <Beer className="h-10 w-10 mb-4" /> }
  ];

  return (
    <section id="sectors" className="py-20 bg-mfs-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Industries We Serve</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Protecting Every Sector</h3>
          <p className="text-gray-300 text-lg">
            Our specialised teams understand the unique threats and compliance demands of different operational environments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-gray-700 hover:border-mfs-gold hover:bg-white/5 transition-colors rounded-lg group"
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
