import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "NannyLink — Global Nanny Marketplace",
      description:
        "A two-sided marketplace where families worldwide find vetted nannies, live at joinnannylink.com. Families pay a one-time fee to unlock a nanny's contact details or book a concierge matching service, and an admin team reviews every profile before it goes live. Designed, built and launched solo as founder and sole engineer.",
      features: [
        "Postgres Row Level Security so private nanny contact details only reach families who paid, were gifted access by an admin, or were matched through concierge",
        "Stripe Checkout and PayPal Orders behind one checkout API, with repeat-safe fulfillment, duplicate-checkout prevention, signed webhooks and correct pricing in zero-, two- and three-decimal currencies",
        "76 automated end-to-end and security tests against a local Supabase stack, run in GitHub Actions CI on every PR",
        "Admin console for nanny review, family management, payment search with CSV export, and concierge requests",
        "Status email alerts via database triggers, pg_net and an Edge Function, with a deduplicated retry queue on pg_cron"
      ],
      tags: ["TypeScript", "React", "TanStack Start", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "PayPal", "Resend", "Cloudflare Workers", "GitHub Actions"],
      image: "/nannylink.png",
      liveUrl: "https://joinnannylink.com",
      githubUrl: "https://github.com/pentashi/nanny-link-care",
      isReverseLayout: false,
      emoji: "👶"
    },
    {
      title: "CargoLink — Logistics Backend & Tracking API (Client Project)",
      description:
        "Backend for a client's logistics platform covering order management, shipment tracking, analytics and role-based access. Deployment to production is in progress.",
      features: [
        "Event-driven NestJS APIs with Socket.IO for real-time shipment and GPS updates",
        "JWT authentication with role-based access control",
        "API documentation with Swagger"
      ],
      tags: ["NestJS", "PostgreSQL", "Socket.IO", "JWT", "Swagger", "TypeScript"],
      image: "https://i.ibb.co/spXh2HRg/cargolinkdoc.png",
      liveUrl: "https://amunir-backend-xmn0.onrender.com/swagger",
      githubUrl: "https://github.com/Cargo-Link/amunir-backend",
      isReverseLayout: true,
      emoji: "🚚"
    },
    {
      title: "AutoPartage Gabon — Fleet Rental Management (Client Project)",
      description:
        // TODO(verify): confirm AutoPartage was client work and whether it is used in production.
        "A multi-tenant fleet and rental management app for rent-to-own vehicle contracts, with an analytics dashboard and automated health checks.",
      features: [
        "Analytics dashboard for vehicle metrics and fleet utilization",
        "Rent-to-own contract rules handled in a typed Express + Prisma backend",
        "Docker images deployed to Cloud Run through GitHub Actions"
      ],
      tags: ["Next.js", "React", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "GCP", "Docker", "GitHub Actions"],
      image: "/autopartage.png",
      liveUrl: "https://autopartage-frontend-19378503105.europe-west1.run.app/",
      githubUrl: "https://github.com/pentashi/AutoPartage-Gabon-location-vente",
      isReverseLayout: false,
      emoji: "🚗"
    },
    {
      title: "CEMAC Accounting Backend (Client Project)",
      description:
        "A modular backend for CEMAC-compliant accounting, built with NestJS, TypeORM and PostgreSQL, with a focus on security, auditability and extensibility.",
      features: [
        "JWT authentication with role-based access (admin/user)",
        "Modules for invoices, partners, accounting, reporting, audit and notifications",
        "Audit logging plus PDF, Excel and CSV export/import"
      ],
      tags: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "TypeScript"],
      image: "/cemac-accounting-swagger.png",
      liveUrl: "https://cemac-accounting-backend.onrender.com/api-docs",
      githubUrl: "https://github.com/pentashi/cemac-accounting-backend",
      isReverseLayout: true,
      emoji: "📊"
    },
    {
      title: "ReceiptVault — Expense Tracking App (Personal Project)",
      description:
        "A personal project that automates expense tracking for UAE businesses: receipts are parsed with Google Cloud Document AI, stored in Cloud Storage, and tracked with 5% VAT and AED rules in a bilingual, RTL-ready interface.",
      features: [
        "Receipt field extraction with Google Cloud Document AI (Expense Processor)",
        "Media stored in Google Cloud Storage with structured records in PostgreSQL",
        "Containerized React + Flask app deployed through Cloud Build to Cloud Run"
      ],
      tags: ["React", "TypeScript", "Python", "Flask", "GCP", "Document AI", "GCS", "Cloud Build", "PostgreSQL", "Docker"],
      image: "/receiptvault-demo.png",
      liveUrl: "https://receiptvault-frontend-210041012141.me-central1.run.app/",
      githubUrl: "https://github.com/pentashi/Receipt-vault",
      isReverseLayout: false,
      emoji: "🧾"
    },
    {
      title: "AI Fitness Coach — Personal Project",
      description:
        "An early exploration of AI integration — personalized workout plan generation using Groq LLM with a React frontend and Firebase backend. Built to learn real-time AI API integration patterns.",
      features: [],
      tags: ["React", "Firebase", "Groq", "TailwindCSS"],
      image: "https://i.ibb.co/4g19h9ff/Untitled-design-4.png",
      liveUrl: "https://future-fit-ai-buddy-81.vercel.app/",
      githubUrl: "https://github.com/pentashi/future-fit-ai-buddy-81/",
      isReverseLayout: true,
      emoji: "💪"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              features={project.features}
              tags={project.tags}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              emoji={project.emoji}
              isReverseLayout={project.isReverseLayout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;