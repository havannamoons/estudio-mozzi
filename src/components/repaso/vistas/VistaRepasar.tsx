"use client"

import { Sparkles } from "lucide-react"
import type { RepasoApi } from "@/lib/hooks/useRepaso"
import { CartaQuiz } from "../CartaQuiz"
import { FaseEstudiar } from "../FaseEstudiar"
import { HistorialCarta } from "../HistorialCarta"

interface Props {
  api: RepasoApi
}

export function VistaRepasar({ api }: Props) {
  const {
    cartas,
    cartaActual,
    opcionesActuales,
    opcionElegida,
    modoReforzar,
    faseReforzar,
    stats,
    totalSesion,
    historialSesion,
    viendoHistorialIdx,
    responder,
    pasarAProbar,
    verHistorial,
    salirHistorial,
    setVista,
    salirReforzar,
  } = api

  // Estado vacío
  if (cartas.length === 0) {
    return (
      <div className="glass-strong animate-scale-in rounded-3xl p-10 text-center sm:p-14">
        <div className="glass-subtle mb-5 inline-flex rounded-2xl p-3">
          <Sparkles className="h-7 w-7 text-zinc-400 dark:text-zinc-500" />
        </div>
        <h2 className="mb-2 text-lg font-medium text-zinc-800 dark:text-zinc-100">
          Empezá agregando cartas
        </h2>
        <p className="mx-auto mb-6 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
          Creá tu primera carta o cargá el pack de Freud.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setVista("agregar")}
            className="btn-press rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg"
          >
            Crear carta
          </button>
          <button
            onClick={() => setVista("importar")}
            className="glass btn-press rounded-xl px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
          >
            Importar pack
          </button>
        </div>
      </div>
    )
  }

  if (!cartaActual || !opcionesActuales) return null

  // Viendo historial
  if (viendoHistorialIdx !== null) {
    const item = historialSesion[viendoHistorialIdx]
    if (!item) {
      salirHistorial()
      return null
    }
    const cartaHist = cartas.find((c) => c.id === item.cartaId)
    if (!cartaHist) {
      salirHistorial()
      return null
    }
    return (
      <HistorialCarta
        item={item}
        carta={cartaHist}
        idx={viendoHistorialIdx}
        total={historialSesion.length}
        onPrev={() => verHistorial(viendoHistorialIdx - 1)}
        onNext={() => verHistorial(viendoHistorialIdx + 1)}
        onVolver={salirHistorial}
      />
    )
  }

  // Refuerzo: fase estudiar
  if (modoReforzar && faseReforzar === "estudiar") {
    return (
      <>
        <BannerReforzar onSalir={salirReforzar} />
        <FaseEstudiar carta={cartaActual} onProbarme={pasarAProbar} />
      </>
    )
  }

  return (
    <>
      {modoReforzar && <BannerReforzar onSalir={salirReforzar} />}
      <CartaQuiz
        carta={cartaActual}
        opciones={opcionesActuales}
        opcionElegida={opcionElegida}
        modoReforzar={modoReforzar}
        stats={stats}
        totalSesion={totalSesion}
        historialLen={historialSesion.length}
        onResponder={responder}
        onAbrirHistorial={verHistorial}
      />
    </>
  )
}

function BannerReforzar({ onSalir }: { onSalir: () => void }) {
  return (
    <div className="glass-subtle mb-4 flex items-center justify-between rounded-2xl border-l-4 border-l-orange-500/60 px-4 py-2.5">
      <div className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-300">
        <span className="font-medium">Sesión de refuerzo</span>
        <span className="hidden text-xs text-orange-600/70 sm:inline dark:text-orange-400/70">
          — no afecta el calendario
        </span>
      </div>
      <button
        onClick={onSalir}
        className="text-xs text-orange-700 hover:underline dark:text-orange-400"
      >
        Salir
      </button>
    </div>
  )
}
