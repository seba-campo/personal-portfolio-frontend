import { projects } from "@/content/homeContent";
import { ExternalLink, BookMarked } from "lucide-react";
import { Badge } from "../ui/badge";

export function Portfolio() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-4">Proyectos Destacados</h3>
                    <p className="text-gray-400">
                        Una selección de mis proyectos personales.
                    </p>
                </div>

                <div className="border border-gray-800 rounded-lg overflow-hidden">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-4 px-5 py-4 hover:bg-gray-900/60 transition-colors ${
                                index !== projects.length - 1 ? "border-b border-gray-800" : ""
                            }`}
                        >
                            <BookMarked className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 flex-wrap mb-1">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="font-semibold text-blue-400 hover:underline text-sm leading-tight"
                                    >
                                        {project.title}
                                    </a>
                                    <Badge
                                        variant="outline"
                                        className={`text-xs px-2 py-0 h-5 border rounded-full ${
                                            project.status === "Completado"
                                                ? "border-green-700 text-green-400"
                                                : "border-yellow-700 text-yellow-400"
                                        }`}
                                    >
                                        {project.status}
                                    </Badge>
                                </div>

                                <p className="text-gray-400 text-sm mb-2 leading-snug">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                className="text-gray-600 hover:text-gray-300 transition-colors shrink-0 mt-0.5"
                                aria-label={`Ver ${project.title}`}
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
