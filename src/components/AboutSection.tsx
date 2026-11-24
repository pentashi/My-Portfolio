import React from 'react';
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

const RESUME_URL = "https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing";

const experience = [
  {
    role: 'Independent Software Consultant',
    org: 'AMSIT & AMSI Group',
    period: 'Jul 2024 – present · China · Cameroon · Gabon · Remote',
    body: 'Backend software for logistics, fleet management and accounting clients, including AutoPartner, CargoLink and CEMAC Accounting.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'ENEO Cameroon',
    period: 'Jul – Sep 2022',
    body: 'Internal recruitment platform: frontend unit tests, system testing and code reviews.',
  },
];

const stack = [
  { group: 'Backend', items: 'TypeScript, Node.js, NestJS, Express, Python (Flask), Prisma, TypeORM, SQLAlchemy' },
  { group: 'Data', items: 'PostgreSQL, MongoDB, Redis, Supabase' },
  { group: 'Frontend', items: 'React, Next.js, TanStack, Tailwind CSS' },
  { group: 'Cloud', items: 'GCP (Cloud Run, Document AI), AWS, Docker, GitHub Actions, Vercel, Render' },
  { group: 'Integrations', items: 'Stripe, PayPal, mobile money, Twilio, Socket.IO, Traccar' },
];

const AboutSection: React.FC = () => (
  <section id="about" aria-labelledby="about-heading" className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="Experience, education and stack"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 glass-card rounded-2xl p-8">
          <p className="text-2xl font-bold text-white mb-1">Mbongwe Brandon Egbe</p>
          <p className="text-cyan-300 mb-6">Full-stack engineer · Dubai, UAE</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I build and run backends for payments, fleets and finance: fleet tracking in Gabon, cross-border shipping
            from China to Central Africa, and VAT for UAE companies.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Open to full-stack and backend roles in Dubai, the wider UAE and remote: onsite, hybrid or remote.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </Button>
            <SocialLinks />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {experience.map((e) => (
            <div key={e.role} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-cyan-300 text-sm mb-1">{e.org}</p>
              <p className="text-xs text-gray-500 mb-3">{e.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{e.body}</p>
            </div>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6 flex gap-4">
              <Award className="h-6 w-6 text-cyan-300 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">Google Cloud Associate Cloud Engineer</h3>
                <p className="text-sm text-gray-500">Certification</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 flex gap-4">
              <GraduationCap className="h-6 w-6 text-cyan-300 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">BTech Software Engineering</h3>
                <p className="text-sm text-gray-500">Institut Universitaire de la Côte · 2021 – 2024</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Stack</h3>
            <dl className="space-y-2 text-sm">
              {stack.map((s) => (
                <div key={s.group} className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="text-gray-500">{s.group}</dt>
                  <dd className="text-gray-300">{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
