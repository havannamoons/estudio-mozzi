"use client"

import { Estrellita } from "@/components/landing/Personajes"

/**
 * Marco de las pantallas sueltas de la app (login, acceso pendiente, pausa).
 *
 * Antes eran tarjetas de vidrio sobre un fondo oscuro con manchas de degradé
 * — el look exacto que sacamos de la landing. Ahora comparten el sistema de
 * Estudio Lunar: color plano, tipografía de la marca, estrellitas y un
 * muñequito. Que la puerta de entrada se vea como la casa.
 */

const ESTRELLAS = [
  { top: "12%", left: "10%", size: 22, color: "#FFAE24", delay: "0s" },
  { top: "22%", left: "84%", size: 16, color: "#7A4DFF", delay: "0.9s" },
  { top: "72%", left: "8%", size: 18, color: "#FF5C3D", delay: "1.7s" },
  { top: "80%", left: "86%", size: 14, color: "#17C79A", delay: "2.3s" },
  { top: "46%", left: "93%", size: 12, color: "#FFAE24", delay: "1.2s" },
]

export function PantallaLunar({ children }: { children: React.ReactNode }) {
  return (
    <div className="sin-bichito relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-12">
      {ESTRELLAS.map((e, i) => (
        <span
          key={i}
          className="titila pointer-events-none absolute"
          style={{ top: e.top, left: e.left, animationDelay: e.delay }}
          aria-hidden="true"
        >
          <Estrellita size={e.size} color={e.color} />
        </span>
      ))}
      <div className="relative w-full max-w-md text-center">{children}</div>
    </div>
  )
}
