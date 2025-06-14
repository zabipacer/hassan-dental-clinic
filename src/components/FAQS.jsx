import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Hassan Dental Surgery offer?',
    answer: 'We provide preventive care, cosmetic dentistry (whitening, veneers), restorative treatments (crowns, bridges, implants), orthodontics (aligners, braces), and emergency dental services.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'Call us at 0333 619 4850, 0300 963 4850, or 0315 415 1515; message us on WhatsApp via https://api.whatsapp.com/send?phone=923336194850, https://api.whatsapp.com/send?phone=923009634850, or https://api.whatsapp.com/send?phone=923154151515; or click the “Book Your Appointment” button on our site to choose a convenient time.',
  },
  {
    question: 'Are your clinics child-friendly?',
    answer: 'Absolutely! We have a dedicated pediatric area and friendly staff trained to comfort young patients during their first visits.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept cash, EasyPaisa, JazzCash, and bank transfers via QR code scanning or direct transfer. Please ask our front desk for detailed instructions.',
  },
  {
    question: 'Do you provide pain management for surgical procedures?',
    answer: 'We provide pain-free local anesthesia and perform surgical intervention for conditions ranging from minor inspections to major procedures, all under local anesthesia for your comfort.',
  },
];

const faqVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  // Helper to render clickable links
  const renderAnswer = (text) =>
    text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
      part.startsWith('http') ? (
        <a
          key={i}
          href={part}
          className="text-teal-400 underline hover:text-teal-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      ) : (
        part
      )
    );

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 font-poppins overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-labelledby="faq-heading"
    >
      <motion.h2
        id="faq-heading"
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              itemProp="name"
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-teal-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-400" />
                )}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-6 text-gray-300 text-sm"
                  variants={faqVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  layout
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{renderAnswer(faq.answer)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
