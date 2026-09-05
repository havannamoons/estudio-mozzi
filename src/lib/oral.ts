import type { ConsignaOral, TemaContenido } from "@/lib/types"
import type { ContenidoMateria } from "@/lib/materias/tipos"

/**
 * De dónde salen las consignas del modo oral.
 *
 * Hay dos fuentes y conviven a propósito:
 *
 * 1. Las **escritas a mano** para la materia (`contenido.orales`). Son mejores:
 *    tienen repregunta, articulan textos, y el punteo está redactado como se
 *    dice en voz alta.
 * 2. Las **derivadas** de la teoría, para los temas que todavía no tienen una
 *    escrita. Son más pobres, pero garantizan que el modo oral exista para
 *    cualquier materia nueva sin escribir una línea de contenido extra.
 *
 * Sin la segunda fuente, agregar una materia significaría escribir 19 consignas
 * antes de que el modo sirva de algo, y el modo no se usaría nunca.
 */

/** El contenido de la teoría viene en HTML. Para el punteo hace falta texto. */
function aTextoPlano(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

/** Corta en el final de oración más cercano, para no dejar la frase colgada. */
function recortar(texto: string, max = 260): string {
  if (texto.length <= max) return texto
  const cortado = texto.slice(0, max)
  const punto = cortado.lastIndexOf(". ")
  if (punto > max * 0.5) return cortado.slice(0, punto + 1)
  return cortado.trimEnd() + "…"
}

/** Consigna derivada de un tema: los bloques de teoría son el punteo. */
function derivarDeTema(tema: TemaContenido): ConsignaOral | null {
  const bloques = tema.teoria.filter((b) => b.titulo)
  // Con menos de tres bloques no hay desarrollo posible: sería una definición.
  if (bloques.length < 3) return null
  return {
    id: `oral_auto_${tema.id}`,
    temas: [tema.id],
    consigna: `Explicá ${tema.titulo.toLowerCase()}.`,
    minutos: 3,
    tipo: "desarrollo",
    puntos: bloques.map((b) => ({
      punto: b.titulo,
      desarrollo: recortar(aTextoPlano(b.contenido)),
    })),
  }
}

/**
 * Todas las consignas disponibles: las escritas primero, después las derivadas
 * de los temas que ninguna consigna escrita cubre como tema principal.
 */
export function consignasDeLaMateria(
  contenido: ContenidoMateria,
): ConsignaOral[] {
  const escritas = contenido.orales ?? []
  /* Un tema se considera cubierto solo si es el tema PRINCIPAL de una consigna
     escrita. Aparecer como tema secundario en una articulación no alcanza: la
     articulación no desarrolla ese tema, lo usa. */
  const cubiertos = new Set(escritas.map((c) => c.temas[0]))
  const derivadas = contenido.temas
    .filter((t) => !cubiertos.has(t.id))
    .map(derivarDeTema)
    .filter((c): c is ConsignaOral => c !== null)

  /* Todo sale en el orden del programa, según el tema principal de cada
     consigna. No es un detalle estético: cuando las articulaciones iban
     agrupadas al final, filtrar por "un tema" dejaba las primeras quince filas
     idénticas a "todas", y el filtro parecía no hacer nada. Intercaladas, la
     diferencia se ve en la primera pantalla. */
  const posicion = new Map(contenido.temas.map((t, i) => [t.id, i]))
  const orden = (c: ConsignaOral) => posicion.get(c.temas[0]) ?? 999

  return [...escritas, ...derivadas].sort((a, b) => orden(a) - orden(b))
}

/** Los minutos que se pueden elegir en el selector. */
export const MINUTOS_ORAL = [1, 2, 3, 5] as const
