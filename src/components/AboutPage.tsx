import { motion } from 'motion/react';
import { Target, Shield, Users, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { title: "Integrity", description: "Operating with absolute honesty and transparency in all our business transactions, building trust from day one.", icon: <Shield className="h-8 w-8 text-mfs-gold" /> },
    { title: "Excellence", description: "Striving for the highest quality of service through rigorous training, continuous improvement, and strict adherence to industry standards.", icon: <Target className="h-8 w-8 text-mfs-gold" /> },
    { title: "People First", description: "Investing in our staff through comprehensive vetting, training, and ongoing support to ensure they represent both our brand and yours impeccably.", icon: <Users className="h-8 w-8 text-mfs-gold" /> },
    { title: "Commitment", description: "Dedicated to the safety and security of our clients, providing reliable protection and rapid response capabilities 24 hours a day.", icon: <Heart className="h-8 w-8 text-mfs-gold" /> },
  ];

  const milestones = [
    "SIA Approved Contractor Scheme (ACS) Status Achieved",
    "ISO 9001 Quality Management Certified",
    "Expansion across all major UK cities, including Cardiff, Newport, South Wales, and Bristol",
    "Implementation of state-of-the-art 24/7 Control Room",
    "Dedicated bespoke training academy for all operatives"
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Our Story</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-mfs-navy mb-6">About MFS Facilities management UK</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We are a premier provider of highly trained, reliable, and professional security services UK and comprehensive MFS Facilities management services across the United Kingdom. We pride ourselves on delivering top-tier property services UK and cleaning services UK, especially in Cardiff, Newport, South Wales, and Bristol.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-mfs-navy text-white p-10 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-mfs-gold">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To deliver uncompromising security solutions and impeccable facilities management, tailored to the unique operational challenges of our clients. We mitigate risk so you can focus on driving your business forward.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border text-mfs-navy border-gray-200 p-10 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be recognised as the UK's most trusted and innovative security partner, setting the benchmark for operational excellence, integrity, and client satisfaction within the private security sector.
            </p>
          </motion.div>
        </div>

        {/* Company History / Why Choose Us */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Meeting" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-mfs-gold/20 rounded-full blur-2xl -z-0"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-mfs-navy mb-6">Our Commitment to Excellence</h2>
            <div className="text-gray-600 space-y-4 mb-8 text-lg">
              <p>
                Founded in 2025 on the principles of reliability and professionalism, MFS Facilities Management has grown into a leading force in the UK security industry, specifically serving Cardiff, Newport, South Wales, and Bristol. We understand that security is more than just a physical presence; it is about proactive risk management, advanced technology integration, and impeccable customer service.
              </p>
              <p>
                Our rigorous recruitment process ensures we only deploy SIA-licensed professionals who undergo continuous training in conflict management, customer care, and emergency response.
              </p>
            </div>
            
            <div className="space-y-4">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-mfs-blue shrink-0" />
                  <span className="text-mfs-navy font-medium pt-0.5">{milestone}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-mfs-navy mb-4">Our Core Values</h2>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg">The principles that guide our everyday operations and relationships with clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-mfs-navy mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
