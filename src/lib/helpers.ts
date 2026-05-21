export function hoy(): string {
  return new Date().toISOString().slice(0, 10)
}

export function diferenciaDias(a: string, b: string): number {
  return Math.round((new Date(a).getTime() - new Date(b).getTime()) / 86400000)
}

export function uid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID()
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function truncar(s: string, n: number): string {
  const t = String(s || "").trim()
  if (t.length <= n) return t
  return t.slice(0, n - 1).trimEnd() + "…"
}

/**
 * Toma un array de dificultades (paralelo a un array de items) y devuelve
 * los ÍNDICES ordenados como: fácil → media → articulación, con shuffle dentro
 * de cada nivel. Permite mostrar preguntas en orden de dificultad creciente
 * sin que el orden interno sea predecible entre sesiones.
 *
 * Ej.: dificultades = [3, 1, 2, 1, 3] → resultado posible [3, 1, 2, 0, 4]
 *      (los de nivel 1 primero, luego 2, luego 3; shuffled dentro de cada uno)
 */
export function ordenarPorDificultadIdx(dificultades: number[]): number[] {
  const buckets: Record<number, number[]> = { 1: [], 2: [], 3: [] }
  dificultades.forEach((d, i) => {
    const k = d === 1 ? 1 : d === 3 ? 3 : 2
    buckets[k].push(i)
  })
  return [
    ...shuffle(buckets[1]),
    ...shuffle(buckets[2]),
    ...shuffle(buckets[3]),
  ]
}
