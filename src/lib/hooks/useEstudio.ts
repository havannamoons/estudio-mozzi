"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import type {
  FaseSimulacro,
  Modo,
  PreguntaSimulacro,
  ProgresoQuiz,
  RespuestaSimulacro,
  Tab,
} from "@/lib/types"
import { STORAGE_PROGRESO, STORAGE_SIMULACRO } from "@/lib/constants"
import { ordenarPorDificultadIdx, shuffle } from "@/lib/helpers"
import { DIFICULTADES, TEMAS } from "@/lib/data/temas"

const ORDEN_STORAGE = "estudio_orden_v1"

type OrdenPorTema = Record<string, number[]>

function cargarProgreso(): ProgresoQuiz {
  if (typeof localStorage === "undefined") return {}
  try {
    const d = localStorage.getItem(STORAGE_PROGRESO)
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
}

function cargarSimulacro(): SimulacroSnapshot | null {
  if (typeof localStorage === "undefined") return null
  try {
    const d = localStorage.getItem(STORAGE_SIMULACRO)
    if (!d) return null
    const parsed = JSON.parse(d) as SimulacroSnapshot
    // Solo restauramos sesiones activas; las que ya están en "setup" no aportan.
    if (parsed.fase === "setup") return null
    return parsed
  } catch {
    return null
  }
}

function cargarOrden(): OrdenPorTema {
  if (typeof localStorage === "undefined") return {}
  try {
    const d = localStorage.getItem(ORDEN_STORAGE)
    return d ? (JSON.parse(d) as OrdenPorTema) : {}
  } catch {
    return {}
  }
}

function calcularOrdenTema(temaId: string): number[] {
  const tema = TEMAS.find((t) => t.id === temaId)
  if (!tema) return []
  const difs = DIFICULTADES[temaId] ?? tema.preguntas.map(() => 2)
  // Asegurar largo correcto: si DIFICULTADES no cubre todas, pad con nivel 2
  const ajustadas = tema.preguntas.map((_, i) => difs[i] ?? 2)
  return ordenarPorDificultadIdx(ajustadas)
}

export function useEstudio() {
  const [hidratado, setHidratado] = useState(false)
  const [progreso, setProgreso] = useState<ProgresoQuiz>({})
  const [ordenPorTema, setOrdenPorTema] = useState<OrdenPorTema>({})

  // === Modo estudio ===
  const [modo, setModo] = useState<Modo>("estudio")
  const [temaActivoId, setTemaActivoId] = useState<string>(TEMAS[0].id)
  const [tab, setTab] = useState<Tab>("teoria")
  const [preguntaActualIdx, setPreguntaActualIdx] = useState(0)

  // === Modo simulacro ===
  const [faseSimulacro, setFaseSimulacro] = useState<FaseSimulacro>("setup")
  const [preguntasSim, setPreguntasSim] = useState<PreguntaSimulacro[]>([])
  const [respuestasSim, setRespuestasSim] = useState<RespuestaSimulacro[]>([])
  const [preguntaSimIdx, setPreguntaSimIdx] = useState(0)

  // === Hidratación inicial ===
  useEffect(() => {
    setProgreso(cargarProgreso())
    setOrdenPorTema(cargarOrden())
    // Restaurar simulacro en curso si lo hay (Nielsen #5 — prevención de errores)
    const sim = cargarSimulacro()
    if (sim) {
      setFaseSimulacro(sim.fase)
      setPreguntasSim(sim.preguntas)
      setRespuestasSim(sim.respuestas)
      setPreguntaSimIdx(sim.idx)
    }
    setHidratado(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(STORAGE_PROGRESO, JSON.stringify(progreso))
  }, [progreso, hidratado])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(ORDEN_STORAGE, JSON.stringify(ordenPorTema))
  }, [ordenPorTema, hidratado])

  // === Persistir simulacro en curso ===
  // Guardamos solo cuando hay algo significativo (play o resultados).
  // En setup sin preguntas no tiene sentido (es estado vacío).
  useEffect(() => {
    if (!hidratado) return
    if (faseSimulacro === "setup" && preguntasSim.length === 0) {
      localStorage.removeItem(STORAGE_SIMULACRO)
      return
    }
    const snapshot: SimulacroSnapshot = {
      fase: faseSimulacro,
      preguntas: preguntasSim,
      respuestas: respuestasSim,
      idx: preguntaSimIdx,
    }
    localStorage.setItem(STORAGE_SIMULACRO, JSON.stringify(snapshot))
  }, [
    hidratado,
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    preguntaSimIdx,
  ])

  // === Asegurar orden del tema activo (lazy init por tema) ===
  useEffect(() => {
    if (!hidratado) return
    if (!ordenPorTema[temaActivoId]) {
      setOrdenPorTema((prev) => ({
        ...prev,
        [temaActivoId]: calcularOrdenTema(temaActivoId),
      }))
    }
  }, [hidratado, temaActivoId, ordenPorTema])

  // === Tema activo ===
  const temaActivo = useMemo(
    () => TEMAS.find((t) => t.id === temaActivoId) ?? TEMAS[0],
    [temaActivoId],
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
    [progreso],
  )

  // === Responder (Quiz) ===
  // idx = índice de la opción elegida (0..3). preguntaActualIdx = display position.
  const responder = useCallback(
    (idx: number) => {
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
          [origIdx]: { elegida: idx, correcta },
        },
      }))
    },
    [progreso, temaActivoId, preguntaActualIdx, originalIdxDe],
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
      nuevo[t.id] = calcularOrdenTema(t.id)
    })
    setOrdenPorTema(nuevo)
  }, [])

  // === Simulacro ===
  // Sampling proporcional por dificultad + orden creciente.
  const iniciarSimulacro = useCallback((cantidad: number) => {
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
    setFaseSimulacro("play")
  }, [])

  const responderSimulacro = useCallback(
    (idx: number) => {
      const actual = preguntasSim[preguntaSimIdx]
      if (!actual) return
      if (
        respuestasSim.find(
          (r) => r.temaId === actual.temaId && r.preguntaIdx === actual.preguntaIdx,
        )
      ) {
        return
      }
      const tema = TEMAS.find((t) => t.id === actual.temaId)
      if (!tema) return
      const correcta = idx === tema.preguntas[actual.preguntaIdx].correcta
      setRespuestasSim((prev) => [
        ...prev,
        {
          temaId: actual.temaId,
          preguntaIdx: actual.preguntaIdx,
          elegida: idx,
          correcta,
        },
      ])
    },
    [preguntasSim, preguntaSimIdx, respuestasSim],
  )

  const siguienteSimulacro = useCallback(() => {
    if (preguntaSimIdx < preguntasSim.length - 1) {
      setPreguntaSimIdx((i) => i + 1)
    } else {
      setFaseSimulacro("resultados")
    }
  }, [preguntaSimIdx, preguntasSim.length])

  const anteriorSimulacro = useCallback(() => {
    if (preguntaSimIdx > 0) setPreguntaSimIdx((i) => i - 1)
  }, [preguntaSimIdx])

  const reiniciarSimulacro = useCallback(() => {
    setPreguntasSim([])
    setRespuestasSim([])
    setPreguntaSimIdx(0)
    setFaseSimulacro("setup")
  }, [])

  const cambiarModo = useCallback((nuevo: Modo) => {
    setModo(nuevo)
    // Antes acá reseteábamos el simulacro al entrar. Ahora lo dejamos vivo:
    // gracias a la persistencia, podés salir y volver sin perder el progreso.
    // Para resetear, usá "Salir" o "Otro simulacro" dentro de la UI del modo.
  }, [])

  return {
    hidratado,
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
    // simulacro
    faseSimulacro,
    preguntasSim,
    respuestasSim,
    preguntaSimIdx,
    iniciarSimulacro,
    responderSimulacro,
    siguienteSimulacro,
    anteriorSimulacro,
    reiniciarSimulacro,
  }
}

export type EstudioApi = ReturnType<typeof useEstudio>
