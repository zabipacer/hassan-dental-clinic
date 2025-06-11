// LocalSEOSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export default function LocalSEOSection() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-r from-blue-900 to-red-600 text-white"
      aria-labelledby="location-title"
    >
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:space-x-12 items-center">
        {/* Map Embed */}
        <motion.div
          className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Dr. Saeed Clinic Location"
            src="https://www.google.com/maps?q=24.9149822,67.0305677&z=17&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </motion.div>

        {/* Clinic Info */}
        <motion.div
          className="mt-10 lg:mt-0 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="location-title"
            className="text-3xl font-extrabold mb-6"
          >
            Find Us in Karachi
          </h2>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
              <span>
                <strong>Address:</strong> 3 B-2, 1A Nazimabad Rd Number 3, Block 3,
                Nazimabad, Karachi 74600
              </span>
            </li>
            <li className="flex items-start">
              <Phone className="w-6 h-6 text-red-400 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
              <span>
                <strong>Phone:</strong> <a href="tel:03438234969" className="underline">
                0343-8234969
              </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 text-red-400 flex-shrink-0 mr-3 mt-1 font-bold">★</span>
              <span>
                <strong>Rating:</strong> 4.8 ★ (25 Reviews)
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 text-red-400 flex-shrink-0 mr-3 mt-1">📍</span>
              <span>
                <strong>Service Areas:</strong> Nazimabad, North Nazimabad,
                Liaquatabad, Gulberg, Federal B Area, and nearby suburbs
              </span>
            </li>
          </ul>

          {/* JSON-LD for LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Dentist',
                name: 'Dr. Saeed Dental, Implant & Aesthetic Clinic',
                url: 'https://yourdomain.com',
                telephone: '03438234969',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '3 B-2, 1A Nazimabad Rd Number 3, Block 3, Nazimabad',
                  addressLocality: 'Karachi',
                  addressRegion: 'Sindh',
                  postalCode: '74600',
                  addressCountry: 'PK',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '24.9139',
                  longitude: '67.0919',
                },
                openingHours: 'Mo-Sa 09:00-19:00',
                priceRange: '$$',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '25',
                },
              }),
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
