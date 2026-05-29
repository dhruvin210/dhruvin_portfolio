export const profile = {
  name: "Dhruvin Malot",
  role: "Full Stack Developer | AI & ML",
  tagline:
    "Results-oriented Full Stack Developer crafting secure web platforms, RESTful APIs, and AI-integrated products.",
  heading: "Full Stack Developer & AI Builder",
  badge: "Open to internships and full-time roles",
  email: "dhruvinmalot.official21@gmail.com",
  phone: "+91 9166282927",
  location: "Pune, India",
  resumePath: "/resume-dhruvin-malot.pdf",
  university: "MIT World Peace University",
  degree: "B.Tech in Computer Engineering",
  educationRange: "2022 – Present",
  socials: {
    linkedin: "https://www.linkedin.com/in/dhruvin-malot-00a5002b1",
    github: "https://github.com/dhruvin210",
    aurevia: "https://aurevia-x.vercel.app/"
  }
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const stats = [
  { value: "3", label: "Internships" },
  { value: "10+", label: "Projects Shipped" },
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
  Languages: ["Java", "Python", "C/C++", "JavaScript", "HTML", "CSS"],
  "Frameworks & Libraries": ["React.js", "Redux", "Node.js", "Express.js", "jQuery", "Tailwind CSS", "OpenCV"],
  Databases: ["MySQL", "MongoDB"],
  "Tools & Concepts": ["Git", "REST API", "AI / ML", "Computer Vision", "System Design", "UX Design"]
};

export const projects = [
  {
    slug: "aurevia",
    title: "Aurevia – AI Medical Research Copilot",
    category: "AI / Healthcare",
    description:
      "AI-powered MERN platform for clinical query analysis, treatment risk evaluation, and evidence-based ranking across 10,000+ PubMed entries.",
    image: "resume",
    featured: true,
    tags: ["MERN", "AI", "PubMed", "OpenAlex", "ClinicalTrials"],
    link: "https://aurevia-x.vercel.app/",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "nexawell",
    title: "NexaWell – AI Digital Health Platform",
    category: "AI / Healthcare",
    description:
      "Healthcare platform with role-based dashboards, appointment scheduling, real-time chat, and AI-powered symptom checker.",
    image: "loyalty",
    tags: ["MERN", "AI", "Tailwind CSS", "RBAC"],
    link: "#",
    github: "https://github.com/dhruvin210"
  },
  {
    slug: "celebrity-face-recognition",
    title: "Celebrity Face Recognition System",
    category: "Computer Vision / AI",
    description:
      "Real-time face detection and recognition for 50+ celebrity faces with ~94% accuracy using OpenCV and deep facial embeddings.",
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
      "Production-grade company website with admin panel, product catalog, and customer inquiry management with secure JWT auth.",
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
      "Backend services with REST APIs handling 500+ concurrent records, 35% faster queries, and hardened input validation.",
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
      "This 3D futuristic portfolio with glassmorphism, neon gradients, Three.js scenes, and Framer Motion animations.",
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
    skills: ["Responsive UI", "Tailwind CSS", "Redux", "REST Design", "Schema Design"]
  }
];

export const experiences = [
  {
    company: "Intersect Creative",
    role: "Web Developer Intern",
    duration: "July 2025 – December 2025",
    initials: "IC",
    bullets: [
      "Built and optimized backend services for an Appointment Booking System using Node.js, Express.js, and MySQL, handling 500+ concurrent booking records.",
      "Designed relational database schemas improving query performance by 35%; developed responsive UI with JavaScript and jQuery.",
      "Implemented input validation and security hardening, reducing reported vulnerabilities to zero during QA testing."
    ],
    tags: ["Node.js", "Express.js", "MySQL", "jQuery"]
  },
  {
    company: "STL Digital Limited",
    role: "IT Intern",
    duration: "Feb 2025 – June 2025",
    initials: "STL",
    bullets: [
      "Collaborated with the Technology Services team to support real-time IT projects, performing system analysis to optimize delivery workflows.",
      "Reported project status and technical findings directly to leadership, maintaining alignment with strategic objectives."
    ],
    tags: ["System Analysis", "IT Operations", "Strategy"]
  },
  {
    company: "Netsol IT Solutions Pvt. Ltd.",
    role: "Web Developer Intern",
    duration: "June 2024 – Jan 2025",
    initials: "NS",
    bullets: [
      "Architected RESTful APIs with Node.js and Express for an Appointment Booking System; optimized MySQL schema for 40% faster data retrieval.",
      "Developed dynamic, responsive UI with real-time feedback using JavaScript and jQuery; enforced security measures across admin and client modules."
    ],
    tags: ["Node.js", "Express.js", "REST APIs", "MySQL"]
  }
];

export const certifications = [
  {
    title: "Walmart USA – Advanced Software Engineering",
    issuer: "Forage",
    summary:
      "Built a custom heap data structure in Java; designed UML diagrams and ERDs for scalable data processing systems.",
    link: "https://www.theforage.com/"
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage",
    summary:
      "Completed a software development simulation; proposed design and architecture for an interactive business dashboard.",
    link: "https://www.theforage.com/"
  },
  {
    title: "Skyscanner – Front-End Software Engineering",
    issuer: "Forage",
    summary:
      "Built a travel date selection UI using Skyscanner’s Backpack React library; executed automated frontend testing.",
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
      "Aurevia is my AI-powered MERN platform that helps clinicians and researchers explore medical literature with confidence. It supports clinical query analysis, treatment risk evaluation, and evidence-based ranking across 10,000+ PubMed entries, with cross-source synthesis from OpenAlex and ClinicalTrials.gov. Live at https://aurevia-x.vercel.app/.",
    challenge:
      "Researchers were drowning in fragmented sources. PubMed, OpenAlex, and ClinicalTrials.gov each told a partial story, and synthesizing them into actionable insight required hours of manual review.",
    solution:
      "I built a modular Node.js/Express backend pipeline that ingests and ranks data from all three sources, paired with a responsive React dashboard featuring authentication, session memory, and what-if scenario analysis.",
    features: [
      "Cross-source evidence ranking across PubMed, OpenAlex, and ClinicalTrials.gov",
      "Session memory that preserves ongoing research reasoning",
      "What-if scenario analysis for treatment risk and outcomes",
      "Authentication and protected research workspaces",
      "Clean React dashboard tuned for fast iteration"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "AI Integrations", "PubMed API"],
    results: [
      { value: "10K+", label: "PubMed entries indexed" },
      { value: "3", label: "Research APIs integrated" },
      { value: "Live", label: "Demo available" }
    ]
  },
  nexawell: {
    slug: "nexawell",
    title: "NexaWell",
    subtitle: "An AI-powered digital health platform for patients, doctors, and admins",
    overview:
      "NexaWell is a full-featured healthcare platform with role-based dashboards, appointment scheduling, medical records management, and real-time chat across three user roles.",
    challenge:
      "Patients lacked an intuitive way to self-assess symptoms, and clinic operations were fragmented across booking, records, and communication tools.",
    solution:
      "I built a unified MERN platform that combines RBAC, real-time messaging, and AI features like a symptom checker, food detection, and a health assistant chatbot — all within one polished UI.",
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
      { value: "3", label: "User roles supported" },
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
      "I built an embedding-based recognition pipeline with batch preprocessing, paired with live webcam integration that overlays bounding boxes and name annotations for recognized subjects.",
    features: [
      "Real-time webcam integration with bounding box overlays",
      "Name annotation for recognized subjects",
      "Embedding-based deep learning recognition model",
      "Batch preprocessing for faster inference",
      "Tunable threshold for precision-recall trade-offs"
    ],
    stack: ["Python", "OpenCV", "Deep Learning", "face_recognition"],
    results: [
      { value: "~94%", label: "Recognition accuracy" },
      { value: "50+", label: "Celebrities supported" },
      { value: "-30%", label: "Recognition latency" }
    ]
  },
  "company-website": {
    slug: "company-website",
    title: "Full Stack Company Website",
    subtitle: "Production-grade company site with admin panel and inquiries",
    overview:
      "A production-grade company website with an admin panel, product catalog, and customer inquiry management system, built with React.js and MongoDB.",
    challenge:
      "The client team needed a single platform to manage products and inquiries without juggling spreadsheets, while staying secure for admin operations.",
    solution:
      "I shipped a MERN site with secure JWT-based authentication, scalable product workflows, and an admin dashboard that reduced operational overhead by 25%.",
    features: [
      "Secure JWT-based authentication for admins",
      "Product catalog with CRUD workflows",
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
      "Backend services for an Appointment Booking System with REST APIs and a MySQL schema tuned for high concurrency and fast retrieval.",
    challenge:
      "The platform needed to handle hundreds of simultaneous bookings without query slowdowns or security gaps.",
    solution:
      "I built REST APIs with Node.js and Express, designed a MySQL schema that improved query performance by 35%, and added input validation plus security hardening that brought reported vulnerabilities to zero.",
    features: [
      "REST APIs with Node.js and Express",
      "MySQL schema designed for concurrent booking writes",
      "Input validation and security hardening",
      "Responsive UI with JavaScript and jQuery",
      "QA-tested with zero reported vulnerabilities"
    ],
    stack: ["Node.js", "Express.js", "MySQL", "REST APIs", "jQuery"],
    results: [
      { value: "500+", label: "Concurrent records" },
      { value: "+35%", label: "Faster queries" },
      { value: "0", label: "Reported vulnerabilities" }
    ]
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "A premium 3D futuristic portfolio with glassmorphism and neon gradients",
    overview:
      "This very portfolio: a React + Vite app with Three.js scenes, Framer Motion animation, Tailwind CSS, and a glassmorphism design language.",
    challenge:
      "Build a portfolio that genuinely stands out at the senior level: 3D-driven, smooth, accessible, and fast across devices.",
    solution:
      "I crafted a futuristic UI with neon purple, indigo, and cyan gradients, real Three.js scenes via React Three Fiber, and a polished motion design system tuned for performance.",
    features: [
      "Three.js hero scene with floating ribbon and particles",
      "Glassmorphism cards with gradient borders and neon glow",
      "Framer Motion scroll-reveal and section animations",
      "Responsive, mobile-first layouts across all sections",
      "Case study route for deep project storytelling"
    ],
    stack: ["React", "Vite", "Three.js", "@react-three/fiber", "Framer Motion", "Tailwind CSS"],
    results: [
      { value: "100%", label: "Custom 3D scenes" },
      { value: "Smooth", label: "60fps animations" },
      { value: "Responsive", label: "Across all devices" }
    ]
  }
};
