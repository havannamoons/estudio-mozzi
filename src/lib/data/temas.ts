import type { TemaContenido } from "@/lib/types"

const TEMAS_RAW: TemaContenido[] = [
  // ---------------------------------------------------------
  // PRÁCTICOS 1 a 3
  // ---------------------------------------------------------
  {
    id: "p1_3",
    practico: "Prácticos 1 a 3",
    titulo: "El conflicto psíquico y la entrada del inconsciente",
    subtitulo:
      "Defensa · neuropsicosis · retorno de lo reprimido · temporalidad retroactiva",
    teoria: [
      {
        titulo: "La defensa anticipa la producción del inconsciente",
        contenido: `<p>En los textos de los años 1894-1896, antes incluso de tener formulado el concepto de inconsciente como sistema, Freud introduce algo decisivo: la <strong>defensa</strong>. Una representación incompatible con el yo es rechazada activamente. No es olvido, no es debilidad: es una operación <em>activa</em>.</p><p>Lo que esa defensa produce es lo que más tarde se llamará inconsciente: un lugar psíquico al que el yo arroja lo que no puede integrar. Por eso decimos que <strong>la defensa anticipa la producción conceptual del inconsciente</strong>: primero aparece la operación, después la teoría del lugar.</p>`,
        clinico:
          "Histeria de defensa: forma de histeria en la que el síntoma se forma específicamente por la defensa contra una representación incompatible. Distinta de la histeria de retención o de la hipnoide.",
      },
      {
        titulo: "Las neuropsicosis de defensa (1894 y 1896)",
        contenido: `<p>Bajo el nombre <strong>neuropsicosis de defensa</strong> Freud agrupa diferentes cuadros que comparten un mecanismo común: la defensa frente a una representación incompatible. Lo que varía es el <em>destino</em> del afecto desligado:</p><ul><li><strong>Histeria de conversión</strong>: el afecto se traduce en inervación somática → síntoma corporal.</li><li><strong>Neurosis obsesiva</strong>: el afecto se desplaza a otra representación, generalmente nimia, que se vuelve obsesiva.</li><li><strong>Paranoia / psicosis alucinatoria</strong>: el afecto reaparece como reproche venido de afuera (proyección).</li></ul><p>El mecanismo es uno; la patología, el destino del afecto.</p>`,
      },
      {
        titulo: "Retorno de lo reprimido y transacción",
        contenido: `<p>Lo reprimido no desaparece — <strong>retorna</strong>. Pero no vuelve igual: vuelve <em>deformado</em>. El síntoma es el lugar de ese retorno.</p><p>Freud usa el término <strong>transacción</strong>: el síntoma es un compromiso entre dos fuerzas — la defensa que rechaza, y lo reprimido que pugna por volver. Ninguna gana del todo. El síntoma satisface a las dos a medias: a la defensa, porque el contenido no se reconoce; a lo reprimido, porque algo de él se expresa.</p>`,
      },
      {
        titulo: "Fracaso de la defensa y compulsión del síntoma",
        contenido: `<p>La defensa <strong>fracasa</strong>: no logra mantener cerrada la puerta. Lo reprimido empuja, encuentra una vía, se expresa como síntoma. Por eso decimos que el síntoma es <em>fracaso de la defensa</em>, no su éxito.</p><p>Y porque la defensa fracasa, el síntoma tiene un carácter <strong>compulsivo</strong>: el sujeto no lo elige, no lo controla, no puede simplemente decidir no tenerlo. Es una formación impuesta al yo por el retorno del material reprimido.</p>`,
      },
      {
        titulo: "Principio de constancia",
        contenido: `<p>El aparato psíquico tiende a mantener el monto de excitación en el nivel más bajo posible o constante. Tomado de la física, este principio se vuelve clave para entender por qué la defensa <em>no puede</em> simplemente eliminar el afecto: la cantidad debe ir a alguna parte.</p><p>De ahí los distintos destinos del afecto en cada neuropsicosis (conversión, desplazamiento, proyección): siempre hay tramitación, nunca evaporación.</p>`,
      },
      {
        titulo: "Primera fórmula de la neurosis (1896)",
        contenido: `<p>Freud enuncia una primera <strong>fórmula del desarrollo de una neurosis</strong>:</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">defensa → represión → retorno de lo reprimido (síntoma)</p><p>Tres tiempos lógicos. La defensa expulsa. La represión mantiene la expulsión. El retorno produce el síntoma como vía sustitutiva. La fórmula sirve para múltiples cuadros — lo que cambia es <em>cómo</em> retorna lo reprimido en cada uno.</p>`,
      },
      {
        titulo: "Temporalidad retroactiva: Emma",
        contenido: `<p>El caso <strong>Emma</strong> (Proyecto de psicología, 1895) muestra que la temporalidad del aparato no es cronológica. Síntoma: no puede entrar sola a las tiendas. En el análisis aparecen dos escenas:</p><ul><li><strong>Escena 1</strong> (12 años): entra a un negocio, dos empleados se ríen, ella se siente mirada y huye.</li><li><strong>Escena 2</strong> (8 años): un comerciante la toca por encima del vestido. En el momento, ella no entiende el sentido sexual.</li></ul><p>El trauma no está en la escena 2 (que pasó "sin pasar"), ni en la escena 1 (aparentemente trivial). Está en la <strong>resignificación</strong> retroactiva: la pubertad le da a la escena 2 un sentido sexual que no tenía. Recién entonces la escena se vuelve traumática, y opera la represión. Lo reprimido vuelve en la escena 1.</p><p>Concepto técnico: <strong>Nachträglichkeit</strong>, efecto retroactivo, posterioridad. El sentido se construye desde un después.</p>`,
        clinico:
          'Cäcilie M.: en este caso (Estudios sobre la histeria), Freud muestra cómo las expresiones verbales (modismos, metáforas) tomadas <em>al pie de la letra</em> se convierten en síntomas somáticos. La "bofetada" que recibe en una escena conflictiva queda inscripta como dolor real en la cara. Simbolización en el cuerpo.',
      },
    ],
    biblio:
      'Freud (1894) "Las neuropsicosis de defensa", III, 41-61. Freud (1896) "Nuevas puntualizaciones sobre las neuropsicosis de defensa", III, 163, 170-171. Freud (1950 [1895]) "Manuscrito K"; "Proyecto de psicología" (caso Emma), I. Freud (1893-1895) Estudios sobre la histeria (Cäcilie M.), II.',
    tipParcial:
      "Pregunta típica: articular la <strong>primera fórmula de la neurosis</strong> con el <strong>caso Emma</strong> mostrando cómo el efecto retroactivo (Nachträglichkeit) explica por qué hace falta una segunda escena para que opere la represión. Tener a mano: distinción defensa / represión / retorno; tres destinos del afecto; <strong>Cäcilie M.</strong> como ejemplo de simbolización somática del lenguaje.",
    preguntas: [
      {
        q: "¿En qué sentido la defensa 'anticipa la producción conceptual del inconsciente'?",
        opciones: [
          "Porque la operación de la defensa (expulsar lo incompatible) hace falta antes de que pueda formularse el inconsciente como un lugar psíquico al que se expulsa.",
          "Porque la defensa es el inconsciente.",
          "Porque Freud no creía en el inconsciente al principio.",
          "Porque la defensa es consciente.",
        ],
        correcta: 0,
        exp: "Primero aparece la operación clínica (la defensa, observable en la histeria), después la conceptualización del lugar (el inconsciente como sistema). La defensa, en los textos de 1894-1896, ya implica un 'a dónde' va lo expulsado — y eso es lo que después se teoriza como inconsciente.",
      },
      {
        q: "¿Qué tienen en común las distintas neuropsicosis de defensa?",
        opciones: [
          "Todas son histéricas.",
          "El mecanismo de la defensa contra una representación incompatible — lo que varía es el destino del afecto (conversión, desplazamiento, proyección).",
          "Todas son hereditarias.",
          "Todas se curan con hipnosis.",
        ],
        correcta: 1,
        exp: "El mecanismo de la defensa es común; las patologías difieren por cómo se distribuye el afecto desligado de la representación. Histeria → conversión; obsesiva → desplazamiento; paranoia → proyección.",
      },
      {
        q: "¿Qué es la 'transacción' en la formación del síntoma?",
        opciones: [
          "El reemplazo total de la representación reprimida por una sustitutiva, sin retorno alguno del material reprimido.",
          "Un compromiso entre la defensa que rechaza y lo reprimido que pugna por volver: el síntoma satisface a medias a las dos fuerzas y por eso es opaco para el sujeto.",
          "La conversión directa del afecto en síntoma somático, sin participación de la representación rechazada.",
          "El equilibrio consciente entre el yo y la realidad externa que evita el síntoma.",
        ],
        correcta: 1,
        exp: "El síntoma es transacción: contiene algo de la defensa (el contenido no se reconoce) y algo de lo reprimido (algo se expresa). Si fuera puro éxito de la defensa, no habría síntoma; si fuera retorno puro, no habría disfraz. Por eso el síntoma es compromiso opaco.",
      },
      {
        q: "Decir que el síntoma es 'fracaso de la defensa' implica que:",
        opciones: [
          "La defensa nunca operó: si lo hubiera hecho, no habría síntoma.",
          "El paciente carece de defensas, lo que vuelve patológica toda representación (modelo del déficit, janetiano).",
          "La defensa operó pero lo reprimido encontró una vía sustitutiva para retornar; el síntoma es ese retorno deformado, no la ausencia de defensa.",
          "La represión es absoluta y por eso el síntoma queda fijado para siempre, sin posibilidad de elaboración.",
        ],
        correcta: 2,
        exp: "Sutileza típica de parcial: 'fracaso' NO significa 'ausencia'. La defensa operó (reprimió la representación) pero no logró cerrar la puerta del todo — lo reprimido encontró una vía sustitutiva y volvió disfrazado como síntoma. Confundirlo con 'déficit defensivo' es caer en el modelo janetiano que Freud justamente rompe.",
      },
      {
        q: "La primera fórmula freudiana del desarrollo de una neurosis (1896) es:",
        opciones: [
          "Defensa → represión → retorno de lo reprimido (síntoma).",
          "Síntoma → análisis → cura.",
          "Trauma → fijación → regresión.",
          "Pulsión → represión → sublimación.",
        ],
        correcta: 0,
        exp: "Tres tiempos lógicos: defensa (expulsión), represión (mantenimiento de la expulsión), retorno (síntoma como vía sustitutiva). La fórmula sirve para varios cuadros — lo que varía es cómo retorna lo reprimido.",
      },
      {
        q: "¿Qué es la temporalidad retroactiva (Nachträglichkeit) en el caso Emma?",
        opciones: [
          "Que Emma logró recordar de adulta una escena traumática infantil que había olvidado, y ese recuerdo es lo que produce el síntoma.",
          "Que la primera escena (8 años, abuso) no era traumática por sí misma; recién en la pubertad una segunda escena le otorga sentido sexual retroactivo, y solo entonces opera la represión.",
          "Que el trauma actúa con un retraso temporal uniforme y predecible, igual para todos los sujetos según el desarrollo cronológico.",
          "Que la maduración puberal cura el trauma infantil al darle al sujeto recursos psíquicos para integrarlo conscientemente.",
        ],
        correcta: 1,
        exp: "Lo decisivo no es cronológico. La escena infantil quedó inscripta sin sentido sexual. Una escena posterior la resignifica retroactivamente, le confiere sentido — y solo entonces puede ser reprimida. El sentido se construye desde un después. Esa es la lógica del Nachträglichkeit.",
      },
      {
        q: "En el caso Cäcilie M., ¿qué muestra la formación del síntoma?",
        opciones: [
          "Que el síntoma se reduce a un problema neurológico.",
          "Que las mujeres son más histéricas.",
          "Que la hipnosis cura todos los síntomas.",
          "Que las expresiones verbales (metáforas, modismos) tomadas al pie de la letra se inscriben como síntomas somáticos — simbolización en el cuerpo.",
        ],
        correcta: 3,
        exp: 'Cäcilie M. muestra cómo el lenguaje produce cuerpo: una expresión metafórica vivida en un contexto conflictivo (por ejemplo "una bofetada en la cara") se literaliza en un síntoma somático real. La simbolización no es solo psíquica, atraviesa el cuerpo.',
      },
      {
        q: "Articulación parcial: el caso Emma muestra que para la primera fórmula de la neurosis…",
        opciones: [
          "Basta con un único trauma en la infancia para producir el síntoma.",
          "La fórmula 'defensa → represión → retorno de lo reprimido' requiere dos escenas: una infantil sin sentido sexual y una segunda que retroactivamente le da ese sentido — solo entonces opera la defensa y se forma el síntoma.",
          "La defensa opera cronológicamente en el momento exacto del trauma.",
          "El síntoma se forma independientemente de cualquier escena.",
        ],
        correcta: 1,
        exp: "Este es un cruce típico de parcial: Emma muestra que la fórmula no se realiza linealmente. La escena 1 (8 años) queda inscripta sin sentido sexual; recién la escena 2 (pubertad) la resignifica y dispara la represión. El síntoma (escena 1 'recordada' como huida) es el retorno. Sin Nachträglichkeit, la fórmula no se cierra.",
      },
      {
        q: "Articulación P1-3 con P8: ¿qué relación une 'transacción' (síntoma como compromiso) con 'sobredeterminación' (sueño)?",
        opciones: [
          "Son conceptos sin relación: la transacción es del síntoma neurótico, la sobredeterminación pertenece al sueño normal.",
          "La sobredeterminación es una forma de transacción: un mismo elemento manifiesto (síntoma o sueño) condensa varias cadenas latentes; el compromiso opera entre la defensa y los múltiples materiales reprimidos que confluyen.",
          "La sobredeterminación contradice la transacción porque implica una sola causa para cada elemento.",
          "La transacción opera en la histeria; la sobredeterminación, exclusivamente en la neurosis obsesiva.",
        ],
        correcta: 1,
        exp: "Cruce clave: sueño y síntoma comparten lógica del proceso primario. La transacción muestra el compromiso entre defensa y reprimido; la sobredeterminación muestra cómo un elemento manifiesto reúne varios pensamientos latentes condensados. Son dos caras del mismo mecanismo formal en formaciones distintas del Icc.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICOS 4 a 5
  // ---------------------------------------------------------
  {
    id: "p4_5",
    practico: "Prácticos 4 a 5",
    titulo: "Formaciones del inconsciente: olvido de nombre propio y chiste",
    subtitulo: "Acto fallido · olvido y represión · técnica del chiste",
    teoria: [
      {
        titulo: "El acto fallido como formación del inconsciente",
        contenido: `<p>Los <strong>actos fallidos</strong> (olvidos, lapsus, trastrocar las palabras, equivocaciones) son aparentemente triviales. Para la mirada psicoanalítica, son <em>formaciones del inconsciente</em>: tienen la misma estructura que el síntoma y el sueño.</p><p>Lo que aparece como "error" es en realidad la <strong>realización</strong> de un propósito otro, inconsciente, que se imponen por sobre el propósito consciente. Donde el yo iba a decir A, el inconsciente hace decir B — y B revela algo verdadero.</p><p>Por eso el acto fallido es paradigmático: muestra que el inconsciente no está reservado a la patología grave, opera en la <em>vida cotidiana</em> de cualquiera.</p>`,
      },
      {
        titulo: "Olvido, represión y retorno de lo reprimido",
        contenido: `<p>El olvido de un nombre propio no es vacío: es <strong>sustitución</strong>. En lugar del nombre buscado aparecen otros nombres, "sustitutos", que no son aleatorios. Esos sustitutos son una pista: están conectados al nombre olvidado por desplazamientos asociativos.</p><p>Mecanismo:</p><ul><li>Una representación ligada al nombre buscado entra en conflicto y debe ser reprimida.</li><li>La represión arrastra al nombre mismo (por su asociación con la representación reprimida).</li><li>El retorno de lo reprimido se hace por vía de los nombres sustitutos, que son <em>formaciones de compromiso</em>.</li></ul><p>El olvido es así una <strong>formación del inconsciente</strong>, con su transacción y su retorno deformado, igual que el síntoma.</p>`,
      },
      {
        titulo: "Signorelli: análisis paradigmático del olvido",
        contenido: `<p>Freud relata su propio olvido del nombre del pintor italiano <strong>Signorelli</strong> (autor de los frescos de Orvieto) durante una conversación. En su lugar aparecen los nombres sustitutos <em>Botticelli</em> y <em>Boltraffio</em>.</p><p>El análisis muestra una red de asociaciones reprimidas, articuladas por:</p><ul><li>Una conversación anterior sobre los Turcos de Bosnia-Herzegovina (que aceptan estoicamente la muerte) — tema reprimido: la muerte.</li><li>Otra conversación, también reprimida, sobre la sexualidad como valor central — tema reprimido: la sexualidad.</li><li>Una noticia íntima sobre el suicidio de un paciente.</li></ul><p>La represión hace caer "Signor" (Señor → Herr → asociado a Herzegovina y a los temas reprimidos). Los sustitutos (<em>Bo</em>tticelli, <em>Bo</em>ltraffio) contienen fragmentos (Bo- de Bosnia, -elli de Signor<em>elli</em>, Traffio cercano a Trafoi donde Freud recibió la noticia del suicidio).</p><p>Lección técnica: el olvido funciona por <strong>desplazamiento</strong>; los sustitutos no son arbitrarios, están en la red asociativa de lo reprimido.</p>`,
        clinico:
          "Signorelli (Psicopatología de la vida cotidiana, cap. I): el caso princeps para mostrar el mecanismo del olvido de nombre propio como formación del inconsciente.",
      },
      {
        titulo: "La técnica del chiste",
        contenido: `<p>En <em>El chiste y su relación con lo inconciente</em> (1905), Freud propone algo notable: <strong>la técnica del chiste es la misma del sueño</strong>. Cambian las condiciones (vigilia, lazo social, búsqueda de placer) pero los mecanismos son los mismos.</p><p>Eso confirma una tesis general: las <strong>formaciones del inconsciente</strong> (sueño, síntoma, acto fallido, chiste) comparten estructura. Si la lógica del trabajo del sueño aparece también en el chiste, entonces no es propia del dormir: es propia del inconsciente como sistema.</p><p>Los dos mecanismos centrales que Freud analiza en la técnica del chiste son <strong>condensación con formación sustitutiva</strong> y <strong>desplazamiento</strong>.</p>`,
      },
      {
        titulo: "Condensación con formación sustitutiva: Familionario",
        contenido: `<p>Freud analiza un chiste de Heine donde el personaje dice haber sido tratado por Salomón Rothschild de manera <em>"famillonär"</em>. La palabra no existe en alemán — es una invención. Pero condensa dos palabras reales:</p><ul><li><strong>familiär</strong> (familiar, íntimo, sin formalidades).</li><li><strong>Millionär</strong> (millonario).</li></ul><p>El neologismo <strong>"familionär"</strong> (traducible como <em>familionario</em>) es una <strong>formación sustitutiva</strong>: una palabra inexistente reemplaza a la frase completa que diría la verdad reprimida ("me trató con la familiaridad que se puede tener cuando uno es un pobretón frente a un millonario").</p><p>Mecanismo idéntico al del sueño: dos representaciones se <strong>condensan</strong> en un único elemento manifiesto, que las representa a las dos a la vez. El chiste produce placer justamente por economizar el rodeo: condensa lo que tomaría párrafos en una sola palabra.</p>`,
        clinico:
          "Familionario (Heine, comentado por Freud, 1905): caso técnico de condensación con formación sustitutiva — el modelo paradigmático.",
      },
      {
        titulo: "Desplazamiento en el chiste",
        contenido: `<p>El segundo mecanismo es el <strong>desplazamiento</strong>: el acento de lo que se quiere decir se corre a otro elemento. Algo que en sí no es importante se vuelve el portador del sentido del chiste, mientras lo importante queda dicho de costado.</p><p>Es exactamente el mismo mecanismo que en el sueño: el desplazamiento permite burlar la censura. En el chiste cumple una función análoga — permite decir algo prohibido (sexual, agresivo, transgresor) en forma indirecta, y por eso el chiste produce placer.</p><p>Conclusión teórica importante: si los <em>mismos mecanismos</em> (condensación, desplazamiento) operan en el sueño, el síntoma, el lapsus, el olvido y el chiste, entonces el <strong>inconsciente tiene una lógica común</strong>. Esa lógica es lo que Freud llama proceso primario.</p>`,
      },
    ],
    biblio:
      'Freud (1901) "Psicopatología de la vida cotidiana" (cap. I: Olvido de nombres propios), VI, 9-15, 20 n.7. Freud (1905) "El chiste y su relación con lo inconciente" (cap. II: La técnica del chiste), VIII, 18-21 y 46-54.',
    tipParcial:
      "Pregunta típica: mostrar que los mecanismos del chiste (<strong>condensación con formación sustitutiva</strong> + <strong>desplazamiento</strong>) son los mismos del sueño, y a partir de ahí concluir que el proceso primario es el modo de funcionamiento del inconsciente como sistema. Tener Signorelli (red asociativa del olvido) y Familionario (neologismo por condensación) bien diferenciados como ejemplos técnicos.",
    preguntas: [
      {
        q: "¿Por qué el acto fallido es una formación del inconsciente?",
        opciones: [
          "Porque comparte la lógica del proceso primario con sueño, síntoma y chiste: un propósito inconsciente se realiza deformado al cruzarse con el consciente. Que opere en sujetos no patológicos demuestra que el Icc es estructura, no enfermedad.",
          "Porque su mecanismo es exclusivo de la vida cotidiana, distinto del que opera en el sueño o el síntoma.",
          "Porque indica un déficit transitorio de atención sin participación del inconsciente como sistema.",
          "Porque solo aparece en sujetos neuróticos y por eso funciona como indicador diagnóstico.",
        ],
        correcta: 0,
        exp: "Cruce clásico de parcial: si los mismos mecanismos (condensación, desplazamiento) operan en sueño, síntoma, lapsus, olvido y chiste, entonces no son propios de cada producción sino del SISTEMA inconsciente. Esa lógica común es el proceso primario. Por eso el acto fallido es universal y no patológico — el Icc es estructura, no patología.",
      },
      {
        q: "En el olvido de un nombre propio, los nombres sustitutos:",
        opciones: [
          "Son completamente aleatorios.",
          "No son aleatorios: están conectados al nombre olvidado por desplazamientos asociativos y son formaciones de compromiso del retorno de lo reprimido.",
          "Son siempre nombres de pacientes.",
          "Indican enfermedad mental.",
        ],
        correcta: 1,
        exp: "Los sustitutos pertenecen a la red asociativa del nombre reprimido. El olvido funciona por desplazamiento: el nombre buscado cae arrastrado por una represión vecina, y los sustitutos contienen fragmentos o conexiones con ese material reprimido. No hay arbitrariedad.",
      },
      {
        q: "En el análisis del olvido de 'Signorelli', los temas reprimidos eran:",
        opciones: [
          "Solo la sexualidad.",
          "Muerte y sexualidad (a partir de conversaciones previas reprimidas y de la noticia del suicidio de un paciente).",
          "El arte italiano.",
          "El idioma alemán.",
        ],
        correcta: 1,
        exp: 'En el análisis Freud rastrea conversaciones anteriores: los Turcos de Bosnia-Herzegovina (resignación frente a la muerte), la importancia de la sexualidad para esos pacientes, y la noticia (reprimida) del suicidio de un paciente. La represión de esos temas hace caer "Signor" y produce los sustitutos Botticelli y Boltraffio, que contienen fragmentos de la red reprimida.',
      },
      {
        q: '¿Qué mecanismo del trabajo del sueño aparece en el neologismo "famillonär" del chiste de Heine, y qué consecuencia teórica tiene?',
        opciones: [
          "Un desplazamiento puro: el acento se corre de una palabra a otra próxima sin condensar nada — los mecanismos del chiste serían distintos a los del sueño.",
          "Una elaboración secundaria que disfraza la verdad reprimida en forma narrativa coherente para el lazo social.",
          "Una manifestación exclusiva del lazo social: el chiste tiene técnica propia, no comparable con el sueño.",
          "Condensación con formación sustitutiva: 'familiär' + 'Millionär' confluyen en un neologismo único. Idéntico mecanismo al de la condensación onírica — prueba que sueño y chiste comparten la lógica del proceso primario.",
        ],
        correcta: 3,
        exp: "Cruce P4-5 con P8: la coincidencia de mecanismos (condensación + desplazamiento) entre chiste y sueño permite a Freud concluir que esos mecanismos no son propios del dormir — son propios del inconsciente como sistema. El neologismo 'famillonär' es el modelo paradigmático: dos palabras reales (familiär + Millionär) se condensan en una sustitutiva que representa a las dos.",
      },
      {
        q: "¿Cuál es la tesis general que Freud sostiene al mostrar que el chiste usa los mismos mecanismos que el sueño?",
        opciones: [
          "Que los chistes son sueños.",
          "Que los mecanismos (condensación, desplazamiento) no son propios del dormir sino del inconsciente como sistema — operan en todas las formaciones del inconsciente.",
          "Que el sueño es un chiste.",
          "Que los chistes solo los inventan los neuróticos.",
        ],
        correcta: 1,
        exp: 'Si la misma lógica aparece en sueño, síntoma, lapsus, olvido y chiste, entonces no es propia del dormir: es propia del inconsciente como sistema. Esa lógica común es lo que Freud llama proceso primario. El chiste es una "vía regia" alternativa al sueño para mostrarlo.',
      },
      {
        q: "El desplazamiento, tanto en el sueño como en el chiste, sirve para:",
        opciones: [
          "Cambiar de tema constantemente.",
          "Burlar la censura: el acento se corre del elemento importante a uno secundario, permitiendo decir algo prohibido en forma indirecta.",
          "Producir confusión.",
          "Repetir lo mismo.",
        ],
        correcta: 1,
        exp: 'En ambas formaciones el desplazamiento permite que lo prohibido pase la censura. Lo importante queda dicho "de costado", a través de algo aparentemente nimio. En el chiste, eso es justamente lo que produce placer: la satisfacción de decir algo agresivo, sexual o transgresor sin que parezca dicho.',
      },
      {
        q: "Articulación parcial: ¿qué permite concluir teóricamente la coincidencia de mecanismos entre sueño, síntoma, lapsus, olvido y chiste?",
        opciones: [
          "Que todos son fenómenos del dormir.",
          "Que estos mecanismos (condensación, desplazamiento) no son propios de cada producción puntual sino del inconsciente como sistema — definen el proceso primario.",
          "Que el lenguaje es siempre patológico.",
          "Que todos son síntomas neuróticos.",
        ],
        correcta: 1,
        exp: "La conclusión teórica decisiva: si la misma lógica formal aparece en producciones tan distintas (de la patología y de la vida cotidiana, del dormir y de la vigilia, del individuo aislado y del lazo social), no se trata de propiedades de cada producción sino de propiedades del sistema que las genera. Esa lógica común es el proceso primario, modo de funcionamiento del Icc.",
      },
      {
        q: "Si en una sesión un paciente olvida un apellido y en su lugar le vienen tres nombres distintos, ¿cómo debe leer eso el analista según Psicopatología de la vida cotidiana?",
        opciones: [
          "Como un fallo de la memoria sin relevancia clínica.",
          "Como un signo de demencia incipiente.",
          "Como una formación del inconsciente: los nombres sustitutos están en la red asociativa del nombre olvidado por desplazamiento, y conducen a un material reprimido.",
          "Como una excusa para cambiar de tema en la sesión.",
        ],
        correcta: 2,
        exp: "Lectura clínica directa del modelo Signorelli: los sustitutos no son ruido aleatorio sino el rastro de un trabajo de desplazamiento. Funcionan como vía de retorno parcial de lo reprimido. El analista no los descarta — los toma como puntos de acceso a la red asociativa que el olvido está protegiendo.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 6
  // ---------------------------------------------------------
  {
    id: "p6",
    practico: "Práctico 6",
    titulo: "Originalidad del descubrimiento freudiano",
    subtitulo: "Charcot · Janet · principio de constancia · escisión del yo",
    teoria: [
      {
        titulo: "Herencia: la enseñanza de Charcot",
        contenido: `<p>Freud estudia con <strong>Jean-Martin Charcot</strong> en la Salpêtrière (París, 1885-1886). Charcot, neurólogo, demostraba mediante <em>hipnosis</em> que la histeria podía inducirse y suprimirse psíquicamente. Esto refutaba dos prejuicios médicos: que la histeria era una afección orgánica del útero, y que era exclusivamente femenina.</p><p>Lo que Freud retiene de Charcot: el síntoma puede tener una <strong>causa psíquica</strong> y no neurológica. Pero ya en su lectura aparece un giro propio — lo que en Charcot era una <em>predisposición traumática-hereditaria</em>, en Freud se vuelve algo dinámico, un conflicto activo entre representaciones.</p>`,
        clinico: 'Demostración de la histeria masculina — refuta la etimología "histeria = útero".',
      },
      {
        titulo: "Diferencia con Janet: del déficit al conflicto",
        contenido: `<p><strong>Pierre Janet</strong> sostiene que la histeria deriva de una <em>debilidad psíquica congénita</em>: la conciencia no logra integrar todas las representaciones y algunas se disocian. Modelo del <strong>déficit</strong>.</p><p>Freud rompe con eso. No hay debilidad heredada ni degeneración. Hay <strong>conflicto</strong>: una representación incompatible con el yo es <em>activamente</em> rechazada. La escisión no es un defecto, es el resultado de una <strong>defensa</strong>. Pasaje del modelo del déficit al modelo del conflicto.</p>`,
      },
      {
        titulo: "Ruptura: reformulación de conceptos importados",
        contenido: `<p>Freud toma nociones de otras disciplinas y las reformula. No las aplica al pie de la letra — las usa como modelos provisorios y los altera al chocar con la clínica:</p><ul><li><strong>Biología</strong>: la pulsión no es un instinto biológico cerrado, tiene un objeto contingente.</li><li><strong>Física</strong>: el principio de constancia no se cumple sin más en el aparato psíquico — el deseo lo perturba.</li><li><strong>Filosofía</strong>: el sujeto no es la conciencia. El inconsciente trastorna la idea de sujeto autotransparente.</li></ul><p>Esa <strong>ruptura</strong> es lo "original" del descubrimiento: la clínica obliga a torcer cada concepto recibido.</p>`,
      },
      {
        titulo: "Principio de constancia",
        contenido: `<p>Postulado tomado de la física y reformulado: el aparato psíquico <strong>tiende a mantener el monto de excitación en el nivel más bajo posible</strong> o, al menos, constante.</p><p>Cuando irrumpe una cantidad de excitación que el aparato no puede tramitar, debe <em>descargarla</em>, <em>ligarla</em> o <em>desplazarla</em>. El síntoma puede leerse como un intento de tramitar ese excedente.</p><p>Este principio entra en tensión con otro: el del <strong>placer</strong>. El inconsciente no busca homeostasis — busca repetir una huella de satisfacción, aun a costa de aumentar tensión. Esa tensión interna entre constancia y placer es central para entender el aparato.</p>`,
      },
      {
        titulo: "Escisión del yo",
        contenido: `<p>En la histeria, una representación incompatible con el yo no se integra: se <strong>escinde</strong> y queda en un estado separado, no accesible a la conciencia. No es un olvido común — es la coexistencia de <em>dos grupos psíquicos</em> en el mismo sujeto.</p><p>Esta escisión es lo que más tarde Freud va a llamar el comienzo del <strong>inconsciente como sistema</strong>. No es algo descriptivo (lo que no es consciente ahora) sino algo dinámico (lo que el yo expulsa).</p>`,
        clinico:
          "Histeria traumática vs histeria común (no traumática): en la primera hay un evento puntual; en la segunda, lo decisivo es el conflicto entre la representación y el yo.",
      },
    ],
    biblio:
      'Freud (1893) "Sobre el mecanismo psíquico de fenómenos histéricos", III, 25-40. Breuer & Freud (1893-95) Estudios sobre la histeria.',
    tipParcial:
      "Pregunta típica: explicar la <strong>originalidad</strong> del descubrimiento freudiano articulando la herencia de Charcot, la ruptura con Janet (déficit → conflicto) y la reformulación de los conceptos importados de la biología/física/filosofía. Suele pedirse cómo el <strong>principio de constancia</strong> deja de ser ley física para volverse ley del aparato psíquico, y por qué eso ya introduce la noción de defensa.",
    preguntas: [
      {
        q: "¿En qué consiste la diferencia fundamental entre Freud y Janet respecto de la histeria?",
        opciones: [
          "Freud postula un conflicto activo entre representaciones; Janet ve una debilidad psíquica congénita.",
          "Janet usaba hipnosis y Freud nunca la usó.",
          "Freud trabajaba con hombres y Janet con mujeres exclusivamente.",
          "Janet creía que la histeria era orgánica, Freud que era hereditaria.",
        ],
        correcta: 0,
        exp: "Janet explica la histeria por una debilidad/desintegración psíquica heredada — modelo del déficit. Freud introduce el modelo del conflicto: hay una representación incompatible que el yo expulsa activamente. La defensa es activa, no es debilidad.",
      },
      {
        q: "¿Por qué decimos que Freud realiza una 'ruptura' con la biología, la física y la filosofía?",
        opciones: [
          "Porque las rechaza completamente y no usa ninguno de sus conceptos.",
          "Porque toma sus conceptos pero los reformula a la luz de la clínica, sin aplicarlos al pie de la letra.",
          "Porque sostiene que el psicoanálisis no necesita teoría.",
          "Porque inventa los conceptos sin ninguna referencia previa.",
        ],
        correcta: 1,
        exp: "Freud toma nociones de otras disciplinas (pulsión, principio de constancia, sujeto) pero las altera al chocar con lo que escucha en el diván. Por eso 'ruptura' no es rechazo absoluto sino reformulación crítica.",
      },
      {
        q: "¿Qué afirma el principio de constancia?",
        opciones: [
          "Que el aparato psíquico tiende a mantener el monto de excitación en el nivel más bajo o constante.",
          "Que los síntomas son siempre constantes en el tiempo.",
          "Que el inconsciente reprime de manera constante.",
          "Que la conciencia mantiene un nivel constante de atención.",
        ],
        correcta: 0,
        exp: "Principio tomado de la física y reformulado: el aparato busca minimizar (o mantener constante) la tensión. Cuando irrumpe una cantidad excesiva, debe ser tramitada. Pero ojo: este principio entra en conflicto con el principio de placer.",
      },
      {
        q: "La 'escisión del yo' en la histeria de defensa anticipa una noción central que aparece en IdS cap. VII. ¿Cuál y por qué?",
        opciones: [
          "Anticipa la represión secundaria post-edípica: la escisión es resultado del Edipo. (Anacrónico.)",
          "Anticipa la regresión tópica del sueño: la energía retrocede al polo perceptivo, igual que en la escisión.",
          "Anticipa el inconsciente como SISTEMA — el 'otro escenario': hay otro lugar psíquico al que el yo expulsa activamente lo incompatible, con leyes propias. La escisión deja de ser descriptiva (lo no-consciente) y se vuelve dinámica.",
          "Anticipa la sublimación como destino normal del afecto, sin patología.",
        ],
        correcta: 2,
        exp: "Articulación P6 con P9a: la escisión no es accidente ni déficit — es resultado de una operación activa de la defensa. Al postular un 'grupo representativo separado' que coexiste con el yo, Freud ya pone los rieles para lo que en 1900 conceptualiza como 'otro escenario': el inconsciente como sistema con leyes propias, ubicado en otro lugar del aparato.",
      },
      {
        q: "Charcot fue importante para Freud porque demostró que:",
        opciones: [
          "La histeria es siempre traumática.",
          "Toda neurosis se cura con hipnosis.",
          "La sexualidad infantil determina la histeria.",
          "El síntoma histérico puede tener una causa psíquica, no neurológica, e incluso en hombres.",
        ],
        correcta: 3,
        exp: "Charcot inducía y suprimía síntomas histéricos con hipnosis (origen psíquico) y demostró la histeria masculina (refuta el origen uterino). Freud retiene eso, pero después abandona la hipnosis.",
      },
      {
        q: "Articulación parcial: ¿cómo se relaciona la reformulación del principio de constancia con la idea de defensa?",
        opciones: [
          "El principio de constancia hace innecesaria la defensa: la tensión se descarga sola.",
          "Como el monto de afecto no puede evaporarse (constancia), debe ir a algún lado cuando una representación es rechazada — eso obliga a pensar la defensa como una operación con destinos distintos (conversión, desplazamiento, proyección).",
          "Constancia y defensa son sinónimos.",
          "La defensa rompe el principio de constancia y por eso causa enfermedad.",
        ],
        correcta: 1,
        exp: "Reformulado en términos psíquicos, el principio de constancia obliga a explicar adónde va el afecto desligado de la representación rechazada. Sin esa exigencia, la defensa podría pensarse como mera supresión. Con ella, debe pensarse como redistribución — y eso abre las distintas neuropsicosis (histeria, obsesiva, paranoia) como tres caminos del mismo afecto.",
      },
      {
        q: "Si un alumno dice que para Freud la histeria, igual que para Janet, se debe a una debilidad psíquica congénita, ¿qué error está cometiendo?",
        opciones: [
          "Confunde a Freud con Charcot.",
          "Suprime la ruptura conceptual de Freud: el modelo freudiano no es del déficit (debilidad) sino del conflicto (defensa activa contra una representación incompatible).",
          "Confunde histeria con neurosis obsesiva.",
          "Ningún error: Freud sigue a Janet en este punto.",
        ],
        correcta: 1,
        exp: "Distinguir Freud / Janet es prueba directa de comprensión del descubrimiento freudiano. Janet: déficit, debilidad, disociación pasiva. Freud: conflicto, defensa, escisión activa. Quien adjudica a Freud el modelo del déficit pierde la originalidad del descubrimiento.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 7a
  // ---------------------------------------------------------
  {
    id: "p7a",
    practico: "Práctico 7",
    titulo: "Psicoterapia de la histeria",
    subtitulo: "Conflicto psíquico, resistencias, núcleo patógeno, transferencia",
    teoria: [
      {
        titulo: "Cadena asociativa",
        contenido: `<p>Las representaciones patógenas no están aisladas: están <strong>encadenadas</strong>. El método catártico-asociativo recorre estas cadenas para llegar al núcleo. La idea: cada elemento del síntoma se ata a otro elemento, y siguiendo el hilo asociativo se avanza hacia lo reprimido.</p><p>Freud describe el material patógeno como organizado en <em>capas concéntricas</em> alrededor de un núcleo. Hay dos direcciones de movimiento: <strong>horizontal</strong> (a lo largo de una cadena de asociaciones) y <strong>radial</strong> (de una capa a otra, hacia el núcleo).</p>`,
      },
      {
        titulo: "Resistencias: de asociación y radial",
        contenido: `<p>La <strong>resistencia</strong> es toda manifestación del paciente que se opone al avance del análisis. Donde hay resistencia, hay material reprimido cerca.</p><p>Freud distingue dos formas:</p><ul><li><strong>Resistencia de asociación</strong>: dificultad para pasar de una representación a la siguiente en una cadena horizontal. El paciente "no se acuerda", se desvía, se queda en blanco.</li><li><strong>Resistencia radial</strong>: aumenta a medida que se avanza hacia el núcleo. Cuanto más cerca del centro patógeno, mayor la resistencia.</li></ul><p>La resistencia no es un obstáculo accidental: es la <em>misma fuerza</em> que mantiene la represión. Por eso es indicio de proximidad al material reprimido.</p>`,
      },
      {
        titulo: "Núcleo patógeno",
        contenido: `<p>El <strong>núcleo patógeno</strong> es la representación rechazada que organiza el síntoma. No es accesible directamente — está rodeado de capas y conectado por cadenas a representaciones más periféricas.</p><p>El trabajo terapéutico no consiste en "ir derecho al núcleo" sino en recorrer las cadenas, salvar resistencias, hasta que el núcleo pueda hacerse consciente y ligarse de otro modo. Es ya un anticipo de lo que será la <em>elaboración</em>.</p>`,
      },
      {
        titulo: "Transferencia: falso enlace y síntoma neo-producido",
        contenido: `<p>La <strong>transferencia</strong> aparece en este momento de la obra como un fenómeno que <em>obstaculiza</em> la cura: el paciente actualiza con el analista vínculos y afectos que correspondían a otras figuras (padres, etc.).</p><p>Dos formas en que se manifiesta:</p><ul><li><strong>Falso enlace</strong>: el paciente atribuye al analista un afecto o reproche que correspondía a otro destinatario. "Se equivoca de persona" — pero esa equivocación dice una verdad inconsciente.</li><li><strong>Síntoma neo-producido</strong>: aparece en el análisis un síntoma nuevo, dirigido al analista. La transferencia produce material clínico fresco en el marco mismo del tratamiento.</li></ul><p>Más adelante Freud va a leer la transferencia no solo como obstáculo sino como <em>motor</em> de la cura.</p>`,
        clinico:
          "Histeria de defensa: forma de histeria en la que el síntoma se forma específicamente por la defensa contra una representación incompatible (típicamente sexual).",
      },
    ],
    biblio:
      'Freud (1895) Estudios sobre la histeria. Freud (1896) "Nuevas puntualizaciones sobre las neuropsicosis de defensa", III.',
    tipParcial:
      "Pregunta típica: explicar que la <strong>resistencia es la misma fuerza</strong> que produjo la represión — por eso es índice de proximidad al núcleo patógeno. Y articular cómo la <strong>transferencia</strong> empieza siendo obstáculo (falso enlace, síntoma neo-producido) y luego se va a leer como motor de la cura. Tener clara la organización del material patógeno: capas concéntricas + cadenas asociativas.",
    preguntas: [
      {
        q: "¿Qué diferencia hay entre resistencia de asociación y resistencia radial?",
        opciones: [
          "La de asociación es voluntaria, la radial es involuntaria.",
          "La de asociación es del paciente, la radial es del analista.",
          "La de asociación opera en la línea horizontal de una cadena; la radial aumenta al acercarse al núcleo patógeno.",
          "Son sinónimos.",
        ],
        correcta: 2,
        exp: "Freud organiza el material patógeno en capas concéntricas. Las resistencias de asociación operan horizontalmente (paso de una representación a la siguiente en una cadena). Las radiales operan verticalmente (al avanzar de una capa hacia el núcleo) y aumentan en proximidad al núcleo.",
      },
      {
        q: "¿Por qué la resistencia es 'indicio' de material reprimido?",
        opciones: [
          "Porque es una invención del paciente para resistirse al analista.",
          "Porque la fuerza que sostiene la resistencia es la misma que sostiene la represión: donde hay una, hay la otra cerca.",
          "Porque solo aparece cuando el paciente miente.",
          "Porque siempre indica que el analista se equivocó.",
        ],
        correcta: 1,
        exp: "La resistencia no es accidental ni mala voluntad del paciente: expresa la misma fuerza defensiva que produjo y sostiene la represión. Por eso su aparición indica proximidad de material reprimido.",
      },
      {
        q: "El 'falso enlace' inaugura una lectura de la transferencia que después Freud va a invertir. ¿Cómo?",
        opciones: [
          "Falso enlace = error técnico del analista que se debe prevenir. Más tarde Freud sostendrá que la transferencia es siempre nociva y debe eliminarse.",
          "Falso enlace = asociación libre fallida que el analista descarta. Más tarde será criterio para detener el tratamiento.",
          "Falso enlace = desplazamiento de un afecto/reproche hacia el analista que correspondía a otra figura. En este momento Freud lo lee como OBSTÁCULO; más tarde leerá ese mismo mecanismo como MOTOR del análisis — la transferencia se vuelve la vía regia para acceder a lo reprimido.",
          "Falso enlace = formación sustitutiva por condensación, idéntica al chiste, sin relación con la transferencia.",
        ],
        correcta: 2,
        exp: "Esta articulación es típica de parcial: el FALSO ENLACE ya contiene la estructura de lo que será la transferencia madura. Lo que primero es obstáculo (afecto desplazado al destinatario equivocado) Freud lo invierte: precisamente eso permite que en el análisis se actualicen los conflictos infantiles. La 'equivocación' dice una verdad inconsciente.",
      },
      {
        q: "¿Qué es el síntoma neo-producido?",
        opciones: [
          "Un síntoma que aparece en el cuerpo, no en la mente.",
          "Un síntoma que solo aparece de noche.",
          "Un síntoma del analista, no del paciente.",
          "Un síntoma nuevo que se forma dentro del análisis, dirigido al analista, en el marco de la transferencia.",
        ],
        correcta: 3,
        exp: "El análisis no solo descubre síntomas viejos: la transferencia puede producir un síntoma nuevo orientado al analista. Esto muestra que la transferencia genera material clínico activo, no solo recuerdos.",
      },
      {
        q: "El núcleo patógeno se alcanza:",
        opciones: [
          "Directamente, preguntándole al paciente cuál es.",
          "Indirectamente, recorriendo cadenas asociativas y salvando resistencias hasta llegar a él.",
          "Mediante hipnosis profunda.",
          "Por sugestión del analista.",
        ],
        correcta: 1,
        exp: "El núcleo está rodeado de capas y atravesado por cadenas. El trabajo terapéutico no va 'derecho' sino que recorre las asociaciones, vence resistencias, y solo así puede aproximarse el núcleo.",
      },
      {
        q: "Articulación parcial: ¿qué relación hay entre resistencia y represión?",
        opciones: [
          "Son fenómenos independientes.",
          "La resistencia es la misma fuerza que produjo y sostiene la represión, manifestándose en el análisis. Por eso su aparición indica proximidad al material reprimido y no es un mero obstáculo accidental.",
          "La resistencia destruye la represión.",
          "La represión sigue a la resistencia.",
        ],
        correcta: 1,
        exp: "Punto clínico-teórico clave: la resistencia no es algo distinto de la represión, es su cara visible en el dispositivo analítico. Esto explica por qué donde el paciente se frena, se desvía o queda en blanco, el analista debe leer un índice positivo: ahí cerca está lo reprimido.",
      },
      {
        q: "Una paciente le dice a su analista, enojada: 'Usted siempre me critica como hacía mi padre'. El analista nota que él no la criticó. ¿Cómo lee esa escena según la primera teoría de la transferencia?",
        opciones: [
          "Como una alucinación.",
          "Como un falso enlace: la paciente atribuye al analista un afecto/reproche que pertenecía a otra figura (el padre). La 'equivocación' es lectura de un material inconsciente que se actualiza en el vínculo.",
          "Como una mentira deliberada.",
          "Como una falta de atención del analista.",
        ],
        correcta: 1,
        exp: "Aplicación clínica del falso enlace. En este momento de la obra la transferencia aparece como obstáculo: el material correspondía a otro destinatario y se desplaza al analista. Pero ya está la semilla de lo que después será el motor del análisis: ese 'falso' enlace dice una verdad sobre el inconsciente del paciente.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 7b
  // ---------------------------------------------------------
  {
    id: "p7b",
    practico: "Práctico 7",
    titulo: "Neuropsicosis de defensa",
    subtitulo: "Defensa, fórmula de la neurosis, displacer, Emma",
    teoria: [
      {
        titulo: "Defensa: el yo rechaza una representación",
        contenido: `<p>El concepto de <strong>defensa</strong> es la pieza clave del primer Freud. Cuando una representación resulta <em>incompatible</em> con el yo (típicamente por su contenido sexual), el yo no puede integrarla y la <strong>rechaza activamente</strong>. Ese rechazo es la defensa.</p><p>La defensa no hace desaparecer la representación: la separa de la conciencia. Y la energía (el monto de afecto) que estaba ligada a ella no se evapora — eso es lo que el principio de constancia exige.</p>`,
      },
      {
        titulo: "Destino del afecto: principio de constancia",
        contenido: `<p>El <strong>principio de constancia</strong> obliga a que el monto de afecto, una vez rechazada la representación, encuentre otro destino. Hay tres posibilidades clásicas:</p><ul><li><strong>Conversión</strong> (histeria): el afecto se traduce en inervación somática → síntoma corporal.</li><li><strong>Desplazamiento</strong> (neurosis obsesiva): el afecto se transpone a otra representación, generalmente nimia, que se vuelve obsesiva.</li><li><strong>Proyección</strong> (paranoia): el afecto reaparece como reproche venido del exterior.</li></ul><p>Lo común: la representación se reprime, pero el afecto debe ir a alguna parte.</p>`,
      },
      {
        titulo: "Primera fórmula de la neurosis (1896)",
        contenido: `<p>Freud enuncia una primera <strong>fórmula del desarrollo de la neurosis</strong>:</p><p><strong>Defensa</strong> → <strong>represión</strong> → <strong>retorno de lo reprimido</strong> (síntoma).</p><p>El síntoma es entonces el resultado de un fracaso de la represión: lo reprimido vuelve, pero disfrazado. No regresa la representación tal cual — vuelve <em>deformada</em>, mediante los mecanismos de la formación del síntoma.</p>`,
      },
      {
        titulo: "Fuente independiente de displacer",
        contenido: `<p>Freud postula algo decisivo en esta época: el displacer del síntoma no proviene del exterior, sino que tiene una <strong>fuente interna independiente</strong>. La representación reprimida, al regresar desde el inconsciente, <em>genera</em> displacer.</p><p>Esto implica que el aparato psíquico tiene una fuente <em>autónoma</em> de tensión — no depende solo de estímulos externos. Anticipa la posterior teoría de la pulsión.</p>`,
      },
      {
        titulo: "Emma: el caso paradigmático",
        contenido: `<p><strong>Emma</strong> es un caso del <em>Proyecto de psicología</em> (1895). Síntoma: no puede entrar sola a las tiendas. Tras el análisis aparecen dos escenas:</p><ul><li><strong>Escena 1</strong> (12 años): entra a un negocio y dos empleados se ríen, le parece que de su ropa. Huye.</li><li><strong>Escena 2</strong> (8 años): un comerciante le toca los genitales por encima del vestido. En el momento, ella no entiende el sentido sexual de la escena.</li></ul><p>El síntoma no se forma por la escena 1 ni por la escena 2 por separado. Se forma por la <strong>resignificación</strong>: en la pubertad, la escena 2 (que en su momento no tenía sentido sexual) adquiere ese sentido retroactivamente — y solo entonces puede ser reprimida. Lo reprimido vuelve en la escena 1.</p><p>Este caso muestra la <strong>temporalidad propia</strong> del aparato psíquico: no es cronológica. Una escena puede volverse traumática <em>a posteriori</em> (Nachträglichkeit).</p>`,
        clinico:
          "Compulsión del síntoma: la huida del negocio en la escena 1 no es elegida por Emma — es compulsiva, automática. Eso es el carácter del síntoma.",
      },
    ],
    biblio:
      'Freud (1896) "Nuevas puntualizaciones sobre las neuropsicosis de defensa", III, 163-174. Freud (1950 [1895]) "Manuscrito K"; "Proyecto de psicología" (caso Emma).',
    tipParcial:
      "Pregunta típica: explicar la <strong>fuente independiente de desprendimiento de displacer</strong> y mostrar por qué eso anticipa la teoría de la pulsión. Articular los tres destinos del afecto (conversión / desplazamiento / proyección) con las tres neuropsicosis. Tener a <strong>Emma</strong> para el efecto retroactivo y la compulsión del síntoma.",
    preguntas: [
      {
        q: "¿Cuál es la primera fórmula freudiana del desarrollo de una neurosis (1896)?",
        opciones: [
          "Trauma → represión → cura.",
          "Defensa → represión → retorno de lo reprimido (síntoma).",
          "Síntoma → análisis → desaparición.",
          "Sexualidad → represión → sublimación.",
        ],
        correcta: 1,
        exp: "La fórmula de 1896: la defensa produce represión; lo reprimido no desaparece y vuelve disfrazado, formando el síntoma. El síntoma es retorno de lo reprimido.",
      },
      {
        q: "Articulación P7b con P6: ¿qué presupone teóricamente el destino diferenciado del afecto (conversión / desplazamiento / proyección) en las tres neuropsicosis?",
        opciones: [
          "Presupone que la defensa elimina el afecto junto con la representación, y los destinos varían por azar clínico.",
          "Presupone el principio de constancia: el monto de afecto NO PUEDE disolverse al reprimir la representación — debe ir a algún lado. La defensa se vuelve entonces redistribución, y abre tres caminos según el cuadro (histeria, obsesiva, paranoia). Sin constancia, la defensa sería mera supresión.",
          "Presupone que el afecto reprimido reaparece siempre como angustia idéntica, independientemente del cuadro.",
          "Presupone que las tres neuropsicosis son producidas por trauma exterior, sin participación del aparato psíquico.",
        ],
        correcta: 1,
        exp: "Articulación fina P6↔P7b: la constancia (heredada de la física y reformulada para el aparato psíquico) exige tramitación del afecto desligado. SIN ese principio, la defensa podría pensarse como simple borramiento. CON él, debe pensarse como REDISTRIBUCIÓN — y eso es lo que abre los tres cuadros como variantes de una misma operación defensiva.",
      },
      {
        q: "¿Qué significa 'fuente independiente de desprendimiento de displacer'?",
        opciones: [
          "Que el displacer del síntoma se origina dentro del aparato psíquico (al retornar la representación reprimida), no depende de un estímulo externo.",
          "Que el displacer viene siempre del exterior.",
          "Que cada síntoma tiene una fuente diferente.",
          "Que el displacer es independiente del placer.",
        ],
        correcta: 0,
        exp: "Crucial: el aparato psíquico tiene una fuente autónoma de displacer. Al regresar lo reprimido desde el inconsciente, genera displacer por sí mismo — sin necesidad de un estímulo externo. Anticipa la teoría de la pulsión.",
      },
      {
        q: "¿Por qué el caso Emma muestra el efecto retroactivo (Nachträglichkeit)?",
        opciones: [
          "Porque Emma recordó tarde la escena.",
          "Porque la primera escena (8 años, abuso) no era traumática en el momento; recién en la pubertad, con la segunda escena, adquiere sentido sexual retroactivamente y solo entonces puede ser reprimida.",
          "Porque el síntoma apareció antes que la causa.",
          "Porque Emma tenía mala memoria.",
        ],
        correcta: 1,
        exp: "El trauma no opera linealmente: la escena infantil queda inscripta sin sentido. Una escena posterior la 'resignifica' retroactivamente, le da el sentido sexual que no tenía. Solo entonces hay represión y formación del síntoma. La temporalidad del inconsciente no es cronológica.",
      },
      {
        q: "El síntoma de Emma (no entrar sola a tiendas) es:",
        opciones: [
          "Una decisión voluntaria de cuidarse.",
          "Una compulsión, no elegida: el yo se ve obligado por el retorno de lo reprimido.",
          "Una fobia hereditaria.",
          "Una sugestión del analista.",
        ],
        correcta: 1,
        exp: "El síntoma es compulsivo: Emma huye sin saber por qué. No es decisión, no es razón consciente. Esa cualidad compulsiva es justamente lo que delata el origen inconsciente.",
      },
      {
        q: "Articulación parcial: ¿por qué la 'fuente independiente de desprendimiento de displacer' anticipa la teoría de la pulsión?",
        opciones: [
          "Porque introduce un objeto perdido.",
          "Porque postula que el aparato tiene un origen de tensión interno y autónomo, no reducible a estímulos del exterior — algo que empuja desde adentro y no puede tramitarse como un estímulo más. Esa autonomía interna es lo que después se conceptualiza como pulsión.",
          "Porque define el inconsciente como sistema.",
          "Porque introduce el principio de placer.",
        ],
        correcta: 1,
        exp: "Decisivo: si todo displacer viniera de afuera, alcanzaría con escapar del estímulo. Pero Freud postula una fuente interna que genera displacer al retornar lo reprimido. Esa fuerza interior, constante, no eliminable por la huida, es justo lo que más tarde se llama pulsión. El primer Freud ya pone los rieles para esa conceptualización.",
      },
      {
        q: "Articulación: ¿cómo se conectan los tres destinos del afecto con las tres neuropsicosis de defensa?",
        opciones: [
          "No hay correspondencia, son listas paralelas.",
          "Cada destino define un cuadro: el afecto convertido en inervación somática (histeria), desplazado a otra representación (neurosis obsesiva), o devuelto desde afuera como reproche (paranoia/psicosis alucinatoria). El mecanismo defensivo es uno; las patologías difieren por el destino del afecto.",
          "Los tres destinos producen siempre histeria.",
          "Solo la histeria opera con desplazamiento.",
        ],
        correcta: 1,
        exp: "Este cruce es típico de parcial. La defensa es común; lo que diferencia las neuropsicosis es la economía del afecto desligado. Conversión → histeria. Desplazamiento → neurosis obsesiva. Proyección → paranoia. Por eso Freud habla de 'neuropsicosis de defensa' en plural: el mecanismo es uno, los cuadros varían.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 8
  // ---------------------------------------------------------
  {
    id: "p8",
    practico: "Práctico 8",
    titulo: "Despliegue del inconsciente: sus formaciones",
    subtitulo: "Sueño · síntoma · trabajo del sueño · rebus · interpretación",
    teoria: [
      {
        titulo: "Sueño y síntoma: dos formaciones del inconsciente",
        contenido: `<p>El sueño y el síntoma comparten estructura: son <strong>formaciones del inconsciente</strong>, expresiones disfrazadas de un deseo reprimido. El método de interpretación del sueño se vuelve por eso un modelo para interpretar el síntoma — y más tarde el lapsus, el chiste, el acto fallido.</p><p>Hay diferencias importantes (el sueño se produce en el dormir, con regresión al polo perceptivo; el síntoma opera en la vigilia), pero la lógica formal es la misma: un contenido latente se transforma en contenido manifiesto mediante mecanismos definidos.</p>`,
      },
      {
        titulo: "Trabajo del sueño: la práctica del rebus",
        contenido: `<p>El <strong>trabajo del sueño</strong> (Traumarbeit) es el conjunto de operaciones que transforman los <em>pensamientos latentes</em> (lo que el sueño quiere decir) en <em>contenido manifiesto</em> (lo que el soñante recuerda).</p><p>Freud insiste: el sueño no es un símbolo a leer como diccionario. Es un <strong>rebus</strong> — un acertijo donde cada elemento es un signo, no una letra. Hay que descifrar elemento por elemento, no traducir globalmente.</p><p>Cuatro mecanismos:</p><ul><li><strong>Desplazamiento</strong>: el acento psíquico se traslada de un elemento importante a otro nimio. Es el mecanismo de la censura.</li><li><strong>Condensación</strong>: varias representaciones se sintetizan en un único elemento del sueño. De ahí la <em>sobredeterminación</em> — un mismo elemento del sueño remite a varios pensamientos latentes.</li><li><strong>Puesta en escena (figurabilidad)</strong>: los pensamientos abstractos son traducidos a imágenes. El sueño "muestra", no "dice".</li><li><strong>Elaboración secundaria</strong>: el yo, en el límite con la vigilia, ordena el material del sueño para darle una coherencia narrativa, una fachada lógica.</li></ul>`,
        clinico:
          '"Tres entradas de teatro por 1 florín y 50 kreuzer": ejemplo paradigmático del trabajo de desplazamiento. El acento del sueño está en lo aparentemente insignificante.',
      },
      {
        titulo: "De la interpretación al trabajo del análisis",
        contenido: `<p>Interpretar el sueño no es traducirlo: es <strong>descifrar</strong> (Entzifferung). Y ese descifrado se hace por las asociaciones del soñante, no por un código universal.</p><p>El movimiento es doble:</p><ul><li><strong>De la traducción a la transferencia</strong>: lo que primero parecía traducir un código antiguo se vuelve, en el análisis, material para la transferencia. Lo que se interpreta no se separa del vínculo con el analista.</li></ul><p>Los <strong>determinativos</strong> son rasgos específicos del contenido manifiesto que orientan hacia el pensamiento latente — pequeños signos que apuntan al sentido. Una cifra privilegiada, porque indican el camino del desciframiento.</p>`,
      },
      {
        titulo: "El ombligo del sueño: el límite de lo interpretable",
        contenido: `<p>En cada sueño hay un punto que Freud llama el <strong>ombligo</strong>: una zona donde la interpretación se topa con lo no-interpretable, con lo desconocido. Allí el desciframiento se interrumpe.</p><p>Es importante: el psicoanálisis no promete una interpretación total. Hay un núcleo que <em>no</em> se interpreta. Ese punto es estructural, no un defecto técnico. Marca el límite del saber sobre el inconsciente.</p>`,
        clinico:
          "Fracaso de la formación mixta de persona*: ejemplo donde un elemento del sueño condensa a varias figuras y el determinativo señala el camino latente.",
      },
    ],
    biblio:
      'Freud (1900) "La interpretación de los sueños": cap. VI (trabajo del sueño) y cap. VII (psicología de los procesos oníricos). Freud (1916-17) Conferencias 14-15.',
    tipParcial:
      "Pregunta típica: explicar por qué el sueño no es símbolo sino <strong>rebus</strong>, y articular los cuatro mecanismos del trabajo del sueño con la idea de <strong>sobredeterminación</strong>. Suele pedirse el <strong>ombligo</strong> como límite estructural (no técnico) de la interpretación. Tener listo \"Tres entradas de teatro\" como ejemplo de desplazamiento.",
    preguntas: [
      {
        q: "¿Cuáles son los cuatro mecanismos del trabajo del sueño?",
        opciones: [
          "Negación, proyección, introyección, sublimación.",
          "Represión, regresión, conversión y proyección.",
          "Desplazamiento, condensación, puesta en escena (figurabilidad) y elaboración secundaria.",
          "Asociación, transferencia, interpretación y construcción.",
        ],
        correcta: 2,
        exp: "Los cuatro mecanismos clásicos: desplazamiento (corre el acento), condensación (sintetiza varias representaciones), puesta en escena (vuelve imagen lo abstracto), elaboración secundaria (ordena narrativamente).",
      },
      {
        q: "Articulación: si el sueño es REBUS y no símbolo, ¿qué consecuencias se siguen para la interpretación, en conjunto con la idea de OMBLIGO?",
        opciones: [
          "Que la interpretación procede por las asociaciones del soñante (no por código universal), avanza elemento por elemento, y nunca alcanza totalidad — el ombligo marca un límite estructural a lo descifrable, no un defecto técnico.",
          "Que el sueño se traduce globalmente como una unidad de sentido, mediante un diccionario simbólico fijo que el analista debe poseer.",
          "Que la interpretación termina cuando el analista lo decide; el ombligo es solo una excusa cuando faltan asociaciones.",
          "Que el ombligo se subsana con más asociaciones libres — si la interpretación no cierra, es defecto técnico.",
        ],
        correcta: 0,
        exp: "Articulación nuclear del cap. VI-VII de IdS: REBUS + OMBLIGO son dos caras del mismo descubrimiento. La interpretación es LOCAL (signo por signo, sin código universal) y LIMITADA (siempre hay un resto). Pretender una interpretación total es desconocer la estructura misma del inconsciente.",
      },
      {
        q: "El desplazamiento es el mecanismo de la censura porque:",
        opciones: [
          "Hace desaparecer los pensamientos latentes.",
          "Traslada el acento psíquico de una representación importante a otra nimia, burlando la censura.",
          "Olvida el sueño al despertar.",
          "Permite que dos elementos se condensen.",
        ],
        correcta: 1,
        exp: "El desplazamiento corre la intensidad psíquica desde lo central hacia lo periférico. Eso permite que el contenido pase la censura: lo importante queda disimulado en lo aparentemente trivial.",
      },
      {
        q: "La sobredeterminación remite a:",
        opciones: [
          "Que un mismo elemento manifiesto del sueño está determinado por varios pensamientos latentes que confluyen en él vía condensación.",
          "Que el sueño tiene poder causal sobre la vida vigil del soñante, determinando sus acciones del día siguiente.",
          "Que durante el dormir hay demasiados sueños por noche y todos compiten por dejar huella mnémica.",
          "Que el determinismo psíquico freudiano postula causas múltiples e independientes para cada conducta del sujeto.",
        ],
        correcta: 0,
        exp: "Condensación → sobredeterminación. Un solo elemento manifiesto reúne y representa a varias cadenas latentes. Por eso la interpretación nunca es uno-a-uno.",
      },
      {
        q: "El 'ombligo del sueño' se articula con la afirmación de que 'el primer sistema no puede hacer otra cosa que desear' porque...",
        opciones: [
          "El ombligo es un defecto técnico del analista (falta de asociaciones); el deseo se interpreta sin resto.",
          "El ombligo marca el lugar donde la interpretación reconstruye el deseo original sin resto alguno.",
          "Ombligo y deseo del proceso primario son sinónimos: ambos describen al Icc desde el lado de la realidad.",
          "El deseo — motor del proceso primario — no se agota en ninguna interpretación: queda un resto estructural (el ombligo) que es la marca de lo no-interpretable EN CUANTO el aparato es deseante.",
        ],
        correcta: 3,
        exp: "Articulación P8↔P9b: el ombligo no es modestia técnica. Es la marca de que el inconsciente, como sistema deseante (proceso primario, principio de placer), excede toda interpretación. El deseo no se cierra en el sentido. Por eso siempre hay un punto que no se descifra — y eso es estructura, no defecto.",
      },
      {
        q: "El paso 'de la traducción a la transferencia' significa:",
        opciones: [
          "Que ya no se interpretan los sueños.",
          "Que la interpretación deja de ser solo un desciframiento de código y se vuelve material en juego en la relación con el analista.",
          "Que se traduce el sueño al idioma del analista.",
          "Que la transferencia es lo único importante.",
        ],
        correcta: 1,
        exp: "Lo que al principio parecía mera traducción de un texto onírico se descubre como articulado en el vínculo analítico. La interpretación no es separable de la transferencia que se está jugando con el analista.",
      },
      {
        q: "Articulación parcial: ¿qué consecuencias tiene la sobredeterminación para la práctica analítica?",
        opciones: [
          "Que cada sueño tiene una única lectura correcta.",
          "Que un mismo elemento del sueño está atado a varias cadenas latentes a la vez, por lo cual la interpretación nunca es lineal ni clausurada: se pueden seguir distintos hilos asociativos, y cada uno aporta sentido sin agotar el material.",
          "Que el sueño no se puede interpretar.",
          "Que el analista interpreta todo lo que se le ocurra.",
        ],
        correcta: 1,
        exp: "Consecuencia técnica directa de la condensación: si un elemento manifiesto representa a varios latentes, no hay 'traducción única'. La interpretación se realiza siguiendo cadenas asociativas múltiples, sin pretensión de cierre. Esto distingue al psicoanálisis de cualquier 'manual de sueños': no hay diccionario simbólico, hay trabajo asociativo del soñante.",
      },
      {
        q: "Si un paciente le pregunta al analista: '¿usted me podría dar la interpretación completa de este sueño?', una respuesta freudianamente fundada es:",
        opciones: [
          "Sí, todo sueño se interpreta sin restos.",
          "No, porque siempre hay un punto — el ombligo del sueño — en el que la interpretación encuentra un límite estructural, no técnico. No es un defecto del analista: es la marca de lo que no se deja descifrar.",
          "Sí, pero solo bajo hipnosis.",
          "No, porque los sueños no significan nada.",
        ],
        correcta: 1,
        exp: "Esta pregunta articula clínica y teoría. Es importante diferenciar: 'no se puede interpretar todo' no es modestia ni falta de técnica — es un dato estructural del sueño. El ombligo marca el lugar donde la interpretación toca lo desconocido. Pretender una interpretación total es desconocer la lógica misma del inconsciente.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 9a
  // ---------------------------------------------------------
  {
    id: "p9a",
    practico: "Práctico 9",
    titulo: "Primera ordenación metapsicológica",
    subtitulo: "Aparato psíquico · regresión · exclusión P/M · temporalidad",
    teoria: [
      {
        titulo: "Construcción del aparato psíquico",
        contenido: `<p>En el capítulo VII de <em>La interpretación de los sueños</em> Freud propone un modelo <strong>tópico</strong> del aparato psíquico, organizado entre dos polos:</p><ul><li><strong>Polo perceptivo (P)</strong>: recibe estímulos del exterior. No registra (no deja huella).</li><li><strong>Huellas mnémicas (Hm)</strong>: registran lo percibido. Hay varias capas de Hm.</li><li><strong>Inconsciente (Icc)</strong> y <strong>Preconsciente (Prcc)</strong>: sistemas psíquicos diferenciados.</li><li><strong>Polo motor (M)</strong>: descarga, acción.</li></ul><p>La energía circula entre estos lugares. En la vigilia, el movimiento normal es <strong>progrediente</strong>: P → Hm → Prcc → M (estímulo → registro → pensamiento → acción).</p>`,
      },
      {
        titulo: "Polo motor y polo perceptivo: del inconsciente descriptivo al otro escenario",
        contenido: `<p>Hasta aquí el inconsciente era <em>descriptivo</em>: lo que en un momento dado no está consciente. Pero con este modelo Freud da un giro: el inconsciente es un <strong>sistema</strong> con leyes propias, ubicado en otro lugar del aparato.</p><p>Surge la idea del <strong>"otro escenario"</strong>: el sueño no se produce donde se desarrolla la vida diurna de representaciones. Hay otro lugar psíquico, con otra lógica, otra temporalidad, otras reglas. Eso es lo decisivo.</p>`,
      },
      {
        titulo: "Exclusión entre percepción y memoria",
        contenido: `<p>Freud postula que un mismo sistema no puede <strong>percibir y registrar</strong> al mismo tiempo. El sistema P recibe estímulo pero no deja huella. La huella se inscribe en otro sistema (Hm). Esta exclusión, ya formulada en la <em>Carta 52</em> (1896), permite pensar:</p><ul><li>Que hay distintos tipos de inscripción psíquica (varias capas de Hm).</li><li>Que la <strong>transcripción</strong> (Niederschrift) de una capa a otra puede fracasar — y eso fracaso es la represión.</li><li>Que la percepción y el recuerdo son procesos distintos, no continuos.</li></ul>`,
        clinico:
          "Carta 52 (a Fliess, 1896): primera formulación de las capas de inscripción psíquica y de la represión como fracaso de transcripción.",
      },
      {
        titulo: "Temporalidad no cronológica · dirección regrediente",
        contenido: `<p>El inconsciente <strong>no conoce el tiempo lineal</strong>. Las inscripciones no se ordenan por antes y después de manera cronológica: una escena posterior puede resignificar una anterior (Nachträglichkeit, ya visto con Emma).</p><p>En el dormir cae el polo motor (no podemos descargar en acción) y se invierte la dirección del flujo: <strong>regresión</strong>. La energía retrocede del polo motor al perceptivo. Por eso el pensamiento del sueño se transforma en <em>imagen alucinatoria</em>.</p><p>Tres formas de regresión:</p><ul><li><strong>Tópica</strong>: el flujo retrocede al polo perceptivo.</li><li><strong>Temporal</strong>: regresión a estadios anteriores de organización psíquica.</li><li><strong>Formal</strong>: pasaje de modos de expresión maduros a más primitivos (de la palabra a la imagen).</li></ul>`,
        clinico:
          '"Padre, entonces, ¿no ves que estoy ardiendo?": sueño paradigmático del padre que sueña que su hijo muerto le pide socorro. Realización de deseo (ver vivo al hijo unos segundos más) y apremio de la vida (la vela cayó sobre el cadáver).',
      },
    ],
    biblio:
      'Freud (1900) IdS cap. VII (B: La regresión), V, 504-506 y 527-542. Freud (1896) "Carta 52" a Fliess, I, 274-277.',
    tipParcial:
      "Pregunta típica: articular las <strong>tres formas de regresión</strong> (tópica, temporal, formal) con el sueño como producción alucinatoria. Explicar el <strong>\"otro escenario\"</strong> y la <strong>Carta 52</strong> (exclusión entre percepción y memoria, fracaso de transcripción como modelo de la represión). Tener \"Padre, ¿no ves que estoy ardiendo?\" como referente clínico clave.",
    preguntas: [
      {
        q: "En el modelo del aparato psíquico de IdS cap. VII, ¿qué dirección sigue la energía normalmente en vigilia?",
        opciones: [
          "Progrediente: del polo perceptivo (P) al motor (M), pasando por huellas mnémicas y el sistema preconsciente; el estímulo se traduce en acción.",
          "Regrediente: del polo motor al polo perceptivo, transformando la acción en imagen alucinatoria como ocurre durante el sueño.",
          "Circular y cerrada: la energía retorna al sistema que la originó sin atravesar otras instancias del aparato psíquico.",
          "Lateral, paralela a los sistemas: la excitación se distribuye horizontalmente sin polaridad definida entre percepción y acción.",
        ],
        correcta: 0,
        exp: "En vigilia: estímulo → P → Hm → Prcc/Cc → M (acción). Movimiento progrediente. En el sueño se invierte → regrediente.",
      },
      {
        q: "¿Qué significa la exclusión entre percepción y memoria?",
        opciones: [
          "Que no podemos recordar lo que percibimos.",
          "Que el mismo sistema no puede a la vez percibir y dejar huella mnémica: percepción e inscripción operan en sistemas distintos.",
          "Que la memoria reemplaza a la percepción.",
          "Que percibimos solo lo que recordamos.",
        ],
        correcta: 1,
        exp: "Postulado clave (Carta 52): el sistema P recibe estímulos pero no registra. El registro se hace en huellas mnémicas, en otro sistema. Esta separación permite pensar las capas de inscripción y la represión como fracaso de transcripción.",
      },
      {
        q: "Articulación: las tres formas de regresión (tópica, temporal, formal) explican el sueño porque, en conjunto...",
        opciones: [
          "Producen el carácter alucinatorio del sueño: tópicamente el flujo retrocede al polo perceptivo; temporalmente se reactivan modos psíquicos arcaicos; formalmente la palabra cede a la imagen. Las tres operan a la vez y dan lugar al 'otro escenario'.",
          "Cada una produce un tipo distinto de sueño, sin actuar simultáneamente — son formas alternativas, no superpuestas.",
          "Solo la regresión tópica es indispensable; las otras dos son fenómenos secundarios y prescindibles.",
          "Las tres son patológicas: sin ellas el sujeto soñaría 'normalmente' en palabras articuladas.",
        ],
        correcta: 0,
        exp: "Articulación clásica de parcial. Las tres regresiones operan SIMULTÁNEAMENTE y producen el carácter alucinatorio del sueño: cambio de lugar en el aparato (tópica), de nivel de organización psíquica (temporal), de modo expresivo — palabra → imagen (formal). Ese triple movimiento es lo que produce el 'otro escenario', con su lógica propia.",
      },
      {
        q: "El 'otro escenario' refiere a:",
        opciones: [
          "El consultorio del analista.",
          "Que el sueño se produce en otro lugar psíquico, distinto del escenario diurno de representaciones, con otras leyes y otra temporalidad.",
          "Un teatro real.",
          "El espacio onírico del paciente.",
        ],
        correcta: 1,
        exp: "El otro escenario marca el giro del inconsciente descriptivo al inconsciente como sistema: hay otro lugar psíquico, con lógica y reglas propias. Esa es la dignidad teórica del descubrimiento.",
      },
      {
        q: "La temporalidad del inconsciente es:",
        opciones: [
          "Estrictamente cronológica: las inscripciones se ordenan por su fecha y el sentido del trauma se fija en el momento de su ocurrencia.",
          "No cronológica: una escena posterior puede resignificar retroactivamente a una anterior y darle un sentido que no tenía (Nachträglichkeit).",
          "Circular: todo material reprimido vuelve siempre exactamente igual a sí mismo, sin transformación entre la inscripción original y el retorno.",
          "Inexistente: el inconsciente no tiene relación con el tiempo de ningún modo, ni siquiera lógico, y por eso es inalcanzable para el análisis.",
        ],
        correcta: 1,
        exp: "El inconsciente no se organiza en línea recta. El efecto retroactivo (Nachträglichkeit) muestra que el sentido de una escena puede construirse a partir de otra posterior. El caso Emma es el ejemplo.",
      },
      {
        q: "Articulación parcial: las tres formas de regresión (tópica, temporal, formal) ¿qué explican respecto del sueño?",
        opciones: [
          "Son sinónimos.",
          "Explican por qué el pensamiento del sueño se transforma en imagen alucinatoria: tópicamente la energía retrocede al polo perceptivo, temporalmente se reactivan modos psíquicos arcaicos, formalmente la palabra cede el lugar a la figuración sensorial.",
          "Explican el olvido del sueño.",
          "Explican la interpretación analítica.",
        ],
        correcta: 1,
        exp: "Articulación clásica de parcial. Las tres regresiones operan a la vez: cambio de lugar en el aparato, cambio de nivel de organización psíquica, cambio de modo expresivo. Ese triple movimiento es lo que produce el carácter alucinatorio del sueño — el pensamiento se vuelve imagen porque la energía retrocedió a P, porque se reactivaron modos infantiles, porque la figura sustituye a la palabra.",
      },
      {
        q: "Articulación: ¿cómo conecta la Carta 52 con la represión?",
        opciones: [
          "No están relacionadas.",
          "La Carta 52 postula la exclusión entre percepción y memoria y propone capas sucesivas de inscripción (Niederschriften); la represión se conceptualiza como un fracaso de transcripción de una capa a otra — es decir, una falla en el paso entre sistemas, no un olvido del contenido.",
          "La represión es lo opuesto a la percepción.",
          "La Carta 52 niega la existencia del inconsciente.",
        ],
        correcta: 1,
        exp: "Carta 52 (a Fliess, 1896) es fundamental: si la inscripción psíquica se hace en capas, la represión puede pensarse como falla en la transcripción de una capa a la siguiente. El contenido no es 'borrado' — queda inscripto en una capa anterior y no logra reescribirse en términos del sistema más reciente. Esto da una primera teoría tópica de la represión.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PRÁCTICO 9b
  // ---------------------------------------------------------
  {
    id: "p9b",
    practico: "Práctico 9",
    titulo: "Experiencia de satisfacción y principio de placer",
    subtitulo: "Deseo · objeto alucinatorio · proceso primario · el otro prehistórico",
    teoria: [
      {
        titulo: "La vivencia de satisfacción",
        contenido: `<p>Punto de partida: el bebé experimenta una caída de la homeostasis (hambre, frío, malestar). No puede satisfacer su necesidad por sí mismo — necesita una <strong>acción específica</strong> que solo puede venir <em>desde afuera</em>: alguien lo alimenta, lo abriga, lo calma.</p><p>Esa experiencia deja dos inscripciones psíquicas:</p><ul><li>La <strong>huella de la satisfacción</strong> (la calma, la disminución de tensión).</li><li>La <strong>huella del objeto</strong> que satisfizo (el pecho, la cara del Otro, ese conjunto).</li></ul><p>A partir de esta vivencia, el aparato queda <em>marcado</em>. La próxima caída de homeostasis ya no será virgen.</p>`,
      },
      {
        titulo: "Realización de deseo: del objeto al objeto alucinatorio",
        contenido: `<p>En la próxima caída de homeostasis, el aparato <strong>reinviste</strong> la huella mnémica del objeto satisfactor — sin que ese objeto esté presente. Esa reinvestidura es el <strong>deseo</strong>.</p><p>Crucial: el deseo apunta no al objeto real sino a la <strong>huella</strong>. Y por eso el deseo es siempre, en su origen, <em>alucinatorio</em>: busca repetir la <strong>identidad perceptiva</strong> con la huella, no resolver la necesidad.</p><p>Diferencia clave:</p><ul><li><strong>Satisfacción de la necesidad</strong>: real, exige el objeto. Solo se calma con la acción específica externa.</li><li><strong>Realización de deseo</strong>: psíquica, fantasmática. Apunta a la huella, no al objeto. Es siempre, en alguna medida, una <em>ficción</em>.</li></ul>`,
        clinico:
          '"Tres entradas de teatro por 1 florín y 50 kreuzer": el sueño como pura realización de deseo, donde el acento se desplaza a un elemento aparentemente nimio (el precio).',
      },
      {
        titulo: 'El "otro prehistórico inolvidable"',
        contenido: `<p>Freud escribe que en la primera vivencia de satisfacción queda inscripta la figura de <em>"el otro prehistórico inolvidable, al que nadie luego igualará"</em>. Esa figura del Otro de la primera satisfacción se vuelve <strong>referencia inalcanzable</strong>.</p><p>Consecuencia clínica: <strong>toda elección de objeto futura</strong> es búsqueda de un sustituto. El objeto siempre se reencuentra, nunca se encuentra por primera vez. El deseo está estructurado por una falta original.</p>`,
      },
      {
        titulo: "Ruptura entre principio de constancia y principio de placer",
        contenido: `<p>Aquí aparece la <strong>tensión</strong> entre dos principios:</p><ul><li><strong>Principio de constancia</strong>: el aparato debería mantener la tensión baja o constante.</li><li><strong>Principio de placer</strong>: el aparato busca la <em>identidad perceptiva</em> con la huella, busca <em>repetir</em> la satisfacción. Incluso si esto aumenta la tensión.</li></ul><p>Frase clave: <em>"el primer sistema no puede hacer otra cosa que desear"</em>. El inconsciente no busca homeostasis. Busca repetir la huella de satisfacción, aunque sea alucinatoriamente, aunque eleve la tensión.</p><p>Esto rompe la imagen de un aparato regulador. El aparato es deseante, y eso lo hace fracasar respecto del principio de constancia.</p>`,
      },
      {
        titulo: "Proceso primario y proceso secundario",
        contenido: `<p>Dos modos de funcionamiento del aparato:</p><ul><li><strong>Proceso primario</strong>: libre circulación de energía. Mecanismos: condensación y desplazamiento. Busca <em>identidad perceptiva</em> con la huella → satisfacción alucinatoria. Regido por el principio de placer. Es el modo del inconsciente.</li><li><strong>Proceso secundario</strong>: ligadura de energía. Pensamiento dirigido, postergación, rodeo. Busca <em>identidad de pensamiento</em> y resolución real. Regido por el principio de realidad. Es el modo del preconsciente/conciencia.</li></ul><p>El proceso secundario no anula al primario: lo recubre, lo modera. El sueño y el síntoma son irrupciones del proceso primario en la vida psíquica diurna.</p>`,
      },
    ],
    biblio:
      'Freud (1900) IdS cap. VII (B, C y E), V, 527-542, 556-559 y 581-592. Freud (1901) "Sobre el sueño", V, 651-652 y 655.',
    tipParcial:
      "Pregunta típica: explicar la <strong>ruptura</strong> entre principio de constancia y principio de placer, y articularla con la afirmación de que \"el primer sistema no puede hacer otra cosa que desear\". Diferenciar <strong>identidad perceptiva</strong> (proceso primario, deseo) de <strong>identidad de pensamiento</strong> (proceso secundario, realidad). Tener el \"otro prehistórico inolvidable\" para la estructura del deseo como búsqueda de sustituto.",
    preguntas: [
      {
        q: "¿Qué diferencia esencial hay entre satisfacción de la necesidad y realización de deseo?",
        opciones: [
          "Ninguna, son sinónimos.",
          "La necesidad es psíquica, el deseo es biológico.",
          "La satisfacción de la necesidad requiere el objeto real; la realización de deseo apunta a la huella mnémica y puede ser alucinatoria.",
          "El deseo solo aparece en adultos.",
        ],
        correcta: 2,
        exp: "Necesidad: real, exige el objeto, se calma con acción específica externa. Deseo: psíquico, apunta a la huella mnémica del objeto satisfactor, busca identidad perceptiva (alucinatoria). El deseo es ficción, no necesidad.",
      },
      {
        q: 'La frase "el otro prehistórico inolvidable, al que nadie luego igualará" significa que:',
        opciones: [
          "Hay un primer amor que nunca se olvida.",
          "Toda elección de objeto futura es búsqueda de un sustituto; el objeto siempre se reencuentra, nunca se encuentra por primera vez.",
          "Hay que conservar los recuerdos de la infancia.",
          "El primer cuidador es siempre la madre biológica.",
        ],
        correcta: 1,
        exp: "La figura del Otro de la primera vivencia de satisfacción queda inscripta como referencia inalcanzable. Toda elección posterior es búsqueda de sustituto. El deseo está estructurado por esa falta original.",
      },
      {
        q: "¿En qué consiste la 'ruptura' entre principio de constancia y principio de placer?",
        opciones: [
          "Son lo mismo desde el principio.",
          "El principio de placer hace que el aparato busque repetir la huella de satisfacción (aun aumentando tensión), contradiciendo la regulación que postula el principio de constancia.",
          "Solo opera el principio de placer.",
          "Solo opera el principio de constancia.",
        ],
        correcta: 1,
        exp: "El primer sistema (Icc) no busca minimizar tensión: busca repetir la huella, aunque sea alucinatoriamente, aunque eleve la tensión. 'El primer sistema no puede hacer otra cosa que desear'. Eso lo aleja de la pura homeostasis.",
      },
      {
        q: "Articulación P9b con P8 y P4-5: el proceso primario se reconoce como el modo del inconsciente porque...",
        opciones: [
          "Es el modo exclusivo del sueño; los actos cotidianos (lapsus, olvido, chiste) funcionan con proceso secundario.",
          "Sus mecanismos (condensación, desplazamiento), su búsqueda de identidad perceptiva con la huella (satisfacción alucinatoria) y su gobierno por el principio de placer son el modo COMÚN a TODAS las formaciones del inconsciente: sueño, síntoma, lapsus, olvido, chiste. El Icc como sistema tiene una lógica única.",
          "Solo aparece en patologías graves; en el sujeto sano opera siempre el proceso secundario.",
          "Es un fenómeno aislado del sueño, sin conexión con la vida cotidiana ni con el síntoma.",
        ],
        correcta: 1,
        exp: "Cruce nuclear P4-5 ↔ P8 ↔ P9b: si los MISMOS mecanismos (condensación, desplazamiento) aparecen en producciones tan distintas (sueño, síntoma, chiste, lapsus, olvido), entonces no son rasgos de cada producción sino del SISTEMA que las genera. Esa lógica común es el proceso primario — modo de funcionamiento del Icc, no patología.",
      },
      {
        q: 'El sueño "Padre, ¿no ves que estoy ardiendo?" articula tres ejes de la teoría freudiana del sueño. ¿Cuáles?',
        opciones: [
          "Catarsis emocional + abreacción + sugestión hipnótica del duelo paterno.",
          "Realización de deseo (ver al hijo vivo) + apremio de la vida (la vela caída sobre el cadáver, la realidad presiona el despertar) + tensión entre principio de placer y principio de realidad. El sueño extiende un instante la identidad perceptiva alucinatoria antes de ceder a lo real.",
          "Tres formas de regresión (tópica, temporal, formal) sin contenido manifiesto interpretable.",
          "Castigo, culpa y reparación: las tres dimensiones morales del sueño.",
        ],
        correcta: 1,
        exp: "Cruce P9b↔P9a: este sueño es paradigmático justo porque articula clínica y metapsicología. Muestra que la realización de deseo no es 'cumplir un capricho' sino una operación del aparato (identidad perceptiva con la huella del hijo vivo) que opera HASTA donde la realidad lo permite. El despertar — provocado por el apremio — es el punto donde el principio de realidad gana al de placer.",
      },
      {
        q: "La 'identidad perceptiva' es:",
        opciones: [
          "El registro civil del soñante.",
          "La búsqueda del proceso primario: reproducir la percepción de la huella mnémica, alucinar la satisfacción.",
          "La identidad del sujeto consciente.",
          "Lo que percibimos en común.",
        ],
        correcta: 1,
        exp: "Identidad perceptiva: el aparato busca que el estado actual coincida con la huella inscripta de la satisfacción. Como no tiene el objeto real, lo alucina. Es lo propio del proceso primario y del principio de placer.",
      },
      {
        q: "Articulación parcial: explicar por qué la experiencia de satisfacción es a la vez fundamento del deseo y prueba de que el aparato no se rige por el principio de constancia.",
        opciones: [
          "Porque la satisfacción real elimina la tensión.",
          "Porque deja inscripta una huella que el aparato busca reproducir (alucinatoriamente, sin objeto), aun a costa de aumentar tensión: la búsqueda de identidad perceptiva con la huella es ya un movimiento contrario a la mera homeostasis — el aparato desea, no solo se equilibra.",
          "Porque el bebé aprende a esperar el objeto.",
          "Porque la realidad se impone.",
        ],
        correcta: 1,
        exp: "Esta es la articulación más fina del tema y la que más se pide: la primera vivencia satisface la necesidad pero deja huella, y desde entonces el aparato no busca calma sino repetir la huella. Esa búsqueda de reencuentro alucinatorio prueba que el primer sistema no se rige por constancia. El deseo, como movimiento del aparato, contradice la regulación pura.",
      },
      {
        q: "Articulación clínica: ¿cómo explica esta teoría que ningún objeto real termine de satisfacer a un sujeto?",
        opciones: [
          "Porque los objetos son malos.",
          "Porque el deseo apunta a la huella del 'otro prehistórico inolvidable', no al objeto presente: toda elección es búsqueda de un sustituto de aquella primera figura, que queda como referencia inalcanzable. El objeto siempre se reencuentra, nunca se encuentra por primera vez.",
          "Porque los sujetos son neuróticos.",
          "Porque el deseo es siempre patológico.",
        ],
        correcta: 1,
        exp: "Punto donde lo metapsicológico se vuelve clínico: la insatisfacción estructural del deseo no es síntoma — es su forma. El objeto del deseo no se encuentra, se reencuentra. Y como el primero está perdido (es 'prehistórico inolvidable'), todo objeto presente queda marcado por una falta. Esta es la base de lo que más tarde se va a leer como falta-en-ser.",
      },
    ],
  },
]

// Orden lógico-temático (estilo Cát. Pino ex Mozzi):
//   "presenta la materia no en orden cronológico por la obra freudiana,
//    sino lógico (es decir, por temas)" — descripción oficial de la cátedra.
//
// Sigue la progresión que toman los parciales:
//   Fundamento histórico → la defensa como núcleo → método clínico →
//   las formaciones del inconsciente → la metapsicología.
//
// 1. P6   · Originalidad del descubrimiento (Charcot, Janet, ruptura)
// 2. P1-3 · El conflicto psíquico (defensa, retorno, Emma) ← núcleo del primer parcial
// 3. P7b  · Neuropsicosis de defensa (fórmula 1896, destinos del afecto)
// 4. P7a  · Psicoterapia de la histeria (resistencia, transferencia)
// 5. P8   · Despliegue del inconsciente (sueño, trabajo, ombligo)
// 6. P4-5 · Formaciones cotidianas (olvido, chiste — agrupado con sueño)
// 7. P9a  · Primera ordenación metapsicológica (aparato psíquico, regresión)
// 8. P9b  · Experiencia de satisfacción (deseo, principio de placer)
const ORDEN_TEMATICO = [
  "p6",
  "p1_3",
  "p7b",
  "p7a",
  "p8",
  "p4_5",
  "p9a",
  "p9b",
] as const

export const TEMAS: TemaContenido[] = (() => {
  const byId = new Map(TEMAS_RAW.map((t) => [t.id, t]))
  return ORDEN_TEMATICO.map((id) => {
    const t = byId.get(id)
    if (!t) throw new Error(`Tema no encontrado: ${id}`)
    return t
  })
})()
