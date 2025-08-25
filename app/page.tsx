"use client"

import { useState, useEffect } from "react"
import { MapPin, Download, Mail, Linkedin, Github, Globe, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Language = "en" | "es"
type ActiveTab = "about" | "experience" | "education" | "projects"

interface Translations {
  en: {
    sidebar: {
      title: string
      location: string
      downloadCV: string
      followMe: string
    }
    navigation: {
      about: string
      experience: string
      education: string
      projects: string
    }
    about: {
      title: string
      description: string[]
      skills: {
        title: string
        technical: string[]
        business: string[]
        tools: string[]
        methodologies: string[]
      }
    }
    experience: {
      title: string
      jobs: Array<{
        title: string
        company: string
        period: string
        location: string
        description: string[]
        achievements: string[]
      }>
    }
    education: {
      title: string
      degrees: Array<{
        degree: string
        institution: string
        period: string
        description: string
      }>
      certifications: Array<{
        name: string
        issuer: string
        year: string
      }>
    }
    projects: {
      title: string
      viewProject: string
      items: Array<{
        name: string
        description: string
        technologies: string[]
        role: string
        status: string
        achievements: string[]
        image: string
        imageAlt: string
      }>
    }
  }
  es: {
    sidebar: {
      title: string
      location: string
      downloadCV: string
      followMe: string
    }
    navigation: {
      about: string
      experience: string
      education: string
      projects: string
    }
    about: {
      title: string
      description: string[]
      skills: {
        title: string
        technical: string[]
        business: string[]
        tools: string[]
        methodologies: string[]
      }
    }
    experience: {
      title: string
      jobs: Array<{
        title: string
        company: string
        period: string
        location: string
        description: string[]
        achievements: string[]
      }>
    }
    education: {
      title: string
      degrees: Array<{
        degree: string
        institution: string
        period: string
        description: string
      }>
      certifications: Array<{
        name: string
        issuer: string
        year: string
      }>
    }
    projects: {
      title: string
      viewProject: string
      items: Array<{
        name: string
        description: string
        technologies: string[]
        role: string
        status: string
        achievements: string[]
        image: string
        imageAlt: string
      }>
    }
  }
}

const translations: Translations = {
  en: {
    sidebar: {
      title: "Functional Analyst",
      location: "Your City, Country",
      downloadCV: "Download CV",
      followMe: "Follow me",
    },
    navigation: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
    },
    about: {
      title: "About Me",
      description: [
        "Functional Analyst with 5+ years of experience delivering impactful web applications and digital solutions used by thousands of users. Expert in bridging business requirements with technical implementation, leading cross-functional teams from conception to deployment.",
        "Demonstrated success in API design, database architecture, and user experience optimization. Proven track record in agile methodologies, translating complex business needs into scalable technical solutions that drive measurable business growth.",
      ],
      skills: {
        title: "Professional Skills",
        business: [
          "Requirements Gathering & Analysis",
          "Stakeholder Management",
          "Process Optimization",
          "Business Process Mapping",
          "Risk Assessment & Mitigation",
          "Cross-functional Team Leadership",
        ],
        methodologies: [
          "Agile & Scrum",
          "Lean Methodology",
          "Design Thinking",
          "User-Centered Design",
          "DevOps Practices",
          "SDLC Management",
        ],
        technical: ["React", "Node.js", "JavaScript", "PostgreSQL", "MongoDB", "AWS", "Docker", "Python"],
        tools: ["JIRA", "Figma", "Git", "Postman", "Tableau", "Confluence", "Azure", "Redis"],
      },
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Senior Functional Analyst",
          company: "Tech Solutions Inc.",
          period: "2021 - Present",
          location: "Remote",
          description: [
            "Lead functional analysis for enterprise-level web applications serving 50K+ users",
            "Collaborate with product managers and engineering teams to define technical requirements",
            "Design and document API specifications and database schemas",
          ],
          achievements: [
            "Improved system performance by 40% through database optimization",
            "Reduced development time by 25% with standardized requirement documentation",
            "Successfully launched 3 major product features ahead of schedule",
          ],
        },
        {
          title: "Functional Analyst",
          company: "Digital Innovations Ltd.",
          period: "2019 - 2021",
          location: "Your City",
          description: [
            "Analyzed business processes and translated requirements into technical specifications",
            "Managed stakeholder communication and facilitated requirement gathering sessions",
            "Supported UAT and deployment processes",
          ],
          achievements: [
            "Streamlined reporting processes, saving 15 hours/week",
            "Implemented automated testing procedures reducing bugs by 30%",
            "Led migration project affecting 10K+ user accounts",
          ],
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      degrees: [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          period: "2015 - 2019",
          description: "Specialized in Information Systems and Database Management",
        },
        {
          degree: "Master of Business Administration",
          institution: "Business School",
          period: "2020 - 2022",
          description: "Focus on Technology Management and Digital Transformation",
        },
      ],
      certifications: [
        {
          name: "Certified Business Analysis Professional (CBAP)",
          issuer: "IIBA",
          year: "2022",
        },
        {
          name: "AWS Solutions Architect Associate",
          issuer: "Amazon Web Services",
          year: "2023",
        },
        {
          name: "Scrum Master Certified",
          issuer: "Scrum Alliance",
          year: "2021",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewProject: "Visit",
      items: [
        {
          name: "AnalyticsHub.io",
          description:
            "AI-powered analytics platform for e-commerce operations, integrating multiple data sources and providing real-time insights for business decisions.",
          technologies: ["React", "Node.js", "PostgreSQL", "AWS", "D3.js"],
          role: "Lead Functional Analyst",
          status: "Live",
          achievements: [
            "Improved decision-making speed by 60%",
            "Integrated 5+ external APIs",
            "Supported $2M+ in revenue tracking",
          ],
          image: "/web-application-dashboard.png",
          imageAlt: "E-Commerce Analytics Dashboard",
        },
        {
          name: "CRMPro.com",
          description:
            "Customer relationship management system handling 10K+ daily interactions with advanced automation and user experience optimization.",
          technologies: ["Vue.js", "Python", "MongoDB", "Redis"],
          role: "Senior Analyst",
          status: "Deployed",
          achievements: [
            "Reduced customer response time by 50%",
            "Automated 80% of routine tasks",
            "Improved customer satisfaction by 35%",
          ],
          image: "/mobile-app-interface.png",
          imageAlt: "Customer Management System Interface",
        },
        {
          name: "APIGateway.dev",
          description:
            "Centralized API gateway serving multiple microservices across the organization with enhanced security and performance monitoring.",
          technologies: ["FastAPI", "Docker", "Kubernetes", "Redis"],
          role: "Technical Analyst",
          status: "Production",
          achievements: [
            "Consolidated 15+ APIs into unified gateway",
            "Improved API response time by 45%",
            "Enhanced security with centralized authentication",
          ],
          image: "/data-visualization-dashboard.png",
          imageAlt: "API Gateway Architecture Dashboard",
        },
      ],
    },
  },
  es: {
    sidebar: {
      title: "Analista Funcional",
      location: "Tu Ciudad, País",
      downloadCV: "Descargar CV",
      followMe: "Sígueme",
    },
    navigation: {
      about: "Acerca",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
    },
    about: {
      title: "Acerca de Mí",
      description: [
        "Analista Funcional con más de 5 años de experiencia entregando aplicaciones web impactantes y soluciones digitales utilizadas por miles de usuarios. Experto en conectar requisitos de negocio con implementación técnica, liderando equipos multifuncionales desde la concepción hasta el despliegue.",
        "Éxito demostrado en diseño de APIs, arquitectura de bases de datos y optimización de experiencia de usuario. Historial comprobado en metodologías ágiles, traduciendo necesidades complejas de negocio en soluciones técnicas escalables que impulsan el crecimiento empresarial medible.",
      ],
      skills: {
        title: "Habilidades Profesionales",
        business: [
          "Recopilación y Análisis de Requisitos",
          "Gestión de Stakeholders",
          "Optimización de Procesos",
          "Mapeo de Procesos de Negocio",
          "Evaluación y Mitigación de Riesgos",
          "Liderazgo de Equipos Multifuncionales",
        ],
        methodologies: [
          "Agile y Scrum",
          "Metodología Lean",
          "Design Thinking",
          "Diseño Centrado en el Usuario",
          "Prácticas DevOps",
          "Gestión SDLC",
        ],
        technical: ["React", "Node.js", "JavaScript", "PostgreSQL", "MongoDB", "AWS", "Docker", "Python"],
        tools: ["JIRA", "Figma", "Git", "Postman", "Tableau", "Confluence", "Azure", "Redis"],
      },
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          title: "Analista Funcional Senior",
          company: "Tech Solutions Inc.",
          period: "2021 - Presente",
          location: "Remoto",
          description: [
            "Lidero análisis funcional para aplicaciones web empresariales que sirven a más de 50K usuarios",
            "Colaboro con gerentes de producto y equipos de ingeniería para definir requisitos técnicos",
            "Diseño y documento especificaciones de APIs y esquemas de bases de datos",
          ],
          achievements: [
            "Mejoré el rendimiento del sistema en un 40% mediante optimización de bases de datos",
            "Reduje el tiempo de desarrollo en un 25% con documentación estandarizada de requisitos",
            "Lancé exitosamente 3 características principales del producto antes de la fecha límite",
          ],
        },
        {
          title: "Analista Funcional",
          company: "Digital Innovations Ltd.",
          period: "2019 - 2021",
          location: "Tu Ciudad",
          description: [
            "Analicé procesos de negocio y traduje requisitos en especificaciones técnicas",
            "Gestioné comunicación con stakeholders y facilité sesiones de recopilación de requisitos",
            "Apoyé procesos de UAT y despliegue",
          ],
          achievements: [
            "Optimicé procesos de reporting, ahorrando 15 horas/semana",
            "Implementé procedimientos de pruebas automatizadas reduciendo bugs en un 30%",
            "Lideré proyecto de migración afectando más de 10K cuentas de usuario",
          ],
        },
      ],
    },
    education: {
      title: "Educación y Certificaciones",
      degrees: [
        {
          degree: "Licenciatura en Ciencias de la Computación",
          institution: "Nombre de Universidad",
          period: "2015 - 2019",
          description: "Especialización en Sistemas de Información y Gestión de Bases de Datos",
        },
        {
          degree: "Maestría en Administración de Empresas",
          institution: "Escuela de Negocios",
          period: "2020 - 2022",
          description: "Enfoque en Gestión de Tecnología y Transformación Digital",
        },
      ],
      certifications: [
        {
          name: "Profesional Certificado en Análisis de Negocios (CBAP)",
          issuer: "IIBA",
          year: "2022",
        },
        {
          name: "AWS Solutions Architect Associate",
          issuer: "Amazon Web Services",
          year: "2023",
        },
        {
          name: "Scrum Master Certificado",
          issuer: "Scrum Alliance",
          year: "2021",
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Visitar",
      items: [
        {
          name: "AnalyticsHub.io",
          description:
            "Plataforma de análisis impulsada por IA para operaciones de e-commerce, integrando múltiples fuentes de datos y proporcionando insights en tiempo real para decisiones empresariales.",
          technologies: ["React", "Node.js", "PostgreSQL", "AWS", "D3.js"],
          role: "Analista Funcional Líder",
          status: "En Vivo",
          achievements: [
            "Mejoré la velocidad de toma de decisiones en un 60%",
            "Integré más de 5 APIs externas",
            "Apoyé el seguimiento de más de $2M en ingresos",
          ],
          image: "/web-application-dashboard.png",
          imageAlt: "Dashboard de Análisis E-Commerce",
        },
        {
          name: "CRMPro.com",
          description:
            "Sistema de gestión de relaciones con clientes que maneja más de 10K interacciones diarias con automatización avanzada y optimización de experiencia de usuario.",
          technologies: ["Vue.js", "Python", "MongoDB", "Redis"],
          role: "Analista Senior",
          status: "Desplegado",
          achievements: [
            "Reduje el tiempo de respuesta al cliente en un 50%",
            "Automaticé el 80% de las tareas rutinarias",
            "Mejoré la satisfacción del cliente en un 35%",
          ],
          image: "/mobile-app-interface.png",
          imageAlt: "Interfaz del Sistema de Gestión de Clientes",
        },
        {
          name: "APIGateway.dev",
          description:
            "Gateway de API centralizado que sirve múltiples microservicios en toda la organización con seguridad mejorada y monitoreo de rendimiento.",
          technologies: ["FastAPI", "Docker", "Kubernetes", "Redis"],
          role: "Analista Técnico",
          status: "Producción",
          achievements: [
            "Consolidé más de 15 APIs en un gateway unificado",
            "Mejoré el tiempo de respuesta de APIs en un 45%",
            "Mejoré la seguridad con autenticación centralizada",
          ],
          image: "/data-visualization-dashboard.png",
          imageAlt: "Dashboard de Arquitectura API Gateway",
        },
      ],
    },
  },
}

// Typewriter Animation Hook
const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayText("")
    setIsComplete(false)
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}

// Typewriter Component
const TypewriterText = ({ text, speed = 50, className = "" }: { text: string; speed?: number; className?: string }) => {
  const { displayText, isComplete } = useTypewriter(text, speed)

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Rising particles from bottom */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10px",
              animation: `rise ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        style={{
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl"
        style={{
          animation: "float 15s ease-in-out infinite reverse",
          animationDelay: "5s",
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-15px);
          }
        }
      `}</style>
    </div>
  )
}

export default function DarkITPortfolio() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("about")
  const [language, setLanguage] = useState<Language>("en")

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-normal mb-8 text-white">
                <TypewriterText text={t.about.title} speed={100} />
              </h1>
              <div className="space-y-6">
                {t.about.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-8 text-white">{t.about.skills.title}</h2>
              <div className="space-y-12">
                {/* Professional Skills - Business & Methodologies */}
                <div>
                  <h3 className="text-xl font-medium mb-6 text-white border-b border-gray-800 pb-2">
                    Professional Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <ul className="space-y-3">
                        {t.about.skills.business.map((skill, index) => (
                          <li key={index} className="text-gray-300 flex items-center font-mono">
                            <span className="text-green-400 mr-3">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {t.about.skills.methodologies.map((skill, index) => (
                          <li key={index} className="text-gray-300 flex items-center font-mono">
                            <span className="text-green-400 mr-3">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Stack */}
                <div>
                  <h3 className="text-xl font-medium mb-6 text-white border-b border-gray-800 pb-2">Stack</h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {/* Technical Skills Icons */}
                    {[
                      { name: "React", icon: "⚛️" },
                      { name: "Node.js", icon: "🟢" },
                      { name: "JavaScript", icon: "🟨" },
                      { name: "PostgreSQL", icon: "🐘" },
                      { name: "MongoDB", icon: "🍃" },
                      { name: "AWS", icon: "☁️" },
                      { name: "Docker", icon: "🐳" },
                      { name: "Python", icon: "🐍" },
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}

                    {/* Tools Icons */}
                    {[
                      { name: "JIRA", icon: "📋" },
                      { name: "Figma", icon: "🎨" },
                      { name: "Git", icon: "📚" },
                      { name: "Postman", icon: "📮" },
                      { name: "Tableau", icon: "📊" },
                      { name: "Confluence", icon: "📝" },
                      { name: "Azure", icon: "🔷" },
                      { name: "Redis", icon: "🔴" },
                    ].map((tool, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tool.icon}
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "experience":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-normal mb-8 text-white">
              <TypewriterText text={t.experience.title} speed={100} />
            </h1>
            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <Card key={index} className="bg-black border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-normal text-white mb-2">{job.title}</h3>
                        <p className="text-white font-medium text-lg">{job.company}</p>
                      </div>
                      <div className="text-right text-gray-400">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">
                          Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {job.description.map((desc, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="w-1 h-1 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="w-1 h-1 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "education":
        return (
          <div className="space-y-12">
            <h1 className="text-4xl font-normal mb-8 text-white">
              <TypewriterText text={t.education.title} speed={100} />
            </h1>

            <div className="space-y-8">
              <h2 className="text-2xl font-normal text-white border-b border-gray-800 pb-4">Education</h2>
              {t.education.degrees.map((degree, index) => (
                <Card key={index} className="bg-black border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">{degree.degree}</h3>
                        <p className="text-white font-medium">{degree.institution}</p>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-300 bg-black">
                        {degree.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{degree.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-normal text-white border-b border-gray-800 pb-4">Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.education.certifications.map((cert, index) => (
                  <Card key={index} className="bg-black border-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-white mb-3">{cert.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">{cert.issuer}</p>
                        <Badge variant="outline" className="border-gray-600 text-gray-300 bg-black">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-normal mb-8 text-white">
              <TypewriterText text={t.projects.title} speed={100} />
            </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {t.projects.items.map((project, index) => (
                <Card
                  key={index}
                  className="bg-black border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute top-3 right-3">
                        <Button
                          size="sm"
                          className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-xs"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {t.projects.viewProject}
                        </Button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`text-xs ${
                            project.status === "Live" || project.status === "En Vivo"
                              ? "bg-green-600 text-white"
                              : project.status === "Production" || project.status === "Producción"
                                ? "bg-blue-600 text-white"
                                : "bg-yellow-600 text-black"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-medium text-white mb-2">{project.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 4).map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-gray-900 text-gray-300 border border-gray-800 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge
                                variant="secondary"
                                className="bg-gray-900 text-gray-300 border border-gray-800 text-xs"
                              >
                                +{project.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-white mb-2">Key Results</h4>
                          <ul className="space-y-1">
                            {project.achievements.slice(0, 2).map((achievement, i) => (
                              <li key={i} className="text-gray-400 flex items-start text-xs">
                                <span className="w-1 h-1 bg-white rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Left Sidebar - Fixed */}
      <div className="w-80 bg-black border-r border-gray-800 p-8 fixed left-0 top-0 h-full overflow-y-auto z-10 font-mono">
        <div className="text-center mb-8">
          <Image
            src="/professional-headshot.png"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-2 border-gray-800"
          />
          <h1 className="text-2xl font-normal text-white mb-2">Your Name</h1>
          <p className="text-gray-400 mb-4">{t.sidebar.title}</p>
          <div className="flex items-center justify-center text-gray-400 text-sm mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            {t.sidebar.location}
          </div>
          <Button className="w-full bg-white text-black hover:bg-gray-100 mb-6 font-medium">
            <Download className="w-4 h-4 mr-2" />
            {t.sidebar.downloadCV}
          </Button>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">{t.sidebar.followMe}</h3>
          <div className="space-y-3">
            <Link
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-400 hover:text-white transition-colors w-full p-3 rounded border border-gray-800 hover:border-gray-700"
            >
              <Mail className="w-5 h-5 mr-3" />
              <span className="text-sm">your.email@example.com</span>
            </Link>
            <div className="flex space-x-2">
              <Link
                href="#"
                className="flex-1 p-3 border border-gray-800 hover:border-gray-700 rounded text-gray-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="flex-1 p-3 border border-gray-800 hover:border-gray-700 rounded text-gray-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-full p-3 rounded border border-gray-800/30"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-80 relative z-10">
        {/* Top Navigation - Fully Transparent */}
        <div className="sticky top-0 z-40">
          <div className="px-8 py-6">
            <div className="flex justify-center">
              <div className="rounded-lg p-1 flex space-x-1 border border-gray-800/30">
                {(["about", "experience", "education", "projects"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                    }`}
                  >
                    {t.navigation[tab]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="max-w-6xl">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
