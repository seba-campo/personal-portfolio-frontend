const BASE_URL = 'https://seba-campo.vercel.app'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sebastián Campo',
  jobTitle: 'Desarrollador Frontend',
  description:
    'Desarrollador frontend con experiencia en análisis funcional y soporte técnico. Enfocado en construir soluciones alineadas al negocio y al usuario.',
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  sameAs: [
    'https://github.com/seba-campo',
    'https://www.linkedin.com/in/seba-campo',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'PostgreSQL',
    'Análisis Funcional',
    'TailwindCSS',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Olivos',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sebastián Campo | Portfolio',
  url: BASE_URL,
  description:
    'Portfolio profesional de Sebastián Campo — Desarrollador Frontend y Analista Funcional.',
  author: { '@type': 'Person', name: 'Sebastián Campo' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${BASE_URL}/#portfolio` },
    { '@type': 'ListItem', position: 3, name: 'Contacto', item: `${BASE_URL}/#contact` },
  ],
}

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Proyectos de Sebastián Campo',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Zenflow',
        description: 'Pomodoro timer online con sonidos ambientales y tonos isocrónicos.',
        url: 'https://v0-timer-app-opal.vercel.app/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        author: { '@type': 'Person', name: 'Sebastián Campo' },
        programmingLanguage: ['React', 'Next.js', 'TailwindCSS'],
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        name: 'fastwa',
        description:
          'Generador y acortador de links de WhatsApp, responsive y con soporte para compartir en redes sociales.',
        url: 'https://fastwa.me',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        author: { '@type': 'Person', name: 'Sebastián Campo' },
        programmingLanguage: ['TailwindCSS', 'Vercel'],
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        name: 'PlannIt',
        description:
          'Aplicación realtime full-stack para planificación de user stories y tareas.',
        url: 'https://plannit-nine.vercel.app/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        author: { '@type': 'Person', name: 'Sebastián Campo' },
        programmingLanguage: ['React', 'Next.js', 'Firebase', 'Firestore'],
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'SoftwareApplication',
        name: 'CRM Online',
        description: 'Sistema tipo CRM con gestión de clientes y servicios.',
        url: 'https://seba-campo.github.io/jv-crm/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        author: { '@type': 'Person', name: 'Sebastián Campo' },
        programmingLanguage: ['ExpressJs', 'PostgreSQL'],
      },
    },
  ],
}

const schemas = [personSchema, websiteSchema, breadcrumbSchema, projectsSchema]

export function SeoSchemas() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
