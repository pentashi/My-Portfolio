import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import { caseStudies } from '@/data/work';

const WorkSection: React.FC = () => (
  <section id="projects" aria-labelledby="projects-heading" className="py-24 px-4 scroll-mt-16">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="What I have built and shipped"
        description="Every screenshot below is taken from the live product. Where the code is private, I am happy to walk you through it on a call."
      />

      <FeaturedCaseStudy />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <article key={study.id} id={study.id} aria-labelledby={`${study.id}-heading`} className="glass-card rounded-2xl overflow-hidden flex flex-col scroll-mt-24">
            <div className="aspect-[16/10] overflow-hidden bg-[#0b1118] border-b border-white/10">
              <img
                src={study.image.src}
                alt={study.image.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${study.imageFit === 'contain' ? 'object-contain bg-[#f4f6f8]' : 'object-cover object-top'}`}
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                <span className="text-cyan-300 font-semibold">{study.client}</span>
                <span className="text-gray-500">{study.sector}</span>
              </div>
              <h3 id={`${study.id}-heading`} className="text-2xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{study.role}</p>
              <p className="text-gray-300 leading-relaxed mb-5">{study.summary}</p>
              <ul className="space-y-2 mb-6">
                {study.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-cyan-300 mt-0.5" aria-hidden="true">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <ul aria-label={`${study.client} stack`} className="flex flex-wrap gap-2 mb-6">
                {study.stack.map((t) => (
                  <li key={t}>
                    <Badge variant="outline" className="border-white/15 text-gray-300 bg-white/5">{t}</Badge>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-5 pt-5 border-t border-white/10 text-sm">
                {study.liveUrl && (
                  <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">
                    {study.liveLabel ?? 'Live site'}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {study.codeUrl && (
                  <a href={study.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gray-200 hover:text-white">
                    <SiGithub className="h-4 w-4" aria-hidden="true" />
                    Source code
                  </a>
                )}
                {study.codeNote && (
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <Lock className="h-4 w-4" aria-hidden="true" />
                    {study.codeNote}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
