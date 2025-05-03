
import React from 'react';
import { Card } from "@/components/ui/card";

interface TechStackItemProps {
  name: string;
  icon: string;
  category: string;
}

const technologies: TechStackItemProps[] = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TailwindCSS', icon: '🌊', category: 'frontend' },
  { name: 'Material UI', icon: '🎨', category: 'frontend' },
  { name: 'React Native', icon: '📱', category: 'mobile' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express', icon: '🚂', category: 'backend' },
  { name: 'Supabase', icon: '⚡', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'backend' },
  { name: 'Socket.IO', icon: '🔌', category: 'realtime' },
  { name: 'Zustand', icon: '🐻', category: 'state' },
];

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon, category }) => {
  return (
    <div className="glass-card hover-scale p-4 text-center rounded-lg flex flex-col items-center justify-center">
      <span className="text-3xl mb-2">{icon}</span>
      <h4 className="font-medium">{name}</h4>
      <p className="text-xs text-gray-500 uppercase">{category}</p>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">My Tech Stack</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          I specialize in modern web and mobile technologies focused on building 
          real-time, responsive, and scalable applications.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechStackItem 
              key={index} 
              name={tech.name} 
              icon={tech.icon} 
              category={tech.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
