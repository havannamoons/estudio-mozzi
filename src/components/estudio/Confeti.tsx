"use client"

import { useEffect, useState } from "react"
import { Estrellita } from "@/components/landing/Personajes"

/**
 * Lluvia de estrellitas para los momentos de festejo.
 *
 * Las piezas se sortean en el navegador (dentro de un efecto, nunca durante
 * el render) para que el servidor y el cliente no dibujen cosas distintas.
 * Cae una sola vez y se apaga: un confeti en loop deja de ser festejo y pasa
 * a ser ruido de fondo.
 */

interface Pieza {
  id: number
  left: string
  size: number
  color: string
  delay: string
  duracion: string
  giro: string
  caida: string
}

const COLORES = ["#FFAE24", "#FF5C3D", "#17C79A", "#4C7DFF", "#7A4DFF", "#C3B0EA"]

export function Confeti({ cantidad = 26 }: { cantidad?: number }) {
  const [piezas, setPiezas] = useState<Pieza[]>([])

  useEffect(() => {
    setPiezas(
      Array.from({ length: cantidad }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 10 + Math.random() * 16,
        color: COLORES[i % COLORES.length],
        delay: `${Math.random() * 0.5}s`,
        duracion: `${2.2 + Math.random() * 1.4}s`,
        giro: `${360 + Math.random() * 540}deg`,
        caida: `${60 + Math.random() * 30}vh`,
      })),
    )
  }, [cantidad])

  if (piezas.length === 0) return null

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0 overflow-visible"
      aria-hidden="true"
    >
      {piezas.map((p) => (
        <span
          key={p.id}
          className="confeti absolute top-0"
          style={
            {
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duracion,
              "--giro-confeti": p.giro,
              "--caida": p.caida,
            } as React.CSSProperties
          }
        >
          <Estrellita size={p.size} color={p.color} />
        </span>
      ))}
    </div>
  )
}
