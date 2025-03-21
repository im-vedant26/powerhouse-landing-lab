import React from 'react';
import { Award, Clock, Users, Dumbbell } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-gym-red" />,
      value: '24/7',
      label: 'Access',
    },
    {
      icon: <Users className="h-8 w-8 text-gym-red" />,
      value: '5,000+',
      label: 'Happy Members',
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-gym-red" />,
      value: '100+',
      label: 'Equipment',
    },
    {
      icon: <Award className="h-8 w-8 text-gym-red" />,
      value: '15+',
      label: 'Years Experience',
    },
  ];

  return (
    <section id="about" className="bg-gym-darkgray py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-gym-red via-white/20 to-gym-red/20 animate-pulse-subtle rounded-xl blur-xl opacity-40"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80" 
                  alt="Powerhouse Gym interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gym-red/90 p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-white text-xl font-semibold">Founded in 2008</p>
              <p className="text-white/80 mt-2">Empowering fitness journeys for over a decade</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-gym-red uppercase tracking-wider font-medium">About Us</span>
              <h2 className="heading-lg text-white mt-2">Where Dedication Meets Results</h2>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Power House Gym was founded with a simple mission: to create a fitness environment that inspires and transforms. We believe that everyone deserves access to premium fitness facilities and expert guidance regardless of their fitness level or background.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Our state-of-the-art facilities are designed to help you push boundaries and achieve what you once thought impossible. With dedicated zones for strength, cardio, functional training, and recovery, we've created the ultimate fitness destination for those serious about results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-4">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-white text-2xl font-bold">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
