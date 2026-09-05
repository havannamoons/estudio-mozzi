"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { Estirandose, Saludando } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"

/**
 * Cierre del Match.
 *
 * Antes, al emparejar el último par solo aparecía un cartelito chico y el
 * tablero quedaba ahí, resuelto: no había forma de saber que se había
 * terminado. Ahora el cierre ocupa la pantalla, como en el quiz.
 *
 * Dos versiones según cómo saliste:
 *   · sin ningún error  → festeja con anteojos de sol y cae confeti
 *   · con errores       → alienta, sin anteojos: si te costó, un muñequito
 *                         canchero se siente burla y no compañía
 */
interface Props {
  api: EstudioApi
  pares: number
  intentos: number
  onOtraRonda: () => void
}

export function MatchTerminado({ api, pares, intentos, onOtraRonda }: Props) {
  // Perfecto = un intento por par, sin errores.
  const perfecto = intentos <= pares
  const errores = Math.max(0, intentos - pares)

  return (
    <div className="sin-bichito anim-fade relative py-8 text-center">
      {perfecto && <Confeti cantidad={26} />}

      <div className="festeja mx-auto mb-7 w-fit">
        {perfecto ? (
          <Estirandose size={210} color="var(--dorado)" festeja lentes />
        ) : (
          <Saludando size={195} color="var(--cielo)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        Match terminado
      </p>
      <p className="serif mb-4 text-[clamp(1.8rem,5vw,2.4rem)] leading-tight">
        {perfecto ? "¡Impecable!" : "¡Listo, todos emparejados!"}
      </p>

      <p className="mx-auto mb-8 max-w-sm text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        {perfecto
          ? `Los ${pares} pares de una, sin un solo error. Estos conceptos ya los tenés atados a su referente.`
          : `${pares} pares emparejados en ${intentos} intentos. Los ${errores} ${
              errores === 1 ? "cruce" : "cruces"
            } que fallaron son justo los que conviene mirar de nuevo.`}
      </p>

      <div className="mb-9 flex flex-wrap items-center justify-center gap-3">
        <button onClick={onOtraRonda} className="btn-lunar btn-lila">
          Otra ronda
        </button>
        <button
          onClick={() => api.cambiarModo("cloze")}
          className="btn-lunar btn-suave"
        >
          Probar Cloze
        </button>
        <button
          onClick={() => api.cambiarModo("estudio")}
          className="btn-lunar btn-fantasma !px-0"
        >
          Volver a los temas
        </button>
      </div>
    </div>
  )
}
