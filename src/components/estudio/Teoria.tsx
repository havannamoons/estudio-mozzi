"use client"

import { ArrowRight, Target } from "lucide-react"
import type { TemaContenido } from "@/lib/types"

interface Props {
  tema: TemaContenido
  onIrAlQuiz: () => void
}

export function Teoria({ tema, onIrAlQuiz }: Props) {
  return (
    <div className="space-y-3">
      {tema.teoria.map((b, i) => (
        <article
          key={i}
          className="glass-strong teoria-block anim-fade rounded-2xl p-5 sm:p-6"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <div className="mb-2.5 flex items-center gap-2">
            <span className="indice-bloque">{i + 1}</span>
            <h3 className="font-serif text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">
              {b.titulo}
            </h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: b.contenido }} />
          {b.clinico && (
            <div className="clinico mt-3">
              <span className="clinico-label">Referente clínico</span>
              <span dangerouslySetInnerHTML={{ __html: b.clinico }} />
            </div>
          )}
        </article>
      ))}

      {tema.tipParcial && (
        <div className="tip-parcial mt-4 rounded-2xl p-4">
          <div className="mb-1.5 flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5" style={{ color: "rgb(251,191,36)" }} />
            <p
              className="text-[10px] font-medium tracking-wider uppercase"
              style={{ color: "rgb(251,191,36)" }}
            >
              Tip de parcial · Cát. Pino (ex Mozzi)
            </p>
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgb(254,215,170)" }}
            dangerouslySetInnerHTML={{ __html: tema.tipParcial }}
          />
        </div>
      )}

      {tema.biblio && (
        <div className="glass mt-3 rounded-2xl p-4">
          <p className="mb-1.5 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
            Bibliografía obligatoria
          </p>
          <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            {tema.biblio}
          </p>
        </div>
      )}

      <div className="mt-5 text-center">
        <button
          onClick={onIrAlQuiz}
          className="btn-press inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 transition-all hover:from-emerald-700 hover:to-emerald-800"
        >
          Probate con el quiz <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
