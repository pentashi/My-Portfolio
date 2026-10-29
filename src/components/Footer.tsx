
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold text-2xl text-cyan-300 mb-2">MBE</p>
            <p className="text-sm text-gray-400 mb-4">Full-Stack Engineer</p>
            <p className="text-xs text-gray-500">TypeScript · NestJS · Supabase · PostgreSQL · GCP</p>
          </div>
          
          {/* Location */}
          <div className="text-center">
            <h4 className="font-semibold text-white mb-2">Location</h4>
            <p className="text-sm text-gray-400">Dubai, UAE</p>
            <p className="text-xs text-gray-500 mt-1">Open to opportunities</p>
          </div>
          
          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-white mb-2">Connect</h4>
            <div className="flex justify-center md:justify-end">
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-gray-500">
            Built by Mbongwe Brandon Egbe · Dubai, UAE · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
