import type { ContenidoMateria, Materia } from "./tipos"
import { contenido as psicoanalisis } from "./psicoanalisis"

export type { ContenidoMateria, Materia, MateriaCargada } from "./tipos"

/**
 * Catálogo de materias. El orden acá es el orden en que se muestran.
 *
 * Para sumar una materia nueva:
 *   1. `src/lib/materias/<slug>/` con temas.ts, cloze.ts, referentes.ts e index.ts
 *      (copiar la forma de `psicoanalisis/`).
 *   2. Agregar la ficha acá abajo con estado "disponible".
 *   3. Registrar el contenido en CONTENIDOS.
 * No hace falta tocar ni un componente.
 */
export const MATERIAS: Materia[] = [
  {
    slug: "psicoanalisis",
    nombre: "Psicoanálisis",
    nombreLargo: "Psicoanálisis · Freud",
    carrera: "Psicología · UBA",
    catedra: "Cát. Pino (ex Mozzi)",
    descripcion:
      "De las neuropsicosis de defensa al malestar en la cultura. Del parcial al final, con las preguntas que toma la cátedra.",
    datos: "19 temas · 118 preguntas · 5 formas de estudiarlas",
    emoji: "🧠",
    estado: "disponible",
    precio: 10000,
    acento: ["#9179D4", "#C3B0EA"],
  },
  {
    slug: "psicologia-general",
    nombre: "Psicología General",
    nombreLargo: "Psicología General",
    carrera: "Psicología · UBA",
    descripcion:
      "Percepción, memoria, aprendizaje y las corrientes que discuten qué es un proceso psicológico.",
    emoji: "🔍",
    estado: "proximamente",
    acento: ["#7C9BD4", "#B0CBEA"],
  },
  {
    slug: "estadistica",
    nombre: "Estadística",
    nombreLargo: "Estadística",
    carrera: "Psicología · UBA",
    descripcion:
      "La materia que más se recursa. Descriptiva, distribuciones y pruebas de hipótesis, explicadas sin fórmulas sueltas.",
    emoji: "📊",
    estado: "proximamente",
    acento: ["#D4A17C", "#EAD0B0"],
  },
  {
    slug: "psicopatologia",
    nombre: "Psicopatología",
    nombreLargo: "Psicopatología",
    carrera: "Psicología · UBA",
    descripcion:
      "Estructuras clínicas, diagnóstico diferencial y los casos que siempre caen en el oral.",
    emoji: "🩺",
    estado: "proximamente",
    acento: ["#C77C9B", "#EAB0CB"],
  },
]

/** Contenido jugable por slug. Solo las materias `disponible` están acá. */
const CONTENIDOS: Record<string, ContenidoMateria> = {
  psicoanalisis,
}

/** Materia que se abre cuando la URL no dice cuál (ej. el viejo link `/app`). */
export const MATERIA_DEFAULT = "psicoanalisis"

export function getMateria(slug: string): Materia | undefined {
  return MATERIAS.find((m) => m.slug === slug)
}

export function getContenido(slug: string): ContenidoMateria | undefined {
  return CONTENIDOS[slug]
}

/** Solo las materias que se pueden jugar hoy. */
export function materiasDisponibles(): Materia[] {
  return MATERIAS.filter((m) => m.estado === "disponible")
}

/** ¿Existe y tiene contenido cargado? Sirve para el 404 de `/app/[materia]`. */
export function esJugable(slug: string): boolean {
  return getMateria(slug)?.estado === "disponible" && Boolean(CONTENIDOS[slug])
}

/**
 * Claves de localStorage separadas por materia, para que el progreso de una
 * no pise el de otra.
 *
 * Psicoanálisis conserva las claves viejas a propósito: ya hay gente que
 * compró y tiene su progreso guardado con esos nombres. Cambiarlas sería
 * borrarles el avance.
 */
export function claveStorage(slug: string, base: string): string {
  return slug === MATERIA_DEFAULT ? base : `${base}__${slug}`
}
