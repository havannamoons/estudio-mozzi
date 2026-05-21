/**
 * Cloze (fill-in-the-blank). Cada item es una frase con `___` donde falta
 * una palabra/término técnico clave. El matcheo acepta variantes (case +
 * acentos insensibles), por lo cual `respuestas` puede listar sinónimos.
 */
export interface Cloze {
  id: string
  frase: string
  respuestas: string[]
  pista?: string
  tema?: string
}

export const CLOZES: Cloze[] = [
  {
    id: "formula-1896",
    frase: "En el primer Freud: defensa → ___ → retorno de lo reprimido (síntoma).",
    respuestas: ["represión"],
    pista: "Es lo que mantiene afuera de la conciencia lo expulsado por la defensa.",
    tema: "P7b · Neuropsicosis de defensa",
  },
  {
    id: "rebus",
    frase: "El sueño no es un símbolo a decodificar — es un ___ a descifrar elemento por elemento.",
    respuestas: ["rebus"],
    pista: "Un acertijo de signos individuales, no un código universal.",
    tema: "P8 · Despliegue del inconsciente",
  },
  {
    id: "ombligo",
    frase: "El punto donde la interpretación encuentra su límite estructural se llama el ___ del sueño.",
    respuestas: ["ombligo"],
    pista: "Es lo no-interpretable; no es defecto técnico, es estructura.",
    tema: "P8 · Despliegue del inconsciente",
  },
  {
    id: "otro-prehistorico",
    frase: "El de la primera vivencia de satisfacción queda inscripto como el ___ prehistórico inolvidable.",
    respuestas: ["otro", "Otro"],
    pista: "La figura del cuidador originario, referencia inalcanzable del deseo.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "defensa-vs-janet",
    frase: "Para Janet, la histeria es debilidad psíquica congénita. Para Freud, es resultado de una ___ activa.",
    respuestas: ["defensa"],
    pista: "Operación del yo que rechaza una representación incompatible.",
    tema: "P6 · Originalidad del descubrimiento",
  },
  {
    id: "proyeccion",
    frase: "El monto de afecto debe ir a algún lado: en la histeria se convierte, en la obsesiva se desplaza, en la paranoia se ___.",
    respuestas: ["proyecta"],
    pista: "El afecto reaparece como reproche venido del exterior.",
    tema: "P7b · Neuropsicosis de defensa",
  },
  {
    id: "regresion-formal",
    frase: "Las tres formas de regresión del sueño son tópica, temporal y ___.",
    respuestas: ["formal"],
    pista: "Pasaje de modos maduros (la palabra) a modos primitivos (la imagen).",
    tema: "P9a · Primera ordenación metapsicológica",
  },
  {
    id: "primer-sistema-desear",
    frase: "Freud sostiene que el primer sistema no puede hacer otra cosa que ___.",
    respuestas: ["desear"],
    pista: "El Icc no busca homeostasis, busca repetir la huella.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "identidad-perceptiva",
    frase: "La búsqueda del proceso primario es la identidad ___ con la huella mnémica del objeto satisfactor.",
    respuestas: ["perceptiva"],
    pista: "Reproducir alucinatoriamente la percepción del objeto ausente.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "nachtraglichkeit",
    frase: "El efecto retroactivo por el cual una escena posterior resignifica una anterior se llama ___.",
    respuestas: ["Nachträglichkeit", "Nachtraglichkeit", "efecto retroactivo", "posterioridad"],
    pista: "Término alemán; concepto central del caso Emma.",
    tema: "P1-3 · El conflicto psíquico",
  },
  {
    id: "condensacion-familionar",
    frase: "El neologismo 'famillonär' es ejemplo de condensación con formación ___.",
    respuestas: ["sustitutiva"],
    pista: "Una sola palabra inventada reemplaza a la frase completa que diría la verdad.",
    tema: "P4-5 · Formaciones del inconsciente",
  },
  {
    id: "resistencias-radiales",
    frase: "Las resistencias que aumentan a medida que uno se acerca al núcleo patógeno se llaman ___.",
    respuestas: ["radiales", "radial"],
    pista: "Operan en la dirección vertical entre capas concéntricas del material.",
    tema: "P7a · Psicoterapia de la histeria",
  },
  {
    id: "emma-dos-escenas",
    frase: "El caso Emma muestra que para formar el síntoma hacen falta ___ escenas: una infantil y una puberal que resignifica.",
    respuestas: ["dos", "2"],
    pista: "Sin la segunda escena la primera no se vuelve traumática.",
    tema: "P1-3 · El conflicto psíquico",
  },
  {
    id: "otro-escenario",
    frase: "El sueño se produce en el ___ escenario, distinto al de la vida diurna de representaciones.",
    respuestas: ["otro"],
    pista: "Marca el giro del Icc descriptivo al Icc como sistema con leyes propias.",
    tema: "P9a · Primera ordenación metapsicológica",
  },
  {
    id: "falso-enlace",
    frase: "Cuando el paciente le atribuye al analista un afecto que correspondía a otra figura, Freud lo llama ___.",
    respuestas: ["falso enlace"],
    pista: "Anticipa la noción madura de transferencia como motor del análisis.",
    tema: "P7a · Psicoterapia de la histeria",
  },
]

/**
 * Normaliza strings para matcheo del cloze: minúsculas + sin acentos + sin
 * espacios extra. Hace que "Represión" matchee con "represion", "REPRESION", etc.
 */
export function normalizarCloze(s: string): string {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
}

export function clozeAcierta(respuestaUsuario: string, cloze: Cloze): boolean {
  const norm = normalizarCloze(respuestaUsuario)
  if (!norm) return false
  return cloze.respuestas.some((r) => normalizarCloze(r) === norm)
}
