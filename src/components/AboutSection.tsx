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
            <p className="text-lg mb-4 text-gray-300">
              Full-stack developer specializing in the MERN stack and real-time web applications.
              I build production-ready systems with authentication, APIs, dashboards, and live data
              using React, Node.js, MongoDB, and Socket.IO.
            </p>

            <p className="text-lg mb-4 text-gray-300">
              I have hands-on experience building logistics platforms, AI-powered tools,
              and scalable backend services with a strong focus on performance, security,
              and maintainable code.
            </p>

            <p className="text-lg mb-6 text-gray-300">
              Open to junior, contract roles with a strong learning environment to prove value fast and grow within
              a strong engineering team.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button className="bg-primary hover:bg-primary/80">
                <a
                  href="https://drive.google.com/file/d/1t_Qobaac7qY4c74DENZvf2ViQsgjzvQf/view?usp=sharing"
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
              Dubai, UAE <span className="text-primary">(Available Immediately)</span>
            </p>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Experience</h3>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">
                Software Engineering Intern <span className="text-gray-400">– ENEO Cameroon</span>
              </h4>
              <p className="mb-1 text-gray-300">Jul 2023 – Sept 2023</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Contributed to an internal recruitment platform used across teams</li>
                <li>Implemented unit tests, reducing frontend bugs by ~20%</li>
                <li>Participated in system testing, debugging, and code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">
                Backend Developer <span className="text-gray-400">– Amunir Logistics</span>
              </h4>
              <p className="mb-1 text-gray-300">Jul 2024 – Present</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Designed and built RESTful APIs using Node.js, Express, and MongoDB</li>
                <li>Implemented JWT authentication and role-based access control</li>
                <li>Developed real-time order tracking using Socket.IO</li>
                <li>Built analytics, notifications, and secure user management features</li>
                <li>Maintained code quality with testing, Git workflows, and CI practices</li>
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
