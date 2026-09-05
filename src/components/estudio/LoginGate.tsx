"use client"

import { useState } from "react"
import type { AuthApi } from "@/lib/hooks/useAuth"
import { LunaProta } from "@/components/landing/Personajes"
import { PantallaLunar } from "./PantallaLunar"

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

export function LoginGate({ auth }: { auth: AuthApi }) {
  const [yendo, setYendo] = useState(false)

  const entrar = async () => {
    setYendo(true)
    try {
      await auth.loginConGoogle()
      // Redirige a Google; si vuelve por error, reactivamos el botón.
    } catch {
      setYendo(false)
    }
  }

  return (
    <PantallaLunar>
      {/* La lunita saluda en vez del birrete genérico */}
      <div className="flota mx-auto mb-7 w-fit">
        <LunaProta size={190} />
      </div>

      <h1 className="serif mb-3 text-[clamp(2rem,7vw,2.8rem)] leading-tight">
        Hola de nuevo
      </h1>
      <p className="mx-auto mb-8 max-w-xs text-[17px] leading-relaxed font-medium text-[var(--noche)]/65">
        Entrá con tu cuenta de Google y seguí donde lo dejaste.
      </p>

      <button
        onClick={entrar}
        disabled={yendo}
        className="btn-lunar btn-google w-full !py-4 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <GoogleG className="h-5 w-5" />
        {yendo ? "Abriendo Google…" : "Continuar con Google"}
      </button>

      <p className="mx-auto mt-6 max-w-xs text-[13px] leading-relaxed font-semibold text-[var(--noche)]/40">
        Usamos tu cuenta solo para identificarte. Tu acceso se habilita una vez
        confirmada tu compra.
      </p>
    </PantallaLunar>
  )
}
