import { useState, useEffect } from "react"

export type ActiveTab = "home" | "portfolio" | "blog" | "contact"

export const useHome = () => {
    const [activeSection, setActiveSection] = useState<ActiveTab>("home")

    return {
        activeSection,
        setActiveSection
    }
}
