"use client"

import type { Seguridad } from "@/lib/types"
import { cn } from "@/lib/utils"

/**
 * Calibración metacognitiva: saber qué tan bien sabés lo que sabés.
 *
 * Todo el resto de la app mide si acertás. Esto mide algo distinto y más
 * incómodo: si tu sensación de dominio coincide con tu dominio real. Un quiz
 * de múltiple opción infla esa sensación, porque la respuesta correcta está
 * ahí a la vista y el cerebro confunde reconocerla con saberla.
 *
 * El cruce entre confianza y acierto da cuatro casos, y no valen lo mismo:
 * el peor de todos no es errar, es errar estando convencida.
 */

const OPCIONES: {
  id: Seguridad
  label: string
  color: string
  tecla: string
}[] = [
  { id: "seguro", label: "Lo sé", color: "var(--lila)", tecla: "1" },
  { id: "masomenos", label: "Más o menos", color: "var(--dorado)", tecla: "2" },
  { id: "adivino", label: "Estoy adivinando", color: "var(--cielo)", tecla: "3" },
]

/** El paso intermedio: ya elegiste opción, todavía no sabés si está bien. */
export function SelectorSeguridad({
  onElegir,
}: {
  onElegir: (s: Seguridad) => void
}) {
  return (
    <div className="anim-fade mt-6 border-t border-[color-mix(in_srgb,var(--noche)_10%,transparent)] pt-5">
      <p className="mb-3 text-[15px] font-bold text-[var(--noche)]/70">
        Antes de ver si está bien: ¿cuánta seguridad tenés?
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        {OPCIONES.map((op) => (
          <button
            key={op.id}
            onClick={() => onElegir(op.id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-[15px] font-bold transition-all hover:-translate-y-0.5"
            style={{
              background: `color-mix(in srgb, ${op.color} 13%, transparent)`,
              color: op.color,
            }}
          >
            {op.label}
            <span className="kbd hidden sm:inline">{op.tecla}</span>
          </button>
        ))}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed font-medium text-[var(--noche)]/40">
        Contestá honestamente: el valor de esto está justo en las que creías
        saber y no.
      </p>
    </div>
  )
}

/** Una respuesta ya corregida, con la confianza que declaró antes. */
export interface RespuestaCalibrada {
  correcta: boolean
  seguridad?: Seguridad
}

/**
 * El cruce, en las pantallas de cierre. Solo aparece si hay algo que cruzar.
 */
export function ResumenCalibracion({
  respuestas,
}: {
  respuestas: RespuestaCalibrada[]
}) {
  const conDato = respuestas.filter((r) => r.seguridad)
  if (conDato.length === 0) return null

  const cuenta = (seg: Seguridad, correcta: boolean) =>
    conDato.filter((r) => r.seguridad === seg && r.correcta === correcta).length

  const seguroMal = cuenta("seguro", false)
  const seguroBien = cuenta("seguro", true)
  const medioBien = cuenta("masomenos", true)
  const medioMal = cuenta("masomenos", false)
  const adivinoBien = cuenta("adivino", true)
  const adivinoMal = cuenta("adivino", false)

  const filas = [
    {
      label: "Lo sabías y era",
      n: seguroBien,
      color: "var(--acierto)",
      nota: "Firme. Este es el que cuenta.",
    },
    {
      label: "Ibas con seguridad y no era",
      n: seguroMal,
      color: "var(--error)",
      nota: "El más importante de la lista. Mirá abajo cuáles fueron.",
      alerta: true,
    },
    {
      label: "Dudabas y acertaste",
      n: medioBien + adivinoBien,
      color: "var(--dorado)",
      nota: "Frágil: hoy salió, en el oral capaz no.",
    },
    {
      label: "No lo sabías, y lo sabías",
      n: medioMal + adivinoMal,
      color: "var(--cielo)",
      nota: "Sano: sabés dónde estás.",
    },
  ].filter((f) => f.n > 0)

  /* El titular cambia según lo que el cruce revele, porque el mismo porcentaje
     puede significar cosas muy distintas. */
  const titular =
    seguroMal >= 2
      ? "Ojo con lo que creés que ya sabés"
      : seguroMal === 1
        ? "Hay una que te tomó por sorpresa"
        : medioBien + adivinoBien > seguroBien
          ? "Estás acertando más de lo que sentís"
          : "Buen termómetro"

  const bajada =
    seguroMal >= 1
      ? "Errar con seguridad es distinto de no saber: significa que el concepto está aprendido de una forma que no es la que toma la cátedra. Son las que hay que mirar primero."
      : medioBien + adivinoBien > seguroBien
        ? "Acertás dudando, así que probablemente sepas más de lo que creés. Eso también es un problema: en el oral la inseguridad se escucha."
        : "Tu sensación coincide bastante con tus resultados. Eso vale: significa que podés confiar en tu propio termómetro cuando decidís qué repasar."

  return (
    <div className="mb-10 text-left">
      <p className="mb-1 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        Lo que creías vs. lo que pasó
      </p>
      <p className="serif mb-2 text-[1.4rem] leading-tight">{titular}</p>
      <p className="mb-5 text-[15px] leading-relaxed font-medium text-[var(--noche)]/60">
        {bajada}
      </p>

      {filas.map((f) => (
        <div
          key={f.label}
          className={cn(
            "fila flex items-start gap-4 py-3.5",
            f.alerta && "font-bold",
          )}
        >
          <span
            className="serif shrink-0 text-[1.6rem] leading-none tabular-nums"
            style={{ color: f.color }}
          >
            {f.n}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-semibold">{f.label}</span>
            <span className="block text-[13px] font-medium text-[var(--noche)]/45">
              {f.nota}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

/** Etiqueta chiquita para marcar una pregunta en la lista de repaso. */
export function TagSeguridad({ seguridad }: { seguridad?: Seguridad }) {
  if (!seguridad) return null
  const texto =
    seguridad === "seguro"
      ? "ibas con seguridad"
      : seguridad === "masomenos"
        ? "dudabas"
        : "adivinaste"
  const color =
    seguridad === "seguro"
      ? "var(--error)"
      : seguridad === "masomenos"
        ? "var(--dorado)"
        : "var(--cielo)"
  return (
    <span
      className="ml-2 rounded-full px-2 py-0.5 text-[11px] font-extrabold"
      style={{
        background: `color-mix(in srgb, ${color} 14%, transparent)`,
        color,
      }}
    >
      {texto}
    </span>
  )
}
