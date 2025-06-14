import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const columns = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function Footer() {
  const phones = ['+923336194850', '+923009634850', '+923154151515'];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-8 font-poppins">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=20 cy=20 r=1 fill=%27%23FFFFFF%27 opacity=0.15/%3E%3C/svg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {/* Clinic Info */}
        <motion.div {...columns}>
          <h4 className="text-lg font-bold mb-4">Hassan Dental Surgery</h4>
          <p className="text-sm mb-3 flex items-start gap-2">
            <FaMapMarkerAlt className="text-teal-400 mt-1" />
            Shop #10, Mohammad Arcade, Chungi No.9, Multan, 60000
          </p>
          {phones.map((num) => (
            <p key={num} className="text-sm mb-2 flex items-center gap-2">
              <FaPhone className="text-teal-400" />
              <a
                href={`tel:${num}`}
                className="hover:underline cursor-pointer"
              >
                {num.replace('+', '')}
              </a>
            </p>
          ))}
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-teal-400" />
            <a
              href="mailto:info@hassandentalsurgery.pk"
              className="hover:underline"
            >
              info@hassandentalsurgery.pk
            </a>
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.nav {...columns} aria-label="Quick Links">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </motion.nav>

        {/* Services */}
        <motion.nav {...columns} aria-label="Top Services">
          <h4 className="text-lg font-bold mb-4">Our Services</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#services" className="hover:text-gray-300">Preventive Care</a></li>
            <li><a href="#services" className="hover:text-gray-300">Cosmetic Dentistry</a></li>
            <li><a href="#services" className="hover:text-gray-300">Orthodontics</a></li>
            <li><a href="#services" className="hover:text-gray-300">Dental Implants</a></li>
          </ul>
        </motion.nav>

        {/* Social & Connect */}
        <motion.div {...columns}>
          <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/p/DR-IMRAN-ZAFER-BUCHA-Dental-surgery-100086570136393/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/drimranbucha76"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg hover:text-pink-400" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923336194850"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg hover:text-green-400" />
            </a>
          </div>
          <p className="text-sm">
            Serving Multan families with expert, pain-free dental care. Visit us today!
          </p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-xs text-gray-400 border-t border-gray-700 pt-4 z-10 relative">
        © {new Date().getFullYear()} Hassan Dental Surgery. All rights reserved.
      </div>
    </footer>
);
}
