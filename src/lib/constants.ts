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
