"use client"

import { BookOpen, FileCheck } from "lucide-react"
import type { Modo } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  modo: Modo
  onChange: (m: Modo) => void
}

export function ModoSelector({ modo, onChange }: Props) {
  return (
    <div className="glass mb-4 inline-flex w-full items-center gap-1 rounded-xl p-1 sm:w-auto">
      <button
        onClick={() => onChange("estudio")}
        className={cn(
          "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-colors",
          modo === "estudio"
            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
        )}
      >
        <BookOpen className="h-3.5 w-3.5" /> Estudiar por tema
      </button>
      <button
        onClick={() => onChange("simulacro")}
        className={cn(
          "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-colors",
          modo === "simulacro"
            ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
        )}
      >
        <FileCheck className="h-3.5 w-3.5" /> Simulacro de parcial
      </button>
    </div>
  )
}
