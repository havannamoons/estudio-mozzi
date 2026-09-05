"use client"

import Link from "next/link"
import { RotateCcw } from "lucide-react"
import { useMateria } from "@/lib/materias/contexto"
import { Luna } from "@/components/landing/Personajes"

interface Props {
  onReset?: () => void
}

export function Header({ onReset }: Props) {
  const { materia } = useMateria()

  return (
    <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
      {/* La lunita hace de logo y de salida a la home: antes no había forma
          de volver desde adentro de la app. */}
      <Link href="/" className="flex items-center gap-3">
        <Luna size={42} />
        <span className="min-w-0">
          <span className="serif block text-[clamp(1.4rem,4vw,1.9rem)] leading-none">
            {materia.nombre}
          </span>
          <span className="mt-1 block text-[12px] font-bold text-[var(--noche)]/45">
            {materia.carrera}
            {materia.catedra ? ` · ${materia.catedra}` : ""}
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-2">

        {onReset && (
          <button
            onClick={onReset}
            className="btn-icono"
            title="Reiniciar el progreso del quiz"
            aria-label="Reiniciar progreso"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>
    </header>
  )
}
