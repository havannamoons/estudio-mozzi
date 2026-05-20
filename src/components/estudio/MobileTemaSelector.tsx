"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"
import { TEMAS } from "@/lib/data/temas"

interface Props {
  api: EstudioApi
}

export function MobileTemaSelector({ api }: Props) {
  const { temaActivoId, seleccionarTema, progresoTema } = api
  return (
    <div className="glass rounded-2xl p-3 lg:hidden">
      <label
        htmlFor="tema-mobile"
        className="mb-1.5 block px-1 text-[10px] font-medium tracking-wider text-zinc-500 uppercase"
      >
        Tema actual
      </label>
      <select
        id="tema-mobile"
        value={temaActivoId}
        onChange={(e) => seleccionarTema(e.target.value)}
        // 16px de font-size evita el zoom automático de iOS Safari al hacer focus.
        className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-3 text-base text-zinc-100 focus:border-emerald-500 focus:outline-none"
        style={{ fontSize: "16px" }}
      >
        {TEMAS.map((t) => {
          const prog = progresoTema(t.id)
          const score = prog.hechas > 0 ? ` · ${prog.correctas}/${prog.total}` : ""
          return (
            <option key={t.id} value={t.id}>
              {t.practico} · {t.titulo}
              {score}
            </option>
          )
        })}
      </select>
    </div>
  )
}
