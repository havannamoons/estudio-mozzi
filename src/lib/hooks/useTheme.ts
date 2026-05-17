"use client"

import { useCallback, useEffect, useState } from "react"
import type { Tema } from "@/lib/types"
import { THEME_KEY } from "@/lib/constants"

export function useTheme() {
  const [tema, setTema] = useState<Tema>("dark")
  const [hidratado, setHidratado] = useState(false)

  useEffect(() => {
    const guardado = (localStorage.getItem(THEME_KEY) as Tema | null) ?? "dark"
    setTema(guardado)
    setHidratado(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    document.documentElement.classList.toggle("dark", tema === "dark")
    localStorage.setItem(THEME_KEY, tema)
  }, [tema, hidratado])

  const toggle = useCallback(() => {
    setTema((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  return { tema, toggle, hidratado }
}
