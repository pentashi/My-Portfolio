import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const experienceItems = [
  {
    role: 'Independent Software Consultant',
    org: 'AMSIT & AMSI Group',
    period: 'Jul 2024 — Present',
    detail:
      'Delivered enterprise systems for a cross-border logistics group operating across China, Cameroon, and Gabon.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'ENEO Cameroon',
    period: 'Jul 2022 — Sep 2022',
    detail:
      'Contributed to internal platform work, testing, and quality improvements across frontend workflows.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-shell border-t border-white/8">
      <div className="content-grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow mb-5">About</p>
          <h2 className="mb-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            I build software for teams that need reliability, clarity, and engineering discipline.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/64">
            My strength is turning business-critical workflows into production systems that are secure, observable, and built with cost in mind. I care less about shipping flashy prototypes and more about building products that survive real usage and operational pressure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button className="rounded-none border border-white/15 bg-white px-5 text-xs uppercase tracking-[0.22em] text-black hover:bg-white/90" asChild>
              <a
                href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>

            <SocialLinks />
          </div>
        </div>

        <div className="grid gap-5">
          <div className="panel p-6">
            <div className="mb-4 flex items-center gap-3 text-white/75">
              <MapPin className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.24em]">Based in Dubai, UAE</span>
            </div>
            <p className="text-base leading-7 text-white/66">
              Open to full-stack and backend engineering roles across onsite, hybrid, and remote teams.
            </p>
          </div>

          <div className="panel p-6">
            <div className="mb-4 flex items-center gap-3 text-white/75">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.24em]">Credentials</span>
            </div>
            <p className="text-base leading-7 text-white/66">
              GCP Associate Cloud Engineer · HackerRank Software Engineer Certification · BTECH in Software Engineering
            </p>
          </div>

          <div className="panel p-6">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/42">Experience Snapshot</p>
            <div className="space-y-5">
              {experienceItems.map((item) => (
                <div key={item.role} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium text-white">{item.role}</h3>
                    <span className="text-sm text-white/38">{item.period}</span>
                  </div>
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-white/46">{item.org}</p>
                  <p className="text-sm leading-6 text-white/64">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
