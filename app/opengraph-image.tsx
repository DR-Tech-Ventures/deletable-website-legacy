import { ImageResponse } from 'next/og'

export const alt = 'Deletable — auto-delete. stay clean.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          Deletable
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#9CA3AF',
            marginTop: 20,
            letterSpacing: '-1px',
          }}
        >
          auto-delete. stay clean.
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 48 }}>
          {[
            { icon: '📵', label: 'No cloud' },
            { icon: '🔒', label: 'AES-256 encrypted' },
            { icon: '⏱', label: 'Auto-deletes' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                background: '#161616',
                border: '1px solid #2C2C2C',
                borderRadius: 14,
                padding: '12px 28px',
                fontSize: 26,
                color: '#9CA3AF',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#444',
            marginTop: 52,
            letterSpacing: '0.5px',
          }}
        >
          deletable.app
        </div>
      </div>
    ),
    { ...size }
  )
}
