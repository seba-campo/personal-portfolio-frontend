import { MapPin, Calendar, Mail, Download, ArrowUpRight, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useHome } from "@/app/useHome";
import { skills, stats, technicalProjects } from "@/content/homeContent";

const marqueeTech = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS",
    "Firebase", "Análisis Funcional", "Product Thinking", "UX/UI", "C#", ".NET",
];

const experience = [
    {
        company: "Metafar",
        role: "Frontend Developer / Analista Funcional",
        meta: "Startup Healthtech",
        description:
            "Actualmente activo como desarrollador frontend, y anteriormente analista funcional de backoffice para un producto de consumo masivo orientado a la compra de medicamentos.",
        tags: ["Atlassian", "Jira", "React", "C#", "PostgreSQL"],
        link: "https://metafar.io/",
        period: "Actual",
    },
    {
        company: "Lepton Sistemas",
        role: "Frontend Developer",
        meta: "Software industrial",
        description:
            "Desarrollo frontend de aplicaciones web 3D para la industria de amoblamientos, y colaboración en la integración con diversos ecommerce.",
        tags: ["Vanilla JS", "UX/UI", "Integraciones ecommerce", "Jira"],
        link: "https://lepton.com.ar",
        period: "Previo",
    },
    {
        company: "Lepton Sistemas",
        role: "Soporte Técnico",
        meta: "Sistemas desktop & web",
        description:
            "Soporte técnico de sistemas desktop y web para la industria de amoblamientos, con foco en implementaciones y capacitaciones.",
        tags: ["Integraciones CNC", "Supervisión de procesos", "Implementaciones", "Trello"],
        link: "https://lepton.com.ar",
        period: "Previo",
    },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-primary tracking-widest">[{index}]</span>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{title}</h3>
            <div className="h-px flex-1 bg-border" />
        </div>
    );
}

export function Home() {
    const { setActiveSection } = useHome();

    function handleDownloadCv() {
        window.open("https://drive.google.com/file/d/1CYHOYqKEuwLNs5JiUJQZwrTQQVPO0h89/view?usp=sharing");
    }

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 font-mono text-xs text-muted-foreground reveal-up">
                        <span className="flex h-2 w-2 bg-primary animate-pulse" />
                        <span className="tracking-widest uppercase">Disponible para proyectos</span>
                    </div>

                    <h1 className="font-sans font-bold tracking-tighter text-[clamp(2.75rem,11vw,8.5rem)] leading-[0.88] text-balance reveal-up">
                        SEBASTIÁN
                        <br />
                        <span className="text-muted-foreground">CAMPO</span>
                        <span className="text-primary">.</span>
                    </h1>

                    <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
                        <p className="md:col-span-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Frontend Developer especializado en{" "}
                            <span className="text-foreground">React</span> y arquitectura escalable, con
                            background en análisis funcional. Construyo features end-to-end con foco en{" "}
                            <span className="text-foreground">performance</span>,{" "}
                            <span className="text-foreground">UX</span> y decisiones técnicas alineadas a negocio.
                        </p>

                        <div className="md:col-span-5 md:justify-self-end w-full md:w-auto">
                            <div className="flex flex-col gap-3 font-mono text-xs">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    Olivos, Buenos Aires — AR
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    +5 años en IT, producto y sistemas
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6">
                                <Button
                                    className="rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-mono text-xs uppercase tracking-widest cursor-pointer"
                                    onClick={handleDownloadCv}
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar CV
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-none border-border bg-transparent text-foreground hover:bg-secondary font-mono text-xs uppercase tracking-widest cursor-pointer"
                                    onClick={() => setActiveSection("portfolio")}
                                >
                                    Ver Proyectos
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                        <span className="tracking-widest uppercase">Scroll</span>
                    </div>
                </div>
            </section>

            {/* ===== TECH MARQUEE ===== */}
            <section className="border-b border-border overflow-hidden bg-secondary/30">
                <div className="flex whitespace-nowrap py-4">
                    <div className="flex animate-marquee shrink-0">
                        {[...marqueeTech, ...marqueeTech].map((tech, i) => (
                            <span key={i} className="flex items-center font-mono text-sm text-muted-foreground">
                                <span className="px-6 uppercase tracking-widest">{tech}</span>
                                <span className="text-primary">/</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="px-6 py-16 border-b border-border">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group p-6 border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(-n+2)]:border-b [&:nth-child(-n+2)]:md:border-b-0 border-border"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <stat.icon className="w-5 h-5 text-primary" />
                                <span className="font-mono text-[10px] text-muted-foreground">{`0${index + 1}`}</span>
                            </div>
                            <div className="font-sans text-5xl font-bold tracking-tighter mb-3 group-hover:text-primary transition-colors">
                                {stat.value}
                            </div>
                            <div className="font-mono text-xs text-muted-foreground leading-snug">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="px-6 py-20 border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <SectionLabel index="01" title="Sobre mí" />
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-7">
                            <p className="font-sans text-2xl md:text-3xl font-medium tracking-tight leading-snug text-balance mb-8">
                                Hola, soy Seba. Diseño soluciones frontend escalables, desde el problema
                                de negocio hasta la implementación en producción.
                            </p>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Me enfoco en liderar el desarrollo de features end-to-end: desde la comprensión
                                    del problema de negocio hasta la implementación técnica en producción, con foco en
                                    performance, experiencia de usuario y mantenibilidad.
                                </p>
                                <p>
                                    He trabajado en equipos IT multidisciplinarios, participando activamente en la
                                    definición de requerimientos, priorización técnica y ejecución en entornos
                                    productivos y de alto tráfico.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="border-t border-border">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-4 py-4 border-b border-border"
                                    >
                                        <span className="font-mono text-[10px] text-primary w-6">{`0${index + 1}`}</span>
                                        <span className="font-mono text-sm font-medium uppercase tracking-wider w-40 shrink-0 group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </span>
                                        {skill.level != undefined && (
                                            <span className="font-mono text-xs text-muted-foreground leading-snug">
                                                {skill.level}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXPERIENCE ===== */}
            <section className="px-6 py-20 border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <SectionLabel index="02" title="Experiencia" />
                    <div className="border-t border-border">
                        {experience.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => window.open(exp.link, "_blank")}
                                className="group w-full text-left grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border hover:bg-secondary/40 transition-colors px-2 -mx-2 cursor-pointer"
                            >
                                <div className="md:col-span-3 flex items-start justify-between md:block">
                                    <div className="font-sans text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                        {exp.company}
                                    </div>
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                    <div className="font-mono text-sm text-foreground mb-1">{exp.role}</div>
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                                        {exp.meta}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-3 flex md:justify-end items-start">
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECHNICAL PROJECTS ===== */}
            <section className="px-6 py-20 border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <SectionLabel index="03" title="Proyectos técnicos" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
                        {technicalProjects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => window.open(project.link, "_blank")}
                                className="group relative text-left border-r border-b border-border overflow-hidden cursor-pointer min-h-[22rem] flex flex-col"
                            >
                                {project.backgroundImage && (
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={project.backgroundImage || "/placeholder.svg"}
                                            alt=""
                                            className="w-full h-full object-cover opacity-20 grayscale transition-all duration-500 group-hover:opacity-30 group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                                    </div>
                                )}
                                <div className="relative z-10 flex flex-col h-full p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="text-primary text-2xl">{project.icon}</div>
                                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                                            {project.badge && (
                                                <span className="text-primary border border-primary/40 px-2 py-1">
                                                    {project.badge}
                                                </span>
                                            )}
                                            <span className="text-muted-foreground border border-border px-2 py-1">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="font-sans text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                            {project.type}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="font-mono text-[10px] uppercase tracking-wider text-foreground border border-border px-2 py-0.5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                        <span className="uppercase tracking-widest">Ver proyecto</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-start gap-8">
                        <h3 className="font-sans font-bold tracking-tighter text-[clamp(2.25rem,8vw,6rem)] leading-[0.9] text-balance">
                            ¿Tenés un proyecto
                            <br />
                            <span className="text-muted-foreground">en mente</span>
                            <span className="text-primary">?</span>
                        </h3>
                        <Button
                            className="rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-mono text-sm uppercase tracking-widest h-14 px-8 cursor-pointer"
                            onClick={() => setActiveSection("contact")}
                        >
                            <Mail className="w-4 h-4 mr-3" />
                            Hablemos
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
