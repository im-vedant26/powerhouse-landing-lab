
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
      alt: 'Gym interior with modern equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80',
      alt: 'Weight training area',
    },
    {
      src: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&auto=format&fit=crop&q=80',
      alt: 'Person using rowing machine',
    },
    {
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=80',
      alt: 'Group fitness class',
    },
    {
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80',
      alt: 'Gym equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&auto=format&fit=crop&q=80',
      alt: 'Personal training session',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gym-darkergray to-gym-darkgray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">Gallery</span>
          <h2 className="heading-lg text-white mt-2 mb-6">Our Facility</h2>
          <p className="text-white/80 leading-relaxed">
            Take a visual tour of our state-of-the-art gym. From our equipment zones to our 
            functional training areas, get a glimpse of the Power House experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-lg img-hover-zoom animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-6 right-6 text-white bg-gym-red p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-w-5xl max-h-[80vh] animate-scale-in">
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
