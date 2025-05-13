import React from "react";
import { Phone, MapPin, ShieldCheck, Sparkles, Thermometer, Users } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Cavity Protection",
    description:
      "Fluoride strengthens the enamel, making teeth more resistant to decay."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Remineralizes Enamel",
    description:
      "Helps restore essential minerals lost from daily wear, acid, and sugary foods."
  },
  {
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
    title: "Reduces Sensitivity",
    description:
      "Especially helpful for patients who feel discomfort with hot or cold drinks."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Safe for All Ages",
    description:
      "Ideal for kids, adults, and seniors. We tailor the fluoride level to your needs."
  }
];

export default function FluorideTreatment() {
  return (
    <div className="max-w-5xl pt-30 mx-auto p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
          🦷 Fluoride Treatment in Faisalabad
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Prevent cavities, strengthen enamel, and protect your teeth with our
          fluoride treatments at Doctor Teeth Dental Clinic Faisalabad.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="tel:92 321 6739504"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://g.co/kgs/uAgG7yt"
            className="flex items-center gap-2 bg-gray-200 text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300"
          >
            <MapPin className="w-5 h-5" /> View Location
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">✅ What is Fluoride Treatment?</h2>
        <p>
          Fluoride treatment involves applying a concentrated fluoride varnish or gel to
          the teeth to protect against cavities and help rebuild enamel. It's a quick,
          safe, and highly effective preventive dental service offered to patients of
          all ages.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">💡 Benefits of Fluoride Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-4 bg-blue-50 rounded-xl shadow-sm"
            >
              {b.icon}
              <div>
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          ⭐ Why Choose Doctor Teeth Dental Clinic?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Experienced dentists with 1000+ successful fluoride treatments</li>
          <li>Customized plans for sensitivity, age, and dental condition</li>
          <li>Affordable – Prices start at just Rs. 1,500</li>
          <li>
            Located opposite Allied Hospital, accessible from Madina Town, People's
            Colony, and Eden Valley
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🧪 Treatment Process</h2>
        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>Oral examination to assess enamel and decay risk</li>
          <li>Teeth cleaning (if needed)</li>
          <li>Fluoride varnish/gel application</li>
          <li>Post-care guidance – avoid food/drinks for 30 minutes</li>
        </ol>
      </section>

      <section className="space-y-4" id="location">
        <h2 className="text-2xl font-semibold">📍 Areas We Serve</h2>
        <p>
          We offer fluoride treatments to patients from Madina Town, D-Ground,
          Ghulam Muhammadabad, Jaranwala Road, Satiana Road, People’s Colony, Eden
          Valley, and more.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">📢 FAQs</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>How often should I get fluoride treatment?</strong> – 1–2 times a year
            is recommended, especially for kids or sensitive teeth.
          </li>
          <li>
            <strong>Is fluoride safe?</strong> – Absolutely. We use only ADA-approved fluoride
            with dentist supervision.
          </li>
          <li>
            <strong>Does it hurt?</strong> – Not at all. The application is painless and takes
            less than 5 minutes.
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          📆 Book Your Appointment Today!
        </h2>
        <p className="mb-4">
          Call or WhatsApp us now at <strong>92 321 6739504</strong> to schedule your fluoride
          treatment and keep your smile healthy.
        </p>
        <a
          href="tel:92 321 6739504"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          📞 Call Now
        </a>
      </section>
    </div>
  );
}
