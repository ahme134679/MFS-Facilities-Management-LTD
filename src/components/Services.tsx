import { Shield, Users, Clock, Building2, MapPin, Beer } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Manned Guarding",
      description: "Highly trained, SIA licensed security officers providing a visible, physical deterrent for commercial and retail properties.",
      icon: <Users className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "Mobile Patrols",
      description: "Scheduled and randomized mobile security patrols ensuring your premises remain secure out of hours.",
      icon: <MapPin className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "Keyholding & Alarm Response",
      description: "Rapid deployment to alarm activations 24/7. We hold your keys securely and handle threats so you don't have to.",
      icon: <Clock className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "Corporate Security",
      description: "Professional concierge and reception security blending customer service excellence with strict access control.",
      icon: <Building2 className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "CCTV & Remote Monitoring",
      description: "State-of-the-art surveillance installation and proactive 24-hour remote monitoring from our control center.",
      icon: <Shield className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "Door Supervision (Pubs & Bars)",
      description: "Professional, SIA licensed door supervisors ensuring a safe, welcoming environment for your patrons and staff.",
      icon: <Beer className="h-8 w-8 text-mfs-gold" />
    },
    {
      title: "Facilities Management",
      description: "Comprehensive fm services including cleaning, maintenance, and site management for seamless business operations.",
      icon: <Shield className="h-8 w-8 text-mfs-gold" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-4">Comprehensive Security Solutions</h3>
          <p className="text-gray-600 text-lg">
            We deliver tailored security and facilities management services designed to mitigate risk and protect your most valuable assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-lg p-8 hover:shadow-xl hover:border-gray-200 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-mfs-navy mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#contact" className="text-mfs-blue font-semibold text-sm flex items-center gap-1 hover:text-mfs-gold transition-colors">
                Learn more &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
