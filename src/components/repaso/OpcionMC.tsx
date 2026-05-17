"use client"

import { Check, X } from "lucide-react"
import type { Opcion } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  letra: string
  opcion: Opcion
  index: number
  elegidaIdx: number | null
  onClick?: (idx: number) => void
  disabled?: boolean
}

export function OpcionMC({ letra, opcion, index, elegidaIdx, onClick, disabled }: Props) {
  const respondida = elegidaIdx !== null
  const esElegida = elegidaIdx === index
  const esCorrectaRevelada = respondida && opcion.correcta && !esElegida

  return (
    <button
      onClick={() => onClick?.(index)}
      disabled={disabled || respondida}
      className={cn(
        "opcion-btn btn-press flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-medium",
        esElegida && opcion.correcta && "opcion-correcta-respondida",
        esElegida && !opcion.correcta && "opcion-incorrecta",
        esCorrectaRevelada && "opcion-correcta-revelada",
      )}
    >
      <span className="opcion-letra">{letra}</span>
      <span className="flex-1 leading-snug">{opcion.texto}</span>
      {esElegida && opcion.correcta && <Check className="ml-auto h-4 w-4 shrink-0" />}
      {esElegida && !opcion.correcta && <X className="ml-auto h-4 w-4 shrink-0" />}
      {esCorrectaRevelada && (
        <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-500" />
      )}
    </button>
  )
}
