import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About({ setCurrentPage }: { setCurrentPage?: (page: string) => void }) {
  const points = [
    "SIA Approved Contractor Scheme (ACS) Status",
    "ISO 9001 Quality Management Certified",
    "Tailored Sector-Specific Security Solutions",
    "Rigorous Vetting & Training Interventions",
    "24/7/365 National Control Centre",
    "Rapid Incident Response Times"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Security Guard" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mfs-gold rounded-lg -z-0 hidden md:block"></div>
              {/* Floating Stat Badge */}
              <div className="absolute -left-6 top-12 bg-white p-6 rounded-lg shadow-xl z-20 hidden sm:block">
                <div className="text-4xl font-black text-mfs-navy mb-1">15+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years of<br/>Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">About MFS Facilities Management</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-6">
              Setting the standard in professional security services.
            </h3>
            
            <div className="text-gray-600 space-y-4 mb-8 text-lg">
              <p>
                At MFS Facilities Management LTD, we understand that security is not a one-size-fits-all commodity. We are a trusted provider of bespoke security guarding and facilities management across the UK, with a strong focus on Cardiff, Newport, South Wales, and Bristol.
              </p>
              <p>
                Our philosophy is built on three core pillars: proactive risk management, highly-trained personnel, and unwavering reliability. Whether you require premium corporate concierge, robust construction site security, or rapid alarm response, we partner with you to safeguard your operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-mfs-blue shrink-0" />
                  <span className="text-mfs-navy font-medium text-sm pt-0.5">{point}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) setCurrentPage('home');
                setTimeout(() => {
                  const el = document.getElementById('services');
                  if(el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-block bg-mfs-navy hover:bg-mfs-blue text-white font-bold px-8 py-4 rounded-md transition-colors"
            >
              Discuss Your Security Needs
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
