import { NextResponse } from "next/server"
import { firmaValida, traerPago } from "@/lib/server/mercadopago"
import { habilitarPerfil, registrarVenta } from "@/lib/server/supabase-admin"

/**
 * EL AVISO DE MERCADO PAGO. Acá se habilita a quien pagó, sin que nadie mire.
 *
 * Flujo completo de una compra automática:
 *   1. La persona toca "Pagar con tarjeta" en el Paywall.
 *   2. `/api/pago/crear` arma una preferencia con su id adentro y la manda a MP.
 *   3. Paga en el checkout de MP.
 *   4. MP le pega a ESTA dirección con el id del pago.
 *   5. Acá se verifica la firma, se le pregunta a MP el estado real del pago,
 *      y si está aprobado se pone `habilitado = true`.
 *   6. La persona vuelve a la app y ya tiene todo.
 *
 * Tres reglas que no hay que romper:
 *
 * - **Verificar la firma siempre.** El aviso llega por una dirección pública.
 *   Sin verificar, cualquiera que la descubra manda un POST y entra gratis.
 *
 * - **No creerle al cuerpo del aviso.** MP manda el id del pago, no el estado.
 *   El estado se le pregunta a la API de MP con el token. Si confiáramos en lo
 *   que dice el POST, alcanzaría con mandar `{"status":"approved"}`.
 *
 * - **Responder 200 rápido, incluso en lo que se ignora.** Si devolvés error,
 *   MP reintenta el mismo aviso una y otra vez. El 200 significa "lo recibí",
 *   no "cobré".
 */

/* Node y no edge: la verificación de la firma usa `node:crypto`. */
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  const url = new URL(req.url)

  /* MP cambió el formato con los años y conviven los dos. El nuevo manda
     `type=payment&data.id=123`; el viejo, `topic=payment&id=123`. */
  const tipo = url.searchParams.get("type") ?? url.searchParams.get("topic")
  const idQuery =
    url.searchParams.get("data.id") ?? url.searchParams.get("id")

  let cuerpo: { data?: { id?: string | number }; type?: string } = {}
  try {
    cuerpo = await req.json()
  } catch {
    /* Algunos avisos llegan sin cuerpo, solo con los parámetros. No es error. */
  }

  const dataId = String(cuerpo.data?.id ?? idQuery ?? "")
  const tipoFinal = cuerpo.type ?? tipo

  /* MP avisa de varias cosas (merchant_order, planes, suscripciones). Solo nos
     importan los pagos; el resto se acusa recibo y se descarta. */
  if (tipoFinal && tipoFinal !== "payment") {
    return NextResponse.json({ ignorado: tipoFinal }, { status: 200 })
  }

  if (!dataId) {
    return NextResponse.json({ error: "sin id de pago" }, { status: 200 })
  }

  const firma = firmaValida({
    xSignature: req.headers.get("x-signature"),
    xRequestId: req.headers.get("x-request-id"),
    dataId,
  })

  if (!firma.ok) {
    /* 401 a propósito, y este sí vale reintentarlo: si el motivo es que falta
       la variable de entorno, se arregla poniéndola y MP vuelve a probar. */
    console.error("[pago] firma rechazada:", firma.motivo, "pago", dataId)
    return NextResponse.json({ error: firma.motivo }, { status: 401 })
  }

  const pago = await traerPago(dataId)
  if ("error" in pago) {
    console.error("[pago] no se pudo leer el pago:", pago.error)
    /* 500 para que MP reintente: puede ser un corte momentáneo de su API. */
    return NextResponse.json({ error: pago.error }, { status: 500 })
  }

  if (pago.status !== "approved") {
    console.log(`[pago] ${pago.id} en estado ${pago.status}, no habilito`)
    return NextResponse.json({ estado: pago.status }, { status: 200 })
  }

  const userId = pago.external_reference
  if (!userId) {
    /* Un pago aprobado sin referencia es alguien que usó el link viejo de
       `mpago.la`. Hay que activarla a mano desde /panel, y queda anotado acá
       con el mail para poder encontrarla. */
    console.error(
      `[pago] ${pago.id} APROBADO SIN external_reference. Activar a mano.`,
      `mail de MP: ${pago.payer_email ?? "desconocido"}`,
      `monto: ${pago.transaction_amount ?? "?"}`,
    )
    return NextResponse.json({ error: "sin external_reference" }, { status: 200 })
  }

  const r = await habilitarPerfil(userId)
  if (!r.ok) {
    console.error(
      `[pago] ${pago.id} aprobado pero NO pude habilitar a ${userId}:`,
      r.error,
      `mail de MP: ${pago.payer_email ?? "desconocido"}`,
    )
    /* 500 para que MP reintente: si fue un corte de Supabase, el reintento lo
       resuelve solo y nadie queda pagando sin acceso. */
    return NextResponse.json({ error: r.error }, { status: 500 })
  }

  /* Queda anotada la compra para que el panel pueda decir quién compró.
     Va después de habilitar y nunca puede voltear el webhook: si esto
     falla, la persona ya tiene su acceso igual. */
  await registrarVenta({
    perfilId: userId,
    email: r.email ?? pago.payer_email,
    monto: pago.transaction_amount,
    metodo: pago.metodo,
    pagoId: String(pago.id),
  })

  console.log(
    `[pago] ${pago.id} aprobado (${pago.metodo}), habilitado ${r.email ?? userId}`,
  )
  return NextResponse.json({ ok: true }, { status: 200 })
}

/**
 * MP a veces pega un GET para comprobar que la dirección existe cuando la
 * configurás en el panel. Si contesta 404, la pantalla de MP no te deja
 * guardar la configuración.
 */
export async function GET() {
  return NextResponse.json({ listo: true }, { status: 200 })
}
