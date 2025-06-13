import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useViewportScroll();
  const rotateLight = useTransform(scrollY, [0, 400], [0, 8]);
  const rotateDark = useTransform(scrollY, [0, 400], [0, -8]);

  useEffect(() => setVisible(true), []);

  return (
    <section role="banner" className="relative pt-20 sm:pt-0 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white h-screen font-poppins overflow-hidden">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="z-10 p-8  md:w-1/2 flex flex-col justify-center text-center md:text-left"
      >
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
          Hassan Dental Surgery<br />
          <span className="text-teal-400">Your Trusted Multan Dentist</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Modern, Comfortable & Pain-Free Dental Care with Dr. Imran Zafer Bucha
        </p>

        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <motion.a
            href="https://wa.me/+923336194850"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            aria-label="Book appointment with Dr. Imran Zafer Bucha"
            className="inline-flex items-center px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Book Appointment
            <ChevronRight className="ml-2" size={18} />
          </motion.a>
        </div>
      </motion.div>

      {/* Doctor Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="md:w-1/2 w-full h-80 md:h-auto relative flex justify-center items-center"
      >
        <div className="w-3/4 md:w-full h-full rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/buca.jpg"
            alt="Dr. Imran Zafer Bucha portrait"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Decorative Triangles */}
      <motion.svg
        style={{ rotate: rotateLight }}
        animate={{ rotate: [0, 6, 0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-16 h-16 opacity-50"
        viewBox="0 0 100 100"
      >
        <polygon points="0,100 50,0 100,100" fill="#ffffff22" />
      </motion.svg>

      <motion.svg
        style={{ rotate: rotateDark }}
        animate={{ rotate: [0, -6, 0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 0.3 }}
        className="absolute bottom-10 right-10 w-20 h-20 opacity-40"
        viewBox="0 0 100 100"
      >
        <polygon points="0,100 50,0 100,100" fill="#ffffff40" />
      </motion.svg>
    </section>
  );
}
