import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const capabilityHighlights = [
  "1,200+ GPS updates/min synchronized in real time",
  "Enterprise systems shipped across logistics, fintech, and trade",
  "GCP Associate Cloud Engineer certified",
];

const focusAreas = [
  "Event-driven NestJS backends",
  "Cloud-native product architecture",
  "TypeScript systems with real operational rigor",
];

const HeroSection: React.FC = () => {
  return (
    <section className="section-shell relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_28%)]" />

      <div className="content-grid relative z-10 gap-16">
        <div className="max-w-4xl">
          <div className="eyebrow mb-8">MBONGWE BRANDON EGBE / FULL-STACK ENGINEER</div>

          <div className="mb-8 space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Backend systems · cloud infrastructure · production delivery
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building event-driven backends and cloud systems that hold up under real operational load.
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
              I design and ship production software with NestJS, Next.js, TypeScript, PostgreSQL, and Google Cloud — for teams operating across logistics, finance, and cross-border trade.
            </p>
          </div>

          <div className="mb-10 grid gap-3 sm:grid-cols-3">
            {capabilityHighlights.map((item) => (
              <div key={item} className="panel-muted min-h-[96px] p-5">
                <p className="text-sm leading-6 text-white/82">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-none border border-white/20 bg-white px-6 text-sm font-medium uppercase tracking-[0.22em] text-black hover:bg-white/90"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-white/20 bg-transparent px-6 text-sm font-medium uppercase tracking-[0.22em] text-white hover:bg-white/5"
                asChild
              >
                <a href="#contact">Start a Conversation</a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white/48">
              <MapPin className="h-4 w-4" />
              Dubai, UAE
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="panel p-6 md:p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/45">Operating Profile</p>
            <div className="space-y-4">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">0{focusAreas.indexOf(item) + 1}</span>
                  <p className="text-base leading-7 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6 md:p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/45">Architecture Lens</p>
            <div className="rounded-none border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-white/74">
              Client request
              <br />
              → API gateway
              <br />
              → NestJS services
              <br />
              → queues / events
              <br />
              → PostgreSQL + cloud storage
              <br />
              → operators get reliable state
            </div>
            <p className="mt-4 text-sm leading-6 text-white/58">
              I care about systems that remain observable, secure, and cost-aware after launch — not just during demos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
