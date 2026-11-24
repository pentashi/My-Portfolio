export interface Screenshot {
  src: string;
  alt: string;
  label: string;
  url?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  sector: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image: Screenshot;
  imageFit?: 'cover' | 'contain';
  liveUrl?: string;
  liveLabel?: string;
  codeUrl?: string;
  codeNote?: string;
}

export const autoPartner = {
  client: 'AutoPartner Gabon',
  title: 'Fleet, rent-to-own and GPS tracking platform',
  sector: 'Mobility · Fleet management',
  location: 'Libreville, Gabon',
  role: 'Design, build and operations',
  liveUrl: 'https://autopartner-admin.vercel.app',
  summary:
    'AutoPartner rents vehicles to professional drivers in Libreville on rent-to-own contracts. The platform runs the whole business: contracts and payment schedules, live GPS tracking of every car, tracker rental to outside clients, and an online spare-parts shop.',
  challenge:
    'Drivers pay daily, weekly or monthly, and every car is a large unsecured asset. The business needed to know where each vehicle is, chase late payments without manual follow-up, and stop a car safely when a contract defaults.',
  outcomes: [
    {
      title: 'Own tracking server',
      body: 'GT06 trackers report to a self-hosted Traccar server on AWS. A signed webhook stores each position with speed, ignition, satellites, battery and GSM signal.',
    },
    {
      title: 'Live fleet map',
      body: 'Every vehicle on one map with heading, state and its duration ("parked 2 h"), the last 30 minutes of trail, route replay and stop detection.',
    },
    {
      title: 'Safe remote immobilization',
      body: 'Engine cut-off is only sent while the vehicle is parked, counts as done only when the tracker acknowledges it, and every command is audit-logged.',
    },
    {
      title: 'Late-payment enforcement',
      body: 'Daily, weekly and monthly schedules. Overdue contracts escalate automatically, and the car is released automatically once payment arrives.',
    },
    {
      title: 'Tracker rental',
      body: 'Client accounts that only see their own vehicles, monthly invoices, and automatic suspension when unpaid.',
    },
    {
      title: 'Parts shop',
      body: 'Public catalogue, cart and orders, stock reserved on confirmation, and a discount for tracking clients.',
    },
  ],
  stack: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Next.js', 'React Query', 'Leaflet', 'Traccar', 'AWS', 'Render', 'Vercel'],
  screenshots: [
    {
      src: '/work/autopartner-home.webp',
      alt: 'AutoPartner Gabon public website hero: become the owner of your work vehicle',
      label: 'Public site',
      url: 'autopartner-admin.vercel.app',
    },
    {
      src: '/work/autopartner-dashboard.webp',
      alt: 'AutoPartner operations dashboard with fleet, drivers, revenue collected and recovery rate',
      label: 'Operations dashboard',
      url: 'autopartner-admin.vercel.app/dashboard',
    },
    {
      src: '/work/autopartner-gps.webp',
      alt: 'AutoPartner GPS tracking offer: live position, trip history, alerts and remote engine cut-off',
      label: 'GPS tracking',
      url: 'autopartner-admin.vercel.app/#suivi-gps',
    },
    {
      src: '/work/autopartner-fleet.webp',
      alt: 'AutoPartner rent-to-own vehicle catalogue with monthly prices in FCFA',
      label: 'Rent-to-own fleet',
      url: 'autopartner-admin.vercel.app/#vehicules',
    },
    {
      src: '/work/autopartner-parts.webp',
      alt: 'AutoPartner spare-parts shop with categories, stock levels and prices in FCFA',
      label: 'Parts shop',
      url: 'autopartner-admin.vercel.app/pieces',
    },
  ] as Screenshot[],
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'cargolink',
    client: 'CargoLink · AMSIT',
    title: 'Cross-border shipping platform, China to Cameroon and Gabon',
    sector: 'Logistics',
    role: 'One of three backend engineers · wrote the initial API',
    summary:
      'Customers, businesses, drivers and support agents ship goods by air or sea, or place "buy for me" orders. A mobile app is about to launch on the Play Store.',
    highlights: [
      '261 REST endpoints, 35 data models and 7 user roles',
      'argon2 passwords, encrypted one-time codes in Redis and TOTP two-factor login',
      'Real-time notifications over Socket.IO, email (SMTP) and SMS (Twilio)',
      'SafeCube and Freightos sync sea-container positions into shipment timelines',
      'Mobile-money payments: MTN, Orange, Airtel, Moov',
      'Production incident: rebuilt a hijacked, internet-exposed Redis as internal-only and locked down the firewall',
    ],
    stack: ['NestJS', 'TypeScript', 'Prisma', 'MongoDB', 'Redis', 'Socket.IO', 'Twilio', 'Docker', 'nginx'],
    image: {
      src: '/work/cargolink-swagger.webp',
      alt: 'CargoLink API documentation in Swagger UI showing the auth endpoints',
      label: 'Live API docs',
      url: 'cargolinkapi.amsit.co/swagger',
    },
    liveUrl: 'https://cargolinkapi.amsit.co/swagger',
    liveLabel: 'Live API docs',
    codeNote: 'Code private (client)',
  },
  {
    id: 'nannylink',
    client: 'NannyLink',
    title: 'Global nanny marketplace, designed, built and launched solo',
    sector: 'Marketplace · Payments',
    role: 'Founder and sole engineer',
    summary:
      'Families pay once to unlock a vetted nanny\'s contact details or to book concierge matching. An admin team reviews every profile before it goes live.',
    highlights: [
      'Postgres Row Level Security: contact data reaches only families who paid, were matched or were granted access',
      'Stripe and PayPal behind one checkout API, with signed webhooks and repeat-safe fulfillment',
      'Correct amounts in zero-, two- and three-decimal currencies',
      'End-to-end and security test suites run in GitHub Actions on every PR',
      'Status emails via database triggers and an Edge Function, with a retry queue on pg_cron',
    ],
    stack: ['TypeScript', 'React', 'TanStack Start', 'Supabase', 'PostgreSQL', 'Stripe', 'PayPal', 'Cloudflare Workers'],
    image: {
      src: '/work/nannylink.webp',
      alt: 'NannyLink homepage: the nanny your family deserves',
      label: 'Live site',
      url: 'joinnannylink.com',
    },
    liveUrl: 'https://joinnannylink.com',
    liveLabel: 'Visit joinnannylink.com',
    codeNote: 'Code private, walkthrough on request',
  },
  {
    id: 'receiptvault',
    client: 'ReceiptVault',
    title: 'VAT-ready receipts for UAE businesses',
    sector: 'Fintech · UAE VAT',
    role: 'Product and engineering',
    summary:
      'Staff photograph receipts. ReceiptVault reads the supplier, TRN, 5% VAT and total, flags VAT that can\'t be recovered, and hands the accountant a CSV for the quarterly VAT 201 return.',
    highlights: [
      'Google Cloud Document AI extracts receipt fields; foreign currencies are converted to AED',
      'Owner, accountant and staff roles, so one accountant can manage many client companies',
      'VAT quarter view with VAT 201 box 9 figures and a pre-filing checklist',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'React', 'TypeScript', 'Document AI', 'Cloud Run', 'Docker'],
    image: {
      src: '/work/receiptvault.webp',
      alt: 'ReceiptVault dashboard showing total spent, forecast, receipts and VAT paid in AED',
      label: 'Dashboard',
    },
    imageFit: 'contain',
    codeUrl: 'https://github.com/pentashi/Receipt-vault',
  },
  {
    id: 'cemac',
    client: 'CEMAC Accounting',
    title: 'Modular accounting API for CEMAC/OHADA markets',
    sector: 'Accounting · Central Africa',
    role: 'Backend engineering (client project)',
    summary:
      'An accounting backend covering invoices, partners, accounting entries, reporting and audit logs for businesses in the CEMAC zone.',
    highlights: [
      'JWT auth with role-based access, plus OTP codes stored in Redis',
      'Audit logging across every module',
      'PDF, Excel and CSV export and import',
    ],
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'Swagger', 'Jest'],
    image: {
      src: '/work/cemac-swagger.webp',
      alt: 'CEMAC Accounting API documentation in Swagger UI',
      label: 'API docs',
    },
    codeUrl: 'https://github.com/pentashi/cemac-accounting-backend',
  },
];
