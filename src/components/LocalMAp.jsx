import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const LOCAL_INFO = {
  name: 'Hassan Dental Surgery',
  subtitle: 'Dr. Imran Zafer Bucha',
  address: 'Shop #10, Mohammad Arcade, Chungi No. 9, Multan, 60000',
  phone: '+923336194850',
  hours: 'Closed ⋅ Opens 5 PM',
  rating: 5.0,
  reviewCount: 26,
  category: 'Dental clinic in Multan',
};

export default function LocalSEOSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-poppins overflow-hidden"
      aria-labelledby="location-title"
    >
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:space-x-12 items-center relative">
        {/* Map Embed */}
        <motion.div
          className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <iframe
            title="Hassan Dental Surgery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0000000000005!2d71.475900!3d30.195900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2sHassan%20Dental%20Surgery!5e0!3m2!1sen!2s!4v0000000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Business Info */}
        <motion.div
          className="mt-10 lg:mt-0 w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 id="location-title" className="text-3xl md:text-4xl font-bold">
            {LOCAL_INFO.name}
          </h2>
          <p className="text-gray-300 italic">{LOCAL_INFO.subtitle}</p>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true" />
              <address className="not-italic">
                {LOCAL_INFO.address}
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true" />
              <a href={`tel:${LOCAL_INFO.phone}`} className="underline">
                {LOCAL_INFO.phone.replace('+', '')}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" aria-hidden="true" />
              <span>
                {LOCAL_INFO.rating} ★ ({LOCAL_INFO.reviewCount} Google reviews)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true">⚡</span>
              <span>{LOCAL_INFO.category}</span>
            </li>
            <li className="flex items-start gap-3">
              <strong>Hours:</strong> <span>{LOCAL_INFO.hours}</span>
            </li>
          </ul>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                name: LOCAL_INFO.name,
                telephone: LOCAL_INFO.phone,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop #10, Mohammad Arcade, Chungi No. 9",
                  addressLocality: "Multan",
                  postalCode: "60000",
                  addressCountry: "PK"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 30.1959,
                  longitude: 71.4759
                },
                openingHours: LOCAL_INFO.hours,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: LOCAL_INFO.rating.toString(),
                  reviewCount: LOCAL_INFO.reviewCount.toString()
                }
              })
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
