"use client"

import { useState, useEffect } from "react"
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Calendar,
  ExternalLink,
  ArrowRight,
  Download,
  Code,
  Database,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Language = "en" | "es"
type ActiveTab = "home" | "portfolio" | "blog" | "contact"

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
]

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
]

const skills = [
  { name: "Análisis de Requisitos", icon: "📋", level: "Experto" },
  { name: "React & Node.js", icon: "⚛️", level: "Avanzado" },
  { name: "PostgreSQL", icon: "🐘", level: "Avanzado" },
  { name: "Docker", icon: "🐳", level: "Intermedio" },
  { name: "Scrum & Agile", icon: "🔄", level: "Experto" },
  { name: "API Design", icon: "🔗", level: "Avanzado" },
]

const stats = [
  { label: "Años de experiencia", value: "4+", icon: Calendar },
  { label: "Proyectos completados", value: "15", icon: Code },
  { label: "Equipos liderados", value: "3", icon: Users },
  { label: "APIs diseñadas", value: "10", icon: Database },
]

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
]

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

export default function SimplePortfolioBlog() {
const [activeSection, setActiveSection] = useState<"home" | "portfolio" | "blog" | "contact">("home")

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AnimatedBackground />

      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div>
                <h1 className="text-xl font-semibold">Sebastián Campo</h1>
                <p className="text-xs text-gray-400">Analista Funcional</p>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveSection("home")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === "home" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Inicio
                </button>
                <button
                  onClick={() => setActiveSection("portfolio")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === "portfolio" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveSection("blog")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === "blog" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Blog
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection("contact")
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/seba-campo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/seba-campo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {activeSection === "home" ? (
          <>
            {/* Hero Section */}
            <section className="py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  <TypewriterText text="Sebastián Campo" speed={100} />
                </h2>
                <div className="text-xl text-blue-400 mb-6 font-medium">Analista Funcional Semi Senior</div>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Especialista en análisis de requisitos y diseño de soluciones técnicas. Transformo ideas de negocio en
                  productos digitales escalables que impactan a miles de usuarios.
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Olivos, Buenos Aires
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Disponible para proyectos
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button className="bg-white text-black hover:bg-gray-200">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar CV
                  </Button>
                  <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      onClick={() => setActiveSection("portfolio")}
                      >
                    Ver Proyectos
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-gray-900/50">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        <stat.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Sobre Mí</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>👋 Hola, soy Seba.</p>
                      <p>Hace más de 4 años me dedico al análisis funcional y al diseño de soluciones digitales, uniendo negocio y tecnología. Me interesa cómo la lógica y la programación pueden mejorar procesos y transformar la forma en que los equipos trabajan.</p>

                      <p>Disfruto relevar necesidades, pensar soluciones escalables y acompañar su implementación con foco en la experiencia del usuario y la eficiencia. Actualmente soy Analista Funcional en Farmatouch, donde ayudo a optimizar productos digitales para la gestión de farmacias.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-6">Habilidades Principales</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{skill.icon}</span>
                            <div>
                              <div className="font-medium text-white">{skill.name}</div>
                              <div className="text-xs text-gray-400">{skill.level}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Highlights */}
            <section className="py-16 px-6 bg-gray-900/30">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center">Experiencia Destacada</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="text-blue-400 text-2xl mb-4">🚀</div>
                      <h4 className="text-lg font-semibold mb-3">Startup Fintech</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Lideré el análisis y diseño de una plataforma de pagos que procesó más de $2M en transacciones
                        durante su primer año.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          React
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Node.js
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          PostgreSQL
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="text-green-400 text-2xl mb-4">🏢</div>
                      <h4 className="text-lg font-semibold mb-3">Empresa Corporativa</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Optimicé procesos internos mediante la implementación de un CRM personalizado, reduciendo
                        tiempos de respuesta en un 40%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Vue.js
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          MongoDB
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="text-purple-400 text-2xl mb-4">🔧</div>
                      <h4 className="text-lg font-semibold mb-3">Consultoría Tech</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Diseñé la arquitectura de microservicios para una plataforma de e-commerce que maneja 50K+
                        usuarios concurrentes.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          FastAPI
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Docker
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Redis
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Technical Projects Section */}
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Proyectos Técnicos Desarrollados</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Aplicaciones y sistemas que he programado desde cero, desde APIs hasta herramientas de
                    automatización
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicalProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`text-3xl ${project.color}`}>{project.icon}</div>
                          <Badge variant="outline" className="text-xs">
                            {project.year}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-white">{project.name}</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-2">Tipo de proyecto</div>
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-2">Características principales</div>
                          <div className="flex flex-wrap gap-1">
                            {project.features.map((feature, i) => (
                              <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500 mb-2">Stack tecnológico</div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs border-gray-600">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">¿Tienes un proyecto en mente?</h3>
                <p className="text-xl text-gray-400 mb-8">
                  Estoy disponible para colaborar en proyectos desafiantes que requieran análisis funcional y diseño de
                  soluciones técnicas innovadoras.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => setActiveSection("contact")}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contactar
                  </Button>
                </div>
              </div>
            </section>
          </>
        ) : activeSection === "portfolio" ? (
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-4">Proyectos Destacados</h3>
                <p className="text-gray-400">
                  Una selección de proyectos personales desarrollados en mi camino autodidacta.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge
                          variant={project.status === "Completado" ? "default" : "secondary"}
                          className={project.status === "Completado" ? "bg-green-600" : "bg-yellow-600"}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-400 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Ver proyecto <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : activeSection === "blog" ? (
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-4">Blog</h3>
                <p className="text-gray-400">Aquí encontrarás mis notas y pensamientos que quiero registrar de mi aprendizaje.</p>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                            <span>{post.readTime} lectura</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold hover:text-gray-200 transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <button className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            Leer más <ArrowRight className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : activeSection === "contact" ? (
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Contacto</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje y te responderé lo antes posible.
                </p>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Nombre de tu empresa (opcional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="proyecto">Nuevo Proyecto</option>
                        <option value="consultoria">Consultoría</option>
                        <option value="colaboracion">Colaboración</option>
                        <option value="mentoria">Mentoría</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                        placeholder="Cuéntame sobre tu proyecto o consulta..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">* Campos obligatorios</div>
                      <div className="flex space-x-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                          onClick={() => setActiveSection("home")}
                        >
                          Cancelar
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          <Mail className="w-4 h-4 mr-2" />
                          Enviar Mensaje
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-blue-400 text-2xl">📧</div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">tu@email.com</p>
                </div>
                <div className="space-y-2">
                  <div className="text-green-400 text-2xl">💼</div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">Conectemos profesionalmente</p>
                </div>
                <div className="space-y-2">
                  <div className="text-purple-400 text-2xl">⚡</div>
                  <h4 className="font-semibold">Respuesta</h4>
                  <p className="text-gray-400 text-sm">Dentro de 24 horas</p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>Unknown Section</div> 
        )}      
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Sebastián Campo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
