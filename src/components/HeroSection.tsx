import React from 'react';
import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center px-4 py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 animate-slide-in-left">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <span className="text-primary text-sm font-medium tracking-wide">MBONGWE BRANDON EGBE</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block mb-2">Software Engineer</span>
                <span className="text-gradient">Building Production-Ready Backend Systems & Cloud-Native Applications</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-secondary/50 border border-border text-sm text-gray-300">NestJS</span>
                <span className="px-3 py-1 rounded-lg bg-secondary/50 border border-border text-sm text-gray-300">Next.js</span>
                <span className="px-3 py-1 rounded-lg bg-secondary/50 border border-border text-sm text-gray-300">TypeScript</span>
                <span className="px-3 py-1 rounded-lg bg-secondary/50 border border-border text-sm text-gray-300">GCP ACE</span>
              </div>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
                I build production-grade backend systems and cloud-native applications. Delivered enterprise systems across logistics, fintech, and cross-border trade for international clients. Currently based in Dubai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 cta-hover shadow-lg shadow-primary/25 px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
                >
                  <a
                    href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    View Resume
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/5 hover:border-white/30 px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
                >
                  <a
                    href="https://github.com/pentashi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    GitHub
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/5 hover:border-white/30 px-8 py-4 text-base font-medium rounded-lg transition-all duration-300"
                >
                  <a
                    href="https://linkedin.com/in/mbongwe-brandon-egbe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="lg:col-span-5 relative animate-slide-in-right">
            <div className="relative">
              {/* Floating Icons */}
              <div className="absolute -top-10 -left-10 p-4 glass-card rounded-xl animate-float">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-20 -right-8 p-4 glass-card rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <Database className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute bottom-20 -left-6 p-4 glass-card rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-8 right-20 p-4 glass-card rounded-xl animate-float" style={{ animationDelay: '3s' }}>
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Central Card */}
              <div className="glass-card p-8 rounded-2xl relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm text-gray-300">
                    <p className="text-primary mb-2">// GitHub Stats</p>
                    <p className="mb-1">const contributions = "1,100+ commits";</p>
                    <p className="mb-1">const repositories = "70+ repos";</p>
                    <p className="mb-1">const location = "Dubai, UAE";</p>
                    <p className="mb-1">const status = "Open to opportunities";</p>
                    <p className="mb-1">const expertise = [</p>
                    <p className="pl-4">"Backend Systems",</p>
                    <p className="pl-4">"Cloud Architecture",</p>
                    <p className="pl-4">"Enterprise Solutions"</p>
                    <p>];</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
