"use client"

import { useState } from "react"
import { Check, Copy, X } from "lucide-react"
import type { AuthApi } from "@/lib/hooks/useAuth"
import { useToast } from "@/lib/hooks/useToast"
import { cn } from "@/lib/utils"
import { Luna, Sentada } from "@/components/landing/Personajes"
import {
  ALIAS_TRANSFERENCIA,
  FIN_LANZAMIENTO,
  MERCADOPAGO_LINK,
  PRECIO_ACCESO,
  PRECIO_DESPUES,
  TITULAR_TRANSFERENCIA,
  WHATSAPP_NUMERO,
} from "@/lib/constants"
import { LIMITES, siguientePaso, temasFaltantes, type Nivel } from "@/lib/plan"

/**
 * LA PANTALLA DEL LÍMITE.
 *
 * Aparece cuando alguien toca un tema o una actividad que todavía no tiene.
 * Tres reglas de diseño:
 *
 * 1. Nunca se abre de sorpresa. Se llega acá tocando un candado que ya estaba
 *    a la vista. Sorprender a alguien con un cobro en la mitad de una sesión
 *    de estudio es la forma más rápida de que no te compre nunca.
 *
 * 2. Dice qué se está perdiendo, con números, no con adjetivos. "Te faltan 18
 *    temas" convence más que "desbloqueá todo el contenido premium".
 *
 * 3. La transferencia va PRIMERO. Casi ninguna estudiante paga con tarjeta:
 *    paga transfiriendo desde la app del banco o de Mercado Pago. Si el único
 *    botón pide tarjeta, la mayoría abandona ahí sin escribir nada.
 */

const MENSAJE_TARJETA = "Hola! Ya pagué Estudio Lunar. Mi mail es: "
const MENSAJE_TRANSFERENCIA =
  "Hola! Te transferí por Estudio Lunar, te paso el comprobante. Mi mail es: "

type Metodo = "transferencia" | "tarjeta"

interface Props {
  nivel: Nivel
  /** Qué quiso abrir: un tema bloqueado o una actividad bloqueada. */
  motivo: { tipo: "tema"; nombre: string } | { tipo: "modo"; nombre: string }
  totalTemas: number
  auth: AuthApi
  onCerrar: () => void
}

export function Paywall({ nivel, motivo, totalTemas, auth, onCerrar }: Props) {
  const { push } = useToast()
  const paso = siguientePaso(nivel)
  const faltan = temasFaltantes(nivel, totalTemas)
  const limites = LIMITES[nivel]

  /* Si todavía no cargaste el alias en `constants.ts`, la opción no existe y
     la pantalla queda igual que antes: solo el link de Mercado Pago. */
  const hayTransferencia = Boolean(ALIAS_TRANSFERENCIA)
  const [metodo, setMetodo] = useState<Metodo>(
    hayTransferencia ? "transferencia" : "tarjeta",
  )

  const precio = new Intl.NumberFormat("es-AR").format(PRECIO_ACCESO)

  /* El aviso de precio de lanzamiento se dibuja solo mientras la fecha no
     pasó. El día después se apaga sin que haya que tocar nada, así nunca
     queda prometiendo un precio que ya no existe. La fecha se compara en
     texto (AAAA-MM-DD ordena bien alfabéticamente) para no pelear con zonas
     horarias: lo que importa es el día acá, no la hora UTC. */
  const hoy = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date())
  const lanzamientoVigente = Boolean(FIN_LANZAMIENTO) && hoy <= FIN_LANZAMIENTO
  const finLanzamiento = lanzamientoVigente
    ? new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long" }).format(
        new Date(`${FIN_LANZAMIENTO}T12:00:00`),
      )
    : ""
  const precioDespues = new Intl.NumberFormat("es-AR").format(PRECIO_DESPUES)

  /* El mail ya lo sabemos si está logueada: va escrito en el mensaje para que
     no tenga que acordarse con cuál entró. Ese dato es el que te deja
     encontrarla después en /panel. */
  const mail = auth.email ?? ""

  const linkWa = (texto: string) =>
    WHATSAPP_NUMERO
      ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto + mail)}`
      : null

  const waTransferencia = linkWa(MENSAJE_TRANSFERENCIA)
  const waTarjeta = linkWa(MENSAJE_TARJETA)

  const copiarAlias = async () => {
    try {
      await navigator.clipboard.writeText(ALIAS_TRANSFERENCIA)
      push("Alias copiado 🌙")
    } catch {
      /* Navegador viejo o permiso denegado: el alias está igual a la vista. */
      push("Copialo a mano: " + ALIAS_TRANSFERENCIA, "error")
    }
  }

  return (
    <div
      className="anim-fade fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "color-mix(in srgb, var(--noche) 62%, transparent)" }}
      onClick={onCerrar}
      role="dialog"
      aria-modal="true"
      aria-label="Desbloquear"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl p-8 text-center"
        style={{ background: "var(--crema)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onCerrar}
          className="absolute top-4 right-4 text-[var(--noche)]/35 hover:text-[var(--noche)]"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-5 w-fit">
          {paso === "crear-cuenta" ? (
            <Luna size={72} color="#C3B0EA" />
          ) : (
            <Sentada size={130} color="#C3B0EA" />
          )}
        </div>

        {paso === "crear-cuenta" ? (
          <>
            <h2 className="serif mb-3 text-[2rem] leading-tight">
              Seguí con tu cuenta
            </h2>
            <p className="mb-2 text-[16px] leading-relaxed font-medium text-[var(--noche)]/65">
              {motivo.tipo === "tema"
                ? `“${motivo.nombre}” está más adelante.`
                : `${motivo.nombre} está más adelante.`}{" "}
              Creá tu cuenta gratis y se te abren{" "}
              <strong className="font-extrabold text-[var(--noche)]">
                tres temas
              </strong>
              , además de relacionar y completar frases.
            </p>
            <p className="mb-7 text-[15px] leading-relaxed font-medium text-[var(--noche)]/50">
              Y lo más importante: tu progreso deja de vivir en este navegador y
              queda guardado en tu cuenta.
            </p>
            <button
              onClick={auth.loginConGoogle}
              className="btn-lunar btn-noche w-full !py-4"
            >
              Crear mi cuenta con Google
            </button>
            <button
              onClick={onCerrar}
              className="btn-lunar btn-fantasma mt-2 !py-2 text-[15px] text-[var(--noche)]/45"
            >
              Ahora no, sigo mirando
            </button>
          </>
        ) : (
          <>
            <h2 className="serif mb-3 text-[2rem] leading-tight">
              {faltan > 0 ? `Te faltan ${faltan} temas` : "Desbloqueá todo"}
            </h2>
            <p className="mb-5 text-[16px] leading-relaxed font-medium text-[var(--noche)]/65">
              {motivo.tipo === "tema"
                ? `“${motivo.nombre}” es parte del acceso completo.`
                : `${motivo.nombre} es parte del acceso completo.`}
            </p>

            <ul className="mx-auto mb-6 max-w-xs space-y-2 text-left text-[15px] font-medium text-[var(--noche)]/70">
              <li>· Los {totalTemas} temas, del parcial y del final</li>
              <li>· El simulacro con reloj</li>
              <li>· El oral sin tope de preguntas</li>
              <li>· ${precio} una sola vez, te queda para siempre</li>
            </ul>

            {lanzamientoVigente && (
              <p
                className="mx-auto mb-6 max-w-xs rounded-2xl px-4 py-3 text-[14px] leading-relaxed font-semibold text-[var(--noche)]/75"
                style={{
                  background: "color-mix(in srgb, var(--lila) 16%, transparent)",
                }}
              >
                Precio de lanzamiento hasta el {finLanzamiento}. Después pasa a
                ${precioDespues}.
              </p>
            )}

            {hayTransferencia && (
              <div className="grupo-pastillas mb-5">
                <button
                  className={cn(
                    "pastilla",
                    metodo === "transferencia" && "pastilla-activa",
                  )}
                  aria-pressed={metodo === "transferencia"}
                  onClick={() => setMetodo("transferencia")}
                >
                  Transferencia
                </button>
                <button
                  className={cn(
                    "pastilla",
                    metodo === "tarjeta" && "pastilla-activa",
                  )}
                  aria-pressed={metodo === "tarjeta"}
                  onClick={() => setMetodo("tarjeta")}
                >
                  Tarjeta
                </button>
              </div>
            )}

            {metodo === "transferencia" && hayTransferencia ? (
              <>
                {/* El alias grande y en una sola línea: se tiene que leer de un
                    vistazo desde el celu, con la app del banco abierta al lado. */}
                <div
                  className="mb-4 rounded-2xl p-5 text-left"
                  style={{
                    background: "color-mix(in srgb, var(--lila) 14%, transparent)",
                  }}
                >
                  <p className="mb-1 text-[13px] font-bold text-[var(--noche)]/45">
                    Alias
                  </p>
                  <p className="mb-3 font-mono text-[19px] leading-tight font-extrabold break-all text-[var(--noche)]">
                    {ALIAS_TRANSFERENCIA}
                  </p>
                  {TITULAR_TRANSFERENCIA ? (
                    <p className="mb-3 text-[14px] font-medium text-[var(--noche)]/60">
                      A nombre de {TITULAR_TRANSFERENCIA}
                    </p>
                  ) : null}
                  <p className="mb-4 text-[14px] font-medium text-[var(--noche)]/60">
                    Monto:{" "}
                    <strong className="font-extrabold text-[var(--noche)]">
                      ${precio}
                    </strong>
                  </p>
                  <button
                    onClick={copiarAlias}
                    className="btn-lunar btn-crema w-full !py-3 text-[15px]"
                  >
                    <Copy className="h-4 w-4" />
                    Copiar el alias
                  </button>
                </div>

                <p className="mb-3 text-[14px] leading-relaxed font-medium text-[var(--noche)]/55">
                  Transferí desde tu banco o tu Mercado Pago y mandame el
                  comprobante. Te habilito todo en el día.
                </p>

                {waTransferencia ? (
                  <a
                    href={waTransferencia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lunar btn-noche block w-full !py-4"
                  >
                    <Check className="h-4 w-4" />
                    Ya transferí, mando el comprobante
                  </a>
                ) : null}
              </>
            ) : (
              <>
                {/* El pago va primero y es de ella sola: mandar a alguien a
                    escribirle a una desconocida antes de poder comprar tira
                    abajo media venta. */}
                {MERCADOPAGO_LINK ? (
                  <a
                    href={MERCADOPAGO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lunar btn-noche block w-full !py-4"
                  >
                    Pagar con tarjeta
                  </a>
                ) : null}

                <p className="mt-4 mb-1 text-[14px] leading-relaxed font-medium text-[var(--noche)]/55">
                  Después de pagar, mandame por WhatsApp el{" "}
                  <strong className="font-extrabold text-[var(--noche)]">
                    mail con el que entraste
                  </strong>{" "}
                  y te habilito todo. Es lo único que necesito para encontrarte.
                </p>

                {waTarjeta ? (
                  <a
                    href={waTarjeta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lunar btn-suave block w-full !py-3 text-[15px]"
                  >
                    Escribirme por WhatsApp
                  </a>
                ) : null}
              </>
            )}

            <button
              onClick={auth.reintentarChequeo}
              className="btn-lunar btn-fantasma mt-2 !py-2 text-[15px] text-[var(--noche)]/45"
            >
              Ya me activaron, revisá de nuevo
            </button>
          </>
        )}

        <p className="mt-6 text-[13px] font-medium text-[var(--noche)]/35">
          {limites.etiqueta}
        </p>
      </div>
    </div>
  )
}
