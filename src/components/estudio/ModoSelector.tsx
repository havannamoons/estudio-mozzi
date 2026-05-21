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
  tone: string
}

const OPCIONES: Opcion[] = [
  {
    id: "estudio",
    label: "Estudiar",
    Icon: BookOpen,
    tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  },
  {
    id: "match",
    label: "Match",
    Icon: Puzzle,
    tone: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  },
  {
    id: "cloze",
    label: "Cloze",
    Icon: Type,
    tone: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  },
  {
    id: "simulacro",
    label: "Simulacro",
    Icon: FileCheck,
    tone: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  },
]

export function ModoSelector({ modo, onChange }: Props) {
  return (
    <div className="glass mb-4 flex w-full items-center gap-1 overflow-x-auto rounded-xl p-1 sm:w-auto sm:inline-flex">
      {OPCIONES.map((op) => {
        const Icon = op.Icon
        const activo = modo === op.id
        return (
          <button
            key={op.id}
            onClick={() => onChange(op.id)}
            className={cn(
              "btn-press inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors sm:flex-initial sm:px-4",
              activo
                ? op.tone
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            )}
            aria-pressed={activo}
          >
            <Icon className="h-3.5 w-3.5" /> {op.label}
          </button>
        )
      })}
    </div>
  )
}
