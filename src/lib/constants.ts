/* NO RENOMBRAR ESTA CLAVE, aunque diga "mozzi" y el resto de la app ya no.
   Es donde vive el progreso guardado en el navegador de cada persona. Hay
   gente que ya compró y tiene temas hechos acá adentro: cambiar el nombre les
   borra el avance de un golpe, sin forma de recuperarlo. El nombre feo es el
   precio de no romperle el progreso a nadie. */
export const STORAGE_PROGRESO = "estudio_mozzi_v2"
export const STORAGE_SIMULACRO = "estudio_simulacro_v1"
export const STORAGE_WELCOME = "estudio_bienvenida_v1"
export const STORAGE_ACCESS = "estudio_acceso_v1"
/* Clave del tema. Se renombró a `_lunar` a propósito: la app venía guardando
   "dark" de la versión vieja, y con la paleta nueva esa preferencia arrastraba
   a todo el mundo al modo noche. Con la clave nueva, todas arrancan de cero
   en claro —que es como se ve la landing— y eligen si quieren la noche. */
export const THEME_KEY = "tema_estudio_lunar"
/**
 * Interruptor de la PUERTA DE ENTRADA.
 *
 *   true  = cualquiera entra sin cuenta, y ve la MUESTRA (ver `lib/plan.ts`).
 *   false = vuelve el muro de login: no se ve nada sin cuenta.
 *
 * OJO, cambió de significado el 2026-09-29. Antes `true` quería decir
 * "todo gratis para todos". Ahora ya no: con los tres niveles de acceso,
 * `true` solo saca el muro de entrada, y lo que cada persona ve lo decide
 * su nivel. Para vender conviene dejarlo en `true`, porque nadie paga por
 * algo que no pudo probar.
 */
export const ACCESO_ABIERTO = true

/**
 * Saltea el login SOLO cuando la app corre en tu compu (`npm run dev`).
 *
 * Existe para poder trabajar en el diseño de las pantallas de adentro sin
 * tener que loguearse cada vez —y sin depender de que Supabase esté despierto.
 *
 * NO afecta al sitio publicado: ahí `NODE_ENV` vale "production" y el login
 * sigue funcionando exactamente igual que hoy. Poner esto en `false` te
 * devuelve el login también en desarrollo.
 */
export const SALTEAR_LOGIN_EN_DEV = true

/**
 * Interruptor de pausa (bloqueo del link online).
 *   true  = el link publicado muestra "No disponible por ahora" (nadie entra).
 *   false = la app funciona normal (sujeta a ACCESO_ABIERTO).
 * Ojo: la pausa SOLO aplica en producción (el link). En tu compu (dev) siempre
 * podés abrir la app para seguir trabajando. Para reabrir el link, poné false y deployá.
 */
export const APP_PAUSADA = false

/**
 * Email de la dueña/admin. Solo esta cuenta puede entrar a `/panel` y activar
 * compradoras. La seguridad real la da la política RLS en Supabase (este valor
 * es solo para mostrar/ocultar la UI del panel).
 */
export const ADMIN_EMAIL = "havannamoons@gmail.com"

/**
 * Número de WhatsApp de la vendedora para el botón "Comprar" de la landing.
 * Formato internacional SIN "+", espacios ni guiones. Ej: 5491112345678.
 * Si queda vacío, el botón "Comprar" invita a completar el número.
 */
export const WHATSAPP_NUMERO = "5491127044906"

export const SIMULACRO_PREGUNTAS_DEFAULT = 12
export const SIMULACRO_PREGUNTAS_MIN = 6
export const SIMULACRO_PREGUNTAS_MAX = 30

/**
 * Tiempo por pregunta en el simulacro cronometrado.
 *
 * 75 segundos es apretado pero no injusto: alcanza para leer el enunciado y
 * cuatro opciones con calma, y no alcanza para quedarse dudando cinco minutos
 * en una sola. Justamente esa es la presión que queremos ensayar.
 */
export const SIMULACRO_SEGUNDOS_POR_PREGUNTA = 75

/** Umbral en el que el reloj pasa a rojo y empieza a latir. */
export const SIMULACRO_SEGUNDOS_ALERTA = 60

/**
 * Link de cobro de Mercado Pago. Es reutilizable: se lo mandás a todas, no
 * hace falta crear uno por venta. Acepta hasta 3 cuotas.
 *
 * Ojo: pagar NO activa el acceso solo. Mercado Pago te avisa a vos quién pagó,
 * y vos la habilitás desde /panel. Por eso, después de pagar, la pantalla le
 * pide que te mande su Gmail: sin ese dato no la podés encontrar en el panel.
 */
export const MERCADOPAGO_LINK = "https://mpago.la/1ShVmu7"

/**
 * COBRO POR TRANSFERENCIA.
 *
 * El link de Mercado Pago cubre tarjeta, débito y "dinero en cuenta", pero la
 * mayoría de las estudiantes no usa tarjeta: transfiere. Para eso hace falta
 * tu ALIAS (o CVU), que es otro camino: la plata entra igual a tu cuenta de
 * Mercado Pago, al instante y sin comisión, pero MP no te avisa "pagó Estudio
 * Lunar" — te avisa "te transfirieron $10.000". Por eso la pantalla le pide el
 * comprobante junto con el mail.
 *
 * Dónde sacar el alias: app de Mercado Pago → "Tu dinero" → "Datos de tu
 * cuenta" (ahí están CVU y alias, y podés editar el alias para que sea fácil
 * de dictar, tipo `estudio.lunar.mp`).
 *
 * Si queda vacío, la opción de transferencia NO se muestra: la app sigue
 * cobrando solo por el link, igual que hoy.
 */
export const ALIAS_TRANSFERENCIA = "rooroldaan"

/** Nombre que le va a aparecer al confirmar la transferencia (el titular de la cuenta). */
export const TITULAR_TRANSFERENCIA = "Rocio Roldan"

/**
 * Precio que se muestra en la pantalla de cobro, en pesos.
 * Está acá y no escrito en el texto para que cambiarlo sea un solo lugar.
 */
export const PRECIO_ACCESO = 10000

/**
 * Precio de lanzamiento: hasta cuándo vale `PRECIO_ACCESO`, y cuánto pasa a
 * costar después. La fecha es el último día INCLUIDO, en formato AAAA-MM-DD.
 *
 * Esto NO cambia el precio solo: cuando se pase la fecha hay que subir
 * `PRECIO_ACCESO` a mano. Sirve para que la pantalla de cobro diga la fecha
 * sin tener que acordarse de editar el texto, y para que el aviso desaparezca
 * solo cuando el lanzamiento se termina.
 *
 * Si queda vacío, la pantalla no menciona ninguna fecha.
 */
export const FIN_LANZAMIENTO = "2026-10-31"

/** Lo que va a costar cuando se termine el lanzamiento. */
export const PRECIO_DESPUES = 15000
