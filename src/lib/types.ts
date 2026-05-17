export type Vista = "repasar" | "reforzar" | "agregar" | "importar" | "todas"

export type Tema = "dark" | "light"

export type TipoCarta = "abierta" | "opciones"

export type FaseReforzar = "estudiar" | "probar"

export interface Opcion {
  texto: string
  correcta: boolean
}

export interface Carta {
  id: string
  front: string
  back: string
  tipo: TipoCarta
  opciones: Opcion[]
  caja: number
  proximaRevision: string
  creadaEn: string
  tag: string
  aciertos: number
  fallos: number
  aciertosSeguidos: number
}

export interface Stats {
  ultimaFecha: string | null
  racha: number
  repasoHoy: number
  aciertosHoy: number
  aciertosTotal: number
  fallosTotal: number
}

export interface HistorialItem {
  cartaId: string
  opciones: Opcion[]
  opcionElegida: number | null
  modoReforzar: boolean
}

export interface ToastMsg {
  id: string
  texto: string
  tipo: "success" | "error"
}

export type CartaInput = Partial<Carta> & { front: string }
