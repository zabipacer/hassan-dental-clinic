import React from 'react';

const LocalSEOSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12" id="location">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Visit Dr. Teeth Dental Care in Faisalabad
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Google Maps Embed */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Dr. Teeth Dental Care Faisalabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.123456789!2d73.1040157!3d31.4015913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922677a4d131f8f%3A0x502ed6b52d5002c8!2sDr.%20Teeth%20Dental%20Care!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Clinic Information */}
          <div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Address:</strong> Doctor Teeth Dental Clinic Ajmal Center, opposite Gourmet Bakery, near Nadra Executive, Batala Colony, Faisalabad.
          
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Phone:</strong> <a href="tel:03334271398" className="text-blue-600 hover:underline">0321-6739504</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Service Areas:</strong> Eden Valley, Jinnah Colony, Batala Colony, Peoples Colony, Gulberg, and surrounding areas.
            </p>
            <a
  href="https://wa.me/923216739504" // Replace with your correct number
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
>
  Need Help Finding our clinic in Faisalabad?
</a>


          </div>
        </div>

        {/* Schema.org LocalBusiness Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Teeth Dental Care",
            "image": "https://example.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "208 Chak Road, Jinnah Avenue, Eden Valley",
              "addressLocality": "Faisalabad",
              "addressRegion": "Punjab",
              "postalCode": "38000",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.4015913,
              "longitude": 73.1040157
            },
            "url": "https://yourwebsite.com",
            "telephone": "+92-333-4271398",
            "openingHours": "Mo-Su 09:00-23:00"
          })}
        </script>
      </div>
    </section>
  );
};

export default LocalSEOSection;
