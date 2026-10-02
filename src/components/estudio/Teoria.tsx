"use client"

import { ArrowRight, Target } from "lucide-react"
import type { TemaContenido } from "@/lib/types"

interface Props {
  tema: TemaContenido
  onIrAlQuiz: () => void
}

/**
 * La teoría del tema, en bloques numerados.
 *
 * Es la pantalla donde más tiempo se pasa leyendo, así que manda el texto:
 * ancho de lectura acotado, interlineado holgado y cero adornos alrededor.
 * Los bloques van separados por una línea fina en vez de tarjetas, para que
 * se lea como un apunte corrido y no como una sucesión de fichas.
 */
export function Teoria({ tema, onIrAlQuiz }: Props) {
  return (
    <div className="teoria">
      {tema.teoria.map((b, i) => (
        <article key={i} className="anim-fade" style={{ animationDelay: `${i * 40}ms` }}>
          <div className="mb-3 flex items-baseline gap-3">
            <span className="indice-bloque">{i + 1}</span>
            <h3 className="serif text-[clamp(1.15rem,2.6vw,1.5rem)] leading-tight">
              {b.titulo}
            </h3>
          </div>
          <div
            className="contenido-teoria"
            dangerouslySetInnerHTML={{ __html: b.contenido }}
          />
          {b.clinico && (
            <div className="clinico">
              <span className="clinico-label">Referente clínico</span>
              <span dangerouslySetInnerHTML={{ __html: b.clinico }} />
            </div>
          )}
        </article>
      ))}

      {tema.tipParcial && (
        <div className="tip-parcial mt-8">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 shrink-0" />
            <p className="text-[11px] font-extrabold tracking-[0.14em] uppercase">
              Tip de parcial
            </p>
          </div>
          <p
            className="text-[14px] leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: tema.tipParcial }}
          />
        </div>
      )}

      {tema.biblio && (
        <div className="mt-6">
          <p className="mb-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[var(--noche)]/40 uppercase">
            Bibliografía obligatoria
          </p>
          <p className="text-[14px] leading-relaxed font-medium text-[var(--noche)]/60">
            {tema.biblio}
          </p>
        </div>
      )}

      <div className="mt-10 text-center">
        <button onClick={onIrAlQuiz} className="btn-lunar btn-lila">
          Probate con el quiz <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
