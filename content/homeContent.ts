import { Calendar, Code, Database, Users } from "lucide-react";

const projects = [
    {
        title: "E-commerce Dashboard",
        description: "Dashboard de análisis para tienda online con métricas en tiempo real",
        tech: ["React", "Node.js", "PostgreSQL"],
        link: "#",
        status: "Completado",
    },
    {
        title: "API Gateway",
        description: "Gateway centralizado para microservicios con autenticación",
        tech: ["FastAPI", "Docker", "Redis"],
        link: "#",
        status: "En desarrollo",
    },
    {
        title: "CRM System",
        description: "Sistema de gestión de clientes con automatización",
        tech: ["Vue.js", "Python", "MongoDB"],
        link: "#",
        status: "Completado",
    },
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
    { name: "ReactJs", icon: "⚛️", level: "Intermedio" },
    { name: "NodeJs", icon: "🔧", level: "Intermedio" },
    { name: "PostgreSQL", icon: "🐘", level: "Intermedio" },
    { name: "Postman", icon: "🌐", level: "Intermedio" },
    { name: "NextJs", icon: "💡", level: "Intermedio" },
    { name: "C# - .Net", icon: "🔗", level: "Básico" },
];

const stats = [
    { label: "Años en IT, producto y sistemas", value: "+5", icon: Calendar },
    { label: "Proyectos, módulos y features entregadas", value: "+10", icon: Code },
    { label: "Equipos multidisciplinarios", value: "3", icon: Users },
    { label: "Integracions con APIs y sistemas", value: "+10", icon: Database },
];

const technicalProjects = [
    {
        name: "Sistema de Gestión de Inventarios",
        description:
            "Aplicación full-stack para control de inventarios con dashboard en tiempo real y alertas automáticas.",
        technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
        type: "Web Application",
        year: "2024",
        features: ["Dashboard en tiempo real", "Alertas automáticas", "Reportes PDF", "API REST"],
        icon: "📦",
        color: "text-blue-400",
    },
    {
        name: "API Gateway Corporativo",
        description: "Gateway centralizado para microservicios con autenticación JWT, rate limiting y monitoreo.",
        technologies: ["FastAPI", "Redis", "Docker", "Nginx"],
        type: "Backend Service",
        year: "2023",
        features: ["Autenticación JWT", "Rate limiting", "Logs centralizados", "Health checks"],
        icon: "🔗",
        color: "text-green-400",
    },
    {
        name: "Dashboard de Analytics",
        description: "Plataforma de visualización de datos con gráficos interactivos y exportación de reportes.",
        technologies: ["Vue.js", "Python", "MongoDB", "Chart.js"],
        type: "Data Visualization",
        year: "2023",
        features: ["Gráficos interactivos", "Filtros avanzados", "Exportación Excel", "Scheduled reports"],
        icon: "📊",
        color: "text-purple-400",
    },
    {
        name: "Sistema de Notificaciones",
        description: "Microservicio para envío de notificaciones multi-canal (email, SMS, push) con cola de mensajes.",
        technologies: ["Python", "Celery", "RabbitMQ", "AWS SES"],
        type: "Microservice",
        year: "2022",
        features: ["Multi-canal", "Cola de mensajes", "Retry automático", "Templates dinámicos"],
        icon: "📧",
        color: "text-yellow-400",
    },
    {
        name: "CLI Tool para DevOps",
        description: "Herramienta de línea de comandos para automatizar deployments y gestión de infraestructura.",
        technologies: ["Python", "Click", "AWS CLI", "Terraform"],
        type: "CLI Tool",
        year: "2022",
        features: ["Deploy automático", "Rollback seguro", "Config validation", "Multi-environment"],
        icon: "⚡",
        color: "text-orange-400",
    },
    {
        name: "Bot de Slack para Reportes",
        description: "Bot inteligente que genera reportes automáticos y responde consultas sobre métricas del negocio.",
        technologies: ["Node.js", "Slack API", "PostgreSQL", "Cron"],
        type: "Automation Bot",
        year: "2021",
        features: ["Comandos slash", "Reportes automáticos", "Queries en lenguaje natural", "Scheduled tasks"],
        icon: "🤖",
        color: "text-cyan-400",
    },
];

export {
    projects,
    blogPosts,
    skills,
    stats,
    technicalProjects,
}