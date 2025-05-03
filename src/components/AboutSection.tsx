
import React from 'react';
import { Button } from "@/components/ui/button";
import SocialLinks from './SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
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
                Resume
              </Button>
              <SocialLinks />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg animate-scale-in">
            <h3 className="text-xl font-bold mb-3 text-gradient">Location</h3>
            <p className="mb-4 text-gray-300">Douala, Cameroon</p>
            
            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Experience</h3>
            <p className="mb-1 text-gray-300">MERN Stack Development</p>
            <p className="mb-1 text-gray-300">Real-Time Applications</p>
            <p className="mb-4 text-gray-300">Supabase & Firebase</p>
            
            <h3 className="text-xl font-bold mb-3 text-gradient mt-6">Education</h3>
            <p className="text-gray-300">Self-taught Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
