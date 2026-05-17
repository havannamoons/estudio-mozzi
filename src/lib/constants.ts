import type { Carta } from "./types"

export const STORAGE_KEY = "cartas"
export const STATS_KEY = "estudio_stats"
export const THEME_KEY = "tema"
export const MIGRACION_KEY = "migracion_v4"
export const SEED_KEY = "seed_v1"

export const CAJA_DOMINADA = 3
export const AUTO_ADVANCE_OK_MS = 15000
export const AUTO_ADVANCE_MAL_MS = 15000

export type PackCarta = Pick<Carta, "front" | "back" | "tag">

export const PACK_FREUD: PackCarta[] = [
  { tag: "Freud", front: "¿Quién era Jean-Martin Charcot y por qué fue importante para Freud?", back: "Neurólogo francés, director de la Salpêtrière en París. Freud estudió con él entre 1885-1886 y aprendió que los síntomas histéricos podían tener un origen psíquico, no solo orgánico." },
  { tag: "Freud", front: "¿Qué método usaba Charcot para investigar la histeria?", back: "La hipnosis. Inducía y suprimía síntomas histéricos en pacientes hipnotizadas, demostrando su carácter psicógeno." },
  { tag: "Freud", front: "¿Qué demostración de Charcot fue clave para Freud sobre la histeria?", back: "Que la histeria también ocurre en hombres, refutando la idea de que era una afección exclusivamente femenina." },
  { tag: "Freud", front: "¿Quién fue Josef Breuer y qué relación tuvo con el psicoanálisis?", back: "Médico vienés, mentor y colaborador de Freud. Trató a Anna O. con un método catártico bajo hipnosis y escribió con Freud los \"Estudios sobre la histeria\" (1895)." },
  { tag: "Freud", front: "¿Quién fue Anna O. y por qué es central en la historia del psicoanálisis?", back: "Paciente de Breuer (Bertha Pappenheim). Inventó el término \"cura por la palabra\" (talking cure) al notar que hablar de sus síntomas bajo hipnosis los aliviaba." },
  { tag: "Freud", front: "¿En qué consiste el método catártico?", back: "Procedimiento de Breuer: bajo hipnosis, el paciente recordaba la escena traumática asociada al síntoma y descargaba el afecto reprimido, produciendo alivio sintomático." },
  { tag: "Freud", front: "¿Qué es la abreacción?", back: "Descarga emocional ligada a la rememoración de una experiencia traumática. En el método catártico el síntoma cede al abreaccionarse el afecto que había quedado \"estrangulado\"." },
  { tag: "Freud", front: "¿Qué obra fundacional escribieron Freud y Breuer en 1895?", back: "\"Estudios sobre la histeria\". Tesis: los histéricos sufren principalmente de reminiscencias — los síntomas son la expresión simbólica de recuerdos traumáticos reprimidos." },
  { tag: "Freud", front: "¿En qué consistía la teoría de la seducción de Freud?", back: "Hipótesis inicial (1895-1897): los síntomas neuróticos se originarían en abusos sexuales reales sufridos en la infancia." },
  { tag: "Freud", front: "¿Por qué Freud abandona la teoría de la seducción?", back: "En 1897 concluye que muchos de esos relatos no correspondían a hechos reales sino a fantasías. Esto lo lleva a descubrir la sexualidad infantil y la realidad psíquica." },
  { tag: "Freud", front: "¿Qué importancia teórica tiene el abandono de la teoría de la seducción?", back: "Marca el pasaje del trauma externo a la realidad psíquica como factor causal. Sin ese giro no existiría el psicoanálisis: nace el concepto de fantasía inconsciente." },
  { tag: "Freud", front: "¿Por qué Freud abandona la hipnosis como método?", back: "Porque no todos los pacientes eran hipnotizables y los efectos eran inestables. Descubrió que se podía acceder a los recuerdos reprimidos por otro camino: la asociación libre." },
  { tag: "Freud", front: "¿Qué es la asociación libre y por qué es la \"regla fundamental\" del psicoanálisis?", back: "Es la indicación al paciente de decir todo lo que se le pase por la cabeza, sin selección ni crítica. Permite el surgimiento de material inconsciente que la censura bloquea." },
  { tag: "Freud", front: "¿Qué es la transferencia?", back: "Actualización en la relación con el analista de afectos, deseos y patrones vinculares que el paciente desarrolló con figuras significativas de su infancia. Es a la vez obstáculo y motor del tratamiento." },
  { tag: "Freud", front: "¿Qué es la resistencia en psicoanálisis?", back: "Toda manifestación del paciente que se opone al acceso a contenidos inconscientes y al progreso del análisis. Donde hay resistencia hay material reprimido cerca." },
  { tag: "Freud", front: "¿En qué año publica Freud \"La interpretación de los sueños\" y por qué es fundacional?", back: "1900. Es la obra fundacional del psicoanálisis. Allí Freud llama al sueño \"la vía regia al inconsciente\" y desarrolla su método de interpretación." },
  { tag: "Freud", front: "¿Cuál es la diferencia entre contenido manifiesto y contenido latente del sueño?", back: "Manifiesto: lo que el soñante recuerda al despertar. Latente: los pensamientos, deseos y conflictos inconscientes que el sueño expresa de forma disfrazada." },
  { tag: "Freud", front: "¿Cuáles son los mecanismos del trabajo del sueño?", back: "Condensación, desplazamiento, consideración a la figurabilidad y elaboración secundaria. Transforman el contenido latente en manifiesto." },
  { tag: "Freud", front: "¿Cuáles son las instancias de la primera tópica freudiana?", back: "Inconsciente (Icc), Preconsciente (Prcc) y Consciente (Cc). Modelo del aparato psíquico desarrollado a partir de 1900." },
  { tag: "Freud", front: "¿Qué diferencia hay entre inconsciente y preconsciente?", back: "El preconsciente contiene contenidos que no son actualmente conscientes pero pueden serlo. El inconsciente contiene representaciones reprimidas, sin acceso directo a la conciencia." },
  { tag: "Freud", front: "¿Qué obra introduce la sexualidad infantil y en qué año?", back: "\"Tres ensayos de teoría sexual\" (1905). Freud postula que la sexualidad no empieza en la pubertad sino en la infancia." },
  { tag: "Freud", front: "¿Cuáles son las etapas del desarrollo psicosexual según Freud?", back: "Oral, anal, fálica, latencia y genital. Cada una se organiza alrededor de una zona erógena dominante." },
  { tag: "Freud", front: "¿Qué son los actos fallidos y dónde los desarrolla Freud?", back: "Olvidos, lapsus y equivocaciones aparentemente triviales que son formaciones del inconsciente: revelan un deseo reprimido. Los aborda en \"Psicopatología de la vida cotidiana\" (1901)." },
]
