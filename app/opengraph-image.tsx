import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sebastian Campo | Desarrollador Frontend'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function Tag({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#444444',
        color: '#bbbbbb',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 18,
        paddingRight: 18,
        fontSize: 14,
      }}
    >
      {label}
    </div>
  )
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingTop: 72,
          paddingBottom: 72,
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ color: '#666666', fontSize: 14, letterSpacing: 4 }}>
            PORTFOLIO / FRONTEND DEVELOPER
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#ffffff', fontSize: 88, fontWeight: 800 }}>
            SEBASTIAN
          </div>
          <div style={{ display: 'flex', color: '#ffffff', fontSize: 88, fontWeight: 800 }}>
            CAMPO
          </div>
          <div style={{ display: 'flex', color: '#999999', fontSize: 24, marginTop: 24 }}>
            Desarrollador Frontend
          </div>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Tag label="React" />
            <Tag label="Next.js" />
            <Tag label="TypeScript" />
          </div>
          <div style={{ display: 'flex', color: '#444444', fontSize: 14 }}>
            seba-campo.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
