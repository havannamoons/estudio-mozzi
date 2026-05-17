"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type {
  Carta,
  CartaInput,
  FaseReforzar,
  HistorialItem,
  Opcion,
  Stats,
  Vista,
} from "@/lib/types"
import {
  CAJA_DOMINADA,
  MIGRACION_KEY,
  PACK_FREUD,
  SEED_KEY,
  STATS_KEY,
  STORAGE_KEY,
} from "@/lib/constants"
import { diferenciaDias, hoy, shuffle } from "@/lib/helpers"
import {
  generarOpcionesParaCarta,
  migrarCarta,
  rellenarColaEstudio,
} from "@/lib/carta-helpers"

const STATS_BASE: Stats = {
  ultimaFecha: null,
  racha: 0,
  repasoHoy: 0,
  aciertosHoy: 0,
  aciertosTotal: 0,
  fallosTotal: 0,
}

function cargarCartasDesdeStorage(): Carta[] {
  if (typeof localStorage === "undefined") return []
  const datos = localStorage.getItem(STORAGE_KEY)
  if (!datos) return []
  try {
    const arr = JSON.parse(datos) as CartaInput[]
    return arr.map(migrarCarta)
  } catch {
    return []
  }
}

function cargarStatsDesdeStorage(): Stats {
  if (typeof localStorage === "undefined") return STATS_BASE
  const datos = localStorage.getItem(STATS_KEY)
  if (!datos) return STATS_BASE
  try {
    const s = { ...STATS_BASE, ...(JSON.parse(datos) as Partial<Stats>) }
    if (s.ultimaFecha !== hoy()) {
      if (s.ultimaFecha && diferenciaDias(hoy(), s.ultimaFecha) > 1) s.racha = 0
      s.repasoHoy = 0
      s.aciertosHoy = 0
    }
    return s
  } catch {
    return STATS_BASE
  }
}

export function useRepaso() {
  // === Hidratación desde localStorage ===
  const [hidratado, setHidratado] = useState(false)
  const [cartas, setCartas] = useState<Carta[]>([])
  const [stats, setStats] = useState<Stats>(STATS_BASE)

  // === Navegación / sesión ===
  const [vista, setVistaRaw] = useState<Vista>("repasar")
  const [opcionElegida, setOpcionElegida] = useState<number | null>(null)
  const [opcionesActuales, setOpcionesActuales] = useState<Opcion[] | null>(null)
  const [opcionesCartaId, setOpcionesCartaId] = useState<string | null>(null)

  const [colaEstudio, setColaEstudio] = useState<string[]>([])
  const [historialSesion, setHistorialSesion] = useState<HistorialItem[]>([])
  const [viendoHistorialIdx, setViendoHistorialIdx] = useState<number | null>(null)

  const [modoReforzar, setModoReforzar] = useState(false)
  const [colaReforzar, setColaReforzar] = useState<string[]>([])
  const [faseReforzar, setFaseReforzar] = useState<FaseReforzar>("estudiar")

  const [filtroBusqueda, setFiltroBusqueda] = useState("")
  const [filtroTag, setFiltroTag] = useState("")

  // === Timer auto-advance ===
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const limpiarTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  // === Hidratación inicial ===
  useEffect(() => {
    let cartasIniciales = cargarCartasDesdeStorage()

    // Auto-seed: si no hay cartas y nunca se sembró, cargar pack Freud
    if (cartasIniciales.length === 0 && !localStorage.getItem(SEED_KEY)) {
      cartasIniciales = PACK_FREUD.map((c) => migrarCarta(c))
      localStorage.setItem(SEED_KEY, "done")
    }

    setCartas(cartasIniciales)
    setStats(cargarStatsDesdeStorage())
    setHidratado(true)

    // Migración única (etiquetar PACK_FREUD existente, clampear caja)
    if (!localStorage.getItem(MIGRACION_KEY) && cartasIniciales.length > 0) {
      const fronts = new Set(PACK_FREUD.map((c) => c.front))
      let cambios = false
      const ajustadas = cartasIniciales.map((c) => {
        let modif = c
        if (fronts.has(c.front) && !c.tag) {
          modif = { ...modif, tag: "Freud" }
          cambios = true
        }
        if (c.caja > CAJA_DOMINADA) {
          modif = { ...modif, caja: CAJA_DOMINADA }
          cambios = true
        }
        return modif
      })
      if (cambios) setCartas(ajustadas)
      localStorage.setItem(MIGRACION_KEY, "done")
    }
  }, [])

  // === Persistencia ===
  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartas))
  }, [cartas, hidratado])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem(STATS_KEY, JSON.stringify(stats))
  }, [stats, hidratado])

  // === Cola de estudio: rellenar cuando hace falta ===
  useEffect(() => {
    if (!hidratado) return
    setColaEstudio((cola) => rellenarColaEstudio(cola, cartas))
  }, [cartas, hidratado])

  // === Carta actual ===
  const cartaActual: Carta | null = useMemo(() => {
    if (modoReforzar) {
      const id = colaReforzar[0]
      return cartas.find((c) => c.id === id) ?? null
    }
    const id = colaEstudio[0]
    return cartas.find((c) => c.id === id) ?? null
  }, [cartas, colaReforzar, colaEstudio, modoReforzar])

  const totalSesion = modoReforzar ? colaReforzar.length : cartas.length

  // === Generar opciones para la carta actual ===
  useEffect(() => {
    if (!cartaActual) {
      setOpcionesActuales(null)
      setOpcionesCartaId(null)
      return
    }
    if (opcionesCartaId === cartaActual.id) return
    const ops = generarOpcionesParaCarta(cartaActual, cartas)
    setOpcionesActuales(ops)
    setOpcionesCartaId(cartaActual.id)
  }, [cartaActual, cartas, opcionesCartaId])

  // === Cambio de vista (resetea sesión actual) ===
  const setVista = useCallback(
    (v: Vista) => {
      limpiarTimer()
      setOpcionElegida(null)
      setOpcionesActuales(null)
      setOpcionesCartaId(null)
      setFaseReforzar("estudiar")
      setViendoHistorialIdx(null)
      if (v !== "repasar") {
        setModoReforzar(false)
        setHistorialSesion([])
      }
      setVistaRaw(v)
    },
    [limpiarTimer],
  )

  // === Registrar repaso (actualiza stats con racha) ===
  const registrarRepaso = useCallback((acerto: boolean) => {
    setStats((prev) => {
      const next: Stats = { ...prev }
      if (next.ultimaFecha !== hoy()) {
        if (next.ultimaFecha) {
          const diff = diferenciaDias(hoy(), next.ultimaFecha)
          next.racha = diff === 1 ? next.racha + 1 : 1
        } else {
          next.racha = 1
        }
        next.ultimaFecha = hoy()
        next.repasoHoy = 0
        next.aciertosHoy = 0
      }
      next.repasoHoy += 1
      if (acerto) {
        next.aciertosHoy += 1
        next.aciertosTotal += 1
      } else {
        next.fallosTotal += 1
      }
      return next
    })
  }, [])

  // === Aplicar resultado a la carta (caja + contadores) ===
  const aplicarResultado = useCallback(
    (cartaId: string, acerto: boolean) => {
      setCartas((prev) =>
        prev.map((c) => {
          if (c.id !== cartaId) return c
          const next = { ...c }
          if (acerto) {
            next.aciertos += 1
            next.aciertosSeguidos += 1
          } else {
            next.fallos += 1
            next.aciertosSeguidos = 0
          }
          if (!modoReforzar) {
            next.caja = acerto ? Math.min((c.caja || 0) + 1, CAJA_DOMINADA) : 0
            next.proximaRevision = hoy()
          }
          return next
        }),
      )
      registrarRepaso(acerto)
    },
    [modoReforzar, registrarRepaso],
  )

  // === Avanzar a la siguiente carta ===
  const avanzarCarta = useCallback(() => {
    limpiarTimer()
    // Guardar snapshot en historial si hubo respuesta
    if (cartaActual && opcionElegida !== null && opcionesActuales) {
      setHistorialSesion((h) => [
        ...h,
        {
          cartaId: cartaActual.id,
          opciones: opcionesActuales.map((o) => ({ texto: o.texto, correcta: o.correcta })),
          opcionElegida,
          modoReforzar,
        },
      ])
    }
    if (modoReforzar) {
      setColaReforzar((q) => q.slice(1))
      setFaseReforzar("estudiar")
    } else {
      setColaEstudio((q) => q.slice(1))
    }
    setOpcionElegida(null)
    setOpcionesActuales(null)
    setOpcionesCartaId(null)
  }, [cartaActual, opcionElegida, opcionesActuales, modoReforzar, limpiarTimer])

  // === Responder a una opción ===
  const responder = useCallback(
    (idx: number) => {
      if (viendoHistorialIdx !== null || opcionElegida !== null) return
      if (!cartaActual || !opcionesActuales) return
      setOpcionElegida(idx)
      const acerto = !!opcionesActuales[idx]?.correcta
      aplicarResultado(cartaActual.id, acerto)
    },
    [aplicarResultado, cartaActual, opcionElegida, opcionesActuales, viendoHistorialIdx],
  )

  // Programar auto-advance / vuelta-a-estudiar
  useEffect(() => {
    if (opcionElegida === null || !opcionesActuales) return
    const acerto = !!opcionesActuales[opcionElegida]?.correcta
    limpiarTimer()
    if (modoReforzar) {
      if (acerto) {
        timerRef.current = setTimeout(() => avanzarCarta(), 15000)
      } else {
        timerRef.current = setTimeout(() => {
          setFaseReforzar("estudiar")
          setOpcionElegida(null)
          setOpcionesActuales(null)
          setOpcionesCartaId(null)
        }, 15000)
      }
    } else {
      timerRef.current = setTimeout(() => avanzarCarta(), 15000)
    }
    return () => limpiarTimer()
  }, [opcionElegida, opcionesActuales, modoReforzar, avanzarCarta, limpiarTimer])

  // === Pasar de fase estudiar a fase probar (modo refuerzo) ===
  const pasarAProbar = useCallback(() => {
    limpiarTimer()
    setFaseReforzar("probar")
    setOpcionElegida(null)
    setOpcionesActuales(null)
    setOpcionesCartaId(null)
  }, [limpiarTimer])

  // === Iniciar/salir refuerzo ===
  const iniciarReforzar = useCallback((ids: string[]) => {
    setColaReforzar(shuffle(ids))
    setModoReforzar(true)
    setFaseReforzar("estudiar")
    setOpcionElegida(null)
    setOpcionesActuales(null)
    setOpcionesCartaId(null)
    setVistaRaw("repasar")
  }, [])

  const salirReforzar = useCallback(() => {
    limpiarTimer()
    setModoReforzar(false)
    setColaReforzar([])
    setFaseReforzar("estudiar")
    setVistaRaw("reforzar")
  }, [limpiarTimer])

  // === Historial ===
  const verHistorial = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= historialSesion.length) return
      limpiarTimer()
      setViendoHistorialIdx(idx)
    },
    [historialSesion.length, limpiarTimer],
  )
  const salirHistorial = useCallback(() => setViendoHistorialIdx(null), [])

  // === CRUD de cartas ===
  const agregarCarta = useCallback((data: CartaInput) => {
    setCartas((prev) => [...prev, migrarCarta(data)])
  }, [])

  const importarCartas = useCallback((nuevas: CartaInput[]) => {
    setCartas((prev) => {
      const existentes = new Set(prev.map((c) => c.front))
      let agregadas = 0
      const nuevasMigradas: Carta[] = []
      for (const c of nuevas) {
        if (typeof c.front !== "string" || !c.front.trim()) continue
        const front = c.front.trim()
        if (existentes.has(front)) continue
        existentes.add(front)
        nuevasMigradas.push(
          migrarCarta({
            ...c,
            front,
            back: (c.back ?? "").trim(),
            tag: (c.tag ?? "").trim(),
          }),
        )
        agregadas++
      }
      void agregadas
      return [...prev, ...nuevasMigradas]
    })
  }, [])

  const borrarCarta = useCallback((id: string) => {
    setCartas((prev) => prev.filter((c) => c.id !== id))
  }, [])

  return {
    // estado base
    hidratado,
    cartas,
    stats,

    // navegación
    vista,
    setVista,

    // sesión
    cartaActual,
    opcionesActuales,
    opcionElegida,
    totalSesion,
    responder,
    avanzarCarta,
    pasarAProbar,

    // historial
    historialSesion,
    viendoHistorialIdx,
    verHistorial,
    salirHistorial,

    // refuerzo
    modoReforzar,
    colaReforzar,
    faseReforzar,
    iniciarReforzar,
    salirReforzar,

    // filtros
    filtroBusqueda,
    setFiltroBusqueda,
    filtroTag,
    setFiltroTag,

    // CRUD
    agregarCarta,
    importarCartas,
    borrarCarta,
  }
}

export type RepasoApi = ReturnType<typeof useRepaso>
