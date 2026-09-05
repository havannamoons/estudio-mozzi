"use client"

import { useEffect, useRef } from "react"
import type { MicApi } from "@/lib/hooks/useMicrofono"

/**
 * Las ondas de tu voz mientras explicás.
 *
 * Es la única pieza de la app que se anima sesenta veces por segundo, así que
 * está escrita para no pasar por React: el bucle escribe `transform` sobre nodos
 * que ya existen. Con estado de React serían sesenta re-renders por segundo de
 * toda la pantalla para mover unas barritas.
 *
 * Las barras salen del CENTRO hacia arriba y abajo, como un editor de audio, y
 * no desde el piso como un ecualizador de equipo de música: la primera forma se
 * lee como "una voz", la segunda como "está sonando música".
 */

const BARRAS = 21

/* Colores de la paleta repartidos desde el centro hacia los bordes. El centro
   es el lila de la marca; hacia afuera se abre a los pops. */
const COLORES = [
  "var(--lila)",
  "var(--lila)",
  "var(--cielo)",
  "var(--menta)",
  "var(--dorado)",
  "var(--coral)",
]

function colorDe(i: number) {
  const centro = (BARRAS - 1) / 2
  const distancia = Math.abs(i - centro) / centro // 0 centro, 1 borde
  const idx = Math.min(
    COLORES.length - 1,
    Math.floor(distancia * COLORES.length),
  )
  return COLORES[idx]
}

export function OndasVoz({ mic }: { mic: MicApi }) {
  const refs = useRef<(HTMLSpanElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const { estado, nivelRef, espectroRef } = mic

  useEffect(() => {
    if (estado !== "activo") return

    const pintar = () => {
      const espectro = espectroRef.current
      const nivel = nivelRef.current

      for (let i = 0; i < BARRAS; i++) {
        const nodo = refs.current[i]
        if (!nodo) continue

        let altura: number
        if (espectro && espectro.length > 0) {
          /* Cada barra mira una banda de frecuencias. Se usa solo el primer
             tercio del espectro porque arriba de ~5 kHz la voz hablada no tiene
             casi nada y las barras de los extremos quedarían siempre muertas. */
          const centro = (BARRAS - 1) / 2
          const distancia = Math.abs(i - centro) / centro
          const banda = Math.floor(distancia * (espectro.length / 3))
          const bandaSiguiente = Math.max(
            banda + 1,
            Math.floor((distancia + 1 / centro) * (espectro.length / 3)),
          )
          let suma = 0
          let cuenta = 0
          for (let b = banda; b < bandaSiguiente && b < espectro.length; b++) {
            suma += espectro[b]
            cuenta++
          }
          altura = cuenta > 0 ? suma / cuenta / 255 : 0
        } else {
          altura = nivel
        }

        /* Las del centro se ven más altas que las de los bordes aunque tengan
           la misma energía: es lo que hace que el conjunto se lea como una voz
           y no como una fila de palitos. */
        const centro = (BARRAS - 1) / 2
        const peso = 1 - (Math.abs(i - centro) / centro) * 0.55
        const escala = Math.max(0.06, Math.min(1, altura * 2.1 * peso))
        nodo.style.transform = `scaleY(${escala})`
      }
      rafRef.current = requestAnimationFrame(pintar)
    }

    rafRef.current = requestAnimationFrame(pintar)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [estado, nivelRef, espectroRef])

  // Sin micrófono activo las barras quedan quietas y chiquitas: la pantalla
  // sigue igual, solo no reacciona.
  return (
    <div
      className="flex h-16 items-center justify-center gap-[3px]"
      aria-hidden="true"
    >
      {Array.from({ length: BARRAS }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          className="block h-full w-[5px] rounded-full transition-transform duration-75 ease-out sm:w-[7px]"
          style={{
            background: colorDe(i),
            transform: "scaleY(0.06)",
            opacity: estado === "activo" ? 1 : 0.25,
          }}
        />
      ))}
    </div>
  )
}
