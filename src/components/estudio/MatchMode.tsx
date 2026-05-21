"use client"

import { useEffect, useMemo, useState } from "react"
import { Check, RotateCcw, Sparkles, X } from "lucide-react"
import { REFERENTES, type Par } from "@/lib/data/referentes"
import { shuffle } from "@/lib/helpers"
import { cn } from "@/lib/utils"

const PARES_POR_PARTIDA = 6

export function MatchMode() {
  const [partida, setPartida] = useState(0)

  // Re-samplea pares al cambiar de partida
  const pares = useMemo<Par[]>(() => {
    void partida
    return shuffle(REFERENTES).slice(0, PARES_POR_PARTIDA)
  }, [partida])

  // Orden visual de cada columna (independiente; ambos shuffleados)
  const ordenIzq = useMemo(() => shuffle(pares.map((p) => p.id)), [pares])
  const ordenDer = useMemo(() => shuffle(pares.map((p) => p.id)), [pares])

  const [selIzq, setSelIzq] = useState<string | null>(null)
  const [selDer, setSelDer] = useState<string | null>(null)
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [errorPar, setErrorPar] = useState<{ izq: string; der: string } | null>(
    null,
  )
  const [intentos, setIntentos] = useState(0)

  // Reset al cambiar de partida
  useEffect(() => {
    setSelIzq(null)
    setSelDer(null)
    setMatched(new Set())
    setErrorPar(null)
    setIntentos(0)
  }, [partida])

  // Chequeo de matcheo cuando ambos lados están elegidos
  useEffect(() => {
    if (!selIzq || !selDer) return
    setIntentos((n) => n + 1)
    if (selIzq === selDer) {
      setMatched((prev) => {
        const nuevo = new Set(prev)
        nuevo.add(selIzq)
        return nuevo
      })
      setSelIzq(null)
      setSelDer(null)
    } else {
      setErrorPar({ izq: selIzq, der: selDer })
      const t = setTimeout(() => {
        setSelIzq(null)
        setSelDer(null)
        setErrorPar(null)
      }, 650)
      return () => clearTimeout(t)
    }
  }, [selIzq, selDer])

  const ganaste = matched.size === pares.length
  const parPorId = (id: string) => pares.find((p) => p.id === id)

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
              Match · Referentes clínicos
            </h2>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              Tocá un concepto a la izquierda, después su referente clínico a la derecha. Si
              matchean, quedan en verde.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-right">
            <div>
              <div className="font-serif text-2xl font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">
                {matched.size}
                <span className="text-zinc-400 dark:text-zinc-600">
                  /{pares.length}
                </span>
              </div>
              <div className="text-[10px] tabular-nums text-zinc-500 dark:text-zinc-500">
                {intentos} intento{intentos === 1 ? "" : "s"}
              </div>
            </div>
            <button
              onClick={() => setPartida((p) => p + 1)}
              className="btn-press glass rounded-xl p-2.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="Nueva partida"
              title="Nueva partida"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Estado ganaste */}
      {ganaste && (
        <div className="anim-fade glass-strong rounded-2xl border-l-4 border-l-emerald-500/60 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="font-serif text-base font-semibold text-emerald-700 dark:text-emerald-300">
                ¡Todos matcheados!
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {intentos} intentos · {pares.length} aciertos. Tocá ↻ para otra ronda con
                nuevos pares.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tablero */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {/* Columna izquierda — Conceptos */}
        <div className="space-y-2">
          <p className="px-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
            Concepto
          </p>
          {ordenIzq.map((id) => {
            const par = parPorId(id)
            if (!par) return null
            const isMatched = matched.has(id)
            const isSelected = selIzq === id
            const isError = errorPar?.izq === id
            return (
              <button
                key={id}
                onClick={() => !isMatched && setSelIzq(id)}
                disabled={isMatched}
                className={cn(
                  "match-card btn-press w-full rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all",
                  isMatched && "match-card--ok",
                  !isMatched && isSelected && "match-card--sel",
                  !isMatched && !isSelected && "match-card--idle",
                  isError && "match-card--err",
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="flex-1 leading-snug">{par.concepto}</span>
                  {isMatched && (
                    <Check className="opcion-tick h-4 w-4 shrink-0 text-emerald-500" />
                  )}
                  {isError && <X className="opcion-tick h-4 w-4 shrink-0" />}
                </div>
                {isMatched && par.pista && (
                  <p className="anim-fade mt-2 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {par.pista}
                  </p>
                )}
              </button>
            )
          })}
        </div>

        {/* Columna derecha — Referentes */}
        <div className="space-y-2">
          <p className="px-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
            Referente clínico
          </p>
          {ordenDer.map((id) => {
            const par = parPorId(id)
            if (!par) return null
            const isMatched = matched.has(id)
            const isSelected = selDer === id
            const isError = errorPar?.der === id
            return (
              <button
                key={id}
                onClick={() => !isMatched && setSelDer(id)}
                disabled={isMatched}
                className={cn(
                  "match-card btn-press w-full rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all",
                  isMatched && "match-card--ok",
                  !isMatched && isSelected && "match-card--sel",
                  !isMatched && !isSelected && "match-card--idle",
                  isError && "match-card--err",
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="flex-1 leading-snug">{par.referente}</span>
                  {isMatched && (
                    <Check className="opcion-tick h-4 w-4 shrink-0 text-emerald-500" />
                  )}
                  {isError && <X className="opcion-tick h-4 w-4 shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
