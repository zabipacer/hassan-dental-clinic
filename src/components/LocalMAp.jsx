import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const LOCAL_INFO = {
  name: 'Hassan Dental Surgery',
  subtitle: 'Dr. Imran Zafer Bucha',
  address: 'Shop #10, Mohammad Arcade, Chungi No. 9, Multan, 60000',
  phones: ['+923336194850', '+923009634850', '+923154151515'],
  hours: 'Closed ⋅ 5 PM to 9 Weekdays',
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
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:space-x-12 items-start relative">
        {/* Map Embed */}
        <motion.div
          className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <iframe
            title="Hassan Dental Surgery Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3447.9626481560726!2d71.4657359!3d30.2096135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b335a53a581ad%3A0x5b72f7229bc81e60!2sHassan%20Dental%20Surgery(%20dr%20Imran%20zafer%20bucha)%20Mohammad%20arcade%20chungi%20no%209%20multan!5e0!3m2!1sen!2s!4v1749888454852!5m2!1sen!2s"
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
              <address className="not-italic">{LOCAL_INFO.address}</address>
            </li>

            {/* Multiple Phone Numbers */}
            {LOCAL_INFO.phones.map((num) => (
              <li key={num} className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${num}`} className="underline cursor-pointer">
                  {num.replace('+', '')}
                </a>
              </li>
            ))}

            <li className="flex items-start gap-3">
              <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" aria-hidden="true" />
              <span>{LOCAL_INFO.rating} ★ ({LOCAL_INFO.reviewCount} Google reviews)</span>
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
                telephone: LOCAL_INFO.phones,
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