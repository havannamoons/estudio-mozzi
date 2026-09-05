"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import type { EstiloSimulacro, Seguridad } from "@/lib/types"
import { useContenido } from "@/lib/materias/contexto"
import {
  SIMULACRO_PREGUNTAS_DEFAULT,
  SIMULACRO_PREGUNTAS_MAX,
  SIMULACRO_PREGUNTAS_MIN,
  SIMULACRO_SEGUNDOS_ALERTA,
  SIMULACRO_SEGUNDOS_POR_PREGUNTA,
} from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Sentada } from "@/components/landing/Personajes"
import { SimulacroTerminado } from "./SimulacroTerminado"
import { SelectorSeguridad } from "./Calibracion"

const LETRAS = ["A", "B", "C", "D", "E", "F"]

/** mm:ss, que es como se lee un reloj de examen. */
function reloj(segundos: number) {
  const m = Math.floor(segundos / 60)
  const s = segundos % 60
  return `${m}:${String(s).padStart(2, "0")}`
}

interface Props {
  api: EstudioApi
}

export function SimulacroMode({ api }: Props) {
  const {
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    estiloSim,
    porTiempoSim,
    iniciarSimulacro,
    reiniciarSimulacro,
  } = api

  if (faseSimulacro === "setup") {
    return <SimulacroSetup onIniciar={iniciarSimulacro} />
  }
  if (faseSimulacro === "resultados") {
    return (
      <SimulacroTerminado
        api={api}
        preguntas={preguntasSim}
        respuestas={respuestasSim}
        estilo={estiloSim}
        porTiempo={porTiempoSim}
        onOtro={reiniciarSimulacro}
      />
    )
  }
  return <SimulacroPlay api={api} />
}

// ============================================================
// SETUP
// ============================================================
function SimulacroSetup({
  onIniciar,
}: {
  onIniciar: (n: number, estilo: EstiloSimulacro) => void
}) {
  const { temas: TEMAS } = useContenido()
  const [cantidad, setCantidad] = useState(SIMULACRO_PREGUNTAS_DEFAULT)
  const [estilo, setEstilo] = useState<EstiloSimulacro>("practica")

  const totalDisponibles = TEMAS.reduce((acc, t) => acc + t.preguntas.length, 0)
  const tope = Math.min(SIMULACRO_PREGUNTAS_MAX, totalDisponibles)
  const cantidadReal = Math.min(cantidad, totalDisponibles)
  const minutos = Math.round(
    (cantidadReal * SIMULACRO_SEGUNDOS_POR_PREGUNTA) / 60,
  )

  return (
    <div className="anim-fade mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-6 w-fit">
          <Sentada size={170} color="var(--lila-claro)" />
        </div>
        <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
          Simulacro
        </p>
        <p className="serif mb-4 text-[clamp(1.9rem,5.5vw,2.6rem)] leading-tight">
          Preguntas de todo, mezcladas
        </p>
        <p className="mx-auto max-w-md text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
          Sin saber de qué tema viene cada una, que es la parte difícil del
          final: en el quiz ya sabés de qué te van a preguntar.
        </p>
      </div>

      {/* Cómo correrlo. La diferencia es real, así que se elige antes de
          empezar y no queda escondida en un ajuste. */}
      <p className="mb-3 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        ¿Cómo lo querés hacer?
      </p>
      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <OpcionEstilo
          activa={estilo === "practica"}
          onClick={() => setEstilo("practica")}
          titulo="Práctica"
          detalle="Te corrige al toque y te explica cada una. Para aprender."
        />
        <OpcionEstilo
          activa={estilo === "examen"}
          onClick={() => setEstilo("examen")}
          titulo="Examen"
          detalle="Con reloj y sin corrección hasta entregar. Para ensayar el final."
        />
      </div>

      <p className="mb-3 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        ¿Cuántas preguntas?
      </p>
      <div className="mb-2 flex items-center gap-4">
        <input
          id="cant"
          type="range"
          min={SIMULACRO_PREGUNTAS_MIN}
          max={tope}
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          className="flex-1 accent-[var(--lila)]"
          aria-label="Cantidad de preguntas"
          aria-valuemin={SIMULACRO_PREGUNTAS_MIN}
          aria-valuemax={tope}
          aria-valuenow={cantidadReal}
        />
        <span
          className="serif shrink-0 text-[2.6rem] leading-none tabular-nums"
          style={{ color: "var(--lila)" }}
        >
          {cantidadReal}
        </span>
      </div>

      <div className="mb-3 flex items-center gap-2">
        {[6, 12, 20, 30]
          .filter((n) => n <= tope)
          .map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setCantidad(n)}
              aria-pressed={cantidad === n}
              className={cn(
                "min-h-[38px] flex-1 rounded-full text-[14px] font-bold tabular-nums transition-colors",
                cantidad === n
                  ? "bg-[color-mix(in_srgb,var(--lila)_14%,transparent)] text-[var(--lila)]"
                  : "text-[var(--noche)]/45 hover:bg-[color-mix(in_srgb,var(--noche)_5%,transparent)] hover:text-[var(--noche)]",
              )}
            >
              {n}
            </button>
          ))}
      </div>

      <p className="mb-9 text-[14px] font-medium text-[var(--noche)]/45">
        {estilo === "examen" ? (
          <>
            Vas a tener <strong className="font-extrabold">{minutos} minutos</strong> para
            las {cantidadReal}. Hay {totalDisponibles} preguntas en total.
          </>
        ) : (
          <>Sin reloj. Hay {totalDisponibles} preguntas en total.</>
        )}
      </p>

      <button
        onClick={() => onIniciar(cantidadReal, estilo)}
        className="btn-lunar btn-lila w-full sm:w-auto"
      >
        {estilo === "examen" ? "Arrancar el examen" : "Empezar simulacro"}
      </button>
    </div>
  )
}

/** Una de las dos formas de correr el simulacro. Línea, no tarjeta. */
function OpcionEstilo({
  activa,
  onClick,
  titulo,
  detalle,
}: {
  activa: boolean
  onClick: () => void
  titulo: string
  detalle: string
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={activa}
      className={cn(
        "rounded-3xl p-5 text-left transition-all",
        activa
          ? "bg-[color-mix(in_srgb,var(--lila)_12%,transparent)] ring-2 ring-[var(--lila)]"
          : "bg-[color-mix(in_srgb,var(--noche)_4%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--noche)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--noche)_7%,transparent)]",
      )}
    >
      <span
        className={cn(
          "mb-1.5 block text-[17px] font-extrabold",
          activa ? "text-[var(--lila)]" : "text-[var(--noche)]",
        )}
      >
        {titulo}
      </span>
      <span className="block text-[14px] leading-snug font-medium text-[var(--noche)]/55">
        {detalle}
      </span>
    </button>
  )
}

// ============================================================
// PLAY
// ============================================================
function SimulacroPlay({ api }: { api: EstudioApi }) {
  const { temas: TEMAS } = useContenido()
  const {
    preguntasSim,
    respuestasSim,
    preguntaSimIdx: idx,
    estiloSim,
    segundosRestantes,
    responderSimulacro,
    siguienteSimulacro,
    anteriorSimulacro,
    irAPreguntaSim,
    entregarSimulacro,
    reiniciarSimulacro,
  } = api

  /* Dos salidas distintas, las dos irreversibles: entregar el examen o
     abandonar la práctica a medio hacer. Ninguna se ejecuta sin preguntar. */
  const [confirmando, setConfirmando] = useState<"entregar" | "salir" | null>(
    null,
  )
  /* Opción tocada a la espera de que declares seguridad. Solo existe en
     práctica: bajo reloj, pedirte un paso extra por pregunta te haría perder
     segundos reales, y el examen tiene que sentirse como un examen. */
  const [eleccionPendiente, setEleccionPendiente] = useState<number | null>(null)
  const esExamen = estiloSim === "examen"

  const actual = preguntasSim[idx]
  const tema = TEMAS.find((t) => t.id === actual?.temaId)
  const pregunta = tema?.preguntas[actual?.preguntaIdx ?? 0]

  const respuesta = respuestasSim.find(
    (r) => r.temaId === actual?.temaId && r.preguntaIdx === actual?.preguntaIdx,
  )
  const respondida = !!respuesta
  /* En examen no se corrige nada hasta entregar: "respondida" solo significa
     que elegiste algo. La corrección se revela recién en el cierre. */
  const corregida = respondida && !esExamen

  const sinContestar = preguntasSim.length - respuestasSim.length
  const enUltima = idx === preguntasSim.length - 1

  // Teclado: números para elegir, flechas para moverse.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      const cuantas = pregunta?.opciones.length ?? 0
      const n = parseInt(e.key, 10)
      if (eleccionPendiente !== null) {
        if (n >= 1 && n <= 3) {
          e.preventDefault()
          const seg: Seguridad =
            n === 1 ? "seguro" : n === 2 ? "masomenos" : "adivino"
          responderSimulacro(eleccionPendiente, seg)
          setEleccionPendiente(null)
        }
        return
      }
      if (n >= 1 && n <= cuantas) {
        e.preventDefault()
        if (esExamen) responderSimulacro(n - 1)
        else setEleccionPendiente(n - 1)
        return
      }
      if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault()
        siguienteSimulacro()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        anteriorSimulacro()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [
    pregunta,
    responderSimulacro,
    siguienteSimulacro,
    anteriorSimulacro,
    eleccionPendiente,
    esExamen,
  ])

  // Moverse de pregunta descarta la elección a medio hacer.
  useEffect(() => {
    setEleccionPendiente(null)
  }, [idx])

  if (!actual || !tema || !pregunta) return null

  const urgente =
    segundosRestantes !== null && segundosRestantes <= SIMULACRO_SEGUNDOS_ALERTA

  return (
    <div className="anim-fade space-y-4">
      {/* Barra de estado: dónde estás, cuánto queda, cómo salir */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-[14px] font-bold text-[var(--noche)]/50 tabular-nums">
          {esExamen ? "Examen" : "Simulacro"} · {idx + 1} de{" "}
          {preguntasSim.length}
        </span>

        <span className="flex items-center gap-4">
          {segundosRestantes !== null && (
            <span
              className={cn(
                "serif text-[1.7rem] leading-none tabular-nums",
                urgente && "reloj-urgente",
              )}
              style={{ color: urgente ? "var(--error)" : "var(--noche)" }}
              aria-live="off"
              title="Tiempo restante"
            >
              {reloj(segundosRestantes)}
            </span>
          )}
          <button
            onClick={() => {
              if (esExamen) setConfirmando("entregar")
              /* Salir de una práctica ya empezada borra lo hecho, así que
                 tampoco pasa derecho. Si no contestaste nada todavía, no hay
                 nada que perder y sale sin molestarte. */
              else if (respuestasSim.length > 0) setConfirmando("salir")
              else reiniciarSimulacro()
            }}
            className="text-[14px] font-bold text-[var(--lila)] underline decoration-2 underline-offset-4"
          >
            {esExamen ? "Entregar" : "Salir"}
          </button>
        </span>
      </div>

      {/* Puntitos: en examen dicen solo si contestaste, no si acertaste */}
      <div className="flex flex-wrap items-center gap-1.5">
        {preguntasSim.map((p, i) => {
          const r = respuestasSim.find(
            (x) => x.temaId === p.temaId && x.preguntaIdx === p.preguntaIdx,
          )
          let cls = "bg-[var(--noche)]/12"
          if (r) {
            if (esExamen) cls = "bg-[var(--lila)]/55"
            else cls = r.correcta ? "bg-[var(--acierto)]/60" : "bg-[var(--error)]/60"
          }
          if (i === idx) cls += " ring-2 ring-[var(--lila)]/45"
          return (
            <button
              key={i}
              onClick={() => irAPreguntaSim(i)}
              className={cn(
                "h-2 min-w-[10px] flex-1 rounded-full transition-all hover:opacity-80",
                cls,
              )}
              aria-label={`Ir a la pregunta ${i + 1}`}
            />
          )
        })}
      </div>

      <p className="text-[12px] font-bold text-[var(--noche)]/35">
        {esExamen
          ? sinContestar > 0
            ? `${sinContestar} sin contestar · podés volver y cambiar lo que quieras`
            : "Contestaste todas · podés revisar antes de entregar"
          : `Sin pista del tema · ${respuestasSim.filter((r) => r.correcta).length}/${respuestasSim.length} correctas`}
      </p>

      {/* Pregunta */}
      <div className="glass-strong rounded-2xl p-5 sm:p-7">
        <p className="serif mb-6 text-[19px] leading-snug sm:text-[22px]">
          {pregunta.q}
        </p>

        <div className="space-y-2.5">
          {pregunta.opciones.map((op, i) => {
            const esElegida = respuesta?.elegida === i
            let cls = "opcion"
            let icon: React.ReactNode = null

            if (esExamen) {
              // Solo marca tu elección. Ni verde ni rojo: no sabés nada todavía.
              if (esElegida) cls += " elegida"
            } else if (!respondida && eleccionPendiente === i) {
              cls += " elegida"
            } else if (corregida) {
              if (esElegida) {
                if (pregunta.correcta === i) {
                  cls += " correcta"
                  icon = <Check className="opcion-tick ml-auto h-4 w-4 shrink-0" />
                } else {
                  cls += " incorrecta"
                  icon = <X className="opcion-tick ml-auto h-4 w-4 shrink-0" />
                }
              } else if (pregunta.correcta === i) {
                cls += " revelada"
                icon = <Check className="opcion-tick ml-auto h-4 w-4 shrink-0" />
              }
            }

            return (
              <button
                key={i}
                onClick={() =>
                  esExamen ? responderSimulacro(i) : setEleccionPendiente(i)
                }
                disabled={corregida}
                className={cn(
                  cls,
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-[15px] font-medium",
                )}
              >
                <span className="opcion-letra">{LETRAS[i]}</span>
                <span className="flex-1 leading-snug">{op}</span>
                {icon}
              </button>
            )
          })}
        </div>

        {!esExamen && !respondida && eleccionPendiente !== null && (
          <SelectorSeguridad
            onElegir={(seg) => {
              responderSimulacro(eleccionPendiente, seg)
              setEleccionPendiente(null)
            }}
          />
        )}

        {corregida && (
          <div
            className={cn(
              "anim-fade mt-6 border-l-2 pl-4",
              respuesta?.correcta
                ? "border-l-[var(--acierto)]"
                : "border-l-[var(--error)]",
            )}
          >
            <p
              className="mb-1.5 text-[12px] font-extrabold tracking-wider uppercase"
              style={{
                color: respuesta?.correcta ? "var(--acierto)" : "var(--error)",
              }}
            >
              {respuesta?.correcta ? "Bien" : "Para recordar"}
              <span className="ml-2 font-bold text-[var(--noche)]/35 normal-case">
                {tema.practico} · {tema.titulo}
              </span>
            </p>
            <p className="text-[15px] leading-relaxed font-medium whitespace-pre-wrap text-[var(--noche)]/70">
              {pregunta.exp}
            </p>
          </div>
        )}
      </div>

      {/* Navegación */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={anteriorSimulacro}
          disabled={idx === 0}
          className="btn-lunar btn-suave !px-5 !py-3 text-sm disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Anterior
        </button>

        {esExamen && enUltima ? (
          <button
            onClick={() => setConfirmando("entregar")}
            className="btn-lunar btn-lila !px-5 !py-3 text-sm"
          >
            Entregar
          </button>
        ) : (
          <button
            onClick={siguienteSimulacro}
            disabled={!esExamen && !respondida}
            className="btn-lunar btn-lila !px-5 !py-3 text-sm disabled:cursor-not-allowed disabled:opacity-30"
          >
            {!esExamen && enUltima ? "Ver resultados" : "Siguiente"}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {confirmando === "entregar" && (
        <Confirmar
          titulo="¿Entregamos?"
          detalle={
            sinContestar > 0
              ? `Te quedan ${sinContestar} sin contestar. Cuentan como error, igual que en el final.`
              : "Contestaste todas. Después de entregar no se puede volver."
          }
          confirmar="Entregar y ver cómo me fue"
          cancelar={sinContestar > 0 ? "Seguir contestando" : "Seguir revisando"}
          onCancelar={() => setConfirmando(null)}
          onConfirmar={() => {
            setConfirmando(null)
            entregarSimulacro()
          }}
        />
      )}

      {confirmando === "salir" && (
        <Confirmar
          titulo="¿Dejamos acá?"
          detalle={`Llevás ${respuestasSim.length} de ${preguntasSim.length} contestadas. Si salís se borran y el próximo simulacro arranca de cero.`}
          confirmar="Salir y perder lo hecho"
          cancelar="Seguir contestando"
          onCancelar={() => setConfirmando(null)}
          onConfirmar={() => {
            setConfirmando(null)
            reiniciarSimulacro()
          }}
        />
      )}
    </div>
  )
}

/**
 * Aviso para lo que no se puede deshacer. Va como panel propio y no como
 * `confirm()` del navegador: ese cartel gris del sistema rompe la ilusión de
 * estar dentro de una app.
 */
function Confirmar({
  titulo,
  detalle,
  confirmar,
  cancelar,
  onCancelar,
  onConfirmar,
}: {
  titulo: string
  detalle: string
  confirmar: string
  cancelar: string
  onCancelar: () => void
  onConfirmar: () => void
}) {
  // Escape cancela: es lo que espera cualquiera que abrió algo por error.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancelar()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onCancelar])

  return (
    <div
      className="anim-fade fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "color-mix(in srgb, var(--noche) 55%, transparent)" }}
      onClick={onCancelar}
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
    >
      <div
        className="w-full max-w-sm rounded-3xl p-7 text-center"
        style={{ background: "var(--crema)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="serif mb-3 text-[1.7rem] leading-tight">{titulo}</p>
        <p className="mb-7 text-[16px] leading-relaxed font-medium text-[var(--noche)]/65">
          {detalle}
        </p>
        <div className="flex flex-col gap-3">
          <button onClick={onConfirmar} className="btn-lunar btn-lila w-full">
            {confirmar}
          </button>
          <button
            onClick={onCancelar}
            className="btn-lunar btn-fantasma w-full !px-0"
          >
            {cancelar}
          </button>
        </div>
      </div>
    </div>
  )
}
