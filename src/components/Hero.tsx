import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888086225-f6740bc75f4d?q=80&w=2940&auto=format&fit=crop" 
          alt="Security Guard Patrol" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-mfs-navy/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mfs-navy via-mfs-navy/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-mfs-gold/20 text-mfs-gold border border-mfs-gold/30 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Industry Leading Protection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-4">
              Professional <span className="text-mfs-gold">Security</span> & Facilities Management
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Tailored security solutions safeguarding your business, assets, and people across the UK. Excellence and vigilance you can rely on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-mfs-gold hover:bg-mfs-gold-hover text-mfs-navy font-bold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Request a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Our Services
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-mfs-gold" />
                <span>SIA Approved Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-mfs-gold" />
                <span>24/7 Control Room</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-mfs-gold" />
                <span>Rapid Alarm Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
