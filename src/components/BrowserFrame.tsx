import React from 'react';

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  eager?: boolean;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ src, alt, url, className = '', eager = false }) => (
  <figure className={`rounded-xl overflow-hidden border border-white/10 bg-[#0b1118] shadow-2xl shadow-black/40 ${className}`}>
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
      {url && (
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-gray-400">{url}</span>
      )}
    </div>
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className="w-full h-auto block"
    />
  </figure>
);

export default BrowserFrame;
