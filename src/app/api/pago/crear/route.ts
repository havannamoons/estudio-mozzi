import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { cobroAutomaticoListo, crearPreferencia } from "@/lib/server/mercadopago"
import { PRECIO_ACCESO } from "@/lib/constants"

/**
 * ARMA EL CHECKOUT DE UNA COMPRA.
 *
 * Por qué existe en vez de usar el link de pago de siempre: el link
 * `mpago.la/...` es el mismo para todas, así que cuando MP avisa que alguien
 * pagó no hay forma de saber a quién habilitar. Acá se crea una preferencia
 * por compra, con el id de la persona adentro, y eso es lo que vuelve en el
 * aviso del webhook.
 *
 * Quién puede llamarla: solo alguien logueado. El pedido tiene que traer su
 * token de Supabase en el encabezado `Authorization`. No se confía en ningún
 * id que venga en el cuerpo del pedido: si se confiara, cualquiera podría
 * mandar el id de otra persona y hacerle pagar la cuenta ajena.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SUPABASE_URL = "https://esbrpjlwavnwdykygcxk.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WgL4D7anL87AyXmR9GAeqA_azUCuKaK"

export async function POST(req: Request) {
  if (!cobroAutomaticoListo()) {
    /* 503 y no 500: no está roto, está sin configurar. El Paywall lo usa para
       volver al link de siempre y seguir cobrando a mano. */
    return NextResponse.json(
      { error: "cobro automatico sin configurar" },
      { status: 503 },
    )
  }

  const auth = req.headers.get("authorization")
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null
  if (!token) {
    return NextResponse.json({ error: "hace falta entrar" }, { status: 401 })
  }

  /* Se le pregunta a Supabase de quién es el token. Esto es la parte que no se
     puede saltear: es lo único que prueba que quien pide el checkout es quien
     dice ser. */
  const sb = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const { data, error } = await sb.auth.getUser(token)

  if (error || !data.user) {
    return NextResponse.json({ error: "sesion invalida" }, { status: 401 })
  }

  const pref = await crearPreferencia({
    userId: data.user.id,
    email: data.user.email ?? null,
    titulo: "Estudio Lunar · acceso completo",
    precio: PRECIO_ACCESO,
  })

  if ("error" in pref) {
    console.error("[pago] no pude crear la preferencia:", pref.error)
    return NextResponse.json({ error: pref.error }, { status: 502 })
  }

  return NextResponse.json({ url: pref.url }, { status: 200 })
}
