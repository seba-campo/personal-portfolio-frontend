"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = resolvedTheme === "dark"

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
        >
            {mounted ? (
                isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
            ) : (
                <span className="w-4 h-4" />
            )}
        </button>
    )
}
