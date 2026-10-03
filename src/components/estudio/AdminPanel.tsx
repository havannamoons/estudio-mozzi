"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Clock, LogOut, Moon, RefreshCw, Wallet } from "lucide-react"
import { useAuth } from "@/lib/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { ADMIN_EMAIL } from "@/lib/constants"

/**
 * EL PANEL DE RO.
 *
 * Es la única pantalla de la app que no ve nadie más que ella, y aun así
 * está con la marca puesta: abrirla veinte veces por día en medio de una
 * venta y encontrarse con algo que parece de otra app cansa.
 *
 * Todo cuelga de `.lunar`, que es donde viven las variables de color de la
 * marca (--lila, --crema, --noche…). Si algo queda afuera de ese div, sus
 * colores no resuelven y se dibuja transparente.
 */

interface Perfil {
  id: string
  email: string | null
  habilitado: boolean
  creado_en: string
}

/**
 * Una compra confirmada por Mercado Pago. La escribe el webhook, nunca el
 * navegador. Es lo único que dice de verdad QUIÉN pagó: la lista de
 * "esperando" mezcla compradoras con gente que solo creó la cuenta.
 */
interface Venta {
  id: string
  email: string | null
  monto: number | null
  metodo: string | null
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

function plata(n: number | null): string {
  if (n === null || n === undefined) return "—"
  return "$" + new Intl.NumberFormat("es-AR").format(n)
}

export function AdminPanel() {
  const auth = useAuth()
  const esAdmin = auth.email === ADMIN_EMAIL

  const [perfiles, setPerfiles] = useState<Perfil[] | null>(null)
  const [ventas, setVentas] = useState<Venta[] | null>(null)
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

    /* Las ventas se piden aparte y su error no se muestra arriba: si la tabla
       todavía no existe (falta correr sql/ventas.sql), el panel tiene que
       seguir funcionando igual para dar acceso a mano. */
    const { data: v, error: errorVentas } = await supabase
      .from("ventas")
      .select("id, email, monto, metodo, creado_en")
      .order("creado_en", { ascending: false })
      .limit(50)
    setVentas(errorVentas ? null : ((v ?? []) as Venta[]))

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

  // ---- Mientras resuelve la sesión ----
  if (auth.cargando) {
    return (
      <Hoja>
        <Tarjeta centrada>
          <Luna />
          <p className="text-[15px] font-medium text-[var(--noche)]/55">
            Un segundo…
          </p>
        </Tarjeta>
      </Hoja>
    )
  }

  // ---- Sin sesión ----
  if (!auth.session) {
    return (
      <Hoja>
        <Tarjeta centrada>
          <Luna />
          <h1 className="mb-2 font-serif text-[26px] leading-tight font-semibold text-[var(--noche)]">
            Tu panel
          </h1>
          <p className="mb-7 text-[15px] leading-relaxed font-medium text-[var(--noche)]/60">
            Entrá con tu cuenta para ver quién compró y darles acceso.
          </p>
          <button
            onClick={auth.loginConGoogle}
            className="btn-lunar btn-noche w-full !py-4"
          >
            Continuar con Google
          </button>
        </Tarjeta>
      </Hoja>
    )
  }

  // ---- Entró con otra cuenta ----
  if (!esAdmin) {
    return (
      <Hoja>
        <Tarjeta centrada>
          <Luna />
          <h1 className="mb-2 font-serif text-[26px] leading-tight font-semibold text-[var(--noche)]">
            Esta no es tu cuenta
          </h1>
          <p className="mb-2 text-[15px] leading-relaxed font-medium text-[var(--noche)]/60">
            Entraste como{" "}
            <strong className="font-bold text-[var(--noche)]">{auth.email}</strong>
            , y el panel es de{" "}
            <strong className="font-bold text-[var(--noche)]">{ADMIN_EMAIL}</strong>.
          </p>
          <p className="mb-7 text-[13.5px] leading-relaxed font-medium text-[var(--noche)]/45">
            Salí y volvé a entrar eligiendo esa cuenta. Si Chrome entra solo con
            otra, tocá «Usar otra cuenta» en la pantalla de Google.
          </p>
          <button
            onClick={auth.cerrarSesion}
            className="btn-lunar btn-suave w-full !py-3"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </Tarjeta>
      </Hoja>
    )
  }

  // ---- El panel ----
  const pendientes = (perfiles ?? []).filter((p) => !p.habilitado)
  const conAcceso = (perfiles ?? []).filter((p) => p.habilitado)

  return (
    <Hoja ancho>
      {/* Encabezado */}
      <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-white/55 p-4 backdrop-blur sm:p-5">
        <div className="flex items-center gap-3">
          <div
            className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl"
            style={{
              background:
                "radial-gradient(circle at 33% 30%, var(--lila-claro), var(--lila))",
            }}
          >
            <Moon className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="font-serif text-[19px] leading-tight font-semibold text-[var(--noche)]">
              Tu panel
            </h1>
            <p className="text-[12px] font-medium text-[var(--noche)]/45">
              {ventas && ventas.length > 0
                ? `${ventas.length} ${ventas.length === 1 ? "compra" : "compras"} · `
                : ""}
              {pendientes.length} esperando · {conAcceso.length} con acceso
            </p>
          </div>
        </div>
        <div className="flex flex-none items-center gap-1.5">
          <button
            onClick={cargar}
            disabled={cargandoLista}
            className="btn-lunar btn-fantasma !px-3 !py-2 text-[13px] disabled:opacity-40"
            aria-label="Actualizar"
          >
            <RefreshCw
              className={cargandoLista ? "h-4 w-4 animate-spin" : "h-4 w-4"}
            />
            <span className="hidden sm:inline">Actualizar</span>
          </button>
          <button
            onClick={auth.cerrarSesion}
            className="btn-lunar btn-fantasma !px-3 !py-2 text-[13px]"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>

      {error && (
        <div
          className="mb-4 rounded-2xl px-4 py-3 text-[14px] font-medium"
          style={{
            background: "color-mix(in srgb, #ef6f8b 12%, transparent)",
            color: "#9c2c46",
          }}
        >
          {error}
        </div>
      )}

      {/* Compras: primero, porque es lo único que hay que mirar de verdad */}
      <Seccion icono={<Wallet className="h-4 w-4" />} titulo="Compras cobradas">
        {ventas === null ? (
          <Vacio>
            Todavía no está creada la tabla de ventas. Pegá el contenido de{" "}
            <code className="rounded bg-[var(--lila-palido)] px-1.5 py-0.5 text-[12.5px] font-semibold text-[var(--lila)]">
              sql/ventas.sql
            </code>{" "}
            en Supabase y actualizá esta página.
          </Vacio>
        ) : ventas.length === 0 ? (
          <Vacio>
            Todavía no entró ninguna compra por la app. Las que cobres por
            transferencia no caen acá: a esas les das acceso vos, abajo.
          </Vacio>
        ) : (
          <ul className="space-y-2">
            {ventas.map((v) => (
              <Fila key={v.id}>
                <div className="min-w-0">
                  <div className="truncate text-[15px] font-semibold text-[var(--noche)]">
                    {v.email ?? "(sin mail)"}
                  </div>
                  <div className="text-[12px] font-medium text-[var(--noche)]/45">
                    {fechaCorta(v.creado_en)}
                    {v.metodo ? ` · ${v.metodo}` : ""}
                  </div>
                </div>
                <div className="flex-none text-right">
                  <div className="text-[15px] font-extrabold text-[var(--lila)]">
                    {plata(v.monto)}
                  </div>
                  <div className="text-[12px] font-medium text-[var(--noche)]/45">
                    ya entró
                  </div>
                </div>
              </Fila>
            ))}
          </ul>
        )}
      </Seccion>

      {/* Esperando */}
      <Seccion
        icono={<Clock className="h-4 w-4" />}
        titulo="Esperando que les des acceso"
      >
        {perfiles === null ? (
          <Vacio>Buscando…</Vacio>
        ) : pendientes.length === 0 ? (
          <Vacio>No hay nadie esperando. 🌙</Vacio>
        ) : (
          <ul className="space-y-2">
            {pendientes.map((p) => (
              <Fila key={p.id}>
                <div className="min-w-0">
                  <div className="truncate text-[15px] font-semibold text-[var(--noche)]">
                    {p.email ?? "(sin mail)"}
                  </div>
                  <div className="text-[12px] font-medium text-[var(--noche)]/45">
                    Se hizo la cuenta el {fechaCorta(p.creado_en)}
                  </div>
                </div>
                <button
                  onClick={() => cambiarAcceso(p.id, true)}
                  disabled={accionando === p.id}
                  className="btn-lunar btn-noche flex-none !px-4 !py-2.5 text-[14px] disabled:opacity-50"
                >
                  <Check className="h-4 w-4" />
                  {accionando === p.id ? "Dándole…" : "Darle acceso"}
                </button>
              </Fila>
            ))}
          </ul>
        )}
      </Seccion>

      {/* Con acceso */}
      <Seccion icono={<Moon className="h-4 w-4" />} titulo="Ya tienen acceso">
        {conAcceso.length === 0 ? (
          <Vacio>Todavía ninguna.</Vacio>
        ) : (
          <ul className="space-y-2">
            {conAcceso.map((p) => (
              <Fila key={p.id}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-[15px] font-semibold text-[var(--noche)]">
                      {p.email ?? "(sin mail)"}
                    </span>
                    {p.email === ADMIN_EMAIL && (
                      <span className="flex-none rounded-full bg-[var(--lila-palido)] px-2 py-0.5 text-[11px] font-bold text-[var(--lila)]">
                        vos
                      </span>
                    )}
                  </div>
                  <div className="text-[12px] font-medium text-[var(--noche)]/45">
                    Tiene todo
                  </div>
                </div>
                {p.email !== ADMIN_EMAIL && (
                  <button
                    onClick={() => cambiarAcceso(p.id, false)}
                    disabled={accionando === p.id}
                    className="btn-lunar btn-fantasma flex-none !px-3 !py-2 text-[13px] text-[var(--noche)]/40 disabled:opacity-50"
                  >
                    {accionando === p.id ? "…" : "Sacarle el acceso"}
                  </button>
                )}
              </Fila>
            ))}
          </ul>
        )}
      </Seccion>
    </Hoja>
  )
}

/* ---------- Piezas ---------- */

/** La luna de la marca. Es el único adorno del panel y alcanza. */
function Luna() {
  return (
    <div
      className="mx-auto mb-6 h-12 w-12 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 33% 30%, var(--lila-claro), var(--lila))",
        boxShadow: "0 0 36px -6px var(--lila)",
      }}
    />
  )
}

function Hoja({
  children,
  ancho,
}: {
  children: React.ReactNode
  ancho?: boolean
}) {
  return (
    <div className="lunar min-h-[100svh]" style={{ background: "var(--crema)" }}>
      <main
        className={
          ancho
            ? "mx-auto max-w-2xl px-4 py-6 sm:py-9"
            : "mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-8"
        }
      >
        {children}
      </main>
    </div>
  )
}

function Tarjeta({
  children,
  centrada,
}: {
  children: React.ReactNode
  centrada?: boolean
}) {
  return (
    <div
      className={`rounded-3xl bg-white/65 p-7 backdrop-blur sm:p-9 ${centrada ? "text-center" : ""}`}
      style={{ boxShadow: "0 18px 48px -32px var(--noche)" }}
    >
      {children}
    </div>
  )
}

function Seccion({
  icono,
  titulo,
  children,
}: {
  icono: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-4 rounded-2xl bg-white/55 p-4 backdrop-blur sm:p-5">
      <h2 className="mb-3 flex items-center gap-2 font-serif text-[17px] font-semibold text-[var(--noche)]">
        <span className="text-[var(--lila)]">{icono}</span>
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function Fila({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--crema)]/70 p-3.5">
      {children}
    </li>
  )
}

function Vacio({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14.5px] leading-relaxed font-medium text-[var(--noche)]/50">
      {children}
    </p>
  )
}
