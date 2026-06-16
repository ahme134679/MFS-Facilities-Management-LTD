import React from 'react';

export default function ModernSlavery() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-8">Modern Slavery Statement</h1>
        
        <div className="prose prose-slate max-w-none text-gray-600">
          <p className="mb-4">For the Financial Year {new Date().getFullYear()}</p>
          
          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">Our Commitment</h2>
          <p className="mb-4">
            MFS Facilities Management is entirely committed to preventing modern slavery and human trafficking in our corporate activities, and to ensuring that our supply chains are free from these practices. We recognize our responsibility to take a robust approach to slavery and human trafficking.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">Policies on Slavery and Human Trafficking</h2>
          <p className="mb-4">
            We are committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. Our Modern Slavery Policy reflects our commitment to acting ethically and with integrity in all our business relationships and to implementing and enforcing effective systems and controls to ensure slavery and human trafficking is not taking place anywhere in our supply chains.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">Due Diligence Processes</h2>
          <p className="mb-4">
            As part of our initiative to identify and mitigate risk we have in place systems to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identify and assess potential risk areas in our supply chains.</li>
            <li>Mitigate the risk of slavery and human trafficking occurring in our supply chains.</li>
            <li>Monitor potential risk areas in our supply chains.</li>
            <li>Protect whistle blowers.</li>
          </ul>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">Supplier Adherence</h2>
          <p className="mb-4">
            We have zero tolerance to slavery and human trafficking. To ensure all those in our supply chain and contractors comply with our values we have in place a supply chain compliance programme. This consists of stringent vetting processes for all new suppliers and regular reviews of existing suppliers.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">Training</h2>
          <p className="mb-4">
            To ensure a high level of understanding of the risks of modern slavery and human trafficking in our supply chains and our business, we provide training to our staff.
          </p>
        </div>
      </div>
    </div>
  );
}
