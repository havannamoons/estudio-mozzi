"use client"

import { BookOpen, FileCheck, Puzzle, Type } from "lucide-react"
import type { Modo } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  modo: Modo
  onChange: (m: Modo) => void
}

interface Opcion {
  id: Modo
  label: string
  Icon: typeof BookOpen
}

const ACTIVIDADES: Opcion[] = [
  { id: "match", label: "Match", Icon: Puzzle },
  { id: "cloze", label: "Cloze", Icon: Type },
  { id: "simulacro", label: "Simulacro", Icon: FileCheck },
]

export function ModoSelector({ modo, onChange }: Props) {
  const estudioActivo = modo === "estudio"

  return (
    <div className="mb-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      {/* ====== HERO ======
          Tamaño, padding, ícono — todo ~2x más grande que las píldoras.
          Bg verde persistente (también cuando no está activo) para que se lea
          como el botón principal aun antes de tocarlo. */}
      <button
        onClick={() => onChange("estudio")}
        aria-pressed={estudioActivo}
        className={cn(
          "btn-press inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-base font-semibold whitespace-nowrap transition-all",
          estudioActivo
            ? "bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 text-emerald-700 shadow-md shadow-emerald-900/10 ring-1 ring-emerald-500/40 dark:text-emerald-200"
            : "bg-emerald-500/12 text-emerald-700 hover:bg-emerald-500/18 dark:text-emerald-300",
        )}
      >
        <BookOpen className="h-5 w-5 shrink-0" />
        Estudiar por tema
      </button>

      {/* ====== ACTIVIDADES ======
          Contenedor separado (glass propio) — visualmente "otro grupo".
          Cada píldora chica, plana, gris cuando inactiva. */}
      <div className="glass flex items-center gap-1 rounded-xl p-1 sm:inline-flex">
        {ACTIVIDADES.map((op) => {
          const Icon = op.Icon
          const activo = modo === op.id
          return (
            <button
              key={op.id}
              onClick={() => onChange(op.id)}
              aria-pressed={activo}
              className={cn(
                "btn-press inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors sm:flex-initial",
                activo
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200",
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              {op.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
