/**
 * LA RACHA — la mecánica de retención del producto.
 *
 * Decisiones que no se deducen del código:
 *
 * 1. La racha es GLOBAL, no por materia. Si un día estudiás Psicoanálisis y al
 *    otro Estadística, la racha sigue viva. Castigar el cambio de materia sería
 *    absurdo en una app que quiere cubrir una carrera entera.
 *
 * 2. El día cuenta al llegar a una META, no con un toque. Abrir la app, tocar
 *    una pregunta y cerrar no enseña nada, y una racha que se sostiene así deja
 *    de significar algo. La meta está calibrada para diez o quince minutos.
 *
 * 3. La racha de HOY todavía no perdida. Mientras el día no termine, una racha
 *    de ayer sigue contando: no se rompe a las 00:00, se rompe cuando pasó un
 *    día entero sin cumplir la meta. Romperla antes de tiempo es castigar a
 *    alguien que todavía puede sentarse a estudiar a la noche.
 *
 * 4. Hablar no es obligatorio para que el día cuente, pero queda marcado. Si
 *    fuera obligatorio, quien está en el colectivo no puede sostener la racha y
 *    la abandona. La marca dorada es el incentivo sin ser la barrera.
 */

/** Cuánto suma cada cosa. */
export const XP = {
  aciertoQuiz: 10,
  /** Errar también suma: practicaste igual, y castigar el error hace que la
      gente evite las preguntas difíciles, que son las que enseñan. */
  errorQuiz: 3,
  /** Declarar seguridad antes de ver la respuesta. Barato de dar y empuja a
      usar lo único que ninguna competencia mide. */
  calibrar: 2,
  aciertoCloze: 8,
  aciertoMatch: 5,
  simulacroTerminado: 20,
  oralTerminado: 25,
} as const

/** XP para que el día cuente. Diez a quince minutos de trabajo real. */
export const META_DIARIA = 40

export interface DiaActividad {
  xp: number
  /** Si ese día completó al menos un oral. */
  hablo: boolean
  /** Slugs de materias tocadas ese día. */
  materias: string[]
}

export type Actividad = Record<string, DiaActividad>

export interface EstadoRacha {
  /** Días consecutivos cumplidos, contando hoy si ya llegó a la meta. */
  actual: number
  /** El récord histórico. */
  mejor: number
  /** XP acumulado hoy. */
  xpHoy: number
  /** Ya llegó a la meta de hoy. */
  metaHecha: boolean
  /** Cumplió ayer pero todavía no hoy: la racha está viva pero en riesgo. */
  enRiesgo: boolean
  /** Días consecutivos hablando en voz alta. */
  rachaHablando: number
  xpTotal: number
  /** Cuántos días cumplió en total. */
  diasTotales: number
}

/** Fecha local en formato YYYY-MM-DD. Local y no UTC: la racha se vive en el
    huso de quien estudia, no en Greenwich. */
export function claveDia(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const dia = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${dia}`
}

/** Corre `n` días hacia atrás desde una fecha. */
export function diaAnterior(clave: string, n = 1): string {
  const [y, m, d] = clave.split("-").map(Number)
  const fecha = new Date(y, m - 1, d)
  fecha.setDate(fecha.getDate() - n)
  return claveDia(fecha)
}

function cumplido(act: Actividad, clave: string): boolean {
  return (act[clave]?.xp ?? 0) >= META_DIARIA
}

/**
 * Cuenta días consecutivos hacia atrás desde `desde`, incluyéndolo.
 * `predicado` decide qué cuenta como día válido.
 */
function contarHaciaAtras(
  act: Actividad,
  desde: string,
  predicado: (clave: string) => boolean,
): number {
  let n = 0
  let cursor = desde
  // Tope de seguridad: diez años de días. Sin esto, un dato corrupto
  // (un día en el año 9999) haría girar el bucle para siempre.
  for (let i = 0; i < 3700; i++) {
    if (!predicado(cursor)) break
    n++
    cursor = diaAnterior(cursor)
  }
  return n
}

/** Todo el estado derivado de la actividad guardada. */
export function calcularRacha(act: Actividad, hoy: string): EstadoRacha {
  const ayer = diaAnterior(hoy)
  const metaHecha = cumplido(act, hoy)

  /* Si hoy ya cumpliste, la racha se cuenta desde hoy. Si no, se cuenta desde
     ayer: el día sigue abierto y todavía podés sostenerla. */
  const actual = metaHecha
    ? contarHaciaAtras(act, hoy, (c) => cumplido(act, c))
    : contarHaciaAtras(act, ayer, (c) => cumplido(act, c))

  const hablo = (c: string) => cumplido(act, c) && (act[c]?.hablo ?? false)
  const rachaHablando = hablo(hoy)
    ? contarHaciaAtras(act, hoy, hablo)
    : contarHaciaAtras(act, ayer, hablo)

  // El récord: la corrida más larga en todo el historial.
  const cumplidos = Object.keys(act).filter((c) => cumplido(act, c)).sort()
  let mejor = 0
  let corrida = 0
  let previo: string | null = null
  for (const c of cumplidos) {
    corrida = previo !== null && diaAnterior(c) === previo ? corrida + 1 : 1
    if (corrida > mejor) mejor = corrida
    previo = c
  }

  return {
    actual,
    mejor: Math.max(mejor, actual),
    xpHoy: act[hoy]?.xp ?? 0,
    metaHecha,
    enRiesgo: !metaHecha && actual > 0,
    rachaHablando,
    xpTotal: Object.values(act).reduce((a, d) => a + d.xp, 0),
    diasTotales: cumplidos.length,
  }
}

/** Suma XP a un día, devolviendo la actividad nueva (no muta la anterior). */
export function sumarActividad(
  act: Actividad,
  clave: string,
  xp: number,
  opts: { hablo?: boolean; materia?: string } = {},
): Actividad {
  const previo = act[clave] ?? { xp: 0, hablo: false, materias: [] }
  const materias = opts.materia && !previo.materias.includes(opts.materia)
    ? [...previo.materias, opts.materia]
    : previo.materias
  return {
    ...act,
    [clave]: {
      xp: previo.xp + xp,
      hablo: previo.hablo || !!opts.hablo,
      materias,
    },
  }
}

/** Los últimos `n` días, del más viejo al más nuevo, para dibujar la semana. */
export function ultimosDias(
  act: Actividad,
  hoy: string,
  n = 7,
): { clave: string; cumplido: boolean; hablo: boolean; xp: number }[] {
  const dias = []
  for (let i = n - 1; i >= 0; i--) {
    const clave = diaAnterior(hoy, i)
    const d = act[clave]
    dias.push({
      clave,
      cumplido: (d?.xp ?? 0) >= META_DIARIA,
      hablo: d?.hablo ?? false,
      xp: d?.xp ?? 0,
    })
  }
  return dias
}

/** Inicial del día de la semana, para las etiquetas. */
export function letraDia(clave: string): string {
  const [y, m, d] = clave.split("-").map(Number)
  return ["D", "L", "M", "M", "J", "V", "S"][new Date(y, m - 1, d).getDay()]
}
