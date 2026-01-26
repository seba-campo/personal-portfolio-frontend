import { projects } from "@/content/homeContent";
import { Link, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function Portfolio() {
    return (
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
                                    <CardTitle className="text-lg text-white font-semibold mb-3">{project.title}</CardTitle>
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
                                        <Badge key={i} variant="outline" className="text-xs bg-white text-black">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Ver proyecto <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
