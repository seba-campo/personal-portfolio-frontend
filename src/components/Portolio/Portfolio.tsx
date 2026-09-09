import { useState } from "react";
import { projects, certificates } from "@/content/homeContent";
import { ArrowUpRight, Award, X } from "lucide-react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { styles } from "./Portfolio.styles";

export function Portfolio() {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <>
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

                <div className={styles.certSectionLabelWrap}>
                    <span className={styles.label.index}>[C]</span>
                    <h3 className={styles.label.title}>
                        Certificaciones
                    </h3>
                    <div className={styles.label.line} />
                </div>

               <h1 className={styles.heading}>
                    CERTIFICACIONES
                    <span className={styles.headingDot}>.</span>
                </h1>
                <p className={styles.description}>
                    Certificaciones y capacitaciones que respaldan mi formación técnica.
                </p>

                <div className={styles.list}>
                    {certificates.map((certificate, index) => {
                        const images = certificate.images ?? [];
                        const hasImages = images.length > 0;
                        const hasCredentialUrl = Boolean(certificate.credentialUrl);

                        return (
                            <div key={index} className={styles.certItem}>
                                <div className={styles.certIndex}>
                                    {`0${index + 1}`}
                                </div>

                                <div className={styles.certTitleCol}>
                                    <span className={styles.certTitle}>
                                        {certificate.title}
                                    </span>
                                    <br />
                                    <span className={styles.certIssuer}>
                                        {certificate.issuer}
                                    </span>
                                    {certificate.status && (
                                        <span className={styles.certStatus}>
                                            {certificate.status}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.certDateCol}>
                                    <span className={styles.certDate}>
                                        {certificate.date}
                                    </span>
                                </div>

                                <div className={styles.certImagesCol}>
                                    {hasImages ? (
                                        <div className={styles.certImagesWrap}>
                                            {images.map((image, imageIndex) => (
                                                <button
                                                    key={imageIndex}
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setLightboxImage(image);
                                                    }}
                                                    className={styles.certImageThumb}
                                                    aria-label={`Ver archivo ${imageIndex + 1} de ${certificate.title}`}
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`${certificate.title} — archivo ${imageIndex + 1}`}
                                                        fill
                                                        sizes="36px"
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    ) : !hasCredentialUrl && (
                                        <Award className={styles.certStaticIcon} />
                                    )}
                                </div>

                                <div className={styles.certArrowCol}>
                                    {hasCredentialUrl && (
                                        <a
                                            href={certificate.credentialUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.certCredentialLink}
                                            aria-label={`Ver credencial de ${certificate.title}`}
                                        >
                                            <ArrowUpRight className={styles.certLinkIcon} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        <Dialog.Root
            open={lightboxImage !== null}
            onOpenChange={(open) => {
                if (!open) setLightboxImage(null);
            }}
        >
            <Dialog.Portal>
                <Dialog.Overlay className={styles.lightbox.overlay} />
                <Dialog.Content
                    className={styles.lightbox.content}
                    aria-describedby={undefined}
                >
                    <Dialog.Title className={styles.lightbox.srOnly}>
                        Certificado ampliado
                    </Dialog.Title>
                    <Dialog.Close className={styles.lightbox.close} aria-label="Cerrar">
                        <X className="w-5 h-5" />
                    </Dialog.Close>
                    {lightboxImage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={lightboxImage}
                            alt="Certificado ampliado"
                            className={styles.lightbox.image}
                        />
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        </>
    );
}
