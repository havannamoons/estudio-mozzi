"use client"

import { ArrowLeft } from "lucide-react"
import type { Carta, Opcion, Stats } from "@/lib/types"
import { CAJA_DOMINADA } from "@/lib/constants"
import { OpcionMC } from "./OpcionMC"
import { BarraProgreso } from "./BarraProgreso"

const LETRAS = ["A", "B", "C", "D", "E", "F"]

interface Props {
  carta: Carta
  opciones: Opcion[]
  opcionElegida: number | null
  modoReforzar: boolean
  stats: Stats
  totalSesion: number
  historialLen: number
  onResponder: (idx: number) => void
  onAbrirHistorial: (idx: number) => void
}

export function CartaQuiz({
  carta,
  opciones,
  opcionElegida,
  modoReforzar,
  stats,
  totalSesion,
  historialLen,
  onResponder,
  onAbrirHistorial,
}: Props) {
  const acertados = carta.aciertos + carta.fallos
  const accuracy =
    acertados > 0 ? Math.round((carta.aciertos / acertados) * 100) : null
  const respondida = opcionElegida !== null
  const fueAcierto =
    respondida && opciones[opcionElegida]?.correcta === true

  const hechas = modoReforzar ? 0 : stats.repasoHoy
  const totalReal = modoReforzar ? totalSesion : 0

  return (
    <div className="animate-slide-up">
      <div className="glass-strong overflow-hidden rounded-3xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="flex flex-wrap items-center gap-2">
            {modoReforzar && (
              <>
                <div className="mr-1 flex items-center gap-1.5">
                  <span className="fase-dot done" />
                  <span className="fase-dot active" />
                </div>
                <span className="mr-2 text-[11px] font-medium tracking-wider text-orange-500 uppercase dark:text-orange-400">
                  Paso 2 · Probarme
                </span>
              </>
            )}
            {carta.tag && (
              <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
                {carta.tag}
              </span>
            )}
            {!modoReforzar && (
              <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                Caja {carta.caja}
                {carta.caja >= CAJA_DOMINADA ? " · dominada" : ""}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-[11px] tabular-nums text-zinc-400 dark:text-zinc-500">
            {accuracy !== null ? (
              <span title="Precisión en esta carta">
                {carta.aciertos}/{acertados} · {accuracy}%
              </span>
            ) : (
              <span>Nueva</span>
            )}
          </div>
        </div>

        {/* Pregunta + opciones */}
        <div className="px-6 pt-5 pb-6 sm:px-10">
          <p className="font-serif text-xl leading-relaxed text-zinc-900 sm:text-2xl dark:text-zinc-50">
            {carta.front}
          </p>

          <div className="mt-6 space-y-2.5">
            {opciones.map((op, i) => (
              <OpcionMC
                key={i}
                letra={LETRAS[i]}
                opcion={op}
                index={i}
                elegidaIdx={opcionElegida}
                onClick={onResponder}
              />
            ))}
          </div>

          {respondida && carta.back && (carta.tipo === "opciones" || !fueAcierto) && (
            <div
              className={`glass-subtle animate-reveal mt-6 overflow-hidden rounded-2xl border-l-4 p-4 ${
                fueAcierto
                  ? "border-l-emerald-500/60"
                  : "border-l-orange-500/60"
              }`}
            >
              <p
                className={`mb-1.5 text-[11px] font-medium tracking-wider uppercase ${
                  fueAcierto
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-orange-600 dark:text-orange-400"
                }`}
              >
                {fueAcierto ? "Explicación" : "Para recordar"}
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">
                {carta.back}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-white/5 p-4 text-center text-xs text-zinc-400 sm:p-5 dark:text-zinc-500">
          {opcionElegida === null ? (
            <p>
              Elegí una opción <span className="kbd ml-1">1</span>–
              <span className="kbd">{opciones.length}</span>
            </p>
          ) : (
            <p>
              {fueAcierto ? "✓ Avanzando…" : "Tomate un momento"}{" "}
              <span className="kbd ml-2">Enter</span> para continuar
            </p>
          )}
        </div>
      </div>

      <BarraProgreso
        hechas={hechas}
        totalReal={totalReal}
        esReforzar={modoReforzar}
        stats={stats}
      />

      {historialLen > 0 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => onAbrirHistorial(historialLen - 1)}
            className="glass btn-press inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Ver carta anterior
          </button>
        </div>
      )}
    </div>
  )
}
