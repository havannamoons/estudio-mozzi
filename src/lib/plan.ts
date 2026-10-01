import type { Modo } from "@/lib/types"

/**
 * LOS TRES NIVELES DE ACCESO.
 *
 * La idea no es esconder el producto hasta que alguien pague. Es al revés:
 * que pueda usarlo de verdad, que le sirva, y que el límite aparezca recién
 * cuando ya sabe qué se está perdiendo. Nadie transfiere plata por algo que
 * no probó.
 *
 *   muestra  → entra sin cuenta. Un tema completo, con sus preguntas.
 *   cuenta   → se registró con Google. Más temas y dos actividades más,
 *              y el progreso queda atado a su cuenta.
 *   completo → pagó y está habilitada. Todo.
 *
 * Regla que no se rompe: en ningún nivel se miente sobre lo que hay. El
 * candado se ve desde el minuto uno y dice cuántos temas faltan. Un límite
 * que aparece de sorpresa después de dos horas de estudio no vende: enoja.
 */

export type Nivel = "muestra" | "cuenta" | "completo"

export interface Limites {
  /** Cuántos temas puede abrir, contando desde el principio del orden. */
  temas: number
  /** Qué actividades tiene desbloqueadas. */
  modos: Modo[]
  /** Tope de preguntas del oral por sesión. 0 = ninguna. */
  oral: number
  /** Tope de preguntas del quiz dentro de cada tema abierto. */
  preguntasPorTema: number
  /** De cuántos clozes puede salir cada partida. Infinity = todos. */
  clozes: number
  /** De cuántos pares puede salir cada partida de relacionar. */
  pares: number
  /** Etiqueta corta para mostrar en pantalla. */
  etiqueta: string
}

/**
 * Por qué también se topean los clozes y los pares: cada partida saca al azar
 * del total, así que sin tope alguien con cuenta gratis se lleva los 28 clozes
 * y los 20 pares jugando varias veces. Se recorta el CONJUNTO del que sale la
 * partida, no la partida en sí: así sigue habiendo variedad, pero acotada.
 */

/**
 * Los números.
 *
 * Un tema en la muestra no es tacañería: es suficiente para que entienda cómo
 * explica, cómo pregunta y cómo corrige, que es lo único que necesita saber
 * para decidir. Dos preguntas de oral van incluidas a propósito, porque el
 * oral es lo que no tiene ningún apunte y es la razón por la que alguien paga.
 */
export const LIMITES: Record<Nivel, Limites> = {
  muestra: {
    temas: 1,
    modos: ["estudio", "oral"],
    oral: 2,
    preguntasPorTema: 2,
    clozes: 0,
    pares: 0,
    etiqueta: "Estás viendo la muestra",
  },
  cuenta: {
    temas: 3,
    modos: ["estudio", "oral", "match", "cloze"],
    oral: 5,
    preguntasPorTema: 5,
    clozes: 10,
    pares: 8,
    etiqueta: "Tenés cuenta, falta desbloquear",
  },
  completo: {
    temas: Infinity,
    modos: ["estudio", "oral", "match", "cloze", "simulacro"],
    oral: Infinity,
    preguntasPorTema: Infinity,
    clozes: Infinity,
    pares: Infinity,
    etiqueta: "Acceso completo",
  },
}

/** En qué nivel está esta persona, según su sesión y su aprobación. */
export function nivelDe(
  haySesion: boolean,
  habilitada: boolean | null,
): Nivel {
  if (!haySesion) return "muestra"
  return habilitada === true ? "completo" : "cuenta"
}

/** Los ids de tema que puede abrir, en el orden en que se muestran. */
export function temasPermitidos(nivel: Nivel, orden: string[]): string[] {
  const n = LIMITES[nivel].temas
  return n === Infinity ? orden.slice() : orden.slice(0, n)
}

/** ¿Puede abrir este tema? */
export function temaAbierto(
  nivel: Nivel,
  temaId: string,
  orden: string[],
): boolean {
  const i = orden.indexOf(temaId)
  if (i < 0) return false
  return i < LIMITES[nivel].temas
}

/** ¿Tiene desbloqueada esta actividad? */
export function modoAbierto(nivel: Nivel, modo: Modo): boolean {
  return LIMITES[nivel].modos.includes(modo)
}

/** Cuántos temas le faltan para tener todos. */
export function temasFaltantes(nivel: Nivel, total: number): number {
  const n = LIMITES[nivel].temas
  return n === Infinity ? 0 : Math.max(0, total - n)
}

/**
 * Qué le ofrecemos cuando choca contra un límite.
 * En la muestra el paso siguiente es crear la cuenta, que es gratis y no
 * asusta. Recién con la cuenta hecha aparece el precio.
 */
export function siguientePaso(nivel: Nivel): "crear-cuenta" | "pagar" | null {
  if (nivel === "muestra") return "crear-cuenta"
  if (nivel === "cuenta") return "pagar"
  return null
}
