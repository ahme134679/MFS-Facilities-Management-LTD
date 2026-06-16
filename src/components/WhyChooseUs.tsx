import { ShieldCheck, Users, Clock, Target, Award, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Unwavering Commitment to Quality",
      description: "We don't just meet standards; we exceed them. Our rigorous quality assurance protocols ensure that every service we deliver—from security to cleaning services UK—operates at the highest echelon of professionalism.",
      icon: <Award className="h-10 w-10 text-mfs-gold mb-4" />
    },
    {
      title: "SIA Licensed & Vetted Personnel",
      description: "Trust is the foundation of our business. All our security professionals are fully SIA licensed, continuously trained, and strictly vetted to provide secure and reliable security services UK.",
      icon: <ShieldCheck className="h-10 w-10 text-mfs-gold mb-4" />
    },
    {
      title: "Tailored Solutions",
      description: "We understand that no two businesses are alike. Our MFS Facilities management approach involves a deep dive into your specific needs to craft bespoke property services UK and security plans.",
      icon: <Target className="h-10 w-10 text-mfs-gold mb-4" />
    },
    {
      title: "24/7 Uninterrupted Support",
      description: "Security and facilities issues can arise at any hour. Our control room and mobile units are operational 24/7, guaranteeing rapid response times and uninterrupted peace of mind.",
      icon: <Clock className="h-10 w-10 text-mfs-gold mb-4" />
    },
    {
      title: "Comprehensive Services",
      description: "From manned guarding and mobile patrols to integrated cleaning services UK and property maintenance, we provide a single point of contact for all your Facilities Management UK needs.",
      icon: <Wrench className="h-10 w-10 text-mfs-gold mb-4" />
    },
    {
      title: "Experienced Leadership",
      description: "Guided by industry veterans, our management team brings decades of collective experience, ensuring strategic oversight and innovative problem-solving for your organization.",
      icon: <Users className="h-10 w-10 text-mfs-gold mb-4" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">The MFS Difference</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-6">Why Choose MFS Facilities Management?</h3>
          <p className="text-gray-600 text-lg">
            Choosing the right partner for your security services UK and facilities management UK is critical. Here is why clients across the UK trust MFS Facilities management to protect their assets and streamline their property services UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-mfs-gold/30"
            >
              {reason.icon}
              <h4 className="text-xl font-bold text-mfs-navy mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
