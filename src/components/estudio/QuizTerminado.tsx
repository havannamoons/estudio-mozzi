"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { Estirandose, LunaProta, Saludando } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"
import { ResumenCalibracion } from "./Calibracion"

/**
 * Pantalla de cierre del quiz de un tema.
 *
 * Antes, al contestar la última pregunta no pasaba nada: la vista quedaba
 * igual y no había forma de saber que se había terminado. Ahora aparece esto, que
 * hace tres cosas: te dice cómo te fue, te felicita con un muñequito acorde,
 * y —lo más importante— te ofrece a dónde seguir. Sin eso, el final del quiz
 * es un callejón sin salida.
 */

interface Props {
  api: EstudioApi
  correctas: number
  total: number
  onRevisar: () => void
}

export function QuizTerminado({ api, correctas, total, onRevisar }: Props) {
  const pct = total > 0 ? Math.round((correctas / total) * 100) : 0
  const bien = pct >= 70
  const masOMenos = pct >= 40 && pct < 70

  // El siguiente tema del recorrido, si queda alguno.
  const temas = api.contenido.temas
  const idx = temas.findIndex((t) => t.id === api.temaActivoId)
  const siguiente = idx >= 0 && idx < temas.length - 1 ? temas[idx + 1] : null

  /* Los mensajes van sin marca de género: nada de "tranquila" ni "listo".
     La app la usa cualquiera, y el texto no tiene por qué suponer nada. */
  const titulo = bien
    ? "¡Muy bien!"
    : masOMenos
      ? "¡Buen laburo!"
      : "¡Ya arrancaste!"

  const mensaje = bien
    ? "Este tema te sale. Probalo ahora en otra forma: ahí es donde termina de fijarse."
    : masOMenos
      ? "Vas por buen camino: los errores de recién son justo los que más rinden practicar."
      : "Nadie sabe un tema en la primera vuelta. Releé la teoría un rato y volvé a intentarlo — para eso está."

  return (
    <div className="sin-bichito anim-fade relative py-6 text-center">
      <Confeti cantidad={22} />
      {/* Siempre una pose contenta: el que va flojo es el que menos necesita
          un muñequito desanimado mirándolo. */}
      <div className="festeja mx-auto mb-7 w-fit">
        {bien ? (
          <Estirandose size={205} color="var(--menta)" festeja />
        ) : masOMenos ? (
          <LunaProta size={200} />
        ) : (
          <Saludando size={195} color="var(--cielo)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        Terminaste el tema
      </p>
      <p className="serif mb-3 text-[clamp(1.8rem,5vw,2.4rem)] leading-tight">
        {titulo}
      </p>

      {/* El porcentaje manda; el "3 de 5" queda como aclaración chiquita */}
      <p
        className="t-dato"
        style={{
          color: bien
            ? "var(--acierto)"
            : masOMenos
              ? "var(--dorado)"
              : "var(--lila)",
        }}
      >
        {pct}%
      </p>
      <p className="mb-6 text-[15px] font-bold text-[var(--noche)]/45">
        {correctas} de {total} correctas
      </p>

      {/* Barra de progreso: el mismo dato, pero visual */}
      <div className="mx-auto mb-7 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-[var(--noche)]/10">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: bien
              ? "var(--acierto)"
              : masOMenos
                ? "var(--dorado)"
                : "var(--lila)",
          }}
        />
      </div>

      <p className="mx-auto mb-9 max-w-sm text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        {mensaje}
      </p>

      {/* El cruce confianza × acierto de este tema */}
      <div className="mx-auto max-w-md">
        <ResumenCalibracion
          respuestas={Object.values(api.progreso[api.temaActivoId] ?? {})}
        />
      </div>

      {/* A dónde seguir */}
      <p className="mb-4 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        ¿Seguimos con…?
      </p>
      <div className="mx-auto mb-8 flex max-w-md flex-wrap justify-center gap-3">
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
        <button
          onClick={() => api.cambiarModo("simulacro")}
          className="btn-lunar btn-suave !px-5 !py-3 text-[15px]"
        >
          Simulacro
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {siguiente && (
          <button
            onClick={() => {
              api.seleccionarTema(siguiente.id)
              // Seguís EN EL QUIZ: antes esto te mandaba a Teoría y cortaba
              // el hilo, que era justo lo engorroso.
              api.cambiarTab("quiz")
            }}
            className="btn-lunar btn-lila"
          >
            Seguir con {siguiente.practico} →
          </button>
        )}
        <button onClick={onRevisar} className="btn-lunar btn-fantasma !px-0">
          Ver mis respuestas
        </button>
        <button
          onClick={() => {
            api.seleccionarTema(api.temaActivoId)
            api.cambiarTab("teoria")
          }}
          className="btn-lunar btn-fantasma !px-0"
        >
          Volver a la teoría
        </button>
      </div>

      {/* Con un solo tema hecho no hay nada que resumir: recién desde el
          segundo el resumen de sesión dice algo. */}
      {api.sesion.length >= 2 && (
        <button
          onClick={api.abrirResumen}
          className="mt-7 cursor-pointer text-[15px] font-bold text-[var(--lila)] underline decoration-2 underline-offset-4"
        >
          Terminar sesión y ver el resumen ({api.sesion.length} temas)
        </button>
      )}
    </div>
  )
}
