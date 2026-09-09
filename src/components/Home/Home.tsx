import { MapPin, Calendar, Mail, Download, ArrowUpRight, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useHome } from "@/app/useHome";
import { skills, stats, technicalProjects } from "@/content/homeContent";
import { styles } from "./Home.styles";

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
        <div className={styles.sectionLabel.wrapper}>
            <span className={styles.sectionLabel.index}>[{index}]</span>
            <h3 className={styles.sectionLabel.title}>{title}</h3>
            <div className={styles.sectionLabel.line} />
        </div>
    );
}

export function Home() {
    const { setActiveSection } = useHome();

    function handleDownloadCv() {
        window.open("/cv-sebastian-campo.pdf", "_blank");
    }

    return (
        <>
            {/* ===== HERO ===== */}
            <section className={styles.hero.section}>
                <div className={styles.hero.container}>
                    <div className={styles.hero.badgeWrap}>
                        <span className={styles.hero.badgeDot} />
                        <span className={styles.hero.badgeText}>Disponible para proyectos</span>
                    </div>

                    <h1 className={styles.hero.title}>
                        SEBASTIÁN
                        <br />
                        <span className={styles.hero.titleSub}>CAMPO</span>
                        <span className={styles.hero.titleDot}>.</span>
                    </h1>

                    <div className={styles.hero.row}>
                        <p className={styles.hero.description}>
                            Frontend Developer especializado en{" "}
                            <span className={styles.hero.descriptionHighlight}>React</span> y arquitectura escalable, con
                            background en análisis funcional. Construyo features end-to-end con foco en{" "}
                            <span className={styles.hero.descriptionHighlight}>performance</span>,{" "}
                            <span className={styles.hero.descriptionHighlight}>UX</span> y decisiones técnicas alineadas a negocio.
                        </p>

                        <div className={styles.hero.infoWrap}>
                            <div className={styles.hero.infoList}>
                                <div className={styles.hero.infoItem}>
                                    <MapPin className={styles.hero.infoIcon} />
                                    Olivos, Buenos Aires — AR
                                </div>
                                <div className={styles.hero.infoItem}>
                                    <Calendar className={styles.hero.infoIcon} />
                                    +5 años en IT, producto y sistemas
                                </div>
                            </div>
                            <div className={styles.hero.buttonsWrap}>
                                <Button
                                    className={styles.hero.downloadButton}
                                    onClick={handleDownloadCv}
                                >
                                    <Download className={styles.hero.downloadIcon} />
                                    Descargar CV
                                </Button>
                                <Button
                                    variant="outline"
                                    className={styles.hero.portfolioButton}
                                    onClick={() => setActiveSection("portfolio")}
                                >
                                    Ver Proyectos
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.hero.scrollWrap}>
                        <ArrowDown className={styles.hero.scrollIcon} />
                        <span className={styles.hero.scrollText}>Scroll</span>
                    </div>
                </div>
            </section>

            {/* ===== TECH MARQUEE ===== */}
            <section className={styles.marquee.section}>
                <div className={styles.marquee.track}>
                    <div className={styles.marquee.group}>
                        {[...marqueeTech, ...marqueeTech].map((tech, i) => (
                            <span key={i} className={styles.marquee.item}>
                                <span className={styles.marquee.itemText}>{tech}</span>
                                <span className={styles.marquee.itemSlash}>/</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className={styles.stats.section}>
                <div className={styles.stats.grid}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={styles.stats.card}
                        >
                            <div className={styles.stats.cardHeader}>
                                <stat.icon className={styles.stats.cardIcon} />
                                <span className={styles.stats.cardIndex}>{`0${index + 1}`}</span>
                            </div>
                            <div className={styles.stats.cardValue}>
                                {stat.value}
                            </div>
                            <div className={styles.stats.cardLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className={styles.about.section}>
                <div className={styles.about.container}>
                    <SectionLabel index="01" title="Sobre mí" />
                    <div className={styles.about.grid}>
                        <div className={styles.about.textCol}>
                            <p className={styles.about.lead}>
                                Hola, soy Seba. Diseño soluciones frontend escalables, desde el problema
                                de negocio hasta la implementación en producción.
                            </p>
                            <div className={styles.about.paragraphs}>
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

                        <div className={styles.about.skillsCol}>
                            <div className={styles.about.skillsList}>
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={styles.about.skillItem}
                                    >
                                        <span className={styles.about.skillIndex}>{`0${index + 1}`}</span>
                                        <span className={styles.about.skillName}>
                                            {skill.name}
                                        </span>
                                        {skill.level != undefined && (
                                            <span className={styles.about.skillLevel}>
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
            <section className={styles.experience.section}>
                <div className={styles.experience.container}>
                    <SectionLabel index="02" title="Experiencia" />
                    <div className={styles.experience.list}>
                        {experience.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => window.open(exp.link, "_blank")}
                                className={styles.experience.item}
                            >
                                <div className={styles.experience.colLeft}>
                                    <div className={styles.experience.company}>
                                        {exp.company}
                                    </div>
                                    <div className={styles.experience.period}>
                                        {exp.period}
                                    </div>
                                </div>
                                <div className={styles.experience.colMid}>
                                    <div className={styles.experience.role}>{exp.role}</div>
                                    <div className={styles.experience.meta}>
                                        {exp.meta}
                                    </div>
                                    <p className={styles.experience.description}>{exp.description}</p>
                                    <div className={styles.experience.tagsWrap}>
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={styles.experience.tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.experience.colRight}>
                                    <ArrowUpRight className={styles.experience.arrowIcon} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECHNICAL PROJECTS ===== */}
            <section className={styles.projects.section}>
                <div className={styles.projects.container}>
                    <SectionLabel index="03" title="Proyectos técnicos" />
                    <div className={styles.projects.grid}>
                        {technicalProjects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => window.open(project.link, "_blank")}
                                className={styles.projects.card}
                            >
                                {project.backgroundImage && (
                                    <div className={styles.projects.imageWrap}>
                                        <img
                                            src={project.backgroundImage || "/placeholder.svg"}
                                            alt=""
                                            className={styles.projects.image}
                                        />
                                        <div className={styles.projects.imageGradient} />
                                    </div>
                                )}
                                <div className={styles.projects.content}>
                                    <div className={styles.projects.header}>
                                        <div className={styles.projects.icon}>{project.icon}</div>
                                        <div className={styles.projects.badgesWrap}>
                                            {project.badge && (
                                                <span className={styles.projects.badge}>
                                                    {project.badge}
                                                </span>
                                            )}
                                            <span className={styles.projects.yearBadge}>
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className={styles.projects.title}>
                                        {project.name}
                                    </h4>
                                    <p className={styles.projects.description}>
                                        {project.description}
                                    </p>

                                    <div className={styles.projects.typeWrap}>
                                        <div className={styles.projects.typeLabel}>
                                            {project.type}
                                        </div>
                                        <div className={styles.projects.techWrap}>
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={styles.projects.tech}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.projects.footer}>
                                        <span className={styles.projects.footerText}>Ver proyecto</span>
                                        <ArrowUpRight className={styles.projects.footerIcon} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className={styles.cta.section}>
                <div className={styles.cta.container}>
                    <div className={styles.cta.wrap}>
                        <h3 className={styles.cta.title}>
                            ¿Tenés un proyecto
                            <br />
                            <span className={styles.cta.titleSub}>en mente</span>
                            <span className={styles.cta.titleDot}>?</span>
                        </h3>
                        <Button
                            className={styles.cta.button}
                            onClick={() => setActiveSection("contact")}
                        >
                            <Mail className={styles.cta.buttonIcon} />
                            Hablemos
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
