"use client"
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Calendar,
  ExternalLink,
  Download,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useHome } from "./useHome"
import { AnimatedBackground } from "@/components/animatedBackground"
import { TypewriterText } from "@/components/typewriterText"
import {
  projects,
  skills,
  stats,
  technicalProjects,
} from "@/content/homeContent"

type Language = "en" | "es"

export default function SimplePortfolioBlog() {
  const { activeSection, setActiveSection } = useHome()

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
                <p className="text-xs text-gray-400">Desarrollador Frontend / Analista Funcional</p>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveSection("home")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${activeSection === "home" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                >
                  Inicio
                </button>
                <button
                  onClick={() => setActiveSection("portfolio")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${activeSection === "portfolio" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                >
                  Portfolio
                </button>
                {/* <button
                  onClick={() => setActiveSection("blog")}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === "blog" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Blog
                </button> */}
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
                <div className="text-xl text-blue-400 mb-6 font-medium">Desarrollador Frontend</div>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Desarrollador frontend con experiencia en análisis funcional y soporte técnico, enfocado en construir soluciones alineadas al negocio y al usuario.
                  Trabajo en productos reales, integrando interfaces, flujos y APIs dentro de equipos multidisciplinarios.
                  Actualmente busco evolucionar hacia un perfil fullstack, participando en soluciones end-to-end.
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
                      <p>Soy desarrollador frontend con experiencia en análisis funcional y soporte técnico, esto me permite comprender sistemas desde su uso real hasta su implementación técnica.</p>

                      <p>Disfruto analizar y resolver problemas, pensar soluciones escalables y acompañar su implementación con foco en la experiencia del usuario y la eficiencia. Actualmente formo parte del equipo de IT en Farmatouch, donde colaboro en el desarrollo de productos digitales de la industria farmacéutica. Mi objetivo es continuar creciendo hacia un perfil fullstack, ampliando mi impacto técnico en soluciones end-to-end.</p>
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
                      <h4 className="text-white font-semibold mb-3">Metafar - Startup Healthech</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Llevé a cabo análisis crossplatform para producto de consumo masivo orientado a la compra de medicamentos
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Atlassian
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          C #
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          PostgreSQL
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          React
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="text-green-400 text-2xl mb-4">🏢</div>
                      <h4 className="text-white font-semibold mb-3">Empresa Corporativa</h4>
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
                      <h4 className="text-white font-semibold mb-3">Consultoría Tech</h4>
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
          </section>)
          : activeSection === "contact" ? (
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
