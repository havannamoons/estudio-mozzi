"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/hooks/useTheme"

export function Header() {
  const { tema, toggle, hidratado } = useTheme()
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Repaso
        </h1>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
          Sistema de estudio
        </p>
      </div>
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
    </header>
  )
}
