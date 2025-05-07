
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Task Wizard",
      emoji: "🧙‍♂️",
      description: "A productivity app powered by Supabase. Real-time sync, smart notifications, authentication, and advanced user control via RLS.",
      features: [
        "Real-time database updates",
        "Email login/magic link auth",
        "Fully responsive and clean UI",
        "Notifications + smart UX"
      ],
      tags: ["React", "Supabase", "TailwindCSS", "Zustand"],
      image: "https://i.imgur.com/30gAlTp.png ",
      liveUrl: "https://task-wizard-unleashed-e388a3cf.vercel.app/",
      githubUrl: "https://github.com/pentashi/task-wizard-unleashed-e388a3cf",
      isReverseLayout: false
    },
    {
      title: "ShopSmart",
      emoji: "🛒",
      description: "A modern e-commerce platform built for speed and scalability. Real-time inventory, secure checkout, and smooth user experience.",
      features: [
        "Product listings with filtering & sorting",
        "User authentication and order history",
        "Cart, checkout & payment integration",
        "Responsive design with modern UI"
      ],
      tags: ["React", "Supabase", "TailwindCSS", "Stripe"],
      image: "https://i.imgur.com/eteYXgS.png",
      liveUrl: "https://ecommerce-omega-swart-83.vercel.app/",
      githubUrl: "https://github.com/pentashi/ecommerce-",
      isReverseLayout: true
    }
    // {
    //   title: "QuickChat",
    //   emoji: "🧨",
    //   description: "A feature-rich messaging app focused on speed, security, and usability. Built with Socket.IO, Supabase Auth + DB, and a stunning Material UI.",
    //   features: [
    //     "Real-time messaging",
    //     "Presence, typing indicators, read receipts",
    //     "Media sharing and encrypted sessions",
    //     "Web & mobile-ready (React + React Native)"
    //   ],
    //   tags: ["React", "Socket.IO", "Supabase", "Material UI", "React Native"],
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   isReverseLayout: true
    // },
    // {
    //   title: "OnePercent",
    //   emoji: "🔥",
    //   description: "Track daily streaks, avoid distractions, and rewire your brain to beat lust and scrolling addiction. Monk mode in a web app.",
    //   features: [
    //     "Habit dashboard with streak tracking",
    //     "Daily journal + progress charts",
    //     "Built to help users reach top 1% discipline",
    //     "Focus timers and distraction blockers"
    //   ],
    //   tags: ["React", "MongoDB", "Express", "Node.js", "Recharts"],
    //   image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   isReverseLayout: false
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              emoji={project.emoji}
              description={project.description}
              features={project.features}
              tags={project.tags}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              isReverseLayout={project.isReverseLayout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
