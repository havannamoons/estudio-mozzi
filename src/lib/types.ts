export type Tema = "dark" | "light"

export type Tab = "teoria" | "quiz"

export type Modo = "estudio" | "simulacro"

export type FaseSimulacro = "setup" | "play" | "resultados"

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

export interface RespuestaQuiz {
  elegida: number
  correcta: boolean
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
}

export interface ToastMsg {
  id: string
  texto: string
  tipo: "success" | "error"
}
