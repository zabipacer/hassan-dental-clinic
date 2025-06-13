import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const TESTIMONIALS = [
  { quote: "Pain-free cleaning and friendly staff—best experience ever!", author: "R.A.", rating: 5, treatment: "Cleaning" },
  { quote: "Modern clinic, caring doctors. My kids actually looked forward to their checkup!", author: "S.K.", rating: 5, treatment: "Pediatric Care" },
  { quote: "I got veneers here and my confidence soared. Highly recommend!", author: "M.T.", rating: 5, treatment: "Veneers" },
  { quote: "Professional, punctual, and gentle care. My go-to dentist in Multan.", author: "A.H.", rating: 5, treatment: "General Care" },
  { quote: "Exceptional implants and follow-up. Definitely worth every penny.", author: "Z.F.", rating: 5, treatment: "Implants" },
  { quote: "Beautiful office, warm staff, and Dr. Bucha is truly an artist with smiles.", author: "L.N.", rating: 5, treatment: "Cosmetic" },
  { quote: "Fast service and amazing results for whitening—my teeth have never looked better!", author: "K.P.", rating: 5, treatment: "Whitening" },
  { quote: "Clear explanations, no surprise bills. I felt comfortable every step of the way.", author: "T.R.", rating: 5, treatment: "Consultation" },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredDot, setHoveredDot] = useState(null);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setIndex(i => (i + 1) % TESTIMONIALS.length), 6000);
  };
  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (isPlaying) startInterval(); else stopInterval();
    return stopInterval;
  }, [isPlaying]);

  const prev = () => { setIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); if (isPlaying) restart(); };
  const next = () => { setIndex(i => (i + 1) % TESTIMONIALS.length); if (isPlaying) restart(); };
  const goToSlide = i => { setIndex(i); if (isPlaying) restart(); };
  const togglePlay = () => setIsPlaying(p => !p);
  const restart = () => { stopInterval(); setTimeout(startInterval, 100); };

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 text-white overflow-hidden">
      {/* Testimonials Carousel */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-teal-400 fill-teal-400" />
            <span className="text-sm font-medium text-teal-200">Patient Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-white">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from real people who trusted us with their smiles
          </p>
        </motion.div>

        {/* Carousel Slides */}
        <div className="relative max-w-5xl mx-auto px-4 mb-12">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 100, rotateY: -15 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: -100, rotateY: 15 }} transition={{ duration: 0.8, ease: [0.25,0.46,0.45,0.94] }} style={{ perspective: '1000px' }}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl relative">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-teal-400 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                {/* Treatment Badge */}
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {TESTIMONIALS[index].treatment}
                </div>
                <blockquote className="text-center pt-8">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-100">
                    "{TESTIMONIALS[index].quote}"
                  </p>
                  <div className="flex justify-center mb-6">
                    {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-1" />
                    ))}
                  </div>
                  <cite className="text-lg font-semibold text-teal-300">
                    — {TESTIMONIALS[index].author}
                  </cite>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <button onClick={prev} aria-label="Previous testimonial" className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={togglePlay} aria-label={isPlaying? 'Pause' : 'Play'} className="p-3 bg-teal-500 rounded-full hover:bg-teal-600 transition">
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>
          <button onClick={next} aria-label="Next testimonial" className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="relative">
              <button onClick={() => goToSlide(i)} onMouseEnter={() => setHoveredDot(i)} onMouseLeave={() => setHoveredDot(null)} className={`${i===index?'w-12 h-4':'w-4 h-4'} rounded-full bg-gradient-to-r ${i===index?'from-teal-400 to-blue-400':'from-white/30 to-white/30'} transition`} />
              {hoveredDot===i && <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded">{t.treatment}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Centered Video */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center mb-16">
        <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 text-center">
          <video className="w-full h-auto rounded-xl shadow-2xl" src="/test.mp4" controls muted loop playsInline />
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white font-poppins">Hear from Our Happy Patients</h3>
          <p className="mt-2 text-lg text-gray-300">Watch real patient testimonials and see why we're Multan's trusted dental care provider.</p>
        </div>
      </motion.div>
    </section>
  );
}
