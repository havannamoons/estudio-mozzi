"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import {
  calcularRacha,
  claveDia,
  sumarActividad,
  ultimosDias,
  type Actividad,
  type EstadoRacha,
} from "@/lib/racha"

/**
 * La racha vive por encima de la materia.
 *
 * Todo el resto del estado de la app se guarda por materia (el progreso de
 * Psicoanálisis no es el de Estadística). La racha no: es de la persona. Por
 * eso tiene su propia clave, sin sufijo de materia, y su propio proveedor por
 * encima del de materia.
 */

const CLAVE = "estudio_racha_v1"

interface RachaApi {
  hidratado: boolean
  estado: EstadoRacha
  semana: ReturnType<typeof ultimosDias>
  /** Suma XP al día de hoy. `hablo` marca el día como día de oral. */
  sumar: (xp: number, opts?: { hablo?: boolean; materia?: string }) => void
  /** Cuánto subió la racha con la última suma, para poder festejarlo. */
  festejo: "meta" | "primerDia" | null
  limpiarFestejo: () => void
}

const VACIO: EstadoRacha = {
  actual: 0,
  mejor: 0,
  xpHoy: 0,
  metaHecha: false,
  enRiesgo: false,
  rachaHablando: 0,
  xpTotal: 0,
  diasTotales: 0,
}

const Ctx = createContext<RachaApi | null>(null)

export function RachaProvider({ children }: { children: React.ReactNode }) {
  const [actividad, setActividad] = useState<Actividad>({})
  const [hidratado, setHidratado] = useState(false)
  const [hoy, setHoy] = useState<string>("")
  const [festejo, setFestejo] = useState<"meta" | "primerDia" | null>(null)

  useEffect(() => {
    setHoy(claveDia(new Date()))
    try {
      const crudo = localStorage.getItem(CLAVE)
      if (crudo) setActividad(JSON.parse(crudo) as Actividad)
    } catch {
      /* Dato corrupto: se arranca de cero antes que romper la app. */
    }
    setHidratado(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    try {
      localStorage.setItem(CLAVE, JSON.stringify(actividad))
    } catch {}
  }, [actividad, hidratado])

  /* Si la app queda abierta y cruza la medianoche, el día tiene que cambiar
     solo. Sin esto, quien estudia de madrugada suma al día anterior. */
  useEffect(() => {
    const id = setInterval(() => {
      const ahora = claveDia(new Date())
      setHoy((prev) => (prev === ahora ? prev : ahora))
    }, 60_000)
    return () => clearInterval(id)
  }, [])

  const estado = useMemo(
    () => (hoy ? calcularRacha(actividad, hoy) : VACIO),
    [actividad, hoy],
  )

  const semana = useMemo(
    () => (hoy ? ultimosDias(actividad, hoy) : []),
    [actividad, hoy],
  )

  const sumar = useCallback(
    (xp: number, opts: { hablo?: boolean; materia?: string } = {}) => {
      if (!hoy) return
      setActividad((prev) => {
        const antes = calcularRacha(prev, hoy)
        const nueva = sumarActividad(prev, hoy, xp, opts)
        const despues = calcularRacha(nueva, hoy)
        /* El festejo se dispara UNA vez, en el momento exacto en que se cruza
           la meta. Es el instante que hace volver al día siguiente. */
        if (!antes.metaHecha && despues.metaHecha) {
          setFestejo(despues.actual === 1 ? "primerDia" : "meta")
        }
        return nueva
      })
    },
    [hoy],
  )

  const valor = useMemo(
    () => ({
      hidratado,
      estado,
      semana,
      sumar,
      festejo,
      limpiarFestejo: () => setFestejo(null),
    }),
    [hidratado, estado, semana, sumar, festejo],
  )

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>
}

/**
 * La racha desde cualquier pantalla.
 *
 * Devuelve un objeto inerte si no hay proveedor, en vez de tirar un error: así
 * un modo puede llamar a `sumar()` sin que importe si está montado dentro del
 * árbol de la app o suelto en una prueba.
 */
export function useRacha(): RachaApi {
  const ctx = useContext(Ctx)
  return (
    ctx ?? {
      hidratado: false,
      estado: VACIO,
      semana: [],
      sumar: () => {},
      festejo: null,
      limpiarFestejo: () => {},
    }
  )
}
