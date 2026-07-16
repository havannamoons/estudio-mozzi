"use client"

import { Lock } from "lucide-react"

export function AppPausada() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-8">
      <div className="glass-strong animate-scale-in rounded-3xl p-6 text-center sm:p-8">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
          <Lock className="h-7 w-7" />
        </div>

        <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          No disponible por ahora
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Estudio Mozzi está en pausa temporalmente. Volvé a intentar más tarde.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
          Si necesitás acceso, escribime.
        </p>
      </div>
    </main>
  )
}
