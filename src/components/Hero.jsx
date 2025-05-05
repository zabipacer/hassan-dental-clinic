import React from 'react';
import { Helmet } from 'react-helmet';

// If your image is inside /public folder, you can leave the src as "hero.jpg"
// If it's in /src/assets, then uncomment the line below:
// import heroImg from '../assets/hero.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dental Clinic Faisalabad",
    description:
      "Award-winning care, dental implants, and free consultations at Faisalabad's #1 dental clinic.",
    keywords: "dentist Faisalabad, dental implants, dental clinic Faisalabad",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      postalCode: "",
      streetAddress: ""
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00",
    telephone: "+923001234567",
    priceRange: "$$",
    image: "https://yourclinic.com/images/hero.jpg"
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 lg:pt-25 overflow-hidden">
      <Helmet>
        <title>Dental Clinic Faisalabad | Pain-Free Smiles Since 2008</title>
        <meta
          name="description"
          content="Faisalabad's #1 dental clinic offering pain-free smiles, over 5,000 happy patients, and free consultations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Dental Clinic Faisalabad | Pain-Free Smiles Since 2008"
        />
        <meta
          property="og:description"
          content="Faisalabad's #1 dental clinic offering pain-free smiles, over 5,000 happy patients, and free consultations."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourclinic.com/faisalabad" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 py-20 lg:py-0 h-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block">Faisalabad's #1</span>
            <span className="block">Dental Clinic</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-100 font-medium">
            Pain-Free Smiles Since 2008
          </h2>

          <p className="text-lg md:text-xl bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            Award-Winning Care • 5,000+ Happy Patients • Free Consultations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <a
              href="https://wa.me/923216739504"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Book Your Free Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium">4.9/5 from 200+ reviews</span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 bg-yellow-500 text-white px-4 py-2 rounded-full w-max mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            24/7 Emergency Service Available
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-lg group-hover:scale-105 transition-transform"></div>
            <img
              src="hero.jpg" // or use {heroImg} if imported
              alt="Smiling dentist with patient at Dental Clinic Faisalabad"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl relative border-4 border-white/20 group-hover:scale-105 transition-transform duration-300"
              width={600}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
