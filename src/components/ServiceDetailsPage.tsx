import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function ServiceDetailsPage({
  serviceTitle,
  setCurrentPage,
}: {
  serviceTitle: string;
  setCurrentPage: (page: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [serviceTitle]);

  const allServices: Record<string, { desc: string, benefits: string[] }> = {
    "Manned Guarding": {
      desc: "Our SIA licensed security officers provide a strong physical deterrent for your premises. We offer reliable, continuous on-site security services UK from MFS Facilities management, tailored to blend in or stand out according to your business needs.",
      benefits: ["Highly trained personnel", "Conflict management skills", "Regularly vetted guards", "Tailored to your site requirements"]
    },
    "Mobile Patrols": {
      desc: "If full-time manned guarding is not required, our mobile patrols provide randomized physical checks of your premises to deter unauthorized access and stop threats early. Trusted property services UK and security services UK.",
      benefits: ["Randomized schedules", "GPS-tracked patrols", "Rapid threat identification", "Cost-effective security"]
    },
    "Keyholding & Alarm Response": {
      desc: "We deploy to your site 24/7 in response to alarm activations so you and your staff don't have to risk potential danger or out-of-hours disruption. Part of our comprehensive facilities management UK solutions.",
      benefits: ["Rapid response times", "First-responder coordination", "Comprehensive post-incident reports", "Complete peace of mind"]
    },
    "Corporate Security": {
      desc: "Corporate environments require security that balances safety with approachability. Our concierge security staff excel in customer service while maintaining strict access control in all our security services UK and property services UK.",
      benefits: ["Front-of-house reception duties", "Visitor management", "Discreet access monitoring", "Professional business attire"]
    },
    "CCTV & Remote Monitoring": {
      desc: "Ensure your premises are watched constantly with our state-of-the-art CCTV systems, monitored proactively from our 24-hour control center.",
      benefits: ["Visual verification of alarms", "Deterrent against theft and vandalism", "Evidence gathering", "24/7 remote oversight"]
    },
    "Door Supervision (Pubs & Bars)": {
      desc: "Professional, SIA licensed door supervisors ensuring a safe, welcoming environment for your patrons and staff, particularly across Cardiff, Newport, South Wales, and Bristol.",
      benefits: ["Capacity and access control", "Conflict de-escalation", "Licensing law compliance", "First aid trained personnel"]
    },
    "Facilities Management UK & Cleaning Services UK": {
      desc: "Beyond security, MFS Facilities management offers comprehensive facilities management UK services to keep your operations running smoothly. From professional cleaning services UK to comprehensive property services UK and scheduled maintenance, we have you covered.",
      benefits: ["Integrated cleaning services UK", "Routine property services UK maintenance", "Vendor management", "Single point of contact"]
    }
  };

  const details = allServices[serviceTitle] || {
    desc: "We provide comprehensive solutions tailored to your unique requirements.",
    benefits: ["Professional implementation", "Tailored to your needs", "24/7 Support"]
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-mfs-blue font-semibold hover:text-mfs-navy mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Services
        </button>

        {isLoading ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="p-8 md:p-12">
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="space-y-3 mb-12">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>

              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-100">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-12 bg-gray-200 rounded w-40"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-4xl font-bold text-mfs-navy mb-6">{serviceTitle}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                {details.desc}
              </p>

              <h3 className="text-2xl font-bold text-mfs-navy mb-6">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-mfs-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-xl font-bold text-mfs-navy mb-4">Interested in this service?</h4>
                <p className="text-gray-600 mb-6">Contact us today to discuss your specific requirements and receive a tailored quote.</p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-mfs-navy hover:bg-mfs-blue text-white font-bold py-3 px-8 rounded-md transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
