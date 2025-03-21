
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gym-darkgray to-gym-darkergray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">Contact Us</span>
          <h2 className="heading-lg text-white mt-2 mb-6">Get In Touch</h2>
          <p className="text-white/80 leading-relaxed">
            Have questions about our services, membership options, or anything else? 
            Reach out to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gym-red/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-white/70">123 Hingna Naka no.9, Hingna Road, Nagpur, Maharashtra, Nagpur -440016</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <p className="text-white/70">(91) *****</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gym-red/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-gym-red" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <p className="text-white/70">info@powerhousegym.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Gym Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white">Monday - Saturday</span>
                  <span className="text-white/70">Morning 
                    5:30am - 10:00am
                  Evening 
                  4:30pm-10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Sunday</span>
                  <span className="text-white/70">Closed</span>
                </div>
                <p className="text-gym-red mt-4 text-sm italic">
                  *Staff hours may vary. See front desk for details.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle2 className="h-16 w-16 text-gym-red mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-white/70 text-center">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-gym-red hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-xl overflow-hidden h-80 animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095289765!2d-74.00425692474954!3d40.74076937132734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1684161268099!5m2!1sen!2sca"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym location map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
