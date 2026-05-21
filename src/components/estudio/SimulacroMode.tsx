"use client"

import { useState } from "react"
import { Check, ChevronLeft, ChevronRight, FileCheck, Play, RotateCcw, Trophy, X } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { TEMAS } from "@/lib/data/temas"
import {
  SIMULACRO_PREGUNTAS_DEFAULT,
  SIMULACRO_PREGUNTAS_MAX,
  SIMULACRO_PREGUNTAS_MIN,
} from "@/lib/constants"
import { cn } from "@/lib/utils"

const LETRAS = ["A", "B", "C", "D", "E", "F"]

interface Props {
  api: EstudioApi
}

export function SimulacroMode({ api }: Props) {
  const {
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    preguntaSimIdx,
    iniciarSimulacro,
    responderSimulacro,
    siguienteSimulacro,
    anteriorSimulacro,
    reiniciarSimulacro,
  } = api

  if (faseSimulacro === "setup") {
    return <SimulacroSetup onIniciar={iniciarSimulacro} />
  }
  if (faseSimulacro === "resultados") {
    return (
      <SimulacroResultados
        preguntas={preguntasSim}
        respuestas={respuestasSim}
        onReintentar={reiniciarSimulacro}
      />
    )
  }
  return (
    <SimulacroPlay
      api={api}
      onResponder={responderSimulacro}
      onSiguiente={siguienteSimulacro}
      onAnterior={anteriorSimulacro}
      onSalir={reiniciarSimulacro}
      idx={preguntaSimIdx}
    />
  )
}

// ============================================================
// SETUP
// ============================================================
function SimulacroSetup({ onIniciar }: { onIniciar: (n: number) => void }) {
  const [cantidad, setCantidad] = useState(SIMULACRO_PREGUNTAS_DEFAULT)
  const totalDisponibles = TEMAS.reduce((acc, t) => acc + t.preguntas.length, 0)
  const cantidadReal = Math.min(cantidad, totalDisponibles)

  return (
    <div className="anim-fade glass-strong rounded-3xl p-6 sm:p-10">
      <div className="mb-5 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-3">
        <FileCheck className="h-7 w-7 text-amber-500" />
      </div>
      <h2 className="mb-2 font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Simulacro de parcial
      </h2>
      <p className="mb-6 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        Te tomamos preguntas de todos los temas (Prácticos 1 a 9) mezcladas. Sin pista de qué tema viene cada una.
        Al terminar vas a ver tu puntaje total, desglose por tema y todas las explicaciones.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="cant"
            className="mb-2 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400"
          >
            Cantidad de preguntas
          </label>
          <div className="flex items-center gap-3">
            <input
              id="cant"
              type="range"
              min={SIMULACRO_PREGUNTAS_MIN}
              max={Math.min(SIMULACRO_PREGUNTAS_MAX, totalDisponibles)}
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
              list="cant-marks"
              className="flex-1 accent-amber-500"
              aria-valuemin={SIMULACRO_PREGUNTAS_MIN}
              aria-valuemax={Math.min(SIMULACRO_PREGUNTAS_MAX, totalDisponibles)}
              aria-valuenow={cantidadReal}
            />
            <datalist id="cant-marks">
              <option value="6" label="6" />
              <option value="12" label="12" />
              <option value="20" label="20" />
              <option value="30" label="30" />
            </datalist>
            <span className="min-w-[3rem] text-right font-serif text-2xl font-semibold tabular-nums text-amber-600 dark:text-amber-400">
              {cantidadReal}
            </span>
          </div>

          {/* Anclas visibles + clickeables — Fitts (target visible) + Reconocimiento > recuerdo */}
          <div className="mt-2 flex items-center justify-between">
            {[6, 12, 20, 30]
              .filter((n) => n <= Math.min(SIMULACRO_PREGUNTAS_MAX, totalDisponibles))
              .map((n) => {
                const activo = cantidad === n
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCantidad(n)}
                    className={cn(
                      // Mobile: tap target ~36px (3*8px padding + texto). Desktop: compacto.
                      "btn-press min-h-[36px] rounded-md px-3 py-1.5 font-mono text-xs tabular-nums transition-colors sm:min-h-0 sm:px-2.5 sm:py-1 sm:text-[11px]",
                      activo
                        ? "bg-amber-500/20 text-amber-700 ring-1 ring-amber-500/40 dark:text-amber-300"
                        : "text-zinc-500 hover:bg-white/5 hover:text-zinc-700 dark:hover:text-zinc-200",
                    )}
                    aria-label={`Elegir ${n} preguntas`}
                    aria-pressed={activo}
                  >
                    {n}
                  </button>
                )
              })}
          </div>

          <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-500">
            Hay {totalDisponibles} preguntas disponibles en total.
          </p>
        </div>

        <div className="glass rounded-xl p-4">
          <p className="mb-2 text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
            Recomendación
          </p>
          <ul className="space-y-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            <li className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCantidad(8)}
                className="btn-press min-h-[32px] shrink-0 rounded bg-white/5 px-2.5 py-1 font-mono text-xs tabular-nums text-amber-600 ring-1 ring-amber-500/30 hover:bg-amber-500/10 sm:min-h-0 sm:px-2 sm:py-0.5 sm:text-[11px] dark:text-amber-400"
              >
                6-10
              </button>
              <span>repaso rápido (5-8 min)</span>
            </li>
            <li className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCantidad(12)}
                className="btn-press min-h-[32px] shrink-0 rounded bg-white/5 px-2.5 py-1 font-mono text-xs tabular-nums text-amber-600 ring-1 ring-amber-500/30 hover:bg-amber-500/10 sm:min-h-0 sm:px-2 sm:py-0.5 sm:text-[11px] dark:text-amber-400"
              >
                12-15
              </button>
              <span>parcial corto (10-15 min)</span>
            </li>
            <li className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCantidad(20)}
                className="btn-press min-h-[32px] shrink-0 rounded bg-white/5 px-2.5 py-1 font-mono text-xs tabular-nums text-amber-600 ring-1 ring-amber-500/30 hover:bg-amber-500/10 sm:min-h-0 sm:px-2 sm:py-0.5 sm:text-[11px] dark:text-amber-400"
              >
                20-30
              </button>
              <span>parcial completo (20-30 min)</span>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => onIniciar(cantidadReal)}
        className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-900/30 hover:from-amber-600 hover:to-amber-700"
      >
        <Play className="h-4 w-4" /> Empezar simulacro
      </button>
    </div>
  )
}

// ============================================================
// PLAY
// ============================================================
function SimulacroPlay({
  api,
  onResponder,
  onSiguiente,
  onAnterior,
  onSalir,
  idx,
}: {
  api: EstudioApi
  onResponder: (i: number) => void
  onSiguiente: () => void
  onAnterior: () => void
  onSalir: () => void
  idx: number
}) {
  const { preguntasSim, respuestasSim } = api
  const actual = preguntasSim[idx]
  const tema = TEMAS.find((t) => t.id === actual?.temaId)
  const pregunta = tema?.preguntas[actual?.preguntaIdx ?? 0]
  if (!actual || !tema || !pregunta) return null

  const respuesta = respuestasSim.find(
    (r) => r.temaId === actual.temaId && r.preguntaIdx === actual.preguntaIdx,
  )
  const respondida = !!respuesta

  const totalRespondidas = respuestasSim.length
  const totalCorrectas = respuestasSim.filter((r) => r.correcta).length

  return (
    <div className="anim-fade space-y-4">
      {/* Banner simulacro */}
      <div className="glass flex items-center justify-between rounded-2xl border-l-4 border-l-amber-500/60 px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
          <FileCheck className="h-4 w-4" />
          <span className="font-medium">Simulacro · pregunta {idx + 1} de {preguntasSim.length}</span>
        </div>
        <button
          onClick={onSalir}
          className="text-xs text-amber-700 hover:underline dark:text-amber-400"
        >
          Salir
        </button>
      </div>

      {/* Dots */}
      <div className="flex flex-wrap items-center gap-1.5">
        {preguntasSim.map((p, i) => {
          const r = respuestasSim.find(
            (x) => x.temaId === p.temaId && x.preguntaIdx === p.preguntaIdx,
          )
          let cls = "bg-white/20 dark:bg-white/8"
          if (r) cls = r.correcta ? "bg-emerald-500" : "bg-red-500"
          if (i === idx) cls += " ring-2 ring-white/30"
          return (
            <div
              key={i}
              className={cn(
                "h-1.5 flex-1 min-w-[8px] rounded-full transition-all",
                cls,
              )}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
        <span>Sin pista del tema · {totalRespondidas} respondidas</span>
        <span>
          {totalCorrectas}/{totalRespondidas} correctas
        </span>
      </div>

      {/* Pregunta */}
      <div className="glass-strong rounded-2xl p-5 sm:p-7">
        <p className="mb-5 font-serif text-lg leading-relaxed text-zinc-900 sm:text-xl dark:text-zinc-50">
          {pregunta.q}
        </p>

        <div className="space-y-2.5">
          {pregunta.opciones.map((op, i) => {
            const esElegida = respondida && respuesta?.elegida === i
            const esCorrectaRevelada =
              respondida && pregunta.correcta === i && !esElegida
            let cls = "opcion"
            let icon: React.ReactNode = null
            if (esElegida) {
              if (pregunta.correcta === i) {
                cls += " correcta"
                icon = <Check className="opcion-tick ml-auto h-4 w-4 shrink-0" />
              } else {
                cls += " incorrecta"
                icon = <X className="opcion-tick ml-auto h-4 w-4 shrink-0" />
              }
            } else if (esCorrectaRevelada) {
              cls += " revelada"
              icon = (
                <Check className="opcion-tick ml-auto h-4 w-4 shrink-0 text-emerald-500" />
              )
            }
            return (
              <button
                key={i}
                onClick={() => onResponder(i)}
                disabled={respondida}
                className={cn(
                  cls,
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium",
                )}
              >
                <span className="opcion-letra">{LETRAS[i]}</span>
                <span className="flex-1 leading-snug">{op}</span>
                {icon}
              </button>
            )
          })}
        </div>

        {respondida && (
          <div
            className={cn(
              "anim-fade mt-5 rounded-xl border-l-4 p-4",
              respuesta?.correcta
                ? "border-l-emerald-500/60 bg-emerald-500/5"
                : "border-l-orange-500/60 bg-orange-500/5",
            )}
          >
            <p
              className={cn(
                "mb-1.5 text-[10px] font-medium tracking-wider uppercase",
                respuesta?.correcta
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-orange-600 dark:text-orange-400",
              )}
            >
              {respuesta?.correcta ? "Bien · " : "Para recordar · "}
              <span className="text-zinc-500 dark:text-zinc-500 normal-case">
                {tema.practico} · {tema.titulo}
              </span>
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">
              {pregunta.exp}
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onAnterior}
          disabled={idx === 0}
          className="glass btn-press inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 dark:text-zinc-300"
        >
          <ChevronLeft className="h-4 w-4" /> Anterior
        </button>
        <button
          onClick={onSiguiente}
          disabled={!respondida}
          className="btn-press inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40 hover:from-amber-600 hover:to-amber-700"
        >
          {idx === preguntasSim.length - 1 ? "Ver resultados" : "Siguiente"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// RESULTADOS
// ============================================================
function SimulacroResultados({
  preguntas,
  respuestas,
  onReintentar,
}: {
  preguntas: { temaId: string; preguntaIdx: number }[]
  respuestas: { temaId: string; preguntaIdx: number; elegida: number; correcta: boolean }[]
  onReintentar: () => void
}) {
  const total = preguntas.length
  const correctas = respuestas.filter((r) => r.correcta).length
  const pct = total > 0 ? Math.round((correctas / total) * 100) : 0

  // Desglose por tema
  const desglose = TEMAS.map((t) => {
    const delTema = respuestas.filter((r) => r.temaId === t.id)
    if (delTema.length === 0) return null
    const ok = delTema.filter((r) => r.correcta).length
    return { tema: t, total: delTema.length, ok }
  }).filter((x): x is { tema: typeof TEMAS[0]; total: number; ok: number } => x !== null)

  const aprobado = pct >= 60
  const errores = respuestas.filter((r) => !r.correcta)

  return (
    <div className="anim-fade space-y-4">
      {/* Score */}
      <div className="glass-strong rounded-3xl p-6 text-center sm:p-10">
        <div
          className={cn(
            "mb-5 inline-flex rounded-2xl p-3",
            aprobado
              ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10"
              : "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
          )}
        >
          <Trophy
            className={cn(
              "h-8 w-8",
              aprobado ? "text-emerald-500" : "text-orange-500",
            )}
          />
        </div>
        <h2 className="mb-1 font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {aprobado ? "¡Buen trabajo!" : "Hay que reforzar"}
        </h2>
        <div className="my-4">
          <span
            className={cn(
              "font-serif text-6xl font-bold tabular-nums",
              aprobado ? "text-emerald-500" : "text-orange-500",
            )}
          >
            {pct}%
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {correctas} correctas de {total} preguntas
        </p>

        <button
          onClick={onReintentar}
          className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:from-amber-600 hover:to-amber-700"
        >
          <RotateCcw className="h-4 w-4" /> Otro simulacro
        </button>
      </div>

      {/* Desglose por tema */}
      <div className="glass-strong rounded-2xl p-5 sm:p-6">
        <h3 className="mb-4 font-serif text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Por tema
        </h3>
        <div className="space-y-2">
          {desglose.map(({ tema, total, ok }) => {
            const p = total > 0 ? Math.round((ok / total) * 100) : 0
            return (
              <div key={tema.id} className="glass rounded-xl p-3">
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
                      {tema.practico}
                    </div>
                    <div className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100">
                      {tema.titulo}
                    </div>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 font-mono text-sm font-semibold tabular-nums",
                      p >= 80
                        ? "text-emerald-500"
                        : p >= 50
                          ? "text-amber-500"
                          : "text-red-500",
                    )}
                  >
                    {ok}/{total}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      p >= 80
                        ? "bg-emerald-500"
                        : p >= 50
                          ? "bg-amber-500"
                          : "bg-red-500",
                    )}
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Errores */}
      {errores.length > 0 && (
        <div className="glass-strong rounded-2xl p-5 sm:p-6">
          <h3 className="mb-4 font-serif text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Preguntas a revisar ({errores.length})
          </h3>
          <div className="space-y-3">
            {errores.map((err, i) => {
              const tema = TEMAS.find((t) => t.id === err.temaId)!
              const pregunta = tema.preguntas[err.preguntaIdx]
              return (
                <div
                  key={i}
                  className="glass rounded-xl border-l-4 border-l-orange-500/60 p-4"
                >
                  <div className="mb-1 text-[10px] font-medium tracking-wider text-orange-600 uppercase dark:text-orange-400">
                    {tema.practico} · {tema.titulo}
                  </div>
                  <p className="mb-3 font-serif text-sm leading-snug text-zinc-800 dark:text-zinc-100">
                    {pregunta.q}
                  </p>
                  <div className="mb-2 grid gap-1.5 text-xs">
                    <div className="text-red-600 dark:text-red-400">
                      <span className="font-medium">Tu respuesta:</span>{" "}
                      {LETRAS[err.elegida]}. {pregunta.opciones[err.elegida]}
                    </div>
                    <div className="text-emerald-700 dark:text-emerald-400">
                      <span className="font-medium">Correcta:</span>{" "}
                      {LETRAS[pregunta.correcta]}. {pregunta.opciones[pregunta.correcta]}
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed whitespace-pre-wrap text-zinc-600 dark:text-zinc-300">
                    {pregunta.exp}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
