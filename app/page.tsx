"use client"

import { useHome } from "./useHome"
import { AnimatedBackground } from "@/components/animatedBackground"

import { Header } from "@/components/Header/Header"
import { Home } from "@/components/Home/Home"
import { Portfolio } from "@/components/Portolio/Portfolio"
import { Contact } from "@/components/Contact/Contact"
import { Footer } from "@/components/Footer/Footer"

//TODO: implementar language selector
type Language = "en" | "es";

export default function SimplePortfolioBlog() {
  const { activeSection } = useHome()

  const renderContent = () => {

    switch (activeSection) {
      case "home":
        fetch("https://mailer-api-qfoh.onrender.com/health");
        return <Home />
      case "portfolio":
        return <Portfolio />
      case "contact":
        fetch("https://mailer-api-qfoh.onrender.com/health");
        return <Contact />
      default:
        return <div>Unknown Section</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10">
        {renderContent()}
      </main>

      <Footer />
    </div>
  )
}
