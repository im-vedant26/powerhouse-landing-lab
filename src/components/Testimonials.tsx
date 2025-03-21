import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Member for 3 years',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=80',
      stars: 5,
      text: "Power House Gym has completely transformed my fitness journey. The trainers are exceptional, the equipment is top-notch, and the community is incredibly supportive. I've gained more strength and confidence than I ever thought possible.",
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Member for 1 year',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
      stars: 5,
      text: "Joining Power House was the best decision I made for my health. The 24/7 access fits perfectly with my busy schedule, and the variety of classes keeps my routine fresh and exciting. I've lost 30 pounds and feel amazing!",
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Member for 2 years',
      image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=400&auto=format&fit=crop&q=80',
      stars: 5,
      text: 'As a competitive athlete, having access to high-quality equipment and knowledgeable staff is crucial. Power House exceeds all my expectations. The specialized training zones and recovery areas have significantly improved my performance.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      navigateNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const navigatePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const navigateNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-20 bg-gym-darkgray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">Testimonials</span>
          <h2 className="heading-lg text-white mt-2 mb-6">Success Stories</h2>
          <p className="text-white/80 leading-relaxed">
            Don't just take our word for it. Hear from our members who have transformed their lives through 
            dedication and the support of our Power House community.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 md:p-10 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="md:w-1/3 flex-shrink-0">
                        <div className="aspect-square overflow-hidden rounded-xl ring-2 ring-gym-red/30">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex mb-4">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-gym-red text-gym-red" />
                          ))}
                        </div>
                        <p className="text-white/90 italic text-lg mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                          <p className="text-white/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={navigatePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-gym-red text-white p-2 rounded-full shadow-lg transition-all hover:bg-opacity-90 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={navigateNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-gym-red text-white p-2 rounded-full shadow-lg transition-all hover:bg-opacity-90 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all ${
                  currentIndex === index ? 'bg-gym-red w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
