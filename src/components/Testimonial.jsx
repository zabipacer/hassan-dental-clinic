import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ayesha R.",
    text: "Dr. Ali gave me my confidence back! Best veneers in Faisalabad!",
    image: "/T1.jpg",
  },
  {
    name: "Hamza T.",
    text: "Finally found a pain-free dentist in Faisalabad. Amazing root canal experience.",
    image: "/T2.jpg",
  },
  {
    name: "Sara M.",
    text: "The smile makeover was life-changing. Best cosmetic dentist in Faisalabad!",
    image: "/T3.jpg",
  },
  {
    name: "Muhammad Ibrahim",
    text: "Very competent and humble doctor.",
    image: "/T3.jpg",
  },
  {
    name: "Dr. Urooj Muddasar",
    text: "I went to doctor for the solution of my broken teeth. He treated me very well; the procedure he opted was professional.",
    image: "/T3.jpg",
  },
  {
    name: "Faisal Ramzii",
    text: "Keepin' it simple, I came to Pak from KSA and visited Dr. Tajwer. After consulting and getting quotes from others, I chose them.",
    image: "/T3.jpg",
  },
  {
    name: "Amir James",
    text: "Doctor Mohsin Refique is very nice. He provided exceptional care and service.",
    image: "/T3.jpg",
  },
  {
    name: "Shahid Rasool",
    text: "Extraordinary satisfaction! Very friendly and experienced doctor. Highly recommended.",
    image: "/T3.jpg",
  },
  {
    name: "Nauman Sabir",
    text: "Doc was very friendly and walked me through the entire process. Great experience!",
    image: "/T3.jpg",
  },
  {
    name: "Areej Kashif",
    text: "Excellent experience with my family. Doctor was very friendly and efficient. Highly recommended Dr. Tajwer!",
    image: "/T3.jpg",
  },
  {
    name: "Kashif Ali",
    text: "Best in town. Affordable, excellent, and quick service. Highly recommended.",
    image: "/T3.jpg",
  },
  {
    name: "Kiran Kashif",
    text: "Very professional. Satisfied Alhamdulillah.",
    image: "/T3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Patient Testimonials</h2>

        <div className="relative h-80">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
              }`}
            >
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-2 text-lg">"{t.text}"</p>
                <span className="text-teal-600 font-semibold block mt-2">– {t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-teal-600" : "bg-gray-300"
              } transition duration-100`}
            />
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
    Real Results: Smile Makeover in Faisalabad
  </h2>

  <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
    Watch how we transformed a patient's smile with expert cosmetic dentistry in Faisalabad. Discover why people trust us for the best dental care.
  </p>

  <div className="rounded-xl overflow-hidden shadow-xl aspect-video mb-6 border border-gray-200">
    <video
      className="w-full h-full"
      controls
      poster="/smile-journey-poster.jpg"
    >
      <source src="smile-journey.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="text-left text-gray-700 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
    <strong className="block mb-2 text-blue-800">Transcript:</strong>
    “I searched everywhere for a <strong>cosmetic dentist in Faisalabad</strong>, and when I found Dr. Ali, everything changed. From the initial consultation to the final smile reveal, every step was smooth, professional, and surprisingly comfortable. If you're looking for the <strong>best smile makeover in Faisalabad</strong>, this is where you go.”
  </div>

  <div className="mt-6 text-center">
  <a
    href="https://wa.me/923216739504" // Replace this with the correct WhatsApp number link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-teal-600 text-white font-medium py-2 px-6 rounded-full hover:bg-teal-700 transition-all duration-300"
  >
    Book Your Consultation Now
  </a>
</div>

</div>


        {/* SEO Schema */}
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
                  "name": "[Clinic Name]",
                  "medicalSpecialty": "Dentistry",
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                },
                position: i + 1,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
