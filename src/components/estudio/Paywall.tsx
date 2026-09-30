"use client"

import { X } from "lucide-react"
import type { AuthApi } from "@/lib/hooks/useAuth"
import { Luna, Sentada } from "@/components/landing/Personajes"
import { WHATSAPP_NUMERO } from "@/lib/constants"
import { LIMITES, siguientePaso, temasFaltantes, type Nivel } from "@/lib/plan"

/**
 * LA PANTALLA DEL LÍMITE.
 *
 * Aparece cuando alguien toca un tema o una actividad que todavía no tiene.
 * Dos reglas de diseño:
 *
 * 1. Nunca se abre de sorpresa. Se llega acá tocando un candado que ya estaba
 *    a la vista. Sorprender a alguien con un cobro en la mitad de una sesión
 *    de estudio es la forma más rápida de que no te compre nunca.
 *
 * 2. Dice qué se está perdiendo, con números, no con adjetivos. "Te faltan 18
 *    temas" convence más que "desbloqueá todo el contenido premium".
 */

const MENSAJE = "Hola! Quiero desbloquear Estudio Mozzi 💚"

interface Props {
  nivel: Nivel
  /** Qué quiso abrir: un tema bloqueado o una actividad bloqueada. */
  motivo: { tipo: "tema"; nombre: string } | { tipo: "modo"; nombre: string }
  totalTemas: number
  auth: AuthApi
  onCerrar: () => void
}

export function Paywall({ nivel, motivo, totalTemas, auth, onCerrar }: Props) {
  const paso = siguientePaso(nivel)
  const faltan = temasFaltantes(nivel, totalTemas)
  const limites = LIMITES[nivel]

  const wa = WHATSAPP_NUMERO
    ? `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAJE)}`
    : null

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
        className="relative w-full max-w-md rounded-3xl p-8 text-center"
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

            <ul className="mx-auto mb-7 max-w-xs space-y-2 text-left text-[15px] font-medium text-[var(--noche)]/70">
              <li>· Los {totalTemas} temas, del parcial y del final</li>
              <li>· El simulacro con reloj</li>
              <li>· El oral sin tope de preguntas</li>
              <li>· Pago único, te queda para siempre</li>
            </ul>

            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="btn-lunar btn-noche block w-full !py-4">
                Quiero desbloquearlo
              </a>
            ) : (
              <p className="text-[15px] font-bold text-[var(--noche)]/50">
                Falta cargar el número de contacto.
              </p>
            )}

            <button
              onClick={auth.reintentarChequeo}
              className="btn-lunar btn-fantasma mt-2 !py-2 text-[15px] text-[var(--noche)]/45"
            >
              Ya pagué, revisá de nuevo
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
