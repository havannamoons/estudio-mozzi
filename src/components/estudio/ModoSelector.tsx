"use client"

import { BookOpen, FileCheck, Mic, Puzzle, Type } from "lucide-react"
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
  { id: "oral", label: "Oral", Icon: Mic },
]

/**
 * Estudiar por tema es el camino principal, así que va como botón grande y
 * sólido. Las tres actividades son alternativas, y por eso van como pastillas
 * chicas y planas al costado — la jerarquía la da el tamaño, no el color.
 */
export function ModoSelector({ modo, onChange }: Props) {
  const estudioActivo = modo === "estudio"

  return (
    <div className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <button
        onClick={() => onChange("estudio")}
        aria-pressed={estudioActivo}
        className={cn(
          "btn-lunar !px-6 !py-4 whitespace-nowrap",
          estudioActivo ? "btn-lila" : "btn-suave",
        )}
      >
        <BookOpen className="h-5 w-5 shrink-0" />
        Estudiar por tema
      </button>

      <div className="grupo-pastillas">
        {ACTIVIDADES.map((op) => {
          const Icon = op.Icon
          const activo = modo === op.id
          return (
            <button
              key={op.id}
              onClick={() => onChange(op.id)}
              aria-pressed={activo}
              className={cn("pastilla", activo && "pastilla-activa")}
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
