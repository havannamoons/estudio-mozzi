"use client"

import { useState } from "react"
import { ToastProvider, useToast } from "@/lib/hooks/useToast"
import { ACCESO_ABIERTO, APP_PAUSADA, SALTEAR_LOGIN_EN_DEV } from "@/lib/constants"
import { useEstudio } from "@/lib/hooks/useEstudio"
import { useAuth } from "@/lib/hooks/useAuth"
import { FondoLunar } from "./FondoLunar"
import { Header } from "./Header"
import { ModoSelector } from "./ModoSelector"
import { Sidebar } from "./Sidebar"
import { MobileTemaSelector } from "./MobileTemaSelector"
import { Paywall } from "./Paywall"
import { LIMITES, modoAbierto, nivelDe, temaAbierto } from "@/lib/plan"
import { ContenidoTema } from "./ContenidoTema"
import { SimulacroMode } from "./SimulacroMode"
import { MatchMode } from "./MatchMode"
import { ClozeMode } from "./ClozeMode"
import { OralMode } from "./OralMode"
import { ToastViewport } from "./Toast"
import { Welcome } from "./Welcome"
import { SesionTerminada } from "./SesionTerminada"
import { AppPausada } from "./AppPausada"
import { LoginGate } from "./LoginGate"
import { PendienteAprobacion } from "./PendienteAprobacion"
import { Luna, Saludando } from "@/components/landing/Personajes"
import { cn } from "@/lib/utils"
import { MateriaProvider } from "@/lib/materias/contexto"
import { getContenido, getMateria } from "@/lib/materias"
import { RachaProvider } from "@/lib/hooks/useRacha"
import { FestejoRacha } from "./Racha"

/**
 * La app de estudio, para UNA materia. El slug viene de la URL
 * (`/app/psicoanalisis`) y define qué contenido cargan todos los modos.
 */
export function EstudioApp({ slug }: { slug: string }) {
  const materia = getMateria(slug)
  const contenido = getContenido(slug)

  // No debería pasar (la ruta valida antes), pero si pasa es mejor un cartel
  // que una pantalla en blanco.
  if (!materia || !contenido) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="glass-strong rounded-3xl p-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Esa materia todavía no está disponible.
        </div>
      </main>
    )
  }

  return (
    /* La racha va POR ENCIMA de la materia: es de la persona, no de
       Psicoanálisis. Si mañana estudia Estadística, la racha sigue viva. */
    <RachaProvider>
      <MateriaProvider valor={{ materia, contenido }}>
        <ToastProvider>
          <CapaLunar>
            <EstudioAppInner />
            <ToastViewport />
            <FestejoRacha />
          </CapaLunar>
        </ToastProvider>
      </MateriaProvider>
    </RachaProvider>
  )
}

/**
 * Envuelve toda la app con el sistema visual de Estudio Lunar y le pasa el
 * modo noche cuando el tema está en oscuro. Va una sola vez acá arriba para
 * que ninguna pantalla de adentro tenga que acordarse de ponerlo.
 */
function CapaLunar({ children }: { children: React.ReactNode }) {
  // La app va siempre en claro: el modo noche se sacó por pedido.



  return (
    <>
      <div className="lunar app min-h-[100svh]">
        <FondoLunar />
        {children}
      </div>
      {/* Se asoma del borde derecho y saluda. Va FUERA de `.lunar` a
          propósito: ese contenedor tiene `overflow-x: clip`, que en Chrome
          recorta también los elementos fijos — ahí se perdía antes.
          El color va literal porque las variables de la marca viven adentro. */}
      <div className="bichito-borde" aria-hidden="true">
        <Saludando size={150} color="#FFAE24" />
      </div>
    </>
  )
}

/**
 * Aparece entre pasos del login. Va con la estética Lunar para que no
 * parpadee una pantalla oscura en medio del flujo de entrada.
 */
function Cargando() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-5">
      <div className="respira">
        <Luna size={90} />
      </div>
      <p className="text-[15px] font-bold text-[var(--noche)]/45">Cargando…</p>
    </div>
  )
}

function EstudioAppInner() {
  const auth = useAuth()
  const api = useEstudio()
  const { push: toast } = useToast()
  /* Qué quiso abrir y no pudo. null = no hay nada bloqueado en pantalla. */
  const [bloqueo, setBloqueo] = useState<
    { tipo: "tema"; nombre: string } | { tipo: "modo"; nombre: string } | null
  >(null)

  // === Pausa total (bloqueo del link online) ===
  // Cuando APP_PAUSADA = true, la copia PUBLICADA (internet) muestra "No disponible por ahora".
  // En desarrollo local (tu compu) NUNCA se pausa, así podés seguir trabajando.
  if (APP_PAUSADA && process.env.NODE_ENV === "production") {
    return <AppPausada />
  }

  // === Gate de acceso (login con Google + aprobación) ===
  // Se saltea cuando ACCESO_ABIERTO = true (app gratis para todos) y también
  // en desarrollo, para poder trabajar en el diseño sin loguearse. En el sitio
  // publicado NODE_ENV vale "production", así que ahí el gate sigue activo.
  const enDesarrollo = process.env.NODE_ENV !== "production"
  /* El sitio de preview (donde miramos los cambios desde el celu) tampoco
     pide login: el dominio no está autorizado en Google, así que el botón
     fallaría igual. Se chequea por NOMBRE DE DOMINIO, no por una variable:
     así es imposible que este permiso llegue al sitio que está a la venta. */
  const enPreview =
    typeof window !== "undefined" &&
    window.location.hostname.startsWith("estudio-lunar-preview")
  const gateActivo =
    !ACCESO_ABIERTO && !(SALTEAR_LOGIN_EN_DEV && (enDesarrollo || enPreview))

  if (gateActivo) {
    // 1. Resolviendo sesión de Supabase.
    if (auth.cargando) {
      return <Cargando />
    }
    // 2. Sin sesión → login con Google.
    if (!auth.session) {
      return <LoginGate auth={auth} />
    }
    // 3. Logueada pero todavía chequeando si está habilitada.
    if (auth.habilitado === null) {
      return <Cargando />
    }
    // 4. Logueada pero acceso no habilitado (aún no confirmada la compra).
    if (!auth.habilitado) {
      return <PendienteAprobacion auth={auth} />
    }
  }

  // Hidratando localStorage (progreso, etc.).
  if (!api.hidratado) {
    return <Cargando />
  }

  // Primera visita → bienvenida.
  if (api.verBienvenida) {
    return <Welcome onEmpezar={api.cerrarBienvenida} />
  }

  // El resumen de sesión ocupa la pantalla entera: es un momento de cierre,
  // no un panel más entre otros.
  if (api.verResumen) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <Header />
        <SesionTerminada api={api} />
      </main>
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

  /* ── Los tres niveles de acceso ───────────────────────────────────────
     Sin sesión se ve la muestra; con cuenta se abre un poco más; pagando
     se abre todo. El candado se dibuja siempre, para que nadie se choque
     con un cobro de sorpresa en la mitad de una sesión de estudio. */
  const nivel = nivelDe(Boolean(auth.session), auth.habilitado)
  const orden = api.contenido.temas.map((t) => t.id)
  const temasBloqueados = new Set(
    orden.filter((id) => !temaAbierto(nivel, id, orden)),
  )
  const NOMBRE_MODO: Record<string, string> = {
    estudio: "La teoría",
    match: "Relacionar",
    cloze: "Completar frases",
    simulacro: "El simulacro",
    oral: "El oral",
  }
  const modosBloqueados = new Set(
    Object.keys(NOMBRE_MODO).filter(
      (m) => !modoAbierto(nivel, m as typeof api.modo),
    ),
  )

  /* Envolvemos las dos acciones que pueden chocar con un límite. El resto
     de la api pasa igual, así ningún componente se entera de esto. */
  const apiConCandado = {
    ...api,
    seleccionarTema: (id: string) => {
      if (temasBloqueados.has(id)) {
        const t = api.contenido.temas.find((x) => x.id === id)
        setBloqueo({ tipo: "tema", nombre: t?.titulo ?? "Ese tema" })
        return
      }
      api.seleccionarTema(id)
    },
    cambiarModo: (m: typeof api.modo) => {
      if (modosBloqueados.has(m)) {
        setBloqueo({ tipo: "modo", nombre: NOMBRE_MODO[m] ?? "Esa actividad" })
        return
      }
      api.cambiarModo(m)
    },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <Header onReset={api.modo === "estudio" ? handleReset : undefined} />
        {/* Qué nivel está viendo. Va a la vista y no escondido en un menú:
            alguien que no sabe que está en la muestra cree que la app es así
            de chica, y se va sin entender que hay más. */}
        {nivel !== "completo" && (
          <div
            className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3"
            style={{ background: "color-mix(in srgb, var(--lila) 9%, transparent)" }}
          >
            <span className="text-[14px] leading-snug font-bold text-[var(--noche)]/70">
              {LIMITES[nivel].etiqueta}
              <span className="font-medium text-[var(--noche)]/45">
                {" · "}
                {orden.length - temasBloqueados.size} de {orden.length} temas
                {" · "}
                {LIMITES[nivel].preguntasPorTema} preguntas por tema
              </span>
            </span>
            <button
              onClick={() =>
                setBloqueo({ tipo: "modo", nombre: "El acceso completo" })
              }
              className="btn-lunar btn-lila !px-4 !py-2 text-[14px]"
            >
              {nivel === "muestra" ? "Crear mi cuenta" : "Desbloquear todo"}
            </button>
          </div>
        )}

        <ModoSelector
          modo={api.modo}
          onChange={apiConCandado.cambiarModo}
          bloqueados={modosBloqueados}
        />

        {bloqueo && (
          <Paywall
            nivel={nivel}
            motivo={bloqueo}
            totalTemas={api.contenido.temas.length}
            auth={auth}
            onCerrar={() => setBloqueo(null)}
          />
        )}

        {api.modo === "estudio" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
            {/* En mobile: dropdown nativo arriba (compacto, accesible).
                En desktop (lg+): sidebar completo a la izquierda. */}
            <MobileTemaSelector api={apiConCandado} bloqueados={temasBloqueados} />
            <div className="hidden lg:block">
              <Sidebar api={apiConCandado} bloqueados={temasBloqueados} />
            </div>
            <section className="min-w-0">
              <ContenidoTema
                api={apiConCandado}
                tope={LIMITES[nivel].preguntasPorTema}
                onTope={() =>
                  setBloqueo({ tipo: "modo", nombre: "El resto de las preguntas" })
                }
              />
            </section>
          </div>
        )}
        {api.modo === "match" && (
          <MatchMode
            api={api}
            tope={LIMITES[nivel].pares}
            onTope={() => setBloqueo({ tipo: "modo", nombre: "El resto de los pares" })}
          />
        )}
        {api.modo === "cloze" && (
          <ClozeMode
            api={api}
            tope={LIMITES[nivel].clozes}
            onTope={() => setBloqueo({ tipo: "modo", nombre: "El resto de los clozes" })}
          />
        )}
      {api.modo === "simulacro" && <SimulacroMode api={api} />}
      {api.modo === "oral" && (
        <OralMode
          api={api}
          tope={LIMITES[nivel].oral}
          onTope={() =>
            setBloqueo({ tipo: "modo", nombre: "El resto del oral" })
          }
        />
      )}
    </main>
  )
}
