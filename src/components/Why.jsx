import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Clock, CheckSquare } from 'lucide-react';

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 overflow-hidden font-poppins"
      aria-labelledby="about-title"
      itemScope
      itemType="https://schema.org/Dentist"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle at top,cyan,transparent)] opacity-30 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Photo Column */}
        <motion.div
          className="w-full overflow-hidden rounded-2xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          itemProp="image"
        >
          <img
            src="/bannerbucha.jpg"
            alt="Dr. Imran Zafer Bucha smiling"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Info Column */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={visible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="space-y-6"
        >
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-extrabold"
            itemProp="name"
          >
            Hassan Dental Surgery
          </h2>
          <p className="text-gray-300" itemProp="description">
            Led by <strong>Dr. Imran Zafer Bucha</strong>, our Mohammad Arcade clinic at Chungi No. 9 Multan provides top-tier dental care—spanning maxillofacial surgery, orthodontics, implants, gums treatment, prosthesis, and more.
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-teal-400" aria-hidden="true" />
              <address className="not-italic text-gray-300" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Shop #10, Mohammad Arcade, Chungi No.9</span><br />
                <span itemProp="addressLocality">Multan</span>, <span itemProp="postalCode">60000</span>
              </address>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-teal-400" aria-hidden="true" />
              <a href="tel:+923336194850" className="text-gray-300" itemProp="telephone">0333 6194850</a>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-teal-400" aria-hidden="true" />
              <time className="text-gray-300" itemProp="openingHours"> 5 PM to 9 PM</time>
            </div>
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-teal-400" aria-hidden="true" />
              <span className="text-gray-300">
                <strong itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  5.0
                  <meta itemProp="ratingValue" content="5.0" />
                  <meta itemProp="reviewCount" content="26" />
                </strong> from Google Reviews
              </span>
            </div>
          </div>

          {/* Specialties List */}
          <motion.ul
            className="space-y-3 pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            {[
              'Maxillofacial Surgery',
              'Orthodontics',
              'Implants & Prosthesis',
              'Gums Treatment & Oral Hygiene',
              'Teeth Whitening',
              'Family Dentistry'
            ].map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckSquare className="w-5 h-5 text-teal-400" aria-hidden="true" />
                {spec}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
