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
