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
import { STORAGE_PROGRESO } from "@/lib/constants"
import { shuffle } from "@/lib/helpers"
import { TEMAS } from "@/lib/data/temas"

function cargarProgreso(): ProgresoQuiz {
  if (typeof localStorage === "undefined") return {}
  try {
    const d = localStorage.getItem(STORAGE_PROGRESO)
    return d ? (JSON.parse(d) as ProgresoQuiz) : {}
  } catch {
    return {}
  }
}

export function useEstudio() {
  const [hidratado, setHidratado] = useState(false)
  const [progreso, setProgreso] = useState<ProgresoQuiz>({})

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

  useEffect(() => {
    setProgreso(cargarProgreso())
    setHidratado(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(STORAGE_PROGRESO, JSON.stringify(progreso))
  }, [progreso, hidratado])

  // === Tema activo y progreso por tema ===
  const temaActivo = useMemo(
    () => TEMAS.find((t) => t.id === temaActivoId) ?? TEMAS[0],
    [temaActivoId],
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

  // === Responder pregunta (modo estudio) ===
  const responder = useCallback(
    (idx: number) => {
      const tema = TEMAS.find((t) => t.id === temaActivoId)
      if (!tema) return
      const yaExiste = progreso[tema.id]?.[preguntaActualIdx]
      if (yaExiste) return
      const correcta = idx === tema.preguntas[preguntaActualIdx].correcta
      setProgreso((prev) => ({
        ...prev,
        [tema.id]: {
          ...(prev[tema.id] ?? {}),
          [preguntaActualIdx]: { elegida: idx, correcta },
        },
      }))
    },
    [progreso, temaActivoId, preguntaActualIdx],
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
  }, [])

  // === Simulacro ===
  const iniciarSimulacro = useCallback((cantidad: number) => {
    const todas: PreguntaSimulacro[] = []
    TEMAS.forEach((t) => {
      t.preguntas.forEach((_, i) => {
        todas.push({ temaId: t.id, preguntaIdx: i })
      })
    })
    const seleccion = shuffle(todas).slice(0, Math.min(cantidad, todas.length))
    setPreguntasSim(seleccion)
    setRespuestasSim([])
    setPreguntaSimIdx(0)
    setFaseSimulacro("play")
  }, [])

  const responderSimulacro = useCallback(
    (idx: number) => {
      const actual = preguntasSim[preguntaSimIdx]
      if (!actual) return
      if (respuestasSim.find((r) => r.temaId === actual.temaId && r.preguntaIdx === actual.preguntaIdx)) {
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
    if (nuevo === "simulacro") {
      setFaseSimulacro("setup")
      setPreguntasSim([])
      setRespuestasSim([])
      setPreguntaSimIdx(0)
    }
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
