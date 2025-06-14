import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalls, setShowCalls] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCalls = () => setShowCalls(prev => !prev);

  const phoneNumbers = ['+923336194850', '+923009634850', '+923154151515'];

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
          {/* Brand */}
          <a href="/" className="text-2xl font-extrabold text-white font-poppins hover:text-teal-400 transition">
            HDC
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-teal-400 font-medium transition">Services</a>
            <a href="#about" className="text-white hover:text-teal-400 font-medium transition">About</a>
            <a href="#faq" className="text-white hover:text-teal-400 font-medium transition">FAQ</a>
            {/* Call Now Button */}
            <button
              onClick={toggleCalls}
              className="ml-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-lg transition font-medium flex items-center cursor-pointer"
              aria-label="Call Hassan Dental Care"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </button>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-md overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
                <a href="#services" className="text-white hover:text-teal-400 font-medium transition" onClick={toggleMenu}>Services</a>
                <a href="#about" className="text-white hover:text-teal-400 font-medium transition" onClick={toggleMenu}>About</a>
                <a href="#faq" className="text-white hover:text-teal-400 font-medium transition" onClick={toggleMenu}>FAQ</a>
                {/* Call Now Mobile */}
                <button
                  onClick={() => { toggleCalls(); toggleMenu(); }}
                  className="mt-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-lg transition font-medium flex items-center justify-center cursor-pointer"
                  aria-label="Call Hassan Dental Care"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call Box Modal with Close */}
        <AnimatePresence>
          {showCalls && (
            <motion.div
              className="fixed inset-0 mt-40 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleCalls}
            >
              <motion.div
                className="relative bg-gray-800 rounded-3xl p-6 space-y-4 w-72 mx-4 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={toggleCalls}
                  aria-label="Close call options"
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 p-1 rounded-full text-gray-300 hover:text-white transition"
                >
                  <X size={18} />
                </button>
                <h3 className="text-white text-lg font-semibold text-center">Call Us Now</h3>
                <div className="space-y-2">
                  {phoneNumbers.map(num => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="block w-full text-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition cursor-pointer"
                    >
                      {num.replace('+', '')}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}