export const profile = {
  name: "Dhruvin Malot",
  role: "Full Stack Developer",
  headline: "Full Stack Developer building modern web applications, scalable APIs, e-commerce platforms, and AI-powered products.",
  currentRole: "Trainee – Web/App Development",
  currentCompany: "NextDynamix Tech Pvt. Ltd.",
  badge: "Available for Full Stack Opportunities",
  email: "dhruvinmalot.official21@gmail.com",
  phone: "+91 9166282927",
  location: "Pune, India",
  resumePath: `${import.meta.env.BASE_URL}Dhruvin_Malot_Resume.pdf`,
  university: "MIT World Peace University",
  degree: "B.Tech in Computer Engineering",
  educationRange: "MIT World Peace University · Pune, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/dhruvin-malot",
    github: "https://github.com/dhruvin210",
    email: "mailto:dhruvinmalot.official21@gmail.com",
    aureviaLive: "https://aurevia-x.vercel.app/"
  }
};

export const navItems = [
  { id: "what-i-build", label: "Builds" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack-dna", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const heroBadges = [
  "TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MySQL",
  "Prisma ORM",
  "Docker",
  "AI Integration"
];

export const aboutHighlights = [
  {
    title: "Frontend Engineering",
    category: "01 — Frontend",
    description: "Building responsive, accessible web interfaces using React, Next.js, TypeScript, and modern component systems with sub-200ms real-time feedback loops."
  },
  {
    title: "Backend & Scalable APIs",
    category: "02 — Backend",
    description: "Architecting RESTful endpoints, service layers, JWT authentication, and RBAC with Node.js, Express, and FastAPI."
  },
  {
    title: "Data & Schema Architecture",
    category: "03 — Databases",
    description: "Relational database design, query optimization, indexing strategies, and ORM modeling with PostgreSQL, MySQL, MongoDB, and Prisma."
  },
  {
    title: "E-Commerce & Headless Platforms",
    category: "04 — Platforms",
    description: "Developing custom e-commerce workflows and headless content architecture using Medusa.js, Strapi CMS, and third-party integrations."
  },
  {
    title: "DevOps & Workflows",
    category: "05 — Workflows",
    description: "Containerization with Docker, CI/CD automated workflows with GitHub Actions, Linux administration, and Agile sprint collaboration."
  },
  {
    title: "AI Integration & Computer Vision",
    category: "06 — AI & Vision",
    description: "Integrating ML models, external research APIs, symptom analysis, and deep-learning facial embeddings with OpenCV."
  }
];

export const skillCategories = [
  {
    id: "01",
    name: "Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    id: "02",
    name: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "jQuery"]
  },
  {
    id: "03",
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
  },
  {
    id: "04",
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    id: "05",
    name: "CMS / Commerce",
    skills: ["Strapi", "Medusa.js"]
  },
  {
    id: "06",
    name: "Tools / DevOps",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux"]
  },
  {
    id: "07",
    name: "AI / Computer Vision",
    skills: ["AI/ML", "OpenCV", "Computer Vision"]
  }
];

export const experiences = [
  {
    company: "NextDynamix Tech Pvt. Ltd.",
    role: "Trainee – Web/App Development",
    period: "Jun 2026 – Present",
    tag: "Paid Training Program",
    summary:
      "Developing and maintaining full-stack web applications using TypeScript, React/Next.js, Node.js, Express.js, FastAPI, and REST APIs across production-oriented projects.",
    bullets: [
      "Contributing to the development of the KUDLZ pet-commerce platform across storefront, backend APIs, Medusa, Strapi CMS, authentication, product catalogue, payments, and third-party integrations.",
      "Implementing scalable backend features using TypeScript, Prisma, SQL, JWT authentication, RBAC, API validation, and reusable service architecture.",
      "Working with Docker, Git/GitHub, GitHub Actions, Linux, PostgreSQL/MySQL, and modern frontend component libraries to support development and deployment workflows.",
      "Collaborating with senior developers, QA, and cross-functional teams to debug issues, perform UAT, review existing code, and deliver production-ready features."
    ],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Prisma",
      "SQL",
      "Medusa.js",
      "Strapi",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    company: "Intersect Creative",
    role: "Web Developer Intern (Contract)",
    period: "Jul 2025 – Dec 2025",
    tag: "Fixed-term",
    summary:
      "Engineered backend validation, optimized relational database query throughput, and delivered responsive user interfaces for appointment workflows.",
    bullets: [
      "Reduced booking-system error rate to zero during QA by architecting input-validation and security-hardening layers across a Node.js / Express.js backend handling 500+ concurrent booking records.",
      "Improved database query throughput by 35% by redesigning relational MySQL schemas and indexing strategies, cutting average response time for high-traffic booking lookups.",
      "Shipped a responsive, accessible front-end with sub-200ms real-time UI feedback using JavaScript and jQuery, reducing user-reported friction in the appointment scheduling flow.",
      "Contributed to Agile sprint planning and daily stand-ups, aligning backend delivery milestones with cross-functional design and QA teams."
    ],
    tech: ["Node.js", "Express.js", "MySQL", "JavaScript", "jQuery", "Agile/Scrum"]
  },
  {
    company: "STL Digital Limited",
    role: "IT & Technology Intern (Contract)",
    period: "Feb 2025 – Jun 2025",
    tag: "Fixed-term",
    summary:
      "Analyzed IT delivery pipeline bottlenecks and translated system analysis findings into structured technical recommendations for leadership.",
    bullets: [
      "Accelerated project delivery workflows by mapping end-to-end IT pipeline bottlenecks and presenting a prioritised remediation plan to senior leadership, adopted across 2 active sprint cycles.",
      "Authored structured technical reports for C-suite stakeholders, translating system-analysis findings into actionable delivery recommendations — maintaining zero misalignment between engineering output and strategic OKRs.",
      "Supported real-time technology service operations across live infrastructure projects, collaborating with the Technology Services team to keep sprint velocity on track."
    ],
    tech: ["System Analysis", "IT Operations", "Technical Documentation", "Workflow Optimization"]
  },
  {
    company: "Netsol IT Solutions Pvt. Ltd.",
    role: "Web Developer Intern (Contract)",
    period: "Jun 2024 – Jan 2025",
    tag: "Fixed-term",
    summary:
      "Architected RESTful endpoints, optimized relational indexing, and hardened authentication and administrative modules.",
    bullets: [
      "Cut API response latency by 40% by architecting RESTful endpoints with Node.js / Express.js and redesigning the MySQL schema with optimised indexing — directly improving data retrieval speed for the appointment booking module.",
      "Hardened both admin and client modules against injection and auth vulnerabilities, reducing post-launch security issues to zero across the full deployment.",
      "Shipped dynamic, responsive UIs with sub-200ms real-time feedback loops using JavaScript and jQuery, improving end-user task-completion rates across the platform."
    ],
    tech: ["Node.js", "Express.js", "REST APIs", "MySQL", "JavaScript", "Security Hardening"]
  }
];

export const featuredProject = {
  slug: "aurevia",
  title: "Aurevia",
  subtitle: "AI Medical Research Copilot",
  category: "Featured Full Stack & AI Platform",
  summary:
    "Engineered a production MERN platform that aggregates 10,000+ PubMed, OpenAlex, and ClinicalTrials.gov entries into a real-time clinical evidence engine — cutting estimated manual research lookup time by 60% for target users.",
  stack: ["MERN Stack", "TypeScript", "REST APIs", "AI", "Node.js", "Express.js", "React"],
  liveUrl: "https://aurevia-x.vercel.app/",
  githubUrl: "https://github.com/dhruvin210",
  highlights: [
    "Aggregates 10,000+ clinical entries from PubMed, OpenAlex, and ClinicalTrials.gov",
    "Modular Node.js/Express backend pipeline with integrated session memory and authentication",
    "Responsive React dashboards supporting what-if clinical scenario analysis",
    "Cuts estimated manual research lookup time by 60% for target researchers"
  ],
  metrics: [
    { label: "Research Entries Indexed", value: "10,000+" },
    { label: "External Research APIs", value: "3" },
    { label: "Manual Lookup Time Reduction", value: "60%" }
  ]
};

export const secondaryProjects = [
  {
    slug: "nexawell",
    title: "NexaWell",
    subtitle: "AI Digital Health Platform",
    category: "Full Stack Healthcare",
    description:
      "Architected a multi-role healthcare platform (patient · doctor · admin) serving appointment scheduling, EHR management, and real-time chat — integrated an AI symptom checker that improved self-diagnosis accuracy by 40%.",
    stack: ["MERN Stack", "Tailwind CSS", "AI", "RBAC", "Node.js", "React"],
    bullets: [
      "Multi-role architecture with secure role-based access control (patient, doctor, admin)",
      "Integrated appointment scheduling, electronic health records (EHR), and real-time chat",
      "Embedded AI-powered food detection and health assistant chatbot extending clinical utility into preventive care"
    ],
    githubUrl: "https://github.com/dhruvin210",
    liveUrl: null
  },
  {
    slug: "company-website",
    title: "Full Stack Company Website",
    subtitle: "Production Web Platform & Admin Panel",
    category: "Web Platform & Management",
    description:
      "Delivered a production-grade company website with admin panel, product catalogue, and customer inquiry management — secured via JWT-based authentication, reducing admin overhead by 25%.",
    stack: ["MERN Stack", "REST APIs", "JWT Auth", "Express.js", "React"],
    bullets: [
      "Production-grade administration dashboard with complete product catalogue CRUD workflows",
      "Secured administrative and client endpoints via JWT authentication",
      "Customer inquiry management system reducing operational admin overhead by 25%"
    ],
    githubUrl: "https://github.com/dhruvin210",
    liveUrl: null
  },
  {
    slug: "celebrity-face-recognition",
    title: "Celebrity Face Recognition System",
    subtitle: "Computer Vision & Deep Learning Pipeline",
    category: "Computer Vision / AI",
    description:
      "Achieved ~94% recognition accuracy across 50+ subjects by training deep-learning facial embeddings with OpenCV, with live webcam integration, bounding-box overlay, and name annotation.",
    stack: ["Python", "OpenCV", "Deep Learning", "Facial Embeddings"],
    bullets: [
      "Trained deep-learning facial embeddings achieving ~94% recognition accuracy across 50+ subjects",
      "Real-time webcam pipeline with bounding-box overlay and dynamic name annotation",
      "Reduced average inference latency by 30% through batch preprocessing of the encoding pipeline"
    ],
    githubUrl: "https://github.com/dhruvin210",
    liveUrl: null
  }
];

export const allProjects = [featuredProject, ...secondaryProjects];

export const education = {
  institution: "MIT World Peace University",
  location: "Pune, India",
  degree: "B.Tech in Computer Engineering",
  description:
    "Rigorous curriculum in computer engineering covering algorithms, data structures, system design, operating systems, database management, computer vision, and modern full-stack application development."
};

export const certifications = [
  {
    title: "Walmart Advanced Software Engineering",
    issuer: "Forage",
    description:
      "Designed system architecture and UML/ERD diagrams for a scalable data-processing pipeline; developed a custom heap data structure in Java."
  },
  {
    title: "Skyscanner Front-End Engineering",
    issuer: "Forage",
    description:
      "Built and validated a front-end date-selection component against automated test suites using Skyscanner's Backpack React library."
  },
  {
    title: "Deloitte Technology Simulation",
    issuer: "Forage",
    description:
      "Proposed design and architecture for an interactive business dashboard and completed a software development simulation for C-suite deliverables."
  }
];

export const caseStudies = {
  aurevia: {
    slug: "aurevia",
    title: "Aurevia",
    subtitle: "AI Medical Research Copilot for Evidence-Based Clinical Insight",
    liveUrl: "https://aurevia-x.vercel.app/",
    githubUrl: "https://github.com/dhruvin210",
    overview:
      "Aurevia is a production MERN platform that aggregates 10,000+ PubMed, OpenAlex, and ClinicalTrials.gov entries into a real-time clinical evidence engine — cutting estimated manual research lookup time by 60% for target users.",
    challenge:
      "Medical researchers and clinical practitioners spend hours manually cross-referencing fragmented data across disparate clinical repositories like PubMed, OpenAlex, and ClinicalTrials.gov.",
    solution:
      "Engineered an aggregated ingestion pipeline and modular Node.js/Express service architecture with session memory, protected workspaces, and responsive React dashboards supporting what-if clinical scenario analysis.",
    features: [
      "Real-time clinical evidence engine indexing 10,000+ research entries",
      "Multi-source aggregation across PubMed, OpenAlex, and ClinicalTrials.gov",
      "Modular Node.js / Express backend with session memory and token-based authentication",
      "Interactive React dashboard with what-if clinical scenario analysis"
    ],
    stack: ["MERN Stack", "TypeScript", "REST APIs", "Node.js", "Express.js", "React", "PubMed API"],
    results: [
      { value: "10,000+", label: "Research Entries Indexed" },
      { value: "3", label: "External Clinical APIs" },
      { value: "60%", label: "Lookup Time Saved" }
    ]
  },
  nexawell: {
    slug: "nexawell",
    title: "NexaWell",
    subtitle: "AI-Powered Digital Health Platform",
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    overview:
      "NexaWell is a multi-role healthcare platform built on the MERN stack with role-based access control for patients, doctors, and administrators, incorporating clinical scheduling and AI assistance.",
    challenge:
      "Fragmented communication between patients and clinical staff creates scheduling overhead and delays preliminary triage.",
    solution:
      "Architected a centralized platform pairing appointment scheduling, electronic health records (EHR), and real-time chat with an AI symptom checker improving self-diagnosis accuracy by 40%.",
    features: [
      "Role-based access control (RBAC) supporting patients, doctors, and administrators",
      "Appointment scheduling and electronic health records (EHR) management",
      "Real-time chat communication channel across clinical roles",
      "Integrated AI symptom checker, food detection, and health assistant chatbot"
    ],
    stack: ["MERN Stack", "Tailwind CSS", "AI Integration", "Express.js", "React"],
    results: [
      { value: "40%", label: "Improved Self-Diagnosis Accuracy" },
      { value: "3", label: "Dedicated Role Workspaces" },
      { value: "Real-time", label: "Clinical Messaging" }
    ]
  },
  "company-website": {
    slug: "company-website",
    title: "Full Stack Company Website",
    subtitle: "Production-Grade Web Platform with Administration Panel",
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    overview:
      "Delivered a production-grade company website with an administrative panel, product catalogue, and customer inquiry management secured via JWT-based authentication.",
    challenge:
      "Operations required a reliable, secure portal to handle customer inquiries and dynamic product catalogues without relying on manual back-office tools.",
    solution:
      "Built a secure MERN web platform featuring role-authenticated REST endpoints, structured product management workflows, and an inquiry pipeline.",
    features: [
      "Full product catalogue management with administrative CRUD capabilities",
      "Inquiry ingestion and tracking pipeline for customer requests",
      "JWT-secured administrative authentication",
      "Clean, responsive interface with sub-200ms interaction response"
    ],
    stack: ["MERN Stack", "REST APIs", "JWT Authentication", "Node.js", "React"],
    results: [
      { value: "25%", label: "Reduction in Admin Overhead" },
      { value: "100%", label: "Secured Admin Endpoints" },
      { value: "CRUD", label: "Full Catalogue Control" }
    ]
  },
  "celebrity-face-recognition": {
    slug: "celebrity-face-recognition",
    title: "Celebrity Face Recognition System",
    subtitle: "Real-Time Computer Vision Pipeline with Deep Facial Embeddings",
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    overview:
      "Achieved ~94% recognition accuracy across 50+ subjects by training deep-learning facial embeddings with OpenCV, complete with live webcam integration and annotation.",
    challenge:
      "Balancing high accuracy with low inference latency during real-time video stream processing on resource-constrained hardware.",
    solution:
      "Developed an optimized encoding pipeline using batch preprocessing to accelerate feature extraction, reducing average inference latency by 30%.",
    features: [
      "Deep-learning facial embeddings trained on 50+ subjects",
      "Live webcam integration with bounding-box overlays and name labels",
      "Batch preprocessing optimization reducing inference latency by 30%",
      "Adjustable thresholding for false-positive prevention"
    ],
    stack: ["Python", "OpenCV", "Deep Learning", "Facial Embeddings"],
    results: [
      { value: "~94%", label: "Recognition Accuracy" },
      { value: "50+", label: "Subjects Classified" },
      { value: "30%", label: "Latency Reduction" }
    ]
  }
};
