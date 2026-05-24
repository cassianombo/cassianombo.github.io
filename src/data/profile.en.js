export const workExperience = [
  {
    company: "Capgemini Engineering",
    logo: "/capgemini_logo.jpeg",
    roles: [
      {
        title: "Software Engineer",
        period: "Nov 2025 – Present",
        bullets: [
          "Develop and maintain web applications using Next.js (React) and Tailwind CSS",
          "Manage application state with Zustand and consume REST APIs",
          "Implement runtime data validation with Zod to ensure data consistency and reliability",
          "Work in an Agile (SCRUM) environment within the public healthcare sector (SPMS - Portal Inovar)",
        ],
      },
    ],
  },
  {
    company: "Glintt Global",
    logo: "/glintt_logo.jpeg",
    avatarClassName: "bg-[#00d4c4] border-[#00d4c4]",
    logoClassName: "h-full w-full object-cover",
    roles: [
      {
        title: "Software Developer",
        period: "Mar 2025 – Nov 2025",
        bullets: [
          "Built scalable frontend applications using ReactJS and Micro Frontend architectures",
          "Integrated .NET APIs with Apollo GraphQL, improving data-fetching performance",
          "Maintained 90%+ test coverage using Jest and React Testing Library",
          "Delivered mission-critical digital solutions for hospitals in Portugal and Spain",
        ],
      },
    ],
  },
  {
    company: "SARKKIS Robotics",
    logo: "/sarkkis_robotics_lda_logo.jpeg",
    avatarClassName: "bg-white",
    logoClassName: "h-full w-full object-contain p-1.5",
    roles: [
      {
        title: "Software Engineer",
        period: "Jan 2024 – Feb 2025",
        bullets: [
          "Developed enterprise-grade .NET/WPF applications using advanced design patterns",
          "Reduced technical debt and simulation errors by 85% through a custom 3D CAD visualization module",
          "Collaborated with international teams (Canada & Europe) on industrial robotics solutions",
        ],
      },
    ],
  },
  {
    company: "N4IT",
    logo: "/n4it_logo.jpeg",
    roles: [
      {
        title: "Software Engineer Internship",
        period: "Feb 2023 – Jun 2023",
        bullets: [
          "Developed a React-based internal web application to simplify infrastructure provisioning and deployment tracking",
          "Designed and integrated a .NET REST API to automate Kubernetes cluster provisioning using PostgreSQL",
          "Improved system reliability by implementing unit and integration tests (≈70% coverage with xUnit)",
        ],
      },
    ],
  },
];

export const educationExperience = [
  {
    company: "Porto School of Engineering (ISEP)",
    logo: "/isep_logo.png",
    roles: [
      {
        title: "Master in Data Engineering",
        period: "Sep 2025 – Present",
        bullets: [
          "Deepening skills in data pipelines, warehousing, and analytics alongside software engineering fundamentals.",
        ],
      },
    ],
  },
  {
    company: "Porto School of Engineering (ISEP)",
    logo: "/isep_logo.png",
    roles: [
      {
        title: "Bachelor in Computer Engineering",
        period: "Sep 2020 – Sep 2023",
        bullets: [
          "Foundation in software engineering, algorithms, databases, and distributed systems.",
        ],
      },
    ],
  },
];

export const certifications = [
  {
    title: "React Native – The Practical Guide",
    issuer: "Academind / Udemy",
    period: "Aug 2025",
    logo: "/udemy_logo.png",
  },
  {
    title: "Docker for absolute Beginners – Hands on – DevOps",
    issuer: "Udemy",
    period: "Jun 2025",
    logo: "/udemy_logo.png",
  },
  {
    title: "Angular Course",
    issuer: "ISEP",
    period: "May 2024 – Jun 2024",
    logo: "/isep_logo.png",
  },
];

export const projects = [
  {
    name: "Fadee",
    description:
      "SaaS booking platform for independent barbers: public booking pages, dashboard, Stripe subscriptions, and Google Calendar sync. Built with Next.js and NestJS.",
    techStack: ["Next.js", "NestJS", "Stripe", "PostgreSQL", "Google Calendar"],
    image: "/brand/fadee-header-lockup.png",
    imageBackground: "white",
    website: "https://www.fadee.pt",
  },
  {
    name: "Personal Budget",
    description:
      "Personal finance stack: NestJS API with auth, reporting, and fintech-style patterns, paired with a React Native (Expo) app to track income and expenses with offline-first support.",
    techStack: ["Nest.js", "React Native", "TypeScript", "PostgreSQL", "Expo"],
    links: [
      {
        label: "Source (API)",
        href: "https://github.com/cassianombo/personal-budget-api",
      },
      {
        label: "Source (App)",
        href: "https://github.com/cassianombo/personal-budget",
      },
    ],
    image: "/projects/github.png",
  },
  {
    name: "King's Puppet - Unity Game",
    description:
      "2D auto-chess Unity game built to sharpen core gameplay and UI skills.",
    techStack: ["Unity", "C#"],
    github: "https://github.com/cassianombo/kings-puppets-unity-project",
    demo: "https://cassianombo.itch.io/kings-puppets",
    image: "/projects/kings-puppets.png",
  },
];

export const featuredProjects = projects.slice(0, 2);
