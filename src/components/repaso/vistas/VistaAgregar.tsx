"use client"

import { useState } from "react"
import type { RepasoApi } from "@/lib/hooks/useRepaso"
import { useToast } from "@/lib/hooks/useToast"
import type { Opcion, TipoCarta } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  api: RepasoApi
}

export function VistaAgregar({ api }: Props) {
  const { cartas, agregarCarta } = api
  const { push: toast } = useToast()

  const [tipo, setTipo] = useState<TipoCarta>("abierta")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")
  const [tag, setTag] = useState("")
  const [opciones, setOpciones] = useState<{ texto: string; correcta: boolean }[]>([
    { texto: "", correcta: false },
    { texto: "", correcta: false },
    { texto: "", correcta: false },
    { texto: "", correcta: false },
  ])

  const tags = Array.from(new Set(cartas.map((c) => c.tag).filter(Boolean))).sort()
  const esMC = tipo === "opciones"

  const reset = () => {
    setFront("")
    setBack("")
    setOpciones([
      { texto: "", correcta: false },
      { texto: "", correcta: false },
      { texto: "", correcta: false },
      { texto: "", correcta: false },
    ])
  }

  const submit = () => {
    if (!front.trim()) {
      toast("Falta la pregunta", "error")
      return
    }
    if (esMC) {
      const opciones2: Opcion[] = opciones
        .map((o) => ({ texto: o.texto.trim(), correcta: o.correcta }))
        .filter((o) => o.texto)
      if (opciones2.length < 2) {
        toast("Necesitás al menos 2 opciones", "error")
        return
      }
      if (!opciones2.some((o) => o.correcta)) {
        toast("Marcá al menos una opción como correcta", "error")
        return
      }
      agregarCarta({
        front: front.trim(),
        back: back.trim(),
        tipo: "opciones",
        opciones: opciones2,
        tag: tag.trim(),
      })
    } else {
      if (!back.trim()) {
        toast("Falta la respuesta", "error")
        return
      }
      agregarCarta({
        front: front.trim(),
        back: back.trim(),
        tag: tag.trim(),
      })
    }
    toast("Carta agregada")
    reset()
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div
      className="glass-strong animate-slide-up rounded-3xl p-6 sm:p-8"
      onKeyDown={onKey}
    >
      <h2 className="mb-1 text-lg font-medium text-zinc-800 dark:text-zinc-100">
        Nueva carta
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Una pregunta y su respuesta. Al estudiar la verás como opción múltiple (los
        distractores se generan con respuestas de otras cartas).
      </p>

      <div className="glass-subtle mb-6 inline-flex rounded-xl p-1">
        {(["abierta", "opciones"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTipo(t)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
              tipo === t
                ? "bg-white/10 text-zinc-900 dark:text-zinc-50"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            )}
          >
            {t === "abierta" ? "Abierta (auto-MC)" : "Opciones manuales"}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
            Pregunta
          </label>
          <textarea
            value={front}
            onChange={(e) => setFront(e.target.value)}
            rows={2}
            placeholder="¿Qué es la disonancia cognitiva?"
            className="glass-input w-full resize-none rounded-xl px-4 py-3 font-serif text-base text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
          />
        </div>

        {esMC ? (
          <>
            <div>
              <label className="mb-1.5 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                Opciones{" "}
                <span className="text-zinc-400 normal-case dark:text-zinc-500">
                  — marcá la correcta
                </span>
              </label>
              <div className="space-y-2">
                {opciones.map((op, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={op.correcta}
                      onChange={(e) =>
                        setOpciones((prev) =>
                          prev.map((o, j) =>
                            j === i ? { ...o, correcta: e.target.checked } : o,
                          ),
                        )
                      }
                      className="h-4 w-4 shrink-0 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 dark:border-zinc-600"
                    />
                    <input
                      type="text"
                      value={op.texto}
                      onChange={(e) =>
                        setOpciones((prev) =>
                          prev.map((o, j) =>
                            j === i ? { ...o, texto: e.target.value } : o,
                          ),
                        )
                      }
                      placeholder={`Opción ${i + 1}${i < 2 ? " (requerida)" : " (opcional)"}`}
                      className="glass-input flex-1 rounded-xl px-3 py-2.5 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                Explicación{" "}
                <span className="text-zinc-400 normal-case dark:text-zinc-500">
                  (opcional)
                </span>
              </label>
              <textarea
                value={back}
                onChange={(e) => setBack(e.target.value)}
                rows={3}
                placeholder="Por qué la respuesta correcta es la correcta..."
                className="glass-input w-full resize-none rounded-xl px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
              />
            </div>
          </>
        ) : (
          <div>
            <label className="mb-1.5 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
              Respuesta
            </label>
            <textarea
              value={back}
              onChange={(e) => setBack(e.target.value)}
              rows={5}
              placeholder="Estado de tensión psicológica..."
              className="glass-input w-full resize-none rounded-xl px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
            />
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-[11px] font-medium tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
            Etiqueta (opcional)
          </label>
          <input
            list="tag-list"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Ej: Freud, Cognitiva, Estadística..."
            className="glass-input w-full rounded-xl px-4 py-3 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 dark:text-zinc-100"
          />
          <datalist id="tag-list">
            {tags.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={submit}
          className="btn-press rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg"
        >
          Agregar carta
        </button>
        <span className="hidden text-xs text-zinc-400 sm:inline dark:text-zinc-500">
          <span className="kbd">Ctrl</span> + <span className="kbd">Enter</span>
        </span>
      </div>
    </div>
  )
}
