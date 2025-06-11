import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Play, MessageCircle } from "lucide-react";
import { useRef } from "react";
const testimonials = [
  {
    name: "Fatima Khan",
    text: "Dr. Saeed transformed my smile completely! The dental implants look so natural. Best dentist in Karachi!",
    image: "/T1.jpg",
    rating: 5,
    treatment: "Dental Implants"
  },
  {
    name: "Ahmed Ali",
    text: "Finally found a pain-free dentist in Karachi. Dr. Saeed's root canal treatment was amazing - no discomfort at all!",
    image: "/T2.jpg",
    rating: 5,
    treatment: "Root Canal"
  },
  {
    name: "Sarah Ibrahim",
    text: "The smile makeover was life-changing. Dr. Saeed is truly the best cosmetic dentist in Karachi!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Smile Makeover"
  },
  {
    name: "Muhammad Hassan",
    text: "Very competent and professional doctor. Dr. Saeed explained everything clearly and the results exceeded my expectations.",
    image: "/T3.jpg",
    rating: 5,
    treatment: "General Dentistry"
  },
  {
    name: "Dr. Ayesha Malik",
    text: "I visited Dr. Saeed for my broken teeth problem. His professional approach and expertise impressed me greatly.",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Restorative Dentistry"
  },
  {
    name: "Omar Sheikh",
    text: "Came from Dubai and chose Dr. Saeed after consulting multiple dentists. Best decision for my dental care!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Comprehensive Care"
  },
  {
    name: "Zara Ahmed",
    text: "Dr. Saeed provided exceptional care and service. Very gentle and professional throughout my treatment.",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Cosmetic Dentistry"
  },
  {
    name: "Rashid Mahmood",
    text: "Extraordinary satisfaction! Very friendly and experienced doctor. Highly recommend Dr. Saeed's clinic.",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Periodontal Treatment"
  },
  {
    name: "Hina Tariq",
    text: "Dr. Saeed was very friendly and walked me through the entire process. Great experience with excellent results!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Orthodontics"
  },
  {
    name: "Bilal Qureshi",
    text: "Excellent experience with my family. Dr. Saeed was very friendly and efficient. Highly recommended!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Family Dentistry"
  },
  {
    name: "Nadia Iqbal",
    text: "Best dental clinic in Karachi. Affordable, excellent, and quick service. Dr. Saeed is amazing!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Preventive Care"
  },
  {
    name: "Kamran Ali",
    text: "Very professional and thorough. Completely satisfied with Dr. Saeed's treatment. Alhamdulillah!",
    image: "/T3.jpg",
    rating: 5,
    treatment: "Oral Surgery"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], slideIndex: i });
    }
    return result;
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 overflow-hidden" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-blue-100 font-medium text-sm">Patient Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from real patients at Dr. Saeed's Dental & Aesthetics Clinic
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${currentIndex}`}
                className={`bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 transform ${
                  index === 1 ? 'lg:scale-105 lg:z-10' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-300">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-slate-800/20 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Real Results: Smile Transformation in Karachi
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch how Dr. Saeed transformed a patient's smile with expert cosmetic dentistry. 
              Discover why people trust us for the best dental care in Karachi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
              <video
               ref={videoRef}
             className="w-full aspect-video"
            controls
             poster="/posteri.png"
             onPlay={() => setIsVideoPlaying(true)}
             onPause={() => setIsVideoPlaying(false)}
              >
                <source src="testimonialvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play Button Overlay */}
          {!isVideoPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <Play className="w-16 h-16 text-white" />
            </div>          )}
  </div>

            {/* Video Transcript */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-left">
              <div className="flex items-center mb-3">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span className="font-semibold text-blue-400">Patient Testimonial:</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "I searched everywhere for a <span className="text-blue-300 font-medium">cosmetic dentist in Karachi</span>, 
                and when I found Dr. Saeed, everything changed. From the initial consultation to the final smile reveal, 
                every step was smooth, professional, and surprisingly comfortable. If you're looking for the{' '}
                <span className="text-blue-300 font-medium">best smile makeover in Karachi</span>, 
                Dr. Saeed's clinic is where you go."
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <a
                href="https://wa.me/923438234969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Your Consultation Now
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Happy Patients" },
            { number: "15+", label: "Years Experience" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "99%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: testimonials.map((t, i) => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewBody": t.text,
              "itemReviewed": {
                "@type": "MedicalClinic",
                "name": "Dr. Saeed's Dental & Aesthetics Clinic",
                "medicalSpecialty": "Dentistry",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karachi",
                  "addressCountry": "Pakistan"
                }
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating.toString(),
                "bestRating": "5",
              },
              position: i + 1,
            })),
          }),
        }}
      />
    </section>
  );
};

export default Testimonials;