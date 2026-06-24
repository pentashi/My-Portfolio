
import React from 'react';
import { Button } from '@/components/ui/button';

const CollaborationSection: React.FC = () => {
  return (
    <section id="collaborate" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Open to <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Actively seeking full-stack or backend engineering roles in Dubai and the wider UAE. Open to onsite, hybrid, or remote. Available immediately for interviews.
          </p>

          <a
            href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/80 cta-hover">
              View My CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
