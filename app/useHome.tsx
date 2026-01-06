"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

export type ActiveTab = "home" | "portfolio" | "blog" | "contact"

interface HomeContextType {
    activeSection: ActiveTab
    setActiveSection: (section: ActiveTab) => void
}

const HomeContext = createContext<HomeContextType | undefined>(undefined)

export const HomeProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<ActiveTab>("home")

    return (
        <HomeContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHome = () => {
    const context = useContext(HomeContext)
    if (context === undefined) {
        throw new Error("useHome must be used within a HomeProvider")
    }
    return context
}
