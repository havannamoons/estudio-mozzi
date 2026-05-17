"use client"

import { BookOpen, Brain } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { cn } from "@/lib/utils"
import { Teoria } from "./Teoria"
import { Quiz } from "./Quiz"

interface Props {
  api: EstudioApi
}

export function ContenidoTema({ api }: Props) {
  const { temaActivo, tab, cambiarTab, progresoTema } = api
  const prog = progresoTema(temaActivo.id)

  return (
    <div className="anim-fade">
      {/* Header del tema */}
      <div className="glass-strong mb-4 rounded-2xl p-5 sm:p-7">
        <div className="mb-1.5 text-[10px] font-medium tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
          {temaActivo.practico}
        </div>
        <h2 className="font-serif text-xl leading-tight font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-50">
          {temaActivo.titulo}
        </h2>
        <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          {temaActivo.subtitulo}
        </p>
      </div>

      {/* Tabs */}
      <div className="glass mb-4 inline-flex items-center gap-1 rounded-xl p-1">
        <button
          onClick={() => cambiarTab("teoria")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-colors",
            tab === "teoria"
              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
          )}
        >
          <BookOpen className="h-3.5 w-3.5" /> Teoría
        </button>
        <button
          onClick={() => cambiarTab("quiz")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-colors",
            tab === "quiz"
              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
          )}
        >
          <Brain className="h-3.5 w-3.5" /> Quiz
          {prog.hechas > 0 && (
            <span
              className={cn(
                "ml-1 rounded px-1.5 py-0.5 text-[10px] tabular-nums",
                prog.correctas === prog.total
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                  : "bg-white/10 text-zinc-500 dark:text-zinc-400",
              )}
            >
              {prog.correctas}/{prog.total}
            </span>
          )}
        </button>
      </div>

      {tab === "teoria" ? (
        <Teoria tema={temaActivo} onIrAlQuiz={() => cambiarTab("quiz")} />
      ) : (
        <Quiz api={api} />
      )}
    </div>
  )
}
