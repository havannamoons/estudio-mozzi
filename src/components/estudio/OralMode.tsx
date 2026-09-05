"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, Check, Mic } from "lucide-react"
import type { EstudioApi } from "@/lib/hooks/useEstudio"
import type { ConsignaOral } from "@/lib/types"
import { consignasDeLaMateria } from "@/lib/oral"
import { useMicrofono, type MicApi } from "@/lib/hooks/useMicrofono"
import { cn } from "@/lib/utils"
import { Estirandose, Estudiando, LunaProta } from "@/components/landing/Personajes"
import { Confeti } from "./Confeti"
import { OndasVoz } from "./OndasVoz"

/**
 * MODO ORAL — el único donde hay que producir, no reconocer.
 *
 * Los otros cuatro modos miden si podés señalar la respuesta correcta entre
 * varias. Los finales de la facultad son orales: hay que armar el desarrollo
 * desde cero, sostenerlo tres minutos y aguantar una repregunta. Entre esas dos
 * cosas hay un salto que el múltiple opción no entrena, y que además fabrica una
 * sensación de dominio que después no aparece frente al tribunal.
 *
 * La app no te escucha (por ahora). El diseño se apoya en eso en vez de
 * disimularlo:
 *
 *   1. Hablás con la consigna a la vista y NADA más. Ninguna ayuda, ningún
 *      punteo: si el punteo estuviera visible estarías leyendo, no explicando.
 *   2. Recién cuando terminás se revela lo que un buen desarrollo tenía que
 *      tocar, y vos tildás honestamente qué dijiste.
 *   3. La repregunta llega después, como en un final.
 *
 * Ese orden importa: es el mismo principio de la calibración. Primero te
 * compromete, después te muestra.
 */

type Fase = "setup" | "hablando" | "punteo" | "repregunta" | "cierre"

/**
 * Lo que quedó del micrófono. `null` cuando no hubo (permiso rechazado, sin
 * micrófono, o navegador que no lo soporta).
 *
 * `hablados` son los segundos en que se detectó voz; `transcurrido`, los que
 * pasaron. La proporción entre los dos es el dato interesante: cuánto del
 * tiempo estuviste efectivamente hablando y cuánto en silencio.
 */
interface DatosVoz {
  hablados: number
  transcurrido: number
}

/**
 * Cuenta atrás de un solo uso.
 *
 * El intervalo depende SOLO de `corriendo`, así que ningún re-render lo
 * reinicia (que era el bug obvio de escribirlo con setTimeout y el segundo
 * actual en las dependencias). El aviso de que llegó a cero sale por un efecto
 * aparte, y el callback vive en una ref para que cambiar de identidad entre
 * renders no vuelva a montar el reloj.
 */
function useCuentaAtras(segundosTotales: number, alTerminar: () => void) {
  const [restante, setRestante] = useState(segundosTotales)
  const [corriendo, setCorriendo] = useState(false)
  const terminarRef = useRef(alTerminar)

  useEffect(() => {
    terminarRef.current = alTerminar
  }, [alTerminar])

  // Mientras no arrancó, cambiar la duración elegida mueve el número.
  useEffect(() => {
    if (!corriendo) setRestante(segundosTotales)
  }, [segundosTotales, corriendo])

  useEffect(() => {
    if (!corriendo) return
    const id = setInterval(() => {
      setRestante((s) => (s <= 1 ? 0 : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [corriendo])

  useEffect(() => {
    if (corriendo && restante === 0) {
      setCorriendo(false)
      terminarRef.current()
    }
  }, [corriendo, restante])

  return { restante, corriendo, arrancar: () => setCorriendo(true) }
}

export function OralMode({ api }: { api: EstudioApi }) {
  const consignas = useMemo(
    () => consignasDeLaMateria(api.contenido),
    [api.contenido],
  )

  const [fase, setFase] = useState<Fase>("setup")
  const [consigna, setConsigna] = useState<ConsignaOral | null>(null)
  const [minutos, setMinutos] = useState(3)
  /** Índices del punteo que la persona dice haber mencionado. */
  const [dichos, setDichos] = useState<Set<number>>(new Set())
  const [voz, setVoz] = useState<DatosVoz | null>(null)

  const empezar = (c: ConsignaOral) => {
    setConsigna(c)
    setMinutos(c.minutos)
    setDichos(new Set())
    setVoz(null)
    setFase("hablando")
  }

  const otra = () => {
    setConsigna(null)
    setDichos(new Set())
    setVoz(null)
    setFase("setup")
  }

  if (fase === "setup" || !consigna) {
    return <OralSetup consignas={consignas} onEmpezar={empezar} />
  }

  if (fase === "hablando") {
    return (
      <Hablando
        consigna={consigna}
        minutos={minutos}
        onMinutos={setMinutos}
        onTerminar={(v) => {
          setVoz(v)
          setFase("punteo")
        }}
        onSalir={otra}
      />
    )
  }

  if (fase === "punteo") {
    return (
      <Punteo
        consigna={consigna}
        dichos={dichos}
        onToggle={(i) =>
          setDichos((prev) => {
            const s = new Set(prev)
            if (s.has(i)) s.delete(i)
            else s.add(i)
            return s
          })
        }
        onSeguir={() =>
          setFase(consigna.repregunta ? "repregunta" : "cierre")
        }
      />
    )
  }

  if (fase === "repregunta") {
    return (
      <Repregunta
        consigna={consigna}
        onTerminar={() => setFase("cierre")}
      />
    )
  }

  return (
    <Cierre
      api={api}
      consigna={consigna}
      dichos={dichos}
      voz={voz}
      onOtra={otra}
      onRepetir={() => empezar(consigna)}
    />
  )
}

// ============================================================
// SETUP
// ============================================================
function OralSetup({
  consignas,
  onEmpezar,
}: {
  consignas: ConsignaOral[]
  onEmpezar: (c: ConsignaOral) => void
}) {
  const [filtro, setFiltro] = useState<"todas" | "desarrollo" | "articulacion">(
    "todas",
  )
  const visibles = consignas.filter(
    (c) => filtro === "todas" || c.tipo === filtro,
  )
  const cuantasArticulan = consignas.filter(
    (c) => c.tipo === "articulacion",
  ).length
  const cuantasDesarrollan = consignas.length - cuantasArticulan

  /* Al azar sin Math.random en el render: se resuelve en el click. */
  const alAzar = () => {
    if (visibles.length === 0) return
    onEmpezar(visibles[Math.floor(Math.random() * visibles.length)])
  }

  return (
    <div className="anim-fade mx-auto max-w-2xl">
      <div className="mb-9 text-center">
        <div className="mx-auto mb-6 w-fit">
          <Estudiando size={190} color="var(--dorado)" />
        </div>
        <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
          Oral
        </p>
        <p className="serif mb-4 text-[clamp(1.9rem,5.5vw,2.6rem)] leading-tight">
          Explicá en voz alta
        </p>
        <p className="mx-auto max-w-lg text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
          Elegís un tema, te aparece la consigna y hablás sin ver nada más.
          Recién cuando terminás se revela lo que había que decir. Hablando se
          fija distinto que leyendo, y el final es oral.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="grupo-pastillas">
          {/* El número al lado de cada opción no es decoración: con listas
              largas, cambiar de filtro puede no mover nada de lo que estás
              mirando. El contador es la confirmación de que el toque hizo
              algo. */}
          <button
            onClick={() => setFiltro("todas")}
            className={cn("pastilla", filtro === "todas" && "pastilla-activa")}
          >
            Todas <Cuantas n={consignas.length} />
          </button>
          <button
            onClick={() => setFiltro("desarrollo")}
            className={cn(
              "pastilla",
              filtro === "desarrollo" && "pastilla-activa",
            )}
          >
            Un tema <Cuantas n={cuantasDesarrollan} />
          </button>
          {cuantasArticulan > 0 && (
            <button
              onClick={() => setFiltro("articulacion")}
              className={cn(
                "pastilla",
                filtro === "articulacion" && "pastilla-activa",
              )}
            >
              Articular <Cuantas n={cuantasArticulan} />
            </button>
          )}
        </div>
        <button
          onClick={alAzar}
          className="shrink-0 text-[14px] font-bold text-[var(--lila)] underline decoration-2 underline-offset-4"
        >
          Al azar
        </button>
      </div>

      {filtro === "articulacion" && (
        <p className="mb-5 text-[15px] leading-relaxed font-medium text-[var(--noche)]/55">
          Estas son las difíciles: dos o más textos puestos a conversar. Es lo
          que más se toma en un final y lo que menos se practica.
        </p>
      )}

      <div>
        {visibles.map((c) => (
          <button
            key={c.id}
            onClick={() => onEmpezar(c)}
            className="fila flex w-full items-center gap-4 py-4 text-left transition-colors hover:text-[var(--lila)]"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] leading-snug font-semibold">
                {c.consigna}
              </span>
              <span className="mt-1 block text-[13px] font-bold text-[var(--noche)]/35">
                {c.minutos} min · {c.puntos.length} puntos
                {c.tipo === "articulacion" && " · articulación"}
                {c.repregunta && " · con repregunta"}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 opacity-40" />
          </button>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// HABLANDO — la pantalla más importante, y la más vacía
// ============================================================
function Hablando({
  consigna,
  minutos,
  onMinutos,
  onTerminar,
  onSalir,
}: {
  consigna: ConsignaOral
  minutos: number
  onMinutos: (m: number) => void
  onTerminar: (voz: DatosVoz | null) => void
  onSalir: () => void
}) {
  const mic = useMicrofono()
  /* El reloj no puede pasarle su valor a `terminar` porque `terminar` se define
     antes que el reloj (el reloj lo necesita). Una ref rompe el círculo. */
  const restanteRef = useRef(minutos * 60)

  const terminar = () => {
    const transcurrido = minutos * 60 - restanteRef.current
    const hubo = mic.estado === "activo"
    mic.apagar()
    onTerminar(
      hubo
        ? { hablados: mic.segundosHablados, transcurrido: Math.max(1, transcurrido) }
        : null,
    )
  }

  const { restante, corriendo, arrancar } = useCuentaAtras(minutos * 60, terminar)

  useEffect(() => {
    restanteRef.current = restante
  }, [restante])

  const empezar = () => {
    /* El permiso se pide acá, con el click, y no al entrar al modo: un cartel de
       micrófono apareciendo solo, sin que hayas pedido nada, se cierra sin
       leerlo. Si lo rechazás el modo sigue funcionando igual, sin ondas. */
    void mic.activar()
    arrancar()
  }

  const mm = Math.floor(restante / 60)
  const ss = restante % 60
  const urgente = corriendo && restante <= 20

  return (
    <div className="anim-fade mx-auto max-w-2xl text-center">
      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        {consigna.tipo === "articulacion" ? "Articulación" : "Desarrollo"}
      </p>

      {/* La consigna es lo único grande de la pantalla. Nada de punteos, nada
          de ayudas: si hubiera algo para leer, estarías leyendo. */}
      <p className="serif mx-auto mb-9 max-w-xl text-[clamp(1.5rem,4.2vw,2.1rem)] leading-tight">
        {consigna.consigna}
      </p>

      <p
        className="serif mb-1 text-[clamp(3.4rem,12vw,6rem)] leading-none tabular-nums"
        style={{ color: urgente ? "var(--error)" : "var(--noche)" }}
      >
        <span className={cn(urgente && "reloj-urgente")}>
          {mm}:{String(ss).padStart(2, "0")}
        </span>
      </p>

      {!corriendo ? (
        <>
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3, 5].map((m) => (
              <button
                key={m}
                onClick={() => onMinutos(m)}
                aria-pressed={minutos === m}
                className={cn(
                  "min-h-[38px] rounded-full px-4 text-[14px] font-bold tabular-nums transition-colors",
                  minutos === m
                    ? "bg-[color-mix(in_srgb,var(--lila)_14%,transparent)] text-[var(--lila)]"
                    : "text-[var(--noche)]/45 hover:bg-[color-mix(in_srgb,var(--noche)_5%,transparent)]",
                )}
              >
                {m} min
              </button>
            ))}
          </div>

          <p className="mx-auto mb-3 max-w-md text-[16px] leading-relaxed font-medium text-[var(--noche)]/55">
            Buscá un lugar donde puedas hablar en voz alta. En voz baja o
            &ldquo;mentalmente&rdquo; no sirve: la mitad de lo que se aprende
            acá pasa por escucharte armar la frase.
          </p>
          <p className="mx-auto mb-8 max-w-md text-[14px] leading-relaxed font-medium text-[var(--noche)]/40">
            Te va a pedir permiso para usar el micrófono, para mostrarte las
            ondas de tu voz mientras hablás. No graba ni guarda nada: el sonido
            se mide y se descarta al instante.
          </p>

          <button onClick={empezar} className="btn-lunar btn-lila">
            <Mic className="h-5 w-5" /> Empezar a explicar
          </button>
          <div className="mt-5">
            <button
              onClick={onSalir}
              className="text-[14px] font-bold text-[var(--noche)]/40 underline decoration-2 underline-offset-4"
            >
              Elegir otra consigna
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-2">
            <OndasVoz mic={mic} />
          </div>
          <EstadoEscucha mic={mic} />

          <button onClick={terminar} className="btn-lunar btn-lila mt-7">
            Ya expliqué
          </button>
          <div className="mt-5">
            <button
              onClick={terminar}
              className="text-[14px] font-bold text-[var(--noche)]/40 underline decoration-2 underline-offset-4"
            >
              Me quedé: mostrame el punteo
            </button>
          </div>
        </>
      )}
    </div>
  )
}

/** El contador que va dentro de una pastilla de filtro. */
function Cuantas({ n }: { n: number }) {
  return (
    <span className="ml-1 text-[11px] font-extrabold tabular-nums opacity-55">
      {n}
    </span>
  )
}

/**
 * Cuánto del tiempo estuviste hablando de verdad.
 *
 * Es el dato que el micrófono deja y que nadie mide: en un oral, los silencios
 * largos pesan tanto como los errores. Un desarrollo de tres minutos con noventa
 * segundos de silencio no es un desarrollo de tres minutos.
 */
function CuantoHablaste({ voz }: { voz: DatosVoz }) {
  const pct = Math.min(
    100,
    Math.round((voz.hablados / voz.transcurrido) * 100),
  )
  const mm = Math.floor(voz.hablados / 60)
  const ss = voz.hablados % 60

  const nota =
    pct >= 80
      ? "Casi sin silencios. Eso es lo que se escucha como saber el tema."
      : pct >= 55
        ? "Hubo silencios, pero razonables. Los que se hacen buscando la palabra justa no molestan."
        : "Hubo silencio casi la mitad del tiempo. En un oral eso se nota más que un error: probá explicarlo otra vez y bancate seguir hablando aunque la frase salga imperfecta."

  const color =
    pct >= 80 ? "var(--acierto)" : pct >= 55 ? "var(--dorado)" : "var(--coral)"

  return (
    <div className="mx-auto mb-10 max-w-md text-left">
      <p className="mb-3 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
        Cuánto hablaste
      </p>
      <div className="mb-3 flex items-baseline gap-3">
        <span
          className="serif text-[2.2rem] leading-none tabular-nums"
          style={{ color }}
        >
          {pct}%
        </span>
        <span className="text-[15px] font-bold text-[var(--noche)]/45 tabular-nums">
          {mm > 0 ? `${mm}:${String(ss).padStart(2, "0")}` : `${ss}s`} de voz
        </span>
      </div>
      <div className="mb-3 h-2 overflow-hidden rounded-full bg-[var(--noche)]/10">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <p className="text-[15px] leading-relaxed font-medium text-[var(--noche)]/60">
        {nota}
      </p>
    </div>
  )
}

/**
 * El renglón debajo de las ondas. Es el que convierte el dibujito en
 * información: si te callás, te lo dice.
 */
function EstadoEscucha({ mic }: { mic: MicApi }) {
  const { estado, hablando, segundosHablados } = mic

  if (estado === "pidiendo") {
    return (
      <p className="text-[15px] font-bold text-[var(--noche)]/40">
        Esperando el permiso del micrófono…
      </p>
    )
  }

  if (estado === "denegado" || estado === "no-soportado" || estado === "error") {
    return (
      <p className="mx-auto max-w-sm text-[14px] leading-relaxed font-medium text-[var(--noche)]/40">
        {estado === "denegado"
          ? "Sin permiso de micrófono no puedo mostrarte las ondas, pero el ejercicio funciona igual: hablá en voz alta lo mismo."
          : "No encontré micrófono en esta compu. El ejercicio funciona igual, hablá en voz alta lo mismo."}
      </p>
    )
  }

  if (estado === "activo") {
    return (
      <div>
        <p
          className="text-[15px] font-extrabold transition-colors"
          style={{
            color: hablando ? "var(--acierto)" : "var(--dorado)",
          }}
        >
          {hablando ? "Te escucho" : "No te escucho: hablá más fuerte"}
        </p>
        <p className="mt-1 text-[13px] font-bold tabular-nums text-[var(--noche)]/35">
          {segundosHablados}s hablando
        </p>
      </div>
    )
  }

  return (
    <p className="text-[15px] font-bold text-[var(--noche)]/40">
      Hablá hasta que se termine, o cortá cuando ya dijiste todo
    </p>
  )
}

// ============================================================
// PUNTEO — la autoevaluación honesta
// ============================================================
function Punteo({
  consigna,
  dichos,
  onToggle,
  onSeguir,
}: {
  consigna: ConsignaOral
  dichos: Set<number>
  onToggle: (i: number) => void
  onSeguir: () => void
}) {
  return (
    <div className="anim-fade mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
          Lo que había que decir
        </p>
        <p className="serif mb-4 text-[clamp(1.7rem,4.6vw,2.3rem)] leading-tight">
          ¿Cuáles dijiste?
        </p>
        <p className="mx-auto max-w-md text-[16px] leading-relaxed font-medium text-[var(--noche)]/60">
          Tildá solo los que dijiste de verdad, en voz alta y con desarrollo. Si
          lo pensaste pero no lo dijiste, no cuenta: en el final tampoco iba a
          contar.
        </p>
      </div>

      <div className="mb-9">
        {consigna.puntos.map((p, i) => {
          const dicho = dichos.has(i)
          return (
            <button
              key={i}
              onClick={() => onToggle(i)}
              aria-pressed={dicho}
              className="fila flex w-full items-start gap-4 py-4 text-left"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all",
                  dicho
                    ? "bg-[var(--acierto)] text-white"
                    : "bg-[color-mix(in_srgb,var(--noche)_10%,transparent)]",
                )}
              >
                {dicho && <Check className="h-4 w-4" strokeWidth={3} />}
              </span>
              <span
                className={cn(
                  "min-w-0 flex-1 text-[16px] leading-snug font-semibold transition-opacity",
                  !dicho && "opacity-70",
                )}
              >
                {p.punto}
              </span>
            </button>
          )
        })}
      </div>

      <div className="text-center">
        <button onClick={onSeguir} className="btn-lunar btn-lila">
          {consigna.repregunta ? "Listo, viene la repregunta" : "Ver la devolución"}
        </button>
        <p className="mt-4 text-[14px] font-bold text-[var(--noche)]/35">
          {dichos.size} de {consigna.puntos.length} marcados
        </p>
      </div>
    </div>
  )
}

// ============================================================
// REPREGUNTA — el tribunal
// ============================================================
function Repregunta({
  consigna,
  onTerminar,
}: {
  consigna: ConsignaOral
  onTerminar: () => void
}) {
  const mic = useMicrofono()
  const terminar = () => {
    mic.apagar()
    onTerminar()
  }
  const { restante, corriendo, arrancar } = useCuentaAtras(60, terminar)

  return (
    <div className="anim-fade mx-auto max-w-2xl text-center">
      <div className="mx-auto mb-7 w-fit">
        <LunaProta size={165} />
      </div>
      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--coral)] uppercase">
        Repregunta
      </p>
      <p className="serif mx-auto mb-8 max-w-xl text-[clamp(1.4rem,4vw,1.9rem)] leading-tight">
        {consigna.repregunta}
      </p>

      {!corriendo ? (
        <>
          <p className="mx-auto mb-8 max-w-md text-[16px] leading-relaxed font-medium text-[var(--noche)]/55">
            Un minuto, sin preparar. Es la parte del final que menos se ensaya y
            la que más se siente: no alcanza con haber estudiado el tema, hay que
            poder moverse dentro de él.
          </p>
          <button
            onClick={() => {
              void mic.activar()
              arrancar()
            }}
            className="btn-lunar btn-lila"
          >
            <Mic className="h-5 w-5" /> Contestar
          </button>
          <div className="mt-5">
            <button
              onClick={terminar}
              className="text-[14px] font-bold text-[var(--noche)]/40 underline decoration-2 underline-offset-4"
            >
              Saltear la repregunta
            </button>
          </div>
        </>
      ) : (
        <>
          <p
            className="serif mb-3 text-[clamp(3rem,10vw,4.6rem)] leading-none tabular-nums"
            style={{ color: restante <= 15 ? "var(--error)" : "var(--noche)" }}
          >
            <span className={cn(restante <= 15 && "reloj-urgente")}>
              0:{String(restante).padStart(2, "0")}
            </span>
          </p>
          <div className="mb-2">
            <OndasVoz mic={mic} />
          </div>
          <EstadoEscucha mic={mic} />
          <button onClick={terminar} className="btn-lunar btn-lila mt-7">
            Ya contesté
          </button>
        </>
      )}
    </div>
  )
}

// ============================================================
// CIERRE — la devolución
// ============================================================
function Cierre({
  api,
  consigna,
  dichos,
  voz,
  onOtra,
  onRepetir,
}: {
  api: EstudioApi
  consigna: ConsignaOral
  dichos: Set<number>
  voz: DatosVoz | null
  onOtra: () => void
  onRepetir: () => void
}) {
  const total = consigna.puntos.length
  const n = dichos.size
  const pct = total > 0 ? Math.round((n / total) * 100) : 0
  const bien = pct >= 70
  const masOMenos = pct >= 40 && pct < 70
  const faltaron = consigna.puntos
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => !dichos.has(i))

  const color = bien
    ? "var(--acierto)"
    : masOMenos
      ? "var(--dorado)"
      : "var(--lila)"

  const titulo = bien
    ? "Eso se defiende"
    : masOMenos
      ? "Va tomando forma"
      : "Primera vuelta"

  /* La devolución tiene que decir algo distinto según el caso, y sobre todo
     tiene que ser útil cuando salió mal: ahí es cuando se abandona. */
  const mensaje = bien
    ? "Tocaste casi todo. Ahora lo que rinde es repetirlo mañana sin mirar nada: la segunda vez es la que muestra si quedó."
    : masOMenos
      ? "Dijiste la mitad, que en una primera vuelta hablando es bastante. Mirá abajo lo que se escapó y volvé a explicarlo entero, no solo la parte que faltó: el desarrollo se practica completo."
      : "Que cueste es la información. Leer la teoría se siente fácil y hablar se siente imposible, y esa distancia es exactamente lo que el final mide. Leé lo de abajo y probá otra vez la misma consigna."

  return (
    <div className="anim-fade relative mx-auto max-w-2xl py-4 text-center">
      {bien && <Confeti cantidad={26} />}

      <div className="festeja mx-auto mb-7 w-fit">
        {bien ? (
          <Estirandose size={200} color="var(--menta)" festeja />
        ) : (
          <Estudiando size={190} color="var(--dorado)" />
        )}
      </div>

      <p className="mb-2 text-[12px] font-extrabold tracking-[0.16em] text-[var(--lila)] uppercase">
        Devolución
      </p>
      <p className="serif mb-3 text-[clamp(1.8rem,5vw,2.4rem)] leading-tight">
        {titulo}
      </p>

      <p className="t-dato" style={{ color }}>
        {n}/{total}
      </p>
      <p className="mb-7 text-[15px] font-bold text-[var(--noche)]/45">
        puntos tocados
      </p>

      <p className="mx-auto mb-9 max-w-md text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        {mensaje}
      </p>

      {voz && <CuantoHablaste voz={voz} />}

      {faltaron.length > 0 && (
        <div className="mb-10 text-left">
          <p className="mb-1 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
            Lo que se escapó ({faltaron.length})
          </p>
          <p className="mb-6 text-[15px] leading-relaxed font-medium text-[var(--noche)]/55">
            No es un resumen del texto: es lo que el tribunal escucha para
            decidir si entendiste.
          </p>
          {faltaron.map(({ p, i }) => (
            <div key={i} className="fila py-5">
              <p className="serif mb-2 text-[19px] leading-snug">{p.punto}</p>
              <p className="text-[15px] leading-relaxed font-medium text-[var(--noche)]/65">
                {p.desarrollo}
              </p>
            </div>
          ))}
        </div>
      )}

      {consigna.repregunta && (
        <div className="mb-10 text-left">
          <p className="mb-1 text-[13px] font-bold tracking-wide text-[var(--noche)]/40">
            La repregunta, para volver a pensarla
          </p>
          <p className="serif text-[19px] leading-snug">
            {consigna.repregunta}
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={onRepetir} className="btn-lunar btn-lila">
          Explicarlo otra vez
        </button>
        <button onClick={onOtra} className="btn-lunar btn-suave">
          Otra consigna
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={() => {
            api.seleccionarTema(consigna.temas[0])
            api.cambiarModo("estudio")
            api.cambiarTab("teoria")
          }}
          className="text-[15px] font-bold text-[var(--lila)] underline decoration-2 underline-offset-4"
        >
          Ir a la teoría de este tema
        </button>
      </div>
    </div>
  )
}
