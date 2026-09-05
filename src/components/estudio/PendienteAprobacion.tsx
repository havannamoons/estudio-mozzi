"use client"

import type { AuthApi } from "@/lib/hooks/useAuth"
import { Sentada } from "@/components/landing/Personajes"
import { PantallaLunar } from "./PantallaLunar"

export function PendienteAprobacion({ auth }: { auth: AuthApi }) {
  return (
    <PantallaLunar>
      {/* La sentada, que es la pose de esperar */}
      <div className="flota mx-auto mb-6 w-fit">
        <Sentada size={180} color="#C3B0EA" />
      </div>

      <h1 className="serif mb-3 text-[clamp(2rem,7vw,2.8rem)] leading-tight">
        Falta un pasito
      </h1>
      <p className="mx-auto mb-3 max-w-sm text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        Entraste como{" "}
        <strong className="font-extrabold text-[var(--noche)]">{auth.email}</strong>
        , pero tu acceso todavía no está habilitado.
      </p>
      <p className="mx-auto mb-8 max-w-sm text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        Escribime para activarte. Cuando confirme tu compra, tocá el botón y
        entrás.
      </p>

      <div className="flex flex-col items-center gap-3">
        <button
          onClick={auth.reintentarChequeo}
          className="btn-lunar btn-noche w-full !py-4"
        >
          Ya me activaron
        </button>
        <button
          onClick={auth.cerrarSesion}
          className="btn-lunar btn-fantasma !py-2 text-[15px] text-[var(--noche)]/45"
        >
          Cerrar sesión
        </button>
      </div>
    </PantallaLunar>
  )
}
