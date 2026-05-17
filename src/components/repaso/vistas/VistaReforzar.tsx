"use client"

import { CheckCircle2, Dumbbell, Play } from "lucide-react"
import type { RepasoApi } from "@/lib/hooks/useRepaso"
import { cartasParaReforzar } from "@/lib/carta-helpers"

interface Props {
  api: RepasoApi
}

export function VistaReforzar({ api }: Props) {
  const { cartas, iniciarReforzar } = api
  const reforzables = cartasParaReforzar(cartas)
  const tagsReforzar = Array.from(
    new Set(reforzables.map((c) => c.tag).filter(Boolean)),
  ).sort()

  if (reforzables.length === 0) {
    return (
      <div className="glass-strong animate-scale-in rounded-3xl p-10 text-center sm:p-14">
        <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-3">
          <CheckCircle2 className="h-7 w-7 text-emerald-500" />
        </div>
        <h2 className="mb-2 text-lg font-medium text-zinc-800 dark:text-zinc-100">
          No hay nada para reforzar
        </h2>
        <p className="mx-auto max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
          Las cartas que vas fallando aparecen acá para que las practiques con el método{" "}
          <strong>Estudiar → Probarme</strong>, sin afectar el calendario.
        </p>
      </div>
    )
  }

  const iniciar = (tag?: string) => {
    const ids = reforzables
      .filter((c) => !tag || c.tag === tag)
      .map((c) => c.id)
    if (ids.length === 0) return
    iniciarReforzar(ids)
  }

  return (
    <div className="animate-slide-up space-y-4">
      <div className="glass-strong rounded-3xl p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="mb-1 flex items-center gap-2 text-lg font-medium text-zinc-800 dark:text-zinc-100">
              <Dumbbell className="h-5 w-5 text-orange-500" />
              Cartas para reforzar
            </h2>
            <p className="max-w-md text-sm text-zinc-500 dark:text-zinc-400">
              {reforzables.length} carta{reforzables.length === 1 ? "" : "s"}. Vas a pasar
              por cada una con el método <strong>Estudiar → Probarme</strong>: leés la
              respuesta con un método de aprendizaje, después te tomamos sin pistas. Si
              fallás, volvés a estudiarla.
            </p>
          </div>
          <button
            onClick={() => iniciar()}
            className="btn-press inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg"
          >
            <Play className="h-4 w-4" /> Empezar
          </button>
        </div>

        {tagsReforzar.length > 1 && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Por etiqueta:</span>
            <button
              onClick={() => iniciar()}
              className="glass-subtle btn-press rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
            >
              Todas ({reforzables.length})
            </button>
            {tagsReforzar.map((t) => {
              const n = reforzables.filter((c) => c.tag === t).length
              return (
                <button
                  key={t}
                  onClick={() => iniciar(t)}
                  className="glass-subtle btn-press rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
                >
                  {t} ({n})
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="space-y-2">
        {reforzables.slice(0, 30).map((c) => {
          const total = c.aciertos + c.fallos
          const acc = total > 0 ? Math.round((c.aciertos / total) * 100) : null
          return (
            <div
              key={c.id}
              className="glass rounded-2xl border-l-4 border-l-orange-500/50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  {c.tag && (
                    <span className="mb-1.5 inline-block rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
                      {c.tag}
                    </span>
                  )}
                  <p className="line-clamp-2 font-serif text-base leading-snug text-zinc-800 dark:text-zinc-100">
                    {c.front}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
                    {c.aciertos}/{total || 0}
                  </div>
                  {acc !== null ? (
                    <div
                      className={`text-[11px] tabular-nums ${
                        acc < 50 ? "text-red-500" : "text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {acc}%
                    </div>
                  ) : (
                    <div className="text-[11px] text-zinc-400 dark:text-zinc-600">nueva</div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        {reforzables.length > 30 && (
          <p className="pt-2 text-center text-xs text-zinc-400 dark:text-zinc-600">
            y {reforzables.length - 30} más…
          </p>
        )}
      </div>
    </div>
  )
}
