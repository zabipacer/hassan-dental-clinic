// WhyChooseUs.js
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'State-of-the-Art, Pain-Free Dentistry',
    description:
      'Experience anxiety-free treatments with our advanced laser-assisted and minimally invasive techniques.',
  },
  {
    title: 'Immediate Same-Day Appointments',
    description:
      'Urgent care available for West Karachi residents—no more waiting for relief.',
  },
  {
    title: 'Premium, Globally Certified Materials',
    description:
      'Only FDA- and CE-approved implants, crowns, and restorations for lasting results.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-gradient-to-r from-blue-900 to-red-600 py-20 lg:py-32"
      aria-labelledby="why-choose-us-title"
    >
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
        {/* Image or Illustration */}
        <motion.div
          className="hidden lg:block lg:flex-1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/arfq.webp"
            alt="Inside Dr. Saeed Dental, Implant & Aesthetic Clinic"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="lg:flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.h2
            id="why-choose-us-title"
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Why Karachi Trusts Dr. Saeed Dental, Implant & Aesthetic Clinic
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Located in the heart of West Karachi, we combine cutting-edge technology,
            expert specialists, and compassionate care to deliver unmatched dental
            solutions tailored to your needs.
          </motion.p>

          <ul className="space-y-6 max-w-md mx-auto lg:mx-0">
            {benefits.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Book Your Consultation
            </a>
            <a
              href="tel:03438234969"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md"
            >
              Call Now<br />03438234969
            </a>
          </motion.div>
        </div>
      </div>

      {/* JSON-LD for Semantic SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: 'Dr. Saeed Dental, Implant & Aesthetic Clinic',
            url: 'https://yourdomain.com',
            telephone: '021-12345678',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'XYZ Rd, West Karachi',
              addressLocality: 'Karachi',
              addressRegion: 'Sindh',
              postalCode: '75500',
              addressCountry: 'PK',
            },
            medicalSpecialty: [
              'Dentistry',
              'Oral Surgery',
              'Cosmetic Dentistry',
            ],
            openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00 Sa 09:00-14:00',
          }),
        }}
      />
    </section>
  );
}
