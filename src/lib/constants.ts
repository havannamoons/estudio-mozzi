export const STORAGE_PROGRESO = "estudio_mozzi_v2"
export const STORAGE_SIMULACRO = "estudio_simulacro_v1"
export const STORAGE_WELCOME = "estudio_bienvenida_v1"
export const STORAGE_ACCESS = "estudio_acceso_v1"
export const THEME_KEY = "tema_estudio"
/**
 * Interruptor de acceso.
 *   true  = app ABIERTA para todos (sin login) — para compartir gratis.
 *   false = vuelve el login con Google + gate de "habilitado" (para vender).
 * Todo el sistema de login queda construido; solo se activa cambiando esto a false.
 */
export const ACCESO_ABIERTO = false

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
