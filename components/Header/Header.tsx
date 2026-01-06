import { useHome } from "@/app/useHome"
import { Github, Link, Linkedin, Mail } from "lucide-react"

export function Header() {
    const { activeSection, setActiveSection } = useHome();

    return (
        <header className="border-b border-gray-800 sticky top-0 bg-gray-950/80 backdrop-blur-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div>
                            <h1 className="text-xl font-semibold">Sebastián Campo</h1>
                            <p className="text-xs text-gray-400">Desarrollador Frontend / Analista Funcional</p>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <button
                                onClick={() => setActiveSection("home")}
                                className={`px-3 py-2 rounded-md text-sm transition-colors ${activeSection === "home" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                Inicio
                            </button>
                            <button
                                onClick={() => setActiveSection("portfolio")}
                                className={`px-3 py-2 rounded-md text-sm transition-colors ${activeSection === "portfolio" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                Portfolio
                            </button>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveSection("contact")
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/seba-campo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/seba-campo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}