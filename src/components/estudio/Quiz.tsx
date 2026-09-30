"use client"

import { useEffect,useRef,useState} from "react"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import type { Seguridad } from "@/lib/types"
import { cn } from "@/lib/utils"
import { QuizTerminado } from "./QuizTerminado"
import { SelectorSeguridad } from "./Calibracion"

const LETRAS = ["A", "B", "C", "D", "E", "F"]
const NIVELES_LABEL: Record<number, { label: string; tone: string }> = {
  1: { label: "Fácil", tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
  2: { label: "Media", tone: "bg-teal-500/15 text-teal-700 dark:text-teal-300" },
  3: {
    label: "Articulación",
    tone: "bg-green-500/15 text-green-700 dark:text-green-300",
  },
}

interface Props {
  api: EstudioApi
  /** Cuántas preguntas de este tema puede contestar. Infinity = todas. */
  tope?: number
  /** Se llama cuando quiere seguir y ya usó las que tenía. */
  onTope?: () => void
}

export function Quiz({ api, tope = Infinity, onTope }: Props) {
  const {
    temaActivo,
    preguntaActualIdx,
    irAPregunta,
    progreso,
    responder,
    ordenTemaActivo,
    originalIdxDe,
  } = api

  const [animandoDotIdx, setAnimandoDotIdx] = useState<number | null>(null)
  /* Cierre del quiz. Aparece solo apenas contestás la última pregunta.
     `revisando` es la salida: con "Ver mis respuestas" volvés al quiz a leer
     las explicaciones sin que el cierre vuelva a taparte la vista. */
  const [revisando, setRevisando] = useState(false)
  const prevRespondidaRef = useRef<boolean | undefined>(undefined)

  /* Opción tocada que todavía no se registró, porque falta declarar cuánta
     seguridad tenías. Vive acá y no en el progreso a propósito: mientras está
     pendiente podés cambiar de opción, y nada quedó guardado. */
  const [eleccionPendiente, setEleccionPendiente] = useState<number | null>(null)


  /* El tope de la muestra recorta la tanda, no el contenido: las preguntas
     siguen existiendo, simplemente todavía no están disponibles. */
  const totalReal = temaActivo.preguntas.length
  const total = Math.max(1, Math.min(totalReal, tope))
  const hayTope = total < totalReal
  const displayIdx = Math.min(Math.max(0, preguntaActualIdx), total - 1)
  const origIdx = originalIdxDe(displayIdx)
  const pregunta = temaActivo.preguntas[origIdx]
  const r = progreso[temaActivo.id] ?? {}
  const respuesta = r[origIdx]
  const respondida = !!respuesta

  const difs = api.contenido.dificultades[temaActivo.id] ?? []
  const nivelActual = difs[origIdx] ?? 2

  const totalRespondidas = Object.keys(r).length
  const totalCorrectas = Object.values(r).filter((x) => x.correcta).length

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (!respondida) {
        const n = parseInt(e.key, 10)
        /* Con una elección pendiente, 1-2-3 ya no eligen opción: eligen
           seguridad, que es lo único que la pantalla está pidiendo. */
        if (eleccionPendiente !== null) {
          if (n >= 1 && n <= 3) {
            e.preventDefault()
            const seg: Seguridad =
              n === 1 ? "seguro" : n === 2 ? "masomenos" : "adivino"
            responder(eleccionPendiente, seg)
            setEleccionPendiente(null)
          }
          return
        }
        if (n >= 1 && n <= pregunta.opciones.length) {
          e.preventDefault()
          setEleccionPendiente(n - 1)
        }
      } else {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault()
          if (displayIdx < total - 1) irAPregunta(displayIdx + 1)
        } else if (e.key === "ArrowLeft") {
          e.preventDefault()
          if (displayIdx > 0) irAPregunta(displayIdx - 1)
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [
    respondida,
    pregunta.opciones.length,
    responder,
    displayIdx,
    total,
    irAPregunta,
    eleccionPendiente,
  ])

  // Al cambiar de tema volvemos a permitir que el cierre aparezca.
  useEffect(() => {
    setRevisando(false)
  }, [temaActivo.id])

  // Cambiar de pregunta descarta la elección a medio hacer.
  useEffect(() => {
    setEleccionPendiente(null)
  }, [displayIdx, temaActivo.id])

  // Terminado el tema, queda anotado en la sesión.
  const { registrarTema } = api
  useEffect(() => {
    if (total > 0 && totalRespondidas >= total) {
      registrarTema({ temaId: temaActivo.id, correctas: totalCorrectas, total })
    }
  }, [temaActivo.id, totalRespondidas, totalCorrectas, total, registrarTema])

  // Cuando pasás de NO respondido a respondido, iluminamos el dot por 1.6s
  // y después se atenúa solo (calm design — idea de la usuaria).
  useEffect(() => {
    const prev = prevRespondidaRef.current
    prevRespondidaRef.current = respondida
    if (prev === false && respondida === true) {
      setAnimandoDotIdx(displayIdx)
      const t = setTimeout(() => setAnimandoDotIdx(null), 1600)
      return () => clearTimeout(t)
    }
  }, [respondida, displayIdx])

  if (total === 0) {
    return (
      <div className="glass-strong rounded-2xl p-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        No hay preguntas en este tema todavía.
      </div>
    )
  }

  // Contestaste todas: en vez de dejarte parada en la última pregunta,
  // aparece el cierre con el puntaje y a dónde seguir.
  if (totalRespondidas >= total && !revisando) {
    /* Con tope, el cierre no es "terminaste el tema": es "hasta acá llega la
       muestra". Se dice con el número a la vista, no con un cartel vago. */
    if (hayTope) {
      return (
        <div className="anim-fade rounded-3xl p-8 text-center"
          style={{ background: "var(--crema)" }}>
          <p className="serif mb-3 text-[1.9rem] leading-tight">
            Hasta acá llega la muestra
          </p>
          <p className="mx-auto mb-2 max-w-sm text-[16px] leading-relaxed font-medium text-[var(--noche)]/65">
            Contestaste {totalCorrectas} de {total} bien. Este tema tiene{" "}
            <strong className="font-extrabold text-[var(--noche)]">
              {totalReal} preguntas
            </strong>{" "}
            en total.
          </p>
          <p className="mx-auto mb-7 max-w-sm text-[15px] leading-relaxed font-medium text-[var(--noche)]/45">
            Así es como corrige y explica cada una. El resto se abre cuando
            desbloqueás.
          </p>
          <button onClick={onTope} className="btn-lunar btn-noche !py-4">
            Quiero seguir
          </button>
          <button
            onClick={() => setRevisando(true)}
            className="btn-lunar btn-fantasma mt-2 !py-2 text-[15px] text-[var(--noche)]/45"
          >
            Ver mis respuestas
          </button>
        </div>
      )
    }
    return (
      <QuizTerminado
        api={api}
        correctas={totalCorrectas}
        total={total}
        onRevisar={() => setRevisando(true)}
      />
    )
  }

  const nivelInfo = NIVELES_LABEL[nivelActual] ?? NIVELES_LABEL[2]

  /* El quiz corre de largo: en la última pregunta del tema, "Siguiente" no se
     apaga — te pasa al quiz del tema que sigue. Antes había que ir a elegirlo
     a mano y se perdía el hilo. */
  const temas = api.contenido.temas
  const posTema = temas.findIndex((t) => t.id === temaActivo.id)
  const temaSiguiente =
    posTema >= 0 && posTema < temas.length - 1 ? temas[posTema + 1] : null
  const enUltima = displayIdx === total - 1

  const irSiguiente = () => {
    if (!enUltima) {
      irAPregunta(displayIdx + 1)
    } else if (temaSiguiente) {
      api.seleccionarTema(temaSiguiente.id)
      api.cambiarTab("quiz")
    }
  }

  return (
    <div className="anim-fade space-y-4">
      {/* Dots de progreso (en orden de display) */}
      <div className="flex flex-wrap items-center gap-1.5">
        {ordenTemaActivo.slice(0, total).map((origIdxAtPos, i) => {
          const res = r[origIdxAtPos]
          let cls = "bg-[var(--noche)]/12"
          if (res) {
            if (animandoDotIdx === i) {
              // Recién respondido: brillante + animación que lo atenúa
              cls = res.correcta
                ? "bg-[var(--acierto)] dot-settling"
                : "bg-[var(--error)] dot-settling"
            } else {
              // Ya respondido antes: estado calmo desde el inicio
              cls = res.correcta
                ? "bg-[var(--acierto)]/60"
                : "bg-[var(--error)]/60"
            }
          }
          if (i === displayIdx) cls += " ring-2 ring-[var(--lila)]/45"
          return (
            <button
              key={i}
              onClick={() => irAPregunta(i)}
              className={cn(
                "h-2 flex-1 min-w-[10px] rounded-full transition-all hover:opacity-80",
                cls,
              )}
              aria-label={`Ir a pregunta ${i + 1}`}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between gap-2 text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-2">
          <span>
            Pregunta {displayIdx + 1} de {total}
          </span>
          {/* Sin esto, "2 de 9" no dice de qué serie: parece que la app se
              quedó trabada en vez de estar en el tema 3 de 19. */}
          <span className="hidden text-[var(--noche)]/35 sm:inline">
            tema {posTema + 1} de {temas.length}
          </span>
          <span
            className={cn(
              "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
              nivelInfo.tone,
            )}
          >
            {nivelInfo.label}
          </span>
        </span>
        <span>
          {totalCorrectas}/{totalRespondidas || 0} correctas
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
                <Check className="opcion-tick ml-auto h-4 w-4 shrink-0" />
              )
            } else if (!respondida && eleccionPendiente === i) {
              // Marcada, todavía sin corregir: ni verde ni roja.
              cls += " elegida"
            }
            return (
              <button
                key={i}
                onClick={() => setEleccionPendiente(i)}
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

        {/* El paso de calibración. Va acá, entre elegir y saber. */}
        {!respondida && eleccionPendiente !== null && (
          <SelectorSeguridad
            onElegir={(seg) => {
              responder(eleccionPendiente, seg)
              setEleccionPendiente(null)
            }}
          />
        )}

        {respondida && (
          <div
            className={cn(
              "anim-fade mt-5 rounded-xl border-l-4 p-4",
              respuesta?.correcta
                ? "border-l-emerald-500/60 bg-emerald-500/5"
                : "border-l-red-500/60 bg-red-500/5",
            )}
          >
            <p
              className={cn(
                "mb-1.5 text-[10px] font-medium tracking-wider uppercase",
                respuesta?.correcta
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400",
              )}
            >
              {respuesta?.correcta ? "Bien" : "Para recordar"}
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
          onClick={() => irAPregunta(displayIdx - 1)}
          disabled={displayIdx === 0}
          className="btn-lunar btn-suave !px-5 !py-3 text-sm disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Anterior
        </button>
        <div className="hidden text-[11px] text-zinc-500 sm:block dark:text-zinc-400">
          {respondida ? (
            <>
              <span className="kbd">Enter</span> · siguiente
            </>
          ) : eleccionPendiente !== null ? (
            <>
              <span className="kbd">1</span>–<span className="kbd">3</span> ·
              seguridad
            </>
          ) : (
            <>
              <span className="kbd">1</span>–<span className="kbd">{pregunta.opciones.length}</span> ·
              elegir
            </>
          )}
        </div>
        <button
          onClick={irSiguiente}
          disabled={enUltima && !temaSiguiente}
          className="btn-lunar btn-lila !px-5 !py-3 text-sm disabled:cursor-not-allowed disabled:opacity-30"
        >
          {enUltima ? "Tema siguiente" : "Siguiente"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
