import React from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiGooglecloud,
  SiTerraform,
  SiDocker,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiNextdotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Database, Cloud, Server, Code, Cpu, Layers } from 'lucide-react';

interface TechStackItemProps {
  name: string;
  Icon: React.ElementType;
  category: string;
}

const technologies: TechStackItemProps[] = [
  { name: 'React', Icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', Icon: SiNextdotjs, category: 'Frontend' },
  { name: 'TypeScript', Icon: SiTypescript, category: 'Frontend' },
  { name: 'TailwindCSS', Icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Node.js', Icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express', Icon: SiExpress, category: 'Backend' },
  { name: 'NestJS', Icon: SiNestjs, category: 'Backend' },
  { name: 'PostgreSQL', Icon: SiPostgresql, category: 'Database' },
  { name: 'Redis', Icon: SiRedis, category: 'Database' },
  { name: 'Socket.IO', Icon: SiSocketdotio, category: 'Realtime' },
  { name: 'GCP', Icon: SiGooglecloud, category: 'Cloud' },
  { name: 'Docker', Icon: SiDocker, category: 'Infrastructure' },
  { name: 'Terraform', Icon: SiTerraform, category: 'Infrastructure' },
  { name: 'Git', Icon: SiGit, category: 'Tools' },
  { name: 'GitHub', Icon: SiGithub, category: 'Tools' },
];

const categories = [
  { name: 'Frontend', icon: Code, color: 'primary' },
  { name: 'Backend', icon: Server, color: 'cyan' },
  { name: 'Database', icon: Database, color: 'primary' },
  { name: 'Cloud', icon: Cloud, color: 'cyan' },
  { name: 'Infrastructure', icon: Layers, color: 'primary' },
  { name: 'Tools', icon: Cpu, color: 'cyan' },
];

const TechStackItem: React.FC<TechStackItemProps> = ({ name, Icon, category }) => {
  return (
    <div className="group relative">
      <div className="glass-card p-4 rounded-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
        <Icon className="text-4xl text-primary group-hover:text-cyan-400 transition-colors duration-300 mb-3" />
        <h4 className="font-medium text-white text-sm">{name}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{category}</p>
      </div>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tech Stack</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl">
            Technologies I use to build scalable, real-time, and production-ready web applications.
          </p>
        </div>

        {/* Category-based display */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const categoryTechs = technologies.filter(tech => tech.category === category.name);
            if (categoryTechs.length === 0) return null;

            const CategoryIcon = category.icon;
            const colorClass = category.color === 'primary' ? 'text-primary' : 'text-cyan-400';
            const bgClass = category.color === 'primary' ? 'bg-primary/10' : 'bg-cyan-500/10';

            return (
              <div key={catIndex} className="animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${bgClass}`}>
                    <CategoryIcon className={`w-6 h-6 ${colorClass}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categoryTechs.map((tech, index) => (
                    <TechStackItem
                      key={index}
                      name={tech.name}
                      Icon={tech.Icon}
                      category={tech.category}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-gray-400">Years Exp</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-cyan-400 mb-2">GCP</div>
            <div className="text-sm text-gray-400">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
