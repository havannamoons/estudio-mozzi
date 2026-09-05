"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { Estirandose, LunaProta, Saludando } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"
import { ResumenCalibracion } from "./Calibracion"

/**
 * Resumen de la sesión: lo que hiciste en esta sentada, no en un solo tema.
 *
 * Es el cierre "grande". El de cada tema es un aplauso corto para que sigas;
 * este es el que mide de verdad, porque estudiar un tema no dice nada y
 * estudiar cuatro seguidos sí.
 */
export function SesionTerminada({ api }: { api: EstudioApi }) {
  const { sesion, contenido, cerrarResumen, cambiarModo, seleccionarTema } = api

  const totalPreg = sesion.reduce((a, t) => a + t.total, 0)
  const totalOk = sesion.reduce((a, t) => a + t.correctas, 0)
  const pct = totalPreg > 0 ? Math.round((totalOk / totalPreg) * 100) : 0
  const bien = pct >= 70
  const masOMenos = pct >= 40 && pct < 70

  const color = bien
    ? "var(--acierto)"
    : masOMenos
      ? "var(--dorado)"
      : "var(--lila)"

  const titulo = bien
    ? "¡Sesión redonda!"
    : masOMenos
      ? "¡Buena sesión!"
      : "¡Sesión hecha!"

  const mensaje = bien
    ? `${sesion.length} ${sesion.length === 1 ? "tema" : "temas"} y ${pct}% de aciertos. Así se llega entrenada al final: de a poco y seguido.`
    : masOMenos
      ? `${sesion.length} ${sesion.length === 1 ? "tema" : "temas"} en el cuerpo. Lo que falló hoy es exactamente lo que conviene repasar mañana.`
      : `Lo importante es que te sentaste a hacerlo. Los números suben solos cuando el hábito ya está.`

  const nombreDe = (id: string) =>
    contenido.temas.find((t) => t.id === id)?.titulo ?? id

  /* Calibración de toda la sentada. Sobre varios temas el dato dice bastante
     más que sobre uno solo: un tema flojo puede ser mala suerte, un patrón de
     errar con seguridad repetido en cuatro temas ya es un modo de estudiar. */
  const respuestasDeLaSesion = sesion.flatMap((t) =>
    Object.values(api.progreso[t.temaId] ?? {}),
  )

  return (
    <div className="sin-bichito anim-fade relative mx-auto max-w-xl py-6 text-center">
      <Confeti cantidad={34} />
      <div className="festeja mx-auto mb-7 w-fit">
        {bien ? (
          <Estirandose size={215} color="var(--menta)" festeja />
        ) : masOMenos ? (
          <LunaProta size={210} />
        ) : (
          <Saludando size={200} color="var(--cielo)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        Resumen de la sesión
      </p>
      <p className="serif mb-3 text-[clamp(1.9rem,5.5vw,2.6rem)] leading-tight">
        {titulo}
      </p>

      <p className="t-dato" style={{ color }}>
        {pct}%
      </p>
      <p className="mb-6 text-[15px] font-bold text-[var(--noche)]/45">
        {totalOk} de {totalPreg} correctas · {sesion.length}{" "}
        {sesion.length === 1 ? "tema" : "temas"}
      </p>

      <div className="mx-auto mb-8 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-[var(--noche)]/10">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>

      <p className="mx-auto mb-9 max-w-md text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        {mensaje}
      </p>

      <div className="mx-auto max-w-md">
        <ResumenCalibracion respuestas={respuestasDeLaSesion} />
      </div>

      {/* Detalle por tema: dónde estuviste fuerte y dónde no */}
      <div className="mx-auto mb-9 max-w-md text-left">
        {sesion.map((t) => {
          const p = t.total > 0 ? Math.round((t.correctas / t.total) * 100) : 0
          return (
            <button
              key={t.temaId}
              onClick={() => {
                seleccionarTema(t.temaId)
                cerrarResumen()
              }}
              className="fila flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:text-[var(--lila)]"
            >
              <span className="min-w-0 flex-1 truncate text-[15px] font-semibold">
                {nombreDe(t.temaId)}
              </span>
              <span className="shrink-0 text-[15px] font-extrabold tabular-nums">
                {t.correctas}/{t.total}
              </span>
              <span
                className="h-1.5 w-14 shrink-0 overflow-hidden rounded-full bg-[var(--noche)]/10"
                aria-hidden="true"
              >
                <span
                  className="block h-full rounded-full"
                  style={{
                    width: `${p}%`,
                    background: p >= 70 ? "var(--acierto)" : p >= 40 ? "var(--dorado)" : "var(--error)",
                  }}
                />
              </span>
            </button>
          )
        })}
      </div>

      <p className="mb-4 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        ¿Seguimos con…?
      </p>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {(["match", "cloze", "simulacro"] as const).map((m) => (
          <button
            key={m}
            onClick={() => {
              cerrarResumen()
              cambiarModo(m)
            }}
            className="btn-lunar btn-suave !px-5 !py-3 text-[15px] capitalize"
          >
            {m}
          </button>
        ))}
      </div>

      <button onClick={cerrarResumen} className="btn-lunar btn-lila">
        Empezar otra sesión
      </button>
    </div>
  )
}
