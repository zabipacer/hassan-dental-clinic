// Footer.js
import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-red-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Dr. Saeed Dental, Implant & Aesthetic Clinic</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            3 B-2, 1A Nazimabad Rd Number 3, Block 3, Nazimabad, Karachi 74600
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone className="text-red-400" />
            <a href="tel:03438234969" className="hover:underline">0343‑8234969</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-red-400" />
            <a href="mailto:info@drsaeedclinic.com" className="hover:underline">info@drsaeedclinic.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Dental Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </nav>

        {/* Top Services */}
        <nav aria-label="Top Services">
          <h4 className="text-xl font-semibold mb-4">Top Services</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/dental-implants-karachi" className="hover:underline">Dental Implants Karachi</a></li>
            <li><a href="/braces-aligners-karachi" className="hover:underline">Braces & Aligners</a></li>
            <li><a href="/root-canal-karachi" className="hover:underline">Root Canal Treatment</a></li>
            <li><a href="/teeth-whitening-karachi" className="hover:underline">Teeth Whitening</a></li>
          </ul>
        </nav>

        {/* Social & Local SEO */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/drsaeedclinic" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-lg hover:text-blue-300" />
            </a>
            <a href="https://www.instagram.com/drsaeedclinic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-lg hover:text-pink-300" />
            </a>
            <a href="https://wa.me/923438233969" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-lg hover:text-green-300" />
            </a>
          </div>
          <p className="text-sm">
            Looking for a <strong>dentist near Nazimabad or North Nazimabad Karachi</strong>? Visit Dr. Saeed Clinic for pain-free, expert dental care.
          </p>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-300 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dr. Saeed Dental, Implant & Aesthetic Clinic, Karachi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
