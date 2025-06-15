import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaTooth, FaShieldAlt, FaSmile, FaRegLaughBeam, FaProcedures, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
  hover: { scale: 1.05, rotate: [0, 2, -2, 0], boxShadow: '0px 16px 32px rgba(0,0,0,0.25)', transition: { duration: 0.4, ease: 'easeInOut' } },
};
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Structured data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Featured Dental Services",
  "description": "Comprehensive dental care from preventive checkups to advanced digital dentistry, ensuring the highest standards in oral health and patient comfort.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Service Catalog",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventive Checkup", "description": "Expert evaluation, X-rays, and personalized oral hygiene guidance." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scaling & Polishing", "description": "Deep cleaning to remove plaque, tartar, and stains for fresher breath." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fluoride Treatment", "description": "Protective fluoride varnish to strengthen enamel and prevent decay." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Teeth Whitening", "description": "Safe in-office bleaching for a brighter, more confident smile." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smile Makeover", "description": "Customized veneers, bonding, and orthodontics for a complete aesthetic transformation." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Dentistry", "description": "Cutting-edge 3D imaging and CAD/CAM solutions for precision restorations." } }
    ]
  }
};

const services = [
  { icon: FaClinicMedical, title: 'Preventive Checkup', desc: 'Expert evaluation, X-rays, & personalized oral hygiene guidance', link: '/preventive' },
  { icon: FaTooth, title: 'Scaling & Polishing', desc: 'Deep cleaning to remove plaque, tartar, & surface stains', link: '/scaling' },
  { icon: FaShieldAlt, title: 'Fluoride Treatment', desc: 'Protective fluoride varnish to strengthen enamel & prevent decay', link: '/fluoride' },
  { icon: FaSmile, title: 'Teeth Whitening', desc: 'Safe in-office bleaching for a brighter, more confident smile', link: '/whitening' },
  { icon: FaRegLaughBeam, title: 'Smile Makeover', desc: 'Customized veneers, bonding, & orthodontics for aesthetic transformation', link: '/smile-makeover' },
  { icon: FaProcedures, title: 'Digital Dentistry', desc: 'Cutting-edge 3D imaging & CAD/CAM precision restorations', link: '/digital' },
];

export default function FeaturedServices() {
  const [showContacts, setShowContacts] = useState(false);
  const toggleContacts = () => setShowContacts(prev => !prev);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-24 text-gray-200"
    >
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <header>
          <motion.h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Featured Dental Services
          </motion.h2>
          <motion.p
            className="mb-12 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            At Hassan Dental Surgery, we combine state-of-the-art technology with compassionate care to provide a full spectrum of dental solutions. From routine checkups that catch issues early to advanced digital dentistry techniques for seamless restorations, our goal is to ensure your smile is healthy, beautiful, and long-lasting.
          </motion.p>
        </header>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          role="list"
        >
          {services.map(({ icon: Icon, title, desc, link }, idx) => (
            <motion.li
              key={title}
              className="group relative bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-3xl p-8 cursor-pointer overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              role="listitem"
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-25 transition-opacity" />
              <figure className="relative flex flex-col items-center text-center">
                <Icon className="w-14 h-14 text-teal-400 mb-4" aria-hidden="true" />
                <figcaption>
                  <Link to={link} aria-label={`Learn more about ${title}`}>
                    <motion.h3
                      className="text-xl font-semibold text-white mb-2 group-hover:text-teal-300 font-poppins"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    >
                      {title}
                    </motion.h3>
                  </Link>
                  <motion.p
                    className="text-gray-300 text-sm mb-4 max-w-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                  >
                    {desc}
                  </motion.p>
                  <motion.span
                    className="text-teal-300 font-medium"
                    initial={{ x: -8, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    → Learn More
                  </motion.span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="mt-16">
          <button
            onClick={toggleContacts}
            className="text-teal-300 cursor-pointer font-medium underline focus:outline-none"
          >
          Need help? Contact our team
          </button>
        </motion.div>

        {/* Contact Box Modal */}
        {showContacts && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <motion.div
              className="bg-gray-900 rounded-2xl p-8 space-y-4 w-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-end">
                <button onClick={toggleContacts} className="text-gray-400 hover:text-white">
                  <FaTimes size={20} />
                </button>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Call Us:</h3>
              <ul className="space-y-2">
                {['+923336194850', '+923009634850', '+923154151515'].map((num) => (
                  <li key={num}>
                    <a
                      href={`tel:${num}`}
                      className="flex items-center text-teal-300 hover:text-teal-100"
                    >
                      <FaPhoneAlt className="mr-2" /> {num}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
