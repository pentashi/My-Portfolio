import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const RESUME_URL = "https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing";

const nannyLinkHighlights = [
  "Postgres Row Level Security keeps nanny contact details private until a family pays or is granted access",
  "Stripe and PayPal checkout with repeat-safe fulfillment, duplicate-charge prevention and signed webhooks",
  "Admin console to review, approve and suspend nanny profiles",
  "76 automated end-to-end and security tests run in GitHub Actions CI",
];

const nannyLinkStack = ["TypeScript", "React", "TanStack Start", "Supabase", "Cloudflare Workers", "Stripe", "PayPal"];

const HeroSection: React.FC = () => {
  return (
    <section aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden flex items-center px-4 pt-28 pb-16 md:pt-32 md:pb-24">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div aria-hidden="true" className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl motion-safe:animate-pulse-slow"></div>
      <div aria-hidden="true" className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl motion-safe:animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 motion-safe:animate-slide-in-left">
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 mb-6">
              <span className="text-cyan-100 text-sm font-medium tracking-wide">Mbongwe Brandon Egbe</span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Full-stack engineer building and <span className="text-gradient">shipping production backends</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
              I designed, built and launched NannyLink on my own: a live marketplace with Stripe and PayPal payments, database-level security and 76 automated tests in CI.
            </p>

            <p className="text-base text-gray-300 mb-6">
              Based in Dubai. Open to full-stack and backend roles in the UAE and remote.
            </p>

            <ul aria-label="Core stack" className="flex flex-wrap gap-2 mb-8">
              {["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Supabase", "GCP (ACE certified)"].map((tag) => (
                <li key={tag} className="px-3 py-1 rounded-lg bg-secondary/60 border border-border text-sm text-gray-200">{tag}</li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-cyan-700 text-white hover:bg-cyan-600 shadow-lg shadow-primary/25 px-6 text-base font-medium rounded-lg">
                <a href="https://joinnannylink.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  View NannyLink (live)
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 text-base font-medium rounded-lg">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <a href="https://github.com/pentashi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
                  <SiGithub className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="https://linkedin.com/in/mbongwe-brandon-egbe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:bg-white/10 transition-colors">
                  <SiLinkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <article aria-labelledby="featured-project-heading" className="lg:col-span-6 glass-card p-6 md:p-8 rounded-2xl motion-safe:animate-slide-in-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200 mb-2">Featured project · Live in production</p>
            <h2 id="featured-project-heading" className="text-2xl md:text-3xl font-bold text-white mb-2">NannyLink</h2>
            <p className="text-gray-300 mb-5">A global nanny marketplace I built solo, from idea to launch.</p>

            <ul className="space-y-3 mb-6">
              {nannyLinkHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul aria-label="NannyLink stack" className="flex flex-wrap gap-2 mb-6">
              {nannyLinkStack.map((tag) => (
                <li key={tag} className="px-2.5 py-1 rounded-md border border-primary/30 bg-primary/5 text-xs text-gray-200">{tag}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Button asChild className="flex-1 bg-cyan-700 text-white hover:bg-cyan-600">
                <a href="https://joinnannylink.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  Live site
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href="https://github.com/pentashi/nanny-link-care" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                  Code
                </a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
