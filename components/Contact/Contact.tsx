import { Mail, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useHome } from "@/app/useHome";
import useContact from "./useContact";

export function Contact() {
    const { setActiveSection } = useHome();
    const { handleSubmit, isLoading, isSuccess, error } = useContact();

    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Contacto</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje y te responderé lo antes posible.
                    </p>
                </div>

                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="
                                            w-full
                                            px-4 py-3
                                            bg-gray-800
                                            border border-gray-700
                                            rounded-lg
                                            focus:outline-none
                                            focus:ring-0
                                            focus:border-gray-500
                                            text-white
                                            placeholder-gray-400"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-500 text-white placeholder-gray-400"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                    Empresa / Organización
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-500 text-white placeholder-gray-400"
                                    placeholder="Nombre de tu empresa (opcional)"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Asunto *
                                </label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-500 text-white appearance-none"
                                    >
                                        <option value="" disabled={true}>Selecciona un asunto</option>
                                        <option value="contacto">Contacto</option>
                                        <option value="consultoria">Consultoría</option>
                                        <option value="colaboracion">Colaboración</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-500 text-white placeholder-gray-400 resize-none"
                                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-400">* Campos obligatorios</div>
                                <div className="flex space-x-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="
                                            cursor-pointer
                                            border-gray-600
                                            text-gray-300 
                                            hover:bg-gray-800 
                                            hover:text-white
                                            bg-transparent
                                        "
                                        onClick={() => setActiveSection("home")}
                                        disabled={isLoading}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="
                                            cursor-pointer
                                            bg-blue-600
                                            hover:bg-blue-700
                                            disabled:opacity-50
                                            disabled:cursor-not-allowed
                                        "
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center">
                                    ¡Mensaje enviado con éxito! Te responderé pronto.
                                </div>
                            )}
                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center">
                                    {error}
                                </div>
                            )}
                        </form>
                    </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
                    <div className="space-y-2">
                        <a href="https://www.linkedin.com/in/seba-campo" target="_blank" className="block space-y-2">
                            <div className="text-green-400 text-2xl">💼</div>
                            <h4 className="font-semibold">LinkedIn</h4>
                            <p className="text-gray-400 text-sm">Conectemos profesionalmente</p>
                        </a>
                    </div>
                    <div className="space-y-2">
                        <div className="text-purple-400 text-2xl">⚡</div>
                        <h4 className="font-semibold">Respuesta</h4>
                        <p className="text-gray-400 text-sm">Dentro de 24 horas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
