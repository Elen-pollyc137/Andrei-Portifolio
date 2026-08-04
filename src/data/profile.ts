export type ExperienceImage = {
  src: string;
  alt: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  images?: ExperienceImage[];
};

export type ExperienceGroup = {
  id: string;
  title: string;
  icon: string;
  jobs: Job[];
};

export const personal = {
  name: "Andrei Durães Oliveira",
  role: "Engenheiro Civil | Gerente de Contratos | Obras Industriais e Infraestrutura Pesada",
  location: "Belo Horizonte – MG / Montes Claros – MG",
  phone: "(38) 99884-1226",
  emails: [
    "adoengenhariaeavaliacoes@gmail.com",
    "adoengenhariaeavaliacao@outlook.com",
  ],
  rg: "MG-3.629.978",
  birthDate: "27/10/1970",
  birthPlace: "Belo Horizonte – MG",
  address: "Rua Cristina Vasconcelos, 113 – Bairro Barcelona Parque, Montes Claros – MG",
};

export const objective =
  "Atuar como Gerente de Contrato, Supervisor de Obras ou Gestor de Projetos em obras industriais e de infraestrutura de grande porte, com foco em controle físico-financeiro, engenharia de valor e gestão estratégica de contratos.";

export const stats = [
  { value: "30+", label: "Anos de experiência" },
  { value: "400", label: "Colaboradores gerenciados" },
  { value: "140.000 m²", label: "Maior área de obra" },
  { value: "CAT", label: "Acervo técnico comprovado" },
];

export const summary = {
  intro:
    "Engenheiro Civil com sólida trajetória em obras industriais, prediais e infraestrutura pesada, com mais de 30 anos de experiência em:",
  bullets: [
    "Gestão de contratos públicos e privados de alto valor",
    "Implantação de obras industriais (celulose, automotiva, galpões logísticos)",
    "Estruturas de concreto armado e fundações especiais",
    "Planejamento e controle (Curva S, EAP, cronogramas físico-financeiros)",
    "Coordenação de equipes multidisciplinares (até 400 colaboradores)",
    "Engenharia de valor e viabilidade técnico-econômica",
    "Gestão integrada da qualidade e sustentabilidade (incluindo LEED®)",
  ],
  note: "Experiência comprovada com Certidões de Acervo Técnico (CAT).",
};

export const education = [
  { label: "Graduação", value: "Engenharia Civil – Faculdade de Engenharia Kennedy" },
  { label: "Especialização", value: "Tecnologia e Logística de Transporte" },
  { label: "Pós-Graduação", value: "Construção Civil – Tecnologia da Construção" },
  { label: "MBA", value: "Gerenciamento de Projetos" },
  { label: "Pós-Graduação", value: "Gestão Integrada da Qualidade e Meio Ambiente" },
];

export const skills = [
  "Gestão de contratos e suprimentos",
  "Planejamento estratégico e implantação de obras",
  "Controle de produção e produtividade",
  "Estruturas industriais em concreto armado",
  "Fundações profundas (hélice contínua, estacas especiais, tubulões)",
  "Terraplenagem, pavimentação e drenagem profunda",
  "Implantação de sistemas industriais subterrâneos",
  "Engenharia de valor (custo x benefício x prazo)",
  "Sustentabilidade e qualidade total",
];

export const tools = [
  "AutoCAD",
  "MS Project",
  "Primavera P6",
  "CYPECAD",
  "Arquimedes",
  "Compor",
  "Orçamento e composição de custos",
];

export const languages = [
  { name: "Inglês", level: "Intermediário" },
  { name: "Italiano", level: "" },
];

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "industrial",
    title: "Obras Industriais",
    icon: "factory",
    jobs: [
      {
        company: "Paranasa Engenharia — Indústria de Celulose (Cenibra)",
        role: "Engenheiro de Produção",
        period: "2005–2007",
        highlights: [
          "Construção e ampliação industrial (35.000 m²)",
          "Execução de 8.000 m³ de concreto armado (Forno de Cal III)",
          "Bases estruturais industriais e sala elétrica (06 pavimentos)",
          "Gestão de 150 colaboradores",
          "Obra entregue dentro do cronograma",
        ],
        images: [
          { src: "/obras/cenibra/01.jpg", alt: "Estrutura metálica industrial — Cenibra" },
          { src: "/obras/cenibra/02.jpg", alt: "Montagem de estrutura — Cenibra" },
          { src: "/obras/cenibra/03.jpg", alt: "Concretagem industrial — Cenibra" },
        ],
      },
      {
        company: "Paranasa Engenharia — Indústria de Celulose Suzano (Unidade Mucuri/ES)",
        role: "Gestor de Contrato",
        period: "2007",
        highlights: [
          "Construção do pátio de madeiras (45.000 m²)",
          "Bases de transportadores, staker e galerias",
          "Sala elétrica (04 pavimentos)",
          "Pavimentação CBUQ e infraestrutura subterrânea",
          "Gestão de 200 colaboradores",
        ],
        images: [
          { src: "/obras/suzano-mucuri/01.jpg", alt: "Concretagem — Suzano Mucuri" },
          { src: "/obras/suzano-mucuri/02.jpg", alt: "Estrutura em obra — Suzano Mucuri" },
          { src: "/obras/suzano-mucuri/03.jpg", alt: "Montagem estrutural — Suzano Mucuri" },
        ],
      },
      {
        company: "Fiat Engineering do Brasil — Fábrica Automotiva Stola do Brasil",
        role: "Supervisor de Obra Civil",
        period: "2002–2004",
        highlights: [
          "Área total: 140.000 m²",
          "50.000 m³ de aterro compactado",
          "Fundações especiais e estacas hélice contínua",
          "Galerias atirantadas e drenagem profunda",
          "Gestão de 400 colaboradores",
        ],
        images: [
          { src: "/obras/stola-brasil/01.jpg", alt: "Armação de ferragem — Stola do Brasil" },
          { src: "/obras/stola-brasil/02.jpg", alt: "Fundações especiais — Stola do Brasil" },
        ],
      },
    ],
  },
  {
    id: "predial",
    title: "Obras Prediais e Hospitalares",
    icon: "building",
    jobs: [
      {
        company: "Engemil Engenharia — TJMG (Fórum de Montes Claros)",
        role: "Gestor de Contrato",
        period: "2024–2025",
        highlights: [
          "15.000 m² | 05 pavimentos",
          "Fachada ACM, climatização central, geradores 500 KVA",
          "Gestão de 200 colaboradores",
        ],
        images: [
          { src: "/obras/forum-tjmg/01.jpg", alt: "Fórum de Montes Claros — fachada" },
          { src: "/obras/forum-tjmg/02.jpg", alt: "Fórum de Montes Claros — obra" },
          { src: "/obras/forum-tjmg/03.jpg", alt: "Fórum de Montes Claros — acabamento" },
        ],
      },
      {
        company: "Conata Engenharia — Hospital Odilon Behrens (Maternidade)",
        role: "Gestor de Contrato",
        period: "2022–2023",
        highlights: [
          "4.901 m² | 06 pavimentos",
          "Sistema de gases medicinais",
          "Rebaixamento de lençol freático",
          "Gestão de 180 colaboradores",
        ],
        images: [
          { src: "/obras/hospital-odilon-behrens/01.jpg", alt: "Hospital Odilon Behrens — fachada" },
          { src: "/obras/hospital-odilon-behrens/02.jpg", alt: "Hospital Odilon Behrens — obra" },
          { src: "/obras/hospital-odilon-behrens/03.jpg", alt: "Hospital Odilon Behrens — acabamento" },
        ],
      },
    ],
  },
  {
    id: "infra",
    title: "Infraestrutura e Terraplenagem",
    icon: "road",
    jobs: [
      {
        company: "DER-MG",
        role: "Obras rodoviárias",
        period: "",
        highlights: [
          "100 km de rodovias (TSD e CBUQ)",
          "Construção de pontilhões e tubulões",
          "Barragens e drenagem urbana",
          "Implantação de VLT e sistema binário urbano",
          "Contenções com parede diafragma",
        ],
        images: [
          { src: "/obras/der-mg/01.jpg", alt: "Viaduto em balanço sucessivo — DER-MG" },
          { src: "/obras/der-mg/02.jpg", alt: "Lançamento de viga — DER-MG" },
          { src: "/obras/der-mg/03.jpg", alt: "Obra de arte especial — DER-MG" },
          { src: "/obras/der-mg/04.jpg", alt: "Montagem de balanço sucessivo — DER-MG" },
          { src: "/obras/der-mg/05.jpg", alt: "Vista da ponte em obra — DER-MG" },
        ],
      },
    ],
  },
];

export const differentials = [
  "Experiência comprovada em celulose",
  "Forte atuação em concreto estrutural pesado",
  "Histórico em grandes efetivos de obra",
  "Experiência em obras públicas e privadas",
  "Gestão estratégica de contratos",
];
