import { Mail, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useHome } from "@/app/useHome";
import useContact from "./useContact";
import { styles } from "./Contact.styles";

export function Contact() {
    const { setActiveSection } = useHome();
    const { handleSubmit, isLoading, isSuccess, error } = useContact();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.label.wrap}>
                    <span className={styles.label.index}>[C]</span>
                    <h3 className={styles.label.title}>
                        Contacto
                    </h3>
                    <div className={styles.label.line} />
                </div>

                <div className={styles.grid}>
                    <div className={styles.info.col}>
                        <h1 className={styles.info.heading}>
                            HABLEMOS
                            <span className={styles.info.headingDot}>.</span>
                        </h1>
                        <p className={styles.info.description}>
                            ¿Tenés un proyecto en mente o querés colaborar? Enviame un mensaje y te
                            responderé lo antes posible.
                        </p>

                        <div className={styles.info.list}>
                            <a
                                href="https://www.linkedin.com/in/seba-campo"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.info.linkedinLink}
                            >
                                <div>
                                    <div className={styles.info.itemTitle}>
                                        LinkedIn
                                    </div>
                                    <div className={styles.info.itemSubtitle}>
                                        Conectemos profesionalmente
                                    </div>
                                </div>
                                <ArrowUpRight className={styles.info.arrowIcon} />
                            </a>
                            <div className={styles.info.responseRow}>
                                <div>
                                    <div className={styles.info.itemTitle}>
                                        Respuesta
                                    </div>
                                    <div className={styles.info.itemSubtitle}>
                                        Dentro de 24 horas
                                    </div>
                                </div>
                                <span className={styles.info.responseDot} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.form.col}>
                        <form className={styles.form.form} onSubmit={handleSubmit}>
                            <div className={styles.form.row}>
                                <div>
                                    <label htmlFor="name" className={styles.form.label}>
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={styles.form.input}
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={styles.form.label}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className={styles.form.input}
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className={styles.form.label}>
                                    Empresa / Organización
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className={styles.form.input}
                                    placeholder="Nombre de tu empresa (opcional)"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className={styles.form.label}>
                                    Asunto *
                                </label>
                                <div className={styles.form.selectWrap}>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className={styles.form.select}
                                    >
                                        <option value="" disabled={true}>Selecciona un asunto</option>
                                        <option value="contacto">Contacto</option>
                                        <option value="consultoria">Consultoría</option>
                                        <option value="colaboracion">Colaboración</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <ChevronDown className={styles.form.selectIcon} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className={styles.form.label}>
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className={styles.form.textarea}
                                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                                />
                            </div>

                            <div className={styles.form.footerRow}>
                                <div className={styles.form.requiredNote}>
                                    * Campos obligatorios
                                </div>
                                <div className={styles.form.actions}>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className={styles.form.cancelButton}
                                        onClick={() => setActiveSection("home")}
                                        disabled={isLoading}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        className={styles.form.submitButton}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className={styles.form.loadingWrap}>
                                                <svg className={styles.form.spinner} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className={styles.form.spinnerTrack} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className={styles.form.spinnerHead} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </span>
                                        ) : (
                                            <>
                                                <Mail className={styles.form.submitIcon} />
                                                Enviar Mensaje
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                            {isSuccess && (
                                <div className={styles.form.successMessage}>
                                    ¡Mensaje enviado con éxito! Te responderé pronto.
                                </div>
                            )}
                            {error && (
                                <div className={styles.form.errorMessage}>
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
