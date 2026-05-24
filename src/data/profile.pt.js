export const workExperience = [
  {
    company: "Capgemini Engineering",
    logo: "/capgemini_logo.jpeg",
    roles: [
      {
        title: "Engenheiro de Software",
        period: "Nov 2025 – Atual",
        bullets: [
          "Desenvolvimento e manutenção de aplicações web com Next.js (React) e Tailwind CSS",
          "Gestão de estado com Zustand e consumo de APIs REST",
          "Validação de dados em runtime com Zod para garantir consistência e fiabilidade",
          "Trabalho em ambiente Agile (SCRUM) no setor público de saúde (SPMS - Portal Inovar)",
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
        title: "Programador de Software",
        period: "Mar 2025 – Nov 2025",
        bullets: [
          "Desenvolvimento de aplicações frontend escaláveis com ReactJS e arquiteturas Micro Frontend",
          "Integração de APIs .NET com Apollo GraphQL, melhorando a performance de obtenção de dados",
          "Manutenção de mais de 90% de cobertura de testes com Jest e React Testing Library",
          "Entrega de soluções digitais críticas para hospitais em Portugal e Espanha",
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
        title: "Engenheiro de Software",
        period: "Jan 2024 – Fev 2025",
        bullets: [
          "Desenvolvimento de aplicações enterprise .NET/WPF com padrões de design avançados",
          "Redução de dívida técnica e erros de simulação em 85% através de um módulo de visualização CAD 3D",
          "Colaboração com equipas internacionais (Canadá e Europa) em soluções de robótica industrial",
        ],
      },
    ],
  },
  {
    company: "N4IT",
    logo: "/n4it_logo.jpeg",
    roles: [
      {
        title: "Estágio de Engenheiro de Software",
        period: "Fev 2023 – Jun 2023",
        bullets: [
          "Desenvolvimento de aplicação web interna em React para simplificar provisionamento de infraestrutura e acompanhamento de deployments",
          "Conceção e integração de API REST .NET para automatizar provisionamento de clusters Kubernetes com PostgreSQL",
          "Melhoria da fiabilidade do sistema com testes unitários e de integração (≈70% de cobertura com xUnit)",
        ],
      },
    ],
  },
];

export const educationExperience = [
  {
    company: "Instituto Superior de Engenharia do Porto (ISEP)",
    logo: "/isep_logo.png",
    roles: [
      {
        title: "Mestrado em Engenharia de Dados",
        period: "Set 2025 – Atual",
        bullets: [
          "Aprofundamento em pipelines de dados, armazenamento e analytics, com fundamentos de engenharia de software.",
        ],
      },
    ],
  },
  {
    company: "Instituto Superior de Engenharia do Porto (ISEP)",
    logo: "/isep_logo.png",
    roles: [
      {
        title: "Licenciatura em Engenharia Informática",
        period: "Set 2020 – Set 2023",
        bullets: [
          "Fundamentos em engenharia de software, algoritmos, bases de dados e sistemas distribuídos.",
        ],
      },
    ],
  },
];

export const certifications = [
  {
    title: "React Native – The Practical Guide",
    issuer: "Academind / Udemy",
    period: "Ago 2025",
    logo: "/udemy_logo.png",
  },
  {
    title: "Docker for absolute Beginners – Hands on – DevOps",
    issuer: "Udemy",
    period: "Jun 2025",
    logo: "/udemy_logo.png",
  },
  {
    title: "Curso de Angular",
    issuer: "ISEP",
    period: "Mai 2024 – Jun 2024",
    logo: "/isep_logo.png",
  },
];

export const projects = [
  {
    name: "Fadee",
    description:
      "Plataforma SaaS de marcações para barbeiros independentes: páginas públicas de reserva, dashboard, subscrições Stripe e sincronização com Google Calendar. Construída com Next.js e NestJS.",
    techStack: ["Next.js", "NestJS", "Stripe", "PostgreSQL", "Google Calendar"],
    image: "/brand/fadee-header-lockup.png",
    imageBackground: "white",
    website: "https://www.fadee.pt",
  },
  {
    name: "Personal Budget",
    description:
      "Stack de finanças pessoais: API NestJS com autenticação, relatórios e padrões fintech, com app React Native (Expo) para acompanhar receitas e despesas com suporte offline-first.",
    techStack: ["Nest.js", "React Native", "TypeScript", "PostgreSQL", "Expo"],
    links: [
      {
        label: "Código (API)",
        href: "https://github.com/cassianombo/personal-budget-api",
      },
      {
        label: "Código (App)",
        href: "https://github.com/cassianombo/personal-budget",
      },
    ],
    image: "/projects/github.png",
  },
  {
    name: "King's Puppet - Jogo Unity",
    description:
      "Jogo 2D auto-chess em Unity para afinar competências de gameplay e UI.",
    techStack: ["Unity", "C#"],
    github: "https://github.com/cassianombo/kings-puppets-unity-project",
    demo: "https://cassianombo.itch.io/kings-puppets",
    image: "/projects/kings-puppets.png",
  },
];

export const featuredProjects = projects.slice(0, 2);
