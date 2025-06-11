import React from 'react';
import { motion } from 'framer-motion';
import {
  FaClinicMedical,
  FaTooth,
  FaShieldAlt,
  FaSmile,
  FaRegLaughBeam,
  FaTeeth,
  FaTeethOpen,
  FaXRay,
  FaUserMd,
  FaChild,
  FaHeadSideVirus,
  FaFirstAid,
  FaProcedures,
  FaBriefcaseMedical,
} from 'react-icons/fa';

// FeaturedServices component updated for semantic SEO and optimized copywriting for Karachi
const services = [
  {
    title: 'Preventive Dental Checkup in Karachi',
    description: 'Keep your smile healthy with routine oral exams and expert preventive care.',
    icon: <FaClinicMedical className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/preventive-dental-checkup-karachi',
  },
  {
    title: 'Professional Scaling & Polishing',
    description: 'Eliminate plaque and surface stains to promote gum health and fresh breath.',
    icon: <FaTooth className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/scaling-polishing-karachi',
  },
  {
    title: 'Fluoride Treatment in Karachi',
    description: 'Strengthen enamel and prevent cavities with our in-office fluoride applications.',
    icon: <FaShieldAlt className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/fluoride-treatment-karachi',
  },
  {
    title: 'Advanced Teeth Whitening',
    description: 'Brighten your smile up to 8 shades in a single visit with our safe whitening system.',
    icon: <FaSmile className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/teeth-whitening-karachi',
  },
  {
    title: 'Custom Smile Makeovers',
    description: 'Design the perfect smile with veneers, bonding, and orthodontic solutions.',
    icon: <FaRegLaughBeam className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/smile-makeover-karachi',
  },
  {
    title: 'Premium Veneers in Karachi',
    description: 'Cover imperfections with custom-crafted porcelain or composite veneers.',
    icon: <FaSmile className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/veneers-karachi',
  },
  {
    title: 'Tooth-Colored Fillings',
    description: 'Restore decayed teeth discreetly with durable, aesthetic composite fillings.',
    icon: <FaTooth className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/dental-fillings-karachi',
  },
  {
    title: 'Crowns & Bridges Restoration',
    description: 'Rebuild damaged or missing teeth with natural-looking crowns and bridges.',
    icon: <FaRegLaughBeam className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/crowns-bridges-karachi',
  },
  {
    title: 'Dental Implants in Karachi',
    description: 'Permanent, implant-supported replacements for single or multiple missing teeth.',
    icon: <FaTeeth className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/dental-implants-karachi',
  },
  {
    title: 'Orthodontic Braces & Aligners',
    description: 'Straighten teeth discretely with clear aligners or traditional braces.',
    icon: <FaTeethOpen className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/braces-aligners-karachi',
  },
  {
    title: 'Pain-Free Root Canal Treatment',
    description: 'Save infected teeth with gentle, modern root canal therapy.',
    icon: <FaXRay className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/root-canal-karachi',
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Safe and comfortable removal of impacted wisdom teeth under local anesthesia.',
    icon: <FaUserMd className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/wisdom-tooth-extraction-karachi',
  },
  {
    title: 'Pediatric Dentistry in Karachi',
    description: 'Gentle, child-friendly care to set lifelong healthy dental habits.',
    icon: <FaChild className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/pediatric-dentistry-karachi',
  },
  {
    title: 'Gum Disease & Periodontal Care',
    description: 'Treat gingivitis and advanced periodontal disease with minimally invasive techniques.',
    icon: <FaHeadSideVirus className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/gum-disease-treatment-karachi',
  },
  {
    title: 'Emergency Dental Services',
    description: '24/7 emergency care for toothaches, injuries, and urgent dental needs.',
    icon: <FaFirstAid className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/emergency-dentist-karachi',
  },
  {
    title: 'Maxillofacial Surgery',
    description: 'Expert surgical solutions for facial trauma, pathology, and reconstruction.',
    icon: <FaProcedures className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/maxillofacial-surgery-karachi',
  },
  {
    title: 'TMJ & Jaw Pain Therapy',
    description: 'Relieve chronic jaw pain and TMJ disorders with tailored treatments.',
    icon: <FaBriefcaseMedical className="text-4xl text-red-500" aria-hidden="true" />,
    link: '/tmj-treatment-karachi',
  },
];

const FeaturedServices = () => (
  <section className="bg-blue-900 py-16" id="services" aria-labelledby="featured-services-title">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        id="featured-services-title"
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Featured Dental Services in Karachi
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, description, icon, link }, idx) => (
          <motion.article
            key={title}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-red-500 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            aria-labelledby={`service-${idx}-title`}
          >
            <div className="flex flex-col items-center space-y-4">
              {React.cloneElement(icon, { 'aria-hidden': true })}
              <motion.h3
                id={`service-${idx}-title`}
                className="text-xl font-semibold text-blue-900 group-hover:text-red-500 text-center"
              >
                <a href={link} className="block focus:outline-none focus:ring-2 focus:ring-red-500">
                  {title}
                </a>
              </motion.h3>
              <motion.p className="text-gray-600 text-sm text-center">
                {description}
              </motion.p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedServices;
