"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { TEMAS } from "@/lib/data/temas"
import { cn } from "@/lib/utils"

interface Props {
  api: EstudioApi
}

export function Sidebar({ api }: Props) {
  const { temaActivoId, seleccionarTema, progresoTema } = api
  return (
    <aside className="glass h-fit rounded-2xl p-3 lg:sticky lg:top-4">
      <p className="mb-2 px-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
        Temas
      </p>
      <nav className="space-y-0.5">
        {TEMAS.map((t) => {
          const prog = progresoTema(t.id)
          const isActive = t.id === temaActivoId
          const pct = prog.total > 0 ? Math.round((prog.correctas / prog.total) * 100) : 0
          const dotCls =
            prog.hechas === 0
              ? "bg-zinc-300 dark:bg-zinc-700"
              : pct >= 80
                ? "bg-emerald-500"
                : "bg-red-500"
          return (
            <button
              key={t.id}
              onClick={() => seleccionarTema(t.id)}
              className={cn(
                "w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-xs transition-colors",
                "border-l-2",
                isActive
                  ? "border-l-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200"
                  : "border-l-transparent text-zinc-600 hover:bg-white/30 dark:text-zinc-300 dark:hover:bg-white/5",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-500">
                    {t.practico}
                  </div>
                  <div className="leading-snug font-medium">{t.titulo}</div>
                </div>
                <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", dotCls)} />
              </div>
              {prog.hechas > 0 && (
                <div className="mt-1.5 text-[10px] tabular-nums text-zinc-500 dark:text-zinc-500">
                  Quiz: {prog.correctas}/{prog.hechas}{" "}
                  <span className="text-zinc-400 dark:text-zinc-600">de {prog.total}</span>
                </div>
              )}
            </button>
          )
        })}
      </nav>
      <div className="mt-3 border-t border-white/10 pt-3 px-2">
        <p className="text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-500">
          Cada tema tiene <span className="text-zinc-700 dark:text-zinc-300">Teoría</span> y{" "}
          <span className="text-zinc-700 dark:text-zinc-300">Quiz</span>. Tu progreso se guarda automáticamente.
        </p>
      </div>
    </aside>
  )
}
