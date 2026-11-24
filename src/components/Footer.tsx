import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-semibold text-white">Mbongwe Brandon Egbe</p>
        <p className="text-sm text-gray-500">Full-stack engineer · Dubai, UAE</p>
      </div>
      <SocialLinks size="sm" />
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} MBE</p>
    </div>
  </footer>
);

export default Footer;
