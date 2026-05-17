"use client"

import { ArrowRight, Brain } from "lucide-react"
import type { Carta } from "@/lib/types"

interface Props {
  carta: Carta
  onProbarme: () => void
}

export function FaseEstudiar({ carta, onProbarme }: Props) {
  const respuesta =
    carta.tipo === "opciones"
      ? (carta.opciones.find((o) => o.correcta)?.texto ?? "")
      : carta.back

  return (
    <div className="animate-slide-up">
      <div className="glass-strong overflow-hidden rounded-3xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="fase-dot active" />
              <span className="fase-dot" />
            </div>
            <span className="text-[11px] font-medium tracking-wider text-orange-500 uppercase dark:text-orange-400">
              Paso 1 · Estudiar
            </span>
          </div>
          {carta.tag && (
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
              {carta.tag}
            </span>
          )}
        </div>

        <div className="px-6 pt-5 pb-6 sm:px-10">
          <p className="mb-2 text-[11px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
            Pregunta
          </p>
          <p className="mb-7 font-serif text-xl leading-relaxed text-zinc-900 sm:text-2xl dark:text-zinc-50">
            {carta.front}
          </p>

          <div className="glass-subtle rounded-2xl border-l-4 border-l-emerald-500/60 p-5 sm:p-6">
            <p className="mb-2 text-[11px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
              Respuesta
            </p>
            <p className="text-base leading-relaxed whitespace-pre-wrap text-zinc-800 sm:text-lg dark:text-zinc-100">
              {respuesta}
            </p>
            {carta.tipo === "opciones" && carta.back && (
              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="mb-2 text-[11px] font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                  Explicación
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
                  {carta.back}
                </p>
              </div>
            )}
          </div>

          <div className="glass-subtle mt-5 rounded-2xl p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <Brain className="h-4 w-4 text-orange-500" />
              <p className="text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-300">
                Antes de probarte
              </p>
            </div>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-orange-500">1.</span>
                <span>Leé la respuesta despacio, sin apurarte.</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-orange-500">2.</span>
                <span>Cerrá los ojos y tratá de decirla con tus palabras.</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-orange-500">3.</span>
                <span>
                  Identificá la palabra o concepto <em>clave</em> que tenés que recordar.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 p-4 sm:p-5">
          <button
            onClick={onProbarme}
            className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-4 py-3 text-sm font-medium text-white shadow-lg hover:from-emerald-700 hover:to-emerald-800"
          >
            Listo, probame
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
