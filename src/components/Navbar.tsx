import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing";

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/85 backdrop-blur-xl border-b border-border' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Mbongwe Brandon Egbe, back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300 text-sm font-black text-background">MBE</span>
          <span className="hidden sm:block font-semibold text-white tracking-tight">Mbongwe Brandon Egbe</span>
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <Button asChild size="sm" className="bg-cyan-300 text-background hover:bg-cyan-200 font-semibold">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors relative z-[1000]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col gap-6 pt-24 px-8">
          {[...navLinks, { name: 'Resume', href: RESUME_URL }].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl text-gray-300 hover:text-cyan-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
