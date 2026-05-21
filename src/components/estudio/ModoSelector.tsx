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

// "Estudiar" es el héroe: la actividad principal.
// Las otras 3 son alternativas/actividades complementarias.
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
    <div className="glass mb-4 flex w-full items-center gap-1 overflow-x-auto rounded-xl p-1 sm:w-auto sm:inline-flex">
      <Boton op={PRIMARIO} activo={modo === PRIMARIO.id} hero onChange={onChange} />

      {/* Separador visual — Gestalt: lo que está agrupado se lee como tal.
          "Estudiar" queda solo a la izquierda; las 3 actividades agrupadas a la derecha. */}
      <span
        className="mx-1 h-5 w-px shrink-0 bg-zinc-300/40 dark:bg-white/10"
        aria-hidden
      />

      {ACTIVIDADES.map((op) => (
        <Boton
          key={op.id}
          op={op}
          activo={modo === op.id}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

function Boton({
  op,
  activo,
  hero = false,
  onChange,
}: {
  op: Opcion
  activo: boolean
  hero?: boolean
  onChange: (m: Modo) => void
}) {
  const Icon = op.Icon
  return (
    <button
      onClick={() => onChange(op.id)}
      aria-pressed={activo}
      className={cn(
        "btn-press inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs whitespace-nowrap transition-colors sm:flex-initial sm:px-4",
        // Peso como herramienta de jerarquía: el héroe lleva semibold;
        // los demás, medium. Misma fuente, mismo tamaño, distinta importancia.
        hero ? "font-semibold" : "font-medium",
        activo
          ? // Estado activo unificado: SOLO emerald, no 4 colores distintos.
            // Un solo mental model para "estoy acá".
            "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
          : // Inactivos parejos en gris — sin competir entre sí.
            "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
      )}
    >
      <Icon className="h-3.5 w-3.5" /> {op.label}
    </button>
  )
}
