import { MapPin, Calendar, Mail, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "../typewriterText";
import { useHome } from "@/app/useHome";
import { skills, stats, technicalProjects } from "@/content/homeContent";

export function Home() {
    const { setActiveSection } = useHome();

    function handleDownloadCv() {
        window.open("https://drive.google.com/file/d/1CYHOYqKEuwLNs5JiUJQZwrTQQVPO0h89/view?usp=sharing");
    }

    return (
        <>
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <TypewriterText text="Sebastián Campo" speed={100} />
                    </h2>
                    <div className="text-xl text-blue-400 mb-6 font-medium">Desarrollador Frontend</div>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Frontend Developer especializado en React y arquitectura escalable, con background en análisis funcional. Me enfoco en performance, UX y decisiones técnicas alineadas a negocio.
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
                        <Button
                            className="bg-white text-black hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleDownloadCv()}>
                            <Download className="w-4 h-4 mr-2" />
                            Descargar CV
                        </Button>
                        <Button
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent cursor-pointer"
                            onClick={() => setActiveSection("portfolio")}
                        >
                            Ver Proyectos
                        </Button>
                    </div>
                </div>
            </section>
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

<p>
Frontend Developer especializado en React y arquitectura escalable, con background en análisis funcional y toma de decisiones orientadas a producto.
</p>

<p>
Me enfoco en liderar el desarrollo de features end-to-end: desde la comprensión del problema de negocio hasta la implementación técnica en producción. Diseño soluciones frontend escalables con foco en performance, experiencia de usuario y mantenibilidad. He trabajado en equipos IT multidisciplinarios, participando activamente en definición de requerimientos, priorización técnica y ejecución en entornos productivos y de alto tráfico.
</p>
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
                                                {skill.level != undefined && (
                                                    <div className="text-xs text-gray-400 self-center">{skill.level}</div>
                                                )}
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
                        <Card
                            className="bg-gray-900 border-gray-800 cursor-pointer"
                            onClick={() => window.open("https://metafar.io/", "_blank")}
                        >
                            <CardContent className="p-6">
                                <div className="text-blue-400 text-2xl mb-4">⚕️</div>
                                <h4 className="text-white font-semibold mb-3">Metafar - Startup Healthech</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Actualmente activo como desarrollador frontend, y anteriormente analista funcional de backoffice para producto de consumo masivo orientado a la compra de medicamentos
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Atlassian
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Jira
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        React
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        C #
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        PostgreSQL
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-gray-900 border-gray-800 cursor-pointer"
                            onClick={() => window.open("https://lepton.com.ar", "_blank")}
                        >
                            <CardContent className="p-6">
                                <div className="text-green-400 text-2xl mb-4">🛠️</div>
                                <h4 className="text-white font-semibold mb-3">Lepton Sistemas</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Realicé desarrollo frontend de aplicaciones web 3d para la industria de amoblamientos, y colaboré con la integracion a diversos ecommerce.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Vanilla Javascript
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        UX/UI
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Integraciones ecommerce
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Jira
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-gray-900 border-gray-800 cursor-pointer"
                            onClick={() => window.open("https://lepton.com.ar", "_blank")}
                        >
                            <CardContent className="p-6">
                                <div className="text-purple-400 text-2xl mb-4">🔩</div>
                                <h4 className="text-white font-semibold mb-3">Lepton Sistemas</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Realicé soporte técnico de sistemas desktop y web para la industria de amoblamientos.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Integraciones CNC
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Supervisor de procesos
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Implementaciones
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Trello
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        Capacitaciones
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
                                className="cursor-pointer bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden group"
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                {project.backgroundImage && (
                                    <>
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={project.backgroundImage}
                                                alt=""
                                                className="w-full h-full object-cover opacity-40 transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-900/85 to-transparent" />
                                    </>
                                )}
                                <CardContent className="p-6 relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`text-3xl ${project.color}`}>{project.icon}</div>
                                        <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                                            {project.year}
                                        </Badge>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-white">{project.name}</h4>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                                    <div className="mb-4">
                                        <div className="text-xs text-gray-500 mb-2">Tipo de proyecto</div>
                                        <Badge className="text-xs bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-0">
                                            {project.type}
                                        </Badge>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-xs text-gray-500 mb-2">Características principales</div>
                                        <div className="flex flex-wrap gap-1">
                                            {project.features.map((feature, i) => (
                                                <span key={i} className="text-xs bg-gray-800/80 backdrop-blur-sm text-gray-300 px-2 py-1 rounded">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-gray-500 mb-2">Stack tecnológico</div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <Badge key={i} variant="outline" className="text-xs border-gray-600 bg-white/90 text-black">
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
                        Contactemos!
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            onClick={() => setActiveSection("contact")}>
                            <Mail className="w-4 h-4 mr-2" />
                            Contactar
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
