
import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#tech' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between border px-5 py-4 transition-all duration-300 md:px-6 ${
          isScrolled
            ? 'border-white/15 bg-black/75 backdrop-blur-xl'
            : 'border-white/10 bg-black/35 backdrop-blur-md'
        }`}
      >
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
          MBE
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.24em] text-white/68 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
        >
          Available for Roles
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{isMobileMenuOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl border border-white/10 bg-black/92 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-[0.24em] text-white/78"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
