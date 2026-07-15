"use client"

import { ToastProvider, useToast } from "@/lib/hooks/useToast"
import { ACCESO_ABIERTO } from "@/lib/constants"
import { useEstudio } from "@/lib/hooks/useEstudio"
import { useAuth } from "@/lib/hooks/useAuth"
import { BlobsBackground } from "./BlobsBackground"
import { Header } from "./Header"
import { ModoSelector } from "./ModoSelector"
import { Sidebar } from "./Sidebar"
import { MobileTemaSelector } from "./MobileTemaSelector"
import { ContenidoTema } from "./ContenidoTema"
import { SimulacroMode } from "./SimulacroMode"
import { MatchMode } from "./MatchMode"
import { ClozeMode } from "./ClozeMode"
import { ToastViewport } from "./Toast"
import { Welcome } from "./Welcome"
import { LoginGate } from "./LoginGate"
import { PendienteAprobacion } from "./PendienteAprobacion"

export function EstudioApp() {
  return (
    <ToastProvider>
      <EstudioAppInner />
      <ToastViewport />
    </ToastProvider>
  )
}

function Cargando() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <div className="glass-strong rounded-3xl p-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Cargando…
      </div>
    </main>
  )
}

function EstudioAppInner() {
  const auth = useAuth()
  const api = useEstudio()
  const { push: toast } = useToast()

  // === Gate de acceso (login con Google + aprobación) ===
  // Se saltea por completo cuando ACCESO_ABIERTO = true (app gratis para todos).
  if (!ACCESO_ABIERTO) {
    // 1. Resolviendo sesión de Supabase.
    if (auth.cargando) {
      return <Cargando />
    }
    // 2. Sin sesión → login con Google.
    if (!auth.session) {
      return (
        <>
          <BlobsBackground />
          <LoginGate auth={auth} />
        </>
      )
    }
    // 3. Logueada pero todavía chequeando si está habilitada.
    if (auth.habilitado === null) {
      return <Cargando />
    }
    // 4. Logueada pero acceso no habilitado (aún no confirmada la compra).
    if (!auth.habilitado) {
      return (
        <>
          <BlobsBackground />
          <PendienteAprobacion auth={auth} />
        </>
      )
    }
  }

  // Hidratando localStorage (progreso, etc.).
  if (!api.hidratado) {
    return <Cargando />
  }

  // Primera visita → bienvenida.
  if (api.verBienvenida) {
    return (
      <>
        <BlobsBackground />
        <Welcome onEmpezar={api.cerrarBienvenida} />
      </>
    )
  }

  const handleReset = () => {
    if (Object.keys(api.progreso).length === 0) {
      toast("No hay progreso para resetear")
      return
    }
    if (
      !window.confirm(
        "¿Reiniciar todo el progreso del quiz? Esto borra tus respuestas guardadas.",
      )
    )
      return
    api.resetearProgreso()
    toast("Progreso reiniciado")
  }

  return (
    <>
      <BlobsBackground />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <Header onReset={api.modo === "estudio" ? handleReset : undefined} />
        <ModoSelector modo={api.modo} onChange={api.cambiarModo} />

        {api.modo === "estudio" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
            {/* En mobile: dropdown nativo arriba (compacto, accesible).
                En desktop (lg+): sidebar completo a la izquierda. */}
            <MobileTemaSelector api={api} />
            <div className="hidden lg:block">
              <Sidebar api={api} />
            </div>
            <section className="min-w-0">
              <ContenidoTema api={api} />
            </section>
          </div>
        )}
        {api.modo === "match" && <MatchMode />}
        {api.modo === "cloze" && <ClozeMode />}
        {api.modo === "simulacro" && <SimulacroMode api={api} />}
      </main>
    </>
  )
}
