"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Estrellita, Estudiando } from "./Personajes"

/**
 * Hoja de entrada de Estudio Lunar.
 *
 * Es una pantalla aparte, de color plano entero: apenas abrís, el muñequito
 * te saluda con un globo de diálogo. Cuando deslizás, se va —y recién ahí
 * aparecen los títulos y todo el contenido.
 *
 * Accesibilidad: el riel es un slider de verdad — también se completa con las
 * flechas del teclado o con Enter. Y hay un "entrar directo" siempre visible,
 * para que nadie quede encerrado si el arrastre no le funciona.
 */

const ESTRELLAS = [
  { top: "12%", left: "12%", size: 24, color: "#FFAE24", delay: "0s" },
  { top: "20%", left: "82%", size: 17, color: "#FBF6EF", delay: "0.8s" },
  { top: "68%", left: "7%", size: 19, color: "#FF5C3D", delay: "1.6s" },
  { top: "76%", left: "86%", size: 15, color: "#FFAE24", delay: "2.2s" },
  { top: "42%", left: "92%", size: 12, color: "#FBF6EF", delay: "1.1s" },
  { top: "34%", left: "5%", size: 13, color: "#17C79A", delay: "1.9s" },
]

export function Bienvenida() {
  const [progreso, setProgreso] = useState(0) // 0 a 1
  const [saliendo, setSaliendo] = useState(false)
  const [yendose, setYendose] = useState(false)
  const [oculta, setOculta] = useState(false)
  const rielRef = useRef<HTMLDivElement>(null)
  const arrastrando = useRef(false)

  const completar = useCallback(() => {
    if (saliendo) return
    setProgreso(1)
    setSaliendo(true)
  }, [saliendo])

  // Mientras la hoja está puesta, la página de atrás no se mueve. Si no, al
  // arrastrar en el celu se scrollea el contenido de abajo y parece que se
  // desliza todo junto.
  useEffect(() => {
    if (oculta) return
    const previo = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previo
    }
  }, [oculta])

  // Saluda un instante y se va sola.
  useEffect(() => {
    if (!saliendo) return
    const irse = setTimeout(() => setYendose(true), 900)
    const sacar = setTimeout(() => setOculta(true), 1600)
    return () => {
      clearTimeout(irse)
      clearTimeout(sacar)
    }
  }, [saliendo])

  const mover = useCallback(
    (clientX: number) => {
      const riel = rielRef.current
      if (!riel || saliendo) return
      const caja = riel.getBoundingClientRect()
      const recorrido = caja.width - 64 // ancho de la perilla
      const p = Math.min(1, Math.max(0, (clientX - caja.left - 32) / recorrido))
      setProgreso(p)
      if (p >= 0.96) completar()
    },
    [saliendo, completar],
  )

  // Los listeners van en window: si el dedo se sale del riel, el arrastre sigue.
  useEffect(() => {
    function alMover(e: PointerEvent) {
      if (arrastrando.current) mover(e.clientX)
    }
    function alSoltar() {
      if (!arrastrando.current) return
      arrastrando.current = false
      // Si no llegó al final, la perilla vuelve sola.
      setProgreso((p) => (p >= 0.96 ? 1 : 0))
    }
    window.addEventListener("pointermove", alMover)
    window.addEventListener("pointerup", alSoltar)
    window.addEventListener("pointercancel", alSoltar)
    return () => {
      window.removeEventListener("pointermove", alMover)
      window.removeEventListener("pointerup", alSoltar)
      window.removeEventListener("pointercancel", alSoltar)
    }
  }, [mover])

  if (oculta) return null

  return (
    <div
      className={`bienvenida ${yendose ? "bienvenida-yendose" : ""}`}
      role="dialog"
      aria-label="Bienvenida a Estudio Lunar"
    >
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

      {/* Globo + muñequito. El globo sale apenas carga la página. */}
      <div className="relative flex flex-col items-center">
        <div className="globo mb-4 self-start">
          {saliendo ? "¡Pasá! 🌙" : "¡Hola!"}
        </div>
        <div className={saliendo ? "saltito" : "flota"}>
          <Estudiando size={270} saludando={saliendo} />
        </div>
      </div>

      {!saliendo && (
        <>
          <div
            ref={rielRef}
            className="riel"
            onPointerDown={(e) => {
              arrastrando.current = true
              e.currentTarget.setPointerCapture?.(e.pointerId)
              mover(e.clientX)
            }}
          >
            <div
              className="riel-relleno"
              style={{ transform: `scaleX(${progreso})` }}
            />
            <span className="riel-texto" style={{ opacity: 1 - progreso * 1.4 }}>
              deslizá para entrar
            </span>
            <button
              type="button"
              role="slider"
              aria-label="Deslizá para entrar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progreso * 100)}
              className={`perilla ${progreso === 0 ? "perilla-late" : ""}`}
              style={{
                transform: `translateX(calc(${progreso} * (min(22rem, 86vw) - 4.5rem)))`,
                transition: arrastrando.current ? "none" : "transform 0.35s ease",
              }}
              onKeyDown={(e) => {
                if (["ArrowRight", "Enter", " "].includes(e.key)) {
                  e.preventDefault()
                  completar()
                }
              }}
            >
              →
            </button>
          </div>

          <button
            type="button"
            onClick={completar}
            className="cursor-pointer text-[14px] font-bold text-[var(--crema)]/55 underline decoration-2 underline-offset-4 hover:text-[var(--crema)]"
          >
            entrar directo
          </button>
        </>
      )}
    </div>
  )
}
