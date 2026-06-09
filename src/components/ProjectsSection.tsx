import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "ReceiptVault — Enterprise Expense Management Platform",
      description:
        "A cloud-native, production-grade fintech SaaS platform built on a scalable Google Cloud Platform (GCP) microservices architecture. It automates expense tracking for UAE enterprises by leveraging Google Cloud Document AI for advanced field extraction and GCS for secure storage. Fully containerized with Docker, configured via automated Cloud Build CI/CD pipelines, and deployed to serverless runtimes for horizontal scalability and UAE compliance.",
      features: [
        "Enterprise AI OCR: Standardized on Google Cloud Document AI (Expense Processor) to automate high-accuracy parsing of merchant names, line items, and transaction metadata.",
        "Cloud Architecture: Developed an asynchronous pipeline storing media securely in Google Cloud Storage (GCS) and tracking structured relational states.",
        "Automated DevSecOps: Integrated secure authentication flows and orchestrated end-to-end continuous deployment using GCP Cloud Build CI/CD pipelines.",
        "UAE Regulatory Framework: Engineered natively for Dubai businesses with full 5% VAT tracking, AED processing rules, and a bilingual, RTL-ready interface.",
        "Scalable Back-to-Front Stack: Built with a highly responsive React 18 / TypeScript frontend and a stateless Flask backend optimized for deployment over serverless infrastructure."
      ],
      tags: ["React", "TypeScript", "Python", "Flask", "GCP", "Document AI", "GCS", "Cloud Build", "PostgreSQL", "Docker"],
      image: "/receiptvault-demo.png",
      liveUrl: "https://receiptvault-frontend-210041012141.me-central1.run.app/",
      githubUrl: "https://github.com/pentashi/Receipt-vault",
      isReverseLayout: true,
      emoji: "🧾"
    },
    {
      title: "AutoPartage Gabon — Enterprise Fleet Analytics Engine",
      description:
        "A multi-tenant fleet and rental management ecosystem engineered to process complex rent-to-own lifecycles. Built with an optimized UI state machine to prevent data race conditions and integrated with automated, serverless infrastructure health checks for continuous application uptime.",
      features: [
        "Interactive analytics dashboard managing real-time vehicle metrics and fleet utilization",
        "Asynchronous remote state architecture handling complex rent-to-own operational data rules",
        "Robust input formatting and type-safe schema constraints ensuring 100% financial alignment accuracy",
        "Automated continuous integration and deployment profiles containerized via Cloud Run",
        "Custom external monitoring cron endpoints providing zero unnotified system pauses"
      ],
      tags: ["Next.js", "React", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "GCP", "Docker", "GitHub Actions"],
      image: "/autopartage.png",
      liveUrl: "https://autopartage-frontend-19378503105.europe-west1.run.app/", // Update to front/back endpoint as preferred
      githubUrl: "https://github.com/pentashi/AutoPartage-Gabon-location-vente", 
      isReverseLayout: false,
      emoji: "🚗"
    },
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
      isReverseLayout: true,
      emoji: "💪"
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
      isReverseLayout: true,
      emoji: "🚚"
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
      isReverseLayout: true,
      emoji: "🛒"
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
      isReverseLayout: true,
      emoji: "🧙"
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
      isReverseLayout: true,
      emoji: "💸"
    },
    {
      title: "CEMAC Accounting Backend",
      description:
        "A modular, production-grade backend for CEMAC-compliant accounting management, built with NestJS, TypeORM, and PostgreSQL. Designed for enterprise use, with a focus on security, auditability, and extensibility.",
      features: [
        "Secure JWT authentication with RBAC (admin/user roles)",
        "Modular architecture: invoices, partners, accounting, reporting, audit, notifications",
        "Comprehensive audit logging (login, CRUD, exports)",
        "Export/import for invoices, accounting entries, and partners (PDF, Excel, CSV)",
        "Password reset with email integration",
        "Notification system for key events",
        "Swagger API documentation at /api-docs",
        "Unit and e2e test coverage"
      ],
      tags: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "TypeScript"],
      image: "/cemac-accounting-swagger.png",
      liveUrl: "https://cemac-accounting-backend.onrender.com/api-docs",
      githubUrl: "https://github.com/pentashi/cemac-accounting-backend",
      isReverseLayout: true,
      emoji: "📊"
    },
    {
      title: "CMS Cloud Backend",
      description:
        "A robust, scalable, and secure Content Management System (CMS) backend built with Node.js, TypeScript, Express, and Firebase Realtime Database.",
      features: [
        "User Authentication: Secure signup and login with JWT.",
        "Post Management: Full CRUD API for posts with validation and authentication.",
        "API Documentation: Interactive Swagger UI at /docs.",
        "Validation: Strong input validation using Zod.",
        "Centralized Error Handling: Consistent and informative error responses.",
        "Security: Helmet, CORS, and environment-based configuration.",
        "Logging: HTTP request logging with Morgan."
      ],
      tags: ["Express", "Firebase", "TypeScript", "Node.js", "Swagger", "Zod"],
      image: "/cms-cloud-swagger.png",
      liveUrl: "https://cms-cloud-6zht.onrender.com/docs",
      githubUrl: "https://github.com/pentashi/cms-cloud",
      isReverseLayout: true,
      emoji: "☁️"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;