import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        className="fixed top-0 inset-x-0 z-20 bg-transparent backdrop-blur-md shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        role="navigation"
        aria-label="Main"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Name */}
          <a href="/" className="text-2xl font-extrabold text-white font-poppins hover:text-teal-400 transition">
            HDC
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-teal-400 font-medium transition">
              Services
            </a>
            <a href="#about" className="text-white hover:text-teal-400 font-medium transition">
              About
            </a>
            <a href="#faq" className="text-white hover:text-teal-400 font-medium transition">
              FAQ
            </a>
            {/* Call Now Button */}
            <a
              href="tel:+923336194850"
              className="ml-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-lg transition font-medium flex items-center"
              aria-label="Call Hassan Dental Care"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="p-2 bg-white/20 rounded-md hover:bg-white/30 transition"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-md"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
              <a
                href="#services"
                className="text-white hover:text-teal-400 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-teal-400 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#faq"
                className="text-white hover:text-teal-400 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              {/* Call Now Button for mobile */}
              <a
                href="tel:+923336194850"
                className="mt-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-lg transition font-medium flex items-center justify-center"
                aria-label="Call Hassan Dental Care"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}