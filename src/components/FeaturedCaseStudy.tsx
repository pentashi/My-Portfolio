import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Lock } from 'lucide-react';
import BrowserFrame from './BrowserFrame';
import { autoPartner } from '@/data/work';

const FeaturedCaseStudy: React.FC = () => {
  const [active, setActive] = useState(0);
  const shot = autoPartner.screenshots[active];

  return (
    <article id="autopartner" aria-labelledby="autopartner-heading" className="scroll-mt-24 glass-card rounded-3xl p-6 md:p-10 mb-16">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="rounded-full bg-green-400/10 border border-green-400/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-300">
          Featured project · Live
        </span>
        <span className="text-sm text-gray-400">{autoPartner.sector}</span>
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {autoPartner.location}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
        <div className="lg:col-span-7">
          <p className="text-cyan-300 font-semibold mb-2">{autoPartner.client}</p>
          <h3 id="autopartner-heading" className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {autoPartner.title}
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">{autoPartner.summary}</p>
        </div>
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">The challenge</h4>
          <p className="text-gray-300 leading-relaxed mb-6">{autoPartner.challenge}</p>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">My role</dt>
              <dd className="text-white">{autoPartner.role}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="text-white">In production</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mb-10">
        <div role="tablist" aria-label="AutoPartner screenshots" className="flex flex-wrap gap-2 mb-5">
          {autoPartner.screenshots.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                i === active ? 'bg-cyan-300 text-background font-semibold' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <BrowserFrame key={shot.src} src={shot.src} alt={shot.alt} url={shot.url} className="motion-safe:animate-fade-in" />
      </div>

      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">What I built</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {autoPartner.outcomes.map((o) => (
          <div key={o.title} className="rounded-xl border border-white/10 p-5">
            <h5 className="font-semibold text-white mb-2">{o.title}</h5>
            <p className="text-sm text-gray-400 leading-relaxed">{o.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
        <ul aria-label="AutoPartner stack" className="flex flex-wrap gap-2">
          {autoPartner.stack.map((t) => (
            <li key={t}>
              <Badge variant="outline" className="border-white/15 text-gray-300 bg-white/5">{t}</Badge>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <Lock className="h-4 w-4" aria-hidden="true" />
            Code private, walkthrough on request
          </span>
          <Button asChild className="bg-cyan-300 text-background hover:bg-cyan-200 font-semibold">
            <a href={autoPartner.liveUrl} target="_blank" rel="noopener noreferrer">
              Visit live site
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCaseStudy;
