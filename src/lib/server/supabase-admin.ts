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
): Promise<{ ok: boolean; error?: string }> {
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

  return { ok: true }
}
