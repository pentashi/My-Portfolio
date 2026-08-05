
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/8 px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/38">MBONGWE BRANDON EGBE</p>
          <h3 className="text-xl font-medium text-white">Full-Stack Engineer building dependable production systems.</h3>
          <p className="mt-3 text-sm text-white/48">NestJS · TypeScript · PostgreSQL · Google Cloud · Dubai, UAE</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <SocialLinks />
          <p className="text-xs uppercase tracking-[0.2em] text-white/36">
            Built for clarity, not template noise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
