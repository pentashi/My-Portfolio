import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "CargoLink — Logistics Backend & Real-Time Tracking API",
      description:
        "Production-grade backend system for a logistics platform supporting order management, real-time tracking, analytics, and secure role-based access.",
      features: [
        "Architected event-driven NestJS APIs managing 1,200+ real-time GPS state updates/minute with sub-second synchronization",
        "JWT authentication with role-based access control",
        "Real-time shipment updates and analytics for logistics operations",
        "Comprehensive API documentation using Swagger",
        "Secure, production-ready backend architecture"
      ],
      tags: ["NestJS", "PostgreSQL", "Socket.IO", "JWT", "Swagger", "TypeScript"],
      image: "https://i.ibb.co/spXh2HRg/cargolinkdoc.png",
      liveUrl: "https://amunir-backend-xmn0.onrender.com/swagger",
      githubUrl: "https://github.com/Cargo-Link/amunir-backend",
      isReverseLayout: true,
      emoji: "🚚"
    },
    {
      title: "AutoPartage Gabon — Enterprise Fleet Analytics Engine",
      description:
        "A multi-tenant fleet and rental management ecosystem engineered to process complex rent-to-own lifecycles. Built with an optimized UI state machine to prevent data race conditions and integrated with automated, serverless infrastructure health checks for continuous application uptime.",
      features: [
        "Interactive analytics dashboard managing real-time vehicle metrics and fleet utilization",
        "Asynchronous remote state architecture handling complex rent-to-own operational data rules",
        "PostgreSQL optimization achieving a 40% reduction in reporting latency",
        "Automated continuous integration and deployment profiles containerized via Cloud Run",
        "Custom external monitoring cron endpoints providing zero unnotified system pauses"
      ],
      tags: ["Next.js", "React", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "GCP", "Docker", "GitHub Actions"],
      image: "/autopartage.png",
      liveUrl: "https://autopartage-frontend-19378503105.europe-west1.run.app/",
      githubUrl: "https://github.com/pentashi/AutoPartage-Gabon-location-vente",
      isReverseLayout: false,
      emoji: "🚗"
    },
    {
      title: "CEMAC Accounting Backend",
      description:
        "A modular, production-grade backend for CEMAC-compliant accounting management, built with NestJS, TypeORM, and PostgreSQL. Designed for enterprise use, with a focus on security, auditability, and extensibility.",
      features: [
        "Secure JWT authentication with RBAC (admin/user roles)",
        "Modular architecture: invoices, partners, accounting, reporting, audit, notifications",
        "Comprehensive audit logging (login, CRUD, exports)",
        "Real-time report streaming and secure financial workflows",
        "Export/import for invoices, accounting entries, and partners (PDF, Excel, CSV)"
      ],
      tags: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "TypeScript"],
      image: "/cemac-accounting-swagger.png",
      liveUrl: "https://cemac-accounting-backend.onrender.com/api-docs",
      githubUrl: "https://github.com/pentashi/cemac-accounting-backend",
      isReverseLayout: true,
      emoji: "📊"
    },
    {
      title: "NannyLink — Caregiver Matching Platform",
      description:
        "Pay-per-unlock caregiver marketplace built for the UAE and global market. Parents pay once to unlock a verified caregiver's contact. Features Stripe webhook payment processing, dual-role JWT authentication (parent/caregiver), GCS signed-URL video uploads, and an automated admin verification queue.",
      features: [
        "Pay-per-unlock caregiver marketplace for UAE and global users",
        "Stripe webhook payment processing and verification workflows",
        "Dual-role JWT authentication for parents and caregivers",
        "GCS signed-URL video uploads and secure media handling",
        "Automated admin verification queue for caregiver approvals"
      ],
      tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "GCP"],
      githubUrl: "https://github.com/pentashi/nanny-link.git",
      isReverseLayout: false,
      emoji: "👶"
    },
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
              emoji={project.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;