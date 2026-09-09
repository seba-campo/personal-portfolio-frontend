import type React from "react"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import type { Metadata } from "next"
import "./globals.css"
import { HomeProvider } from "./useHome"
import { ThemeProvider } from "@/components/theme-provider"
import { SeoSchemas } from "@/components/SeoSchemas"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const BASE_URL = 'https://seba-campo.vercel.app'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

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
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sebastián Campo | Desarrollador Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Campo | Desarrollador Frontend",
    description: "Desarrollador frontend y analista funcional. Mira mis proyectos y experiencia.",
    creator: "@seba_campo",
    images: [`${BASE_URL}/og-image.png`],
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
        <SeoSchemas />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <HomeProvider>{children}</HomeProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
