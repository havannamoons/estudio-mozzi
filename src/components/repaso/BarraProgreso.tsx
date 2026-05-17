"use client"

import type { Stats } from "@/lib/types"

interface Props {
  hechas: number
  totalReal: number
  esReforzar: boolean
  stats: Stats
}

export function BarraProgreso({ hechas, totalReal, esReforzar, stats }: Props) {
  if (esReforzar) {
    const progreso = totalReal > 0 ? Math.round((hechas / totalReal) * 100) : 0
    return (
      <div className="mt-5">
        <div className="glass-subtle h-1.5 overflow-hidden rounded-full">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
          <span>
            {hechas} de {totalReal} en esta sesión
          </span>
          <span>{progreso}%</span>
        </div>
      </div>
    )
  }

  const precision =
    stats.aciertosHoy && hechas > 0
      ? Math.round((stats.aciertosHoy / hechas) * 100)
      : null

  return (
    <div className="mt-5 flex items-center justify-between text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
      <span>
        {hechas} repaso{hechas === 1 ? "" : "s"} hoy
      </span>
      {precision !== null && <span>{precision}% precisión</span>}
    </div>
  )
}
