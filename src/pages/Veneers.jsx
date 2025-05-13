import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone } from 'lucide-react';
import Testimonials from '../components/Testimonial';

const DentalVeneersPage = () => {
  return (
    <>
      <Helmet>
        <title>Dental Veneers Faisalabad | Price, Procedure & Benefits</title>
        <meta name="description" content="Discover the benefits, cost, and process of getting dental veneers in Faisalabad. Transform your smile with long-lasting, stain-resistant porcelain veneers." />
      </Helmet>

      <section className="container mx-auto p-6 pt-30">
        <h1 className="text-4xl font-bold">Porcelain Veneers in Faisalabad</h1>
        <p className="mt-4 text-lg">At Doctor Teeth Dental Clinic Faisalabad, we offer high-quality porcelain veneers to help you get a brighter, more even smile. Whether you have chipped, stained, or slightly misaligned teeth, dental veneers are a fast and natural-looking solution. Our expert dentists provide customized veneer treatments to enhance your smile and boost your confidence.</p>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">What Are Porcelain Veneers?</h2>
        <p className="mt-4">Porcelain veneers are thin, custom-made shells designed to cover the front surface of your teeth. They are used to improve the appearance of teeth that are:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Chipped or broken</li>
          <li>Discolored or stained</li>
          <li>Worn down</li>
          <li>Misaligned, uneven, or irregularly shaped</li>
          <li>Gapped or spaced</li>
        </ul>
        <p className="mt-2">Our veneers are made from high-quality materials that mimic the translucency of natural teeth, ensuring a seamless blend with your existing smile.</p>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Benefits of Porcelain Veneers</h2>
        <ul className="mt-4 list-disc pl-6">
          <li>Restore chipped or cracked teeth</li>
          <li>Fix discoloration or stubborn stains</li>
          <li>Close small gaps between teeth</li>
          <li>Improve the shape and alignment of teeth</li>
          <li>Durable and stain-resistant</li>
          <li>Looks and feels like natural teeth</li>
          <li>Quick and pain-free procedure</li>
        </ul>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Are You a Candidate for Veneers?</h2>
        <p className="mt-4">You may be a good candidate if you:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Have healthy gums and sufficient tooth enamel</li>
          <li>Want a long-lasting cosmetic solution</li>
          <li>Don’t have habits like nail-biting or teeth grinding</li>
          <li>Are looking to fix multiple cosmetic issues at once</li>
        </ul>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Veneer Procedure at Doctor Teeth</h2>
        <ol className="mt-4 list-decimal pl-6">
          <li><strong>Consultation:</strong> We evaluate your smile, discuss goals, and design a personalized plan.</li>
          <li><strong>Preparation:</strong> A small layer of enamel is removed. Temporary veneers may be placed.</li>
          <li><strong>Custom Design:</strong> Impressions are sent to a dental lab to create your custom veneers.</li>
          <li><strong>Placement:</strong> Permanent veneers are bonded to your teeth for a perfect fit.</li>
        </ol>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Cost of Veneers in Faisalabad</h2>
        <p className="mt-4">The cost of veneers in Faisalabad typically ranges from <strong>PKR 12,000 to PKR 25,000 per tooth</strong>, depending on material and complexity. We offer flexible payment plans and consultations to help you make the best decision for your smile and budget.</p>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Aftercare & Recovery</h2>
        <p className="mt-4">After veneer placement, some sensitivity to hot and cold may occur for a few days. Proper care includes:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Brushing twice daily with non-abrasive toothpaste</li>
          <li>Flossing daily</li>
          <li>Avoiding hard foods and staining drinks (like coffee and tea)</li>
          <li>Regular dental checkups and cleanings</li>
        </ul>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Veneers vs Other Treatments</h2>
        <table className="mt-4 w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Treatment</th>
              <th className="border px-4 py-2">Benefits</th>
              <th className="border px-4 py-2">Longevity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Veneers</td>
              <td className="border px-4 py-2">Stain-resistant, cosmetic reshaping</td>
              <td className="border px-4 py-2">10–20 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Whitening</td>
              <td className="border px-4 py-2">Brightens existing teeth</td>
              <td className="border px-4 py-2">6 months–2 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bonding</td>
              <td className="border px-4 py-2">Quick fixes for chips/gaps</td>
              <td className="border px-4 py-2">3–7 years</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4">
          <h3 className="font-semibold">Are veneers painful?</h3>
          <p>No, the procedure is painless and performed under local anesthesia.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Are veneers permanent?</h3>
          <p>They’re not technically permanent but can last 10–20 years with good care.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Will insurance cover veneers?</h3>
          <p>Veneers are considered cosmetic, so insurance typically does not cover the cost.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Do veneers look natural?</h3>
          <p>Yes, porcelain veneers are designed to mimic natural teeth in color and translucency.</p>
        </div>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Smile Gallery</h2>
       <Testimonials/>
      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Book Your Consultation Today</h2>
        <p className="mt-4">Ready to get your dream smile? Book a consultation with Doctor Teeth Dental Clinic in Faisalabad. We'll assess your needs, explain the process, and guide you toward a confident, beautiful smile.</p>
        <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Schedule Your Appointment</a>
      </section>

      <section className="container mx-auto p-6 mt-6">
        <h2 className="text-2xl font-semibold">Visit Us</h2>
        <div className="flex items-center mt-4">
          <MapPin className="mr-2" />
          <p>Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad</p>
        </div>
        <div className="flex items-center mt-2">
          <Phone className="mr-2" />
          <a href="tel:+923216739504" className="text-blue-600">+92 321 6739504</a>
        </div>
        <div className="mt-4">
          <a href="https://g.co/kgs/dnjVekN" target="_blank" className="text-blue-600">View on Google Maps</a>
        </div>
      </section>
    </>
  );
};

export default DentalVeneersPage;
