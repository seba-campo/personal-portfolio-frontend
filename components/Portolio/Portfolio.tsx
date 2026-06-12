import { projects } from "@/content/homeContent";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
    return (
        <section className="px-6 py-20 min-h-[70vh]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="font-mono text-xs text-primary tracking-widest">[P]</span>
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Portfolio
                    </h3>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <h1 className="font-sans font-bold tracking-tighter text-[clamp(2.5rem,9vw,7rem)] leading-[0.9] mb-4 text-balance">
                    PROYECTOS
                    <span className="text-primary">.</span>
                </h1>
                <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
                    Una selección de mis proyectos personales y experimentos técnicos.
                </p>

                <div className="border-t border-border">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group grid md:grid-cols-12 gap-4 md:gap-8 items-start py-7 border-b border-border hover:bg-secondary/40 transition-colors px-2 -mx-2"
                        >
                            <div className="md:col-span-1 font-mono text-xs text-primary pt-1">
                                {`0${index + 1}`}
                            </div>

                            <div className="md:col-span-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-sans text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </span>
                                </div>
                                <span
                                    className={`inline-block mt-2 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                                        project.status === "Completado"
                                            ? "border-border text-muted-foreground"
                                            : "border-primary/40 text-primary"
                                    }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            <div className="md:col-span-5">
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2 flex md:justify-end items-start">
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
