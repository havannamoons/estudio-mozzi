"use client"

import { CheckCircle2, Flame, Layers, Trophy } from "lucide-react"
import type { Carta, Stats } from "@/lib/types"
import { CAJA_DOMINADA } from "@/lib/constants"
import { precisionGlobal } from "@/lib/carta-helpers"
import { cn } from "@/lib/utils"

interface Props {
  cartas: Carta[]
  stats: Stats
}

export function StatsBar({ cartas, stats }: Props) {
  const totalCartas = cartas.length
  const aciertos = stats.aciertosTotal
  const dominadas = cartas.filter((c) => c.caja >= CAJA_DOMINADA).length
  const racha = stats.racha

  const items = [
    { label: "Cartas", value: totalCartas, Icon: Layers, accent: totalCartas > 0 },
    { label: "Aciertos", value: aciertos, Icon: CheckCircle2, accent: aciertos > 0 },
    { label: "Dominadas", value: dominadas, Icon: Trophy, accent: dominadas > 0 },
    { label: "Racha", value: racha, Icon: Flame, accent: racha > 0 },
  ] as const

  const prec = precisionGlobal(stats.aciertosTotal, stats.fallosTotal)
  const extra: string[] = []
  extra.push(`${cartas.length} carta${cartas.length === 1 ? "" : "s"} totales`)
  if (prec !== null) extra.push(`${prec}% precisión`)
  if (stats.aciertosHoy > 0) extra.push(`${stats.aciertosHoy} aciertos hoy`)

  return (
    <section className="mb-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {items.map(({ label, value, Icon, accent }) => (
          <div key={label} className="glass rounded-2xl p-3 sm:p-4">
            <div className="mb-1 flex items-center gap-1.5">
              <Icon
                className={cn(
                  "h-3.5 w-3.5",
                  accent ? "text-emerald-400" : "text-zinc-400 dark:text-zinc-500",
                )}
              />
              <span className="truncate text-[10px] tracking-wide text-zinc-500 uppercase sm:text-xs dark:text-zinc-400">
                {label}
              </span>
            </div>
            <div
              className={cn(
                "text-xl font-semibold tabular-nums sm:text-2xl",
                accent ? "text-emerald-400" : "text-zinc-700 dark:text-zinc-300",
              )}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] text-zinc-500 dark:text-zinc-400">
        {extra.join(" · ")}
      </p>
    </section>
  )
}
