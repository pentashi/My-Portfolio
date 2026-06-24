import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-5xl mx-auto w-full animate-fade-in">
        <div className="mb-8">
          <h2 className="text-primary font-semibold text-xl md:text-2xl mb-4 tracking-wide">
            MBONGWE BRANDON EGBE
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            Full-Stack Engineer | NestJS · Next.js · TypeScript · GCP ACE Certified<br />
            <span className="text-gradient">Building AI-Driven & Cloud-Native Systems in Dubai</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            I build production-grade backend systems and cloud-native applications using NestJS, Next.js, TypeScript, and PostgreSQL. Delivered enterprise systems across logistics, fintech, and cross-border trade for international clients. GCP Certified Associate Cloud Engineer. Open to full-stack and backend engineering roles in Dubai.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/80 cta-hover shadow-sm px-6 py-3 text-base font-medium rounded-lg transition-all duration-300"
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

            <Button size="md" variant="outline" className="border-white/20 hover:bg-white/5 px-4 py-2 text-base font-normal rounded-lg">
              <a href="#contact">Hire / Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
