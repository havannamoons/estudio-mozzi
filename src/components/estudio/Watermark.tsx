"use client"

/**
 * Marca de agua tenue sobre el contenido de la app (se ve en las capturas).
 * Texto fijo con la marca de la vendedora. Para cambiarlo, editá TEXTO.
 * No bloquea clics (pointer-events: none).
 */
const TEXTO = "havannamoons"

const TILE = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="330" height="210">` +
    `<text x="12" y="115" transform="rotate(-28 165 105)" ` +
    `font-family="Georgia, 'Times New Roman', serif" font-size="22" font-weight="600" ` +
    `fill="rgba(130,130,130,0.14)">${TEXTO}</text>` +
    `</svg>`,
)

export function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,${TILE}")`,
        backgroundRepeat: "repeat",
      }}
    />
  )
}
