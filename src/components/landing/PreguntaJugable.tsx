"use client"

import { useState } from "react"
import Link from "next/link"
import { Estrellita } from "./Personajes"

/**
 * Una mini-partida de 3 preguntas reales del banco.
 *
 * Antes era UNA pregunta suelta y se sentía una captura con botones. Ahora
 * tiene lo que hace que la app enganche: progreso visible, puntaje que sube,
 * y la explicación después de cada respuesta. Es el producto en chiquito.
 */

const LETRAS = ["A", "B", "C", "D"]

const PREGUNTAS = [
  {
    texto: "El yo es «servidor de tres amos». ¿Cuáles son?",
    opciones: [
      "El padre, la madre y el analista",
      "El ello, la realidad y el superyó",
      "La condensación, el desplazamiento y la censura",
      "El placer, el displacer y la angustia",
    ],
    correcta: 1,
    explicacion:
      "El yo queda apretado entre las pulsiones del ello, las condiciones del mundo exterior y las prohibiciones del superyó. Por eso la angustia es su señal de alarma.",
    fuente: "El yo y el ello · 1923",
  },
  {
    texto: "La primera fórmula freudiana del desarrollo de una neurosis (1896) es:",
    opciones: [
      "Defensa → represión → retorno de lo reprimido",
      "Síntoma → análisis → cura",
      "Trauma → fijación → regresión",
      "Pulsión → represión → sublimación",
    ],
    correcta: 0,
    explicacion:
      "Primero aparece la operación (la defensa rechaza una representación incompatible) y recién después la teoría del lugar. El síntoma es el retorno deformado de eso reprimido.",
    fuente: "Las neuropsicosis de defensa · 1896",
  },
  {
    texto: "Las tres formas de regresión del sueño son tópica, temporal y…",
    opciones: ["Estructural", "Formal", "Dinámica", "Instintiva"],
    correcta: 1,
    explicacion:
      "La regresión formal es el pasaje de modos maduros de expresión (la palabra) a modos primitivos (la imagen). Por eso el sueño se ve en vez de decirse.",
    fuente: "La interpretación de los sueños · cap. VII",
  },
]

interface Chispa {
  id: number
  dx: string
  dy: string
  delay: string
  color: string
  size: number
}

function generarChispas(): Chispa[] {
  const colores = ["#FFAE24", "#FF5C3D", "#17C79A", "#4C7DFF", "#C3B0EA"]
  return Array.from({ length: 16 }, (_, i) => {
    const angulo = (i / 16) * Math.PI * 2 + Math.random() * 0.35
    const dist = 80 + Math.random() * 110
    return {
      id: i,
      dx: `${Math.cos(angulo) * dist}px`,
      dy: `${Math.sin(angulo) * dist - 40}px`,
      delay: `${Math.random() * 0.14}s`,
      color: colores[i % colores.length],
      size: 12 + Math.random() * 14,
    }
  })
}

export function PreguntaJugable() {
  const [idx, setIdx] = useState(0)
  const [elegida, setElegida] = useState<number | null>(null)
  const [aciertos, setAciertos] = useState(0)
  const [chispas, setChispas] = useState<Chispa[]>([])
  const [terminada, setTerminada] = useState(false)

  const pregunta = PREGUNTAS[idx]
  const respondida = elegida !== null
  const acerto = elegida === pregunta.correcta
  const esUltima = idx === PREGUNTAS.length - 1

  function responder(i: number) {
    if (respondida) return
    setElegida(i)
    if (i === pregunta.correcta) {
      setAciertos((a) => a + 1)
      setChispas(generarChispas())
    }
  }

  function siguiente() {
    setChispas([])
    if (esUltima) {
      setTerminada(true)
      return
    }
    setIdx((i) => i + 1)
    setElegida(null)
  }

  function reiniciar() {
    setIdx(0)
    setElegida(null)
    setAciertos(0)
    setChispas([])
    setTerminada(false)
  }

  /* ---------- Resultado ---------- */
  if (terminada) {
    return (
      <div className="relative rounded-[2rem] bg-[var(--crema)] p-7 text-center sm:p-10">
        <p className="t-dato text-[var(--lila)]">
          {aciertos}/{PREGUNTAS.length}
        </p>
        <p className="mt-3 mb-8 text-[17px] leading-relaxed font-semibold text-[var(--noche)]/70">
          {aciertos === PREGUNTAS.length
            ? "Tres de tres. En la app hay 115 más."
            : aciertos === 0
              ? "Justamente para eso está la app."
              : "Y todavía quedan 115 preguntas adentro."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/app/psicoanalisis" className="btn-lunar btn-noche">
            Entrar a la app
          </Link>
          <button
            type="button"
            onClick={reiniciar}
            className="btn-lunar btn-fantasma !px-0"
          >
            De nuevo
          </button>
        </div>
      </div>
    )
  }

  /* ---------- Partida ---------- */
  return (
    <div className="relative rounded-[2rem] bg-[var(--crema)] p-6 sm:p-9">
      {chispas.length > 0 && (
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 z-20"
          aria-hidden="true"
        >
          {chispas.map((c) => (
            <span
              key={c.id}
              className="chispa absolute block"
              style={
                {
                  "--dx": c.dx,
                  "--dy": c.dy,
                  animationDelay: c.delay,
                } as React.CSSProperties
              }
            >
              <Estrellita size={c.size} color={c.color} />
            </span>
          ))}
        </div>
      )}

      {/* Progreso: puntitos + aciertos. Es lo que la vuelve partida. */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-1.5" aria-label={`Pregunta ${idx + 1} de ${PREGUNTAS.length}`}>
          {PREGUNTAS.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-7 bg-[var(--lila)]"
                  : i < idx
                    ? "w-2 bg-[var(--lila)]/40"
                    : "w-2 bg-[var(--noche)]/12"
              }`}
            />
          ))}
        </div>
        <span className="text-[13px] font-extrabold tracking-wide text-[var(--noche)]/40">
          {aciertos} {aciertos === 1 ? "acierto" : "aciertos"}
        </span>
      </div>

      {/* key = idx: al cambiar de pregunta se re-monta y vuelve a entrar */}
      <div key={idx} className="revela visible">
        <h3 className="serif mb-6 text-[clamp(1.3rem,2.7vw,1.8rem)] leading-tight">
          {pregunta.texto}
        </h3>

        <div role="group" aria-label="Opciones de respuesta">
          {pregunta.opciones.map((op, i) => {
            const esCorrecta = i === pregunta.correcta
            const esElegida = i === elegida

            let color = ""
            if (respondida && esCorrecta) color = "text-[var(--menta)]"
            else if (respondida && esElegida) color = "text-[var(--coral)]"
            else if (respondida) color = "opacity-35"

            return (
              <button
                key={i}
                type="button"
                onClick={() => responder(i)}
                disabled={respondida}
                aria-pressed={esElegida}
                className={`fila flex w-full items-baseline gap-4 py-4 text-left transition-colors ${color} ${
                  respondida
                    ? "cursor-default"
                    : "cursor-pointer hover:text-[var(--lila)]"
                }`}
              >
                <span className="w-3.5 shrink-0 text-sm font-bold opacity-45">
                  {LETRAS[i]}
                </span>
                <span className="text-[17px] leading-snug font-semibold">{op}</span>
              </button>
            )
          })}
        </div>
      </div>

      {respondida ? (
        <div className="revela visible mt-6">
          <p className="serif mb-2 text-xl">{acerto ? "Bien." : "No, pero mirá:"}</p>
          <p className="text-[16px] leading-relaxed text-[var(--noche)]/75">
            {pregunta.explicacion}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[12px] font-bold tracking-wide text-[var(--lila)]">
              {pregunta.fuente}
            </span>
            <button type="button" onClick={siguiente} className="btn-lunar btn-noche">
              {esUltima ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-[15px] font-semibold text-[var(--noche)]/45">
          Elegí una. Te decimos por qué, no solo si acertaste.
        </p>
      )}
    </div>
  )
}
