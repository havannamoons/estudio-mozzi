"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import type { EstiloSimulacro, PreguntaSimulacro, RespuestaSimulacro, TemaContenido } from "@/lib/types"
import { Estirandose, LunaProta, Saludando } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"
import { ResumenCalibracion, TagSeguridad } from "./Calibracion"

/**
 * Cierre del simulacro.
 *
 * Los otros tres modos ya cerraban así (muñequito, confeti, el dato grande);
 * el simulacro seguía terminando en una tarjeta con un trofeo de librería, que
 * era justo la pieza que delataba que venía de otra app.
 *
 * Además de vestirlo, cambia lo que muestra. En el simulacro cronometrado no
 * viste ninguna corrección mientras rendías, así que acá abajo está TODO lo que
 * te perdiste: las que erraste, las que dejaste en blanco, y por qué.
 */

const LETRAS = ["A", "B", "C", "D", "E", "F"]

interface Props {
  api: EstudioApi
  preguntas: PreguntaSimulacro[]
  respuestas: RespuestaSimulacro[]
  estilo: EstiloSimulacro
  porTiempo: boolean
  onOtro: () => void
}

export function SimulacroTerminado({
  api,
  preguntas,
  respuestas,
  estilo,
  porTiempo,
  onOtro,
}: Props) {
  const TEMAS = api.contenido.temas
  const total = preguntas.length
  const correctas = respuestas.filter((r) => r.correcta).length
  const pct = total > 0 ? Math.round((correctas / total) * 100) : 0
  const bien = pct >= 70
  const masOMenos = pct >= 40 && pct < 70

  const color = bien
    ? "var(--acierto)"
    : masOMenos
      ? "var(--dorado)"
      : "var(--lila)"

  /* Las que ni tocó. Solo pueden existir en examen, y son parte del
     diagnóstico: dejar cinco en blanco por reloj no es lo mismo que errarlas. */
  const enBlanco = preguntas.filter(
    (p) =>
      !respuestas.some(
        (r) => r.temaId === p.temaId && r.preguntaIdx === p.preguntaIdx,
      ),
  )
  /* Las que erró con seguridad van primero: son las que más rinde mirar, y en
     una lista larga lo que queda abajo no se lee. */
  const errores = respuestas
    .filter((r) => !r.correcta)
    .sort((a, b) =>
      a.seguridad === "seguro" && b.seguridad !== "seguro"
        ? -1
        : b.seguridad === "seguro" && a.seguridad !== "seguro"
          ? 1
          : 0,
    )

  /* Mensajes sin marca de género, igual que en el resto de la app. */
  const titulo = porTiempo
    ? "Se acabó el tiempo"
    : bien
      ? "¡Muy bien!"
      : masOMenos
        ? "¡Buen laburo!"
        : "Hay que reforzar"

  const mensaje = porTiempo
    ? `Contestaste ${respuestas.length} de ${total} antes de que se cortara. Repartir el tiempo también se practica: en la próxima, si una pregunta te trabó más de dos minutos, marcá cualquiera y seguí.`
    : bien
      ? estilo === "examen"
        ? "Con reloj y sin ver si vas bien, este número vale doble. Así se siente el final."
        : "Estás para el final. Probalo ahora con reloj: es otra cosa cuando no sabés cómo vas."
      : masOMenos
        ? "Buen punto de partida. Abajo están las que fallaste: esas son las que conviene mirar hoy, no todo el programa de nuevo."
        : "Un simulacro flojo antes del final es una buena noticia: te muestra qué estudiar mientras todavía hay tiempo."

  // Desglose por tema, en el orden del programa
  const desglose = TEMAS.map((t) => {
    const delTema = respuestas.filter((r) => r.temaId === t.id)
    const blancoDelTema = enBlanco.filter((p) => p.temaId === t.id).length
    const cuantas = delTema.length + blancoDelTema
    if (cuantas === 0) return null
    return {
      tema: t,
      total: cuantas,
      ok: delTema.filter((r) => r.correcta).length,
    }
  }).filter(
    (x): x is { tema: TemaContenido; total: number; ok: number } => x !== null,
  )

  return (
    <div className="sin-bichito anim-fade relative mx-auto max-w-xl py-6 text-center">
      {/* Sin confeti cuando se cortó por reloj: festejar ahí sería burlarse. */}
      {!porTiempo && <Confeti cantidad={bien ? 34 : 20} />}

      <div className="festeja mx-auto mb-7 w-fit">
        {bien ? (
          <Estirandose size={210} color="var(--menta)" festeja />
        ) : masOMenos ? (
          <LunaProta size={205} />
        ) : (
          <Saludando size={198} color="var(--cielo)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        {estilo === "examen" ? "Examen entregado" : "Simulacro terminado"}
      </p>
      <p className="serif mb-3 text-[clamp(1.9rem,5.5vw,2.6rem)] leading-tight">
        {titulo}
      </p>

      <p className="t-dato" style={{ color }}>
        {pct}%
      </p>
      <p className="mb-6 text-[15px] font-bold text-[var(--noche)]/45">
        {correctas} de {total} correctas
        {enBlanco.length > 0 && ` · ${enBlanco.length} sin contestar`}
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

      <button onClick={onOtro} className="btn-lunar btn-lila mb-10">
        Otro simulacro
      </button>

      <ResumenCalibracion respuestas={respuestas} />

      {/* Por tema: filas, no tarjetas */}
      <div className="mb-10 text-left">
        <p className="mb-3 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
          Cómo te fue por tema
        </p>
        {desglose.map(({ tema, total: n, ok }) => {
          const p = n > 0 ? Math.round((ok / n) * 100) : 0
          return (
            <button
              key={tema.id}
              onClick={() => {
                api.seleccionarTema(tema.id)
                api.cambiarModo("estudio")
                api.cambiarTab("teoria")
              }}
              className="fila flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:text-[var(--lila)]"
              title={`Ir a la teoría de ${tema.titulo}`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold">
                  {tema.titulo}
                </span>
                <span className="block text-[12px] font-bold text-[var(--noche)]/35">
                  {tema.practico}
                </span>
              </span>
              <span className="shrink-0 text-[15px] font-extrabold tabular-nums">
                {ok}/{n}
              </span>
              <span
                className="h-1.5 w-14 shrink-0 overflow-hidden rounded-full bg-[var(--noche)]/10"
                aria-hidden="true"
              >
                <span
                  className="block h-full rounded-full"
                  style={{
                    width: `${p}%`,
                    background:
                      p >= 70
                        ? "var(--acierto)"
                        : p >= 40
                          ? "var(--dorado)"
                          : "var(--error)",
                  }}
                />
              </span>
            </button>
          )
        })}
      </div>

      {/* Repaso de lo que salió mal. En examen es la primera vez que lo ve. */}
      {(errores.length > 0 || enBlanco.length > 0) && (
        <div className="text-left">
          <p className="mb-1 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
            Para repasar ({errores.length + enBlanco.length})
          </p>
          <p className="mb-5 text-[14px] leading-relaxed font-medium text-[var(--noche)]/55">
            Leer la explicación justo después de errar es cuando más queda. No
            dejes esto para mañana.
          </p>

          {errores.map((err, i) => {
            const tema = TEMAS.find((t) => t.id === err.temaId)
            const pregunta = tema?.preguntas[err.preguntaIdx]
            if (!tema || !pregunta) return null
            return (
              <div key={`e${i}`} className="fila py-5">
                <p className="mb-2 text-[12px] font-bold text-[var(--noche)]/35">
                  {tema.practico} · {tema.titulo}
                  <TagSeguridad seguridad={err.seguridad} />
                </p>
                <p className="serif mb-4 text-[19px] leading-snug">
                  {pregunta.q}
                </p>
                <p className="mb-1.5 text-[15px] leading-snug font-semibold text-[var(--error)]">
                  Pusiste: {LETRAS[err.elegida]}. {pregunta.opciones[err.elegida]}
                </p>
                <p className="mb-3 text-[15px] leading-snug font-semibold text-[var(--acierto)]">
                  Era: {LETRAS[pregunta.correcta]}.{" "}
                  {pregunta.opciones[pregunta.correcta]}
                </p>
                <p className="text-[15px] leading-relaxed font-medium whitespace-pre-wrap text-[var(--noche)]/65">
                  {pregunta.exp}
                </p>
              </div>
            )
          })}

          {enBlanco.map((p, i) => {
            const tema = TEMAS.find((t) => t.id === p.temaId)
            const pregunta = tema?.preguntas[p.preguntaIdx]
            if (!tema || !pregunta) return null
            return (
              <div key={`b${i}`} className="fila py-5">
                <p className="mb-2 text-[12px] font-bold text-[var(--noche)]/35">
                  {tema.practico} · {tema.titulo} · sin contestar
                </p>
                <p className="serif mb-4 text-[19px] leading-snug">
                  {pregunta.q}
                </p>
                <p className="mb-3 text-[15px] leading-snug font-semibold text-[var(--acierto)]">
                  Era: {LETRAS[pregunta.correcta]}.{" "}
                  {pregunta.opciones[pregunta.correcta]}
                </p>
                <p className="text-[15px] leading-relaxed font-medium whitespace-pre-wrap text-[var(--noche)]/65">
                  {pregunta.exp}
                </p>
              </div>
            )
          })}
        </div>
      )}

      <p className="mt-10 mb-4 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        ¿Seguimos con…?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => api.cambiarModo("estudio")}
          className="btn-lunar btn-suave !px-5 !py-3 text-[15px]"
        >
          Estudiar por tema
        </button>
        <button
          onClick={() => api.cambiarModo("match")}
          className="btn-lunar btn-suave !px-5 !py-3 text-[15px]"
        >
          Match
        </button>
        <button
          onClick={() => api.cambiarModo("cloze")}
          className="btn-lunar btn-suave !px-5 !py-3 text-[15px]"
        >
          Cloze
        </button>
      </div>
    </div>
  )
}
