import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, id }) => (
  <div className="mb-14 max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-4">{eyebrow}</p>
    <h2 id={id} className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">{title}</h2>
    {description && <p className="text-lg text-gray-400 leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeading;
