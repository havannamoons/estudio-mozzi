"use client"

import type { Vista } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  vista: Vista
  setVista: (v: Vista) => void
}

const TABS: { id: Vista; label: string }[] = [
  { id: "repasar", label: "Estudiar" },
  { id: "reforzar", label: "Reforzar" },
  { id: "agregar", label: "Agregar" },
  { id: "todas", label: "Todas" },
  { id: "importar", label: "Importar" },
]

export function NavTabs({ vista, setVista }: Props) {
  return (
    <nav className="mb-4 flex items-center gap-1 overflow-x-auto p-1">
      {TABS.map((t) => (
        <button
          key={t.id}
          onClick={() => setVista(t.id)}
          className={cn(
            "btn-press rounded-xl px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:px-4",
            vista === t.id
              ? "bg-white/10 text-zinc-900 dark:bg-white/10 dark:text-zinc-50"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
          )}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}
