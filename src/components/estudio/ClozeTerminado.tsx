"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import type { Cloze } from "@/lib/types"
import { Estirandose, LunaProta, Saludando } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"

/**
 * Cierre del Cloze.
 *
 * Reemplaza a la pantalla vieja (copa de trofeo, degradés y tarjetas de
 * vidrio). Mantiene lo único que valía la pena de aquella: la lista de los
 * que fallaste con la respuesta correcta al lado — que es donde de verdad se
 * aprende algo después de jugar.
 */

interface Resp {
  id: string
  elegida: string
  ok: boolean
}

interface Props {
  api: EstudioApi
  aciertos: number
  total: number
  items: Cloze[]
  respuestas: Resp[]
  onOtraPartida: () => void
}

export function ClozeTerminado({
  api,
  aciertos,
  total,
  items,
  respuestas,
  onOtraPartida,
}: Props) {
  const pct = total > 0 ? Math.round((aciertos / total) * 100) : 0
  const perfecto = aciertos === total && total > 0
  const bien = pct >= 70
  const masOMenos = pct >= 40 && pct < 70
  const errores = respuestas.filter((r) => !r.ok)

  const color = bien
    ? "var(--acierto)"
    : masOMenos
      ? "var(--dorado)"
      : "var(--lila)"

  const titulo = perfecto
    ? "¡Impecable!"
    : bien
      ? "¡Muy bien!"
      : masOMenos
        ? "¡Buen laburo!"
        : "¡Ya arrancaste!"

  const mensaje = perfecto
    ? `Los ${total} términos exactos, sin ayuda. Estas palabras ya las producís, no solo las reconocés.`
    : bien
      ? "Casi todas. Completar de memoria cuesta más que elegir entre opciones, así que este puntaje vale doble."
      : masOMenos
        ? "Vas por buen camino. Mirá abajo las que fallaron: el término exacto es lo que se toma en el final."
        : "Completar de memoria es lo más difícil de todos los modos. Mirá las respuestas de abajo y probá otra ronda."

  return (
    <div className="sin-bichito anim-fade relative py-6 text-center">
      {perfecto && <Confeti cantidad={26} />}

      <div className="festeja mx-auto mb-7 w-fit">
        {perfecto ? (
          <Estirandose size={205} color="var(--dorado)" festeja lentes />
        ) : bien ? (
          <Estirandose size={200} color="var(--menta)" festeja />
        ) : masOMenos ? (
          <LunaProta size={195} />
        ) : (
          <Saludando size={190} color="var(--cielo)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        Cloze terminado
      </p>
      <p className="serif mb-3 text-[clamp(1.8rem,5vw,2.4rem)] leading-tight">
        {titulo}
      </p>

      <p className="t-dato" style={{ color }}>
        {pct}%
      </p>
      <p className="mb-6 text-[15px] font-bold text-[var(--noche)]/45">
        {aciertos} de {total} completadas bien
      </p>

      <div className="mx-auto mb-8 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-[var(--noche)]/10">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>

      <p className="mx-auto mb-9 max-w-sm text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        {mensaje}
      </p>

      {/* Lo que fallaste, con el término correcto. Es la parte que enseña. */}
      {errores.length > 0 && (
        <div className="mx-auto mb-9 max-w-lg text-left">
          <p className="mb-4 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
            Para revisar ({errores.length})
          </p>
          {errores.map((r) => {
            const cloze = items.find((c) => c.id === r.id)
            if (!cloze) return null
            const correcta = cloze.respuestas[0]
            const partes = cloze.frase.split("___")
            return (
              <div key={r.id} className="fila py-4">
                {cloze.tema && (
                  <p className="mb-1.5 text-[12px] font-bold text-[var(--lila)]">
                    {cloze.tema}
                  </p>
                )}
                <p className="text-[15px] leading-relaxed">
                  {partes[0]}
                  <strong className="mx-1 rounded-md bg-[var(--acierto)]/18 px-1.5 py-0.5 font-extrabold">
                    {correcta}
                  </strong>
                  {partes[1]}
                </p>
                <p className="mt-1.5 text-[13px] font-semibold text-[var(--noche)]/45">
                  pusiste{" "}
                  <span className="text-[var(--error)] line-through">
                    {r.elegida}
                  </span>
                </p>
              </div>
            )
          })}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button onClick={onOtraPartida} className="btn-lunar btn-lila">
          Otra ronda
        </button>
        <button
          onClick={() => api.cambiarModo("match")}
          className="btn-lunar btn-suave"
        >
          Probar Match
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
