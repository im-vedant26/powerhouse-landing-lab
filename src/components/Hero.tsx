
import React, { useEffect, useState } from 'react';
import { ArrowDown, PlayCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gym-darkergray/70 to-gym-darkgray/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="text-gym-red uppercase tracking-wider text-sm md:text-base font-medium bg-white/5 px-4 py-2 rounded-full inline-block mb-6">
              Discover Your Strength
            </span>
          </div>
          
          <h1 className={`heading-xl text-white mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="block">UNLEASH YOUR POWER</span> 
            <span className="text-gym-red">AT POWER HOUSE GYM</span>
          </h1>
          
          <p className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Elevate your fitness journey with state-of-the-art equipment, expert trainers, and a community dedicated to helping you achieve your goals.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#pricing" className="btn-primary w-full sm:w-auto">
              View Membership Plans
            </a>
            <a href="#about" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
              <PlayCircle size={20} />
              Take a Tour
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ArrowDown size={30} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gym-darkgray to-transparent" />
    </section>
  );
};

export default Hero;
