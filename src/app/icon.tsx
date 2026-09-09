import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 192, height: 192 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Courier New", Courier, monospace',
          fontWeight: 700,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, paddingBottom: 6 }}>
          <div style={{ display: 'flex', fontSize: 55, color: '#555555', marginBottom: 8 }}>[</div>
          <div style={{ display: 'flex', fontSize: 116, color: '#ffffff', lineHeight: 1 }}>SC</div>
          <div style={{ display: 'flex', fontSize: 55, color: '#555555', marginBottom: 8 }}>]</div>
        </div>
      </div>
    ),
    { width: 192, height: 192 }
  )
}
