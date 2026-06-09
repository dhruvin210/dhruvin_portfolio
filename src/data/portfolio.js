export const profile = {
  name: "Dhruvin Malot",
  role: "Full Stack Developer | AI Engineer",
  tagline:
    "Full Stack Developer (MERN · TypeScript · REST APIs) with 3 production internships — shipping Node.js/Express backends, optimising MySQL schemas, and integrating AI into platforms serving real users.",
  heading: "Full Stack Developer & AI Builder",
  badge: "Open to internships and full-time roles",
  email: "dhruvinmalot.official21@gmail.com",
  phone: "+91 9166282927",
  location: "Pune, India",
  resumePath: `${import.meta.env.BASE_URL}Dhruvin_Malot_Resume.pdf`,
  university: "MIT World Peace University",
  degree: "B.Tech in Computer Engineering",
  educationRange: "2022 – May 2026 (expected)",
  socials: {
    linkedin: "https://www.linkedin.com/in/dhruvin-malot-00a5002b1",
    github: "https://github.com/dhruvin210",
    aurevia: "https://aurevia-x.vercel.app/"
  }
};

export const navItems = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "contact",    label: "Contact" }
];

export const stats = [
  { value: "3",   label: "Production Internships" },
  { value: "40%", label: "Faster API Retrieval" },
  { value: "94%", label: "AI Recognition Accuracy" }
];

export const featureCards = [
  {
    title: "Full Stack",
    description: "Production MERN apps with secure APIs, scalable schemas, and clean architecture.",
    accent: "from-fuchsia-500/20 to-purple-500/10"
  },
  {
    title: "AI & Vision",
    description: "Computer vision, AI-integrated platforms, and modular pipelines for real users.",
    accent: "from-indigo-500/20 to-cyan-500/10"
  },
  {
    title: "System Design",
    description: "Scalable system thinking, REST APIs, and relational schemas tuned for performance.",
    accent: "from-cyan-500/20 to-emerald-500/10"
  }
];

export const skills = {
  Languages: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["React.js", "Redux", "Node.js", "Express.js", "jQuery", "Tailwind CSS", "OpenCV"],
  Databases: ["MySQL", "MongoDB"],
  "Tools & Practices": ["Git", "REST APIs", "Docker (basic)", "Agile/Scrum", "System Design", "UX Design", "AI & Machine Learning", "Computer Vision"]
};

export const projects = [
  {
    slug: "aurevia",
    title: "Aurevia – AI Medical Research Copilot",
    category: "AI / Healthcare",
    description:
      "Production MERN platform aggregating 10,000+ PubMed, OpenAlex, and ClinicalTrials.gov entries into a real-time clinical evidence engine — cutting manual research lookup time by 60%.",
    image: "resume",
    featured: true,
    tags: ["MERN", "TypeScript", "REST APIs", "AI", "PubMed", "OpenAlex"],
    link: "https://aurevia-x.vercel.app/",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "nexawell",
    title: "NexaWell – AI Digital Health Platform",
    category: "AI / Healthcare",
    description:
      "Multi-role healthcare platform (patient · doctor · admin) with appointment scheduling, EHR management, real-time chat, and an AI symptom checker improving self-diagnosis accuracy by 40%.",
    image: "loyalty",
    tags: ["MERN", "Tailwind CSS", "AI", "RBAC"],
    link: "#",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "celebrity-face-recognition",
    title: "Celebrity Face Recognition System",
    category: "Computer Vision / AI",
    description:
      "~94% recognition accuracy across 50+ subjects using deep-learning facial embeddings with OpenCV; 30% faster inference via batch preprocessing.",
    image: "chat",
    tags: ["Python", "OpenCV", "Deep Learning", "face_recognition"],
    link: "#",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "company-website",
    title: "Full Stack Company Website",
    category: "Web Platform",
    description:
      "Production-grade company website with admin panel, product catalogue, and customer inquiry management secured via JWT auth — reducing admin overhead by 25%.",
    image: "royalty",
    tags: ["MERN", "JWT", "REST APIs", "Admin Panel"],
    link: "#",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "appointment-booking",
    title: "Appointment Booking System",
    category: "Backend / APIs",
    description:
      "Backend services handling 500+ concurrent booking records, 35% faster queries via MySQL schema redesign, and zero QA vulnerabilities after input-validation hardening.",
    image: "sms",
    tags: ["Node.js", "Express.js", "MySQL", "jQuery"],
    link: "#",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Personal Brand",
    description:
      "This futuristic portfolio with Three.js particle background, glassmorphism, neon gradients, and Framer Motion animations.",
    image: "portfolio",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
    link: "#",
    github: "https://github.com/dhruvin210"
  }
];

export const services = [
  {
    title: "Full Stack Development",
    icon: "dev",
    accent: "from-indigo-500 to-cyan-500",
    description: "Production MERN apps with secure auth, REST APIs, and clean architecture.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JWT Auth"]
  },
  {
    title: "AI & Computer Vision",
    icon: "ai",
    accent: "from-cyan-500 to-emerald-500",
    description: "AI-integrated platforms, real-time vision systems, and modular ML pipelines.",
    skills: ["OpenCV", "Deep Learning", "AI Integrations", "Face Recognition", "Health AI"]
  },
  {
    title: "UI / UX & System Design",
    icon: "design",
    accent: "from-fuchsia-500 to-purple-500",
    description: "Responsive interfaces and scalable system architecture for real products.",
    skills: ["Responsive UI", "Tailwind CSS", "TypeScript", "Redux", "REST Design", "Schema Design"]
  }
];

export const experiences = [
  {
    company: "Intersect Creative",
    role: "Web Developer Intern (Contract)",
    duration: "Jul 2025 – Dec 2025",
    initials: "IC",
    bullets: [
      "Reduced booking-system error rate to zero during QA by architecting input-validation and security-hardening layers across a Node.js / Express.js backend handling 500+ concurrent booking records.",
      "Improved database query throughput by 35% by redesigning relational MySQL schemas and indexing strategies, cutting average response time for high-traffic booking lookups.",
      "Shipped a responsive, accessible front-end with sub-200ms real-time UI feedback using JavaScript and jQuery, reducing user-reported friction in the appointment scheduling flow.",
      "Contributed to Agile sprint planning and daily stand-ups, aligning backend delivery milestones with cross-functional design and QA teams."
    ],
    tags: ["Node.js", "Express.js", "MySQL", "jQuery", "Agile"]
  },
  {
    company: "STL Digital Limited",
    role: "IT & Technology Intern (Contract)",
    duration: "Feb 2025 – Jun 2025",
    initials: "STL",
    bullets: [
      "Accelerated project delivery workflows by mapping end-to-end IT pipeline bottlenecks and presenting a prioritised remediation plan to senior leadership, adopted across 2 active sprint cycles.",
      "Authored structured technical reports for C-suite stakeholders, translating system-analysis findings into actionable delivery recommendations — maintaining zero misalignment between engineering output and strategic OKRs.",
      "Supported real-time technology service operations across live infrastructure projects, collaborating with the Technology Services team to keep sprint velocity on track."
    ],
    tags: ["System Analysis", "IT Operations", "Technical Reporting", "Strategy"]
  },
  {
    company: "Netsol IT Solutions Pvt. Ltd.",
    role: "Web Developer Intern (Contract)",
    duration: "Jun 2024 – Jan 2025",
    initials: "NS",
    bullets: [
      "Cut API response latency by 40% by architecting RESTful endpoints with Node.js / Express.js and redesigning the MySQL schema with optimised indexing — directly improving data retrieval speed for the appointment booking module.",
      "Hardened both admin and client modules against injection and auth vulnerabilities, reducing post-launch security issues to zero across the full deployment.",
      "Shipped dynamic, responsive UIs with sub-200ms real-time feedback loops using JavaScript and jQuery, improving end-user task-completion rates across the platform."
    ],
    tags: ["Node.js", "Express.js", "REST APIs", "MySQL", "Security"]
  }
];

export const certifications = [
  {
    title: "Walmart USA – Advanced Software Engineering",
    issuer: "Forage",
    summary:
      "Designed system architecture and UML/ERD diagrams for a scalable data-processing pipeline; built a custom heap data structure in Java.",
    link: "https://www.theforage.com/"
  },
  {
    title: "Skyscanner – Front-End Software Engineering",
    issuer: "Forage",
    summary:
      "Built and validated a front-end date-selection component against automated test suites using Skyscanner's Backpack React library.",
    link: "https://www.theforage.com/"
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage",
    summary:
      "Proposed design and architecture for an interactive business dashboard; completed a software development simulation for C-suite deliverables.",
    link: "https://www.theforage.com/"
  }
];

export const caseStudies = {
  aurevia: {
    slug: "aurevia",
    title: "Aurevia",
    subtitle: "AI medical research copilot for evidence-based clinical insight",
    liveUrl: "https://aurevia-x.vercel.app/",
    overview:
      "Aurevia is a production MERN platform that aggregates 10,000+ PubMed, OpenAlex, and ClinicalTrials.gov entries into a real-time clinical evidence engine — cutting estimated manual research lookup time by 60% for target users. Live at https://aurevia-x.vercel.app/.",
    challenge:
      "Researchers were drowning in fragmented sources. PubMed, OpenAlex, and ClinicalTrials.gov each told a partial story, and synthesizing them into actionable insight required hours of manual review.",
    solution:
      "I engineered a modular Node.js/Express backend pipeline that ingests and ranks data from all three sources, paired with a responsive React dashboard featuring authentication, session memory, and what-if scenario analysis.",
    features: [
      "Cross-source evidence ranking across PubMed, OpenAlex, and ClinicalTrials.gov",
      "Session memory that preserves ongoing research reasoning",
      "What-if scenario analysis for treatment risk and outcomes",
      "Authentication and protected research workspaces",
      "Clean React dashboard tuned for fast iteration"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "REST APIs", "PubMed API"],
    results: [
      { value: "10K+", label: "PubMed entries indexed" },
      { value: "3",    label: "Research APIs integrated" },
      { value: "-60%", label: "Manual research lookup time" }
    ]
  },
  nexawell: {
    slug: "nexawell",
    title: "NexaWell",
    subtitle: "An AI-powered digital health platform for patients, doctors, and admins",
    overview:
      "NexaWell is a full-featured healthcare platform with role-based dashboards, appointment scheduling, EHR management, and real-time chat across three user roles — patient, doctor, and admin.",
    challenge:
      "Patients lacked an intuitive way to self-assess symptoms, and clinic operations were fragmented across booking, records, and communication tools.",
    solution:
      "I built a unified MERN platform combining RBAC, real-time messaging, and AI features — a symptom checker, food detection, and a health assistant chatbot — all within one polished UI.",
    features: [
      "Role-based dashboards for patients, doctors, and admins",
      "Appointment scheduling and medical records management",
      "Real-time chat across all three roles",
      "AI-powered symptom checker and food detection",
      "Health assistant chatbot improving self-diagnosis accuracy by 40%"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "AI", "Tailwind CSS"],
    results: [
      { value: "+40%", label: "Self-diagnosis accuracy" },
      { value: "3",    label: "User roles supported" },
      { value: "Real-time", label: "Chat across roles" }
    ]
  },
  "celebrity-face-recognition": {
    slug: "celebrity-face-recognition",
    title: "Celebrity Face Recognition",
    subtitle: "Real-time computer vision system identifying 50+ celebrity faces",
    overview:
      "A real-time face detection and recognition system capable of identifying 50+ celebrity faces with ~94% accuracy using OpenCV and deep learning-based facial embeddings.",
    challenge:
      "Recognition pipelines often trade accuracy for latency. The goal was to keep both: ~94% accuracy with smooth real-time webcam performance and clean visual feedback.",
    solution:
      "I built an embedding-based recognition pipeline with batch preprocessing, paired with live webcam integration that overlays bounding boxes and name annotations.",
    features: [
      "Real-time webcam integration with bounding box overlays",
      "Name annotation for recognized subjects",
      "Embedding-based deep learning recognition model",
      "Batch preprocessing reducing inference latency by 30%",
      "Tunable threshold for precision-recall trade-offs"
    ],
    stack: ["Python", "OpenCV", "Deep Learning", "face_recognition"],
    results: [
      { value: "~94%", label: "Recognition accuracy" },
      { value: "50+",  label: "Celebrities supported" },
      { value: "-30%", label: "Inference latency" }
    ]
  },
  "company-website": {
    slug: "company-website",
    title: "Full Stack Company Website",
    subtitle: "Production-grade company site with admin panel and inquiries",
    overview:
      "A production-grade company website with an admin panel, product catalogue, and customer inquiry management system, secured with JWT-based authentication.",
    challenge:
      "The client needed a single platform to manage products and customer inquiries without spreadsheets, while keeping admin operations secure.",
    solution:
      "I shipped a MERN site with JWT auth, scalable product workflows, and an admin dashboard that reduced operational overhead by 25%.",
    features: [
      "Secure JWT-based authentication for admins",
      "Product catalogue with full CRUD workflows",
      "Customer inquiry management",
      "Scalable REST API design",
      "Responsive front-end with clean component structure"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "REST APIs"],
    results: [
      { value: "-25%", label: "Admin overhead" },
      { value: "100%", label: "JWT-secured routes" },
      { value: "Scalable", label: "Product workflows" }
    ]
  },
  "appointment-booking": {
    slug: "appointment-booking",
    title: "Appointment Booking System",
    subtitle: "Backend platform handling 500+ concurrent booking records",
    overview:
      "Backend services for an Appointment Booking System with REST APIs and a MySQL schema tuned for high concurrency and fast retrieval — built across two production internships.",
    challenge:
      "The platform needed to handle hundreds of simultaneous bookings without query slowdowns or security gaps.",
    solution:
      "I built REST APIs with Node.js and Express, redesigned the MySQL schema for 35% faster queries, and added input validation plus security hardening that brought vulnerabilities to zero.",
    features: [
      "REST APIs with Node.js and Express.js",
      "MySQL schema redesigned for concurrent booking writes",
      "Input validation and security hardening",
      "Responsive UI with sub-200ms feedback using JavaScript and jQuery",
      "QA-tested with zero reported vulnerabilities"
    ],
    stack: ["Node.js", "Express.js", "MySQL", "REST APIs", "jQuery"],
    results: [
      { value: "500+", label: "Concurrent records" },
      { value: "+35%", label: "Faster queries" },
      { value: "0",    label: "Reported vulnerabilities" }
    ]
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Futuristic portfolio with Three.js particle background and glassmorphism",
    overview:
      "This portfolio — a React + Vite app with a Three.js particle field background, Framer Motion animation, Tailwind CSS, and a glassmorphism design language.",
    challenge:
      "Build a portfolio that genuinely stands out: interactive 3D background, smooth animations, accessible, and fast across devices.",
    solution:
      "I built a futuristic UI with neon purple, indigo, and cyan gradients, a raw Three.js particle field, and a polished motion design system tuned for performance.",
    features: [
      "Three.js particle field background with mouse parallax",
      "Glassmorphism cards with gradient borders and neon glow",
      "Framer Motion scroll-reveal and section animations",
      "Responsive, mobile-first layouts across all sections",
      "Case study route for deep project storytelling"
    ],
    stack: ["React", "Vite", "Three.js", "Framer Motion", "Tailwind CSS"],
    results: [
      { value: "3000", label: "Animated particles" },
      { value: "Smooth", label: "60fps animations" },
      { value: "Responsive", label: "Across all devices" }
    ]
  }
};
