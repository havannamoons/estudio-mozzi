"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import type {
  EstiloSimulacro,
  FaseSimulacro,
  Modo,
  PreguntaSimulacro,
  ProgresoQuiz,
  RespuestaSimulacro,
  Seguridad,
  Tab,
} from "@/lib/types"
import {
  SIMULACRO_SEGUNDOS_POR_PREGUNTA,
  STORAGE_ACCESS,
  STORAGE_PROGRESO,
  STORAGE_SIMULACRO,
  STORAGE_WELCOME,
} from "@/lib/constants"
import { ordenarPorDificultadIdx, shuffle } from "@/lib/helpers"
import { claveStorage } from "@/lib/materias"
import { useMateria } from "@/lib/materias/contexto"
import type { ContenidoMateria } from "@/lib/materias/tipos"

const ORDEN_STORAGE = "estudio_orden_v1"

type OrdenPorTema = Record<string, number[]>

/** Un tema terminado dentro de la sesión actual. */
export interface TemaHecho {
  temaId: string
  correctas: number
  total: number
}

function cargarProgreso(clave: string): ProgresoQuiz {
  if (typeof localStorage === "undefined") return {}
  try {
    const d = localStorage.getItem(clave)
    return d ? (JSON.parse(d) as ProgresoQuiz) : {}
  } catch {
    return {}
  }
}

interface SimulacroSnapshot {
  fase: FaseSimulacro
  preguntas: PreguntaSimulacro[]
  respuestas: RespuestaSimulacro[]
  idx: number
  estilo?: EstiloSimulacro
  /* Guardamos el instante en que se termina el tiempo, no los segundos que
     quedan: si guardáramos los segundos, cerrar la pestaña congelaría el
     reloj y el simulacro cronometrado dejaría de ser cronometrado. */
  finEn?: number | null
}

function cargarSimulacro(clave: string): SimulacroSnapshot | null {
  if (typeof localStorage === "undefined") return null
  try {
    const d = localStorage.getItem(clave)
    if (!d) return null
    const parsed = JSON.parse(d) as SimulacroSnapshot
    // Solo restauramos sesiones activas; las que ya están en "setup" no aportan.
    if (parsed.fase === "setup") return null
    return parsed
  } catch {
    return null
  }
}

function cargarOrden(clave: string): OrdenPorTema {
  if (typeof localStorage === "undefined") return {}
  try {
    const d = localStorage.getItem(clave)
    return d ? (JSON.parse(d) as OrdenPorTema) : {}
  } catch {
    return {}
  }
}

function calcularOrdenTema(contenido: ContenidoMateria, temaId: string): number[] {
  const tema = contenido.temas.find((t) => t.id === temaId)
  if (!tema) return []
  const difs = contenido.dificultades[temaId] ?? tema.preguntas.map(() => 2)
  // Asegurar largo correcto: si dificultades no cubre todas, pad con nivel 2
  const ajustadas = tema.preguntas.map((_, i) => difs[i] ?? 2)
  return ordenarPorDificultadIdx(ajustadas)
}

export function useEstudio() {
  // Contenido de la materia activa (la inyecta <MateriaProvider>).
  const { materia, contenido } = useMateria()
  const TEMAS = contenido.temas
  const DIFICULTADES = contenido.dificultades

  // Claves de localStorage separadas por materia, para que el progreso de
  // una materia no pise el de otra.
  const claves = useMemo(
    () => ({
      progreso: claveStorage(materia.slug, STORAGE_PROGRESO),
      simulacro: claveStorage(materia.slug, STORAGE_SIMULACRO),
      welcome: claveStorage(materia.slug, STORAGE_WELCOME),
      orden: claveStorage(materia.slug, ORDEN_STORAGE),
    }),
    [materia.slug],
  )

  const [hidratado, setHidratado] = useState(false)
  const [progreso, setProgreso] = useState<ProgresoQuiz>({})
  const [ordenPorTema, setOrdenPorTema] = useState<OrdenPorTema>({})

  // === Control de acceso por código ===
  const [desbloqueado, setDesbloqueado] = useState(false)

  // === Pantalla de bienvenida (solo la primera visita) ===
  const [verBienvenida, setVerBienvenida] = useState(false)

  // === Modo estudio ===
  const [modo, setModo] = useState<Modo>("estudio")
  const [temaActivoId, setTemaActivoId] = useState<string>(TEMAS[0].id)
  const [tab, setTab] = useState<Tab>("teoria")
  const [preguntaActualIdx, setPreguntaActualIdx] = useState(0)

  /* === Sesión de estudio ===
     Los temas que terminaste EN ESTA SENTADA. No se guarda en el dispositivo
     a propósito: una sesión es "lo que hiciste hoy", y si la guardáramos, el
     resumen te mostraría para siempre lo de la primera vez. */
  const [sesion, setSesion] = useState<TemaHecho[]>([])
  const [verResumen, setVerResumen] = useState(false)

  // === Modo simulacro ===
  const [faseSimulacro, setFaseSimulacro] = useState<FaseSimulacro>("setup")
  const [preguntasSim, setPreguntasSim] = useState<PreguntaSimulacro[]>([])
  const [respuestasSim, setRespuestasSim] = useState<RespuestaSimulacro[]>([])
  const [preguntaSimIdx, setPreguntaSimIdx] = useState(0)
  const [estiloSim, setEstiloSim] = useState<EstiloSimulacro>("practica")
  /* Instante (epoch ms) en que vence el tiempo. `null` = sin reloj. */
  const [finEnSim, setFinEnSim] = useState<number | null>(null)
  /* `ahoraSim` late una vez por segundo solo mientras hay reloj corriendo.
     Arranca en null y se llena desde un efecto: leer Date.now() durante el
     render rompe la hidratación (el servidor y el navegador darían distinto). */
  const [ahoraSim, setAhoraSim] = useState<number | null>(null)
  const [porTiempoSim, setPorTiempoSim] = useState(false)

  // === Hidratación inicial ===
  useEffect(() => {
    setProgreso(cargarProgreso(claves.progreso))
    setOrdenPorTema(cargarOrden(claves.orden))
    // Restaurar simulacro en curso si lo hay (Nielsen #5 — prevención de errores)
    const sim = cargarSimulacro(claves.simulacro)
    if (sim) {
      setFaseSimulacro(sim.fase)
      setPreguntasSim(sim.preguntas)
      setRespuestasSim(sim.respuestas)
      setPreguntaSimIdx(sim.idx)
      setEstiloSim(sim.estilo ?? "practica")
      /* Si volvés y el tiempo ya venció mientras estabas afuera, el examen se
         entrega solo. No sería un simulacro si cerrar la pestaña regalara
         tiempo. */
      if (sim.finEn && sim.fase === "play" && sim.finEn <= Date.now()) {
        setFaseSimulacro("resultados")
        setPorTiempoSim(true)
        setFinEnSim(null)
      } else {
        setFinEnSim(sim.finEn ?? null)
      }
    }
    // Acceso: desbloqueado si ya ingresó un código válido en este dispositivo.
    try {
      if (localStorage.getItem(STORAGE_ACCESS) === "1") setDesbloqueado(true)
    } catch {}
    // Mostrar bienvenida solo si nunca se cerró en este dispositivo.
    try {
      if (!localStorage.getItem(claves.welcome)) setVerBienvenida(true)
    } catch {}
    setHidratado(true)
  }, [claves])

  const desbloquear = useCallback(() => {
    setDesbloqueado(true)
    try {
      localStorage.setItem(STORAGE_ACCESS, "1")
    } catch {}
  }, [])

  const cerrarBienvenida = useCallback(() => {
    setVerBienvenida(false)
    try {
      localStorage.setItem(claves.welcome, "1")
    } catch {}
  }, [claves])

  const abrirBienvenida = useCallback(() => {
    setVerBienvenida(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(claves.progreso, JSON.stringify(progreso))
  }, [progreso, hidratado, claves])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(claves.orden, JSON.stringify(ordenPorTema))
  }, [ordenPorTema, hidratado, claves])

  // === Persistir simulacro en curso ===
  // Guardamos solo cuando hay algo significativo (play o resultados).
  // En setup sin preguntas no tiene sentido (es estado vacío).
  useEffect(() => {
    if (!hidratado) return
    if (faseSimulacro === "setup" && preguntasSim.length === 0) {
      localStorage.removeItem(claves.simulacro)
      return
    }
    const snapshot: SimulacroSnapshot = {
      fase: faseSimulacro,
      preguntas: preguntasSim,
      respuestas: respuestasSim,
      idx: preguntaSimIdx,
      estilo: estiloSim,
      finEn: finEnSim,
    }
    localStorage.setItem(claves.simulacro, JSON.stringify(snapshot))
  }, [
    hidratado,
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    preguntaSimIdx,
    estiloSim,
    finEnSim,
    claves,
  ])

  // === Asegurar orden del tema activo (lazy init por tema) ===
  useEffect(() => {
    if (!hidratado) return
    if (!ordenPorTema[temaActivoId]) {
      setOrdenPorTema((prev) => ({
        ...prev,
        [temaActivoId]: calcularOrdenTema(contenido, temaActivoId),
      }))
    }
  }, [hidratado, temaActivoId, ordenPorTema, contenido])

  // === Tema activo ===
  const temaActivo = useMemo(
    () => TEMAS.find((t) => t.id === temaActivoId) ?? TEMAS[0],
    [temaActivoId, TEMAS],
  )

  // Orden de display del tema activo (puede ser undefined hasta que hidrate)
  const ordenTemaActivo = useMemo<number[]>(() => {
    const orden = ordenPorTema[temaActivoId]
    if (orden && orden.length === temaActivo.preguntas.length) return orden
    // Fallback antes de hidratación: orden natural
    return temaActivo.preguntas.map((_, i) => i)
  }, [ordenPorTema, temaActivoId, temaActivo])

  // Traduce posición de display → índice original (para leer pregunta + escribir progreso)
  const originalIdxDe = useCallback(
    (displayIdx: number): number => {
      return ordenTemaActivo[displayIdx] ?? displayIdx
    },
    [ordenTemaActivo],
  )

  const progresoTema = useCallback(
    (temaId: string) => {
      const tema = TEMAS.find((t) => t.id === temaId)
      if (!tema) return { total: 0, hechas: 0, correctas: 0 }
      const r = progreso[temaId] ?? {}
      let hechas = 0
      let correctas = 0
      tema.preguntas.forEach((_, i) => {
        if (r[i]) {
          hechas++
          if (r[i].correcta) correctas++
        }
      })
      return { total: tema.preguntas.length, hechas, correctas }
    },
    [progreso, TEMAS],
  )

  // === Responder (Quiz) ===
  // idx = índice de la opción elegida (0..3). preguntaActualIdx = display position.
  const responder = useCallback(
    (idx: number, seguridad?: Seguridad) => {
      const tema = TEMAS.find((t) => t.id === temaActivoId)
      if (!tema) return
      const origIdx = originalIdxDe(preguntaActualIdx)
      const yaExiste = progreso[tema.id]?.[origIdx]
      if (yaExiste) return
      const correcta = idx === tema.preguntas[origIdx].correcta
      setProgreso((prev) => ({
        ...prev,
        [tema.id]: {
          ...(prev[tema.id] ?? {}),
          [origIdx]: { elegida: idx, correcta, seguridad },
        },
      }))
    },
    [progreso, temaActivoId, preguntaActualIdx, originalIdxDe, TEMAS],
  )

  const irAPregunta = useCallback((idx: number) => {
    setPreguntaActualIdx(Math.max(0, idx))
  }, [])

  const seleccionarTema = useCallback((id: string) => {
    setTemaActivoId(id)
    setPreguntaActualIdx(0)
  }, [])

  const cambiarTab = useCallback((nuevo: Tab) => {
    setTab(nuevo)
    if (nuevo === "quiz") setPreguntaActualIdx(0)
  }, [])

  const resetearProgreso = useCallback(() => {
    setProgreso({})
    // Al resetear progreso también regenero el orden (nueva mezcla dentro de cada nivel)
    const nuevo: OrdenPorTema = {}
    TEMAS.forEach((t) => {
      nuevo[t.id] = calcularOrdenTema(contenido, t.id)
    })
    setOrdenPorTema(nuevo)
  }, [TEMAS, contenido])

  // === Reloj del simulacro cronometrado ===
  // Late una vez por segundo, y solo mientras el examen está en curso.
  useEffect(() => {
    if (faseSimulacro !== "play" || finEnSim === null) {
      setAhoraSim(null)
      return
    }
    setAhoraSim(Date.now())
    const id = setInterval(() => setAhoraSim(Date.now()), 1000)
    return () => clearInterval(id)
  }, [faseSimulacro, finEnSim])

  /** Segundos que faltan, o `null` si este simulacro no tiene reloj. */
  const segundosRestantes =
    finEnSim === null || ahoraSim === null
      ? null
      : Math.max(0, Math.round((finEnSim - ahoraSim) / 1000))

  // Se acabó el tiempo: se entrega solo, con lo que haya contestado.
  useEffect(() => {
    if (faseSimulacro === "play" && segundosRestantes === 0) {
      setFaseSimulacro("resultados")
      setPorTiempoSim(true)
      setFinEnSim(null)
    }
  }, [faseSimulacro, segundosRestantes])

  // === Simulacro ===
  // Sampling proporcional por dificultad + orden creciente.
  const iniciarSimulacro = useCallback(
    (cantidad: number, estilo: EstiloSimulacro = "practica") => {
    const buckets: Record<1 | 2 | 3, PreguntaSimulacro[]> = { 1: [], 2: [], 3: [] }
    TEMAS.forEach((t) => {
      const difs = DIFICULTADES[t.id] ?? []
      t.preguntas.forEach((_, i) => {
        const raw = difs[i] ?? 2
        const d: 1 | 2 | 3 = raw === 1 ? 1 : raw === 3 ? 3 : 2
        buckets[d].push({ temaId: t.id, preguntaIdx: i })
      })
    })

    const total = buckets[1].length + buckets[2].length + buckets[3].length
    const n = Math.min(cantidad, total)
    // Distribución proporcional, redondeando "hacia el medio" para que sumen n
    let n1 = Math.round((n * buckets[1].length) / total)
    let n3 = Math.round((n * buckets[3].length) / total)
    let n2 = n - n1 - n3
    // Saneo: si por redondeo se va negativo o supera disponibles, ajusto
    n1 = Math.min(Math.max(0, n1), buckets[1].length)
    n3 = Math.min(Math.max(0, n3), buckets[3].length)
    n2 = Math.min(Math.max(0, n - n1 - n3), buckets[2].length)
    // Si quedó hueco por capping, redistribuyo a niveles con disponibles
    const faltan = n - (n1 + n2 + n3)
    if (faltan > 0) {
      const extra2 = Math.min(faltan, buckets[2].length - n2)
      n2 += extra2
      const restoTras2 = faltan - extra2
      if (restoTras2 > 0) {
        const extra1 = Math.min(restoTras2, buckets[1].length - n1)
        n1 += extra1
        n3 += restoTras2 - extra1
      }
    }

    const seleccion: PreguntaSimulacro[] = [
      ...shuffle(buckets[1]).slice(0, n1),
      ...shuffle(buckets[2]).slice(0, n2),
      ...shuffle(buckets[3]).slice(0, n3),
    ]

    setPreguntasSim(seleccion)
    setRespuestasSim([])
    setPreguntaSimIdx(0)
    setEstiloSim(estilo)
    setPorTiempoSim(false)
    setFinEnSim(
      estilo === "examen"
        ? Date.now() + seleccion.length * SIMULACRO_SEGUNDOS_POR_PREGUNTA * 1000
        : null,
    )
    setFaseSimulacro("play")
    },
    [TEMAS, DIFICULTADES],
  )

  const responderSimulacro = useCallback(
    (idx: number, seguridad?: Seguridad) => {
      const actual = preguntasSim[preguntaSimIdx]
      if (!actual) return
      const yaRespondida = respuestasSim.find(
        (r) => r.temaId === actual.temaId && r.preguntaIdx === actual.preguntaIdx,
      )
      /* En práctica la respuesta queda firme: una vez que viste la corrección,
         cambiarla no significa nada. En examen todavía no viste nada, así que
         podés cambiar de opinión — como en un examen en papel. */
      if (yaRespondida && estiloSim === "practica") return
      const tema = TEMAS.find((t) => t.id === actual.temaId)
      if (!tema) return
      const correcta = idx === tema.preguntas[actual.preguntaIdx].correcta
      const nueva: RespuestaSimulacro = {
        temaId: actual.temaId,
        preguntaIdx: actual.preguntaIdx,
        elegida: idx,
        correcta,
        /* Al cambiar de opción en el examen se conserva la confianza que
           declaró la primera vez, salvo que venga una nueva. */
        seguridad: seguridad ?? yaRespondida?.seguridad,
      }
      setRespuestasSim((prev) =>
        yaRespondida
          ? prev.map((r) =>
              r.temaId === actual.temaId && r.preguntaIdx === actual.preguntaIdx
                ? nueva
                : r,
            )
          : [...prev, nueva],
      )
    },
    [preguntasSim, preguntaSimIdx, respuestasSim, TEMAS, estiloSim],
  )

  /** Cierra el examen a pedido, con lo que haya contestado hasta ahora. */
  const entregarSimulacro = useCallback(() => {
    setPorTiempoSim(false)
    setFinEnSim(null)
    setFaseSimulacro("resultados")
  }, [])

  const siguienteSimulacro = useCallback(() => {
    if (preguntaSimIdx < preguntasSim.length - 1) {
      setPreguntaSimIdx((i) => i + 1)
    } else if (estiloSim === "practica") {
      /* En práctica la última pregunta cierra sola: ya viste todas las
         correcciones, no hay nada que revisar. En examen no — ahí entregar es
         una decisión, y se toma con el botón de entregar. */
      setFaseSimulacro("resultados")
    }
  }, [preguntaSimIdx, preguntasSim.length, estiloSim])

  const anteriorSimulacro = useCallback(() => {
    if (preguntaSimIdx > 0) setPreguntaSimIdx((i) => i - 1)
  }, [preguntaSimIdx])

  const reiniciarSimulacro = useCallback(() => {
    setPreguntasSim([])
    setRespuestasSim([])
    setPreguntaSimIdx(0)
    setFinEnSim(null)
    setPorTiempoSim(false)
    setFaseSimulacro("setup")
  }, [])

  /** Ir directo a una pregunta del simulacro (los puntitos son clickeables). */
  const irAPreguntaSim = useCallback(
    (i: number) => {
      if (i >= 0 && i < preguntasSim.length) setPreguntaSimIdx(i)
    },
    [preguntasSim.length],
  )

  /** Anota un tema terminado. Si ya estaba anotado, no lo duplica. */
  const registrarTema = useCallback((hecho: TemaHecho) => {
    setSesion((prev) =>
      prev.some((t) => t.temaId === hecho.temaId)
        ? prev.map((t) => (t.temaId === hecho.temaId ? hecho : t))
        : [...prev, hecho],
    )
  }, [])

  const abrirResumen = useCallback(() => setVerResumen(true), [])

  /** Cerrar el resumen arranca una sesión nueva. */
  const cerrarResumen = useCallback(() => {
    setVerResumen(false)
    setSesion([])
  }, [])

  const cambiarModo = useCallback((nuevo: Modo) => {
    setModo(nuevo)
    // Antes acá reseteábamos el simulacro al entrar. Ahora lo dejamos vivo:
    // gracias a la persistencia, podés salir y volver sin perder el progreso.
    // Para resetear, usá "Salir" o "Otro simulacro" dentro de la UI del modo.
  }, [])

  return {
    hidratado,
    // materia activa
    materia,
    contenido,
    // acceso
    desbloqueado,
    desbloquear,
    // bienvenida
    verBienvenida,
    cerrarBienvenida,
    abrirBienvenida,
    // estudio
    modo,
    cambiarModo,
    temaActivo,
    temaActivoId,
    seleccionarTema,
    tab,
    cambiarTab,
    preguntaActualIdx,
    irAPregunta,
    progreso,
    progresoTema,
    responder,
    resetearProgreso,
    // orden de display por dificultad
    ordenTemaActivo,
    originalIdxDe,
    // sesión de estudio
    sesion,
    registrarTema,
    verResumen,
    abrirResumen,
    cerrarResumen,
    // simulacro
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    preguntaSimIdx,
    estiloSim,
    segundosRestantes,
    porTiempoSim,
    iniciarSimulacro,
    responderSimulacro,
    siguienteSimulacro,
    anteriorSimulacro,
    irAPreguntaSim,
    entregarSimulacro,
    reiniciarSimulacro,
  }
}

export type EstudioApi = ReturnType<typeof useEstudio>
