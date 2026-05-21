/**
 * Pares concepto ↔ referente clínico, extraídos de las teorías y referentes
 * que aparecen en los temas. Se usan en MatchMode.
 *
 * Cada par tiene un `id` único (no se muestra al usuario, sirve para detectar
 * el matcheo correcto), un `concepto` (la columna izquierda) y un `referente`
 * (la columna derecha). El `pista` es opcional — se muestra al matchear.
 */
export interface Par {
  id: string
  concepto: string
  referente: string
  pista?: string
}

export const REFERENTES: Par[] = [
  {
    id: "cacilie",
    concepto: "Cäcilie M.",
    referente: "Simbolización somática del lenguaje",
    pista: "Una metáfora vivida (una 'bofetada') se literaliza como síntoma corporal.",
  },
  {
    id: "emma",
    concepto: "Emma",
    referente: "Efecto retroactivo (Nachträglichkeit)",
    pista: "Una escena infantil se vuelve traumática solo cuando la pubertad le da sentido sexual.",
  },
  {
    id: "signorelli",
    concepto: "Signorelli",
    referente: "Olvido por desplazamiento asociativo",
    pista: "El nombre olvidado y sus sustitutos (Botticelli, Boltraffio) comparten red asociativa con material reprimido.",
  },
  {
    id: "familionario",
    concepto: "Familionario (Heine)",
    referente: "Condensación con formación sustitutiva",
    pista: "Dos palabras (familiär + Millionär) confluyen en un neologismo que representa a las dos.",
  },
  {
    id: "tres-entradas",
    concepto: "Tres entradas de teatro",
    referente: "Trabajo de desplazamiento en el sueño",
    pista: "El acento del sueño cae en lo aparentemente nimio (el precio) y no en lo importante.",
  },
  {
    id: "padre-ardiendo",
    concepto: "Padre, ¿no ves que estoy ardiendo?",
    referente: "Realización de deseo + apremio de la vida",
    pista: "El sueño prolonga al hijo vivo un instante; la realidad (la vela caída) obliga a despertar.",
  },
  {
    id: "anna-o",
    concepto: "Anna O.",
    referente: "Cura por la palabra (talking cure)",
    pista: "Pappenheim notó que hablar de los síntomas bajo hipnosis los aliviaba.",
  },
  {
    id: "charcot",
    concepto: "Charcot",
    referente: "Causa psíquica de la histeria",
    pista: "Inducía y suprimía síntomas con hipnosis, refutando el origen orgánico-uterino.",
  },
  {
    id: "janet",
    concepto: "Janet",
    referente: "Modelo del déficit / debilidad psíquica",
    pista: "La histeria como desintegración de una conciencia congénitamente débil — lo que Freud rompe.",
  },
  {
    id: "carta-52",
    concepto: "Carta 52 (Fliess, 1896)",
    referente: "Exclusión percepción / memoria",
    pista: "El sistema P recibe estímulos pero no registra; la huella se inscribe en otro sistema (Hm).",
  },
  {
    id: "manuscrito-k",
    concepto: "Manuscrito K",
    referente: "Primera fórmula de la neurosis (1896)",
    pista: "Defensa → represión → retorno de lo reprimido (síntoma).",
  },
  {
    id: "estudios-histeria",
    concepto: "Estudios sobre la histeria (1895)",
    referente: "Los histéricos sufren de reminiscencias",
    pista: "Tesis de Breuer y Freud: los síntomas son expresión simbólica de recuerdos traumáticos reprimidos.",
  },
]
