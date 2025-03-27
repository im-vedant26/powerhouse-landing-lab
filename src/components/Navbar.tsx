
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-6 px-4 md:px-8 backdrop-blur-md",
        isScrolled ? "bg-gym-darkergray/90 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/"
          onClick={scrollToTop}
          className="text-white font-display font-bold text-2xl flex items-center gap-2"
        >
          <span className="text-gym-red">POWER</span>HOUSE
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            if (link.name === 'Home') {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={scrollToTop}
                  className="text-white hover:text-gym-red transition-colors text-sm uppercase font-medium tracking-wide"
                >
                  {link.name}
                </a>
              );
            } else if (link.href.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gym-red transition-colors text-sm uppercase font-medium tracking-wide"
                >
                  {link.name}
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-gym-red transition-colors text-sm uppercase font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div className={cn(
        "absolute top-0 right-0 w-full h-screen z-40 bg-gym-darkergray transform transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8 overflow-y-auto relative">
          
          <button
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={36} />
          </button>

          {navLinks.map((link) => {
            if (link.name === 'Home') {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gym-red transition-colors text-xl font-medium"
                  onClick={(e) => {
                    scrollToTop(e);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              );
            } else if (link.href.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gym-red transition-colors text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-gym-red transition-colors text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
