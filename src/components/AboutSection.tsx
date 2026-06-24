import React from 'react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <p className="text-lg mb-6 text-gray-300">
              Full-Stack and Cloud Engineer with proven experience delivering production systems for international clients across logistics, fintech, and cross-border trade. I specialize in NestJS, Next.js, TypeScript, and PostgreSQL, with deep backend expertise in event-driven architecture, JWT/RBAC security, and GCP cloud infrastructure. I hold a GCP Associate Cloud Engineer certification and have shipped three enterprise-grade systems for a logistics firm operating across China, Cameroon, and Gabon. What I care about is building things that survive contact with real users and real cloud bills — cost-aware, secure, and built to scale. Currently based in Dubai and actively looking for full-stack or backend engineering roles.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button className="bg-primary hover:bg-primary/80">
                <a
                  href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                  className="text-white"
                >
                  Download Resume
                </a>
              </Button>

              <SocialLinks />
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card p-6 rounded-lg animate-scale-in flex flex-col md:w-full">
            <h3 className="text-xl font-bold mb-3 text-gradient">Location</h3>
            <p className="mb-4 text-gray-300">
              Dubai, UAE
            </p>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Experience</h3>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">
                Software Engineering Intern <span className="text-gray-400">– ENEO Cameroon</span>
              </h4>
              <p className="mb-1 text-gray-300">Jul 2022 – Sep 2022</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Contributed to an internal recruitment platform used across teams</li>
                <li>Implemented unit tests, reducing frontend bugs by ~20%</li>
                <li>Participated in system testing, debugging, and code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">
                Independent Software Consultant <span className="text-gray-400">– AMSIT & AMSI Group</span>
              </h4>
              <p className="mb-1 text-gray-300">Jul 2024 – Present | China · Cameroon · Gabon · Remote</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Delivered three enterprise-grade backend systems for a cross-border logistics firm operating across China, Cameroon, and Gabon</li>
                <li>CargoLink: Architected event-driven NestJS APIs managing 1,200+ real-time GPS state updates/minute with sub-second synchronization</li>
                <li>AutoPartage: Built fleet management and rent-to-own backend with PostgreSQL optimization achieving 40% reduction in reporting latency</li>
                <li>CEMAC Ledger: Engineered OHADA-compliant financial accounting engine with audit logging, RBAC, and real-time report streaming</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Education</h3>
            <p className="text-gray-300">
              BTECH in Software Engineering –{" "}
              <span className="font-bold">Institut Universitaire de la Côte (IUC)</span> (2021 – 2024)
            </p>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Certification</h3>
            <p className="text-gray-300">HackerRank Software Engineer Certification</p>
            <p className="text-gray-300">
              Issued: March 2025 | Credential ID{" "}
              <span className="text-primary">E63D5351B8CD</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
