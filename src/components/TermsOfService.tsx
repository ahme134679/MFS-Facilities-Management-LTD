import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none text-gray-600">
          <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
          
          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By viewing or using this website, which can be accessed at MFS Facilities Management, you are agreeing to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials on MFS Facilities Management's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on MFS Facilities Management's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            All the materials on MFS Facilities Management's website are provided "as is". MFS Facilities Management makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, MFS Facilities Management does not make any representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to this website.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">4. Limitations</h2>
          <p className="mb-4">
            MFS Facilities Management or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on MFS Facilities Management's website, even if MFS Facilities Management or an authorize representative of this website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
          </p>
        </div>
      </div>
    </div>
  );
}
