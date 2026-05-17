"use client"

import { Moon, RotateCcw, Sun } from "lucide-react"
import { useTheme } from "@/lib/hooks/useTheme"

interface Props {
  onReset?: () => void
}

export function Header({ onReset }: Props) {
  const { tema, toggle, hidratado } = useTheme()
  return (
    <header className="mb-6 flex items-center justify-between gap-4 flex-wrap">
      <div>
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          Estudio
        </h1>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
          Psicoanálisis · Cát. Pino (ex Mozzi) · UBA · Prácticos 1 a 9
        </p>
      </div>
      <div className="flex items-center gap-2">
        {onReset && (
          <button
            onClick={onReset}
            className="glass btn-press rounded-xl p-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            title="Reset progreso del quiz"
            aria-label="Reset progreso"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={toggle}
          className="glass btn-press rounded-xl p-2.5 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          title="Cambiar tema"
          aria-label="Cambiar tema"
        >
          {hidratado && tema === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  )
}
