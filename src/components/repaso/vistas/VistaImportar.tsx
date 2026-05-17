"use client"

import { useState } from "react"
import { Download, Upload } from "lucide-react"
import type { RepasoApi } from "@/lib/hooks/useRepaso"
import type { CartaInput } from "@/lib/types"
import { PACK_FREUD } from "@/lib/constants"
import { useToast } from "@/lib/hooks/useToast"

interface Props {
  api: RepasoApi
}

export function VistaImportar({ api }: Props) {
  const { cartas, importarCartas, setVista } = api
  const { push: toast } = useToast()
  const [json, setJson] = useState(() => JSON.stringify(PACK_FREUD, null, 2))

  const cargarPack = () => {
    setJson(JSON.stringify(PACK_FREUD, null, 2))
    toast("Pack Freud cargado en el editor")
  }

  const exportar = () => {
    const exp = cartas.map((c) => {
      const o: Record<string, unknown> = { tag: c.tag, front: c.front, back: c.back }
      if (c.tipo === "opciones") {
        o.tipo = "opciones"
        o.opciones = c.opciones
      }
      return o
    })
    setJson(JSON.stringify(exp, null, 2))
    toast(`${exp.length} carta(s) exportada(s)`)
  }

  const importar = () => {
    let nuevas: CartaInput[]
    try {
      nuevas = JSON.parse(json) as CartaInput[]
    } catch (e) {
      toast("JSON inválido: " + (e as Error).message, "error")
      return
    }
    if (!Array.isArray(nuevas)) {
      toast("El JSON debe ser un array", "error")
      return
    }
    const existentes = new Set(cartas.map((c) => c.front))
    const filtradas = nuevas.filter(
      (c) =>
        typeof c.front === "string" &&
        c.front.trim() &&
        !existentes.has(c.front.trim()),
    )
    const salteadas = nuevas.length - filtradas.length
    importarCartas(filtradas)
    let msg = `${filtradas.length} carta(s) agregada(s)`
    if (salteadas > 0) msg += ` · ${salteadas} ya existían`
    toast(msg)
    setVista("todas")
  }

  return (
    <div className="glass-strong animate-slide-up rounded-3xl p-6 sm:p-8">
      <h2 className="mb-1 text-lg font-medium text-zinc-800 dark:text-zinc-100">
        Importar / exportar
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Formato:{" "}
        <code className="glass-subtle rounded px-1.5 py-0.5 text-[11px]">
          {`[{"front","back","tag","tipo","opciones"}]`}
        </code>
        . Pre-cargado: pack Freud.
      </p>

      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        rows={14}
        className="glass-input w-full rounded-xl px-4 py-3 font-mono text-[11px] leading-relaxed text-zinc-800 outline-none transition-all dark:text-zinc-100"
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={importar}
          className="btn-press inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg"
        >
          <Download className="h-4 w-4" /> Importar
        </button>
        <button
          onClick={cargarPack}
          className="glass btn-press rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Cargar pack Freud
        </button>
        <button
          onClick={exportar}
          className="glass btn-press ml-auto inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          <Upload className="h-4 w-4" /> Exportar todas
        </button>
      </div>
    </div>
  )
}
