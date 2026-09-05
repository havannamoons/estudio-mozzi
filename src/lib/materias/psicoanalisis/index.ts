import type { ContenidoMateria } from "@/lib/materias/tipos"
import { TEMAS, DIFICULTADES } from "./temas"
import { CLOZES } from "./cloze"
import { REFERENTES } from "./referentes"
import { ORALES } from "./oral"

/**
 * Contenido de Psicoanálisis (Freud · Cát. Pino, ex Mozzi · UBA).
 * Fue la primera materia de la plataforma — antes vivía suelta en `lib/data/`.
 */
export const contenido: ContenidoMateria = {
  temas: TEMAS,
  dificultades: DIFICULTADES,
  clozes: CLOZES,
  referentes: REFERENTES,
  orales: ORALES,
}
