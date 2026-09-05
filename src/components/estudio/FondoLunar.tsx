"use client"

import { Estrellita, Mancha } from "@/components/landing/Personajes"

/**
 * Fondo de la app. Reemplaza a `BlobsBackground`, que eran tres manchas de
 * degradé radial flotando sobre negro — el look que sacamos de la landing.
 *
 * Acá el fondo es color plano (lo pone `.lunar`) y lo único que se mueve son
 * las estrellitas y dos manchas planas, bien tenues, ancladas a las esquinas.
 * Va fijo y detrás de todo, así no interfiere con el scroll ni con los clicks.
 */

const ESTRELLAS = [
  { top: "8%", left: "6%", size: 18, color: "#FFAE24", delay: "0s" },
  { top: "18%", left: "88%", size: 14, color: "#7A4DFF", delay: "1.1s" },
  { top: "44%", left: "3%", size: 12, color: "#FF5C3D", delay: "2.2s" },
  { top: "62%", left: "94%", size: 16, color: "#17C79A", delay: "0.7s" },
  { top: "84%", left: "10%", size: 13, color: "#FFAE24", delay: "1.8s" },
  { top: "92%", left: "80%", size: 11, color: "#7A4DFF", delay: "2.6s" },
]

export function FondoLunar() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Manchas planas, muy tenues: dan profundidad sin degradé */}
      <div className="absolute -top-40 -left-32 opacity-45">
        <Mancha size={420} color="var(--lila-palido)" />
      </div>
      <div className="absolute -right-40 -bottom-48 opacity-40">
        <Mancha size={480} color="var(--lila-palido)" giro={24} />
      </div>

      {ESTRELLAS.map((e, i) => (
        <span
          key={i}
          className="titila absolute"
          style={{ top: e.top, left: e.left, animationDelay: e.delay }}
          aria-hidden="true"
        >
          <Estrellita size={e.size} color={e.color} />
        </span>
      ))}
    </div>
  )
}
