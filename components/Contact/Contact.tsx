import { Mail, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useHome } from "@/app/useHome";
import useContact from "./useContact";

const inputClass =
    "w-full px-4 py-3 bg-secondary/40 border border-border rounded-none focus:outline-none focus:ring-0 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono text-sm transition-colors";

const labelClass =
    "block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2";

export function Contact() {
    const { setActiveSection } = useHome();
    const { handleSubmit, isLoading, isSuccess, error } = useContact();

    return (
        <section className="px-6 py-20 min-h-[70vh]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="font-mono text-xs text-primary tracking-widest">[C]</span>
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Contacto
                    </h3>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h1 className="font-sans font-bold tracking-tighter text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] mb-6 text-balance">
                            HABLEMOS
                            <span className="text-primary">.</span>
                        </h1>
                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                            ¿Tenés un proyecto en mente o querés colaborar? Enviame un mensaje y te
                            responderé lo antes posible.
                        </p>

                        <div className="border-t border-border">
                            <a
                                href="https://www.linkedin.com/in/seba-campo"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between py-5 border-b border-border hover:text-primary transition-colors"
                            >
                                <div>
                                    <div className="font-mono text-sm font-medium uppercase tracking-wider">
                                        LinkedIn
                                    </div>
                                    <div className="font-mono text-xs text-muted-foreground mt-1">
                                        Conectemos profesionalmente
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <div className="flex items-center justify-between py-5 border-b border-border">
                                <div>
                                    <div className="font-mono text-sm font-medium uppercase tracking-wider">
                                        Respuesta
                                    </div>
                                    <div className="font-mono text-xs text-muted-foreground mt-1">
                                        Dentro de 24 horas
                                    </div>
                                </div>
                                <span className="flex h-2 w-2 bg-primary animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form className="space-y-6 border border-border p-6 md:p-8 bg-card" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className={labelClass}>
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={inputClass}
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelClass}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className={inputClass}
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className={labelClass}>
                                    Empresa / Organización
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className={inputClass}
                                    placeholder="Nombre de tu empresa (opcional)"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className={labelClass}>
                                    Asunto *
                                </label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className={`${inputClass} appearance-none`}
                                    >
                                        <option value="" disabled={true}>Selecciona un asunto</option>
                                        <option value="contacto">Contacto</option>
                                        <option value="consultoria">Consultoría</option>
                                        <option value="colaboracion">Colaboración</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className={`${inputClass} resize-none`}
                                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                                />
                            </div>

                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                    * Campos obligatorios
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="rounded-none border-border text-foreground hover:bg-secondary bg-transparent font-mono text-xs uppercase tracking-widest cursor-pointer"
                                        onClick={() => setActiveSection("home")}
                                        disabled={isLoading}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-mono text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </span>
                                        ) : (
                                            <>
                                                <Mail className="w-4 h-4 mr-2" />
                                                Enviar Mensaje
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                            {isSuccess && (
                                <div className="p-4 border border-primary/30 bg-primary/10 text-primary font-mono text-xs text-center">
                                    ¡Mensaje enviado con éxito! Te responderé pronto.
                                </div>
                            )}
                            {error && (
                                <div className="p-4 border border-destructive/30 bg-destructive/10 text-destructive font-mono text-xs text-center">
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
