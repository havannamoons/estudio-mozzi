"use client"

import { Clock } from "lucide-react"
import type { AuthApi } from "@/lib/hooks/useAuth"

export function PendienteAprobacion({ auth }: { auth: AuthApi }) {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-8">
      <div className="glass-strong animate-scale-in rounded-3xl p-6 text-center sm:p-8">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <Clock className="h-7 w-7" />
        </div>

        <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Cuenta pendiente
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Iniciaste sesión como{" "}
          <strong className="text-zinc-800 dark:text-zinc-100">{auth.email}</strong>,
          pero tu acceso todavía no está habilitado.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Escribime para activarte. Una vez confirmada tu compra, tocá{" "}
          <strong>“Ya me activaron”</strong> y listo.
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={auth.reintentarChequeo}
            className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:from-emerald-400 hover:to-emerald-500"
          >
            Ya me activaron
          </button>
          <button
            onClick={auth.cerrarSesion}
            className="btn-press inline-flex w-full items-center justify-center rounded-2xl px-6 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </main>
  )
}
