import React from 'react';
import {
  FaTooth,
  FaTeethOpen,
  FaSmile,
  FaUserMd,
  FaTeeth,
  FaXRay,
} from 'react-icons/fa';

const services = [
  {
    title: 'Teeth Whitening Faisalabad',
    description: 'Brighten your smile in one visit.',
    icon: <FaSmile className="text-3xl text-teal-600" />,
    link: '/teeth-whitening-lahore',
  },
  {
    title: 'Dental Implants in Faisalabad',
    description: 'Permanent solutions for missing teeth.',
    icon: <FaTooth className="text-3xl text-teal-600" />,
    link: '/dental-implants-in-lahore',
  },
  {
    title: 'Emergency Dentistry',
    description: '24/7 urgent dental care.',
    icon: <FaUserMd className="text-3xl text-teal-600" />,
    link: '/emergency-dentistry',
  },
  {
    title: 'Smile Makeovers',
    description: 'Transform your smile with cosmetic care.',
    icon: <FaSmile className="text-3xl text-teal-600" />,
    link: '/smile-makeovers',
  },
  {
    title: 'Orthodontics (Braces)',
    description: 'Align teeth with modern braces.',
    icon: <FaTeethOpen className="text-3xl text-teal-600" />,
    link: '/orthodontics-braces',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal procedures.',
    icon: <FaXRay className="text-3xl text-teal-600" />,
    link: '/root-canal-treatment',
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
