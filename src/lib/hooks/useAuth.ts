"use client"

import { useCallback, useEffect, useState } from "react"
import type { Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

/**
 * Maneja el login con Google (Supabase Auth) y el chequeo de "habilitado".
 *
 * - `session`    : sesión de Supabase (null = no logueada).
 * - `habilitado` : true si la persona está aprobada (pagó) en la tabla `perfiles`.
 *                  null mientras no se sabe; false si no está aprobada.
 * - `cargando`   : true hasta resolver la sesión inicial.
 */
export function useAuth() {
  const [cargando, setCargando] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  const [habilitado, setHabilitado] = useState<boolean | null>(null)

  const chequearHabilitado = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from("perfiles")
      .select("habilitado")
      .eq("id", userId)
      .maybeSingle()
    if (error) {
      setHabilitado(false)
      return
    }
    setHabilitado(Boolean(data?.habilitado))
  }, [])

  useEffect(() => {
    let activo = true

    supabase.auth.getSession().then(({ data }) => {
      if (!activo) return
      const s = data.session
      setSession(s)
      if (s?.user) {
        void chequearHabilitado(s.user.id).finally(() => {
          if (activo) setCargando(false)
        })
      } else {
        setHabilitado(null)
        setCargando(false)
      }
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      if (!activo) return
      setSession(s)
      if (s?.user) {
        setHabilitado(null)
        void chequearHabilitado(s.user.id)
      } else {
        setHabilitado(null)
      }
    })

    return () => {
      activo = false
      sub.subscription.unsubscribe()
    }
  }, [chequearHabilitado])

  const loginConGoogle = useCallback(async () => {
    // Vuelve a la MISMA página desde donde se logueó (app o /panel).
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + window.location.pathname },
    })
  }, [])

  const cerrarSesion = useCallback(async () => {
    await supabase.auth.signOut()
    setHabilitado(null)
  }, [])

  const reintentarChequeo = useCallback(() => {
    if (session?.user) {
      setHabilitado(null)
      void chequearHabilitado(session.user.id)
    }
  }, [session, chequearHabilitado])

  /**
   * LA VUELTA DE MERCADO PAGO.
   *
   * Después de pagar, MP devuelve a `/app?pago=listo`. El problema es que el
   * aviso del webhook y la vuelta de la persona son dos caminos separados que
   * corren al mismo tiempo, y a veces ella llega primero: si solo se
   * consultara una vez, se encontraría todavía bloqueada justo después de
   * haber pagado, que es el peor momento para desconfiar de una app.
   *
   * Por eso se pregunta varias veces, cada dos segundos, hasta que aparece
   * habilitada o se agotan los intentos. Si se agotan, queda el botón de
   * "ya me activaron, revisá de nuevo" como salida.
   */
  const userId = session?.user?.id
  useEffect(() => {
    if (!userId) return
    if (typeof window === "undefined") return

    const params = new URLSearchParams(window.location.search)
    if (params.get("pago") !== "listo") return

    let intentos = 0
    let vivo = true

    const preguntar = async () => {
      if (!vivo) return
      intentos++

      const { data } = await supabase
        .from("perfiles")
        .select("habilitado")
        .eq("id", userId)
        .maybeSingle()

      if (!vivo) return

      if (data?.habilitado) {
        setHabilitado(true)
        /* Se limpia el parámetro para que al recargar no vuelva a preguntar. */
        window.history.replaceState({}, "", window.location.pathname)
        return
      }

      if (intentos < 8) {
        setTimeout(preguntar, 2000)
      }
    }

    void preguntar()
    return () => {
      vivo = false
    }
  }, [userId])

  return {
    cargando,
    session,
    habilitado,
    email: session?.user?.email ?? null,
    loginConGoogle,
    cerrarSesion,
    reintentarChequeo,
  }
}

export type AuthApi = ReturnType<typeof useAuth>
