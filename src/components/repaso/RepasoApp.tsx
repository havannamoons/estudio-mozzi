"use client"

import { useEffect } from "react"
import { ToastProvider } from "@/lib/hooks/useToast"
import { useRepaso } from "@/lib/hooks/useRepaso"
import { BlobsBackground } from "./BlobsBackground"
import { Header } from "./Header"
import { StatsBar } from "./StatsBar"
import { NavTabs } from "./NavTabs"
import { ToastViewport } from "./Toast"
import { VistaRepasar } from "./vistas/VistaRepasar"
import { VistaReforzar } from "./vistas/VistaReforzar"
import { VistaAgregar } from "./vistas/VistaAgregar"
import { VistaTodas } from "./vistas/VistaTodas"
import { VistaImportar } from "./vistas/VistaImportar"

export function RepasoApp() {
  return (
    <ToastProvider>
      <RepasoAppInner />
      <ToastViewport />
    </ToastProvider>
  )
}

function RepasoAppInner() {
  const api = useRepaso()
  const {
    hidratado,
    vista,
    setVista,
    cartas,
    stats,
    cartaActual,
    opcionesActuales,
    opcionElegida,
    viendoHistorialIdx,
    historialSesion,
    modoReforzar,
    faseReforzar,
    responder,
    avanzarCarta,
    pasarAProbar,
    verHistorial,
    salirHistorial,
  } = api

  // === Keyboard shortcuts (solo en vista repasar) ===
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
      if (vista !== "repasar") return
      if (!cartaActual) return

      // Viendo historial
      if (viendoHistorialIdx !== null) {
        if (e.key === "ArrowLeft" && viendoHistorialIdx > 0) {
          e.preventDefault()
          verHistorial(viendoHistorialIdx - 1)
        } else if (
          e.key === "ArrowRight" &&
          viendoHistorialIdx < historialSesion.length - 1
        ) {
          e.preventDefault()
          verHistorial(viendoHistorialIdx + 1)
        } else if (e.key === "Escape" || e.key === "Enter") {
          e.preventDefault()
          salirHistorial()
        }
        return
      }

      // Atajo: flecha izquierda → última carta del historial
      if (
        e.key === "ArrowLeft" &&
        historialSesion.length > 0 &&
        opcionElegida === null
      ) {
        e.preventDefault()
        verHistorial(historialSesion.length - 1)
        return
      }

      // Refuerzo fase estudiar: Enter/Space pasa a probar
      if (modoReforzar && faseReforzar === "estudiar") {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          pasarAProbar()
        }
        return
      }

      // Fase probar
      if (opcionElegida === null) {
        const n = parseInt(e.key, 10)
        const ops = opcionesActuales ?? []
        if (n >= 1 && n <= ops.length) {
          e.preventDefault()
          responder(n - 1)
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        avanzarCarta()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [
    vista,
    cartaActual,
    viendoHistorialIdx,
    historialSesion.length,
    opcionElegida,
    opcionesActuales,
    modoReforzar,
    faseReforzar,
    responder,
    avanzarCarta,
    pasarAProbar,
    verHistorial,
    salirHistorial,
  ])

  if (!hidratado) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-6">
        <div className="glass-strong rounded-3xl p-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Cargando…
        </div>
      </main>
    )
  }

  return (
    <>
      <BlobsBackground />
      <main className="mx-auto max-w-3xl px-4 py-6 sm:py-8">
        <Header />
        <StatsBar cartas={cartas} stats={stats} />
        <NavTabs vista={vista} setVista={setVista} />

        {vista === "repasar" && <VistaRepasar api={api} />}
        {vista === "reforzar" && <VistaReforzar api={api} />}
        {vista === "agregar" && <VistaAgregar api={api} />}
        {vista === "todas" && <VistaTodas api={api} />}
        {vista === "importar" && <VistaImportar api={api} />}

        <footer className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-500">
          <span className="hidden sm:inline">
            Atajos: <span className="kbd">1</span>–<span className="kbd">4</span> elegir
            opción · <span className="kbd">Enter</span> continuar
          </span>
        </footer>
      </main>
    </>
  )
}
