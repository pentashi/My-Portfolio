
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-bold text-lg">MBONGWE BRANDON EGB</h3>
          <p className="text-sm text-gray-400">Full Stack Developer | Real-time App Builder</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <SocialLinks />
          <p className="text-sm text-gray-500 mt-4">
            Built with ♥ using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
