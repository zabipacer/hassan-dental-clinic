// FaqAccordion.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How much do dental implants cost in Karachi?',
    answer: (
      <>
        Dental implant costs at Dr. Saeed Dental, Implant & Aesthetic Clinic depend on the procedure complexity and materials used. Typical prices range from PKR 25,000 to PKR 60,000 per implant. Learn more on our <a href="/dental-implants-karachi" className="text-red-400 underline">Dental Implants in Karachi</a> page.
      </>
    ),
  },
  {
    question: 'Do you offer flexible payment plans?',
    answer: (
      <>
        Yes—we provide custom payment plans for implants, orthodontics, and cosmetic dentistry to make quality care accessible for all residents of Karachi.
      </>
    ),
  },
  {
    question: 'What is the recommended check-up frequency?',
    answer: (
      <>
        Regular dental exams every 6 months help with early detection and preventive care. We recommend biannual visits to keep your smile healthy and bright.
      </>
    ),
  },
  {
    question: 'Are professional teeth whitening treatments safe?',
    answer: (
      <>
        Absolutely—our in-office whitening uses medical-grade bleaching agents under expert supervision, ensuring safe and effective results in 45–60 minutes.
      </>
    ),
  },
  {
    question: 'What options exist for replacing missing teeth?',
    answer: (
      <>
        We offer implants, bridges, and dentures. Our specialists will assess your oral health and recommend the best long-term solution tailored to you.
      </>
    ),
  },
  {
    question: 'Do you handle dental emergencies in Karachi?',
    answer: (
      <>
        Yes, we provide 24/7 emergency care for severe toothaches, trauma, and infections. Contact us immediately for prompt assistance.
      </>
    ),
  },
  {
    question: 'What is the braces fitting process?',
    answer: (
      <>
        After an initial consultation and scan, we design a customized braces or clear aligner plan. Follow-up visits every 4–6 weeks ensure optimal progress.
      </>
    ),
  },
  {
    question: 'Is root canal therapy painful?',
    answer: (
      <>
        Modern root canals at our clinic use local anesthesia and advanced rotary instruments, making the procedure virtually painless for most patients.
      </>
    ),
  },
  {
    question: 'Do you offer dental care for children?',
    answer: (
      <>
        Yes—Dr. Saeed Dental Clinic provides specialized pediatric dentistry, focusing on gentle exams, preventive sealants, and habit counseling for kids.
      </>
    ),
  },
  {
    question: 'How do you maintain infection control?',
    answer: (
      <>
        We follow strict sterilization protocols—using autoclaves, disposable instruments, and medical-grade disinfectants to ensure 100% patient safety.
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="bg-gradient-to-r from-blue-900 to-red-600 py-20 px-4 text-white"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="faq-title"
          className="text-4xl font-extrabold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-red-700"
                onClick={() => toggle(idx)}
                itemProp="name"
              >
                {faq.question}
                <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
              </button>

              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-4 text-sm text-white"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
