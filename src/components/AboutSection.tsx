import React from 'react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';
import { MapPin, Briefcase, GraduationCap, Award, Building2, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Bio */}
          <div className="lg:col-span-5 animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gradient">Who I Am</h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Full-stack engineer based in Dubai. I built and launched NannyLink, a live two-sided marketplace, as its sole engineer, and I build backends for clients in logistics and accounting.
              </p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                I specialize in NestJS, Next.js, TypeScript, and PostgreSQL, plus Supabase, Postgres Row Level Security, payments (Stripe, PayPal) and serverless hosting on Cloudflare and GCP. What I care about is building things that survive contact with real users and real cloud bills: cost-aware, secure, and tested.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90 cta-hover shadow-lg shadow-primary/25">
                  <a
                    href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Download Resume
                  </a>
                </Button>

                <div className="flex items-center gap-2">
                  <SocialLinks />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">76</div>
                  <div className="text-sm text-gray-400">Automated tests on NannyLink</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">GCP</div>
                  <div className="text-sm text-gray-400">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-7 space-y-6 animate-slide-in-right">
            {/* Location Card */}
            <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
                  <p className="text-gray-300">Dubai, UAE</p>
                  <p className="text-sm text-gray-500">Open to relocation</p>
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              
              <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    {/* TODO(verify): confirm title, company name and dates for the AMSIT & AMSI Group work. */}
                    <h4 className="text-lg font-bold text-white">Independent Software Consultant</h4>
                    <p className="text-primary mb-2">AMSIT & AMSI Group</p>
                    <p className="text-sm text-gray-400 mb-3">Jul 2024 – Present | China · Cameroon · Gabon · Remote</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Building backend software for clients in logistics, fleet management and accounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>CargoLink: event-driven NestJS APIs for real-time shipment tracking (deployment in progress)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>AutoPartage: fleet and rent-to-own rental management app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>CEMAC Ledger: OHADA-compliant financial accounting engine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 flex-shrink-0">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">Software Engineering Intern</h4>
                    <p className="text-cyan-400 mb-2">ENEO Cameroon</p>
                    <p className="text-sm text-gray-400 mb-3">Jul 2022 – Sep 2022</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Worked on an internal recruitment platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Wrote unit tests for frontend features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Participated in system testing, debugging, and code reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Education</h4>
                    <p className="text-gray-300 text-sm">BTECH Software Engineering</p>
                    <p className="text-gray-400 text-sm">Institut Universitaire de la Côte (IUC)</p>
                    <p className="text-gray-500 text-xs mt-1">2021 – 2024</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Certification</h4>
                    <p className="text-gray-300 text-sm">GCP Associate Cloud Engineer (ACE)</p>
                    <p className="text-gray-500 text-xs mt-1">Google Cloud Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
