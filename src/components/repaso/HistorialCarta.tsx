"use client"

import { Check, ChevronLeft, ChevronRight, Eye, X } from "lucide-react"
import type { Carta, HistorialItem } from "@/lib/types"
import { cn } from "@/lib/utils"

const LETRAS = ["A", "B", "C", "D", "E", "F"]

interface Props {
  item: HistorialItem
  carta: Carta
  idx: number
  total: number
  onPrev: () => void
  onNext: () => void
  onVolver: () => void
}

export function HistorialCarta({
  item,
  carta,
  idx,
  total,
  onPrev,
  onNext,
  onVolver,
}: Props) {
  const elegida = item.opcionElegida
  const fueAcierto =
    elegida !== null && item.opciones[elegida]?.correcta === true

  return (
    <div className="animate-slide-up">
      <div className="glass-subtle mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-l-4 border-l-blue-500/60 px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
          <Eye className="h-4 w-4" />
          <span className="font-medium">Carta anterior</span>
          <span className="hidden text-xs text-blue-600/70 sm:inline dark:text-blue-400/70">
            — solo lectura
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={idx === 0}
            className="glass btn-press inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-blue-700 disabled:cursor-not-allowed disabled:opacity-30 dark:text-blue-300"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Más atrás
          </button>
          <span className="px-1.5 text-[10px] tabular-nums text-zinc-500 dark:text-zinc-400">
            {idx + 1}/{total}
          </span>
          <button
            onClick={onNext}
            disabled={idx === total - 1}
            className="glass btn-press inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-blue-700 disabled:cursor-not-allowed disabled:opacity-30 dark:text-blue-300"
          >
            Adelante <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onVolver}
            className="btn-press ml-1 inline-flex items-center gap-1 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 px-2.5 py-1 text-xs font-medium text-white shadow"
          >
            Volver
          </button>
        </div>
      </div>

      <div className="glass-strong overflow-hidden rounded-3xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="flex flex-wrap items-center gap-2">
            {carta.tag && (
              <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
                {carta.tag}
              </span>
            )}
            <span
              className={cn(
                "text-[10px] font-medium tracking-wider uppercase",
                fueAcierto
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400",
              )}
            >
              {fueAcierto ? "✓ Acertaste" : "✗ Fallaste"}
            </span>
          </div>
        </div>

        <div className="px-6 pt-5 pb-6 sm:px-10">
          <p className="font-serif text-xl leading-relaxed text-zinc-900 sm:text-2xl dark:text-zinc-50">
            {carta.front}
          </p>
          <div className="mt-6 space-y-2.5">
            {item.opciones.map((op, i) => {
              const esElegida = i === elegida
              const esCorrectaRevelada = !esElegida && op.correcta
              const cls = cn(
                "opcion-btn flex w-full cursor-default items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-medium opacity-95",
                esElegida && op.correcta && "opcion-correcta-respondida",
                esElegida && !op.correcta && "opcion-incorrecta",
                esCorrectaRevelada && "opcion-correcta-revelada",
              )
              return (
                <div key={i} className={cls}>
                  <span className="opcion-letra">{LETRAS[i]}</span>
                  <span className="flex-1 leading-snug">{op.texto}</span>
                  {esElegida && op.correcta && (
                    <Check className="ml-auto h-4 w-4 shrink-0" />
                  )}
                  {esElegida && !op.correcta && (
                    <X className="ml-auto h-4 w-4 shrink-0" />
                  )}
                  {esCorrectaRevelada && (
                    <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-500" />
                  )}
                </div>
              )
            })}
          </div>

          {carta.back && (
            <div
              className={cn(
                "glass-subtle mt-6 rounded-2xl border-l-4 p-4",
                fueAcierto
                  ? "border-l-emerald-500/60"
                  : "border-l-orange-500/60",
              )}
            >
              <p
                className={cn(
                  "mb-1.5 text-[11px] font-medium tracking-wider uppercase",
                  fueAcierto
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-orange-600 dark:text-orange-400",
                )}
              >
                {fueAcierto ? "Explicación" : "Para recordar"}
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">
                {carta.back}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-white/5 p-4 text-center text-xs text-zinc-400 sm:p-5 dark:text-zinc-500">
          No podés modificar la respuesta — esto es solo para revisar.
        </div>
      </div>
    </div>
  )
}
