
import React from 'react';
import { Dumbbell, Users, Heart, Zap, Trophy, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell size={48} className="text-gym-red mb-4" />,
      title: 'Strength Training',
      description: 'State-of-the-art equipment for building muscle and strength. Free weights, machines, and functional training areas.',
    },
    {
      icon: <Heart size={48} className="text-gym-red mb-4" />,
      title: 'Cardio Area',
      description: 'Premium cardio machines including treadmills, ellipticals, rowers, and bikes to boost your cardiovascular fitness.',
    },
    {
      icon: <Users size={48} className="text-gym-red mb-4" />,
      title: 'Group Classes',
      description: 'Energizing classes led by expert instructors. From HIIT to yoga, we offer something for everyone.',
    },
    {
      icon: <Zap size={48} className="text-gym-red mb-4" />,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers who will customize workouts to help you reach your specific goals.',
    },
    {
      icon: <Trophy size={48} className="text-gym-red mb-4" />,
      title: 'Specialized Zones',
      description: 'Dedicated areas for functional training, stretching, and recovery to optimize your fitness experience.',
    },
    {
      icon: <Clock size={48} className="text-gym-red mb-4" />,
      title: '24/7 Access',
      description: "Train on your schedule with round-the-clock access for members. Your fitness journey doesn't stop, neither do we.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-service-bg">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">Our Services</span>
          <h2 className="heading-lg text-white mt-2 mb-6">Premium Fitness Experience</h2>
          <p className="text-white/80 leading-relaxed">
            At Power House Gym, we offer comprehensive fitness services designed to help you achieve your goals, 
            whether you're looking to build strength, improve endurance, or enhance overall wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <a href="#pricing" className="btn-primary inline-flex items-center">
            Explore Membership Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
