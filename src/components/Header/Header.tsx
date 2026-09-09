import { useHome } from "@/app/useHome"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/themeToggle"
import { styles } from "./Header.styles"

export function Header() {
    const { activeSection, setActiveSection } = useHome();

    const navItems = [
        { id: "home", label: "Inicio", index: "01" },
        { id: "portfolio", label: "Portfolio", index: "02" },
    ] as const;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <button
                        onClick={() => setActiveSection("home")}
                        className={styles.logo.button}
                    >
                        <span className={styles.logo.mark}>
                            SC
                        </span>
                        <span className={styles.logo.textWrap}>
                            <span className={styles.logo.name}>sebastian_campo</span>
                            <span className={styles.logo.role}>
                                frontend · analista
                            </span>
                        </span>
                    </button>

                    <div className={styles.actionsWrap}>
                        <nav className={styles.nav.wrap}>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={styles.nav.link(activeSection === item.id)}
                                >
                                    <span className={styles.nav.linkIndex}>[{item.index}]</span> {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className={styles.divider} />

                        <div className={styles.social.wrap}>
                            <ThemeToggle />
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setActiveSection("contact")
                                }}
                                className={styles.social.link}
                                aria-label="Contacto"
                            >
                                <Mail className={styles.social.icon} />
                            </a>
                            <a
                                href="https://github.com/seba-campo"
                                target="_blank"
                                className={styles.social.link}
                                aria-label="GitHub"
                            >
                                <Github className={styles.social.icon} />
                            </a>
                            <a
                                href="https://linkedin.com/in/seba-campo"
                                target="_blank"
                                className={styles.social.link}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className={styles.social.icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
