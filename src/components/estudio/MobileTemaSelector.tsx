"use client"

import type { EstudioApi } from "@/lib/hooks/useEstudio"

interface Props {
  api: EstudioApi
  /** Temas todavía sin desbloquear. En el desplegable no se pueden dibujar
      íconos, así que van con un candado de texto delante del nombre. */
  bloqueados?: Set<string>
}

export function MobileTemaSelector({ api, bloqueados }: Props) {
  const { temaActivoId, seleccionarTema, progresoTema } = api
  const TEMAS = api.contenido.temas
  return (
    <div className="mb-5 lg:hidden">
      <label
        htmlFor="tema-mobile"
        className="mb-2 block text-[11px] font-extrabold tracking-[0.14em] text-[var(--lila)] uppercase"
      >
        Tema actual
      </label>
      <select
        id="tema-mobile"
        value={temaActivoId}
        onChange={(e) => seleccionarTema(e.target.value)}
        // 16px de font-size evita el zoom automático de iOS Safari al hacer focus.
        className="selector-tema"
        style={{ fontSize: "16px" }}
      >
        {TEMAS.map((t) => {
          const cerrado = bloqueados?.has(t.id) ?? false
          const prog = progresoTema(t.id)
          const score =
            !cerrado && prog.hechas > 0
              ? ` · ${prog.correctas}/${prog.total}`
              : ""
          return (
            <option key={t.id} value={t.id}>
              {cerrado ? "🔒 " : ""}
              {t.practico} · {t.titulo}
              {score}
            </option>
          )
        })}
      </select>
    </div>
  )
}
