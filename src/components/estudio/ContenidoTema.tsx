"use client"

import { BookOpen, Brain } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { cn } from "@/lib/utils"
import { Teoria } from "./Teoria"
import { Quiz } from "./Quiz"

interface Props {
  api: EstudioApi
}

/**
 * Encabezado del tema + las dos pestañas (Teoría y Quiz).
 *
 * Antes el encabezado era una tarjeta de vidrio y la etiqueta del práctico
 * usaba otro peso y otro espaciado que el resto de las etiquetas de la app,
 * así que desentonaba. Ahora comparte el mismo patrón: etiqueta chiquita en
 * versalitas lila, título en Fraunces y una línea que cierra el bloque.
 */
export function ContenidoTema({ api }: Props) {
  const { temaActivo, tab, cambiarTab, progresoTema } = api
  const prog = progresoTema(temaActivo.id)
  const completo = prog.hechas === prog.total && prog.total > 0

  return (
    <div className="anim-fade">
      {/* Encabezado del tema */}
      <div className="mb-6 border-b border-[var(--noche)]/10 pb-6">
        <p className="mb-2 text-[11px] font-extrabold tracking-[0.14em] text-[var(--lila)] uppercase">
          {temaActivo.practico}
        </p>
        <h2 className="serif text-[clamp(1.5rem,3.6vw,2.1rem)] leading-tight">
          {temaActivo.titulo}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed font-medium text-[var(--noche)]/55">
          {temaActivo.subtitulo}
        </p>
      </div>

      {/* Pestañas: mismas pastillas que el selector de modos */}
      <div className="grupo-pastillas mb-6 w-fit">
        <button
          onClick={() => cambiarTab("teoria")}
          aria-pressed={tab === "teoria"}
          className={cn("pastilla", tab === "teoria" && "pastilla-activa")}
        >
          <BookOpen className="h-3.5 w-3.5 shrink-0" /> Teoría
        </button>
        <button
          onClick={() => cambiarTab("quiz")}
          aria-pressed={tab === "quiz"}
          className={cn("pastilla", tab === "quiz" && "pastilla-activa")}
        >
          <Brain className="h-3.5 w-3.5 shrink-0" /> Quiz
          {prog.hechas > 0 && (
            <span
              className={cn(
                "ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold tabular-nums",
                completo
                  ? "bg-[var(--acierto)]/20 text-[var(--noche)]"
                  : "bg-[var(--noche)]/10 text-[var(--noche)]/60",
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
