import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI Fitness Coach — Personalized Training Platform",
      description:
        "AI-powered fitness web application that generates personalized workout plans and provides real-time coaching through an interactive chatbot. Designed with a scalable architecture to support onboarding, plan generation, and future live tracking features.",
      features: [
        "Personalized workout plan generation based on user profile and goals",
        "AI chatbot for coaching, habit guidance, and Q&A",
        "Secure authentication and structured onboarding flow",
        "Modular architecture designed for future live tracking and analytics"
      ],
      tags: ["React", "Firebase", "Groq", "TailwindCSS"],
      image: "https://i.ibb.co/4g19h9ff/Untitled-design-4.png",
      liveUrl: "https://future-fit-ai-buddy-81.vercel.app/",
      githubUrl: "https://github.com/pentashi/future-fit-ai-buddy-81/",
      isReverseLayout: true
    },
    {
      title: "CargoLink — Logistics Backend & Real-Time Tracking API",
      description:
        "Production-grade backend system for a logistics platform supporting order management, real-time tracking, analytics, and secure role-based access.",
      features: [
        "RESTful API built with NestJS and MongoDB",
        "JWT authentication with role-based access control",
        "Real-time order status updates using Socket.IO",
        "Shipment analytics, notifications, and tracking features",
        "Comprehensive API documentation using Swagger"
      ],
      tags: ["NestJS", "MongoDB", "Socket.IO", "JWT", "Jest", "Firebase", "Swagger"],
      image: "https://i.ibb.co/spXh2HRg/cargolinkdoc.png",
      liveUrl: "https://amunir-backend-xmn0.onrender.com/swagger",
      githubUrl: "https://github.com/Cargo-Link/amunir-backend",
      isReverseLayout: true
    },
    {
      title: "ShopSmart — E-Commerce Web Application",
      description:
        "Modern e-commerce platform focused on performance, usability, and secure online transactions.",
      features: [
        "Product listings with filtering and sorting",
        "User authentication and order history",
        "Cart, checkout, and Stripe payment integration",
        "Fully responsive and mobile-friendly UI"
      ],
      tags: ["React", "Supabase", "TailwindCSS", "Stripe"],
      image: "https://i.imgur.com/eteYXgS.png",
      liveUrl: "https://ecommerce-phi-jet-67.vercel.app/login",
      githubUrl: "https://github.com/pentashi/ecommerce-",
      isReverseLayout: true
    },
    {
      title: "Task Wizard — Real-Time Productivity App",
      description:
        "Productivity web application with real-time data synchronization, authentication, and smart user notifications.",
      features: [
        "Real-time updates powered by Supabase",
        "Email and magic-link authentication",
        "Row-level security (RLS) for user data protection",
        "Clean, responsive interface with modern UX"
      ],
      tags: ["React", "Supabase", "TailwindCSS", "Zustand"],
      image: "https://i.imgur.com/30gAlTp.png",
      liveUrl: "https://task-wizard-unleashed-e388a3cf.vercel.app/",
      githubUrl: "https://github.com/pentashi/task-wizard-unleashed-e388a3cf",
      isReverseLayout: true
    },
    {
      title: "Expense Tracker — Personal Finance Dashboard",
      description:
        "Expense management system for tracking income, expenses, budgets, and visual analytics.",
      features: [
        "JWT-secured API built with Lumen (Laravel)",
        "Expense categorization and budget summaries",
        "Interactive charts and financial insights",
        "Multi-language support and modern UI"
      ],
      tags: ["React", "Lumen", "JWT", "Chart.js", "PrimeReact"],
      image: "https://i.ibb.co/4wT1G4km/expense-tracker.png",
      liveUrl: "https://expense-tracker-nine-zeta-11.vercel.app/",
      githubUrl: "https://github.com/pentashi/expense-tracker",
      isReverseLayout: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Projects</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              features={project.features}
              tags={project.tags}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              isReverseLayout={project.isReverseLayout}
              imageClassName="w-full max-w-md h-64 object-cover rounded-lg"
              cardClassName="glass-card hover-scale p-4 rounded-lg flex flex-col justify-between min-h-[480px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
