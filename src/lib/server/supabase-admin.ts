import { createClient } from "@supabase/supabase-js"

/**
 * CLIENTE DE SUPABASE PARA EL SERVIDOR. NUNCA IMPORTAR ESTO DESDE UN COMPONENTE.
 *
 * El cliente normal (`src/lib/supabase.ts`) usa la clave pública y queda
 * atado a las políticas de Row Level Security: una persona solo puede leer su
 * propia fila de `perfiles` y nadie puede escribir `habilitado`. Eso está bien
 * y tiene que seguir así.
 *
 * Pero el webhook de Mercado Pago no es una persona logueada: es un servidor
 * de MP avisando que alguien pagó. No tiene sesión, así que RLS lo bloquearía.
 * Para eso existe la clave `service_role`, que pasa por encima de RLS.
 *
 * Por qué vive en `lib/server/` y no en `lib/`: para que se note. Si esta
 * clave termina en un archivo que el navegador descarga, cualquiera puede
 * habilitarse solo y leer la tabla entera. Next.js aborta el build si un
 * archivo con `server-only` se importa desde el cliente, y de eso se encarga
 * la primera línea de este archivo.
 */
import "server-only"

const SUPABASE_URL = "https://esbrpjlwavnwdykygcxk.supabase.co"

/**
 * Devuelve el cliente admin, o `null` si la clave no está configurada.
 *
 * Devuelve `null` en vez de explotar a propósito: así la app sigue
 * funcionando con la activación a mano mientras la variable no esté puesta en
 * Vercel, y el webhook puede responder algo claro en vez de un error 500.
 */
export function getSupabaseAdmin() {
  const clave = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!clave) return null

  return createClient(SUPABASE_URL, clave, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/**
 * Pone `habilitado = true` en la fila de esa persona.
 *
 * Es idempotente: si ya estaba habilitada, no pasa nada. Eso importa porque
 * Mercado Pago reintenta la notificación si no le respondés rápido, así que
 * el mismo pago puede llegar varias veces.
 */
export async function habilitarPerfil(
  userId: string,
): Promise<{ ok: boolean; email?: string | null; error?: string }> {
  const admin = getSupabaseAdmin()
  if (!admin) return { ok: false, error: "falta SUPABASE_SERVICE_ROLE_KEY" }

  const { data, error } = await admin
    .from("perfiles")
    .update({ habilitado: true })
    .eq("id", userId)
    .select("id, email, habilitado")

  if (error) return { ok: false, error: error.message }

  /* Si no actualizó ninguna fila, el id no existe en `perfiles`. Eso no
     debería pasar (el disparador de Supabase crea la fila al registrarse),
     pero si pasa hay que saberlo: significa que alguien pagó y no se le puede
     entregar, que es el peor caso del negocio. */
  if (!data || data.length === 0) {
    return { ok: false, error: `no existe perfil con id ${userId}` }
  }

  /* Se devuelve el mail de la APP (el de Google con el que entró), no el de
     Mercado Pago: pueden ser distintos, y el que sirve para encontrarla en
     el panel es este. */
  return { ok: true, email: data[0].email ?? null }
}

/**
 * Deja anotada la compra en la tabla `ventas`.
 *
 * Esto es lo que hace que el panel pueda decir QUIÉN compró. Hasta que
 * existió, la lista de "pendientes" mezclaba compradoras con curiosas que
 * solo habían creado la cuenta, así que no servía para saberlo.
 *
 * Si falla, NO se corta el webhook ni se devuelve error: lo importante es
 * que la persona haya quedado habilitada. Perder el registro es molesto;
 * dejarla pagando sin acceso es el peor caso del negocio.
 *
 * No duplica: `pago_id` es UNIQUE en la tabla, así que el reintento de
 * Mercado Pago choca contra esa restricción y no anota dos veces.
 */
export async function registrarVenta(venta: {
  perfilId: string
  email: string | null
  monto: number | null
  metodo: string
  pagoId: string
}): Promise<void> {
  const admin = getSupabaseAdmin()
  if (!admin) return

  const { error } = await admin.from("ventas").insert({
    perfil_id: venta.perfilId,
    email: venta.email,
    monto: venta.monto,
    metodo: venta.metodo,
    pago_id: venta.pagoId,
  })

  /* 23505 = clave duplicada. Es el reintento de MP, no un problema. */
  if (error && error.code !== "23505") {
    console.error("[pago] no pude anotar la venta:", error.message)
  }
}
