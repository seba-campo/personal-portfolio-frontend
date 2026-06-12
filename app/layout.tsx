import type React from "react"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import "./globals.css"
import { HomeProvider } from "./useHome"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Sebastián Campo",
  description:
    "Desarrollador frontend con experiencia en análisis funcional y soporte técnico. Portfolio profesional, proyectos y blog técnico.",
  keywords: [
    "Sebastián Campo",
    "Desarrollador Frontend",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Analista Funcional",
    "Portfolio",
    "Web Development",
    "JavaScript",
  ],
  authors: [{ name: "Sebastián Campo" }],
  creator: "Sebastián Campo",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://seba-campo.vercel.app/", // Asumiendo URL o placeholder
    title: "Sebastián Campo | Desarrollador Frontend",
    description:
      "Desarrollador frontend con experiencia en análisis funcional, enfocado en construir soluciones alineadas al negocio y al usuario.",
    siteName: "Sebastián Campo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Campo | Desarrollador Frontend",
    description: "Desarrollador frontend y analista funcional. Mira mis proyectos y experiencia.",
    creator: "@seba_campo", // Placeholder si no tengo el handle real, pero mejor poner el nombre
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background antialiased`}>
      <body className="font-sans">
        <HomeProvider>
          {children}
          <Analytics />
        </HomeProvider>
      </body>
    </html>
  )
}
