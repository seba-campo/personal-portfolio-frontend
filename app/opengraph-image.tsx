import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sebastián Campo | Desarrollador Frontend'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 8, height: 8, background: '#ffffff' }} />
          <span style={{ color: '#666666', fontSize: 13, letterSpacing: 6, fontFamily: 'monospace' }}>
            PORTFOLIO · FRONTEND DEVELOPER
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ color: '#ffffff', fontSize: 84, fontWeight: 800, lineHeight: 0.9, fontFamily: 'monospace', letterSpacing: -3, display: 'flex' }}>
            SEBASTIÁN
          </div>
          <div style={{ color: '#ffffff', fontSize: 84, fontWeight: 800, lineHeight: 0.9, fontFamily: 'monospace', letterSpacing: -3, display: 'flex' }}>
            CAMPO
          </div>
          <div style={{ color: '#999999', fontSize: 22, fontWeight: 400, marginTop: 16, fontFamily: 'monospace', display: 'flex' }}>
            Desarrollador Frontend · Analista Funcional
          </div>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {['React', 'Next.js', 'TypeScript', 'TailwindCSS'].map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  border: '1.5px solid #444444',
                  color: '#bbbbbb',
                  padding: '6px 16px',
                  fontSize: 13,
                  fontFamily: 'monospace',
                  letterSpacing: 1,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ color: '#444444', fontSize: 13, fontFamily: 'monospace', letterSpacing: 2, display: 'flex' }}>
            seba-campo.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
