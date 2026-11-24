import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, ShieldCheck } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import BrowserFrame from './BrowserFrame';

const RESUME_URL = "https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing";

const coreStack = ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Python', 'GCP', 'AWS'];

const HeroSection: React.FC = () => (
  <section aria-labelledby="hero-heading" className="relative overflow-hidden px-4 pt-32 pb-20 md:pt-40 md:pb-28">
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
    <div aria-hidden="true" className="absolute top-24 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 motion-safe:animate-fade-in">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 text-sm mb-7">
            <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
            Mbongwe Brandon Egbe · Dubai, UAE
          </p>

          <h1 id="hero-heading" className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Full-stack engineer building backends for <span className="text-gradient">payments, fleets and finance.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-xl">
            From GPS fleet tracking and rent-to-own contracts in Gabon to cross-border shipping and Stripe marketplaces,
            in production today. Open to full-stack and backend roles, onsite, hybrid or remote.
          </p>

          <ul aria-label="Core stack" className="flex flex-wrap gap-2 mb-8">
            {coreStack.map((t) => (
              <li key={t} className="px-3 py-1 rounded-lg bg-secondary/60 border border-border text-sm text-gray-200">{t}</li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-cyan-300 text-background hover:bg-cyan-200 font-semibold px-6 rounded-lg">
              <a href="#projects">
                See my projects
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 rounded-lg">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </Button>
            <a href="https://github.com/pentashi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
              <SiGithub className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/mbongwe-brandon-egbe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
              <SiLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-gray-400">
            <ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            Google Cloud Associate Cloud Engineer
          </p>
        </div>

        <div className="lg:col-span-6 relative motion-safe:animate-fade-in">
          <BrowserFrame
            src="/work/autopartner-home.webp"
            alt="AutoPartner Gabon live website, a rent-to-own and GPS tracking platform I built"
            url="autopartner-admin.vercel.app"
            eager
          />
          <a
            href="#autopartner"
            className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm glass-card rounded-xl px-5 py-4 border-cyan-300/20 hover:border-cyan-300/50 transition-colors"
          >
            <p className="text-xs uppercase tracking-wider text-cyan-300 mb-1">Featured project · Live</p>
            <p className="text-sm text-white font-medium">AutoPartner Gabon: fleet, rent-to-own and GPS tracking in Libreville</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
