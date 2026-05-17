"use client"

import { useEffect } from "react"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { cn } from "@/lib/utils"

const LETRAS = ["A", "B", "C", "D", "E", "F"]

interface Props {
  api: EstudioApi
}

export function Quiz({ api }: Props) {
  const {
    temaActivo,
    preguntaActualIdx,
    irAPregunta,
    progreso,
    responder,
  } = api

  const total = temaActivo.preguntas.length
  const idx = Math.min(Math.max(0, preguntaActualIdx), total - 1)
  const pregunta = temaActivo.preguntas[idx]
  const r = progreso[temaActivo.id] ?? {}
  const respuesta = r[idx]
  const respondida = !!respuesta

  const totalRespondidas = Object.keys(r).length
  const totalCorrectas = Object.values(r).filter((x) => x.correcta).length

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (!respondida) {
        const n = parseInt(e.key, 10)
        if (n >= 1 && n <= pregunta.opciones.length) {
          e.preventDefault()
          responder(n - 1)
        }
      } else {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault()
          if (idx < total - 1) irAPregunta(idx + 1)
        } else if (e.key === "ArrowLeft") {
          e.preventDefault()
          if (idx > 0) irAPregunta(idx - 1)
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [respondida, pregunta.opciones.length, responder, idx, total, irAPregunta])

  if (total === 0) {
    return (
      <div className="glass-strong rounded-2xl p-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        No hay preguntas en este tema todavía.
      </div>
    )
  }

  return (
    <div className="anim-fade space-y-4">
      {/* Dots de progreso */}
      <div className="flex flex-wrap items-center gap-1.5">
        {temaActivo.preguntas.map((_, i) => {
          const res = r[i]
          let cls = "bg-white/20 dark:bg-white/8"
          if (res) cls = res.correcta ? "bg-emerald-500" : "bg-red-500"
          if (i === idx) cls += " ring-2 ring-white/30"
          return (
            <button
              key={i}
              onClick={() => irAPregunta(i)}
              className={cn(
                "h-1.5 flex-1 min-w-[8px] rounded-full transition-all hover:opacity-80",
                cls,
              )}
              aria-label={`Ir a pregunta ${i + 1}`}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
        <span>
          Pregunta {idx + 1} de {total}
        </span>
        <span>
          {totalCorrectas}/{totalRespondidas || 0} correctas
        </span>
      </div>

      {/* Pregunta */}
      <div className="glass-strong rounded-2xl p-5 sm:p-7">
        <p className="mb-5 font-serif text-lg leading-relaxed text-zinc-900 sm:text-xl dark:text-zinc-50">
          {pregunta.q}
        </p>

        <div className="space-y-2.5">
          {pregunta.opciones.map((op, i) => {
            const esElegida = respondida && respuesta?.elegida === i
            const esCorrectaRevelada =
              respondida && pregunta.correcta === i && !esElegida
            let cls = "opcion"
            let icon: React.ReactNode = null
            if (esElegida) {
              if (pregunta.correcta === i) {
                cls += " correcta"
                icon = <Check className="ml-auto h-4 w-4 shrink-0" />
              } else {
                cls += " incorrecta"
                icon = <X className="ml-auto h-4 w-4 shrink-0" />
              }
            } else if (esCorrectaRevelada) {
              cls += " revelada"
              icon = <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-500" />
            }
            return (
              <button
                key={i}
                onClick={() => responder(i)}
                disabled={respondida}
                className={cn(
                  cls,
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium",
                )}
              >
                <span className="opcion-letra">{LETRAS[i]}</span>
                <span className="flex-1 leading-snug">{op}</span>
                {icon}
              </button>
            )
          })}
        </div>

        {respondida && (
          <div
            className={cn(
              "anim-fade mt-5 rounded-xl border-l-4 p-4",
              respuesta?.correcta
                ? "border-l-emerald-500/60 bg-emerald-500/5"
                : "border-l-orange-500/60 bg-orange-500/5",
            )}
          >
            <p
              className={cn(
                "mb-1.5 text-[10px] font-medium tracking-wider uppercase",
                respuesta?.correcta
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-orange-600 dark:text-orange-400",
              )}
            >
              {respuesta?.correcta ? "Bien" : "Para recordar"}
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">
              {pregunta.exp}
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => irAPregunta(idx - 1)}
          disabled={idx === 0}
          className="glass btn-press inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 dark:text-zinc-300"
        >
          <ArrowLeft className="h-4 w-4" /> Anterior
        </button>
        <div className="hidden text-[11px] text-zinc-500 sm:block dark:text-zinc-400">
          {respondida ? (
            <>
              <span className="kbd">Enter</span> · siguiente
            </>
          ) : (
            <>
              <span className="kbd">1</span>–<span className="kbd">{pregunta.opciones.length}</span> ·
              elegir
            </>
          )}
        </div>
        <button
          onClick={() => irAPregunta(idx + 1)}
          disabled={idx === total - 1}
          className="glass btn-press inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 dark:text-zinc-300"
        >
          Siguiente <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
