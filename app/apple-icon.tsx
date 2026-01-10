import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
          borderRadius: '22%',
        }}
      >
        {/* H for HITL */}
        <div
          style={{
            display: 'flex',
            fontSize: '110px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-4px',
          }}
        >
          H
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
