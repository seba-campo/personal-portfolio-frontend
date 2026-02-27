import { Calendar, Code, Database, Users, BarChart, Gamepad2 } from "lucide-react";
import PlannitIcon from "@/components/ui/icons/plannit";
import FastwaIcon from "@/components/ui/icons/fastwa";

interface TechnicalProject {
    name: string;
    description: string;
    technologies: string[];
    type: string;
    year: string;
    features: string[];
    icon: React.ReactNode;
    color: string;
    backgroundImage?: string;
    link?: string;
}

const projects = [
    {
        title: "fastwa",
        description: "Aplicación responsive y de single-purpose para generar y acortar links de whatsapp",
        tech: ["Tailwind", "Vercel", "Google Analytics", "Google Adsense"],
        link: "https://fastwa.me",
        status: "Completado",
    },
    {
        title: "PlannIt",
        description: "Aplicación realtime full-stack para planificación de user stories y tareas",
        tech: ["React", "NextJs", "Firebase", "Firestore"],
        link: "https://plannit-nine.vercel.app/",
        status: "Completado",
    },
    {
        title: "CRM Online",
        description: "Sistema tipo CRM con gestion de clientes y servicios",
        tech: ["ExpressJs", "PostgreSQL", "Custom Components", "Github Actions"],
        link: "https://seba-campo.github.io/jv-crm/",
        status: "Completado",
    },
    {
        title: "Piedra Papel o Tijera Online",
        description: "Juego real time online de piedra papel o tijera.",
        tech: ["Custom Components", "Firebase", "Firestore", "ExpressJs"],
        link: "https://github.com/seba-campo/desafio-m6",
        status: "Completado",
    },
    {
        title: "ATM Api",
        description: "ATM API para gestion de cajeros",
        tech: [".Net", "Entity Framework", "PostgreSQL", "SaaS: Neon"],
        link: "https://github.com/seba-campo/challenge-atm-api",
        status: "Completado",
    },
    {
        title: "Mailer API",
        description: "API para envio de correos electrónicos, como el utilizado en Contacto",
        tech: ["NodeJs", "ExpressJs"],
        link: "https://github.com/seba-campo/mailer-api",
        status: "Completado",
    }
];

const blogPosts = [
    {
        title: "Cómo implementar un API Gateway escalable",
        excerpt:
            "Guía completa para diseñar y implementar un gateway de APIs que pueda manejar miles de requests por segundo...",
        date: "2024-01-15",
        readTime: "5 min",
        tags: ["API", "Arquitectura", "DevOps"],
    },
    {
        title: "Análisis funcional en proyectos ágiles",
        excerpt: "Mejores prácticas para el análisis de requisitos en equipos que trabajan con metodologías ágiles...",
        date: "2024-01-10",
        readTime: "8 min",
        tags: ["Agile", "Análisis", "Scrum"],
    },
    {
        title: "Optimización de bases de datos PostgreSQL",
        excerpt: "Técnicas avanzadas para mejorar el rendimiento de consultas y reducir los tiempos de respuesta...",
        date: "2024-01-05",
        readTime: "12 min",
        tags: ["PostgreSQL", "Performance", "SQL"],
    },
];

const skills = [
  { name: "React", icon: "⚛️", level: "Hooks • Context • Performance" },
  { name: "Next.js", icon: "▲", level: "SSR • Routing • Optimización SEO" },
  { name: "Frontend Architecture", icon: "🧩", level: "State Management • Escalabilidad" },
  { name: "Product Thinking", icon: "📊", level: "Análisis funcional • Feature Ownership" },
  { name: "Node.js", icon: "🔧", level: "APIs • Integraciones" },
  { name: "PostgreSQL", icon: "🐘", level: "Modelado de datos" },
];

const stats = [
    { label: "Años en IT, producto y sistemas", value: "+5", icon: Calendar },
    { label: "Proyectos, módulos y features entregadas", value: "+10", icon: Code },
    { label: "Equipos multidisciplinarios", value: "3", icon: Users },
    { label: "Integracions con APIs y sistemas", value: "+10", icon: Database },
];

const technicalProjects: TechnicalProject[] = [
    {
        name: "fastwa",
        description: "Generador y acortador de links de whatsapp, responsive y con soporte para compartir en redes sociales",
        technologies: ["Vercel", "Tailwind"],
        link: "https://fastwa.me",
        type: "Web App",
        year: "2026",
        features: ["SEO Optimization", "Google Analytics", "QR Generator", "Social Sharing"],
        icon: <FastwaIcon />,
        color: "text-green-400",
        backgroundImage: "/fastwaBanner.png",
    },
    {
        name: "PlannIt",
        link: "https://plannit-nine.vercel.app/",
        description:
            "Aplicación realtime full-stack para planificación de user stories y tareas",
        technologies: ["React", "NextJs", "Firebase", "Firestore"],
        type: "Web App",
        year: "2025",
        features: ["Juego en tiempo real", "Salas de chat", "Autenticación JWT", "Health checks"],
        icon: <PlannitIcon />,
        color: "text-blue-400",
        backgroundImage: "/plannitBanner.png",
    },
    {
        name: "Piedra Papel o Tijera Online",
        description: "Juego real time online de piedra papel o tijera.",
        link: "https://github.com/seba-campo/react-pet-finder",
        technologies: ["Custom Components", "Firebase", "Firestore", "ExpressJs"],
        type: "Web App",
        year: "2024",
        features: ["Juego en tiempo real", "Salas de chat", "Autenticación JWT", "Health checks"],
        icon: <Gamepad2 />,
        color: "text-purple-400",
        backgroundImage: "",
    }
];

export {
    projects,
    blogPosts,
    skills,
    stats,
    technicalProjects,
}
