import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
   {
  title: "AI Fitness Coach (Beta)",
  emoji: "💪",
  description: "An AI-powered fitness assistant currently in Beta, generating personalized workout plans and providing real-time coaching through a chatbot. Live features include onboarding, custom plan generation, and interactive chat; live tracking, progress monitoring, and physique rating are coming soon.",
  features: [
    "Beta version live with onboarding & AI-generated workout plans",
    "AI chatbot for fitness coaching and habit guidance",
    "Dynamic exercise suggestions adapting to user goals and environment",
    "Real-time notifications and reminders",
    "Built with React frontend and Firebase backend, with AI logic powered by Groq",
    "Future updates: live tracking, progress monitoring, and physique rating"
  ],
  tags: ["React", "Firebase", "Groq", "TailwindCSS"],
  image: "https://i.ibb.co/4g19h9ff/Untitled-design-4.png", 
  liveUrl: "https://ai-fitness-coach.vercel.app/",
  githubUrl: "https://github.com/pentashi/ai-fitness-coach",
  isReverseLayout: false
}
,
    {
      title: "CargoLink / Amunir Backend",
      emoji: "🚛",
      description: "A robust backend API powering Amunir, a logistics platform designed to streamline importation and delivery for African entrepreneurs. Built with NestJS, MongoDB, and Socket.IO, supporting real-time order tracking, driver dispatch, and analytics while maintaining secure authentication and role-based access.",
      features: [
        "RESTful API architecture using NestJS with modular service/controller design",
        "JWT authentication and role-based access control",
        "Real-time order status updates via Socket.IO",
        "Unit-tested endpoints using Jest for reliability and maintainability",
        "Analytics for shipments, performance tracking, and operational insights",
        "Firebase-powered notifications for instant delivery updates",
        "Swagger API documentation for developer collaboration",
        "CRUD operations for user management with secure password hashing (bcrypt)"
      ],
      tags: ["NestJS", "MongoDB", "Socket.IO", "JWT", "Jest", "Firebase", "Swagger"],
      image: "https://i.ibb.co/spXh2HRg/cargolinkdoc.png", 
      liveUrl: "https://cargolink-backend.vercel.app/",
      githubUrl: "https://github.com/pentashi/amunir-backend",
      isReverseLayout: true
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
      liveUrl: "https://ecommerce-phi-jet-67.vercel.app/login",
      githubUrl: "https://github.com/pentashi/ecommerce-",
      isReverseLayout: false
    },
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
      image: "https://i.imgur.com/30gAlTp.png",
      liveUrl: "https://task-wizard-unleashed-e388a3cf.vercel.app/",
      githubUrl: "https://github.com/pentashi/task-wizard-unleashed-e388a3cf",
      isReverseLayout: true
    },
    {
      title: "Expense Tracker",
      emoji: "💰",
      description: "A smart expense management system built with Lumen (Laravel) backend and React frontend. Tracks income, expenses, budgets, and visualizes data with interactive charts.",
      features: [
        "JWT-secured API built with Lumen",
        "Real-time expense tracking and summaries",
        "Category-based analytics and charts",
        "Multi-language support with i18next",
        "Modern UI with PrimeReact and Tailwind styling"
      ],
      tags: ["React", "Lumen", "JWT Auth", "Chart.js", "PrimeReact"],
      image: "https://i.ibb.co/4wT1G4km/expense-tracker.png",
      liveUrl: "https://expense-tracker-nine-zeta-11.vercel.app/",
      githubUrl: "https://github.com/pentashi/expense-tracker",
      isReverseLayout: false
    }
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
