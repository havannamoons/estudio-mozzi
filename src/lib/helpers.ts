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
