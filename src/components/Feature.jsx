import React from 'react';
import {
  FaTooth,
  FaTeethOpen,
  FaSmile,
  FaUserMd,
  FaXRay,
  FaChild,
  FaTeeth,
  FaRegGrinBeam,
  FaProcedures,
  FaClinicMedical,
  FaFirstAid,
  FaShieldAlt,
  FaHeadSideVirus,
  FaBriefcaseMedical,
  FaLaptopMedical,
  FaRegLaughBeam,
} from 'react-icons/fa';

const services = [
  // Preventive Care
  {
    title: 'Dental Checkup in Faisalabad',
    description: 'Regular checkups to maintain oral health.',
    icon: <FaClinicMedical className="text-3xl text-teal-600" />,
    link: '/dental-checkup-faisalabad',
  },
  {
    title: 'Scaling & Polishing',
    description: 'Remove plaque & stains for healthier gums.',
    icon: <FaTooth className="text-3xl text-teal-600" />,
    link: '/scaling-polishing-faisalabad',
  },
  {
    title: 'Fluoride Treatment',
    description: 'Prevent cavities with fluoride care.',
    icon: <FaShieldAlt className="text-3xl text-teal-600" />,
    link: '/fluoride-treatment',
  },

  // Cosmetic Dentistry
  {
    title: 'Teeth Whitening Faisalabad',
    description: 'Brighten your smile in one visit.',
    icon: <FaSmile className="text-3xl text-teal-600" />,
    link: '/teeth-whitening-faisalabad',
  },
  {
    title: 'Smile Makeover',
    description: 'Transform your smile with multiple procedures.',
    icon: <FaRegLaughBeam className="text-3xl text-teal-600" />,
    link: '/smile-makeover',
  },
  {
    title: 'Veneers in Faisalabad',
    description: 'Cover imperfections with custom veneers.',
    icon: <FaSmile className="text-3xl text-teal-600" />,
    link: '/veneers-faisalabad',
  },

  // Restorative Dentistry
  {
    title: 'Dental Fillings',
    description: 'Treat cavities with safe, aesthetic fillings.',
    icon: <FaTooth className="text-3xl text-teal-600" />,
    link: '/dental-fillings',
  },
  {
    title: 'Dental Crowns & Bridges',
    description: 'Restore damaged or missing teeth.',
    icon: <FaRegGrinBeam className="text-3xl text-teal-600" />,
    link: '/dental-crowns-bridges',
  },
  {
    title: 'Dental Implants in Faisalabad',
    description: 'Permanent solutions for missing teeth.',
    icon: <FaTeeth className="text-3xl text-teal-600" />,
    link: '/dental-implants-faisalabad',
  },

  // Orthodontics
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with fixed or removable options.',
    icon: <FaTeethOpen className="text-3xl text-teal-600" />,
    link: '/braces-aligners-faisalabad',
  },

  // Root Canal & Surgery
  {
    title: 'Root Canal Treatment (RCT)',
    description: 'Pain-free root canal procedures.',
    icon: <FaXRay className="text-3xl text-teal-600" />,
    link: '/root-canal-treatment',
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Safe removal of impacted wisdom teeth.',
    icon: <FaUserMd className="text-3xl text-teal-600" />,
    link: '/wisdom-tooth-extraction',
  },

  // Kids Dentistry
  {
    title: 'Pediatric Dentistry in Faisalabad',
    description: 'Gentle dental care for children.',
    icon: <FaChild className="text-3xl text-teal-600" />,
    link: '/kids-dentist-faisalabad',
  },

  // Gum & Periodontal
  {
    title: 'Gum Disease Treatment',
    description: 'Treat gingivitis & advanced gum issues.',
    icon: <FaHeadSideVirus className="text-3xl text-teal-600" />,
    link: '/gum-disease-treatment',
  },

  // Emergency Dental Care
  {
    title: 'Emergency Dentist in Faisalabad',
    description: '24/7 urgent dental care.',
    icon: <FaFirstAid className="text-3xl text-teal-600" />,
    link: '/emergency-dentist-faisalabad',
  },

  // Specialty
  {
    title: 'Maxillofacial Surgery',
    description: 'Advanced facial and jaw surgeries.',
    icon: <FaProcedures className="text-3xl text-teal-600" />,
    link: '/maxillofacial-surgery',
  },
  {
    title: 'TMJ / Jaw Pain Treatment',
    description: 'Relieve chronic jaw pain with expert care.',
    icon: <FaBriefcaseMedical className="text-3xl text-teal-600" />,
    link: '/tmj-treatment-faisalabad',
  },
];


const FeaturedServices = () => {
  return (
    <section className="bg-white py-16" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Our Featured Dental Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon, link }) => (
            <a
              href={link}
              key={title}
              className="group p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-teal-500 transition-all duration-300 bg-white text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                {icon}
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-teal-600 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
