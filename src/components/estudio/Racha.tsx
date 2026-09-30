"use client"

import { useEffect, useState } from "react"
import { Mic, X } from "lucide-react"
import { useRacha } from "@/lib/hooks/useRacha"
import { META_DIARIA, letraDia } from "@/lib/racha"
import { Luna, Estirandose } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"
import { cn } from "@/lib/utils"

/**
 * LA RACHA, en pantalla.
 *
 * Duolingo usa una llama. Acá la racha es una LUNA, y no por capricho: el
 * producto se llama Estudio Lunar, la luna ya es el logo y la mascota, y una
 * llama prestada de otra app hace que todo parezca una copia. El número al lado
 * hace que no haga falta explicar el símbolo.
 *
 * El indicador vive en el encabezado, o sea a la vista en TODAS las pantallas.
 * Una racha escondida en un menú no retiene a nadie: la mecánica funciona
 * porque el número te mira mientras estudiás.
 */

/** Anillo de progreso del día alrededor de la luna. */
function Anillo({ pct, color }: { pct: number; color: string }) {
  const r = 20
  const circ = 2 * Math.PI * r
  return (
    <svg
      viewBox="0 0 46 46"
      className="absolute inset-0 h-full w-full -rotate-90"
      aria-hidden="true"
    >
      <circle
        cx="23"
        cy="23"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-[var(--noche)]/10"
      />
      <circle
        cx="23"
        cy="23"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - Math.min(1, pct))}
        style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
      />
    </svg>
  )
}

export function RachaIndicador() {
  const { estado, hidratado } = useRacha()
  const [abierto, setAbierto] = useState(false)

  // Antes de leer el localStorage no se dibuja: mostrar 0 y saltar a 12 se ve
  // como un error de la app.
  if (!hidratado) return null

  const pct = Math.min(1, estado.xpHoy / META_DIARIA)
  const color = estado.metaHecha ? "var(--dorado)" : "var(--lila)"

  return (
    <>
      <button
        onClick={() => setAbierto(true)}
        className="flex items-center gap-2 rounded-full py-1 pr-3 pl-1 transition-colors hover:bg-[color-mix(in_srgb,var(--noche)_5%,transparent)]"
        title={
          estado.enRiesgo
            ? "Tu racha sigue viva, pero hoy todavía no estudiaste"
            : "Ver tu racha"
        }
        aria-label={`Racha de ${estado.actual} días. Ver detalle.`}
      >
        <span className="relative block h-[46px] w-[46px] shrink-0">
          <Anillo pct={pct} color={color} />
          <span
            className={cn(
              "absolute inset-0 grid place-items-center transition-opacity",
              // En riesgo, la luna se apaga. Es la señal, no un castigo.
              estado.enRiesgo && "opacity-40",
            )}
          >
            <Luna size={24} color={estado.metaHecha ? "#FFAE24" : "#C3B0EA"} />
          </span>
        </span>
        <span className="text-left leading-none">
          <span
            className="serif block text-[1.45rem] tabular-nums"
            style={{ color: estado.actual > 0 ? "var(--noche)" : "var(--noche)" }}
          >
            {estado.actual}
          </span>
          <span className="mt-0.5 block text-[11px] font-bold text-[var(--noche)]/40">
            {estado.actual === 1 ? "día" : "días"}
          </span>
        </span>
      </button>

      {abierto && <RachaPanel onCerrar={() => setAbierto(false)} />}
    </>
  )
}

/** El detalle: la semana, el récord, y qué falta para hoy. */
function RachaPanel({ onCerrar }: { onCerrar: () => void }) {
  const { estado, semana } = useRacha()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onCerrar])

  const falta = Math.max(0, META_DIARIA - estado.xpHoy)

  return (
    <div
      className="anim-fade fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "color-mix(in srgb, var(--noche) 55%, transparent)" }}
      onClick={onCerrar}
      role="dialog"
      aria-modal="true"
      aria-label="Tu racha"
    >
      <div
        className="relative w-full max-w-sm rounded-3xl p-7"
        style={{ background: "var(--crema)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onCerrar}
          className="absolute top-4 right-4 text-[var(--noche)]/35 hover:text-[var(--noche)]"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 w-fit">
            <Luna size={62} color={estado.metaHecha ? "#FFAE24" : "#C3B0EA"} />
          </div>
          <p className="serif text-[3.2rem] leading-none tabular-nums">
            {estado.actual}
          </p>
          <p className="mt-1 text-[15px] font-bold text-[var(--noche)]/45">
            {estado.actual === 1 ? "día seguido" : "días seguidos"}
          </p>
        </div>

        {/* La semana */}
        <div className="mb-6 flex justify-between gap-1">
          {semana.map((d, i) => {
            const esHoy = i === semana.length - 1
            return (
              <span key={d.clave} className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full text-[13px] font-extrabold transition-colors",
                    d.cumplido
                      ? "bg-[var(--lila)] text-white"
                      : "bg-[var(--noche)]/8 text-[var(--noche)]/30",
                    esHoy && !d.cumplido && "ring-2 ring-[var(--lila)]/40",
                  )}
                  title={`${d.clave}: ${d.xp} XP`}
                >
                  {/* El puntito dorado marca los días que hablaste en voz alta,
                      que es lo que de verdad prepara para el oral. */}
                  {d.hablo ? (
                    <Mic className="h-4 w-4" style={{ color: "#FFAE24" }} />
                  ) : (
                    letraDia(d.clave)
                  )}
                </span>
              </span>
            )
          })}
        </div>

        {/* Estado de hoy */}
        <div
          className="mb-5 rounded-2xl p-4 text-center"
          style={{
            background: estado.metaHecha
              ? "color-mix(in srgb, var(--acierto) 12%, transparent)"
              : "color-mix(in srgb, var(--lila) 10%, transparent)",
          }}
        >
          {estado.metaHecha ? (
            <p className="text-[15px] font-bold text-[var(--acierto)]">
              Hoy ya está. Nos vemos mañana.
            </p>
          ) : (
            <>
              <p className="mb-1 text-[15px] font-bold text-[var(--lila)]">
                Te faltan {falta} XP para el día de hoy
              </p>
              <p className="text-[13px] font-medium text-[var(--noche)]/50">
                {estado.enRiesgo
                  ? `Cuidado: si termina el día sin cumplir, se corta la racha de ${estado.actual}.`
                  : "Son unos diez minutos."}
              </p>
            </>
          )}
        </div>

        {/* Números */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <Dato n={estado.mejor} label="récord" />
          <Dato n={estado.rachaHablando} label="hablando" dorado />
          <Dato n={estado.xpTotal} label="XP total" />
        </div>
      </div>
    </div>
  )
}

function Dato({
  n,
  label,
  dorado,
}: {
  n: number
  label: string
  dorado?: boolean
}) {
  return (
    <span className="block">
      <span
        className="serif block text-[1.5rem] leading-none tabular-nums"
        style={{ color: dorado ? "var(--dorado)" : "var(--noche)" }}
      >
        {n}
      </span>
      <span className="mt-1 block text-[11px] font-bold text-[var(--noche)]/40">
        {label}
      </span>
    </span>
  )
}

/**
 * El momento en que se cumple el día.
 *
 * Es la pieza más importante de toda la mecánica: la recompensa tiene que
 * llegar en el instante exacto en que se cruza la meta, no al final de la
 * sesión. Un festejo tardío no se asocia con lo que uno hizo.
 */
export function FestejoRacha() {
  const { festejo, limpiarFestejo, estado } = useRacha()

  useEffect(() => {
    if (!festejo) return
    const id = setTimeout(limpiarFestejo, 4200)
    return () => clearTimeout(id)
  }, [festejo, limpiarFestejo])

  if (!festejo) return null

  return (
    <div
      className="anim-fade pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-5"
      role="status"
      aria-live="polite"
    >
      <div
        className="pointer-events-auto relative flex items-center gap-4 rounded-3xl px-6 py-4 shadow-lg"
        style={{ background: "var(--noche)", color: "var(--crema)" }}
      >
        <Confeti cantidad={30} />
        <span className="festeja shrink-0">
          <Estirandose size={64} color="var(--dorado)" festeja />
        </span>
        <span>
          <span className="serif block text-[1.35rem] leading-tight">
            {festejo === "primerDia"
              ? "¡Arrancó la racha!"
              : `¡${estado.actual} días seguidos!`}
          </span>
          <span className="mt-0.5 block text-[14px] font-bold opacity-65">
            {festejo === "primerDia"
              ? "Mañana la sostenés y son dos."
              : estado.rachaHablando >= estado.actual
                ? "Y todos hablando en voz alta."
                : "El día de hoy ya está cumplido."}
          </span>
        </span>
      </div>
    </div>
  )
}
