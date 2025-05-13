// TeethWhiteningPage.jsx

import React from "react";
import { FaPhoneAlt, FaSmileBeam, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import LocalSEOSection from "../components/LocalMAp";

export default function TeethWhiteningPage() {
  return (
    <div className="max-w-4xl pt-30 mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-2 text-center">🦷 Teeth Whitening in Faisalabad</h1>
      <p className="text-center text-lg mb-6">Professional, safe, and instant teeth whitening at Doctor Teeth Dental Clinic.</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a href="tel:+923216739504" className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"><FaPhoneAlt /> Call Now: +92 321 6739504</a>
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt /> Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad
        </div>
      </div>
<LocalSEOSection/>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">✨ Yellow Teeth? Not Anymore.</h2>
        <p className="mb-2">Looking for <strong>teeth whitening in Faisalabad</strong>? At Doctor Teeth, our advanced whitening service brightens your smile by up to 7 shades—in just 1 hour! Perfect for coffee, tea, or tobacco stains.</p>
        <p>Our dental-grade whitening formula is safe, effective, and approved by leading dental associations. Book your glow-up session today!</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🪥 3-Step Whitening Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Step 1: Prep</strong> – We clean and polish your teeth, then apply a vitamin-infused gel to prepare your enamel.</li>
          <li><strong>Step 2: Whiten</strong> – Lean back and relax while our professional LED light activates the whitening formula.</li>
          <li><strong>Step 3: Seal</strong> – We apply a remineralizing gel and give you a refreshing mouth rinse to lock in the shine.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💸 Affordable Pricing</h2>
        <p>Our <strong>teeth whitening price in Faisalabad</strong> starts from just <strong>Rs. 3,000</strong>. No hidden charges. Visible results.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📍 Who's It For?</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Smokers with stained teeth</li>
          <li>Coffee, tea, or cola drinkers</li>
          <li>Anyone preparing for a wedding or photoshoot</li>
          <li>Professionals who want a confident smile</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">⭐ Reviews from Faisalabad Locals</h2>
        <p>"I got my teeth whitened before my engagement and they looked amazing! Everyone complimented my smile. Totally worth it." – <em>Ayesha, Madina Town</em></p>
        <p>"Better results than my at-home kits. Zero sensitivity and super fast." – <em>Usman, Jinnah Colony</em></p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📅 Book Now, Shine Today</h2>
        <p className="mb-2">Let your smile do the talking. Appointments fill fast, especially before Eid, weddings, and graduation season.</p>
        <a href="tel:+923216739504" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full mt-3 hover:bg-green-700 transition"><FaSmileBeam className="inline-block mr-2" /> Call or WhatsApp: +92 321 6739504</a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🙋‍♀️ FAQs – Teeth Whitening in Faisalabad</h2>
        <div className="space-y-4">
          <div>
            <strong>Is the whitening treatment safe?</strong>
            <p>Yes! We use dentist-grade, enamel-safe materials approved by international dental bodies.</p>
          </div>
          <div>
            <strong>Does it hurt or cause sensitivity?</strong>
            <p>Most patients experience no discomfort. We also apply a desensitizing gel post-treatment.</p>
          </div>
          <div>
            <strong>How long do results last?</strong>
            <p>Up to 6 months with proper care—avoid colored drinks and smoking for best results.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-12 border-t pt-6">
        <p>Doctor Teeth Dental Clinic – Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad</p>
        <p>Phone/WhatsApp: +92 321 6739504</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}