import React from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiSocketdotio,
  SiVercel,
  SiLaravel,
} from "react-icons/si";

interface TechStackItemProps {
  name: string;
  Icon: React.ElementType;
  category: string;
}

const technologies: TechStackItemProps[] = [
  { name: 'React', Icon: SiReact, category: 'Frontend' },
  { name: 'TailwindCSS', Icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Material UI', Icon: SiMui, category: 'Frontend' },
  { name: 'Node.js', Icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express', Icon: SiExpress, category: 'Backend' },
  { name: 'Laravel', Icon: SiLaravel, category: 'Backend' },
  { name: 'Supabase', Icon: SiSupabase, category: 'Database/Auth' },
  { name: 'MongoDB', Icon: SiMongodb, category: 'Database/Auth' },
  { name: 'Socket.IO', Icon: SiSocketdotio, category: 'Realtime' },
  { name: 'Vercel', Icon: SiVercel, category: 'Deployment' },
];

const TechStackItem: React.FC<TechStackItemProps> = ({ name, Icon, category }) => {
  return (
    <div className="glass-card hover-scale p-4 text-center rounded-lg flex flex-col items-center justify-center">
      <Icon className="text-3xl text-primary mb-2" />
      <h4 className="font-medium text-white">{name}</h4>
      <p className="text-xs text-gray-400 uppercase">{category}</p>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Tech Stack</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          Technologies I use to build scalable, real-time, and production-ready web applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechStackItem 
              key={index} 
              name={tech.name} 
              Icon={tech.Icon} 
              category={tech.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
