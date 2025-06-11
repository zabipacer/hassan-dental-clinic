import React, { useEffect, useState } from 'react';
import { Phone, Calendar, MapPin, Star, Award, Users, Clock, Shield, Heart } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div 
              className={`inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <Award className="w-4 h-4 text-blue-400 mr-2" />
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-blue-100 font-medium text-sm">4.9/5 • 500+ Patients</span>
            </div>

            {/* Main Heading */}
            <div 
              className={`transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Professional Dental Care in 
                <span className="text-blue-400 block">Karachi</span>
              </h1>
              <p className="text-xl text-blue-200 font-medium">
                Dr. Saeed's Dental & Aesthetics Clinic
              </p>
            </div>

            {/* Description */}
            <div 
              className={`transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Experience advanced dental treatments with state-of-the-art technology. 
                Specializing in dental implants, smile makeovers, and pain-free procedures.
              </p>
            </div>

            {/* Key Features */}
            <div 
              className={`grid grid-cols-3 gap-4 transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">2000+</div>
                <div className="text-sm text-gray-400">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
              
              <a
                href="tel:03438234969"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 0343-8234969
              </a>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="space-y-6">
            <div 
              className={`transform transition-all duration-700 delay-600 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Specialties</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    icon: Shield, 
                    title: 'Dental Implants', 
                    desc: 'Permanent tooth replacement solutions',
                    color: 'text-blue-400'
                  },
                  { 
                    icon: Heart, 
                    title: 'Smile Makeover', 
                    desc: 'Complete aesthetic transformations',
                    color: 'text-blue-400'
                  },
                  { 
                    icon: Star, 
                    title: 'Painless Treatment', 
                    desc: 'Advanced comfort techniques',
                    color: 'text-blue-400'
                  },
                  { 
                    icon: Award, 
                    title: 'Digital Dentistry', 
                    desc: '3D imaging and precision care',
                    color: 'text-blue-400'
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <service.icon className={`w-8 h-8 ${service.color} mb-3`} />
                    <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <div 
          className={`mt-16 transform transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Visit Our Clinic</h4>
                  <a
                    href="https://maps.app.goo.gl/PDGdmKJ86twhHNr1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition-colors text-sm hover:underline"
                  >
                    Khanewal Road, Faisalabad
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Opening Hours</h4>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9 AM - 9 PM</p>
                </div>
              </div>

              {/* Emergency */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Emergency Care</h4>
                  <p className="text-green-300 text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
}