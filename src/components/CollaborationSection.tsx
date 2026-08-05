
import React from 'react';
import { Button } from '@/components/ui/button';

const CollaborationSection: React.FC = () => {
  return (
    <section id="collaborate" className="section-shell border-t border-white/8">
      <div className="content-grid">
        <div className="panel p-8 md:p-12">
          <p className="eyebrow mb-5">Availability</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="mb-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                Open to engineering roles where backend depth and product judgment both matter.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/62">
                I’m actively exploring full-stack and backend opportunities in Dubai, across the UAE, and with strong remote teams.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                Available for full-time roles · freelance consulting · technical conversations
              </p>
              <Button
                size="lg"
                className="rounded-none border border-white/15 bg-white px-6 text-xs uppercase tracking-[0.24em] text-black hover:bg-white/90"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1HbBIV9oczKzwjdm3ZgfmC8JKw5jo62jA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
