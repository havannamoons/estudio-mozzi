"use client"

import { useMateria } from "@/lib/materias/contexto"
import { Estirandose, LunaProta, Sentada } from "@/components/landing/Personajes"

interface Props {
  onEmpezar: () => void
}

/**
 * Primera visita. Antes era una tarjeta de vidrio con etiqueta, stats y cinco
 * filas de íconos — mucha información antes de dejar entrar a nadie.
 *
 * Ahora es una bienvenida corta con los muñequitos de la marca: dice de qué
 * materia se trata, cómo se estudia y listo. El detalle de los modos ya está
 * en el selector, no hace falta explicarlo dos veces.
 */

const COMO = [
  {
    titulo: "Leés poquito",
    desc: "El tema en bloques cortos, con los referentes clínicos al lado.",
  },
  {
    titulo: "Contestás",
    desc: "Quiz, unir conceptos y completar frases. Con explicación siempre.",
  },
  {
    titulo: "Te tomás un simulacro",
    desc: "Todo mezclado, sin pistas. Como la mesa de verdad.",
  },
]

export function Welcome({ onEmpezar }: Props) {
  const { materia, contenido } = useMateria()
  const totalPreguntas = contenido.temas.reduce(
    (acc, t) => acc + t.preguntas.length,
    0,
  )

  return (
    <main className="sin-bichito relative mx-auto flex min-h-[100svh] max-w-2xl flex-col justify-center px-6 py-12">
      {/* Muñequitos en los márgenes, como en la landing */}
      <div className="asoma asoma-izq bottom-10">
        <Estirandose size={230} color="var(--cielo)" />
      </div>
      <div className="asoma asoma-der top-16">
        <Sentada size={210} color="var(--menta)" />
      </div>

      <div className="relative text-center">
        <div className="flota mx-auto mb-7 w-fit">
          <LunaProta size={200} />
        </div>

        <p className="mb-4 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
          {materia.carrera}
          {materia.catedra ? ` · ${materia.catedra}` : ""}
        </p>

        <h1 className="serif mb-4 text-[clamp(2.2rem,7vw,3.4rem)] leading-tight">
          {materia.nombreLargo}
        </h1>

        <p className="mx-auto mb-10 max-w-md text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
          {contenido.temas.length} temas y {totalPreguntas} preguntas para
          preparar el final contestando, no releyendo.
        </p>

        {/* Cómo se estudia: tres líneas, sin tarjetas ni íconos */}
        <div className="mx-auto mb-10 max-w-md text-left">
          {COMO.map((c, i) => (
            <div key={c.titulo} className="fila flex items-baseline gap-4 py-4">
              <span className="w-4 shrink-0 text-sm font-extrabold text-[var(--lila)]">
                {i + 1}
              </span>
              <span>
                <span className="serif block text-xl">{c.titulo}</span>
                <span className="mt-0.5 block text-[15px] leading-relaxed font-medium text-[var(--noche)]/60">
                  {c.desc}
                </span>
              </span>
            </div>
          ))}
        </div>

        <button onClick={onEmpezar} className="btn-lunar btn-lila !px-8 !py-4">
          Empezar a estudiar
        </button>

        <p className="mt-6 text-[13px] font-semibold text-[var(--noche)]/40">
          Tu progreso se guarda en este dispositivo.
        </p>
      </div>
    </main>
  )
}
