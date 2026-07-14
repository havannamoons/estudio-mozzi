"use client"

import { useState } from "react"
import { ArrowRight, GraduationCap } from "lucide-react"
import { codigoValido } from "@/lib/access"

interface Props {
  onDesbloquear: () => void
}

export function AccessGate({ onDesbloquear }: Props) {
  const [codigo, setCodigo] = useState("")
  const [error, setError] = useState(false)
  const [verificando, setVerificando] = useState(false)

  const intentar = async () => {
    if (!codigo.trim() || verificando) return
    setVerificando(true)
    setError(false)
    const ok = await codigoValido(codigo)
    if (ok) {
      onDesbloquear()
    } else {
      setError(true)
      setVerificando(false)
    }
  }

  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-8">
      <div className="glass-strong animate-scale-in rounded-3xl p-6 text-center sm:p-8">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
          <GraduationCap className="h-7 w-7" />
        </div>

        <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Estudio Mozzi
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Ingresá tu <strong>código de acceso</strong> para desbloquear la app.
          Queda guardado en este dispositivo — lo ponés una sola vez.
        </p>

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault()
            void intentar()
          }}
        >
          <input
            type="text"
            inputMode="text"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            value={codigo}
            onChange={(e) => {
              setCodigo(e.target.value)
              if (error) setError(false)
            }}
            placeholder="MOZZI-XXXXXX"
            aria-label="Código de acceso"
            aria-invalid={error}
            className="glass-input w-full rounded-2xl px-4 py-3.5 text-center font-mono text-lg tracking-wider text-zinc-900 uppercase outline-none placeholder:text-zinc-400 dark:text-zinc-50 dark:placeholder:text-zinc-600"
          />

          {error && (
            <p className="text-xs font-medium text-red-600 dark:text-red-400">
              Ese código no es válido. Revisá que esté completo y bien escrito.
            </p>
          )}

          <button
            type="submit"
            disabled={verificando || !codigo.trim()}
            className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:from-emerald-400 hover:to-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {verificando ? "Verificando…" : "Desbloquear"}
            {!verificando && <ArrowRight className="h-5 w-5" />}
          </button>
        </form>

        <p className="mt-5 text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-500">
          ¿No tenés un código todavía? Escribime para conseguir el tuyo.
        </p>
      </div>
    </main>
  )
}
