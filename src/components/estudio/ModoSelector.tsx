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

const PRIMARIO: Opcion = {
  id: "estudio",
  label: "Estudiar",
  Icon: BookOpen,
}

const ACTIVIDADES: Opcion[] = [
  { id: "match", label: "Match", Icon: Puzzle },
  { id: "cloze", label: "Cloze", Icon: Type },
  { id: "simulacro", label: "Simulacro", Icon: FileCheck },
]

export function ModoSelector({ modo, onChange }: Props) {
  return (
    <div className="glass mb-4 flex w-full items-center gap-3 overflow-x-auto rounded-xl p-1.5 sm:w-auto sm:inline-flex">
      {/* HERO — visiblemente más grande, con bg persistente */}
      <Hero op={PRIMARIO} activo={modo === PRIMARIO.id} onChange={onChange} />

      {/* Separador real (no un hairline) */}
      <span
        className="hidden h-7 w-px shrink-0 bg-zinc-300/50 sm:block dark:bg-white/15"
        aria-hidden
      />

      {/* ACTIVIDADES — chiquitos, sin peso visual cuando inactivos */}
      <div className="flex flex-1 items-center gap-1 sm:flex-initial">
        {ACTIVIDADES.map((op) => (
          <Pildora
            key={op.id}
            op={op}
            activo={modo === op.id}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}

function Hero({
  op,
  activo,
  onChange,
}: {
  op: Opcion
  activo: boolean
  onChange: (m: Modo) => void
}) {
  const Icon = op.Icon
  return (
    <button
      onClick={() => onChange(op.id)}
      aria-pressed={activo}
      className={cn(
        "btn-press inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all",
        // BG persistente: el hero SIEMPRE tiene un tinte verde,
        // aunque no esté seleccionado. Eso lo separa de las píldoras.
        activo
          ? "bg-emerald-500/20 text-emerald-700 shadow-sm ring-1 ring-emerald-500/30 dark:text-emerald-300"
          : "bg-emerald-500/8 text-emerald-700/90 hover:bg-emerald-500/14 dark:text-emerald-300/80",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" /> {op.label}
    </button>
  )
}

function Pildora({
  op,
  activo,
  onChange,
}: {
  op: Opcion
  activo: boolean
  onChange: (m: Modo) => void
}) {
  const Icon = op.Icon
  return (
    <button
      onClick={() => onChange(op.id)}
      aria-pressed={activo}
      className={cn(
        "btn-press inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors sm:flex-initial",
        activo
          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
          : "text-zinc-500 hover:bg-white/5 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200",
      )}
    >
      <Icon className="h-3 w-3 shrink-0" /> {op.label}
    </button>
  )
}
