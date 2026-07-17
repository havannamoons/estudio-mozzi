"use client"

import { useCallback, useEffect, useState } from "react"
import {
  Check,
  Clock,
  LogOut,
  RefreshCw,
  ShieldCheck,
  ShieldX,
  Users,
} from "lucide-react"
import { useAuth } from "@/lib/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { ADMIN_EMAIL } from "@/lib/constants"
import { BlobsBackground } from "./BlobsBackground"

interface Perfil {
  id: string
  email: string | null
  habilitado: boolean
  creado_en: string
}

function fechaCorta(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

export function AdminPanel() {
  const auth = useAuth()
  const esAdmin = auth.email === ADMIN_EMAIL

  const [perfiles, setPerfiles] = useState<Perfil[] | null>(null)
  const [cargandoLista, setCargandoLista] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [accionando, setAccionando] = useState<string | null>(null)

  const cargar = useCallback(async () => {
    setCargandoLista(true)
    setError(null)
    const { data, error } = await supabase
      .from("perfiles")
      .select("id, email, habilitado, creado_en")
      .order("creado_en", { ascending: false })
    if (error) setError(error.message)
    else setPerfiles((data ?? []) as Perfil[])
    setCargandoLista(false)
  }, [])

  useEffect(() => {
    if (esAdmin) void cargar()
  }, [esAdmin, cargar])

  const cambiarAcceso = async (id: string, habilitado: boolean) => {
    setAccionando(id)
    setError(null)
    const { error } = await supabase
      .from("perfiles")
      .update({ habilitado })
      .eq("id", id)
    if (error) setError(error.message)
    else {
      setPerfiles((prev) =>
        prev ? prev.map((p) => (p.id === id ? { ...p, habilitado } : p)) : prev,
      )
    }
    setAccionando(null)
  }

  // ---- Estados de carga / acceso ----
  if (auth.cargando) {
    return <Contenedor><Aviso>Cargando…</Aviso></Contenedor>
  }

  if (!auth.session) {
    return (
      <Contenedor>
        <div className="glass-strong animate-scale-in rounded-3xl p-6 text-center sm:p-8">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Panel de vendedora
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Ingresá con tu cuenta para activar compradoras.
          </p>
          <button
            onClick={auth.loginConGoogle}
            className="btn-press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:from-emerald-400 hover:to-emerald-500"
          >
            Continuar con Google
          </button>
        </div>
      </Contenedor>
    )
  }

  if (!esAdmin) {
    return (
      <Contenedor>
        <div className="glass-strong animate-scale-in rounded-3xl p-6 text-center sm:p-8">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/12 text-red-600 dark:text-red-400">
            <ShieldX className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            No autorizada
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Esta sección es solo para la administradora. Iniciaste sesión como{" "}
            <strong className="text-zinc-800 dark:text-zinc-100">{auth.email}</strong>.
          </p>
          <button
            onClick={auth.cerrarSesion}
            className="btn-press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </div>
      </Contenedor>
    )
  }

  // ---- Panel admin ----
  const pendientes = (perfiles ?? []).filter((p) => !p.habilitado)
  const activadas = (perfiles ?? []).filter((p) => p.habilitado)

  return (
    <Contenedor ancho>
      {/* Header */}
      <div className="glass-strong mb-4 flex items-center justify-between gap-3 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Panel de aprobaciones
            </h1>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {pendientes.length} esperando · {activadas.length} activas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={cargar}
            disabled={cargandoLista}
            className="btn-press glass inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-white/10 disabled:opacity-40 dark:text-zinc-300"
            aria-label="Actualizar"
          >
            <RefreshCw className={cargandoLista ? "h-3.5 w-3.5 animate-spin" : "h-3.5 w-3.5"} />
            <span className="hidden sm:inline">Actualizar</span>
          </button>
          <button
            onClick={auth.cerrarSesion}
            className="btn-press glass inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-white/10 dark:text-zinc-300"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border-l-4 border-l-red-500/60 bg-red-500/5 px-4 py-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Pendientes */}
      <section className="glass-strong mb-4 rounded-2xl p-4 sm:p-5">
        <h2 className="mb-3 flex items-center gap-2 font-serif text-base font-semibold text-zinc-900 dark:text-zinc-50">
          <Clock className="h-4 w-4 text-emerald-500" /> Esperando aprobación
        </h2>
        {perfiles === null ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Cargando lista…</p>
        ) : pendientes.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No hay nadie esperando. 🎉
          </p>
        ) : (
          <ul className="space-y-2">
            {pendientes.map((p) => (
              <li
                key={p.id}
                className="glass flex items-center justify-between gap-3 rounded-xl p-3"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100">
                    {p.email ?? "(sin email)"}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Se registró el {fechaCorta(p.creado_en)}
                  </div>
                </div>
                <button
                  onClick={() => cambiarAcceso(p.id, true)}
                  disabled={accionando === p.id}
                  className="btn-press inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition-all hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-50"
                >
                  <Check className="h-4 w-4" />
                  {accionando === p.id ? "Activando…" : "Activar"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Activadas */}
      <section className="glass-strong rounded-2xl p-4 sm:p-5">
        <h2 className="mb-3 flex items-center gap-2 font-serif text-base font-semibold text-zinc-900 dark:text-zinc-50">
          <ShieldCheck className="h-4 w-4 text-emerald-500" /> Activadas
        </h2>
        {activadas.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Todavía ninguna.</p>
        ) : (
          <ul className="space-y-2">
            {activadas.map((p) => (
              <li
                key={p.id}
                className="glass flex items-center justify-between gap-3 rounded-xl p-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-100">
                      {p.email ?? "(sin email)"}
                    </span>
                    {p.email === ADMIN_EMAIL && (
                      <span className="shrink-0 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-300">
                        vos
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Activa
                  </div>
                </div>
                {p.email !== ADMIN_EMAIL && (
                  <button
                    onClick={() => cambiarAcceso(p.id, false)}
                    disabled={accionando === p.id}
                    className="btn-press inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-500 hover:text-red-600 disabled:opacity-50 dark:text-zinc-400 dark:hover:text-red-400"
                  >
                    {accionando === p.id ? "…" : "Quitar acceso"}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Contenedor>
  )
}

function Contenedor({
  children,
  ancho,
}: {
  children: React.ReactNode
  ancho?: boolean
}) {
  return (
    <>
      <BlobsBackground />
      <main
        className={
          ancho
            ? "mx-auto max-w-2xl px-4 py-6 sm:py-8"
            : "mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-8"
        }
      >
        {children}
      </main>
    </>
  )
}

function Aviso({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-strong rounded-3xl p-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      {children}
    </div>
  )
}
