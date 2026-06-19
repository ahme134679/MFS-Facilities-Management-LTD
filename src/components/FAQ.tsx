import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is facilities management?",
      answer: "Facilities management (FM) encompasses the comprehensive range of services required to ensure the built environment is safe, efficient, and well-maintained. At MFS Facilities Management, this includes hard services like property maintenance and soft services like professional cleaning services UK. Our integrated approach ensures that your operations run smoothly, allowing you to focus on your core business."
    },
    {
      question: "Do you provide security services across the UK?",
      answer: "Yes, MFS Facilities management provides premium security services across the entire UK. While we have a strong regional focus and expertise in Cardiff, Newport, South Wales, and Bristol, our operations and network of fully vetted professionals enable us to deliver reliable security solutions nationwide."
    },
    {
      question: "Can you provide cleaning and maintenance together?",
      answer: "Absolutely. As a comprehensive facilities management UK provider, we specialize in delivering bundled services. We can seamlessly integrate our professional cleaning services UK with our property services UK and maintenance solutions. This provides you with a single point of contact, improved efficiency, and a consistently high standard of service across your premises."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-6">Frequently Asked Questions</h3>
          <p className="text-gray-600 text-lg">
            Find answers to common queries about our security services UK and MFS Facilities management solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-colors hover:border-mfs-gold/50 bg-slate-50"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-lg text-mfs-navy">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-mfs-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
