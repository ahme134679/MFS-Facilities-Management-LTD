import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-mfs-navy mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none text-gray-600">
          <p className="mb-4">Last updated: {new Date().getFullYear()}</p>
          
          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it.</li>
            <li><strong>Third-party cookies:</strong> In some special cases, we also use cookies provided by trusted third parties, such as analytics to help us understand how you use the site and ways that we can improve your experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">3. Disabling Cookies</h2>
          <p className="mb-4">
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          </p>

          <h2 className="text-xl font-bold text-mfs-navy mt-8 mb-4">4. More Information</h2>
          <p className="mb-4">
            If you need more information regarding our cookie policy, please contact us through our preferred contact methods available on the site.
          </p>
        </div>
      </div>
    </div>
  );
}
