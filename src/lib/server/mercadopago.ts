import "server-only"
import { createHmac, timingSafeEqual } from "node:crypto"

/**
 * LO QUE HABLA CON MERCADO PAGO. Solo servidor.
 *
 * Dos cosas pasan acá:
 *
 * 1. Crear la preferencia de pago. Un link de pago común (`mpago.la/...`) no
 *    sirve para activar sola a la compradora, porque es el mismo link para
 *    todo el mundo: cuando MP avisa "alguien pagó", no hay forma de saber
 *    quién. La preferencia se crea una por compra y lleva adentro el
 *    `external_reference` con el id de la persona, así el aviso llega firmado
 *    con el dato de a quién habilitar.
 *
 * 2. Verificar que el aviso sea de verdad de MP. Si no se verifica, cualquiera
 *    que descubra la dirección del webhook puede mandarle un POST diciendo
 *    "pagó" y habilitarse gratis. Eso es la parte importante de este archivo.
 */

const API = "https://api.mercadopago.com"

/** Dirección pública del sitio, para armar los links de vuelta y el webhook. */
export const SITIO =
  process.env.SITIO_URL ?? "https://estudio-next-swart.vercel.app"

export function getAccessToken(): string | null {
  return process.env.MP_ACCESS_TOKEN ?? null
}

/** ¿Está todo lo necesario para cobrar automático? */
export function cobroAutomaticoListo(): boolean {
  return Boolean(process.env.MP_ACCESS_TOKEN && process.env.MP_WEBHOOK_SECRET)
}

type PreferenciaArgs = {
  userId: string
  email: string | null
  titulo: string
  precio: number
}

/**
 * Crea la preferencia y devuelve la URL del checkout de MP.
 *
 * `external_reference` es el campo que vuelve en la notificación. Guardamos
 * ahí el id de Supabase (no el mail) porque el mail con el que paga en MP
 * puede ser distinto del mail con el que entró a la app con Google, y en ese
 * caso no habría forma de encontrarla.
 */
export async function crearPreferencia({
  userId,
  email,
  titulo,
  precio,
}: PreferenciaArgs): Promise<{ url: string } | { error: string }> {
  const token = getAccessToken()
  if (!token) return { error: "falta MP_ACCESS_TOKEN" }

  const cuerpo = {
    items: [
      {
        id: "acceso-completo",
        title: titulo,
        quantity: 1,
        unit_price: precio,
        currency_id: "ARS",
      },
    ],
    external_reference: userId,
    notification_url: `${SITIO}/api/pago/webhook`,
    back_urls: {
      success: `${SITIO}/app?pago=listo`,
      pending: `${SITIO}/app?pago=pendiente`,
      failure: `${SITIO}/app?pago=fallo`,
    },
    auto_return: "approved",
    /* El mail se manda solo para que MP se lo autocomplete y la compra sea
       más corta. No se usa para identificar a nadie. */
    ...(email ? { payer: { email } } : {}),
    metadata: { user_id: userId },
    statement_descriptor: "ESTUDIO LUNAR",
  }

  const r = await fetch(`${API}/checkout/preferences`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpo),
  })

  if (!r.ok) {
    const detalle = await r.text()
    return { error: `MP respondió ${r.status}: ${detalle.slice(0, 300)}` }
  }

  const data = (await r.json()) as { init_point?: string }
  if (!data.init_point) return { error: "MP no devolvió init_point" }

  return { url: data.init_point }
}

export type PagoMP = {
  id: number
  status: string
  external_reference: string | null
  transaction_amount: number | null
  payer_email: string | null
  /** Cómo pagó, ya en castellano y listo para mostrar. */
  metodo: string
}

/**
 * MP devuelve el medio de pago en inglés y en clave. Se traduce acá para
 * que el panel muestre algo legible sin tener que interpretarlo cada vez.
 */
function nombreDelMetodo(tipo: string | null | undefined): string {
  switch (tipo) {
    case "credit_card":
      return "Tarjeta de crédito"
    case "debit_card":
      return "Tarjeta de débito"
    case "prepaid_card":
      return "Tarjeta prepaga"
    case "ticket":
      return "Efectivo (Rapipago o Pago Fácil)"
    case "bank_transfer":
      return "Transferencia"
    case "account_money":
      return "Dinero en Mercado Pago"
    default:
      return tipo ?? "Sin especificar"
  }
}

/** Trae el pago de la API de MP. El aviso solo trae el id, nunca el estado. */
export async function traerPago(
  pagoId: string,
): Promise<PagoMP | { error: string }> {
  const token = getAccessToken()
  if (!token) return { error: "falta MP_ACCESS_TOKEN" }

  const r = await fetch(`${API}/v1/payments/${pagoId}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  })

  if (!r.ok) {
    return { error: `MP respondió ${r.status} al traer el pago ${pagoId}` }
  }

  const p = (await r.json()) as {
    id: number
    status: string
    external_reference?: string | null
    transaction_amount?: number | null
    payer?: { email?: string | null }
    payment_type_id?: string | null
  }

  return {
    id: p.id,
    status: p.status,
    external_reference: p.external_reference ?? null,
    transaction_amount: p.transaction_amount ?? null,
    payer_email: p.payer?.email ?? null,
    metodo: nombreDelMetodo(p.payment_type_id),
  }
}

/**
 * VERIFICA LA FIRMA DEL AVISO. Esto es lo que impide que alguien se habilite
 * gratis mandando un POST a mano.
 *
 * MP manda dos encabezados:
 *   x-signature:  ts=1700000000,v1=<hash hexadecimal>
 *   x-request-id: <uuid>
 *
 * El hash es un HMAC-SHA256, con la clave secreta del webhook, de este texto
 * armado exactamente así (con los puntos y comas finales):
 *   id:<data.id>;request-id:<x-request-id>;ts:<ts>;
 *
 * Si falta el secreto devolvemos `false`: preferimos rechazar el aviso antes
 * que habilitar a alguien sin poder comprobar quién lo pidió.
 */
export function firmaValida({
  xSignature,
  xRequestId,
  dataId,
}: {
  xSignature: string | null
  xRequestId: string | null
  dataId: string | null
}): { ok: true } | { ok: false; motivo: string } {
  const secreto = process.env.MP_WEBHOOK_SECRET
  if (!secreto) return { ok: false, motivo: "falta MP_WEBHOOK_SECRET" }
  if (!xSignature) return { ok: false, motivo: "sin encabezado x-signature" }
  if (!dataId) return { ok: false, motivo: "sin data.id" }

  /* El encabezado viene como "ts=...,v1=..." y el orden no está garantizado. */
  let ts: string | null = null
  let v1: string | null = null
  for (const parte of xSignature.split(",")) {
    const [k, ...resto] = parte.split("=")
    const valor = resto.join("=").trim()
    if (k?.trim() === "ts") ts = valor
    if (k?.trim() === "v1") v1 = valor
  }
  if (!ts || !v1) return { ok: false, motivo: "x-signature incompleto" }

  /* MP documenta el id en minúsculas. Si llega con mayúsculas y no se
     normaliza, el hash no coincide y el pago se rechaza sin motivo visible. */
  const manifiesto = `id:${dataId.toLowerCase()};request-id:${xRequestId ?? ""};ts:${ts};`
  const esperado = createHmac("sha256", secreto)
    .update(manifiesto)
    .digest("hex")

  const a = Buffer.from(esperado, "utf8")
  const b = Buffer.from(v1, "utf8")
  if (a.length !== b.length) return { ok: false, motivo: "firma no coincide" }
  if (!timingSafeEqual(a, b)) return { ok: false, motivo: "firma no coincide" }

  return { ok: true }
}
