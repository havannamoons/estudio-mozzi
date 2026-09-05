export type Tema = "dark" | "light"

export type Tab = "teoria" | "quiz"

export type Modo = "estudio" | "match" | "cloze" | "simulacro" | "oral"

/**
 * Una consigna para explicar en voz alta.
 *
 * Es el único modo de la app donde no se elige entre opciones: hay que producir
 * el desarrollo. Los finales de la facultad son orales, y entre reconocer la
 * respuesta correcta y poder decirla hay un salto que ningún múltiple opción
 * entrena.
 *
 * La app no puede escuchar (todavía), así que la devolución funciona al revés:
 * primero hablás sin ninguna ayuda a la vista, y recién después se revela el
 * punteo de lo que un buen desarrollo tiene que tocar. Tildar honestamente lo
 * que dijiste es la parte que aprende.
 */
export interface PuntoOral {
  /** El titular: lo que tenía que aparecer. */
  punto: string
  /** Por qué importa y cómo se dice. Se lee al final, no antes. */
  desarrollo: string
}

export interface ConsignaOral {
  id: string
  /** Temas que toca. El primero es el que abre "ver la teoría". */
  temas: string[]
  consigna: string
  /** Minutos sugeridos para este desarrollo. */
  minutos: number
  puntos: PuntoOral[]
  /** La repregunta del tribunal, si la consigna la tiene. */
  repregunta?: string
  /**
   * `desarrollo` = un tema, en profundidad.
   * `articulacion` = dos o más textos puestos a conversar, que es lo que más
   *  se toma en un final y lo que menos se practica.
   */
  tipo: "desarrollo" | "articulacion"
}

export type FaseSimulacro = "setup" | "play" | "resultados"

/**
 * Los dos modos de correr un simulacro. No es un detalle cosmético: cambian
 * qué se está entrenando.
 *
 * - `practica`: corrige apenas contestás. Sirve para aprender — el error se
 *   explica cuando todavía tenés la pregunta en la cabeza (efecto de testeo).
 * - `examen`: cronómetro, nada se revela hasta entregar, y podés cambiar de
 *   respuesta como en un examen de verdad. Entrena otra cosa: administrar el
 *   tiempo y tolerar la incertidumbre de no saber si vas bien.
 */
export type EstiloSimulacro = "practica" | "examen"

export interface BloqueTeoria {
  titulo: string
  contenido: string
  clinico?: string
}

export interface Pregunta {
  q: string
  opciones: string[]
  correcta: number
  exp: string
}

export interface TemaContenido {
  id: string
  practico: string
  titulo: string
  subtitulo: string
  teoria: BloqueTeoria[]
  biblio?: string
  tipParcial?: string
  preguntas: Pregunta[]
}

/**
 * Cloze (completar el espacio). Una frase con `___` donde falta un término
 * clave. El matcheo acepta variantes (insensible a mayúsculas y acentos),
 * por eso `respuestas` puede listar sinónimos.
 */
export interface Cloze {
  id: string
  frase: string
  /** Variantes válidas. La primera es la que se muestra como "correcta". */
  respuestas: string[]
  /** 3 distractores plausibles para el modo múltiple opción. */
  distractores: string[]
  pista?: string
  tema?: string
}

/** Par concepto ↔ referente, usado en el modo Match. */
export interface Par {
  id: string
  concepto: string
  referente: string
  pista?: string
}

/**
 * Cuánta confianza tenías ANTES de saber si estaba bien.
 *
 * Se pregunta siempre antes de corregir, nunca después: preguntado después, lo
 * que contás no es tu confianza sino el resultado que ya viste.
 *
 * El dato importante no es este solo, es cruzarlo con el acierto. Contestar
 * seguro y errar no es lo mismo que errar sabiendo que no sabías: lo primero
 * es un concepto mal aprendido (y es lo que te voltea en el final), lo segundo
 * es simplemente un tema pendiente.
 */
export type Seguridad = "seguro" | "masomenos" | "adivino"

export interface RespuestaQuiz {
  elegida: number
  correcta: boolean
  seguridad?: Seguridad
}

export type ProgresoQuiz = Record<string, Record<number, RespuestaQuiz>>

export interface PreguntaSimulacro {
  temaId: string
  preguntaIdx: number
}

export interface RespuestaSimulacro {
  temaId: string
  preguntaIdx: number
  elegida: number
  correcta: boolean
  seguridad?: Seguridad
}

export interface ToastMsg {
  id: string
  texto: string
  tipo: "success" | "error"
}
