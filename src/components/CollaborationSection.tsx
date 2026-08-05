
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CollaborationSection: React.FC = () => {
  return (
    <section id="collaborate" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Open to <span className="text-gradient">Collaborate</span>
              </h2>
              <div className="section-divider mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/30 transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Full-Stack & Backend Roles</h3>
                <p className="text-sm text-gray-400">NestJS, Next.js, TypeScript, PostgreSQL</p>
              </div>

              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/30 transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-3 rounded-lg bg-cyan-500/10 w-fit mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dubai, UAE</h3>
                <p className="text-sm text-gray-400">Open to relocation & remote work</p>
              </div>

              <div className="glass-card p-6 rounded-xl text-center hover:border-primary/30 transition-colors duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Available Immediately</h3>
                <p className="text-sm text-gray-400">Ready for interviews & new opportunities</p>
              </div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Actively seeking full-stack or backend engineering roles in Dubai and the wider UAE. 
                Open to onsite, hybrid, or remote arrangements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 cta-hover shadow-lg shadow-primary/25 px-8">
                    View My CV
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <a href="#contact" className="flex-1 sm:flex-none">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:border-white/30 px-8">
                    Let's Talk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
