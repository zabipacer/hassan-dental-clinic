import React, { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with text */}
        <div className="flex items-center gap-2">
          <img
            src="/DL.jpeg"
            alt="Doctor Teeth Clinic Logo"
            className="w-15 h-15 rounded-full mr-5 object-cover"
          />
          <div className="text-2xl font-bold">
            Doctor Teeth Clinic Faisalabad
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a
            href="https://wa.me/923216739504"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white px-6 py-6 space-y-4 text-center shadow-lg">
          <a
            href="#services"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#about"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="https://wa.me/923216739504"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition block mx-auto w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};
