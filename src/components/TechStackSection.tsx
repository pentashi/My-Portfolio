import React from 'react';
const technologyGroups = [
  {
    title: 'Backend',
    items: ['NestJS', 'Node.js', 'Express', 'Socket.IO'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Data & Cloud',
    items: ['PostgreSQL', 'Redis', 'Google Cloud', 'Docker', 'Terraform'],
  },
];

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="section-shell border-t border-white/8 bg-black/25">
      <div className="content-grid gap-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-5">Core Stack</p>
            <h2 className="mb-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Tools I rely on to ship stable, maintainable software.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/60">
              I prefer a focused stack with strong operational payoffs over collecting every trendy tool into one grid.
            </p>
          </div>

          <div className="grid gap-5">
            {technologyGroups.map((group) => (
              <div key={group.title} className="panel p-6">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-medium text-white">{group.title}</h3>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/35">{group.items.length} tools</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/12 px-3 py-2 text-sm uppercase tracking-[0.16em] text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
