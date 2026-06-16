import type React from "react"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import "./globals.css"
import { HomeProvider } from "./useHome"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const BASE_URL = 'https://seba-campo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    title: "Sebastián Campo | Desarrollador Frontend",
    description:
      "Desarrollador frontend con experiencia en análisis funcional, enfocado en construir soluciones alineadas al negocio y al usuario.",
    siteName: "Sebastián Campo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Campo | Desarrollador Frontend",
    description: "Desarrollador frontend y analista funcional. Mira mis proyectos y experiencia.",
    creator: "@seba_campo",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <HomeProvider>
            {children}
            <Analytics />
          </HomeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
