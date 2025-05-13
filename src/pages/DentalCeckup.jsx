import React from "react";
import { Helmet } from "react-helmet";
import { CalendarCheck, CheckCircle, PhoneCall } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function DentalCheckupLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Dental Checkup in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta name="description" content="Schedule your routine dental checkup in Faisalabad with Doctor Teeth. Prevent cavities, gum issues, and more with expert dental care." />
        <meta name="keywords" content="dental checkup Faisalabad, routine dentist visit Faisalabad, oral health screening Faisalabad" />
        <meta property="og:title" content="Dental Checkup in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Expert dental checkups in Faisalabad. Early detection of cavities, gum disease & oral issues. Book your visit today." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-green-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">Routine Dental Checkup in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Prevent dental problems before they start. Schedule a professional dental exam today.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
              Book Now
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2 text-green-700 font-medium">
              <PhoneCall size={20} /> Call Clinic
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800">Why Routine Dental Checkups Matter</h2>
          <p className="mt-4 text-gray-700 text-center">
            A regular dental visit helps detect early signs of cavities, gum disease, oral cancer, and other issues. Save yourself from pain, cost, and future complications.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">What’s Included in a Dental Checkup?</h3>
            <ul className="space-y-3">
              {[
                "Full oral health screening",
                "Cavity and plaque detection",
                "Gum disease assessment",
                "Dental X-rays if needed",
                "Personalized oral hygiene advice",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <CalendarCheck className="text-green-500 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">FAQs about Dental Checkups</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-700">How often should I get a dental checkup?</h4>
              <p className="text-gray-700">Every 6 months is ideal, but your dentist may recommend differently based on your oral health.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Is a dental checkup painful?</h4>
              <p className="text-gray-700">No. It's a non-invasive procedure and typically painless.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">What if a problem is found during the checkup?</h4>
              <p className="text-gray-700">We'll explain the issue and offer treatment options tailored to your needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-green-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-800">Book Your Dental Checkup in Faisalabad</h3>
          <p className="mt-4 text-gray-600">
            Keep your teeth and gums healthy. Schedule your dental checkup today at Doctor Teeth Dental Clinic, Faisalabad.
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
            Call to Book
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic, Faisalabad. All rights reserved.
      </footer>
    </div>
  );
}
