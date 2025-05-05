import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16" id="why-us">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Why Faisalabad Chooses Doctor Teeth Dental Clinic
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 text-xl">✓</span>
              <span><strong>Pain-Free Technology</strong> – anxiety-free dentistry with advanced equipment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 text-xl">✓</span>
              <span><strong>Same-Day Appointments</strong> – trusted <span className="text-blue-700 font-medium">emergency dentist in Faisalabad</span>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-3 text-xl">✓</span>
              <span><strong>FDA-Approved Materials</strong> – we use only safe, globally certified tools and products.</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src="/modern.jpg"
            alt="Modern dental clinic in DHA Lahore"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "[Clinic Name]",
          "medicalSpecialty": [
            "Dentistry",
            "Emergency",
            "Cosmetic"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "PK"
          },
          "image": "https://yourdomain.com/images/clinic-lobby.jpg",
          "url": "https://yourdomain.com",
          "description": "A modern dental clinic in DHA Lahore offering anxiety-free dentistry, same-day appointments, and FDA-approved treatments."
        })
      }} />
    </section>
  );
};

export default WhyChooseUs;
