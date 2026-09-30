"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lightbulb,
  RotateCcw,
  X,
} from "lucide-react"
import type { Cloze } from "@/lib/types"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { useContenido } from "@/lib/materias/contexto"
import { clozeAcierta, shuffle } from "@/lib/helpers"
import { useRacha } from "@/lib/hooks/useRacha"
import { XP } from "@/lib/racha"
import { cn } from "@/lib/utils"
import { ClozeTerminado } from "./ClozeTerminado"

const CLOZES_POR_PARTIDA = 8
const LETRAS = ["A", "B", "C", "D"]

interface Resp {
  id: string
  elegida: string
  ok: boolean
}

/** Build the 4 options (correct + 3 distractors) shuffled, returning the
 *  shuffled order so it stays stable across renders of the same pregunta. */
function buildOpciones(c: Cloze): string[] {
  return shuffle([c.respuestas[0], ...c.distractores])
}

export function ClozeMode({ api }: { api: EstudioApi }) {
  const { clozes } = useContenido()
  const racha = useRacha()
  const [partida, setPartida] = useState(0)

  const items = useMemo<Cloze[]>(() => {
    void partida
    return shuffle(clozes).slice(0, CLOZES_POR_PARTIDA)
  }, [partida, clozes])

  // Opciones por item (estables durante la partida)
  const opcionesPorItem = useMemo<Record<string, string[]>>(() => {
    const m: Record<string, string[]> = {}
    items.forEach((c) => {
      m[c.id] = buildOpciones(c)
    })
    return m
  }, [items])

  const [idx, setIdx] = useState(0)
  const [respuestas, setRespuestas] = useState<Resp[]>([])
  const [pistaVisible, setPistaVisible] = useState(false)

  useEffect(() => {
    setIdx(0)
    setRespuestas([])
    setPistaVisible(false)
  }, [partida])

  const total = items.length
  const actual = items[idx]
  const opciones = actual ? opcionesPorItem[actual.id] : []
  const respActual = respuestas.find((r) => r.id === actual?.id)
  const respondida = !!respActual

  const responder = (opcion: string) => {
    if (!actual || respondida) return
    const ok = clozeAcierta(opcion, actual)
    setRespuestas((prev) => [...prev, { id: actual.id, elegida: opcion, ok }])
    racha.sumar(ok ? XP.aciertoCloze : XP.errorQuiz, { materia: api.materia.slug })
  }

  const siguiente = () => {
    if (idx < total - 1) {
      setIdx(idx + 1)
      setPistaVisible(false)
    }
  }
  const anterior = () => {
    if (idx > 0) {
      setIdx(idx - 1)
      setPistaVisible(false)
    }
  }

  // Keyboard: 1-4 elige opción, Enter avanza después de responder
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (!respondida) {
        const n = parseInt(e.key, 10)
        if (n >= 1 && n <= opciones.length) {
          e.preventDefault()
          responder(opciones[n - 1])
        }
      } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault()
        if (idx < total - 1) siguiente()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        anterior()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [respondida, opciones, idx, total])

  const aciertos = respuestas.filter((r) => r.ok).length
  const ganaste = respuestas.length === total

  // Frase con el ___ resaltado o reemplazado
  const fraseRender = useMemo(() => {
    if (!actual) return null
    const parts = actual.frase.split("___")
    return (
      <>
        {parts[0]}
        <span
          className={cn(
            "mx-1 inline-block min-w-[5ch] rounded-md px-2 py-0.5 font-mono text-sm font-semibold align-baseline",
            respondida && respActual?.ok
              ? "bg-[var(--acierto)]/20 text-[var(--noche)]"
              : respondida
                ? "bg-[var(--error)]/20 text-[var(--noche)] line-through decoration-[var(--error)]"
                : "bg-[var(--noche)]/8 text-[var(--noche)]/45",
          )}
        >
          {respondida ? respActual?.elegida : "___"}
        </span>
        {parts[1]}
      </>
    )
  }, [actual, respondida, respActual])

  if (!actual) return null

  // Terminaste la ronda: el cierre ocupa la pantalla, igual que en Match y Quiz.
  if (ganaste) {
    return (
      <ClozeTerminado
        api={api}
        aciertos={aciertos}
        total={total}
        items={items}
        respuestas={respuestas}
        onOtraPartida={() => setPartida((p) => p + 1)}
      />
    )
  }

  return (
    <div className="anim-fade space-y-4">
      {/* Header */}
      <div className="glass-strong rounded-2xl p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 text-[10px] font-medium tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Actividad
            </div>
            <h2 className="font-serif text-xl leading-tight font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
              Cloze · Completá la palabra clave
            </h2>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              Elegí entre las 4 opciones la palabra que completa la frase.
            </p>
          </div>
          <button
            onClick={() => setPartida((p) => p + 1)}
            className="btn-press glass shrink-0 rounded-xl p-2.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Nueva partida"
            title="Nueva partida"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!ganaste && (
        <>
          {/* Dots de progreso */}
          <div className="flex flex-wrap items-center gap-1.5">
            {items.map((c, i) => {
              const r = respuestas.find((x) => x.id === c.id)
              let cls = "bg-[var(--noche)]/12"
              if (r) cls = r.ok ? "bg-[var(--acierto)]" : "bg-[var(--error)]"
              if (i === idx) cls += " ring-2 ring-[var(--lila)]/45"
              return (
                <div
                  key={i}
                  className={cn(
                    "h-2 flex-1 min-w-[10px] rounded-full transition-all",
                    cls,
                  )}
                />
              )
            })}
          </div>
          <div className="flex items-center justify-between text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
            <span>
              {idx + 1} de {total}
              {actual.tema && (
                <span className="ml-2 text-zinc-400 dark:text-zinc-600">{actual.tema}</span>
              )}
            </span>
            <span>
              {aciertos}/{respuestas.length || 0} correctas
            </span>
          </div>

          {/* Tarjeta principal */}
          <div className="glass-strong rounded-2xl p-5 sm:p-7">
            <p className="font-serif text-lg leading-relaxed text-zinc-900 sm:text-xl dark:text-zinc-50">
              {fraseRender}
            </p>

            {/* Opciones MC */}
            <div className="mt-6 space-y-2.5">
              {opciones.map((op, i) => {
                const esElegida = respondida && respActual?.elegida === op
                // ¿esta opción concreta es la correcta?
                const esLaCorrecta = clozeAcierta(op, actual)
                const esCorrectaRevelada = respondida && esLaCorrecta && !esElegida
                let cls = "opcion"
                let icon: React.ReactNode = null
                if (esElegida) {
                  if (esLaCorrecta) {
                    cls += " correcta"
                    icon = <Check className="opcion-tick ml-auto h-4 w-4 shrink-0" />
                  } else {
                    cls += " incorrecta"
                    icon = <X className="opcion-tick ml-auto h-4 w-4 shrink-0" />
                  }
                } else if (esCorrectaRevelada) {
                  cls += " revelada"
                  icon = (
                    <Check className="opcion-tick ml-auto h-4 w-4 shrink-0 text-emerald-500" />
                  )
                }
                return (
                  <button
                    key={op}
                    onClick={() => responder(op)}
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

            {!respondida && actual.pista && (
              <div className="mt-3 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPistaVisible((v) => !v)}
                  className="btn-press inline-flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  <Lightbulb className="h-3.5 w-3.5" />
                  {pistaVisible ? "Ocultar pista" : "Ver pista"}
                </button>
                <span className="hidden text-[11px] text-zinc-500 sm:inline dark:text-zinc-500">
                  <span className="kbd">1</span>–<span className="kbd">{opciones.length}</span>{" "}
                  · elegir
                </span>
              </div>
            )}
            {pistaVisible && !respondida && actual.pista && (
              <p className="anim-fade mt-3 rounded-lg border-l-4 border-l-emerald-500/60 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                💡 {actual.pista}
              </p>
            )}

            {respondida && actual.pista && (
              <div
                className={cn(
                  "anim-fade mt-5 rounded-xl border-l-4 p-4",
                  respActual?.ok
                    ? "border-l-emerald-500/60 bg-emerald-500/5"
                    : "border-l-red-500/60 bg-red-500/5",
                )}
              >
                <p
                  className={cn(
                    "mb-1.5 text-[10px] font-medium tracking-wider uppercase",
                    respActual?.ok
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400",
                  )}
                >
                  {respActual?.ok ? "Bien" : "Para recordar"}
                </p>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                  {actual.pista}
                </p>
              </div>
            )}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={anterior}
              disabled={idx === 0}
              className="glass btn-press inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 dark:text-zinc-300"
            >
              <ArrowLeft className="h-4 w-4" /> Anterior
            </button>
            <button
              onClick={siguiente}
              disabled={!respondida || idx === total - 1}
              className="btn-press inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40 hover:from-emerald-600 hover:to-emerald-700"
            >
              {idx === total - 1 ? "Ver resultados" : "Siguiente"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
