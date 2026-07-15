import { projects } from "@/content/homeContent";
import { ArrowUpRight } from "lucide-react";
import { styles } from "./Portfolio.styles";

export function Portfolio() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.label.wrap}>
                    <span className={styles.label.index}>[P]</span>
                    <h3 className={styles.label.title}>
                        Portfolio
                    </h3>
                    <div className={styles.label.line} />
                </div>

                <h1 className={styles.heading}>
                    PROYECTOS
                    <span className={styles.headingDot}>.</span>
                </h1>
                <p className={styles.description}>
                    Una selección de mis proyectos personales y experimentos técnicos.
                </p>

                <div className={styles.list}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.item}
                        >
                            <div className={styles.index}>
                                {`0${index + 1}`}
                            </div>

                            <div className={styles.titleCol}>
                                <div className={styles.titleRow}>
                                    <span className={styles.title}>
                                        {project.title}
                                    </span>
                                </div>
                                <span
                                    className={styles.status(project.status === "Completado")}
                                >
                                    {project.status}
                                </span>
                            </div>

                            <div className={styles.descriptionCol}>
                                <p className={styles.itemDescription}>
                                    {project.description}
                                </p>
                                <div className={styles.techWrap}>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={styles.tech}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.arrowCol}>
                                <ArrowUpRight className={styles.arrowIcon} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
