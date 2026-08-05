import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "CargoLink — Logistics Backend & Real-Time Tracking API",
      description:
        "Production-grade backend system for a logistics platform supporting order management, live tracking, analytics, and secure role-based access for distributed operations teams.",
      features: [
        "Architected event-driven NestJS APIs managing 1,200+ real-time GPS state updates/minute with sub-second synchronization",
        "JWT authentication with role-based access control",
        "Real-time shipment updates and analytics for logistics operations",
        "Comprehensive API documentation using Swagger",
      ],
      tags: ["NestJS", "PostgreSQL", "Socket.IO", "JWT", "Swagger", "TypeScript"],
      image: "https://i.ibb.co/spXh2HRg/cargolinkdoc.png",
      liveUrl: "https://amunir-backend-xmn0.onrender.com/swagger",
      githubUrl: "https://github.com/Cargo-Link/amunir-backend",
      emoji: "🚚",
      isFlagship: true,
    },
    {
      title: "AutoPartage Gabon — Enterprise Fleet Analytics Engine",
      description:
        "A multi-tenant fleet and rental management system engineered around rent-to-own lifecycles, operational analytics, and uptime-aware infrastructure.",
      features: [
        "PostgreSQL optimization achieving a 40% reduction in reporting latency",
        "Interactive analytics dashboard managing real-time vehicle metrics and fleet utilization",
        "Asynchronous remote state architecture handling complex operational data rules",
        "Automated deployment profiles containerized via Cloud Run",
      ],
      tags: ["Next.js", "React", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "GCP", "Docker"],
      image: "/autopartage.png",
      liveUrl: "https://autopartage-frontend-19378503105.europe-west1.run.app/",
      githubUrl: "https://github.com/pentashi/AutoPartage-Gabon-location-vente",
      emoji: "🚗",
      isFlagship: true,
    },
    {
      title: "CEMAC Accounting Backend",
      description:
        "A modular backend for CEMAC-compliant accounting workflows, designed with strong security boundaries, auditability, and extensibility for enterprise use.",
      features: [
        "Comprehensive audit logging (login, CRUD, exports)",
        "Secure JWT authentication with RBAC",
        "Modular architecture for invoices, partners, accounting, reporting, and notifications",
        "Export and import flows for invoices, entries, and partner data",
      ],
      tags: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "TypeScript"],
      image: "/cemac-accounting-swagger.png",
      liveUrl: "https://cemac-accounting-backend.onrender.com/api-docs",
      githubUrl: "https://github.com/pentashi/cemac-accounting-backend",
      emoji: "📊",
    },
    {
      title: "NannyLink — Caregiver Matching Platform",
      description:
        "A pay-per-unlock caregiver marketplace for the UAE with payment verification, admin moderation, and secure media workflows.",
      features: [
        "Stripe webhook payment processing with caregiver verification workflows",
        "Dual-role JWT authentication for parents and caregivers",
        "GCS signed-URL video uploads and secure media handling",
        "Automated admin verification queue for caregiver approvals"
      ],
      tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "GCP"],
      githubUrl: "https://github.com/pentashi/nanny-link.git",
      emoji: "👶"
    },
    {
      title: "ReceiptVault — Enterprise Expense Management Platform",
      description:
        "A cloud-native expense management product for UAE businesses using Google Cloud Document AI, secure storage, and containerized deployment pipelines.",
      features: [
        "Standardized on Google Cloud Document AI for high-accuracy receipt extraction",
        "Asynchronous pipelines storing media in GCS and tracking structured state",
        "Automated Cloud Build CI/CD for secure deployments",
        "Built for VAT-aware UAE business workflows",
      ],
      tags: ["React", "TypeScript", "Python", "Flask", "GCP", "Document AI", "Docker"],
      image: "/receiptvault-demo.png",
      liveUrl: "https://receiptvault-frontend-210041012141.me-central1.run.app/",
      githubUrl: "https://github.com/pentashi/Receipt-vault",
      emoji: "🧾"
    },
    {
      title: "AI Fitness Coach",
      description:
        "An early AI integration experiment focused on personalized workout generation with a React frontend and Firebase-backed flows.",
      features: [
        "Personalized workout plan generation using Groq LLM APIs",
        "React frontend connected to Firebase backend workflows",
        "Exploration of real-time AI API integration patterns",
      ],
      tags: ["React", "Firebase", "Groq", "TailwindCSS"],
      image: "https://i.ibb.co/4g19h9ff/Untitled-design-4.png",
      liveUrl: "https://future-fit-ai-buddy-81.vercel.app/",
      githubUrl: "https://github.com/pentashi/future-fit-ai-buddy-81/",
      emoji: "💪"
    }
  ];

  const flagshipProjects = projects.filter((project) => project.isFlagship);
  const selectedProjects = projects.filter((project) => !project.isFlagship);

  return (
    <section id="projects" className="section-shell border-t border-white/8">
      <div className="content-grid gap-16">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">Selected Work</p>
          <h2 className="mb-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Systems built for operational complexity, not just polished demos.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/62">
            These projects highlight the kind of engineering I enjoy most: real data, real users, infrastructure constraints, and software that has to keep working after release.
          </p>
        </div>

        <div className="space-y-10">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/45">Additional Build Work</p>
            <p className="max-w-xl text-base leading-7 text-white/58">
              More systems across accounting, care marketplaces, fintech automation, and AI exploration.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;