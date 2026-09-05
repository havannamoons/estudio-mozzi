import type { ConsignaOral } from "@/lib/types"

/**
 * Consignas para el modo oral de Psicoanálisis (Freud, Cát. Pino).
 *
 * Los `puntos` NO son un resumen del texto: son lo que el tribunal escucha para
 * decidir si entendiste. Están redactados como se dicen en voz alta, porque el
 * modo entrena decirlos, no reconocerlos.
 *
 * Las de tipo `articulacion` van al final y son las más difíciles a propósito:
 * un final de esta cátedra casi nunca pide "definí represión", pide poner dos
 * momentos de la obra a conversar.
 */
export const ORALES: ConsignaOral[] = [
  // ============================================================
  // PRIMERA PARTE
  // ============================================================
  {
    id: "oral_defensa",
    temas: ["p1_3", "p7b"],
    consigna:
      "Explicá cómo la defensa produce el inconsciente, y por qué eso invierte el orden que uno esperaría.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "La defensa es anterior: no reprime algo que ya era inconsciente",
        desarrollo:
          "Lo intuitivo sería pensar que hay un inconsciente y después la defensa lo tapa. Freud dice lo contrario: la representación se vuelve inconsciente PORQUE el yo la rechaza. El inconsciente es un producto de la defensa, no su materia prima.",
      },
      {
        punto: "El yo rechaza una representación inconciliable",
        desarrollo:
          "En las neuropsicosis de defensa (1894), el yo se topa con una representación que no puede componer con el resto y la trata como no acontecida. Pero no puede hacerla desaparecer.",
      },
      {
        punto: "El afecto no desaparece: el principio de constancia lo obliga a ir a otro lado",
        desarrollo:
          "Acá se apoya en el principio de constancia (el aparato tiende a mantener constante la suma de excitación). La representación se rechaza, pero el monto de afecto tiene que descargarse igual: se desplaza, y ahí aparece el síntoma.",
      },
      {
        punto: "Primera fórmula de la neurosis (1896)",
        desarrollo:
          "La neurosis es el resultado de un conflicto entre el yo y una representación sexual inconciliable, más el fracaso de la defensa. El síntoma es una transacción entre las dos fuerzas.",
      },
      {
        punto: "La defensa fracasa: retorno de lo reprimido y compulsión",
        desarrollo:
          "Si la defensa funcionara del todo no habría neurosis. Lo reprimido retorna deformado, y por eso el síntoma tiene carácter compulsivo: la persona no lo entiende ni lo controla.",
      },
    ],
    repregunta:
      "¿Y por qué Emma es el caso que Freud elige para mostrar esto? ¿Qué agrega ese caso que la fórmula sola no muestra?",
  },
  {
    id: "oral_emma",
    temas: ["p1_3", "p7b"],
    consigna:
      "Desarrollá el caso Emma y explicá qué es la temporalidad retroactiva.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Dos escenas, y la primera no era traumática cuando pasó",
        desarrollo:
          "La escena del almacenero (a los 8) no produjo trauma en su momento. La escena posterior en la tienda (a los 12) resignifica la primera: recién ahí la primera se vuelve traumática.",
      },
      {
        punto: "El trauma no está en el hecho, está en el après-coup",
        desarrollo:
          "Lo traumático no es una propiedad del acontecimiento: se constituye retroactivamente. Es la segunda escena la que dota de sentido sexual a la primera.",
      },
      {
        punto: "La pubertad como condición",
        desarrollo:
          "Entre las dos escenas pasa algo que cambia todo: la pubertad. Recién con ella la escena vieja puede leerse sexualmente.",
      },
      {
        punto: "Fuente independiente de displacer",
        desarrollo:
          "El displacer no viene de la percepción actual sino del recuerdo. Eso es clave: el recuerdo desprende más afecto que el suceso, algo que ninguna psicología de la época podía explicar.",
      },
      {
        punto: "Consecuencia: la temporalidad del inconsciente no es cronológica",
        desarrollo:
          "El pasado se reescribe. Esto es la base de por qué en análisis no se busca 'el hecho real' sino la construcción.",
      },
    ],
    repregunta:
      "¿Qué diferencia hay entre decir 'el recuerdo desprende más afecto que el suceso' y decir que Emma miente o exagera?",
  },
  {
    id: "oral_originalidad",
    temas: ["p6"],
    consigna:
      "Explicá en qué consiste la originalidad del descubrimiento freudiano frente a Charcot y a Janet.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Charcot: la herencia",
        desarrollo:
          "De Charcot toma que la histeria tiene leyes propias y es un objeto legítimo de estudio, no simulación. También la hipnosis como vía y la idea de que una representación puede producir un síntoma corporal.",
      },
      {
        punto: "Janet: la diferencia decisiva es déficit vs. conflicto",
        desarrollo:
          "Para Janet la disociación es un déficit, una debilidad constitucional del psiquismo. Para Freud es el resultado de un conflicto: no falta fuerza, hay dos fuerzas oponiéndose. El enfermo no es débil, está en guerra.",
      },
      {
        punto: "La escisión del yo es efecto, no causa",
        desarrollo:
          "En Janet la escisión explica; en Freud hay que explicarla, y la explica la defensa.",
      },
      {
        punto: "La ruptura: reformula lo que importa",
        desarrollo:
          "Freud toma conceptos de la ciencia de su época (constancia, energía) pero al reformularlos cambia su sentido. No es continuidad ni invención desde cero: es ruptura desde dentro.",
      },
    ],
    repregunta:
      "Si Freud usa el principio de constancia, que viene de la física de su época, ¿en qué sentido puede decirse que rompe con ella?",
  },
  {
    id: "oral_formaciones",
    temas: ["p4_5", "p8"],
    consigna:
      "Explicá qué es una formación del inconsciente, tomando el chiste o el olvido de nombre propio.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Una formación es un compromiso, no un error",
        desarrollo:
          "El acto fallido no es una falla del psiquismo: es un logro de otra intención. Algo se cumple ahí donde parece que algo salió mal.",
      },
      {
        punto: "Signorelli: el mecanismo completo",
        desarrollo:
          "Se olvida el nombre pero aparecen sustitutos (Boticelli, Boltraffio). El olvido no es un hueco: produce algo. Los sustitutos están conectados por asociación con lo reprimido (el tema de la muerte y la sexualidad que Freud venía de conversar).",
      },
      {
        punto: "Condensación y desplazamiento",
        desarrollo:
          "En el Familionario dos palabras se condensan en una que no existe pero dice más que las dos. En el desplazamiento el acento cae en un elemento secundario. Son los mismos mecanismos del sueño.",
      },
      {
        punto: "Retorno de lo reprimido en la formación misma",
        desarrollo:
          "Lo reprimido no vuelve como tal: vuelve deformado. Por eso hay que interpretar en lugar de simplemente recordar.",
      },
      {
        punto: "El mismo mecanismo en sueño, síntoma, chiste y lapsus",
        desarrollo:
          "Que los cuatro se expliquen igual es lo que le permite a Freud decir que hay un sistema con sus propias leyes, y no una colección de curiosidades.",
      },
    ],
    repregunta:
      "¿Por qué Freud necesita mostrar que el mismo mecanismo funciona en el sueño de una persona sana y en el síntoma de una neurótica?",
  },
  {
    id: "oral_aparato",
    temas: ["p9a", "p9b"],
    consigna:
      "Explicá la vivencia de satisfacción y por qué de ahí sale el deseo.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "El punto de partida es un estado de necesidad y un otro que asiste",
        desarrollo:
          "El cachorro humano no puede resolver la necesidad solo: hace falta la acción específica de otro. Esa ayuda ajena es constitutiva, no un accidente.",
      },
      {
        punto: "Queda una huella, y esa huella es lo que después se busca",
        desarrollo:
          "La satisfacción deja inscripta una huella mnémica. Cuando la necesidad vuelve, lo que se reinviste no es el objeto: es la huella.",
      },
      {
        punto: "Deseo: reinvestir la huella, no conseguir el objeto",
        desarrollo:
          "El deseo apunta a repetir la percepción de la primera satisfacción. Por eso el deseo es irreductible a la necesidad: no se satisface con el objeto adecuado.",
      },
      {
        punto: "Objeto alucinatorio y su fracaso",
        desarrollo:
          "El aparato primero alucina el objeto. Eso no alimenta, así que el fracaso de la alucinación es lo que obliga a la instalación del proceso secundario y de la prueba de realidad.",
      },
      {
        punto: "Ruptura entre constancia y principio de placer",
        desarrollo:
          "El aparato no busca solo descargar: busca reencontrar UNA percepción determinada. Eso ya no se explica por la constancia.",
      },
    ],
    repregunta:
      "Si el deseo busca la huella y no el objeto, ¿qué consecuencia tiene eso para pensar la satisfacción en la vida adulta?",
  },

  // ============================================================
  // SEGUNDA PARTE (FINAL)
  // ============================================================
  {
    id: "oral_pulsion",
    temas: ["pulsiones", "sexualidad"],
    consigna:
      "Definí la pulsión con sus cuatro características y explicá por qué es un concepto límite.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Concepto límite entre lo somático y lo psíquico",
        desarrollo:
          "La pulsión es la representación psíquica de una fuente de excitación somática. Ni instinto puro ni idea pura: está en el borde, y esa incomodidad es el concepto.",
      },
      {
        punto: "Esfuerzo (Drang): es constante, no se puede huir",
        desarrollo:
          "A diferencia del estímulo externo, del que uno puede escapar, la pulsión empuja desde adentro y de manera continua.",
      },
      {
        punto: "Meta (Ziel): siempre la satisfacción, y siempre es cancelar el estado de estimulación",
        desarrollo:
          "La meta es única en última instancia, aunque los caminos varíen. Hay metas intermedias y desviadas.",
      },
      {
        punto: "Objeto (Objekt): lo más variable y contingente",
        desarrollo:
          "El objeto no está determinado biológicamente: no viene con la pulsión, se le suelda. Esto es lo que abre la posibilidad de las perversiones y de toda la sexualidad humana.",
      },
      {
        punto: "Fuente (Quelle): el proceso somático en un órgano",
        desarrollo:
          "Es lo que Freud dice conocer menos, y lo deja explícitamente como límite del saber psicológico.",
      },
      {
        punto: "Por qué importa que el objeto sea contingente",
        desarrollo:
          "Si el objeto fuera fijo, la sexualidad humana sería instinto. Que sea contingente es lo que hace que haya historia, síntoma y elección de objeto.",
      },
    ],
    repregunta:
      "¿Cómo se articula esto con la idea de los Tres ensayos de que 'el hallazgo de objeto es en realidad un reencuentro'?",
  },
  {
    id: "oral_represion",
    temas: ["represion"],
    consigna:
      "Explicá la represión: sus dos tiempos, su condición, y qué pasa con la representación y con el afecto.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "La condición: la satisfacción produciría displacer",
        desarrollo:
          "No se reprime lo desagradable sin más: se reprime aquello cuya satisfacción sería placentera en sí misma pero inconciliable con otras exigencias. Sin ese conflicto no hay represión.",
      },
      {
        punto: "Represión primaria (Urverdrängung)",
        desarrollo:
          "Es el primer tiempo: a la representación se le rehúsa la admisión en la conciencia. Con eso se funda el inconsciente y queda establecida una fijación.",
      },
      {
        punto: "Represión propiamente dicha: esfuerzo de dar caza",
        desarrollo:
          "Segundo tiempo: recae sobre los retoños y las asociaciones de lo primariamente reprimido. Actúa desde arriba (el yo) y desde abajo (la atracción de lo ya reprimido).",
      },
      {
        punto: "Es móvil y cuesta energía permanente",
        desarrollo:
          "No es un archivo cerrado: hay que sostenerla con un gasto continuo (contrainvestidura). Por eso el cansancio y por eso puede fracasar.",
      },
      {
        punto: "Destinos separados: representación y afecto",
        desarrollo:
          "La representación se somete a la represión; el afecto tiene su propio destino, y puede volver mudado (angustia), desplazado o suprimido. Que se separen es lo que explica que el síntoma parezca no tener sentido.",
      },
      {
        punto: "Retorno y formaciones sustitutivas",
        desarrollo:
          "La represión fracasa siempre en algún grado, y ese fracaso es el síntoma.",
      },
    ],
    repregunta:
      "En 1926 Freud dice que la angustia causa la represión, y no al revés. ¿Cómo queda este texto de 1915 después de ese giro?",
  },
  {
    id: "oral_inconciente",
    temas: ["inconciente"],
    consigna:
      "Desarrollá las tres acepciones de lo inconsciente y las características del sistema Icc.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Descriptivo: lo que no está en la conciencia ahora",
        desarrollo:
          "Es la acepción más débil: incluye lo latente, que puede volverse conciente sin más. Ahí entra el preconsciente.",
      },
      {
        punto: "Dinámico: lo que no puede acceder porque hay una fuerza que lo impide",
        desarrollo:
          "Acá aparece la represión: no es que no esté a mano, es que hay un trabajo activo para que no llegue.",
      },
      {
        punto: "Sistemático (o tópico): un lugar con leyes propias",
        desarrollo:
          "Es el paso decisivo: el inconsciente no es un adjetivo de las representaciones, es un sistema con reglas distintas de las de la conciencia.",
      },
      {
        punto: "Las características del sistema Icc",
        desarrollo:
          "Ausencia de contradicción, proceso primario (desplazamiento y condensación), atemporalidad, y sustitución de la realidad exterior por la psíquica.",
      },
      {
        punto: "Representación-cosa y representación-palabra",
        desarrollo:
          "El Icc tiene solo representaciones-cosa. La conciencia agrega la palabra. Por eso hacer conciente no es 'darse cuenta' sino ligar a la palabra.",
      },
      {
        punto: "Censura y comercio entre sistemas",
        desarrollo:
          "Los sistemas no están aislados: hay tráfico y hay una censura en el pasaje. El síntoma y el sueño son productos de ese tráfico.",
      },
    ],
    repregunta:
      "Si la conciencia agrega la representación-palabra, ¿qué implica eso para lo que se hace en un análisis?",
  },
  {
    id: "oral_narcisismo",
    temas: ["narcisismo"],
    consigna:
      "Explicá por qué Freud necesita introducir el narcisismo y qué cambia en la teoría de la libido.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "El problema que lo empuja: las psicosis",
        desarrollo:
          "En la esquizofrenia hay retracción de la libido del mundo, pero no aparece dirigida a otro objeto. ¿Dónde fue? Si la libido puede tomar al yo como objeto, se explica.",
      },
      {
        punto: "El yo como reservorio: libido yoica y de objeto son vasos comunicantes",
        desarrollo:
          "Cuanto más se invierte en el objeto, menos queda para el yo, y al revés. El enamoramiento empobrece al yo.",
      },
      {
        punto: "Narcisismo primario y secundario",
        desarrollo:
          "El primario es un estado originario donde toda la libido está en el yo. El secundario es el retorno de la libido al yo después de haber estado en los objetos.",
      },
      {
        punto: "Los dos tipos de elección de objeto",
        desarrollo:
          "Por apuntalamiento (según el modelo de quien alimentó y cuidó) y narcisista (según lo que uno es, fue, quisiera ser, o la persona que fue parte de sí).",
      },
      {
        punto: "Yo ideal / ideal del yo y la autoestima",
        desarrollo:
          "El narcisismo perdido se desplaza a un ideal. La autoestima mide la distancia entre el yo y ese ideal. Ser amado la eleva; amar sin ser correspondido la baja.",
      },
    ],
    repregunta:
      "¿Cómo se conecta el ideal del yo de 1914 con el superyó de 1923? ¿Son lo mismo?",
  },
  {
    id: "oral_duelo",
    temas: ["duelo", "narcisismo"],
    consigna:
      "Comparé duelo y melancolía, y explicá por qué en la melancolía los autorreproches no son al yo.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Lo que comparten",
        desarrollo:
          "Ambos son reacciones a la pérdida: desinterés por el mundo, inhibición, pérdida de la capacidad de amar.",
      },
      {
        punto: "La diferencia decisiva: el empobrecimiento del yo",
        desarrollo:
          "En el duelo el mundo se volvió pobre; en la melancolía es el yo el que se volvió pobre. Aparecen la autodenigración y la espera de castigo, que en el duelo no están.",
      },
      {
        punto: "En el duelo se sabe qué se perdió; en la melancolía no",
        desarrollo:
          "La pérdida melancólica puede ser ideal o inconsciente. La persona sabe a quién perdió pero no qué perdió con esa persona.",
      },
      {
        punto: "Los autorreproches son reproches al objeto",
        desarrollo:
          "Si uno escucha las quejas, no encajan con la persona que las dice: encajan con el objeto perdido. El reproche se dirigió al objeto y se volvió sobre el yo.",
      },
      {
        punto: "Elección narcisista + identificación regrediente",
        desarrollo:
          "La libido de objeto se retira al yo y ahí se identifica con el objeto abandonado. El objeto no se resigna: se lo incorpora. Por eso el yo puede ser tratado como el objeto.",
      },
      {
        punto: "Ambivalencia y manía",
        desarrollo:
          "El odio que había hacia el objeto queda ahora dirigido al yo. La manía es el otro lado: el yo triunfa sobre el objeto.",
      },
    ],
    repregunta:
      "'El objeto no se resigna, se lo incorpora'. ¿Qué relación tiene eso con el yo como precipitado de identificaciones de 1923?",
  },
  {
    id: "oral_masalla",
    temas: ["masalla"],
    consigna:
      "Explicá qué hechos obligan a Freud a ir más allá del principio de placer y a qué conclusión llega.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "El problema: hay repeticiones que no traen placer",
        desarrollo:
          "Si el aparato se rige por el principio de placer, no debería repetir lo displacentero. Y lo hace.",
      },
      {
        punto: "Los hechos que no encajan",
        desarrollo:
          "La neurosis traumática y sus sueños que repiten el accidente; la reacción terapéutica negativa en el análisis; el destino que parece repetirse.",
      },
      {
        punto: "El fort-da",
        desarrollo:
          "El nieto repite la desaparición de la madre, que es lo desagradable. Freud propone que al hacerlo pasa de padecer pasivamente a hacer activamente: dominio de la situación.",
      },
      {
        punto: "Compulsión de repetición",
        desarrollo:
          "Hay una tendencia a repetir que es más originaria y más elemental que el principio de placer y puede ir en contra de él.",
      },
      {
        punto: "Pulsión de muerte",
        desarrollo:
          "Todo lo pulsional es conservador: tiende a restablecer un estado anterior. Llevado al límite, ese estado anterior es lo inanimado. De ahí la pulsión de muerte, y Eros como su contraparte.",
      },
      {
        punto: "El destino de la agresión",
        desarrollo:
          "Parte de la pulsión de muerte se desvía hacia afuera como agresión. Esto queda abierto acá y se cobra en El malestar en la cultura.",
      },
    ],
    repregunta:
      "El fort-da también podría leerse como el niño jugando y nada más. ¿Qué hace que Freud lo lea como compulsión de repetición?",
  },
  {
    id: "oral_yoello",
    temas: ["yo_ello"],
    consigna:
      "Explicá por qué hace falta la segunda tópica y desarrollá las tres instancias.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Por qué la primera tópica no alcanza",
        desarrollo:
          "Se descubre que hay resistencias inconscientes: el yo, que era la instancia de la conciencia, hace cosas que no sabe. Si el yo mismo es en parte inconsciente, conciente/inconsciente ya no puede ser el eje que ordena.",
      },
      {
        punto: "El ello",
        desarrollo:
          "Lo pulsional, sin contradicción ni tiempo ni moral. Es el polo de donde el yo saca su energía.",
      },
      {
        punto: "El yo: una parte diferenciada del ello por contacto con la realidad",
        desarrollo:
          "No es soberano: es un jinete que muchas veces conduce al caballo donde el caballo quiere ir. Sirve a tres amos.",
      },
      {
        punto: "El superyó",
        desarrollo:
          "Heredero del complejo de Edipo. Es a la vez ideal y agencia crítica, y su severidad puede ser cruel: ahí está la culpa inconsciente.",
      },
      {
        punto: "El yo como precipitado de identificaciones",
        desarrollo:
          "El carácter se forma con las marcas de los objetos abandonados. Lo que fuimos perdiendo nos fue formando.",
      },
      {
        punto: "El yo no es amo en su propia casa",
        desarrollo:
          "Es la consecuencia ética y clínica: el descentramiento del sujeto.",
      },
    ],
    repregunta:
      "Si el superyó hereda el Edipo, ¿por qué Freud dice que puede ser MÁS severo que los padres reales?",
  },
  {
    id: "oral_edipo",
    temas: ["edipo"],
    consigna:
      "Desarrollá el complejo de Edipo y su sepultamiento, marcando la asimetría entre el varón y la niña.",
    minutos: 4,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Primado del falo: una sola clase de genital para los dos sexos",
        desarrollo:
          "En la organización genital infantil no hay masculino/femenino todavía, hay fálico/castrado. Es una teoría infantil, no un dato anatómico.",
      },
      {
        punto: "El complejo de castración",
        desarrollo:
          "La amenaza sola no alcanza: hace falta la percepción de que hay quien no tiene. Ahí la amenaza se vuelve creíble y opera.",
      },
      {
        punto: "En el varón: la castración sepulta el Edipo",
        desarrollo:
          "La angustia de castración hace que el varón resigne las investiduras de objeto. Se sustituyen por identificaciones, y de ahí sale el superyó.",
      },
      {
        punto: "En la niña: la castración INTRODUCE al Edipo",
        desarrollo:
          "El orden se invierte. La niña se vuelve al padre a partir de la constatación de la falta, con la ecuación pene-hijo. La amenaza que en el varón empuja hacia afuera, en la niña empuja hacia adentro.",
      },
      {
        punto: "Consecuencia sobre el superyó",
        desarrollo:
          "Como en la niña falta el motivo que en el varón fuerza el sepultamiento, el Edipo puede quedar más tiempo y el superyó se forma en otras condiciones. Este punto es discutible y conviene decirlo situado en 1925.",
      },
      {
        punto: "Del Edipo a la cultura",
        desarrollo:
          "El superyó como heredero del Edipo es el puente hacia El malestar: lo que en el individuo es culpa, en la cultura es dominio de la agresión.",
      },
    ],
    repregunta:
      "Esa conclusión sobre el superyó de la niña recibió muchísima crítica posterior. ¿Cómo la sostendrías o la relativizarías sin dejar de dar cuenta del texto?",
  },
  {
    id: "oral_angustia",
    temas: ["angustia"],
    consigna:
      "Explicá el giro de 1926 sobre la angustia y qué se ordena distinto a partir de ahí.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "El giro: la angustia causa la represión",
        desarrollo:
          "Antes la angustia era el destino del afecto reprimido: primero represión, después angustia. Ahora es al revés: el yo se angustia ante un peligro y por eso reprime. La angustia es señal, no producto.",
      },
      {
        punto: "Angustia automática y angustia señal",
        desarrollo:
          "La automática es la respuesta desbordada ante una situación traumática (el modelo es el nacimiento). La señal es una reproducción atenuada, anticipatoria, que el yo produce para evitar el desborde.",
      },
      {
        punto: "El yo es la única sede de la angustia",
        desarrollo:
          "El ello no se angustia: no tiene con qué anticipar. Angustiarse requiere un yo que registre un peligro.",
      },
      {
        punto: "La serie de situaciones de peligro",
        desarrollo:
          "Pérdida del objeto, pérdida del amor del objeto, castración, y castigo del superyó. Es una serie ordenada por la historia del sujeto, y cada término conserva algo del anterior.",
      },
      {
        punto: "Síntoma e inhibición",
        desarrollo:
          "El síntoma es un sustituto de la satisfacción impedida; la inhibición es una restricción de función del yo, sin formación sustitutiva.",
      },
      {
        punto: "La defensa vuelve como género",
        desarrollo:
          "Freud recupera el término 'defensa' de sus primeros trabajos: la represión es una entre varias defensas. Cierra un círculo de treinta años.",
      },
    ],
    repregunta:
      "Si la angustia es señal ante un peligro, ¿de qué peligro se trata en un ataque de angustia donde la persona dice que no hay ningún motivo?",
  },
  {
    id: "oral_malestar",
    temas: ["malestar"],
    consigna:
      "Explicá por qué para Freud la cultura es fuente de sufrimiento y a qué llama sentimiento de culpa.",
    minutos: 3,
    tipo: "desarrollo",
    puntos: [
      {
        punto: "Las tres fuentes de sufrimiento",
        desarrollo:
          "El cuerpo, el mundo exterior, y los vínculos con los otros. La tercera es la que más duele y la que la cultura no resuelve.",
      },
      {
        punto: "La felicidad no es un programa realizable",
        desarrollo:
          "El plan del principio de placer es irrealizable: estamos organizados para el alivio, no para el goce sostenido.",
      },
      {
        punto: "La cultura exige renuncia pulsional",
        desarrollo:
          "Protege del sufrimiento de dos frentes pero cobra un precio: restringe la sexualidad y sobre todo la agresión.",
      },
      {
        punto: "El destino de la agresión: vuelve sobre el yo",
        desarrollo:
          "La agresión que no puede salir se interioriza y va a parar al superyó, que la ejerce contra el yo. La cultura domina la agresión debilitando al individuo desde dentro.",
      },
      {
        punto: "El sentimiento de culpa es el problema central",
        desarrollo:
          "No hace falta cometer nada: basta la intención. Y cuanto más se renuncia, más severo se vuelve el superyó. Es una trampa: la virtud no calma la culpa, la alimenta.",
      },
      {
        punto: "El superyó cultural y el mandamiento imposible",
        desarrollo:
          "'Amarás a tu prójimo como a ti mismo' es imposible de cumplir, y por eso produce culpa a escala colectiva.",
      },
    ],
    repregunta:
      "¿Por qué el que más renuncia se siente más culpable? Explicá esa paradoja como si tuvieras que convencer a alguien que la escucha por primera vez.",
  },

  // ============================================================
  // ARTICULACIONES — el tipo de pregunta que más pesa en un final
  // ============================================================
  {
    id: "oral_art_dos_angustias",
    temas: ["angustia", "represion"],
    consigna:
      "Poné a conversar La represión (1915) con Inhibición, síntoma y angustia (1926): ¿qué se cae, qué se conserva y qué se reordena?",
    minutos: 4,
    tipo: "articulacion",
    puntos: [
      {
        punto: "Nombrar el orden de cada texto sin mezclarlos",
        desarrollo:
          "En 1915: represión → el afecto se muda en angustia. En 1926: peligro → angustia señal → represión. Lo primero que el tribunal escucha es si podés sostener los dos órdenes sin confundirlos.",
      },
      {
        punto: "Qué se conserva",
        desarrollo:
          "Sigue habiendo conflicto, sigue habiendo represión, y sigue habiendo destinos separados para representación y afecto. El edificio no se derrumba.",
      },
      {
        punto: "Qué se reordena",
        desarrollo:
          "La causalidad. La angustia deja de ser efecto y pasa a ser causa. Y con eso el yo pasa a tener un papel activo que en 1915 estaba más difuso.",
      },
      {
        punto: "Qué gana la clínica con el cambio",
        desarrollo:
          "Si la angustia es señal, hay algo que se puede leer: ante qué peligro. Eso vuelve interpretable lo que antes era un residuo energético.",
      },
      {
        punto: "El movimiento de la obra, no la corrección de un error",
        desarrollo:
          "Conviene decir que Freud reformula, no que se equivocó. El texto de 1915 es la condición de posibilidad del de 1926.",
      },
    ],
    repregunta:
      "¿Y el concepto de defensa? Aparece en 1894, desaparece, y vuelve en 1926. ¿Qué dice ese recorrido sobre cómo trabaja Freud?",
  },
  {
    id: "oral_art_dos_topicas",
    temas: ["inconciente", "yo_ello"],
    consigna:
      "Explicá el pasaje de la primera a la segunda tópica: qué problema resuelve y qué pierde en el camino.",
    minutos: 4,
    tipo: "articulacion",
    puntos: [
      {
        punto: "El criterio de cada tópica",
        desarrollo:
          "La primera ordena por la relación con la conciencia (Icc/Prcc/Cc). La segunda ordena por instancias y funciones (ello/yo/superyó). No son dos mapas del mismo territorio con distinto dibujo: cambia el criterio.",
      },
      {
        punto: "El problema que fuerza el cambio",
        desarrollo:
          "Resistencias inconscientes y culpa inconsciente. Si el yo resiste sin saberlo y se castiga sin saberlo, ubicar al yo del lado de la conciencia deja de funcionar.",
      },
      {
        punto: "Qué se gana",
        desarrollo:
          "Se puede pensar el conflicto entre instancias, la identificación como formadora del yo, y la clínica de la culpa. Se gana el carácter.",
      },
      {
        punto: "Qué se pierde o se vuelve borroso",
        desarrollo:
          "La precisión sobre la censura y sobre el pasaje entre sistemas. Lo inconsciente pasa a ser una cualidad de las tres instancias y deja de tener el estatuto de lugar con leyes propias.",
      },
      {
        punto: "Conclusión: la segunda no anula la primera",
        desarrollo:
          "Freud las usa juntas. Decir esto explícitamente evita el error más común, que es hablar como si la segunda hubiera reemplazado a la primera.",
      },
    ],
    repregunta:
      "Si lo inconsciente pasa a ser una cualidad y no un lugar, ¿qué pasa con el proceso primario? ¿Dónde queda?",
  },
  {
    id: "oral_art_objeto",
    temas: ["sexualidad", "pulsiones", "duelo"],
    consigna:
      "Seguí el recorrido del objeto en la obra de Freud: de los Tres ensayos a Duelo y melancolía.",
    minutos: 4,
    tipo: "articulacion",
    puntos: [
      {
        punto: "1905: el objeto no viene dado",
        desarrollo:
          "La pulsión está desasida del objeto. El objeto se suelda por la historia, y el hallazgo es un reencuentro con el objeto perdido de la primera satisfacción.",
      },
      {
        punto: "1915: el objeto es lo más contingente de la pulsión",
        desarrollo:
          "Se formaliza: de las cuatro características, la que más varía es el objeto. Puede cambiar cuantas veces sea necesario.",
      },
      {
        punto: "1914: el objeto puede ser el yo mismo",
        desarrollo:
          "El narcisismo agrega que el yo puede ser tomado como objeto, y con eso aparecen las elecciones narcisistas.",
      },
      {
        punto: "1917: el objeto perdido no se va, se incorpora",
        desarrollo:
          "En la melancolía la libido no busca otro objeto: se retira al yo y se identifica con el abandonado. El objeto pasa a estar DENTRO.",
      },
      {
        punto: "1923: y eso constituye el yo",
        desarrollo:
          "Lo que en la melancolía era patológico se generaliza: el yo es un precipitado de identificaciones con objetos resignados. El recorrido termina mostrando que el objeto no es algo que el sujeto tiene enfrente, es algo de lo que está hecho.",
      },
    ],
    repregunta:
      "Si el yo está hecho de objetos perdidos, ¿en qué sentido puede decirse que perder a alguien nos cambia y no solo nos entristece?",
  },
  {
    id: "oral_art_culpa",
    temas: ["malestar", "yo_ello", "edipo"],
    consigna:
      "Reconstruí el recorrido de la culpa: del Edipo al superyó, y del superyó al malestar en la cultura.",
    minutos: 4,
    tipo: "articulacion",
    puntos: [
      {
        punto: "El punto de partida es el Edipo y la castración",
        desarrollo:
          "El sepultamiento del Edipo deja como saldo identificaciones, y de ahí el superyó como heredero.",
      },
      {
        punto: "El superyó no es solo prohibición: también es ideal",
        desarrollo:
          "Manda y mide. Su severidad no viene solo de los padres reales: hereda también la agresión propia del sujeto, y por eso puede ser más cruel que ellos.",
      },
      {
        punto: "La culpa inconsciente y la necesidad de castigo",
        desarrollo:
          "En 1923 aparece la clínica: hay quien empeora cuando el análisis avanza, porque mejorar sería sustraerse al castigo. Reacción terapéutica negativa.",
      },
      {
        punto: "1930: el mismo mecanismo, a escala de la cultura",
        desarrollo:
          "La cultura exige renunciar a la agresión; la agresión vuelve sobre el yo vía superyó; el resultado es culpa. Cuanto más se renuncia, más severo se vuelve.",
      },
      {
        punto: "La conclusión pesimista, y por qué no es solo pesimismo",
        desarrollo:
          "No hay solución: el malestar es estructural, no un defecto de organización social a corregir. Pero nombrar el mecanismo permite no confundir la culpa con una prueba de haber hecho algo mal.",
      },
    ],
    repregunta:
      "¿Se puede leer El malestar en la cultura como aplicación de Más allá del principio de placer? ¿Qué autoriza esa lectura y qué la limita?",
  },
]
