import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gym-darkergray pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="mb-6">
              <a href="#home" className="text-white font-display font-bold text-2xl flex items-center">
                <span className="text-gym-red">POWER</span>HOUSE
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Elevating fitness since 2008. Power House Gym is committed to helping you achieve your fitness 
              goals with premium facilities and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gym-red transition-colors p-2 bg-white/5 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-red transition-colors p-2 bg-white/5 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-red transition-colors p-2 bg-white/5 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-red transition-colors p-2 bg-white/5 rounded-full">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-gym-red transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Strength Training', 
                'Cardio Workouts', 
                'Personal Training',
                'Nutrition Guidance',
                'Recovery Zone'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-gym-red transition-colors inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gym-red mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  123 Hingna Naka no.9, Hingna Road, Nagpur, Maharashtra, Nagpur -440016
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gym-red mr-3 flex-shrink-0" />
                <span className="text-white/70">(###) ****** *****</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gym-red mr-3 flex-shrink-0" />
                <span className="text-white/70">info@powerhousegym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Power House Gym. All rights reserved.
          </p>
          <div className="flex items-center">
            <div className="mr-6 flex gap-4">
              <Link to="/privacy-policy" className="text-white/60 hover:text-gym-red text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-gym-red text-sm">Terms & Conditions</Link>
            </div>
            <button 
              onClick={scrollToTop}
              className="bg-gym-red p-3 rounded-full text-white hover:bg-opacity-90 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
