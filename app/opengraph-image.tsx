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
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#00c2a8',
            display: 'flex',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-150px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,194,168,0.10) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(0,194,168,0.15)',
              border: '1px solid rgba(0,194,168,0.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
            }}
          >
            🗑️
          </div>
          <span style={{ color: '#606060', fontSize: '22px', letterSpacing: '0.06em' }}>
            deletable.app
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '82px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>auto-delete.</span>
          <span style={{ color: '#00c2a8' }}>stay clean.</span>
        </div>

        {/* Subtext */}
        <div style={{ fontSize: '26px', color: '#a0a0a0', lineHeight: 1.4, maxWidth: '680px', display: 'flex' }}>
          A privacy-first vault for notes and photos that delete themselves.
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '52px' }}>
          {['No cloud. Ever.', 'AES-256 encrypted', 'Auto-expires'].map((label) => (
            <div
              key={label}
              style={{
                background: '#1c1c1c',
                border: '1px solid #2c2c2c',
                borderRadius: '999px',
                padding: '10px 22px',
                color: '#ffffff',
                fontSize: '20px',
                display: 'flex',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
