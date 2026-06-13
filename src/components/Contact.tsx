import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/28dda927cc0cd5fd11e7f0886c83088e", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mfs-gold font-bold tracking-wider uppercase text-sm mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-4">Ready to secure your business?</h3>
          <p className="text-gray-600 text-lg">
            Contact our dedicated team today for a free, no-obligation security vulnerability assessment and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-gray-100 h-full">
              <h4 className="text-xl font-bold text-mfs-navy mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mfs-navy text-mfs-gold p-3 rounded-full shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-mfs-navy mb-1">Phone (24/7)</h5>
                    <a href="tel:+447563263846" className="text-gray-600 hover:text-mfs-gold transition-colors">+44-7563-263846</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mfs-navy text-mfs-gold p-3 rounded-full shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-mfs-navy mb-1">Email Queries</h5>
                    <a href="mailto:Mfsltd1214@gmail.com" className="text-gray-600 hover:text-mfs-gold transition-colors">Mfsltd1214@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mfs-navy text-mfs-gold p-3 rounded-full shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-mfs-navy mb-1">Head Office</h5>
                    <p className="text-gray-600 leading-relaxed">
                      NP19 0BT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <div className="bg-mfs-gold text-mfs-navy p-3 rounded-full shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-mfs-navy mb-1">National Control Room</h5>
                    <p className="text-gray-600 font-medium">Operational 24 Hours / 365 Days</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-lg border border-gray-200 shadow-xl shadow-gray-200/40 relative overflow-hidden">
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              
              <h4 className="text-2xl font-bold text-mfs-navy mb-8">Request a Callback</h4>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h5 className="text-2xl font-bold text-mfs-navy mb-2">Message Sent!</h5>
                  <p className="text-gray-600">Thank you for getting in touch. Our team will contact you shortly.</p>
                  <button 
                    type="button" 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-mfs-blue font-bold hover:text-mfs-navy transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded mb-6 text-sm">
                      There was a problem sending your message. Please try again later.
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input type="text" id="company" name="company" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow" placeholder="Your Business Ltd" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telephone Number *</label>
                      <input type="tel" id="phone" name="phone" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow" placeholder="07123 456789" required />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Primary Service Interest</label>
                    <select id="service" name="service" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow text-gray-600">
                      <option>Manned Guarding</option>
                      <option>Mobile Patrols</option>
                      <option>Keyholding & Alarm Response</option>
                      <option>CCTV Monitoring</option>
                      <option>Event Security</option>
                      <option>Door Supervision (Pubs & Bars)</option>
                      <option>Facilities Management</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mfs-blue focus:border-transparent transition-shadow resize-none" placeholder="Provide any details about your security requirements..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full bg-mfs-navy hover:bg-mfs-blue text-white font-bold py-4 rounded-md transition-colors text-lg ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
