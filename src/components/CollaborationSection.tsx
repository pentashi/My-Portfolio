
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CollaborationSection: React.FC = () => {
  return (
    <section id="collaborate" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Open For <span className="text-gradient">Collaboration</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm looking to partner with talented developers and designers to build 
            exceptional products. Especially interested in connecting with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6 rounded-lg hover-scale">
              <h3 className="text-xl font-bold mb-3">Mobile Devs</h3>
              <p className="text-gray-400">
                React Native / Expo developers who want to help build the mobile version of QuickChat.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg hover-scale">
              <h3 className="text-xl font-bold mb-3">UI/UX Designers</h3>
              <p className="text-gray-400">
                Designers who love crafting beautiful, high-converting interfaces.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg hover-scale">
              <h3 className="text-xl font-bold mb-3">Hackers & Builders</h3>
              <p className="text-gray-400">
                Engineers interested in real-time, AI, and habit systems.
              </p>
            </div>
          </div>
          
          <Button
  size="lg"
  className="bg-primary hover:bg-primary/80 cta-hover"
  onClick={() => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Let's Build Something <ArrowRight className="ml-2 h-4 w-4" />
</Button>

        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
