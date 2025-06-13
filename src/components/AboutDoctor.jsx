import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or 'next/link'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Structured data for Doctor
const doctorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Imran Bucha",
  "image": "https://example.com/images/dr-imran-bucha.jpg",
  "medicalSpecialty": "Dentistry",
  "description": "Dr. Imran Bucha is a highly experienced dentist specializing in restorative and cosmetic dentistry with over a decade of patient-focused care.",
  "alumniOf": "University of Lahore, Faculty of Dental Sciences",
  "award": ["Best Restorative Dentist Award 2022", "Community Dental Outreach Excellence 2020"],
  "url": "https://example.com/about/dr-imran-bucha"
};

export default function AboutDoctor() {
  return (
    <section
      id="about-doctor"
      aria-labelledby="about-doctor-title"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 text-gray-200"
      itemScope
      itemType="https://schema.org/Physician"
    >
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">{JSON.stringify(doctorJsonLd)}</script>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        <motion.div
          className="w-full lg:w-1/2 flex-shrink-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/buca.jpg"
            alt="Dr. Imran Bucha"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-square"
            itemProp="image"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            id="about-doctor-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-poppins leading-tight"
            itemProp="name"
          >
            Meet Dr. Imran Bucha
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-prose leading-relaxed" itemProp="description">
            With over 10 years of dedicated practice, Dr. Imran Bucha excels in restorative and cosmetic dentistry. A graduate of the University of Lahore’s Faculty of Dental Sciences, he integrates advanced digital techniques with personalized care to ensure every patient achieves a healthy, confident smile.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl" variants={fadeInUp}>
              <FaUserMd className="w-12 h-12 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-lg font-semibold mb-2" itemProp="alumniOf">Education</h3>
              <p className="text-gray-300 text-sm text-center">University of Lahore, Faculty of Dental Sciences</p>
            </motion.div>

            <motion.div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl" variants={fadeInUp}>
              <FaCertificate className="w-12 h-12 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-lg font-semibold mb-2">Awards</h3>
              <ul className="text-gray-300 text-sm text-center list-disc list-inside space-y-1">
                <li>Best Restorative Dentist Award 2022</li>
                <li>Community Dental Outreach Excellence 2020</li>
              </ul>
            </motion.div>

            <motion.div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl" variants={fadeInUp}>
              <FaStethoscope className="w-12 h-12 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-lg font-semibold mb-2" itemProp="medicalSpecialty">Specialty</h3>
              <p className="text-gray-300 text-sm text-center">Restorative & Cosmetic Dentistry</p>
            </motion.div>
          </div>

          <Link
            to="https://wa.me/+923336194850"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-teal-400 text-black font-medium rounded-full hover:shadow-2xl transition-shadow text-sm sm:text-base lg:text-lg"
            aria-label="Book an appointment with Dr. Imran Bucha"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
