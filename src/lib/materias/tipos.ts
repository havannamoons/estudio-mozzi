import type { Cloze, ConsignaOral, Par, TemaContenido } from "@/lib/types"

/**
 * Ficha de una materia del catálogo. Es lo que se muestra en la landing y en
 * `/materias`, y no incluye el contenido (que se carga aparte y es pesado).
 */
export interface Materia {
  /** Identificador en la URL: `/app/psicoanalisis`. */
  slug: string
  /** Nombre corto, el que se lee en el catálogo. */
  nombre: string
  /** Nombre completo con autor/eje. Ej: "Psicoanálisis · Freud". */
  nombreLargo: string
  carrera: string
  /** Cátedra concreta. Es EL diferencial: el contenido está verificado
   *  contra el programa de esa cátedra, no es genérico. */
  catedra?: string
  descripcion: string
  /**
   * Los números de ESTA materia (temas, preguntas, etc.), ya escritos.
   * Van acá y no en la landing a propósito: cada materia tiene los suyos, así
   * que no pueden anunciarse como si fueran una promesa de la marca.
   */
  datos?: string
  emoji: string
  /** `disponible` se puede jugar; `proximamente` solo se anuncia. */
  estado: "disponible" | "proximamente"
  /** Precio en pesos. Sin precio = gratis o todavía sin definir. */
  precio?: number
  /** Par de colores (from → to) para el degradé de la tarjeta. */
  acento: [string, string]
}

/** Todo el material jugable de una materia. */
export interface ContenidoMateria {
  temas: TemaContenido[]
  /** Por tema: nivel de cada pregunta (1=definición, 2=concepto, 3=articulación). */
  dificultades: Record<string, number[]>
  clozes: Cloze[]
  referentes: Par[]
  /**
   * Consignas para explicar en voz alta. Es opcional: una materia sin consignas
   * escritas igual tiene modo oral, porque se derivan de los títulos de la
   * teoría (ver `consignasDeLaMateria`). Las escritas a mano son mejores, las
   * derivadas hacen que el modo exista desde el día uno.
   */
  orales?: ConsignaOral[]
}

/** Una materia con su contenido ya resuelto. */
export interface MateriaCargada {
  materia: Materia
  contenido: ContenidoMateria
}
