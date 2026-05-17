import type { Carta, Opcion, CartaInput } from "./types"
import { CAJA_DOMINADA } from "./constants"
import { hoy, uid, shuffle, truncar } from "./helpers"

export function migrarCarta(c: CartaInput): Carta {
  const tipoIn = c.tipo === "opciones" ? "opciones" : "abierta"
  const opcionesIn = Array.isArray(c.opciones)
    ? c.opciones.filter((o): o is Opcion => !!o && typeof o.texto === "string")
    : []
  const tipoFinal: Carta["tipo"] =
    tipoIn === "opciones" && opcionesIn.length >= 2 ? "opciones" : "abierta"

  return {
    id: c.id ?? uid(),
    front: c.front,
    back: c.back ?? "",
    tipo: tipoFinal,
    opciones:
      tipoFinal === "opciones"
        ? opcionesIn.map((o) => ({ texto: o.texto, correcta: !!o.correcta }))
        : [],
    caja: Math.max(0, Math.min(typeof c.caja === "number" ? c.caja : 0, CAJA_DOMINADA)),
    proximaRevision: c.proximaRevision ?? hoy(),
    creadaEn: c.creadaEn ?? hoy(),
    tag: c.tag ?? "",
    aciertos: c.aciertos ?? 0,
    fallos: c.fallos ?? 0,
    aciertosSeguidos: c.aciertosSeguidos ?? 0,
  }
}

export function generarOpcionesParaCarta(carta: Carta, todas: Carta[]): Opcion[] {
  if (carta.tipo === "opciones" && carta.opciones.length >= 2) {
    return shuffle(carta.opciones).map((o) => ({ texto: o.texto, correcta: !!o.correcta }))
  }

  const correctaTxt = truncar(carta.back, 160)
  const otras = todas.filter(
    (x) =>
      x.id !== carta.id && x.back && x.back.trim() && x.back.trim() !== carta.back.trim(),
  )
  const mismoTag = carta.tag ? otras.filter((x) => x.tag === carta.tag) : []
  const otrosTag = carta.tag ? otras.filter((x) => x.tag !== carta.tag) : otras

  let pool: Carta[]
  if (mismoTag.length >= 3) pool = shuffle(mismoTag).slice(0, 3)
  else pool = [...shuffle(mismoTag), ...shuffle(otrosTag)].slice(0, 3)

  const fallbacks = [
    "Ninguna de las anteriores",
    "Concepto no relacionado",
    "No corresponde al período estudiado",
  ]

  const usadas = new Set([correctaTxt])
  const distractores: Opcion[] = []
  for (const x of pool) {
    const t = truncar(x.back, 160)
    if (usadas.has(t)) continue
    usadas.add(t)
    distractores.push({ texto: t, correcta: false })
    if (distractores.length === 3) break
  }
  while (distractores.length < 3) {
    const f = fallbacks[distractores.length] + " (" + (distractores.length + 1) + ")"
    distractores.push({ texto: f, correcta: false })
  }

  return shuffle<Opcion>([{ texto: correctaTxt, correcta: true }, ...distractores])
}

export function cartasParaReforzar(cartas: Carta[]): Carta[] {
  return cartas.filter((c) => {
    if (c.caja === 0 && c.fallos > 0) return true
    const total = c.aciertos + c.fallos
    if (total >= 2 && c.fallos / total > 0.4) return true
    return false
  })
}

export function precisionGlobal(aciertosTotal: number, fallosTotal: number): number | null {
  const total = aciertosTotal + fallosTotal
  if (total === 0) return null
  return Math.round((aciertosTotal / total) * 100)
}

export function rellenarColaEstudio(colaActual: string[], cartas: Carta[]): string[] {
  const ids = new Set(cartas.map((c) => c.id))
  const filtrada = colaActual.filter((id) => ids.has(id))
  if (filtrada.length === 0 && cartas.length > 0) {
    return shuffle(cartas).map((c) => c.id)
  }
  return filtrada
}
