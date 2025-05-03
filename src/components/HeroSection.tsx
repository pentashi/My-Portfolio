
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-20 md:py-32">
      <div className="max-w-5xl mx-auto w-full animate-fade-in">
        <div className="mb-6">
          <h2 className="text-primary font-bold text-lg md:text-xl mb-3">MBONGWE BRANDON EGB</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Building <span className="text-gradient">Real-Time Tools</span> for a Better Digital Life
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            Full Stack Developer specializing in real-time applications, productivity tools, 
            and digital wellness products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/80 cta-hover">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              Let's Build Together
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
