
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Collaborate', href: '#collaborate' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/10 backdrop-blur-md shadow-sm'
          : 'py-6 bg-white/5 backdrop-blur-md'
      } rounded-b-xl`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-bold text-2xl tracking-wider text-primary/80">
          MBE
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-base text-gray-200 hover:text-primary/90 hover:underline hover:scale-105 transition-all duration-200 tracking-wide px-2"
            >
              {link.name}
            </a>
          ))}
          {/* <Button className="bg-primary hover:bg-primary/80 cta-hover">
            Contact
          </Button> */}
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 rounded-full bg-white/10 hover:bg-primary/10 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile navigation */}
      <div 
  className={`md:hidden fixed inset-0 z-[999] bg-[#0a0a0a] transition-transform duration-300 transform ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>

        <div className="h-full flex flex-col pt-20 px-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white text-xl hover:text-primary transition-colors"

                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* <Button 
              className="bg-primary hover:bg-primary/80 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
