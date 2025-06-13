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
    answer: 'Call us at 0333 6194850, message us on WhatsApp, or click the “Book Your Appointment” button on our site to choose a convenient time.',
  },
  {
    question: 'Are your clinics child-friendly?',
    answer: 'Absolutely! We have a dedicated pediatric area and friendly staff trained to comfort young patients during their first visits.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept cash, major credit/debit cards, and partner with leading dental insurance providers. Ask our front desk for flexible payment plans.',
  },
  {
    question: 'Do you offer sedation dentistry?',
    answer: 'Yes, we offer oral sedation and nitrous oxide (laughing gas) for patients with dental anxiety. Discuss your needs during booking.',
  },
];

const faqVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

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
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-700 transition-colors"
              itemProp="name"
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-teal-400" /> : <ChevronDown className="w-5 h-5 text-teal-400" />}
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
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
