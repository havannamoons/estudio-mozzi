"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Carrusel con puntitos abajo que muestran cuántas tarjetas quedan.
 *
 * El desplazamiento sigue siendo scroll nativo (dedo, trackpad, teclado, y
 * funciona aunque falle el JavaScript). Los puntitos solo MIRAN ese scroll —
 * no lo controlan — así nada se rompe si el navegador es viejo.
 */
export function Carrusel({
  children,
  cantidad,
}: {
  children: React.ReactNode
  cantidad: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [activo, setActivo] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function alScrollear() {
      if (!el) return
      const maximo = el.scrollWidth - el.clientWidth
      if (maximo <= 0) return setActivo(0)
      // Proporción recorrida → qué tarjeta está mirando.
      const p = el.scrollLeft / maximo
      setActivo(Math.round(p * (cantidad - 1)))
    }

    el.addEventListener("scroll", alScrollear, { passive: true })
    alScrollear()
    return () => el.removeEventListener("scroll", alScrollear)
  }, [cantidad])

  function irA(i: number) {
    const el = ref.current
    if (!el) return
    const maximo = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: (maximo * i) / (cantidad - 1), behavior: "smooth" })
  }

  return (
    <>
      <div ref={ref} className="carrusel carrusel-sangra">
        {children}
      </div>

      <div className="puntos" role="tablist" aria-label="Tarjetas del carrusel">
        {Array.from({ length: cantidad }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activo}
            aria-label={`Ir a la tarjeta ${i + 1}`}
            onClick={() => irA(i)}
            className={`punto cursor-pointer ${i === activo ? "punto-activo" : ""}`}
          />
        ))}
      </div>
    </>
  )
}
