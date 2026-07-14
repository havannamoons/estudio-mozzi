/**
 * Cloze (fill-in-the-blank). Cada item es una frase con `___` donde falta
 * una palabra/término técnico clave. El matcheo acepta variantes (case +
 * acentos insensibles), por lo cual `respuestas` puede listar sinónimos.
 */
export interface Cloze {
  id: string
  frase: string
  /** Variantes válidas (case + acentos insensibles). El primer item es la
   *  que se muestra como botón "correcto" en modo opciones. */
  respuestas: string[]
  /** 3 distractores plausibles para modo multiple-choice. */
  distractores: string[]
  pista?: string
  tema?: string
}

export const CLOZES: Cloze[] = [
  {
    id: "formula-1896",
    frase: "En el primer Freud: defensa → ___ → retorno de lo reprimido (síntoma).",
    respuestas: ["represión"],
    distractores: ["censura", "sublimación", "fijación"],
    pista: "Es lo que mantiene afuera de la conciencia lo expulsado por la defensa.",
    tema: "P7b · Neuropsicosis de defensa",
  },
  {
    id: "rebus",
    frase: "El sueño no es un símbolo a decodificar — es un ___ a descifrar elemento por elemento.",
    respuestas: ["rebus"],
    distractores: ["código universal", "jeroglífico", "símbolo cifrado"],
    pista: "Un acertijo de signos individuales, no un código universal.",
    tema: "P8 · Despliegue del inconsciente",
  },
  {
    id: "ombligo",
    frase: "El punto donde la interpretación encuentra su límite estructural se llama el ___ del sueño.",
    respuestas: ["ombligo"],
    distractores: ["núcleo", "centro latente", "punto ciego"],
    pista: "Es lo no-interpretable; no es defecto técnico, es estructura.",
    tema: "P8 · Despliegue del inconsciente",
  },
  {
    id: "otro-prehistorico",
    frase: "El de la primera vivencia de satisfacción queda inscripto como el ___ prehistórico inolvidable.",
    respuestas: ["otro", "Otro"],
    distractores: ["padre", "objeto", "primer"],
    pista: "La figura del cuidador originario, referencia inalcanzable del deseo.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "defensa-vs-janet",
    frase: "Para Janet, la histeria es debilidad psíquica congénita. Para Freud, es resultado de una ___ activa.",
    respuestas: ["defensa"],
    distractores: ["represión", "disociación", "regresión"],
    pista: "Operación del yo que rechaza una representación incompatible.",
    tema: "P6 · Originalidad del descubrimiento",
  },
  {
    id: "proyeccion",
    frase: "El monto de afecto debe ir a algún lado: en la histeria se convierte, en la obsesiva se desplaza, en la paranoia se ___.",
    respuestas: ["proyecta"],
    distractores: ["reprime", "introyecta", "sublima"],
    pista: "El afecto reaparece como reproche venido del exterior.",
    tema: "P7b · Neuropsicosis de defensa",
  },
  {
    id: "regresion-formal",
    frase: "Las tres formas de regresión del sueño son tópica, temporal y ___.",
    respuestas: ["formal"],
    distractores: ["estructural", "dinámica", "instintiva"],
    pista: "Pasaje de modos maduros (la palabra) a modos primitivos (la imagen).",
    tema: "P9a · Primera ordenación metapsicológica",
  },
  {
    id: "primer-sistema-desear",
    frase: "Freud sostiene que el primer sistema no puede hacer otra cosa que ___.",
    respuestas: ["desear"],
    distractores: ["reprimir", "satisfacer", "regular"],
    pista: "El Icc no busca homeostasis, busca repetir la huella.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "identidad-perceptiva",
    frase: "La búsqueda del proceso primario es la identidad ___ con la huella mnémica del objeto satisfactor.",
    respuestas: ["perceptiva"],
    distractores: ["imaginaria", "simbólica", "de pensamiento"],
    pista: "Reproducir alucinatoriamente la percepción del objeto ausente.",
    tema: "P9b · Experiencia de satisfacción",
  },
  {
    id: "nachtraglichkeit",
    frase: "El efecto retroactivo por el cual una escena posterior resignifica una anterior se llama ___.",
    respuestas: ["Nachträglichkeit", "Nachtraglichkeit", "efecto retroactivo", "posterioridad"],
    distractores: ["Wiederholungszwang", "Verdrängung", "Verschiebung"],
    pista: "Término alemán; concepto central del caso Emma.",
    tema: "P1-3 · El conflicto psíquico",
  },
  {
    id: "condensacion-familionar",
    frase: "El neologismo 'famillonär' es ejemplo de condensación con formación ___.",
    respuestas: ["sustitutiva"],
    distractores: ["reactiva", "manifiesta", "asociativa"],
    pista: "Una sola palabra inventada reemplaza a la frase completa que diría la verdad.",
    tema: "P4-5 · Formaciones del inconsciente",
  },
  {
    id: "resistencias-radiales",
    frase: "Las resistencias que aumentan a medida que uno se acerca al núcleo patógeno se llaman ___.",
    respuestas: ["radiales", "radial"],
    distractores: ["asociativas", "concéntricas", "centrales"],
    pista: "Operan en la dirección vertical entre capas concéntricas del material.",
    tema: "P7a · Psicoterapia de la histeria",
  },
  {
    id: "emma-dos-escenas",
    frase: "El caso Emma muestra que para formar el síntoma hacen falta ___ escenas: una infantil y una puberal que resignifica.",
    respuestas: ["dos", "2"],
    distractores: ["tres", "una", "cuatro"],
    pista: "Sin la segunda escena la primera no se vuelve traumática.",
    tema: "P1-3 · El conflicto psíquico",
  },
  {
    id: "otro-escenario",
    frase: "El sueño se produce en el ___ escenario, distinto al de la vida diurna de representaciones.",
    respuestas: ["otro"],
    distractores: ["mismo", "diurno", "consciente"],
    pista: "Marca el giro del Icc descriptivo al Icc como sistema con leyes propias.",
    tema: "P9a · Primera ordenación metapsicológica",
  },
  {
    id: "falso-enlace",
    frase: "Cuando el paciente le atribuye al analista un afecto que correspondía a otra figura, Freud lo llama ___.",
    respuestas: ["falso enlace"],
    distractores: ["acto fallido", "neo-síntoma", "transferencia negativa"],
    pista: "Anticipa la noción madura de transferencia como motor del análisis.",
    tema: "P7a · Psicoterapia de la histeria",
  },

  // ---------------------------------------------------------
  // FINAL
  // ---------------------------------------------------------
  {
    id: "neurosis-negativo",
    frase: "En los Tres ensayos, la neurosis es el ___ de la perversión: lo que el perverso actúa, el neurótico lo reprime.",
    respuestas: ["negativo"],
    distractores: ["síntoma", "opuesto", "modelo"],
    pista: "En sentido fotográfico: debajo del síntoma hay una moción perverso-parcial reprimida.",
    tema: "Tres ensayos · La sexualidad",
  },
  {
    id: "apuntalamiento-chupeteo",
    frase: "El placer de la succión se separa de la nutrición: la pulsión sexual nace por ___ en una función de autoconservación.",
    respuestas: ["apuntalamiento", "anaclisis"],
    distractores: ["represión", "sublimación", "condensación"],
    pista: "Anlehnung: el modelo es el chupeteo (Ludeln).",
    tema: "Tres ensayos · La sexualidad",
  },
  {
    id: "libido-yoica",
    frase: "En 1914 Freud sostiene que el yo mismo puede ser investido con ___: hay un narcisismo.",
    respuestas: ["libido"],
    distractores: ["realidad", "afecto", "angustia"],
    pista: "Libido yoica y libido de objeto funcionan como vasos comunicantes.",
    tema: "Narcisismo (1914)",
  },
  {
    id: "ideal-del-yo",
    frase: "El narcisismo infantil perdido no se abandona: se desplaza hacia adelante como un ___ del yo, antecedente del superyó.",
    respuestas: ["ideal"],
    distractores: ["objeto", "yo", "modelo"],
    pista: "Meta a reconquistar, junto a una instancia crítica que vigila al yo.",
    tema: "Narcisismo (1914)",
  },
  {
    id: "cuatro-caracteristicas",
    frase: "Las cuatro características de la pulsión son esfuerzo, meta, objeto y ___.",
    respuestas: ["fuente"],
    distractores: ["afecto", "represión", "descarga"],
    pista: "Quelle: el proceso somático (zona erógena) que la pulsión representa.",
    tema: "Pulsiones y destinos (1915)",
  },
  {
    id: "represion-primaria",
    frase: "La represión que fija un representante y funda el inconsciente (nunca fue consciente) es la represión ___.",
    respuestas: ["primaria", "primordial"],
    distractores: ["secundaria", "propiamente dicha", "radial"],
    pista: "Urverdrängung: es el núcleo de atracción de todo lo que luego se reprime.",
    tema: "La represión (1915)",
  },
  {
    id: "representacion-cosa",
    frase: "La representación inconsciente es solo la representación-___; lo que la hace consciente es su enlace con la palabra.",
    respuestas: ["cosa"],
    distractores: ["afecto", "objeto", "imagen"],
    pista: "Sachvorstellung. La represión deniega su traducción en palabras.",
    tema: "Lo inconciente (1915)",
  },
  {
    id: "sombra-objeto",
    frase: "En la melancolía, la ___ del objeto cayó sobre el yo: el yo se identifica con el objeto perdido.",
    respuestas: ["sombra"],
    distractores: ["pérdida", "libido", "culpa"],
    pista: "Por eso los autorreproches son, en verdad, reproches al objeto.",
    tema: "Duelo y melancolía (1917)",
  },
  {
    id: "compulsion-repeticion",
    frase: "El juego del fort-da y el repetir-en-acto en la transferencia son expresiones de la ___ de repetición.",
    respuestas: ["compulsión", "compulsion"],
    distractores: ["pulsión", "tendencia", "necesidad"],
    pista: "Más elemental que el principio de placer; marca de la pulsión de muerte.",
    tema: "Más allá del ppio de placer (1920)",
  },
  {
    id: "superyo-heredero",
    frase: "En la segunda tópica, el superyó es el heredero del complejo de ___.",
    respuestas: ["Edipo", "edipo"],
    distractores: ["castración", "inferioridad", "Electra"],
    pista: "Se forma por identificación con las figuras parentales al resignar los objetos edípicos.",
    tema: "El yo y el ello (1923)",
  },
  {
    id: "castracion-sepulta",
    frase: "En el varón, la amenaza de castración ___ el complejo de Edipo; en la niña, en cambio, lo inaugura.",
    respuestas: ["sepulta", "hunde"],
    distractores: ["inaugura", "reprime", "desplaza"],
    pista: "Untergang: los objetos edípicos se resignan y por identificación se instala el superyó.",
    tema: "Edipo y castración (1924-25)",
  },
  {
    id: "angustia-senal",
    frase: "En 1926 Freud invierte la teoría: el yo produce una angustia ___ que desencadena la represión.",
    respuestas: ["señal", "senal"],
    distractores: ["automática", "traumática", "libidinal"],
    pista: "Ya no represión → angustia, sino angustia → represión.",
    tema: "Inhibición, síntoma y angustia (1926)",
  },
  {
    id: "culpa-cultura",
    frase: "La cultura doma la agresión introyectándola: el superyó la vuelve contra el yo como sentimiento de ___.",
    respuestas: ["culpa"],
    distractores: ["angustia", "vergüenza", "inferioridad"],
    pista: "Cuanto más se resigna la agresión, más severo el superyó. El precio del progreso cultural.",
    tema: "El malestar en la cultura (1930)",
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
