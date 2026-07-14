import { ImageResponse } from "next/og"

// Imagen de preview del link (WhatsApp, Telegram, X, etc.).
// Se genera del lado del server; sin assets externos.
export const runtime = "edge"
export const alt = "Estudio · Psicoanálisis Freud — Teoría, Quiz y Simulacro"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1200px 600px at 78% -10%, #064e3b 0%, #09090b 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#fafafa",
        }}
      >
        {/* Etiqueta superior */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: "#6ee7b7",
              fontWeight: 600,
            }}
          >
            PSICOANÁLISIS · FREUD
          </div>
        </div>

        {/* Título + subtítulo */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Estudio Mozzi
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              color: "#d4d4d8",
              fontWeight: 500,
            }}
          >
            Teoría · Quiz · Simulacro
          </div>
        </div>

        {/* Pie: cobertura + stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 28, color: "#a1a1aa" }}>
            Parcial + Final · Cát. Pino (ex Mozzi) · UBA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#6ee7b7",
              background: "rgba(52,211,153,0.12)",
              border: "1px solid rgba(52,211,153,0.35)",
              borderRadius: 16,
              padding: "12px 24px",
            }}
          >
            19 temas · +120 preguntas
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
