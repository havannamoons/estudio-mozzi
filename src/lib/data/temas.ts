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
          "Que todas se manifiestan exclusivamente con síntomas histéricos de conversión, aunque cambien las representaciones reprimidas en cada caso clínico.",
          "El mecanismo de la defensa contra una representación incompatible — lo que varía es el destino del afecto (conversión en histeria, desplazamiento en obsesiva, proyección en paranoia).",
          "Una predisposición hereditario-degenerativa al estilo del modelo janetiano, que explica por qué todas comparten un mismo cuadro de fondo.",
          "Que todas requieren hipnosis profunda para resolverse, y la diferencia entre ellas radica en el grado de hipnotizabilidad de cada paciente.",
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
          "Basta con la primera escena traumática infantil para producir el síntoma; la pubertad solo recuerda lo que ya estaba activo desde el momento del trauma.",
          "La fórmula 'defensa → represión → retorno de lo reprimido' requiere dos escenas: una infantil sin sentido sexual y una segunda que retroactivamente le da ese sentido — solo entonces opera la defensa y se forma el síntoma.",
          "La defensa opera cronológicamente en el momento exacto del trauma infantil, y el síntoma puede tardar años en manifestarse pero la causalidad es estrictamente lineal.",
          "El síntoma se forma de modo independiente de las escenas: lo decisivo es la cantidad de excitación recibida, no la articulación temporal entre dos momentos distintos.",
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
          "Aparecen al azar entre los nombres que el sujeto manejó recientemente, sin relación específica con el nombre que se está olvidando en ese momento.",
          "No son aleatorios: están conectados al nombre olvidado por desplazamientos asociativos y son formaciones de compromiso del retorno de lo reprimido.",
          "Pertenecen siempre a la esfera profesional del sujeto (compañeros, pacientes, autores leídos), porque el olvido de nombre propio es un fenómeno laboral.",
          "Son síntomas de un déficit cognitivo que anuncia el comienzo de un proceso patológico orgánico subyacente en el sujeto.",
        ],
        correcta: 1,
        exp: "Los sustitutos pertenecen a la red asociativa del nombre reprimido. El olvido funciona por desplazamiento: el nombre buscado cae arrastrado por una represión vecina, y los sustitutos contienen fragmentos o conexiones con ese material reprimido. No hay arbitrariedad.",
      },
      {
        q: "En el análisis del olvido de 'Signorelli', los temas reprimidos eran:",
        opciones: [
          "Solo la sexualidad, a partir de las conversaciones recientes que Freud había tenido sobre la centralidad del sexo en sus pacientes italianos.",
          "Muerte y sexualidad — a partir de conversaciones previas reprimidas (Turcos de Bosnia resignados frente a la muerte, importancia de la sexualidad) y de la noticia del suicidio de un paciente.",
          "El arte italiano y el manierismo del Renacimiento, materia sobre la cual Freud sentía inseguridad académica y por eso reprimía el nombre del autor de los frescos.",
          "Su propio nombre y biografía: Signor (Señor) le sonaba al alemán Herr, y eso activaba una represión sobre su identidad profesional como médico.",
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
          "Hacer que el soñante o el ingenioso cambien de tema constantemente, dejando el contenido latente oculto detrás del ruido asociativo.",
          "Burlar la censura: el acento psíquico se corre del elemento importante a uno secundario, permitiendo decir algo prohibido en forma indirecta.",
          "Producir un efecto de confusión en el destinatario, evitando que el receptor del chiste o el lector del sueño llegue a entender nada.",
          "Repetir literalmente el contenido latente en el manifiesto, manteniendo una equivalencia uno-a-uno entre lo prohibido y lo expresado.",
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
          "Está confundiendo a Freud con Charcot, que sostenía la histeria como predisposición hereditario-traumática activable mediante la hipnosis.",
          "Suprime la ruptura conceptual de Freud: el modelo freudiano no es del déficit (debilidad) sino del conflicto (defensa activa contra una representación incompatible).",
          "Está confundiendo la histeria con la neurosis obsesiva en el primer Freud, donde el déficit congénito sí explica los rituales característicos.",
          "No comete error alguno: en los primeros textos de 1893-1895 Freud todavía adhiere al modelo de Janet antes de virar hacia el conflicto.",
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
          "De forma directa, preguntándole al paciente cuál es el contenido patógeno y registrando su respuesta verbal como núcleo del síntoma.",
          "Indirectamente, recorriendo cadenas asociativas horizontales y salvando resistencias radiales que aumentan a medida que uno se aproxima al núcleo reprimido.",
          "Mediante hipnosis profunda, único método capaz de saltar todas las resistencias y exponer el núcleo patógeno en un solo golpe interpretativo.",
          "Por sugestión activa del analista al paciente, mediante la cual se le impone el contenido reprimido como verdad clínica establecida desde afuera.",
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
          "Una decisión voluntaria y razonada de cuidarse, basada en el recuerdo consciente de la escena infantil traumática que vivió.",
          "Una compulsión no elegida ni razonada: el yo se ve obligado a la huida por el retorno de lo reprimido, sin tener acceso al sentido.",
          "Una fobia heredada de la rama materna que se activa frente a estímulos específicos del entorno comercial donde se desencadenó la huida.",
          "Una sugestión inducida por el analista durante el tratamiento que terminó fijándose en Emma como respuesta condicionada al escenario tienda.",
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
          "Hace desaparecer por completo los pensamientos latentes del sueño antes de que puedan irrumpir en la conciencia, sin transformarlos en imagen.",
          "Traslada el acento psíquico de una representación importante a otra nimia y aparentemente trivial, burlando así la censura entre Icc y Cc.",
          "Provoca el olvido del sueño al despertar, eliminando las huellas mnémicas y dejando el contenido latente inaccesible al análisis posterior.",
          "Permite que dos elementos distintos se condensen en una sola representación manifiesta — pero ese es el mecanismo de la condensación, no del desplazamiento.",
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
          "Que no podemos recordar conscientemente la mayor parte de lo que percibimos durante el día porque la capacidad de la memoria es estructuralmente limitada.",
          "Que el mismo sistema no puede a la vez percibir y dejar huella mnémica: percepción e inscripción operan en sistemas distintos del aparato.",
          "Que la memoria, al cargarse de contenidos antiguos, va reemplazando a la percepción actual — por eso los adultos perciben menos vívidamente que los niños.",
          "Que solo podemos percibir aquello para lo cual ya existe una huella mnémica previa, y lo absolutamente nuevo resulta invisible al aparato perceptual.",
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
          "El consultorio del analista, donde la transferencia despliega un escenario nuevo distinto al de la cotidianidad del paciente neurótico.",
          "Que el sueño se produce en otro lugar psíquico, distinto del escenario diurno de representaciones, con otras leyes y otra temporalidad propia.",
          "Un teatro real que el soñante visitó en algún momento de su vida y cuyo recuerdo se activa durante el sueño como decorado del contenido.",
          "El espacio onírico del paciente como territorio aislado de la conciencia, accesible únicamente mediante la interpretación que hace el analista.",
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
          "El conjunto de rasgos del soñante (edad, género, biografía) que el aparato psíquico registra como continuidad subjetiva durante el sueño.",
          "La búsqueda del proceso primario: reproducir la percepción de la huella mnémica del objeto satisfactor — alucinar la satisfacción ante la ausencia del objeto real.",
          "La identidad del sujeto consciente entendida como núcleo del yo, en oposición a la división del inconsciente entre los sistemas Icc y Prcc.",
          "Lo que distintos sujetos perciben en común frente al mismo estímulo: base intersubjetiva de la realidad consensuada por el principio de realidad.",
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

  // =========================================================
  // ====================  FINAL  ============================
  // Segunda parte de la materia (sexualidad, metapsicología,
  // segunda tópica, angustia, cultura).
  // =========================================================

  // ---------------------------------------------------------
  // TRES ENSAYOS DE TEORÍA SEXUAL (1905)
  // ---------------------------------------------------------
  {
    id: "sexualidad",
    practico: "Tres ensayos (1905)",
    titulo: "La sexualidad y la pulsión",
    subtitulo:
      "Pulsión desasida del objeto · sexualidad infantil · autoerotismo · neurosis como negativo de la perversión",
    teoria: [
      {
        titulo: "El concepto de pulsión sexual: desasida del objeto",
        contenido: `<p>El primer gran golpe de los <em>Tres ensayos</em> es contra la idea de <strong>instinto</strong>. La creencia popular supone una pulsión sexual que trae de fábrica su objeto (el sexo opuesto) y su meta (la reproducción). Freud desarma eso.</p><p>Para pensarlo introduce dos términos que hay que tener bien separados:</p><ul><li><strong>Objeto</strong> (Objekt): la persona o cosa <em>de la cual</em> parte la atracción sexual.</li><li><strong>Meta</strong> (Ziel): la <em>acción</em> hacia la que la pulsión empuja.</li></ul><p>Y la tesis decisiva: la pulsión sexual está en principio <strong>desasida de su objeto</strong> — el objeto no está predeterminado biológicamente, es <em>contingente</em>, se suelda a la pulsión de manera secundaria. "Es probable que el enlace entre pulsión y objeto no sea tan íntimo como se supone." Contra el instinto cerrado del animal, la pulsión humana tiene objeto variable.</p>`,
      },
      {
        titulo: "Las perversiones: desviaciones de objeto y de meta",
        contenido: `<p>Freud estudia las <strong>aberraciones sexuales</strong> no como curiosidades morbosas sino como la <em>prueba</em> de que la pulsión es descomponible. Las ordena en dos ejes:</p><ul><li>Desviaciones respecto del <strong>objeto</strong>: la inversión (homosexualidad), objetos impropios (niños, animales).</li><li>Desviaciones respecto de la <strong>meta</strong>: transgresiones anatómicas (usar otras zonas del cuerpo) y fijaciones a metas <em>preliminares</em> que normalmente serían de paso — ver y ser visto, tocar, la crueldad (sadismo / masoquismo).</li></ul><p>Que la pulsión pueda desarmarse en estas piezas muestra que no es una unidad: es un <strong>haz de pulsiones parciales</strong>, cada una con su propia fuente y su propia satisfacción. La "normalidad" genital no es el punto de partida sino un resultado, una síntesis lograda.</p>`,
      },
      {
        titulo: 'La neurosis es "el negativo" de la perversión',
        contenido: `<p>La fórmula más citada del texto: <strong>la neurosis es el negativo de la perversión</strong>. "Negativo" en sentido fotográfico.</p><p>Lo que el perverso <em>actúa</em> directamente (una moción parcial que busca su satisfacción), el neurótico lo <strong>reprime</strong> — y esa misma moción retorna, deformada, como <strong>síntoma</strong>. Si uno descifra el síntoma neurótico, encuentra debajo una fantasía sexual de tipo perverso-parcial.</p><p>Consecuencia fuerte: la sexualidad reprimida en la neurosis <em>es</em> de carácter perverso polimorfo. Perverso y neurótico no son dos mundos: son dos destinos distintos de la misma sexualidad infantil. Uno la satisface, el otro la reprime y sufre su retorno.</p>`,
        clinico:
          "Articula con P1-3 / P7b: el síntoma como retorno de lo reprimido. Acá se precisa QUÉ es lo reprimido: una moción sexual parcial (perversa). El síntoma es su expresión negativizada.",
      },
      {
        titulo: "La sexualidad infantil: autoerotismo y apuntalamiento",
        contenido: `<p>El segundo escándalo: <strong>hay sexualidad en el niño</strong>. No es un adulto en miniatura ni un ángel asexual — es un <strong>perverso polimorfo</strong>, dispuesto a todas las satisfacciones parciales porque todavía no operan el asco, la vergüenza ni la moral, y no hay primacía genital que ordene el conjunto.</p><p>Dos conceptos clave para entender cómo funciona esa sexualidad:</p><ul><li><strong>Autoerotismo</strong>: la pulsión parcial se satisface <em>en el cuerpo propio</em>, sin objeto exterior. No necesita a otro.</li><li><strong>Apuntalamiento</strong> (Anlehnung): la pulsión sexual no aparece sola — nace <em>apoyándose</em> en una función de autoconservación, y después se independiza de ella.</li></ul><p>El modelo es el <strong>chupeteo</strong> (Ludeln): el bebé mama para alimentarse, pero el placer de la succión en los labios (zona erógena) se <em>separa</em> de la nutrición y se busca por sí mismo — chupetea sin hambre. Ahí nace lo sexual: como placer de órgano desprendido de la necesidad biológica.</p>`,
      },
      {
        titulo: "Pulsiones parciales, zonas erógenas y fases",
        contenido: `<p>La sexualidad infantil no está unificada: es un conjunto de <strong>pulsiones parciales</strong>, cada una anclada en una <strong>zona erógena</strong> (una región del cuerpo capaz de dar placer) y buscando satisfacción por su cuenta, de manera autoerótica.</p><p>El desarrollo libidinal se ordena en una secuencia de <strong>fases</strong>, según qué zona domina:</p><ul><li><strong>Oral</strong>: la boca (mamar, chupetear).</li><li><strong>Sádico-anal</strong>: el control de esfínteres, el par actividad/pasividad.</li><li><strong>Fálica</strong>: el primado del falo (elaborada en textos posteriores).</li><li><strong>Latencia</strong>: sofocación relativa, se instalan los diques (asco, vergüenza, moral).</li><li><strong>Genital</strong>: en la pubertad, primacía de lo genital que subordina las parciales.</li></ul><p>La organización "normal" es entonces una <em>síntesis</em> tardía: las pulsiones parciales, dispersas y autoeróticas, quedan subordinadas bajo el primado genital. Cuando esa síntesis falla o una parcial queda fijada, reaparece la perversión o, reprimida, el síntoma.</p>`,
      },
      {
        titulo: "El hallazgo de objeto es un reencuentro",
        contenido: `<p>En las <em>metamorfosis de la pubertad</em> (Ensayo III) se instala la primacía genital y, con ella, la búsqueda de un objeto sexual. Pero Freud da vuelta la intuición ingenua: no se "encuentra" un objeto nuevo.</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">"El hallazgo de objeto es en verdad un reencuentro."</p><p>El objeto de la pubertad se busca sobre el <strong>modelo</strong> de las primeras satisfacciones — el pecho materno, el cuidado originario. Esto engancha directamente con la <strong>experiencia de satisfacción</strong> (P9b): el objeto primero está perdido desde siempre, y todo objeto posterior es un <em>sustituto</em> que reencuentra su huella sin igualarla nunca.</p><p>Por eso ningún objeto satisface del todo: la insatisfacción no es un accidente, es la estructura misma del deseo. La sexualidad humana está marcada, desde el origen, por esa falta.</p>`,
        clinico:
          "Articulación P9b: la experiencia de satisfacción funda un objeto perdido; el hallazgo de objeto de la pubertad lo reencuentra deformado. Base de que el deseo sea, por estructura, insatisfecho.",
      },
    ],
    biblio:
      'Freud (1905) "Tres ensayos de teoría sexual", VII. Ensayo I: Las aberraciones sexuales (objeto/meta, perversiones, "la neurosis es el negativo de la perversión"). Ensayo II: La sexualidad infantil (autoerotismo, apuntalamiento, chupeteo, zonas erógenas, pulsiones parciales, fases). Ensayo III: Las metamorfosis de la pubertad (primacía genital, "el hallazgo de objeto es un reencuentro").',
    tipParcial:
      'Pregunta típica: articular <strong>"la neurosis es el negativo de la perversión"</strong> con el concepto de <strong>pulsión desasida del objeto</strong> (contra el instinto) y con la <strong>sexualidad infantil</strong> como perverso-polimorfa. Segunda articulación muy pedida: <strong>"el hallazgo de objeto es un reencuentro"</strong> con la <strong>experiencia de satisfacción (P9b)</strong> — el objeto perdido y la insatisfacción estructural del deseo. Tener bien definidos: objeto vs. meta, autoerotismo, apuntalamiento, pulsión parcial, zona erógena.',
    preguntas: [
      {
        q: '¿Qué quiere decir que la pulsión sexual está "desasida" de su objeto?',
        opciones: [
          "Que el objeto sexual viene predeterminado biológicamente (el sexo opuesto, con fin reproductivo) y la pulsión solo debe encontrarlo.",
          "Que el objeto no está fijado de antemano: es contingente y se suelda a la pulsión de modo secundario. Contra el instinto animal, la pulsión humana tiene objeto variable.",
          "Que la pulsión sexual no tiene ningún objeto y se satisface siempre sola, sin relación posible con otro.",
          "Que el objeto y la meta de la pulsión son lo mismo, porque ambos están determinados por la anatomía.",
        ],
        correcta: 1,
        exp: "Núcleo del Ensayo I. Freud separa objeto (de quién/qué parte la atracción) de meta (la acción a la que empuja) y sostiene que el enlace entre pulsión y objeto no es tan íntimo como se supone: el objeto es contingente. Esto rompe con la idea de instinto cerrado y abre toda la teoría de la pulsión.",
      },
      {
        q: 'La fórmula "la neurosis es el negativo de la perversión" significa que:',
        opciones: [
          "El neurótico y el perverso son personalidades opuestas e incompatibles, sin nada en común.",
          "La perversión cura la neurosis al descargar directamente la moción reprimida.",
          "Lo que el perverso actúa como satisfacción parcial directa, el neurótico lo reprime, y esa misma moción retorna deformada como síntoma. Debajo del síntoma hay una fantasía sexual perverso-parcial.",
          "La neurosis es una forma leve de perversión que se agrava con el tiempo si no se trata.",
        ],
        correcta: 2,
        exp: '"Negativo" en sentido fotográfico. Perverso y neurótico parten de la misma sexualidad infantil perverso-polimorfa: uno la actúa, el otro la reprime y sufre su retorno como síntoma. Por eso descifrar un síntoma neurótico conduce a una moción sexual parcial reprimida.',
      },
      {
        q: "¿Qué es el autoerotismo en la sexualidad infantil?",
        opciones: [
          "El amor del niño hacia sí mismo como objeto total, base del narcisismo secundario.",
          "La pulsión parcial que se satisface en el cuerpo propio, en una zona erógena, sin necesidad de un objeto exterior.",
          "La incapacidad del niño para sentir placer hasta que aparece un objeto sexual externo en la pubertad.",
          "La primacía genital que ordena todas las pulsiones parciales bajo una sola meta.",
        ],
        correcta: 1,
        exp: "Autoerotismo: la pulsión parcial encuentra satisfacción en el propio cuerpo, sin objeto exterior (el chupeteo es el modelo). No es todavía narcisismo (que supone un yo tomado como objeto). Es el modo de satisfacción de las pulsiones parciales antes de la síntesis genital.",
      },
      {
        q: 'El "apuntalamiento" (Anlehnung) de la pulsión sexual quiere decir que:',
        opciones: [
          "La pulsión sexual se apoya en la moral y la cultura para poder desarrollarse.",
          "La pulsión sexual nace apoyándose en una función de autoconservación y luego se independiza de ella — como el placer de la succión que se separa de la nutrición.",
          "La pulsión sexual necesita siempre el apoyo de otra persona para satisfacerse.",
          "La pulsión sexual sostiene y regula las funciones vitales del organismo.",
        ],
        correcta: 1,
        exp: "El modelo es el chupeteo: el bebé mama para alimentarse (autoconservación), pero el placer de órgano en los labios se desprende de la necesidad y se busca por sí mismo — el niño chupetea sin hambre. La sexualidad nace así, apuntalada en lo vital y luego autónoma de ello.",
      },
      {
        q: "¿Por qué Freud llama al niño un 'perverso polimorfo'?",
        opciones: [
          "Porque el niño tiene fantasías perversas conscientes idénticas a las de un adulto perverso.",
          "Porque dispone de todas las pulsiones parciales sin una primacía genital que las ordene ni los diques (asco, vergüenza, moral) que luego las limitan, de modo que puede acceder a satisfacciones parciales muy diversas.",
          "Porque el niño es patológico por naturaleza y necesita ser corregido para no ser perverso de adulto.",
          "Porque en el niño la pulsión sexual ya tiene fijado su objeto y su meta reproductiva.",
        ],
        correcta: 1,
        exp: '"Polimorfo" = de muchas formas. El niño no tiene aún organizada la sexualidad bajo el primado genital ni instalados los diques anímicos, así que las pulsiones parciales operan sueltas. No es un juicio moral: describe la sexualidad infantil como haz de parciales autoeróticas previo a toda síntesis.',
      },
      {
        q: "En la organización de la sexualidad, ¿qué relación hay entre las pulsiones parciales y la primacía genital?",
        opciones: [
          "Las pulsiones parciales desaparecen en la pubertad y son reemplazadas por la pulsión genital.",
          "La primacía genital existe desde el nacimiento y las parciales son desviaciones patológicas de ella.",
          "Las pulsiones parciales son autoeróticas y dispersas; la primacía genital, en la pubertad, las subordina y sintetiza bajo su primado. La 'normalidad' genital es un resultado, no un punto de partida.",
          "Pulsiones parciales y primacía genital son nombres distintos para el mismo fenómeno.",
        ],
        correcta: 2,
        exp: "Punto clave: la organización genital es una síntesis tardía. Las parciales (oral, anal, escópica, etc.) preexisten dispersas y autoeróticas; recién en la pubertad quedan subordinadas al primado genital. Cuando la síntesis falla o una parcial queda fijada, reaparece la perversión, o —reprimida— el síntoma.",
      },
      {
        q: 'Articulación con P9b: ¿qué significa que "el hallazgo de objeto es un reencuentro"?',
        opciones: [
          "Que el objeto sexual de la pubertad es siempre un familiar directo del sujeto.",
          "Que el objeto se busca sobre el modelo de las primeras satisfacciones (el objeto perdido de la experiencia de satisfacción); todo objeto posterior es un sustituto que reencuentra esa huella sin igualarla, por eso el deseo es estructuralmente insatisfecho.",
          "Que el sujeto reencuentra en la pubertad exactamente el mismo objeto que perdió en la infancia, y con él se satisface plenamente.",
          "Que la pubertad borra la sexualidad infantil y empieza una vida sexual completamente nueva.",
        ],
        correcta: 1,
        exp: "Cruce directo con la experiencia de satisfacción (P9b): el primer objeto (el pecho) queda inscripto como perdido e inolvidable. El objeto de la pubertad no se encuentra por primera vez: se re-encuentra sobre ese modelo, siempre deformado. De ahí que ningún objeto real satisfaga del todo — la insatisfacción es la forma misma del deseo.",
      },
    ],
  },

  // ---------------------------------------------------------
  // INTRODUCCIÓN DEL NARCISISMO (1914)
  // ---------------------------------------------------------
  {
    id: "narcisismo",
    practico: "Introducción del narcisismo (1914)",
    titulo: "El narcisismo",
    subtitulo:
      "Libido yoica y libido de objeto · narcisismo primario y secundario · yo ideal e ideal del yo",
    teoria: [
      {
        titulo: "Por qué Freud necesita el narcisismo",
        contenido: `<p>Hasta 1914 Freud trabaja con un dualismo: <strong>pulsiones sexuales</strong> (libido, dirigida a objetos) vs. <strong>pulsiones yoicas</strong> o de autoconservación. La clínica de la <strong>parafrenia</strong> (esquizofrenia) le rompe ese esquema: el psicótico <em>retira</em> la libido del mundo y la repliega sobre el yo (megalomanía, hipocondría, delirio).</p><p>Para explicarlo Freud postula que el <strong>yo mismo puede ser investido con libido</strong>: existe un narcisismo. La libido no va solo a los objetos — el yo es también un objeto de amor. Esto amplía la teoría de la libido y obliga a repensar la relación entre yo y objeto.</p>`,
      },
      {
        titulo: "Libido yoica y libido de objeto: vasos comunicantes",
        contenido: `<p>Hay <strong>una sola reserva</strong> de libido que se distribuye entre dos polos:</p><ul><li><strong>Libido yoica</strong> (narcisista): invertida en el propio yo.</li><li><strong>Libido de objeto</strong>: invertida en los objetos del mundo.</li></ul><p>Funcionan como <strong>vasos comunicantes</strong>: cuanto más se vuelca al objeto, más se empobrece el yo, y a la inversa. El <em>enamoramiento</em> es el caso extremo — el sujeto vacía su libido en el objeto y se empobrece a sí mismo. La libido de objeto puede <strong>retornar</strong> al yo (retracción), como en la psicosis o el duelo.</p>`,
      },
      {
        titulo: "Narcisismo primario y secundario",
        contenido: `<p>Dos momentos:</p><ul><li><strong>Narcisismo primario</strong>: estado originario en que toda la libido está en el yo, antes de investir objetos. Freud lo ilustra con <em>"His Majesty the Baby"</em> — la sobreestimación con que los padres retoman su propio narcisismo perdido en el hijo.</li><li><strong>Narcisismo secundario</strong>: la libido que ya había ido a los objetos se <em>repliega</em> nuevamente sobre el yo (retracción). Es lo que ocurre en la parafrenia.</li></ul><p>El narcisismo no es una perversión: es el complemento libidinal del egoísmo de la pulsión de autoconservación.</p>`,
      },
      {
        titulo: "Elección de objeto: por apuntalamiento y narcisista",
        contenido: `<p>Freud distingue dos tipos de <strong>elección de objeto</strong>:</p><ul><li><strong>Por apuntalamiento</strong> (anaclítica): se ama según el modelo de quien <em>nutre y protege</em> — la madre que alimenta, el padre que cuida. Retoma el apuntalamiento de los <em>Tres ensayos</em>.</li><li><strong>Narcisista</strong>: se ama según el modelo de <em>uno mismo</em> — lo que uno es, lo que uno fue, lo que uno quisiera ser, o la persona que fue parte del sí-mismo.</li></ul><p>Todo sujeto tiene disponibles ambas vías. La elección narcisista es especialmente visible en el amor de los padres al hijo y en ciertos tipos de amor.</p>`,
      },
      {
        titulo: "El yo ideal y el ideal del yo",
        contenido: `<p>El narcisismo infantil —el niño se vivía perfecto, su propio ideal— no se abandona sin más: se <strong>desplaza</strong>. El sujeto, ya no pudiendo sostener aquella perfección, la <em>proyecta hacia adelante</em> como un <strong>ideal del yo</strong>: una meta a alcanzar para recuperar la perfección narcisista perdida.</p><p>Y junto al ideal aparece una <strong>instancia que vigila</strong> y mide al yo respecto de ese ideal: la autoobservación, la conciencia moral. Freud está describiendo acá el embrión de lo que en 1923 va a llamar <strong>superyó</strong>. La represión se ejerce en nombre de ese ideal.</p>`,
        clinico:
          "Articulación con El yo y el ello (1923): el ideal del yo / instancia crítica es el antecedente directo del superyó. El narcisismo perdido se recupera como ideal a alcanzar, no como estado.",
      },
      {
        titulo: "Autoestima, enamoramiento y ser amado",
        contenido: `<p>La <strong>autoestima</strong> (sentimiento de sí) expresa el tamaño del yo, y depende de la libido narcisista disponible. Tres cosas la afectan:</p><ul><li>El <strong>enamoramiento</strong> la <em>rebaja</em>: al volcar la libido en el objeto sobreestimado, el yo se empobrece y se vuelve humilde ante el amado.</li><li>Ser <strong>amado</strong>, en cambio, la <em>eleva</em>: recibir libido restituye al yo.</li><li>Alcanzar el <strong>ideal del yo</strong> también la eleva; no alcanzarlo, la baja (sentimiento de inferioridad, culpa).</li></ul><p>Amar es, en el fondo, entregar libido; ser amado es recibirla de vuelta.</p>`,
      },
    ],
    biblio:
      'Freud (1914) "Introducción del narcisismo", XIV. Puntos clave: la parafrenia como vía de acceso; libido yoica / libido de objeto; narcisismo primario y secundario; elección de objeto anaclítica y narcisista; el ideal del yo y la instancia crítica.',
    tipParcial:
      "Pregunta típica: explicar libido yoica y de objeto como <strong>vasos comunicantes</strong> (una sola reserva) y por qué la <strong>parafrenia</strong> obliga a introducir el narcisismo. Articulación muy pedida: el <strong>ideal del yo</strong> como heredero del narcisismo infantil perdido → anticipa el <strong>superyó (1923)</strong>. Distinguir elección de objeto por apuntalamiento vs. narcisista; narcisismo primario vs. secundario.",
    preguntas: [
      {
        q: "¿Qué fenómeno clínico lleva a Freud a introducir el concepto de narcisismo?",
        opciones: [
          "La histeria de conversión, donde la libido se traduce en síntoma somático.",
          "La parafrenia (esquizofrenia): el psicótico retira la libido del mundo y la repliega sobre el yo (megalomanía, hipocondría), lo que exige suponer que el yo mismo es investido con libido.",
          "El duelo normal, donde la libido se desplaza sin conflicto a un objeto nuevo.",
          "El acto fallido de la vida cotidiana.",
        ],
        correcta: 1,
        exp: "La retracción de la libido sobre el yo en la parafrenia no se explica con el dualismo pulsiones sexuales / yoicas. Freud postula que el yo es también reservorio y objeto de libido: hay un narcisismo. Esto amplía la teoría de la libido.",
      },
      {
        q: "La relación entre libido yoica y libido de objeto es de:",
        opciones: [
          "Dos reservas independientes que nunca se comunican entre sí.",
          "Vasos comunicantes: hay una sola reserva; cuanto más se invierte en objetos, más se empobrece el yo, y a la inversa (el enamoramiento empobrece el yo).",
          "Suma constante creciente: ambas aumentan juntas con el desarrollo.",
          "Identidad: son exactamente el mismo fenómeno con dos nombres.",
        ],
        correcta: 1,
        exp: "Una única reserva de libido se reparte entre el yo y los objetos como vasos comunicantes. El enamoramiento es el caso límite: el yo vuelca su libido en el objeto sobreestimado y se empobrece. La libido puede retornar al yo (retracción narcisista).",
      },
      {
        q: "¿Qué diferencia al narcisismo primario del secundario?",
        opciones: [
          "El primario es patológico y el secundario es normal.",
          "El primario es el estado originario con toda la libido en el yo (antes de investir objetos); el secundario es el repliegue sobre el yo de la libido que ya había ido a los objetos.",
          "El primario ocurre en la vejez y el secundario en la infancia.",
          "Son sinónimos usados en distintos textos.",
        ],
        correcta: 1,
        exp: 'Primario: la libido está toda en el yo antes de toda elección de objeto ("His Majesty the Baby"). Secundario: la libido de objeto se retrae y vuelve al yo (como en la parafrenia). El narcisismo secundario se construye SOBRE el primario, por repliegue.',
      },
      {
        q: "En la elección de objeto narcisista, el sujeto ama a alguien según el modelo de:",
        opciones: [
          "Quien lo nutre y protege (la madre que alimenta).",
          "Uno mismo: lo que uno es, fue, quisiera ser, o quien fue parte del propio sí-mismo.",
          "Un ideal cultural impuesto desde afuera.",
          "El objeto perdido de la experiencia de satisfacción exclusivamente.",
        ],
        correcta: 1,
        exp: "Freud distingue la elección por apuntalamiento (anaclítica: según quien nutre/protege) de la narcisista (según el modelo de uno mismo). El amor de los padres al hijo es paradigma de elección narcisista: reviven en él su propio narcisismo perdido.",
      },
      {
        q: "El ideal del yo se forma porque:",
        opciones: [
          "El sujeto abandona por completo el narcisismo infantil al crecer.",
          "El narcisismo infantil perdido (el niño se vivía perfecto) no se abandona: se desplaza hacia adelante como un ideal a alcanzar, con una instancia crítica que vigila al yo respecto de ese ideal.",
          "Los padres imponen al niño una moral externa sin relación con su narcisismo.",
          "El yo renuncia definitivamente a toda perfección y a todo ideal.",
        ],
        correcta: 1,
        exp: "No se resigna la perfección narcisista: se la proyecta como ideal del yo (meta a reconquistar). Junto a él aparece la instancia de autoobservación / conciencia moral. Es el embrión del superyó (1923): la represión se ejerce en nombre de ese ideal.",
      },
      {
        q: "Articulación con El yo y el ello (1923): ¿por qué se dice que el ideal del yo 'anticipa' el superyó?",
        opciones: [
          "Porque el ideal del yo es una parte del ello.",
          "Porque el ideal del yo ya funciona como instancia que mide y juzga al yo respecto de un modelo de perfección, ejerce la represión y funda la conciencia moral — funciones que en 1923 Freud reúne bajo el nombre de superyó, heredero del Edipo.",
          "Porque el ideal del yo desaparece cuando aparece el superyó.",
          "Porque el superyó es anterior al ideal del yo en la obra de Freud.",
        ],
        correcta: 1,
        exp: "En 1914 el ideal del yo + la instancia crítica cumplen ya las funciones que en 1923 se nombran como superyó: ideal a alcanzar y conciencia que castiga. El superyó será el heredero del complejo de Edipo, pero su raíz conceptual está en este narcisismo desplazado a ideal.",
      },
    ],
  },

  // ---------------------------------------------------------
  // PULSIONES Y DESTINOS DE PULSIÓN (1915)
  // ---------------------------------------------------------
  {
    id: "pulsiones",
    practico: "Pulsiones y destinos de pulsión (1915)",
    titulo: "La pulsión y sus destinos",
    subtitulo:
      "Concepto límite · esfuerzo, meta, objeto, fuente · los cuatro destinos · amor y odio",
    teoria: [
      {
        titulo: "La pulsión como concepto límite",
        contenido: `<p>La <strong>pulsión</strong> (Trieb) es un <strong>concepto fronterizo</strong> entre lo anímico y lo somático: es el <em>representante psíquico</em> de los estímulos que nacen en el interior del cuerpo y llegan al aparato. No es un instinto biológico cerrado.</p><p>Se distingue del <strong>estímulo externo</strong> por dos rasgos: del estímulo externo se puede <em>huir</em> (una acción motriz lo suprime); de la pulsión <strong>no se puede huir</strong>, porque actúa como una <strong>fuerza constante</strong> (konstante Kraft) que empuja desde adentro. Por eso obliga al aparato a un trabajo: no hay fuga posible.</p>`,
      },
      {
        titulo: "Las cuatro características de la pulsión",
        contenido: `<p>Freud descompone toda pulsión en cuatro términos. Hay que tenerlos memorizados:</p><ul><li><strong>Esfuerzo</strong> (Drang): el factor motor, la <em>cantidad</em> de fuerza que la pulsión representa. Su esencia activa.</li><li><strong>Meta</strong> (Ziel): es <em>siempre la satisfacción</em>, que se alcanza cancelando el estado de estimulación de la fuente. Puede haber metas <em>inhibidas</em> (parciales).</li><li><strong>Objeto</strong> (Objekt): aquello <em>en</em> o <em>mediante</em> lo cual la pulsión alcanza su meta. Es <strong>lo más variable</strong>: no está ligado originariamente, puede cambiar cuantas veces haga falta (fijación cuando se aferra).</li><li><strong>Fuente</strong> (Quelle): el proceso somático, en un órgano o parte del cuerpo, cuyo estímulo es representado por la pulsión (la zona erógena).</li></ul>`,
      },
      {
        titulo: "El objeto es lo más contingente",
        contenido: `<p>De las cuatro características, el <strong>objeto</strong> es la menos determinada. Retoma la tesis de los <em>Tres ensayos</em>: la pulsión no trae su objeto de fábrica. Un mismo objeto puede servir a varias pulsiones a la vez; y una pulsión puede cambiar de objeto indefinidamente.</p><p>Cuando la pulsión se aferra a un objeto de manera especialmente firme, hablamos de <strong>fijación</strong>. La contingencia del objeto es la clave de toda la plasticidad de la vida sexual humana — y de que existan destinos de pulsión.</p>`,
      },
      {
        titulo: "Los cuatro destinos de pulsión",
        contenido: `<p>La pulsión, en su recorrido, puede sufrir cuatro <strong>destinos</strong> (Triebschicksale):</p><ul><li><strong>El trastorno hacia lo contrario</strong> (vuelta a lo opuesto).</li><li><strong>La vuelta hacia la persona propia</strong>.</li><li><strong>La represión</strong> (tratada en su propio texto).</li><li><strong>La sublimación</strong> (tratada aparte).</li></ul><p>En este trabajo Freud desarrolla sobre todo los dos primeros, mostrándolos operar juntos en los grandes pares de pulsiones parciales.</p>`,
      },
      {
        titulo: "Vuelta a lo contrario y vuelta sobre sí: los pares",
        contenido: `<p>Los dos primeros destinos se ven claramente en los pares <strong>sadismo / masoquismo</strong> y <strong>placer de ver / de ser visto</strong> (escoptofilia / exhibicionismo).</p><ul><li><strong>Trastorno hacia lo contrario</strong>: la meta se invierte de <em>activa</em> a <em>pasiva</em> (martirizar → ser martirizado; ver → ser visto).</li><li><strong>Vuelta sobre la persona propia</strong>: cambia el <em>objeto</em> — de otro se pasa a uno mismo (se conserva la meta pero el objeto es el yo).</li></ul><p>Freud reconstruye los <strong>tres tiempos</strong> (por ejemplo del masoquismo): 1) sadismo activo sobre otro; 2) tiempo reflexivo — la violencia se vuelve sobre el propio yo (masoquismo); 3) se busca a otro que ejerza la acción, ahora en posición pasiva. El tiempo intermedio (reflexivo) es el decisivo.</p>`,
      },
      {
        titulo: "Amor y odio: el odio es más antiguo",
        contenido: `<p>El par <strong>amor / odio</strong> parece uno más, pero Freud advierte que no funciona como los otros. El <strong>odio es más antiguo que el amor</strong>: nace de la relación primordial del yo con el <em>mundo exterior</em> en tanto fuente de estímulos displacenteros. El yo primitivo introyecta lo placentero (lo hace parte de sí) y expulsa/odia lo displacentero (lo arroja afuera).</p><p>El amor, en cambio, es tardío y ligado a la relación de objeto sexual. Por eso amor y odio tienen orígenes distintos y la ambivalencia es estructural en la vida anímica.</p>`,
        clinico:
          "La ambivalencia (coexistencia de amor y odio hacia el mismo objeto) es central en la neurosis obsesiva y reaparece en el duelo/melancolía (1917) y en el malestar en la cultura (1930).",
      },
    ],
    biblio:
      'Freud (1915) "Pulsiones y destinos de pulsión", XIV. Puntos clave: pulsión como concepto límite y fuerza constante; las cuatro características (esfuerzo, meta, objeto, fuente); los cuatro destinos; vuelta a lo contrario y vuelta sobre sí en sadismo/masoquismo y ver/ser visto; amor y odio.',
    tipParcial:
      "Pregunta típica: enumerar y definir las <strong>cuatro características</strong> (esfuerzo, meta, objeto, fuente), sabiendo que la <strong>meta es siempre la satisfacción</strong> y el <strong>objeto lo más variable</strong>. Y explicar el mecanismo de los pares (sadismo/masoquismo, ver/ser visto) con los dos destinos combinados: <strong>trastorno a lo contrario</strong> (activo→pasivo) + <strong>vuelta sobre la persona propia</strong> (cambio de objeto), con el tiempo reflexivo intermedio como decisivo.",
    preguntas: [
      {
        q: "¿Por qué la pulsión se distingue de un estímulo externo?",
        opciones: [
          "Porque la pulsión es más débil y se puede ignorar fácilmente.",
          "Porque del estímulo externo se puede huir con una acción motriz, mientras que la pulsión actúa como una fuerza constante interna de la que no se puede huir.",
          "Porque la pulsión proviene del mundo exterior y el estímulo del interior del cuerpo.",
          "Porque la pulsión no exige ningún trabajo al aparato psíquico.",
        ],
        correcta: 1,
        exp: "La pulsión es una fuerza constante (konstante Kraft) que empuja desde el interior del cuerpo; no hay fuga motriz posible, por eso obliga al aparato a tramitarla. El estímulo externo, en cambio, cesa con una huida. La pulsión es el representante psíquico de lo somático.",
      },
      {
        q: "¿Cuáles son las cuatro características de la pulsión?",
        opciones: [
          "Condensación, desplazamiento, figurabilidad y elaboración secundaria.",
          "Esfuerzo (Drang), meta (Ziel), objeto (Objekt) y fuente (Quelle).",
          "Oral, anal, fálica y genital.",
          "Represión, regresión, sublimación y proyección.",
        ],
        correcta: 1,
        exp: "Esfuerzo = factor motor (cantidad de fuerza). Meta = siempre la satisfacción (cancelar el estímulo de la fuente). Objeto = aquello en/mediante lo cual se alcanza la meta, lo más variable. Fuente = el proceso somático (zona erógena) que la pulsión representa.",
      },
      {
        q: "De las cuatro características, ¿cuál es la más variable y por qué?",
        opciones: [
          "La fuente, porque cambia de órgano constantemente.",
          "La meta, porque a veces es la satisfacción y a veces no.",
          "El objeto, porque no está ligado originariamente a la pulsión: puede cambiar cuantas veces haga falta, y un mismo objeto puede servir a varias pulsiones (la fijación es cuando se aferra).",
          "El esfuerzo, porque su cantidad de fuerza fluctúa sin cesar.",
        ],
        correcta: 2,
        exp: "El objeto es lo más contingente: la pulsión no lo trae de fábrica (tesis de Tres ensayos). Puede sustituirse, y un objeto puede satisfacer a varias pulsiones. La fijación es un aferramiento particularmente firme a un objeto. La meta, en cambio, es siempre la satisfacción.",
      },
      {
        q: "¿Cuáles son los cuatro destinos de pulsión?",
        opciones: [
          "Oral, anal, fálico y genital.",
          "El trastorno hacia lo contrario, la vuelta hacia la persona propia, la represión y la sublimación.",
          "Condensación, desplazamiento, represión y proyección.",
          "Fijación, regresión, formación reactiva y anulación.",
        ],
        correcta: 1,
        exp: "Los cuatro destinos: trastorno a lo contrario, vuelta sobre la persona propia, represión y sublimación. En este texto Freud desarrolla sobre todo los dos primeros; la represión y la sublimación tienen tratamiento aparte.",
      },
      {
        q: "En el par sadismo/masoquismo, ¿cómo operan los destinos de pulsión?",
        opciones: [
          "Solo por represión: el sadismo se reprime y desaparece.",
          "Por dos destinos combinados: trastorno a lo contrario (la meta pasa de activa a pasiva: martirizar → ser martirizado) y vuelta sobre la persona propia (el objeto pasa de otro al propio yo), con un tiempo reflexivo intermedio decisivo.",
          "Por sublimación: la agresión se transforma directamente en obra cultural.",
          "Por proyección: la agresión se atribuye a otro sin cambiar de meta.",
        ],
        correcta: 1,
        exp: "Freud reconstruye tres tiempos: 1) sadismo activo sobre otro; 2) tiempo reflexivo — la violencia se vuelve sobre el yo propio (masoquismo); 3) se busca a otro que ejerza la acción mientras el sujeto queda pasivo. El tiempo 2 (vuelta sobre sí) es el decisivo. Mismo esquema en ver/ser visto.",
      },
      {
        q: "¿Por qué Freud sostiene que 'el odio es más antiguo que el amor'?",
        opciones: [
          "Porque los seres humanos nacen malvados.",
          "Porque el odio nace de la relación primordial del yo con el mundo exterior displacentero (el yo expulsa/odia lo que le causa displacer), mientras el amor es tardío y ligado a la relación de objeto sexual.",
          "Porque el amor no existe en el psiquismo, es una ilusión cultural.",
          "Porque el odio y el amor son exactamente el mismo afecto.",
        ],
        correcta: 1,
        exp: "El yo primitivo introyecta lo placentero (lo hace parte de sí) y expulsa/odia lo displacentero del mundo exterior. Ese odio-rechazo es anterior al amor, que se organiza después en torno al objeto sexual. De ahí la ambivalencia estructural amor/odio en la vida anímica.",
      },
    ],
  },

  // ---------------------------------------------------------
  // LA REPRESIÓN (1915)
  // ---------------------------------------------------------
  {
    id: "represion",
    practico: "La represión (1915)",
    titulo: "La represión",
    subtitulo:
      "Represión primaria y secundaria · esfuerzo de dar caza · representación y afecto · retorno",
    teoria: [
      {
        titulo: "Qué es la represión y bajo qué condición",
        contenido: `<p>La <strong>represión</strong> es uno de los destinos de pulsión. Su condición es precisa: que la <em>satisfacción</em> de la pulsión, siendo en sí posible, produciría <strong>displacer en lugar de placer</strong> (por su conflicto con otras exigencias del aparato).</p><p>Como de la pulsión <strong>no se puede huir</strong> (es fuerza constante), tampoco basta con condenarla: hay que hacer algo con su representante psíquico. La esencia de la represión consiste en <strong>mantener algo alejado de la conciencia</strong>, rechazarlo (Ablehnung). No es aniquilar la pulsión — es cortarle el acceso a lo consciente.</p>`,
      },
      {
        titulo: "Represión primaria (Urverdrängung)",
        contenido: `<p>Primer tiempo, fundante. A un <strong>representante psíquico</strong> de la pulsión se le rehúsa de entrada la admisión en lo consciente. Con eso se produce una <strong>fijación</strong>: ese representante queda fijado, inmutable, y la pulsión ligada a él.</p><p>La represión primaria <strong>funda el inconsciente</strong>: es su condición de existencia. Nunca fue consciente, así que no hay para él un "volver" a la conciencia. Y funciona como <strong>núcleo de atracción</strong>: desde él, lo primariamente reprimido atrae hacia sí a otras representaciones.</p>`,
      },
      {
        titulo: "Represión propiamente dicha (esfuerzo de dar caza)",
        contenido: `<p>Segundo tiempo: la <strong>represión secundaria</strong> o "esfuerzo de dar caza" (Nachdrängen). Recae sobre los <strong>retoños</strong> y derivados de lo primariamente reprimido, o sobre representaciones que entraron en <em>conexión asociativa</em> con ese núcleo.</p><p>Actúa por una <strong>doble fuerza</strong>:</p><ul><li><strong>Atracción</strong> desde abajo: lo primariamente reprimido tira de las representaciones afines.</li><li><strong>Repulsión</strong> desde arriba: lo consciente/preconsciente rechaza esas representaciones.</li></ul><p>Sin las dos fuerzas no hay represión secundaria. Por eso Freud insiste: la represión primaria es la condición lógica de la secundaria.</p>`,
      },
      {
        titulo: "La represión es móvil y cuesta energía",
        contenido: `<p>La represión no es un acto único ni de una vez para siempre. Es <strong>individual</strong> (recae sobre representaciones puntuales), <strong>móvil</strong> y exige un <strong>gasto de energía constante</strong> — una <em>contrainvestidura</em> que la sostiene.</p><p>Si ese gasto afloja (fatiga, sueño, enfermedad), la represión puede ceder y lo reprimido <strong>retorna</strong>. Esto explica por qué el material reprimido no está "muerto": está activo, empujando, sostenido a raya solo mientras se paga el costo energético.</p>`,
      },
      {
        titulo: "Destinos separados: representación y afecto",
        contenido: `<p>Un punto decisivo: la pulsión tiene dos componentes que corren <strong>suerte separada</strong>:</p><ul><li>La <strong>representación</strong> (la idea, el contenido): es lo que la represión propiamente expulsa de la conciencia.</li><li>El <strong>monto de afecto</strong> (el quantum, la carga cuantitativa): tiene otros destinos posibles — puede <em>transformarse en angustia</em>, <em>desplazarse</em> a otra representación, o ser <em>sofocado/suprimido</em>.</li></ul><p>Estos tres destinos del afecto ordenan los cuadros clínicos: <strong>angustia</strong> (fobia), <strong>conversión</strong> (histeria: el afecto va al cuerpo), <strong>desplazamiento</strong> (neurosis obsesiva). Retoma las neuropsicosis de defensa.</p>`,
        clinico:
          "Retoma P7b: los tres destinos del afecto (conversión / desplazamiento / transformación en angustia) explican por qué un mismo mecanismo (represión) da cuadros distintos.",
      },
      {
        titulo: "El retorno de lo reprimido y las formaciones sustitutivas",
        contenido: `<p>La represión <strong>fracasa</strong> en su cometido: no logra silenciar del todo lo reprimido. Éste sigue empujando y produce <strong>retoños</strong>, <strong>formaciones sustitutivas</strong> y <strong>síntomas</strong>, que son sus vías de retorno deformado.</p><p>Freud lo muestra en distintos cuadros: en la <em>fobia</em> el afecto retorna como angustia ligada a un objeto sustituto; en la <em>histeria de conversión</em>, como síntoma corporal; en la <em>neurosis obsesiva</em>, por desplazamiento a representaciones nimias. El síntoma es siempre <strong>transacción</strong>: retorno de lo reprimido y defensa a la vez.</p>`,
      },
    ],
    biblio:
      'Freud (1915) "La represión", XIV. Puntos clave: condición de la represión (satisfacción → displacer); represión primaria (fijación, funda el Icc) y secundaria (esfuerzo de dar caza, doble fuerza); destinos separados de representación y afecto; el retorno de lo reprimido.',
    tipParcial:
      "Pregunta típica: distinguir con precisión los <strong>dos tiempos</strong> — represión <strong>primaria</strong> (fijación, funda el inconsciente, nunca fue consciente, núcleo de atracción) y <strong>secundaria</strong> (esfuerzo de dar caza sobre los retoños, con doble fuerza: atracción desde abajo + repulsión desde arriba). Y explicar que la represión recae sobre la <strong>representación</strong>, mientras el <strong>afecto</strong> sigue destinos separados (angustia / desplazamiento / conversión) → las distintas neurosis. El retorno de lo reprimido.",
    preguntas: [
      {
        q: "¿Cuál es la condición para que opere la represión?",
        opciones: [
          "Que la pulsión sea imposible de satisfacer por razones externas.",
          "Que la satisfacción de la pulsión, siendo en sí posible, produciría displacer en vez de placer por su conflicto con otras exigencias del aparato.",
          "Que el sujeto decida conscientemente olvidar la representación.",
          "Que la pulsión pierda toda su energía y se extinga sola.",
        ],
        correcta: 1,
        exp: "La represión se activa cuando satisfacer la pulsión daría displacer (por conflicto con otras exigencias). Como de la pulsión no se puede huir, se le corta el acceso a la conciencia. La esencia de la represión es mantener algo alejado de lo consciente (rechazo).",
      },
      {
        q: "¿Qué caracteriza a la represión primaria (Urverdrängung)?",
        opciones: [
          "Es el rechazo de una representación que antes fue consciente y luego se expulsa.",
          "Es el primer tiempo: al representante psíquico de la pulsión se le rehúsa la admisión en lo consciente, se produce una fijación, y con ello se funda el inconsciente; funciona como núcleo de atracción.",
          "Es la represión que recae sobre los sueños durante el dormir.",
          "Es un mecanismo consciente y voluntario de olvido.",
        ],
        correcta: 1,
        exp: "La represión primaria es fundante: nunca hubo paso por la conciencia, hay fijación del representante, y queda constituido el inconsciente. Actúa como núcleo que atrae hacia sí las representaciones afines. Es la condición lógica de la represión secundaria.",
      },
      {
        q: "El 'esfuerzo de dar caza' (represión secundaria) actúa por:",
        opciones: [
          "Una sola fuerza: la voluntad consciente del yo.",
          "Una doble fuerza: atracción desde abajo (lo primariamente reprimido tira de las representaciones afines) y repulsión desde arriba (lo consciente/preconsciente las rechaza).",
          "El azar de las asociaciones, sin ninguna fuerza dirigida.",
          "La descarga completa del afecto en el síntoma.",
        ],
        correcta: 1,
        exp: "La represión secundaria recae sobre los retoños y derivados asociativos del núcleo reprimido. Requiere las dos fuerzas: la atracción del núcleo primario y la repulsión de lo consciente. Por eso sin represión primaria no podría haber secundaria.",
      },
      {
        q: "¿Por qué la represión exige un gasto de energía constante?",
        opciones: [
          "Porque una vez reprimido el material queda muerto y no vuelve a moverse.",
          "Porque lo reprimido sigue empujando: mantenerlo fuera de la conciencia requiere una contrainvestidura permanente; si el gasto afloja, lo reprimido retorna.",
          "Porque la represión debe renovarse solo una vez en la vida.",
          "Porque el afecto se consume por completo en el acto represivo.",
        ],
        correcta: 1,
        exp: "La represión es móvil e individual y se sostiene por contrainvestidura. Lo reprimido está vivo y activo; solo se lo mantiene a raya mientras se paga el costo energético. Cuando ese gasto cede (sueño, fatiga), lo reprimido retorna. Por eso no es un acto único.",
      },
      {
        q: "En la represión, ¿qué ocurre con la representación y con el afecto?",
        opciones: [
          "Ambos desaparecen juntos y por completo de la vida psíquica.",
          "Corren suerte separada: la represión expulsa la representación de la conciencia, mientras el monto de afecto sigue destinos propios (transformarse en angustia, desplazarse o ser sofocado).",
          "El afecto se expulsa y la representación permanece intacta en la conciencia.",
          "Los dos se subliman automáticamente en obra cultural.",
        ],
        correcta: 1,
        exp: "Punto central: pulsión = representación + monto de afecto, con destinos separados. La represión toca la representación; el afecto puede volverse angustia (fobia), ir al cuerpo (conversión histérica) o desplazarse (obsesiva). Los tres destinos del afecto ordenan los cuadros clínicos.",
      },
      {
        q: "Articulación con las neuropsicosis: ¿cómo se conectan los destinos del afecto con los distintos cuadros?",
        opciones: [
          "No hay conexión: cada cuadro tiene un mecanismo totalmente distinto.",
          "Un mismo mecanismo (la represión sobre la representación) da cuadros distintos según el destino del afecto: angustia → fobia; conversión al cuerpo → histeria; desplazamiento a representaciones nimias → neurosis obsesiva.",
          "Todos los cuadros resultan de la sublimación del afecto.",
          "El destino del afecto determina el sexo del paciente, no el cuadro clínico.",
        ],
        correcta: 1,
        exp: "Retoma P7b (neuropsicosis de defensa): el afecto desligado de la representación reprimida no se evapora (principio de constancia) — se tramita de tres modos, y cada modo define un cuadro. La represión es el mecanismo común; el destino del afecto, la diferencia.",
      },
    ],
  },

  // ---------------------------------------------------------
  // LO INCONCIENTE (1915)
  // ---------------------------------------------------------
  {
    id: "inconciente",
    practico: "Lo inconciente (1915)",
    titulo: "Lo inconciente",
    subtitulo:
      "Tres acepciones · características del sistema Icc · representación-cosa y representación-palabra",
    teoria: [
      {
        titulo: "Justificación: por qué suponer el inconsciente",
        contenido: `<p>Freud abre defendiendo la <strong>legitimidad y necesidad</strong> de suponer el inconsciente. La conciencia tiene <strong>lagunas</strong>: actos fallidos, sueños, síntomas, ocurrencias que irrumpen sin origen consciente. Estas lagunas solo se vuelven inteligibles si suponemos <strong>procesos psíquicos inconscientes</strong> que las causan.</p><p>El inconsciente no es entonces una especulación metafísica: es una <strong>inferencia necesaria</strong>, del mismo tipo que atribuimos vida psíquica a otras personas. Suponerlo es lo que da coherencia a los fenómenos.</p>`,
      },
      {
        titulo: "Las tres acepciones: descriptivo, dinámico, sistemático",
        contenido: `<p>"Inconsciente" no significa siempre lo mismo. Freud distingue tres usos, que no hay que confundir:</p><ul><li><strong>Descriptivo</strong>: todo lo que en un momento dado no es consciente pero podría serlo — incluye lo <em>preconsciente</em> (un recuerdo latente, disponible).</li><li><strong>Dinámico</strong>: lo <em>reprimido</em>, que no accede a la conciencia porque una fuerza lo rechaza y que pugna por volver. Aquí "inconsciente" implica conflicto.</li><li><strong>Sistemático</strong> (el sistema <em>Icc</em>): un lugar del aparato con <em>leyes propias</em>, distinto del sistema Prcc y del Cc.</li></ul><p>La confusión entre estas acepciones (sobre todo descriptivo vs. sistemático) es un error clásico de parcial.</p>`,
      },
      {
        titulo: "Las características del sistema Icc",
        contenido: `<p>El sistema inconsciente tiene <strong>propiedades particulares</strong>, muy distintas de las del pensamiento consciente. Freud las enumera:</p><ul><li><strong>Ausencia de contradicción</strong>: las mociones coexisten sin anularse; no hay "no", ni duda, ni negación.</li><li><strong>Proceso primario</strong>: movilidad de las investiduras — <em>desplazamiento</em> y <em>condensación</em> gobiernan la energía.</li><li><strong>Atemporalidad</strong>: los procesos del Icc no se ordenan en el tiempo ni se alteran por su transcurso.</li><li><strong>Sustitución de la realidad exterior por la psíquica</strong>: rige el principio de placer, no el examen de realidad.</li></ul><p>Es, en palabras de Freud, un modo de funcionamiento ajeno a la lógica de la conciencia.</p>`,
      },
      {
        titulo: "Proceso primario y proceso secundario",
        contenido: `<p>A cada sistema corresponde un modo de circulación de la energía:</p><ul><li><strong>Proceso primario</strong> (sistema Icc): energía <em>libre</em>, que se desplaza y condensa sin trabas, busca la <strong>identidad perceptiva</strong> (reproducir la percepción del objeto de satisfacción) y no tolera la demora.</li><li><strong>Proceso secundario</strong> (Prcc/Cc): energía <em>ligada</em>, sometida al examen de realidad, que tolera la demora y busca la <strong>identidad de pensamiento</strong>.</li></ul><p>Retoma P9a/P9b: el proceso primario es el modo de funcionamiento del inconsciente; el secundario, el del yo racional que calcula y espera.</p>`,
      },
      {
        titulo: "Representación-cosa y representación-palabra",
        contenido: `<p>La distinción más importante del texto. Una <strong>representación consciente</strong> comprende dos elementos:</p><ul><li>La <strong>representación-cosa</strong> (Sachvorstellung): la huella, la imagen mnémica de la cosa.</li><li>La <strong>representación-palabra</strong> (Wortvorstellung): su ligadura al signo lingüístico.</li></ul><p>La <strong>representación inconsciente es solo la representación-cosa</strong>. Lo que hace que algo pueda hacerse <em>preconsciente/consciente</em> es su <strong>enlace con la representación-palabra</strong>.</p><p>Consecuencia clave: la <strong>represión</strong> (en las neurosis de transferencia) consiste en <em>denegar a la representación-cosa su traducción en palabras</em>. Por eso la cura apunta a restablecer esa ligadura cosa–palabra: poner en palabras lo reprimido.</p>`,
        clinico:
          "En la esquizofrenia Freud observa lo contrario: se trata a las palabras como si fueran cosas (el lenguaje se vuelve concreto). Signo del retiro de investidura de los objetos y del predominio de la representación-palabra desligada.",
      },
      {
        titulo: "El comercio entre los sistemas y la censura",
        contenido: `<p>Los sistemas no están aislados: hay <strong>tránsito</strong>, regulado por una <strong>censura</strong>. Los retoños de lo inconsciente pueden hacerse conscientes si logran <em>burlar</em> la censura (así se forman sueños, síntomas, chistes).</p><p>La <strong>represión</strong> es, en este marco, un <em>corte de comunicación</em> entre el Icc y el Prcc: se deniega el pasaje. La dirección normal de la energía va del Icc/Prcc hacia la motilidad; en el sueño, se invierte (regresión). Restablecer el enlace cosa–palabra es, otra vez, la tarea de la cura.</p>`,
      },
    ],
    biblio:
      'Freud (1915) "Lo inconciente", XIV. Puntos clave: justificación del Icc; las tres acepciones (descriptivo, dinámico, sistemático); las características del sistema Icc (ausencia de contradicción, atemporalidad, proceso primario, principio de placer); representación-cosa vs. representación-palabra y su relación con la represión.',
    tipParcial:
      "Pregunta típica: distinguir sin confundir las <strong>tres acepciones</strong> (descriptivo = todo lo latente, incluye Prcc; dinámico = lo reprimido; sistemático = el sistema Icc con leyes propias) y enumerar las <strong>características del sistema Icc</strong>. La estrella del texto: la distinción <strong>representación-cosa / representación-palabra</strong> — la representación Icc es solo cosa; lo que hace consciente a algo es su enlace a la palabra; la represión deniega esa traducción, y la cura la restablece.",
    preguntas: [
      {
        q: "¿Con qué argumento justifica Freud la suposición del inconsciente?",
        opciones: [
          "Con una intuición filosófica sobre el alma que no requiere pruebas.",
          "Con las lagunas de la conciencia (actos fallidos, sueños, síntomas, ocurrencias): solo se vuelven inteligibles suponiendo procesos psíquicos inconscientes que las causan; es una inferencia necesaria.",
          "Con experimentos de laboratorio sobre la memoria consciente.",
          "Con la afirmación de que todo lo psíquico es consciente.",
        ],
        correcta: 1,
        exp: "El inconsciente no es especulación metafísica sino inferencia: las lagunas y discontinuidades de la conciencia exigen suponer procesos inconscientes que les den coherencia. Es del mismo tipo lógico que atribuir vida psíquica a los demás.",
      },
      {
        q: "¿Cuál es la diferencia entre el inconsciente descriptivo y el sistemático?",
        opciones: [
          "El descriptivo es lo reprimido y el sistemático es lo consciente.",
          "El descriptivo abarca todo lo latente/no-consciente en un momento (incluye lo preconsciente); el sistemático (Icc) es el sistema con leyes propias, sede de lo reprimido, distinto del Prcc y del Cc.",
          "Son sinónimos exactos, se usan indistintamente.",
          "El descriptivo es dinámico y el sistemático es estático.",
        ],
        correcta: 1,
        exp: "Tres acepciones: descriptivo (todo lo no-consciente ahora, incluye lo preconsciente disponible), dinámico (lo reprimido en conflicto) y sistemático (el sistema Icc con sus leyes). Confundir descriptivo con sistemático —tratar todo lo latente como si fuera el sistema Icc— es un error clásico.",
      },
      {
        q: "¿Cuál de estas NO es una característica del sistema Icc?",
        opciones: [
          "Ausencia de contradicción (las mociones coexisten sin anularse).",
          "Atemporalidad (los procesos no se ordenan en el tiempo).",
          "Examen de realidad y tolerancia a la demora.",
          "Proceso primario (desplazamiento y condensación) y sustitución de la realidad exterior por la psíquica (principio de placer).",
        ],
        correcta: 2,
        exp: "El examen de realidad y la tolerancia a la demora son propios del proceso SECUNDARIO (Prcc/Cc), no del Icc. El sistema Icc se caracteriza por: ausencia de contradicción, atemporalidad, proceso primario (desplazamiento/condensación) y primado del principio de placer.",
      },
      {
        q: "¿Qué distingue a la representación inconsciente de la consciente?",
        opciones: [
          "La representación inconsciente es solo la representación-palabra; la consciente agrega la cosa.",
          "La representación inconsciente es solo la representación-cosa (la huella de la cosa); la consciente comprende la representación-cosa MÁS su enlace con la representación-palabra.",
          "No hay ninguna diferencia de composición entre ambas.",
          "La representación inconsciente carece por completo de contenido.",
        ],
        correcta: 1,
        exp: "Distinción central de 1915: la representación consciente = representación-cosa + representación-palabra. La inconsciente es solo cosa. Lo que permite que algo se haga preconsciente/consciente es su ligadura a la palabra.",
      },
      {
        q: "Según la distinción cosa/palabra, ¿en qué consiste la represión en las neurosis de transferencia?",
        opciones: [
          "En borrar por completo la representación-cosa de la memoria.",
          "En denegar a la representación-cosa su traducción en palabras (su enlace con la representación-palabra), de modo que queda en el sistema Icc sin acceso a la conciencia.",
          "En traducir la cosa a demasiadas palabras a la vez.",
          "En reemplazar la palabra por una imagen visual.",
        ],
        correcta: 1,
        exp: "La represión corta el enlace cosa–palabra: la representación-cosa queda desligada del signo lingüístico y por eso permanece inconsciente. De ahí que la cura apunte a restablecer esa ligadura — poner en palabras lo reprimido para que pueda hacerse consciente y tramitarse.",
      },
      {
        q: "¿Qué particularidad muestra el lenguaje en la esquizofrenia según Freud?",
        opciones: [
          "Que las palabras desaparecen por completo del habla del paciente.",
          "Que se trata a las palabras como si fueran cosas (el lenguaje se vuelve concreto), signo del retiro de investidura de los objetos y del predominio de la representación-palabra desligada.",
          "Que el paciente recupera la ligadura normal entre cosa y palabra.",
          "Que el lenguaje se vuelve más lógico y ordenado que en el neurótico.",
        ],
        correcta: 1,
        exp: "En la esquizofrenia se invierte la relación: las palabras se tratan como cosas (concretud del lenguaje). Freud lo lee como efecto del retiro de libido de los objetos: queda una investidura de representaciones-palabra desligadas de las representaciones-cosa. Contrasta con la neurosis de transferencia.",
      },
    ],
  },

  // ---------------------------------------------------------
  // DUELO Y MELANCOLÍA (1917)
  // ---------------------------------------------------------
  {
    id: "duelo",
    practico: "Duelo y melancolía (1917)",
    titulo: "Duelo y melancolía",
    subtitulo:
      "Pérdida de objeto · trabajo del duelo · identificación · la sombra del objeto · autorreproches",
    teoria: [
      {
        titulo: "El duelo como reacción normal",
        contenido: `<p>El <strong>duelo</strong> es la reacción frente a la <em>pérdida</em> de un objeto amado — una persona, o una abstracción puesta en su lugar (la patria, la libertad, un ideal). Es doloroso, pero <strong>normal</strong>: no es patológico y no requiere tratamiento; se supera con el tiempo.</p><p>El <strong>trabajo del duelo</strong> consiste en retirar la libido de cada recuerdo y expectativa ligados al objeto perdido, <em>pieza por pieza</em>. Es un trabajo lento y costoso (por eso el duelo consume energía y aplana el interés por el mundo). Cuando se completa, el <strong>yo queda otra vez libre</strong> y disponible para nuevos objetos.</p>`,
      },
      {
        titulo: "La melancolía y su enigma",
        contenido: `<p>La <strong>melancolía</strong> comparte rasgos con el duelo: desazón profunda, cancelación del interés por el mundo, pérdida de la capacidad de amar, inhibición general. Pero <strong>agrega algo</strong> que el duelo no tiene: una <strong>extraordinaria rebaja del sentimiento de sí</strong> — autorreproches, autodenigración, delirio de empequeñecimiento, expectativa de castigo.</p><p>Freud lo condensa en una fórmula: en el <strong>duelo</strong> el mundo se ha vuelto pobre y vacío; en la <strong>melancolía</strong>, es el <strong>yo</strong> el que se empobrece. Esa es la diferencia clínica decisiva.</p>`,
      },
      {
        titulo: 'La sombra del objeto cayó sobre el yo',
        contenido: `<p>¿Cómo entender esa autodenigración? En la melancolía la <strong>pérdida es más inconsciente</strong>: el sujeto sabe <em>a quién</em> perdió, pero no <em>qué</em> perdió en él. En vez de retirar la libido y desplazarla a otro objeto (como el duelo), la libido libre se <strong>retira sobre el yo</strong> y sirve para establecer una <strong>identificación</strong> del yo con el objeto abandonado.</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">"La sombra del objeto cayó sobre el yo."</p><p>El yo se identifica con el objeto perdido: pasa a llevarlo dentro. Así, la pérdida de objeto se transforma en una <strong>alteración del yo</strong>.</p>`,
      },
      {
        titulo: "Los autorreproches son reproches al objeto",
        contenido: `<p>La clave clínica más citada: si uno <strong>escucha bien</strong> los autorreproches del melancólico, nota que <em>no le caben a él</em> — le caben al <strong>objeto amado</strong>. Son reproches contra el objeto que, por efecto de la identificación, recaen sobre el propio yo (que ahora <em>es</em> el objeto).</p><p>Freud juega con las palabras: las <em>quejas</em> (Klagen) son en verdad <strong>querellas</strong> (Anklagen). El conflicto ambivalente con el objeto se transforma en una <strong>escisión interna</strong>: una instancia crítica (la conciencia moral) se enfrenta al yo alterado por identificación y lo martiriza.</p>`,
        clinico:
          "La 'instancia crítica' que juzga y castiga al yo en la melancolía es un antecedente directo del superyó (1923). Escuchar los autorreproches como dirigidos al objeto es una regla de lectura clínica.",
      },
      {
        titulo: "Elección narcisista e identificación regrediente",
        contenido: `<p>¿Por qué en unos hay duelo y en otros melancolía? Freud señala una <strong>condición</strong>: que la elección de objeto haya sido de tipo <strong>narcisista</strong>. Entonces, ante la pérdida, la investidura de objeto no se desplaza a otro objeto sino que <strong>regresa al narcisismo</strong>: se abandona la relación de objeto y se la reemplaza por <em>identificación</em>.</p><p>Es una <strong>regresión</strong> de la libido de objeto al yo. Este mecanismo —perder un objeto y erigirlo dentro del yo por identificación— será central en 1923: así se forman el yo y el superyó como precipitados de objetos resignados.</p>`,
      },
      {
        titulo: "Ambivalencia y manía",
        contenido: `<p>El <strong>odio</strong> que forma parte de la relación ambivalente con el objeto encuentra, en la melancolía, una vía: se satisface <strong>haciendo sufrir al yo</strong> identificado con el objeto. De ahí el sadismo vuelto contra uno mismo, y el riesgo suicida (el yo se trata como al objeto odiado).</p><p>La <strong>manía</strong> es el reverso: un estado de triunfo y liberación en que el yo se ha sobrepuesto a la pérdida (o la ha superado por agotamiento del reproche). Melancolía y manía trabajan sobre el mismo "complejo"; la manía celebra la victoria sobre lo que en la melancolía aplastaba al yo.</p>`,
      },
    ],
    biblio:
      'Freud (1917 [1915]) "Duelo y melancolía", XIV. Puntos clave: trabajo del duelo (retiro de libido pieza por pieza); melancolía (empobrecimiento del yo, autorreproches); "la sombra del objeto cayó sobre el yo"; identificación por regresión narcisista; los autorreproches como reproches al objeto; ambivalencia y manía.',
    tipParcial:
      'Pregunta típica: <strong>distinguir duelo de melancolía</strong> — en el duelo se empobrece el mundo (la libido se retira del objeto y se desplaza a otro); en la melancolía se empobrece el yo (la libido se retira sobre el yo y se identifica con el objeto perdido). La fórmula <strong>"la sombra del objeto cayó sobre el yo"</strong> y la regla de que los <strong>autorreproches son reproches al objeto</strong>. Articulación clave: la identificación por regresión narcisista anticipa la formación del yo/superyó (1923).',
    preguntas: [
      {
        q: "¿En qué consiste el trabajo del duelo?",
        opciones: [
          "En olvidar rápidamente al objeto perdido para seguir adelante.",
          "En retirar la libido de cada recuerdo y expectativa ligados al objeto perdido, pieza por pieza; es lento y costoso, y al completarse el yo queda otra vez libre.",
          "En identificarse con el objeto perdido para conservarlo dentro del yo.",
          "En reprochar al objeto perdido por haberse ido.",
        ],
        correcta: 1,
        exp: "El duelo es normal: la libido se desliga del objeto pieza por pieza (cada recuerdo, cada expectativa). Ese trabajo consume energía y aplana el interés por el mundo, pero al terminar deja al yo libre para nuevos objetos. No hay empobrecimiento del yo.",
      },
      {
        q: "¿Cuál es la diferencia clínica decisiva entre duelo y melancolía?",
        opciones: [
          "El duelo dura más que la melancolía.",
          "En el duelo se empobrece el mundo (se vuelve pobre y vacío); en la melancolía se empobrece el yo (rebaja del sentimiento de sí, autorreproches, autodenigración).",
          "La melancolía no implica ninguna pérdida de objeto.",
          "El duelo produce delirio y la melancolía no.",
        ],
        correcta: 1,
        exp: "Fórmula de Freud: en el duelo el mundo se ha vuelto pobre y vacío; en la melancolía es el yo el que se empobrece. La melancolía agrega la extraordinaria rebaja del sentimiento de sí (autorreproches, delirio de empequeñecimiento) que el duelo no tiene.",
      },
      {
        q: 'La fórmula "la sombra del objeto cayó sobre el yo" describe:',
        opciones: [
          "El desplazamiento de la libido a un objeto nuevo tras la pérdida.",
          "Que la libido libre, en vez de desplazarse a otro objeto, se retira sobre el yo y establece una identificación del yo con el objeto abandonado, transformando la pérdida de objeto en una alteración del yo.",
          "La represión del recuerdo del objeto perdido.",
          "La sublimación del duelo en actividad creativa.",
        ],
        correcta: 1,
        exp: "En la melancolía la libido no se desplaza a otro objeto: se retrae al yo y sirve para identificarlo con el objeto perdido. El yo pasa a llevar el objeto dentro. Así la pérdida de objeto se convierte en alteración del yo — la 'sombra' del objeto lo recubre.",
      },
      {
        q: "¿Cómo hay que leer los autorreproches del melancólico?",
        opciones: [
          "Como descripciones objetivas de los defectos reales del yo.",
          "Como reproches que en verdad van dirigidos al objeto amado y que, por la identificación del yo con el objeto, recaen sobre el propio yo (las quejas son querellas).",
          "Como simples exageraciones sin sentido.",
          "Como reproches dirigidos al analista.",
        ],
        correcta: 1,
        exp: "Regla de lectura clínica: escuchados bien, los autorreproches no le caben al yo sino al objeto. Son reproches al objeto que, por la identificación, se vuelven contra el yo. Klagen (quejas) = Anklagen (querellas). El conflicto ambivalente con el objeto deviene escisión interna.",
      },
      {
        q: "¿Qué condición favorece la melancolía en lugar del duelo?",
        opciones: [
          "Que la pérdida sea real y consciente.",
          "Que la elección de objeto haya sido narcisista, de modo que ante la pérdida la libido regresa al narcisismo y reemplaza la relación de objeto por identificación.",
          "Que el objeto perdido haya sido indiferente para el sujeto.",
          "Que el sujeto no haya amado nunca al objeto.",
        ],
        correcta: 1,
        exp: "La melancolía supone una elección de objeto narcisista: por eso, perdido el objeto, la libido no se desplaza a otro sino que regresa al yo y se identifica con el objeto. Es una regresión de la libido de objeto al narcisismo — mecanismo que en 1923 explica la formación del yo/superyó.",
      },
      {
        q: "Articulación con El yo y el ello (1923): ¿por qué la melancolía es un antecedente de la segunda tópica?",
        opciones: [
          "Porque en la melancolía desaparece el yo por completo.",
          "Porque muestra el mecanismo de identificación —perder un objeto y erigirlo dentro del yo— y la escisión entre una instancia crítica y el yo, que en 1923 se conceptualizan como formación del yo por identificaciones y como superyó.",
          "Porque la melancolía prueba que no existe el inconsciente.",
          "Porque la manía reemplaza al ello.",
        ],
        correcta: 1,
        exp: "Duelo y melancolía introduce dos piezas de 1923: la identificación como modo de retener el objeto perdido dentro del yo (el yo como precipitado de investiduras de objeto resignadas) y la instancia crítica que juzga y castiga al yo, embrión del superyó.",
      },
    ],
  },

  // ---------------------------------------------------------
  // MÁS ALLÁ DEL PRINCIPIO DE PLACER (1920)
  // ---------------------------------------------------------
  {
    id: "masalla",
    practico: "Más allá del ppio de placer (1920)",
    titulo: "Más allá del principio de placer",
    subtitulo:
      "Compulsión de repetición · el fort-da · pulsión de muerte · Eros y Thanatos",
    teoria: [
      {
        titulo: "El principio de placer y su 'más allá'",
        contenido: `<p>Hasta 1920 el aparato psíquico se rige por el <strong>principio de placer</strong>: evitar el displacer (la tensión), buscar el placer (su descarga). Freud encuentra ahora fenómenos que <strong>no se dejan explicar</strong> por ese principio — que parecen ir <em>más allá</em> de él.</p><p>Atención: el principio de placer <strong>no cae</strong>. Sigue vigente en gran parte de la vida anímica. Lo que cae es su <strong>soberanía</strong>: deja de ser el amo absoluto del aparato. Hay algo más originario que a veces lo contraría.</p>`,
      },
      {
        titulo: "Los hechos que no encajan",
        contenido: `<p>Freud reúne varios fenómenos rebeldes al principio de placer:</p><ul><li>Los <strong>sueños traumáticos</strong> de la neurosis de guerra, que repiten una y otra vez la escena penosa — algo que contradice la teoría del sueño como realización de deseo.</li><li>El <strong>juego infantil</strong> del carretel (fort-da).</li><li>La <strong>compulsión de repetición</strong> en la transferencia: el analizado <em>repite en acto</em> lo reprimido, incluso lo displacentero, en lugar de recordarlo (reacción terapéutica negativa).</li></ul><p>Ninguno busca placer: todos <strong>repiten</strong> algo penoso. Eso exige un principio distinto.</p>`,
      },
      {
        titulo: "El juego del fort-da",
        contenido: `<p>Freud observa a su <strong>nieto</strong> (año y medio) jugando con un carretel atado a un hilo: lo <strong>arroja</strong> lejos (<em>fort</em>, "se fue") y lo <strong>recupera</strong> tirando del hilo (<em>da</em>, "acá está"), con evidente satisfacción en el segundo tiempo.</p><p>El juego <strong>escenifica</strong> la partida y el regreso de la madre. El niño, que padeció <em>pasivamente</em> la ausencia (una situación penosa), la <strong>elabora activamente</strong> en el juego: pasa de sufrir la ausencia a <em>manejarla</em>. Es un pasaje de <strong>pasivo a activo</strong> y un intento de <strong>dominar/ligar</strong> por la repetición una vivencia displacentera.</p>`,
      },
      {
        titulo: "La compulsión de repetición",
        contenido: `<p>La <strong>compulsión de repetición</strong> (Wiederholungszwang) es una tendencia a <em>repetir</em> que se impone <strong>incluso contra el principio de placer</strong>, reproduciendo experiencias que no procuran placer alguno. Freud la considera <strong>más originaria, más elemental y más pulsional</strong> que el principio de placer.</p><p>En la clínica se manifiesta como <strong>repetir en lugar de recordar</strong>: el paciente actualiza en la transferencia, en acto, lo que no puede rememorar. La repetición es la marca de algo que insiste por debajo del principio de placer.</p>`,
        clinico:
          "Repetir en vez de recordar: en la transferencia el analizado reproduce en acto lo reprimido. La compulsión de repetición es un obstáculo clínico y, a la vez, la vía por la que se manifiesta lo pulsional.",
      },
      {
        titulo: "La pulsión de muerte",
        contenido: `<p>Para dar cuenta de todo esto, Freud propone un <strong>nuevo dualismo pulsional</strong>:</p><ul><li><strong>Pulsiones de vida</strong> (Eros): tienden a <em>ligar</em>, unir, conservar, crear unidades cada vez mayores (incluye la libido sexual y de autoconservación).</li><li><strong>Pulsión de muerte</strong> (Thanatos): tiende a <em>reducir la tensión a cero</em>, a deshacer las ligazones, a retornar a lo inanimado.</li></ul><p>Definición especulativa: <em>"una pulsión es un esfuerzo, inherente a lo orgánico vivo, de reproducción de un estado anterior"</em>. Como el estado anterior a la vida es lo inorgánico, toda pulsión sería, en su fondo, <strong>conservadora</strong> y tendiente a la muerte. La compulsión de repetición es su expresión más pura.</p>`,
      },
      {
        titulo: "Lo pulsional es conservador; la agresión hacia afuera",
        contenido: `<p>Consecuencia general: <strong>todas las pulsiones son conservadoras</strong> — buscan restaurar un estado anterior, no avanzar hacia lo nuevo. Lo que parece impulso de progreso es, para Freud, rodeo hacia un fin antiguo.</p><p>La pulsión de muerte suele operar en <strong>silencio</strong>, mezclada (<em>fusión pulsional</em>) con Eros. Cuando se <strong>vuelve hacia afuera</strong>, se manifiesta como <strong>agresión y destrucción</strong> (el sadismo es pulsión de muerte desviada al objeto). Este dualismo Eros/Muerte será la base de <em>El malestar en la cultura</em> (1930).</p>`,
      },
    ],
    biblio:
      'Freud (1920) "Más allá del principio de placer", XVIII. Puntos clave: el principio de placer pierde su soberanía; los hechos rebeldes (sueños traumáticos, fort-da, compulsión de repetición); el fort-da (pasivo→activo); la compulsión de repetición como más elemental; el nuevo dualismo Eros / pulsión de muerte; carácter conservador de la pulsión.',
    tipParcial:
      'Pregunta típica: explicar qué es "el más allá" — no que caiga el principio de placer, sino que pierde su <strong>soberanía</strong> ante fenómenos que <strong>repiten lo penoso</strong> (sueños traumáticos, fort-da, compulsión de repetición en la transferencia). El <strong>fort-da</strong> como elaboración <em>activa</em> de lo padecido <em>pasivamente</em>. La <strong>compulsión de repetición</strong> como más elemental que el principio de placer. El nuevo <strong>dualismo Eros / pulsión de muerte</strong> y el carácter conservador de la pulsión.',
    preguntas: [
      {
        q: "¿Qué significa que hay un 'más allá' del principio de placer?",
        opciones: [
          "Que el principio de placer queda completamente refutado y abandonado.",
          "Que el principio de placer no cae, pero pierde su soberanía: hay fenómenos más originarios que a veces lo contrarían (repiten lo penoso en lugar de buscar placer).",
          "Que el placer y el displacer son lo mismo.",
          "Que el aparato psíquico busca siempre el máximo de tensión.",
        ],
        correcta: 1,
        exp: "El principio de placer sigue rigiendo gran parte de la vida anímica; lo que Freud cuestiona es su soberanía absoluta. Ciertos fenómenos (repetición de lo displacentero) revelan algo más elemental por debajo de él. No es refutación, es relativización.",
      },
      {
        q: "¿Cuáles de estos fenómenos llevan a Freud 'más allá' del principio de placer?",
        opciones: [
          "El chiste, el lapsus y el olvido de nombres.",
          "Los sueños traumáticos que repiten la escena penosa, el juego del fort-da y la compulsión de repetición en la transferencia.",
          "La condensación, el desplazamiento y la elaboración secundaria del sueño.",
          "La histeria, la neurosis obsesiva y la paranoia.",
        ],
        correcta: 1,
        exp: "Son fenómenos que repiten lo displacentero: los sueños traumáticos (que contradicen el sueño como realización de deseo), el fort-da, y el repetir-en-acto de la transferencia (reacción terapéutica negativa). Ninguno busca placer; todos insisten en reproducir algo penoso.",
      },
      {
        q: "¿Qué elabora el niño en el juego del fort-da?",
        opciones: [
          "El aprendizaje del lenguaje mediante la repetición de sílabas.",
          "La ausencia y el regreso de la madre: transforma una situación penosa que padeció pasivamente en algo que maneja activamente (pasaje de pasivo a activo), intentando dominar por la repetición.",
          "El deseo de destruir sus juguetes.",
          "La rivalidad con el padre.",
        ],
        correcta: 1,
        exp: "El nieto de Freud arroja el carretel (fort, 'se fue') y lo recupera (da, 'acá está'), escenificando la partida y el regreso de la madre. Convierte el padecer pasivo de la ausencia en un dominio activo. Repite para ligar/dominar la vivencia displacentera: pasivo → activo.",
      },
      {
        q: "La compulsión de repetición se caracteriza porque:",
        opciones: [
          "Siempre produce placer y por eso el sujeto la busca.",
          "Es una tendencia a repetir que se impone incluso contra el principio de placer, reproduciendo experiencias displacenteras; Freud la considera más originaria y elemental que el principio de placer.",
          "Solo aparece en los sueños y nunca en la vigilia.",
          "Es un mecanismo consciente y controlado por el yo.",
        ],
        correcta: 1,
        exp: "La compulsión de repetición (Wiederholungszwang) reproduce lo penoso a pesar del principio de placer. Es más elemental y pulsional que él. En la clínica: el paciente repite en acto (transferencia) lo que no puede recordar. Es la expresión más clara de la pulsión de muerte.",
      },
      {
        q: "¿En qué consiste el nuevo dualismo pulsional que introduce Freud en 1920?",
        opciones: [
          "Pulsiones sexuales vs. pulsiones de autoconservación.",
          "Pulsiones de vida (Eros: ligar, unir, conservar unidades mayores) vs. pulsión de muerte (Thanatos: reducir la tensión a cero, deshacer ligazones, retornar a lo inanimado).",
          "Proceso primario vs. proceso secundario.",
          "Principio de placer vs. principio de realidad.",
        ],
        correcta: 1,
        exp: "El dualismo pasa a ser Eros / pulsión de muerte. Eros liga y crea unidades; la pulsión de muerte tiende al grado cero de tensión y a lo inorgánico. Definición: la pulsión busca reproducir un estado anterior — y el más anterior es lo inanimado. La compulsión de repetición es su marca.",
      },
      {
        q: "Según la nueva teoría, ¿por qué se dice que 'todas las pulsiones son conservadoras'?",
        opciones: [
          "Porque las pulsiones evitan todo cambio y no tienen historia.",
          "Porque toda pulsión es un esfuerzo por reproducir/restaurar un estado anterior; lo que parece impulso de progreso es un rodeo hacia un fin antiguo, y el estado más antiguo es lo inorgánico.",
          "Porque las pulsiones defienden políticamente el orden establecido.",
          "Porque las pulsiones son siempre sexuales.",
        ],
        correcta: 1,
        exp: "Freud define la pulsión como esfuerzo de reproducción de un estado anterior. Por eso son conservadoras: no buscan lo nuevo sino restaurar lo previo. Llevado al límite, el estado anterior a la vida es lo inorgánico — de ahí la tendencia de la pulsión de muerte al grado cero.",
      },
    ],
  },

  // ---------------------------------------------------------
  // EL YO Y EL ELLO (1923)
  // ---------------------------------------------------------
  {
    id: "yo_ello",
    practico: "El yo y el ello (1923)",
    titulo: "El yo y el ello (segunda tópica)",
    subtitulo:
      "Ello · yo · superyó · partes inconscientes del yo · el yo no es amo en su propia casa",
    teoria: [
      {
        titulo: "Por qué hace falta una segunda tópica",
        contenido: `<p>La <strong>primera tópica</strong> (Icc / Prcc / Cc) divide el aparato por una <em>cualidad</em>: ser o no consciente. Pero la clínica muestra un problema: hay <strong>resistencias inconscientes</strong>, y lo que resiste <em>pertenece al yo</em> — es decir, <strong>partes del yo son inconscientes</strong>.</p><p>Entonces "consciente/inconsciente" ya <strong>no alcanza</strong> para dividir el aparato: lo reprimido es Icc, pero también lo son las defensas del yo. Freud pasa de un criterio por <em>cualidad</em> (cc/icc) a un criterio por <strong>instancias</strong>: ello, yo, superyó. La segunda tópica no reemplaza a la primera: la reorganiza.</p>`,
      },
      {
        titulo: "El ello (Es)",
        contenido: `<p>El <strong>ello</strong> es el <strong>polo pulsional</strong> de la personalidad: el reservorio de las pulsiones y de la libido. Está regido por el <strong>proceso primario</strong> y el <strong>principio de placer</strong>. No conoce la lógica, ni la negación, ni el tiempo, ni la contradicción — es puro empuje hacia la satisfacción.</p><p>Freud lo describe como <em>"una olla llena de excitaciones borboteantes"</em>. Es enteramente inconsciente. <strong>Todo lo reprimido es ello, pero el ello no se agota en lo reprimido</strong>: hay en él lo pulsional que nunca fue consciente.</p>`,
      },
      {
        titulo: "El yo (Ich)",
        contenido: `<p>El <strong>yo</strong> es la parte del ello <strong>modificada por el contacto con la realidad</strong>, por mediación del sistema percepción-conciencia. Representa la <em>razón</em> y la <em>prudencia</em>; su tarea es <strong>mediar</strong> entre las exigencias del ello, las de la realidad y las del superyó.</p><p>Pero —punto crucial— <strong>gran parte del yo es inconsciente</strong>: las operaciones defensivas (la represión misma) son yoicas y no conscientes. Freud lo llama <em>"servidor de tres amos"</em> (ello, realidad, superyó) y usa la imagen del <strong>jinete y el caballo</strong>: el yo debe conducir la fuerza muy superior del ello, y a menudo debe guiarlo adonde el caballo quiere ir.</p>`,
      },
      {
        titulo: "El superyó / ideal del yo",
        contenido: `<p>El <strong>superyó</strong> (Über-Ich) es el <strong>heredero del complejo de Edipo</strong>: se forma cuando el niño, en lugar de sostener sus objetos edípicos, se <strong>identifica</strong> con las figuras parentales (con la instancia que prohíbe). Es a la vez:</p><ul><li><strong>Ideal del yo</strong>: el modelo a alcanzar (retoma el narcisismo de 1914).</li><li><strong>Conciencia moral</strong>: la instancia crítica que observa, juzga y <em>castiga</em> al yo.</li></ul><p>Es en buena parte <strong>inconsciente</strong> y puede ser <strong>cruel</strong>: cuanto más reprime el sujeto su propia agresión, <em>más severo</em> se vuelve el superyó contra el yo. Su raíz está en las primeras y más poderosas identificaciones.</p>`,
        clinico:
          "El superyó explica el sentimiento inconsciente de culpa y la reacción terapéutica negativa (el paciente empeora cuando debería mejorar): un superyó que necesita castigar al yo. Base de 1930 (malestar en la cultura).",
      },
      {
        titulo: "El yo no es amo en su propia casa",
        contenido: `<p>La segunda tópica consuma una de las <strong>heridas narcisistas</strong> que el psicoanálisis inflige a la humanidad: el <strong>yo no coincide con la conciencia</strong> y <strong>no es dueño del aparato</strong>. Está <em>determinado</em> por tres poderes: el <strong>ello</strong> (la pulsión), el <strong>superyó</strong> (el mandato y la culpa) y la <strong>realidad</strong> (el mundo exterior).</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">"El yo no es amo en su propia casa."</p><p>La conciencia es apenas una cualidad, la punta visible del aparato. El yo cree decidir, pero es servidor de fuerzas que lo exceden.</p>`,
      },
      {
        titulo: "El yo como precipitado de identificaciones",
        contenido: `<p>¿De dónde sale el yo? Freud retoma el mecanismo de <em>Duelo y melancolía</em>: cuando se resigna un objeto, el yo puede <strong>identificarse</strong> con él y erigirlo dentro de sí. Así, el <strong>carácter del yo es un precipitado</strong> de las investiduras de objeto resignadas — un depósito de la historia de sus amores perdidos.</p><p>El <strong>superyó</strong> es el caso más importante de esto: precipitado de las identificaciones edípicas. La identificación —perder un objeto, volverlo estructura interna— es el motor que en 1923 construye tanto el yo como el superyó.</p>`,
      },
    ],
    biblio:
      'Freud (1923) "El yo y el ello", XIX. Puntos clave: por qué la primera tópica es insuficiente (partes del yo son Icc); las tres instancias (ello / yo / superyó) y sus lógicas; el yo como servidor de tres amos y como precipitado de identificaciones; el superyó como heredero del Edipo (ideal + conciencia crítica); "el yo no es amo en su propia casa".',
    tipParcial:
      'Pregunta típica: explicar <strong>por qué hace falta la segunda tópica</strong> (el criterio cc/icc no alcanza porque partes del yo —las defensas— son inconscientes) y describir las <strong>tres instancias</strong> con sus lógicas: <strong>ello</strong> (polo pulsional, proceso primario, principio de placer, todo Icc), <strong>yo</strong> (mediador, parte Icc, "servidor de tres amos"), <strong>superyó</strong> (heredero del Edipo, ideal del yo + conciencia crítica cruel). Articulaciones: superyó ← narcisismo (1914) e identificación (duelo y melancolía, 1917).',
    preguntas: [
      {
        q: "¿Por qué la primera tópica resulta insuficiente y Freud introduce la segunda?",
        opciones: [
          "Porque el inconsciente no existe y hay que reemplazarlo por el ello.",
          "Porque partes del yo (las operaciones defensivas, la represión misma) son inconscientes; el criterio consciente/inconsciente ya no alcanza para dividir el aparato, y se pasa a un criterio por instancias.",
          "Porque la conciencia pasa a ser el centro absoluto del aparato.",
          "Porque desaparecen las resistencias en el análisis.",
        ],
        correcta: 1,
        exp: "La clínica muestra resistencias inconscientes que pertenecen al yo: si partes del yo son Icc, entonces 'inconsciente' ya no equivale a 'reprimido' ni el par cc/icc basta para ordenar el aparato. Freud pasa de dividir por cualidad (cc/icc) a dividir por instancias (ello/yo/superyó).",
      },
      {
        q: "¿Cómo caracteriza Freud al ello?",
        opciones: [
          "Como la instancia moral que juzga al yo.",
          "Como el polo pulsional, reservorio de las pulsiones, regido por el proceso primario y el principio de placer, enteramente inconsciente ('una olla de excitaciones borboteantes').",
          "Como la parte del aparato en contacto con la realidad.",
          "Como el heredero del complejo de Edipo.",
        ],
        correcta: 1,
        exp: "El ello es puro empuje pulsional: proceso primario, principio de placer, sin lógica, sin tiempo, sin negación. Es todo inconsciente. Todo lo reprimido es ello, pero el ello no se agota en lo reprimido: contiene también lo pulsional que nunca fue consciente.",
      },
      {
        q: "El yo es descrito como 'servidor de tres amos'. ¿Cuáles son?",
        opciones: [
          "El padre, la madre y el analista.",
          "El ello, la realidad y el superyó.",
          "La condensación, el desplazamiento y la censura.",
          "El placer, el displacer y la angustia.",
        ],
        correcta: 1,
        exp: "El yo media entre tres exigencias: las pulsiones del ello, las demandas de la realidad exterior y los mandatos del superyó. La imagen del jinete y el caballo ilustra su debilidad relativa: debe conducir la fuerza muy superior del ello. Y gran parte del yo es inconsciente (las defensas).",
      },
      {
        q: "El superyó se forma como:",
        opciones: [
          "Una imposición puramente externa de la sociedad, sin raíz psíquica.",
          "El heredero del complejo de Edipo: por identificación con las figuras parentales (la instancia que prohíbe); es a la vez ideal del yo (modelo) y conciencia moral (instancia crítica que castiga), y puede ser cruel.",
          "Una parte del ello que busca el placer.",
          "El sistema percepción-conciencia en contacto con la realidad.",
        ],
        correcta: 1,
        exp: "El superyó es el precipitado de las identificaciones edípicas: al resignar los objetos del Edipo, el niño se identifica con la instancia prohibidora. Reúne el ideal del yo (heredero del narcisismo, 1914) y la conciencia moral crítica. Es en parte Icc y tanto más severo cuanto más se reprime la agresión.",
      },
      {
        q: '"El yo no es amo en su propia casa" quiere decir que:',
        opciones: [
          "El yo controla por completo el ello y el superyó.",
          "El yo no coincide con la conciencia ni domina el aparato: está determinado por el ello (pulsión), el superyó (mandato/culpa) y la realidad; la conciencia es solo una cualidad, la punta del aparato.",
          "El yo es la única instancia psíquica que existe.",
          "El yo es idéntico al inconsciente reprimido.",
        ],
        correcta: 1,
        exp: "La segunda tópica consuma la herida narcisista: el yo cree decidir, pero es servidor de fuerzas que lo exceden (ello, superyó, realidad). La conciencia es apenas la superficie visible. Descentramiento del sujeto respecto de la conciencia.",
      },
      {
        q: "Articulación con Duelo y melancolía: ¿cómo se forma el carácter del yo?",
        opciones: [
          "Por herencia biológica exclusivamente.",
          "Como precipitado de identificaciones: cuando se resigna un objeto, el yo se identifica con él y lo erige dentro de sí; el carácter del yo es un depósito de las investiduras de objeto abandonadas (y el superyó, el caso mayor).",
          "Por la acumulación de estímulos externos sin relación con los objetos.",
          "Por represión primaria únicamente.",
        ],
        correcta: 1,
        exp: "Freud retoma el mecanismo de la melancolía: la identificación permite retener dentro del yo el objeto perdido. Así el carácter del yo se construye como precipitado de sus objetos resignados, y el superyó es el precipitado privilegiado (identificaciones edípicas). La identificación es el motor estructurante.",
      },
    ],
  },

  // ---------------------------------------------------------
  // EDIPO Y CASTRACIÓN (1923-1925)
  // ---------------------------------------------------------
  {
    id: "edipo",
    practico: "Edipo y castración (1923-25)",
    titulo: "El complejo de Edipo y la castración",
    subtitulo:
      "Primado del falo · complejo de castración · sepultamiento del Edipo · asimetría de los sexos",
    teoria: [
      {
        titulo: "La organización genital infantil: el primado del falo",
        contenido: `<p>En "La organización genital infantil" (1923) Freud completa los <em>Tres ensayos</em>: la sexualidad infantil <strong>sí</strong> alcanza una organización genital, pero con una particularidad decisiva. Para <strong>ambos sexos</strong> cuenta un <strong>solo órgano</strong>: el masculino. Es el <strong>primado del falo</strong> (no de lo genital completo).</p><p>Por eso la oposición que organiza la sexualidad infantil no es todavía <em>masculino / femenino</em>, sino <strong>fálico / castrado</strong>: tener o no tener falo. Esta asimetría es la clave de todo lo que sigue.</p>`,
      },
      {
        titulo: "El complejo de castración",
        contenido: `<p>El niño parte de una <strong>premisa universal del pene</strong>: supone que todos los seres lo tienen. El <strong>descubrimiento de la diferencia anatómica</strong> (que hay seres sin pene) no se registra como simple dato: se lee retroactivamente bajo el signo de una <strong>amenaza</strong>. Lo que no se tiene, se pudo haber <em>perdido</em>.</p><p>Así se constituye el <strong>complejo de castración</strong>: la castración se vuelve <em>pensable</em> y opera como angustia (en el varón) o como percepción de una falta (en la niña). Este complejo es el que va a <strong>ordenar la salida del Edipo</strong> — de manera opuesta en cada sexo.</p>`,
      },
      {
        titulo: "El sepultamiento del Edipo en el varón (1924)",
        contenido: `<p>En "El sepultamiento del complejo de Edipo" (1924), en el <strong>varón</strong>: el complejo de Edipo (amor a la madre, rivalidad con el padre) se va <strong>al fundamento</strong> a causa de la <strong>amenaza de castración</strong>.</p><p>El niño queda ante una <strong>disyuntiva</strong>: conservar el objeto (la madre) o conservar el órgano. Triunfa el <strong>interés narcisista por el órgano</strong>: resigna los objetos edípicos. El Edipo es <strong>reprimido / sepultado</strong> (Untergang, "ir al fundamento"). Sus investiduras se <strong>desexualizan</strong> y subliman, y por <strong>identificación</strong> con las figuras parentales se instala el <strong>superyó</strong> como su heredero.</p>`,
        clinico:
          "El sepultamiento del Edipo por la castración es la vía por la que se forma el superyó (enlaza con 1923). No es una simple represión: es una destrucción/desexualización de los objetos edípicos.",
      },
      {
        titulo: "La asimetría con la niña (1925)",
        contenido: `<p>En "Algunas consecuencias psíquicas de la diferencia anatómica entre los sexos" (1925), Freud sostiene que en la <strong>niña</strong> el recorrido es <strong>inverso</strong>: el complejo de castración <strong>INAUGURA</strong> el Edipo (en vez de sepultarlo).</p><p>Al percibir que no tiene pene, la niña se vive en desventaja (<em>envidia del pene</em>), <strong>reprocha a la madre</strong> esa falta y se <strong>aparta de ella</strong> volviéndose hacia el <strong>padre</strong>, del que espera un <strong>hijo</strong> como equivalente simbólico del pene faltante. Por eso el Edipo femenino puede <strong>persistir mucho tiempo</strong>: no hay una amenaza que lo derribe de golpe.</p>`,
      },
      {
        titulo: "Consecuencias: sepultamiento y superyó según el sexo",
        contenido: `<p>La asimetría tiene una consecuencia que Freud subraya (y que es muy polémica): como en la niña <strong>falta el motor</strong> (la amenaza de castración) que en el varón sepulta el Edipo de un golpe, su Edipo se abandona de forma más <strong>lenta e incompleta</strong>. Freud deriva de ahí un <strong>superyó "distinto"</strong> en la mujer.</p><p>Conviene aclarar el estatuto de esto: Freud presenta estas tesis como <em>construcciones</em> de su época, y él mismo advierte sus límites ("no debemos dejarnos desviar por... el feminismo"; problematiza el "anatomía es destino"). Son objeto de fuerte crítica posterior (incluso dentro del psicoanálisis). En el parcial se pide <strong>reconstruir la lógica de Freud</strong>, no suscribirla como verdad natural.</p>`,
      },
      {
        titulo: "Del Edipo al superyó y a la cultura",
        contenido: `<p>El complejo de castración articula tres cosas a la vez: la <strong>diferencia de los sexos</strong> (fálico/castrado), la <strong>salida del Edipo</strong> y la <strong>formación del superyó</strong>. El Edipo sepultado deja como <em>precipitado</em> al superyó — heredero de las identificaciones parentales.</p><p>De ahí se sigue el enlace con la <strong>cultura</strong>: el superyó es la instancia de la ley, la prohibición del incesto, la exogamia. La renuncia pulsional que el Edipo inaugura es la misma que, ampliada, exige la cultura — tema de <em>El malestar en la cultura</em> (1930).</p>`,
      },
    ],
    biblio:
      'Freud (1923) "La organización genital infantil", XIX (primado del falo). Freud (1924) "El sepultamiento del complejo de Edipo", XIX. Freud (1925) "Algunas consecuencias psíquicas de la diferencia anatómica entre los sexos", XIX.',
    tipParcial:
      'Pregunta típica: explicar el <strong>primado del falo</strong> (oposición fálico/castrado, no masculino/femenino) y el <strong>complejo de castración</strong>, y sobre todo la <strong>asimetría varón/niña</strong>: en el varón la castración <em>SEPULTA</em> el Edipo (y funda el superyó); en la niña lo <em>INAUGURA</em> (envidia del pene → giro al padre → deseo de hijo). El superyó como <strong>heredero del Edipo</strong>. Ojo: presentar las tesis sobre la mujer como construcciones de Freud sujetas a crítica, no como verdad natural.',
    preguntas: [
      {
        q: "¿Qué afirma el 'primado del falo' en la organización genital infantil?",
        opciones: [
          "Que niños y niñas reconocen desde el inicio dos órganos genitales distintos.",
          "Que para ambos sexos cuenta un solo órgano, el masculino; la oposición que organiza la sexualidad infantil es fálico/castrado, no todavía masculino/femenino.",
          "Que la sexualidad infantil carece de toda organización genital.",
          "Que el órgano femenino es el que organiza la sexualidad de ambos sexos.",
        ],
        correcta: 1,
        exp: "En 1923 Freud precisa que la organización genital infantil se ordena bajo el primado del falo: solo cuenta un órgano para ambos sexos. Por eso la oposición decisiva es tener/no tener falo (fálico/castrado), y no aún masculino/femenino. Esta asimetría es la base del complejo de castración.",
      },
      {
        q: "¿Cómo se constituye el complejo de castración?",
        opciones: [
          "Por una amenaza real y explícita de los padres en todos los casos.",
          "El niño parte de la premisa universal del pene; el descubrimiento de la diferencia anatómica (seres sin pene) se lee bajo el signo de una amenaza (lo que no se tiene se pudo perder), y la castración se vuelve pensable.",
          "Por la observación directa del coito parental.",
          "Como resultado del período de latencia.",
        ],
        correcta: 1,
        exp: "El niño supone que todos tienen pene (premisa universal). Ver que hay seres sin él transforma retroactivamente ese dato en amenaza: la castración se vuelve pensable. Opera como angustia en el varón y como percepción de la falta en la niña, y ordena la salida del Edipo en cada sexo.",
      },
      {
        q: "En el varón, ¿qué relación hay entre castración y complejo de Edipo?",
        opciones: [
          "La castración inaugura el Edipo en el varón.",
          "La amenaza de castración sepulta el Edipo: ante la disyuntiva de conservar el objeto o el órgano, triunfa el interés narcisista por el órgano; los objetos edípicos se resignan y por identificación se instala el superyó.",
          "La castración no tiene ningún efecto sobre el Edipo masculino.",
          "El Edipo del varón nunca se abandona.",
        ],
        correcta: 1,
        exp: "En el varón la castración es el motor que derriba el Edipo: para conservar el órgano resigna a la madre como objeto. El Edipo se sepulta (Untergang), sus investiduras se desexualizan/subliman, y la identificación con las figuras parentales deja como precipitado el superyó.",
      },
      {
        q: "En la niña, según Freud (1925), el complejo de castración:",
        opciones: [
          "Sepulta el Edipo igual que en el varón.",
          "Inaugura el Edipo: al percibir la falta de pene (envidia del pene), la niña reprocha a la madre, se aparta de ella y se vuelve hacia el padre esperando un hijo como equivalente simbólico; por eso su Edipo puede persistir mucho tiempo.",
          "No existe en la niña.",
          "Produce inmediatamente el superyó más severo de los dos sexos.",
        ],
        correcta: 1,
        exp: "Freud plantea un recorrido inverso: en la niña la castración (percibida como falta) no derriba el Edipo sino que lo abre. La envidia del pene la aparta de la madre y la orienta al padre, del que espera un hijo (equivalente del pene). Sin la amenaza que en el varón sepulta el Edipo, el femenino se abandona lento e incompleto.",
      },
      {
        q: "¿Qué relación establece Freud entre el sepultamiento del Edipo y el superyó?",
        opciones: [
          "El superyó destruye el complejo de Edipo desde afuera.",
          "El superyó es el heredero del complejo de Edipo: se forma por identificación con las figuras parentales cuando se resignan los objetos edípicos; es el precipitado del Edipo sepultado.",
          "El superyó existe antes del Edipo y no tiene relación con él.",
          "El superyó es una parte del ello.",
        ],
        correcta: 1,
        exp: "Enlace con 1923: al sepultarse el Edipo, las investiduras de objeto se resignan y se transforman en identificaciones con las figuras parentales. Ese precipitado es el superyó — instancia de la ley, la conciencia moral y el ideal. El superyó es literalmente 'heredero del complejo de Edipo'.",
      },
      {
        q: "¿Cuál es el estatuto correcto de las tesis de Freud sobre la sexualidad femenina y el superyó de la mujer?",
        opciones: [
          "Son verdades biológicas y naturales incuestionables.",
          "Son construcciones teóricas de Freud, situadas en su época, que el propio Freud presenta con reservas y que han sido objeto de fuerte crítica posterior (incluso dentro del psicoanálisis); en el examen se pide reconstruir su lógica, no suscribirlas como verdad natural.",
          "Son afirmaciones que Freud nunca hizo.",
          "Son idénticas a las de Janet sobre la debilidad psíquica.",
        ],
        correcta: 1,
        exp: "Freud deriva de la asimetría de la castración un 'superyó distinto' en la mujer, pero presenta estas tesis como construcciones (problematiza el 'anatomía es destino'). Son muy discutidas y revisadas después. Lo que se evalúa es entender la lógica interna del argumento freudiano, con conciencia de sus límites.",
      },
    ],
  },

  // ---------------------------------------------------------
  // INHIBICIÓN, SÍNTOMA Y ANGUSTIA (1926)
  // ---------------------------------------------------------
  {
    id: "angustia",
    practico: "Inhibición, síntoma y angustia (1926)",
    titulo: "Inhibición, síntoma y angustia",
    subtitulo:
      "El giro en la teoría de la angustia · angustia señal vs. automática · el yo como sede · las situaciones de peligro",
    teoria: [
      {
        titulo: "El giro: la angustia causa la represión (no al revés)",
        contenido: `<p>La <strong>primera teoría</strong> de la angustia (Freud temprano) sostenía que la angustia era <em>libido reprimida</em> que se transformaba: la <strong>represión producía la angustia</strong>. En 1926 Freud <strong>invierte</strong> la relación.</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">Ya no: represión → angustia. Ahora: angustia → represión.</p><p>Es <strong>el yo</strong> el que, ante un peligro, <strong>produce angustia como señal</strong>, y esa señal es la que <em>desencadena</em> la represión. La angustia deja de ser un producto automático de la libido y pasa a ser una <strong>función del yo</strong>.</p>`,
      },
      {
        titulo: "Angustia automática y angustia señal",
        contenido: `<p>Freud distingue dos formas de angustia:</p><ul><li><strong>Angustia automática</strong> (o traumática): reacción ante una situación de <strong>desamparo</strong> (Hilflosigkeit) ya <em>consumada</em> — una invasión de excitación que el aparato no puede tramitar. Es pasiva, padecida.</li><li><strong>Angustia señal</strong> (Angstsignal): una reproducción <strong>atenuada y anticipatoria</strong> de aquella angustia, que el yo <em>produce activamente</em> ante la <em>inminencia</em> de un peligro, para movilizar las defensas y <strong>evitar</strong> que la situación traumática se produzca.</li></ul><p>La lógica de la señal: usar una <strong>pequeña dosis</strong> de angustia (aviso) para prevenir la <strong>dosis grande</strong> (el trauma). Es una vacuna anímica.</p>`,
      },
      {
        titulo: "El yo como única sede de la angustia",
        contenido: `<p>En coherencia con la <strong>segunda tópica</strong> (1923), la angustia es una <strong>función yoica</strong>: el <strong>yo es el único lugar</strong> donde se genera y se siente la angustia. Es el yo el que <em>evalúa</em> el peligro y <em>da la señal</em>.</p><p>Así la angustia deja de ser un fenómeno económico ciego (libido represada que se descarga) para volverse una <strong>operación de anticipación</strong>: el yo prevé el peligro y actúa preventivamente. Esto reordena toda la teoría de las neurosis en torno al yo y sus defensas.</p>`,
      },
      {
        titulo: "Las situaciones de peligro: una serie de pérdidas",
        contenido: `<p>¿Ante qué se angustia el yo? Ante ciertas <strong>situaciones típicas de peligro</strong>, ligadas todas a <strong>pérdidas</strong>, que se ordenan a lo largo del desarrollo:</p><ul><li>El <strong>desamparo</strong> (el prototipo: el bebé invadido por una necesidad que no puede satisfacer solo).</li><li>La <strong>pérdida del objeto</strong> (la ausencia de la madre).</li><li>La <strong>pérdida del amor</strong> del objeto.</li><li>La <strong>castración</strong> (pérdida del pene / amenaza).</li><li>La <strong>pérdida del amor del superyó</strong> (el reproche de la conciencia moral, la culpa).</li></ul><p>Cada época de la vida tiene su peligro dominante; el modelo de todos es el <strong>desamparo</strong> originario frente a la ausencia del objeto.</p>`,
        clinico:
          "La serie de peligros articula angustia con las etapas del desarrollo y con las otras instancias: la castración (Edipo) y la culpa (superyó) son 'peligros' que el yo anticipa con la señal de angustia.",
      },
      {
        titulo: "Síntoma e inhibición",
        contenido: `<p>Freud distingue las tres nociones del título:</p><ul><li>El <strong>síntoma</strong> es lo que <em>reemplaza</em> a la satisfacción pulsional impedida: producto de la represión, es signo y sustituto de la moción reprimida. Está <strong>fuera del yo</strong>; el yo lucha contra él, aunque termine integrándolo (beneficio secundario de la enfermedad).</li><li>La <strong>inhibición</strong> es una <em>limitación funcional del yo</em>: el yo <strong>renuncia</strong> a una función (comer, caminar, escribir, la sexualidad) para evitar que ejercerla despierte un conflicto o angustia. No es un síntoma: es una restricción defensiva.</li></ul>`,
      },
      {
        titulo: "La defensa como género; la represión como especie",
        contenido: `<p>Freud <strong>reintroduce</strong> el viejo término <strong>defensa</strong> (Abwehr) como <em>concepto general</em>, del cual la <strong>represión</strong> es una <strong>especie</strong> entre otras. Junto a la represión (típica de la histeria) hay otros mecanismos de defensa —el <strong>aislamiento</strong>, la <strong>anulación</strong> (o "lo no acontecido"), la <strong>formación reactiva</strong>— característicos de la <em>neurosis obsesiva</em>.</p><p>Con esto la teoría se ensancha: no toda defensa es represión. Cada cuadro clínico privilegia ciertos mecanismos defensivos, todos al servicio del yo para evitar la angustia.</p>`,
        clinico:
          "Aislamiento, anulación y formación reactiva son los mecanismos típicos de la neurosis obsesiva; la represión con conversión, los de la histeria. Todos son especies del género 'defensa'.",
      },
    ],
    biblio:
      'Freud (1926 [1925]) "Inhibición, síntoma y angustia", XX. Puntos clave: el giro (la angustia causa la represión); angustia señal vs. automática (traumática); el yo como sede de la angustia; las situaciones de peligro como serie de pérdidas; distinción síntoma / inhibición; la defensa como género y la represión como especie.',
    tipParcial:
      'Pregunta típica: explicar <strong>EL GIRO</strong> — ya no la represión causa la angustia, sino que el yo produce la <strong>angustia señal</strong> que <em>desencadena</em> la represión. Distinguir <strong>angustia señal</strong> (anticipatoria, activa, yoica, evita el trauma con una "pequeña dosis") de <strong>angustia automática</strong> (desamparo, situación consumada, pasiva). La <strong>serie de situaciones de peligro</strong> (desamparo → pérdida de objeto → pérdida de amor → castración → pérdida del amor del superyó). Síntoma vs. inhibición; defensa como género.',
    preguntas: [
      {
        q: "¿En qué consiste el giro de Freud en la teoría de la angustia (1926)?",
        opciones: [
          "En abandonar por completo el concepto de angustia.",
          "En invertir la relación causal: ya no la represión produce la angustia, sino que el yo produce la angustia (como señal) y ésta desencadena la represión.",
          "En sostener que la angustia es siempre libido no descargada.",
          "En afirmar que la angustia proviene del ello, no del yo.",
        ],
        correcta: 1,
        exp: "Primera teoría: represión → angustia (libido reprimida transformada). Giro de 1926: angustia → represión. El yo, ante un peligro, da una señal de angustia que dispara la defensa. La angustia deja de ser un producto automático de la libido para ser una función activa del yo.",
      },
      {
        q: "¿Cuál es la diferencia entre angustia señal y angustia automática?",
        opciones: [
          "La señal es más intensa que la automática.",
          "La automática (o traumática) es la reacción pasiva ante una situación de desamparo ya consumada (invasión de excitación no tramitable); la señal es una reproducción atenuada y anticipatoria que el yo produce activamente ante la inminencia del peligro para evitar el trauma.",
          "La señal ocurre en el ello y la automática en el superyó.",
          "Son dos nombres para el mismo fenómeno.",
        ],
        correcta: 1,
        exp: "Angustia automática/traumática: situación de desamparo consumada, el aparato es invadido y la padece. Angustia señal: el yo anticipa el peligro y produce una pequeña dosis de angustia como aviso, para movilizar defensas y evitar que se repita la situación traumática. Pequeña dosis para prevenir la grande.",
      },
      {
        q: "¿Por qué se dice que el yo es la 'sede' de la angustia?",
        opciones: [
          "Porque la angustia se origina en el ello y el yo solo la sufre.",
          "Porque, en coherencia con la segunda tópica, el yo es el único lugar donde la angustia se genera y se siente: es el yo el que evalúa el peligro y da la señal.",
          "Porque la angustia es una descarga ciega de libido sin lugar psíquico.",
          "Porque el superyó produce toda la angustia.",
        ],
        correcta: 1,
        exp: "Tras la segunda tópica (1923), la angustia es una función yoica: el yo evalúa el peligro y emite la señal. Deja de ser un fenómeno económico ciego (libido represada) y se vuelve operación de anticipación del yo. Esto reordena la teoría de las neurosis en torno al yo y sus defensas.",
      },
      {
        q: "Las situaciones típicas de peligro que la angustia señala son, en orden de desarrollo:",
        opciones: [
          "Oral, anal, fálica, latencia y genital.",
          "Desamparo, pérdida del objeto, pérdida del amor del objeto, castración y pérdida del amor del superyó — todas ligadas a pérdidas, con el desamparo como prototipo.",
          "Condensación, desplazamiento, figurabilidad y elaboración secundaria.",
          "Represión, regresión, aislamiento y sublimación.",
        ],
        correcta: 1,
        exp: "La angustia señala peligros ligados a pérdidas que se suceden en el desarrollo: el desamparo originario (prototipo), la pérdida del objeto (madre), la pérdida de su amor, la castración (Edipo) y la pérdida del amor del superyó (culpa). Cada época tiene su peligro dominante.",
      },
      {
        q: "¿Cuál es la diferencia entre síntoma e inhibición?",
        opciones: [
          "El síntoma es del yo y la inhibición del ello.",
          "El síntoma reemplaza a la satisfacción pulsional impedida (producto de la represión, está fuera del yo, que lucha contra él); la inhibición es una limitación funcional del yo, que renuncia a una función para evitar el conflicto o la angustia.",
          "Son sinónimos.",
          "La inhibición produce placer y el síntoma displacer.",
        ],
        correcta: 1,
        exp: "El síntoma es sustituto de la satisfacción reprimida; es ajeno al yo, que lo combate (aunque saque de él un beneficio secundario). La inhibición es una restricción que el yo se autoimpone: renuncia a ejercer una función (comer, caminar, la sexualidad) para no despertar el conflicto. No es síntoma, es defensa funcional.",
      },
      {
        q: "¿Qué relación establece Freud entre 'defensa' y 'represión' en 1926?",
        opciones: [
          "Son exactamente lo mismo.",
          "Reintroduce 'defensa' como concepto general (género), del cual la represión es una especie entre otras (aislamiento, anulación, formación reactiva, típicas de la obsesiva).",
          "La represión es el género y la defensa una especie.",
          "La defensa reemplaza y elimina el concepto de represión.",
        ],
        correcta: 1,
        exp: "Freud recupera el término temprano 'defensa' (Abwehr) como género que abarca varios mecanismos; la represión es uno de ellos (típico de la histeria). En la neurosis obsesiva predominan otros: aislamiento, anulación de lo acontecido, formación reactiva. No toda defensa es represión.",
      },
    ],
  },

  // ---------------------------------------------------------
  // EL MALESTAR EN LA CULTURA (1930)
  // ---------------------------------------------------------
  {
    id: "malestar",
    practico: "El malestar en la cultura (1930)",
    titulo: "El malestar en la cultura",
    subtitulo:
      "Renuncia pulsional · Eros y pulsión de muerte · el superyó cultural · sentimiento de culpa",
    teoria: [
      {
        titulo: "El problema: la cultura como fuente de sufrimiento",
        contenido: `<p>La <strong>cultura</strong> (Kultur) nos protege de las tres fuentes del sufrimiento —el propio <em>cuerpo</em> (que decae), la <em>naturaleza</em> exterior (que nos supera) y los <em>otros hombres</em> (los vínculos)— pero cobra un precio: <strong>exige renuncia pulsional</strong>.</p><p>Ahí está la paradoja: la cultura, que debía protegernos, es <strong>ella misma fuente de malestar</strong>. Buena parte de nuestra desdicha proviene de las restricciones que la cultura impone a nuestras pulsiones. Hay una <strong>hostilidad estructural</strong> entre exigencia pulsional y exigencia cultural — no un desajuste corregible, sino un conflicto de fondo.</p>`,
      },
      {
        titulo: "La felicidad imposible",
        contenido: `<p>El <strong>programa del principio de placer</strong> —ser felices— es, dice Freud, <strong>irrealizable</strong>: la constitución misma del aparato y la realidad lo impiden. Solo podemos aspirar a <em>evitar el displacer</em>, no a un placer pleno y duradero.</p><p>Ante eso, el hombre busca <strong>vías sustitutivas</strong>: el amor, la <strong>sublimación</strong> (arte, trabajo, ciencia), la intoxicación, el aislamiento del mundo, la religión. Ninguna garantiza la felicidad; cada una tiene su costo. La <em>infelicidad</em> nos amenaza desde el cuerpo, el mundo y —la más dolorosa— desde los <strong>vínculos</strong> con los otros.</p>`,
      },
      {
        titulo: "Eros y pulsión de muerte en la cultura",
        contenido: `<p>Freud retoma el dualismo de 1920. La <strong>cultura es un proceso al servicio de Eros</strong>: su meta es <em>unir</em> a los individuos en unidades cada vez mayores — la familia, la tribu, el pueblo, la humanidad. Es obra de la pulsión de vida.</p><p>Pero se enfrenta a un adversario formidable: la <strong>pulsión de muerte / agresión</strong>, que es <strong>constitutiva</strong> del ser humano. Freud recupera el <em>"homo homini lupus"</em>: el hombre es agresivo por naturaleza, y esa agresión amenaza permanentemente el lazo social. Por eso:</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">La evolución cultural es la lucha entre Eros y la pulsión de muerte.</p>`,
      },
      {
        titulo: "El destino de la agresión: vuelta sobre el yo → superyó",
        contenido: `<p>¿Cómo hace la cultura para <strong>domar la agresión</strong> del individuo? Con un mecanismo ingenioso y cruel: la <strong>introyecta</strong>. La agresión que no se descarga hacia afuera se <strong>vuelve hacia adentro</strong>, es capturada por el <strong>superyó</strong> y dirigida contra el propio <strong>yo</strong>, en forma de <strong>conciencia moral</strong> y <strong>sentimiento de culpa</strong> (necesidad de castigo).</p><p>Consecuencia contraintuitiva: la <strong>renuncia no apacigua</strong> al superyó — lo <em>agrava</em>. Cuanto más resigna el sujeto su agresión, <strong>más severo y exigente</strong> se vuelve el superyó contra él. La virtud no calma la conciencia: la vuelve más dura.</p>`,
        clinico:
          "Enlaza con 1923 (superyó) y 1926 (culpa como peligro): la cultura usa el superyó para volver la agresión contra el yo. El sentimiento de culpa suele ser inconsciente y vivirse como malestar/angustia difusa.",
      },
      {
        titulo: "El sentimiento de culpa: problema central de la cultura",
        contenido: `<p>Freud declara que su <strong>propósito</strong> es presentar el <strong>sentimiento de culpa como el problema más importante del desarrollo cultural</strong>. Su tesis fuerte:</p><p style="text-align:center; font-family: var(--font-serif); font-size: 1.05rem; color: rgb(167,243,208); padding: 0.6rem 0;">"El precio del progreso cultural es la pérdida de felicidad por aumento del sentimiento de culpa."</p><p>Distingue dos orígenes/estratos de la culpa: primero, el <strong>miedo a la autoridad</strong> (temor a perder su amor, a ser descubierto); luego, el <strong>miedo al superyó</strong>, que es interior y del que no se puede esconder nada —conoce hasta los <em>deseos</em>—. Por eso la mera renuncia a la acción no basta: el superyó castiga la intención.</p>`,
      },
      {
        titulo: "El superyó cultural y el mandamiento imposible",
        contenido: `<p>Así como el individuo tiene su superyó, existe un <strong>superyó de la cultura</strong> (de la época): un conjunto de ideales y exigencias éticas que la comunidad impone. Freud lo examina críticamente.</p><p>El mandamiento <em>"ama a tu prójimo como a ti mismo"</em> es, dice, psicológicamente <strong>injustificable e imposible de cumplir</strong>: desconoce la <strong>agresión constitutiva</strong> del hombre. La ética cultural exige demasiado, sin ofrecer a cambio la felicidad. Freud cierra con una <strong>pregunta abierta</strong>: no sabemos cuál de los dos "poderes celestiales", Eros o la pulsión de muerte, se impondrá en el destino de la especie.</p>`,
      },
    ],
    biblio:
      'Freud (1930 [1929]) "El malestar en la cultura", XXI. Puntos clave: la cultura protege pero exige renuncia pulsional (malestar estructural); la felicidad como programa irrealizable; la cultura como obra de Eros frente a la pulsión de muerte/agresión; introyección de la agresión → superyó → sentimiento de culpa; "el precio del progreso cultural es el aumento del sentimiento de culpa"; el superyó cultural y la crítica del mandamiento de amor al prójimo.',
    tipParcial:
      'Pregunta típica: la <strong>antinomia estructural pulsión/cultura</strong> (la cultura protege pero exige renuncia y por eso genera malestar); la cultura como <strong>obra de Eros</strong> enfrentada a la <strong>pulsión de muerte/agresión</strong> (articula con 1920); y el mecanismo por el que la cultura doma la agresión: la <strong>introyecta</strong> → el <strong>superyó</strong> la vuelve contra el yo → <strong>sentimiento de culpa</strong> (articula con 1923). Frase clave: "el precio del progreso cultural es el aumento del sentimiento de culpa". La renuncia AGRAVA el superyó, no lo calma.',
    preguntas: [
      {
        q: "¿Por qué la cultura es, para Freud, fuente de malestar?",
        opciones: [
          "Porque no logra proteger al hombre de ningún sufrimiento.",
          "Porque, aunque nos protege de las tres fuentes de sufrimiento (cuerpo, naturaleza, otros), lo hace a cambio de exigir renuncia pulsional: hay una hostilidad estructural entre exigencia pulsional y exigencia cultural.",
          "Porque promueve la satisfacción ilimitada de las pulsiones.",
          "Porque elimina por completo la agresión humana.",
        ],
        correcta: 1,
        exp: "La cultura protege (del cuerpo que decae, la naturaleza que supera, los vínculos que hieren) pero cobra el precio de la renuncia pulsional. Ese es el malestar: no un defecto corregible, sino un conflicto de fondo entre lo que la pulsión exige y lo que la cultura permite.",
      },
      {
        q: "¿Qué dice Freud sobre el programa de ser feliz (principio de placer)?",
        opciones: [
          "Que es plenamente realizable con esfuerzo y sublimación.",
          "Que es irrealizable: la constitución del aparato y la realidad lo impiden; solo cabe aspirar a evitar el displacer, mediante vías sustitutivas (amor, sublimación, intoxicación, aislamiento) que tienen su costo.",
          "Que se logra únicamente mediante la religión.",
          "Que la felicidad depende solo de factores económicos externos.",
        ],
        correcta: 1,
        exp: "El programa del principio de placer (ser felices) choca con la realidad y con la propia constitución psíquica: es irrealizable. El hombre busca vías sustitutivas (amor, arte/sublimación, intoxicación, aislamiento), ninguna garantizada. La amenaza mayor a la felicidad viene de los vínculos con los otros.",
      },
      {
        q: "¿Cómo entiende Freud la cultura en términos del dualismo pulsional de 1920?",
        opciones: [
          "Como obra exclusiva de la pulsión de muerte.",
          "Como un proceso al servicio de Eros (unir a los individuos en unidades cada vez mayores) que se enfrenta a la pulsión de muerte/agresión, constitutiva del hombre; la evolución cultural es la lucha entre Eros y la pulsión de muerte.",
          "Como un fenómeno ajeno a las pulsiones.",
          "Como la expresión directa del principio de constancia.",
        ],
        correcta: 1,
        exp: "La cultura es obra de Eros: liga a los individuos en familias, pueblos, humanidad. Pero enfrenta la agresión (pulsión de muerte), constitutiva del hombre ('homo homini lupus'). Por eso Freud define la evolución cultural como la lucha entre Eros y la pulsión de muerte. Retoma directamente 1920.",
      },
      {
        q: "¿Cuál es el mecanismo por el que la cultura domina la agresión del individuo?",
        opciones: [
          "La descarga libremente hacia el exterior.",
          "La introyecta: la agresión no descargada se vuelve hacia adentro, es tomada por el superyó y dirigida contra el yo como conciencia moral y sentimiento de culpa; por eso la renuncia agrava (no calma) al superyó.",
          "La sublima por completo en obra artística.",
          "La reprime hasta hacerla desaparecer sin consecuencias.",
        ],
        correcta: 1,
        exp: "La cultura vuelve la agresión contra su origen: introyectada, es capturada por el superyó y descargada sobre el yo (culpa, necesidad de castigo). Consecuencia contraintuitiva: cuanto más se resigna la agresión, más severo el superyó. La virtud endurece la conciencia en vez de aliviarla.",
      },
      {
        q: 'La tesis "el precio del progreso cultural es el aumento del sentimiento de culpa" significa que:',
        opciones: [
          "El progreso cultural hace a los hombres cada vez más felices y libres de culpa.",
          "A mayor desarrollo cultural, mayor renuncia pulsional y mayor agresión introyectada, y por tanto un superyó más severo y un sentimiento de culpa creciente: el progreso se paga con pérdida de felicidad.",
          "La culpa desaparece cuando la cultura alcanza cierto nivel de progreso.",
          "El sentimiento de culpa no tiene relación con la cultura.",
        ],
        correcta: 1,
        exp: "Freud presenta el sentimiento de culpa como el problema central del desarrollo cultural: cada avance exige más renuncia, que alimenta al superyó y aumenta la culpa. De ahí que el progreso cultural se pague con infelicidad. Dos estratos de la culpa: miedo a la autoridad y, luego, miedo al superyó (que ve hasta los deseos).",
      },
      {
        q: "¿Por qué Freud considera 'imposible' el mandamiento de amar al prójimo como a uno mismo?",
        opciones: [
          "Porque nadie tiene prójimos.",
          "Porque desconoce la agresión constitutiva del hombre: el superyó cultural exige un ideal psicológicamente injustificable e incumplible, sin ofrecer a cambio la felicidad.",
          "Porque el amor al prójimo es un instinto natural que no necesita mandamiento.",
          "Porque contradice el principio de constancia.",
        ],
        correcta: 1,
        exp: "El mandamiento supone un amor universal que ignora la hostilidad y agresión constitutivas del ser humano. Es una exigencia desmedida del superyó cultural, injustificable e imposible de cumplir. Freud cierra el texto con una pregunta abierta sobre cuál de los dos poderes —Eros o pulsión de muerte— prevalecerá.",
      },
    ],
  },
]

// Orden numérico siguiendo la secuencia de prácticos del programa.
// Dentro de un mismo práctico (7 y 9), respetamos el orden interno de los puntos
// numerados del programa de cátedra (2 antes que 3; 5 antes que 6).
//
// 1. P1-3 · El conflicto psíquico (I. defensa, retorno, Emma)
// 2. P4-5 · Formaciones del inconsciente (II. olvido, chiste)
// 3. P6   · Originalidad del descubrimiento (Charcot, Janet, ruptura)
// 4. P7a  · Psicoterapia de la histeria (punto 2 del programa)
// 5. P7b  · Neuropsicosis de defensa (punto 3 del programa)
// 6. P8   · Despliegue del inconsciente (sueño, trabajo, ombligo)
// 7. P9a  · Primera ordenación metapsicológica (punto 5 del programa)
// 8. P9b  · Experiencia de satisfacción (punto 6 del programa)
const ORDEN_TEMATICO = [
  "p1_3",
  "p4_5",
  "p6",
  "p7a",
  "p7b",
  "p8",
  "p9a",
  "p9b",
  // --- Final ---
  "sexualidad",
  "narcisismo",
  "pulsiones",
  "represion",
  "inconciente",
  "duelo",
  "masalla",
  "yo_ello",
  "edipo",
  "angustia",
  "malestar",
] as const

export const TEMAS: TemaContenido[] = (() => {
  const byId = new Map(TEMAS_RAW.map((t) => [t.id, t]))
  return ORDEN_TEMATICO.map((id) => {
    const t = byId.get(id)
    if (!t) throw new Error(`Tema no encontrado: ${id}`)
    return t
  })
})()

// Dificultad de cada pregunta por tema (indexada por posición original en `preguntas[]`)
//   1 = identificación / definición directa
//   2 = conceptual / diferenciación / referente clínico
//   3 = articulación cross-tema / aplicación clínica
// Los arrays tienen el mismo largo que el `preguntas[]` correspondiente.
export const DIFICULTADES: Record<string, number[]> = {
  p6:   [1, 1, 1, 3, 1, 3, 2],
  p1_3: [2, 1, 2, 2, 1, 2, 2, 3, 3],
  p7b:  [1, 3, 2, 2, 1, 3, 3],
  p7a:  [2, 1, 3, 2, 1, 3, 2],
  p8:   [1, 3, 1, 2, 3, 2, 3, 3],
  p4_5: [2, 1, 2, 2, 3, 1, 3, 3],
  p9a:  [1, 2, 3, 2, 1, 3, 3],
  p9b:  [1, 2, 2, 3, 3, 1, 3, 3],
  // --- Final ---
  sexualidad:  [2, 2, 1, 2, 2, 3, 3],
  narcisismo:  [1, 2, 2, 2, 2, 3],
  pulsiones:   [2, 1, 2, 1, 3, 3],
  represion:   [1, 2, 2, 2, 2, 3],
  inconciente: [1, 2, 2, 1, 3, 2],
  duelo:       [1, 2, 2, 2, 2, 3],
  masalla:     [2, 1, 2, 2, 1, 2],
  yo_ello:     [2, 1, 1, 2, 2, 3],
  edipo:       [1, 2, 2, 2, 3, 3],
  angustia:    [2, 2, 2, 1, 2, 2],
  malestar:    [2, 2, 2, 2, 3, 2],
}
