"use client"

import { useEffect } from "react"

interface Props {
  mensaje: string
  onConfirmar: () => void
  onCancelar: () => void
}

export function ModalConfirmar({ mensaje, onConfirmar, onCancelar }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancelar()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onCancelar])

  return (
    <>
      <div
        className="animate-fade-bg fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
        onClick={onCancelar}
      />
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="glass-strong animate-scale-in pointer-events-auto w-full max-w-sm rounded-3xl p-6">
          <p className="mb-6 whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            {mensaje}
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onCancelar}
              className="glass btn-press rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirmar}
              className="btn-press rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-medium text-white shadow-lg hover:from-red-700 hover:to-red-800"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
