import { useHome } from "@/app/useHome"
import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
    const { activeSection, setActiveSection } = useHome();

    const navItems = [
        { id: "home", label: "Inicio", index: "01" },
        { id: "portfolio", label: "Portfolio", index: "02" },
    ] as const;

    return (
        <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => setActiveSection("home")}
                        className="group flex items-center gap-3 cursor-pointer"
                    >
                        <span className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-mono text-sm font-bold">
                            SC
                        </span>
                        <span className="hidden sm:flex flex-col items-start leading-none">
                            <span className="font-mono text-sm font-semibold tracking-tight">sebastian_campo</span>
                            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                                frontend · analista
                            </span>
                        </span>
                    </button>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`group cursor-pointer px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                                        activeSection === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <span className="text-primary">[{item.index}]</span> {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className="hidden md:block h-5 w-px bg-border" />

                        <div className="flex items-center gap-1">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setActiveSection("contact")
                                }}
                                className="flex h-9 w-9 items-center justify-center border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                                aria-label="Contacto"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/seba-campo"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com/in/seba-campo"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
