"use client"

import { useState } from "react"
import { Inbox, Search, Trash2 } from "lucide-react"
import type { RepasoApi } from "@/lib/hooks/useRepaso"
import type { Carta } from "@/lib/types"
import { CAJA_DOMINADA } from "@/lib/constants"
import { useToast } from "@/lib/hooks/useToast"
import { ModalConfirmar } from "../ModalConfirmar"
import { cn } from "@/lib/utils"

interface Props {
  api: RepasoApi
}

export function VistaTodas({ api }: Props) {
  const {
    cartas,
    filtroBusqueda,
    setFiltroBusqueda,
    filtroTag,
    setFiltroTag,
    borrarCarta,
  } = api
  const { push: toast } = useToast()
  const [paraBorrar, setParaBorrar] = useState<Carta | null>(null)

  if (cartas.length === 0) {
    return (
      <div className="glass-strong animate-scale-in rounded-3xl p-10 text-center">
        <Inbox className="mx-auto mb-3 h-10 w-10 text-zinc-300 dark:text-zinc-700" />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Todavía no hay cartas.</p>
      </div>
    )
  }

  const tags = Array.from(new Set(cartas.map((c) => c.tag).filter(Boolean))).sort()
  const filtradas = cartas.filter((c) => {
    if (filtroTag && c.tag !== filtroTag) return false
    if (filtroBusqueda) {
      const q = filtroBusqueda.toLowerCase()
      return c.front.toLowerCase().includes(q) || (c.back || "").toLowerCase().includes(q)
    }
    return true
  })

  const confirmarBorrar = () => {
    if (!paraBorrar) return
    borrarCarta(paraBorrar.id)
    toast("Carta borrada")
    setParaBorrar(null)
  }

  return (
    <div className="animate-slide-up space-y-4">
      <div className="flex flex-wrap gap-2">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            value={filtroBusqueda}
            onChange={(e) => setFiltroBusqueda(e.target.value)}
            placeholder="Buscar..."
            className="glass-input w-full rounded-xl py-2.5 pr-4 pl-10 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
          />
        </div>
        {tags.length > 0 && (
          <select
            value={filtroTag}
            onChange={(e) => setFiltroTag(e.target.value)}
            className="glass-input rounded-xl px-3 py-2.5 text-sm text-zinc-800 outline-none transition-all dark:text-zinc-100"
          >
            <option value="">Todas las etiquetas</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        {filtradas.length === 0 ? (
          <div className="glass rounded-2xl py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
            No hay cartas con esos filtros.
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
              {filtradas.length} carta{filtradas.length === 1 ? "" : "s"}
            </p>
            <div className="space-y-2">
              {filtradas.map((c) => {
                const total = c.aciertos + c.fallos
                const acc = total > 0 ? Math.round((c.aciertos / total) * 100) : null
                const colorCaja =
                  c.caja === 0
                    ? "bg-zinc-300 dark:bg-zinc-700"
                    : c.caja >= CAJA_DOMINADA
                      ? "bg-emerald-500"
                      : "bg-amber-400"
                const previewBack = (
                  c.back ||
                  (c.tipo === "opciones"
                    ? (c.opciones.find((o) => o.correcta)?.texto ?? "")
                    : "")
                ).slice(0, 200)
                return (
                  <div
                    key={c.id}
                    className="group glass rounded-2xl p-4 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          {c.tag && (
                            <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
                              {c.tag}
                            </span>
                          )}
                          {c.tipo === "opciones" && (
                            <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                              Opciones
                            </span>
                          )}
                        </div>
                        <p className="mb-1.5 font-serif text-base leading-snug text-zinc-800 dark:text-zinc-100">
                          {c.front}
                        </p>
                        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {previewBack}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className={cn("h-1.5 w-1.5 rounded-full", colorCaja)} />
                          <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                            Caja {c.caja}
                          </span>
                        </div>
                        {total > 0 ? (
                          <span className="text-[11px] tabular-nums text-zinc-500 dark:text-zinc-400">
                            {c.aciertos}/{total} · {acc}%
                          </span>
                        ) : (
                          <span className="text-[11px] text-zinc-400 dark:text-zinc-600">
                            sin uso
                          </span>
                        )}
                        <button
                          onClick={() => setParaBorrar(c)}
                          className="-m-1 p-1 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-500 dark:text-zinc-700 dark:hover:text-red-400"
                          title="Borrar"
                          aria-label="Borrar carta"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>

      {paraBorrar && (
        <ModalConfirmar
          mensaje={`Borrar carta:\n"${paraBorrar.front.length > 60 ? paraBorrar.front.slice(0, 60) + "..." : paraBorrar.front}"`}
          onConfirmar={confirmarBorrar}
          onCancelar={() => setParaBorrar(null)}
        />
      )}
    </div>
  )
}
