import React from 'react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <p className="text-lg mb-4 text-gray-300">
              I'm a passionate full-stack developer based in Douala, Cameroon, with a strong focus on
              real-time web applications, Supabase, and the MERN stack.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My mission is to build meaningful, high-quality products—especially in chat, productivity, 
              and lifestyle spaces that help users live better digital lives.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Currently building a WhatsApp-level real-time chat app and a powerful habit tracker 
              to help users reach top 1% discipline.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
            <Button className="bg-primary hover:bg-primary/80">
  <a 
    href="https://drive.google.com/file/d/1t_Qobaac7qY4c74DENZvf2ViQsgjzvQf/view?usp=sharing" 
    download="Resume-Mbongwe-Brandon-Egbe.pdf" 
    className="text-white"
  >
    Resume
  </a>
</Button>


              <SocialLinks />
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card p-6 rounded-lg animate-scale-in flex flex-col md:w-full">
            <h3 className="text-xl font-bold mb-3 text-gradient">Location</h3>
            <p className="mb-4 text-gray-300">Douala, Cameroon</p>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Experience</h3>
            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">Software Engineering Intern - <span className="text-gray-400">ENEO Cameroon</span></h4>
              <p className="mb-1 text-gray-300">Jul 2023 – Sept 2023</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Optimized internal recruitment platform through team collaboration</li>
                <li>Wrote unit tests that reduced frontend bugs by 20%</li>
                <li>Conducted system testing and performed code reviews</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary">Backend Developer - <span className="text-gray-400">Amunir Logistics</span></h4>
              <p className="mb-1 text-gray-300">Jul 2024 – Present</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Designed and implemented RESTful APIs and real-time communication features for a logistics platform using Node.js, Express, and MongoDB</li>
                <li>Integrated JWT for authentication</li>
                <li>Developed and maintained secure user management, order tracking, analytics, and notification systems</li>
                <li>Collaborated with frontend developers and product managers to ensure seamless user experience and scalable architecture</li>
                <li>Ensured high code quality through unit testing, Git-based version control, and continuous integration practices</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Education</h3>
            <p className="text-gray-300">BTECH in Software Engineering - <span className="font-bold">Institut Universitaire de la Côte (IUC), Cameroon</span> (2021 – 2024)</p>
            
            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Certifications</h3>
            <p className="text-gray-300">HackerRank Software Engineer Certification</p>
            <p className="text-gray-300">Issued: March 2025 | Credential ID: <span className="text-primary">E63D5351B8CD</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
